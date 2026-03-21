// @ts-nocheck
"use client"

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase/client'
import type { WorkerProfile, WorkerFilters } from '@/types'

export function useAvailableWorkers(filters: WorkerFilters) {
  const [workers, setWorkers] = useState<WorkerProfile[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetch() {
      setLoading(true)
      let query = supabase
        .from('worker_profiles')
        .select('*, profiles(full_name, avatar_url, location_text)')
        .in('availability_status', filters.availability || ['available_now', 'available_today', 'available_week'])

      if (filters.category) {
        query = query.contains('job_categories', [filters.category])
      }
      if (filters.minExperience) {
        query = query.gte('years_experience', filters.minExperience)
      }

      if (filters.sortBy === 'rating') {
        query = query.order('rating', { ascending: false })
      } else if (filters.sortBy === 'experience') {
        query = query.order('years_experience', { ascending: false })
      } else {
        query = query.order('availability_status', { ascending: true })
          .order('rating', { ascending: false })
      }

      const { data } = await query
      setWorkers((data as WorkerProfile[]) || [])
      setLoading(false)
    }

    fetch()
  }, [filters.category, filters.availability, filters.minExperience, filters.sortBy])

  return { workers, loading }
}
