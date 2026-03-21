export type UserRole = 'worker' | 'employer'
export type AvailabilityStatus = 'available_now' | 'available_today' | 'available_week' | 'not_available'
export type NeedStatus = 'open' | 'filled' | 'cancelled' | 'expired'
export type MatchStatus = 'pending' | 'invited' | 'accepted' | 'rejected' | 'hired'
export type ShiftType = 'mañana' | 'tarde' | 'noche' | 'full_day'

export interface Profile {
  id: string
  role: UserRole
  full_name: string
  phone?: string
  avatar_url?: string
  location_text?: string
  created_at: string
  updated_at: string
}

export interface WorkerProfile {
  id: string
  user_id: string
  job_categories: string[]
  years_experience: number
  bio?: string
  rate_amount: number
  rate_type: string
  rate_visible: boolean
  availability_status: AvailabilityStatus
  availability_updated_at?: string
  preferred_shifts: ShiftType[]
  rating: number
  total_hires: number
  response_time_hours: number
  created_at: string
  updated_at: string
  profiles?: Profile
}

export interface EmployerProfile {
  id: string
  user_id: string
  company_name: string
  company_type?: string
  description?: string
  address?: string
  rating: number
  plan: string
  created_at: string
  updated_at: string
  profiles?: Profile
}

export interface Need {
  id: string
  employer_id: string
  title: string
  category: string
  description?: string
  location_text?: string
  date: string
  start_time: string
  end_time: string
  shift_type?: ShiftType
  rate_amount?: number
  rate_type?: string
  status: NeedStatus
  is_urgent: boolean
  created_at: string
  expires_at?: string
  employer_profiles?: EmployerProfile
}

export interface Match {
  id: string
  need_id: string
  worker_id: string
  employer_id: string
  status: MatchStatus
  match_score: number
  initiated_by: string
  worker_message?: string
  employer_message?: string
  created_at: string
  updated_at: string
  needs?: Need
  worker_profiles?: WorkerProfile
}

export interface Notification {
  id: string
  user_id: string
  type: string
  title: string
  message?: string
  data: Record<string, unknown>
  read: boolean
  created_at: string
}

export interface WorkerFilters {
  category?: string
  availability?: AvailabilityStatus[]
  minExperience?: number
  location?: string
  sortBy?: 'rating' | 'availability' | 'experience'
}
