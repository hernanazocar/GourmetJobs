// @ts-nocheck
"use client"

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase/client'
import type { Profile, WorkerProfile, EmployerProfile } from '@/types'

export function useSession() {
  const [session, setSession] = useState<{ user: { id: string; email?: string } } | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      setLoading(false)
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  return { session, loading }
}

export function useProfile() {
  const { session, loading: sessionLoading } = useSession()
  const [profile, setProfile] = useState<Profile | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (sessionLoading) return
    if (!session) { setLoading(false); return }

    supabase
      .from('profiles')
      .select('*')
      .eq('id', session.user.id)
      .single()
      .then(({ data }) => {
        setProfile(data)
        setLoading(false)
      })
  }, [session, sessionLoading])

  return { profile, loading: loading || sessionLoading, session }
}

export function useWorkerProfile(userId?: string) {
  const [worker, setWorker] = useState<WorkerProfile | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!userId) { setLoading(false); return }

    supabase
      .from('worker_profiles')
      .select('*, profiles(*)')
      .eq('user_id', userId)
      .single()
      .then(({ data }) => {
        setWorker(data)
        setLoading(false)
      })
  }, [userId])

  const updateWorker = async (updates: Partial<WorkerProfile>) => {
    if (!userId) return
    const { data } = await supabase
      .from('worker_profiles')
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq('user_id', userId)
      .select('*, profiles(*)')
      .single()
    if (data) setWorker(data)
    return data
  }

  return { worker, loading, updateWorker }
}

export function useEmployerProfile(userId?: string) {
  const [employer, setEmployer] = useState<EmployerProfile | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!userId) { setLoading(false); return }

    supabase
      .from('employer_profiles')
      .select('*, profiles(*)')
      .eq('user_id', userId)
      .single()
      .then(({ data }) => {
        setEmployer(data)
        setLoading(false)
      })
  }, [userId])

  return { employer, loading }
}
