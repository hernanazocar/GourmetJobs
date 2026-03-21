// @ts-nocheck
import { supabase } from './supabase/client'
import type { WorkerProfile, Need, MatchStatus } from '@/types'

export async function runAutoMatch(needId: string) {
  // 1. Obtener la necesidad
  const { data: need } = await supabase
    .from('needs')
    .select('*')
    .eq('id', needId)
    .single()

  if (!need) return

  // 2. Buscar workers que matchean
  const { data: workers } = await supabase
    .from('worker_profiles')
    .select('*, profiles(*)')
    .contains('job_categories', [need.category])
    .in('availability_status', ['available_now', 'available_today', 'available_week'])

  if (!workers || workers.length === 0) return

  // 3. Calcular score por worker
  const scored = workers
    .map(worker => ({
      ...worker,
      score: calculateMatchScore(worker as WorkerProfile, need as Need)
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 5)

  // 4. Crear matches con status 'pending'
  const matchInserts = scored.map(worker => ({
    need_id: needId,
    worker_id: worker.id,
    employer_id: need.employer_id,
    status: 'pending' as MatchStatus,
    match_score: worker.score,
    initiated_by: 'system'
  }))

  await supabase.from('matches').insert(matchInserts)

  // 5. Notificar a workers
  for (const worker of scored) {
    await supabase.from('notifications').insert({
      user_id: worker.user_id,
      type: 'new_match',
      title: 'Nuevo turno disponible',
      message: `${need.title} — ${need.location_text}`,
      data: { need_id: needId }
    })
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function calculateMatchScore(worker: WorkerProfile, need: Need): number {
  let score = 0

  // Disponibilidad (peso mayor)
  if (worker.availability_status === 'available_now') score += 40
  else if (worker.availability_status === 'available_today') score += 25
  else if (worker.availability_status === 'available_week') score += 10

  // Experiencia
  score += Math.min(worker.years_experience * 3, 30)

  // Rating
  score += (worker.rating / 5) * 20

  // Velocidad de respuesta (menor es mejor)
  if (worker.response_time_hours <= 1) score += 10
  else if (worker.response_time_hours <= 4) score += 5

  return score
}

export async function inviteWorker(
  workerId: string,
  needId: string,
  employerId: string,
  companyName: string,
  needTitle: string,
  workerUserId: string
) {
  // Crear o actualizar match
  await supabase.from('matches').upsert({
    need_id: needId,
    worker_id: workerId,
    employer_id: employerId,
    status: 'invited' as MatchStatus,
    initiated_by: 'employer'
  }, { onConflict: 'need_id,worker_id' })

  // Notificar al trabajador
  await supabase.from('notifications').insert({
    user_id: workerUserId,
    type: 'invitation',
    title: 'Te invitaron a un turno',
    message: `${companyName} te invita para ${needTitle}`,
    data: { need_id: needId, employer_id: employerId }
  })
}

export async function respondToInvitation(
  matchId: string,
  accept: boolean,
  employerUserId: string,
  workerName: string
) {
  const newStatus = accept ? 'accepted' : 'rejected'

  const { data: match } = await supabase
    .from('matches')
    .update({ status: newStatus, updated_at: new Date().toISOString() })
    .eq('id', matchId)
    .select()
    .single()

  if (accept && match) {
    await supabase
      .from('needs')
      .update({ status: 'filled' })
      .eq('id', match.need_id)

    await supabase.from('notifications').insert({
      user_id: employerUserId,
      type: 'match_accepted',
      title: 'Turno confirmado',
      message: `${workerName} aceptó el turno`,
      data: { match_id: matchId }
    })
  }
}
