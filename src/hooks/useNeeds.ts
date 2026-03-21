// @ts-nocheck
"use client"

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase/client'
import type { Need } from '@/types'
import { runAutoMatch } from '@/lib/matching'

export function useMyNeeds(employerId?: string) {
  const [needs, setNeeds] = useState<Need[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!employerId) { setLoading(false); return }

    supabase
      .from('needs')
      .select('*, matches(*, worker_profiles(*, profiles(*)))')
      .eq('employer_id', employerId)
      .order('created_at', { ascending: false })
      .then(({ data }) => {
        setNeeds((data as Need[]) || [])
        setLoading(false)
      })
  }, [employerId])

  return { needs, loading }
}

export function useOpenNeeds() {
  const [needs, setNeeds] = useState<Need[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    supabase
      .from('needs')
      .select('*, employer_profiles(*, profiles(*))')
      .eq('status', 'open')
      .order('created_at', { ascending: false })
      .then(({ data }) => {
        setNeeds((data as Need[]) || [])
        setLoading(false)
      })
  }, [])

  return { needs, loading }
}

export function useCreateNeed(employerId?: string) {
  const [creating, setCreating] = useState(false)

  const createNeed = async (form: {
    title: string
    category: string
    date: string
    start_time: string
    end_time: string
    location_text: string
    rate_amount?: number
    rate_type?: string
    is_urgent: boolean
    description?: string
  }) => {
    if (!employerId) return null
    setCreating(true)

    const { data: need, error } = await supabase
      .from('needs')
      .insert({
        ...form,
        employer_id: employerId,
        status: 'open',
        expires_at: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString()
      })
      .select()
      .single()

    if (need && !error) {
      await runAutoMatch(need.id)
    }

    setCreating(false)
    return need
  }

  return { createNeed, creating }
}
