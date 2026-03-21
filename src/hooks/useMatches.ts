// @ts-nocheck
"use client"

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase/client'
import type { Match } from '@/types'
import { respondToInvitation } from '@/lib/matching'

export function useMyMatches(workerId?: string) {
  const [matches, setMatches] = useState<Match[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!workerId) { setLoading(false); return }

    supabase
      .from('matches')
      .select('*, needs(*, employer_profiles(*, profiles(*))), worker_profiles(*, profiles(*))')
      .eq('worker_id', workerId)
      .in('status', ['pending', 'invited'])
      .order('created_at', { ascending: false })
      .then(({ data }) => {
        setMatches(data || [])
        setLoading(false)
      })
  }, [workerId])

  const respond = async (matchId: string, accept: boolean, employerUserId: string, workerName: string) => {
    await respondToInvitation(matchId, accept, employerUserId, workerName)
    setMatches(prev => prev.filter(m => m.id !== matchId))
  }

  return { matches, loading, respond }
}
