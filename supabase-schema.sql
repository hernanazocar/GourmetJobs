-- GourmetJobs Database Schema
-- Execute in Supabase SQL Editor in order

-- Tipos enumerados
CREATE TYPE user_role AS ENUM ('worker', 'employer');
CREATE TYPE availability_status AS ENUM ('available_now', 'available_today', 'available_week', 'not_available');
CREATE TYPE shift_type AS ENUM ('mañana', 'tarde', 'noche', 'full_day');
CREATE TYPE need_status AS ENUM ('open', 'filled', 'cancelled', 'expired');
CREATE TYPE match_status AS ENUM ('pending', 'invited', 'accepted', 'rejected', 'hired');

-- Perfiles base (extiende auth.users)
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  role user_role NOT NULL,
  full_name TEXT NOT NULL,
  phone TEXT,
  avatar_url TEXT,
  location_text TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Perfil trabajador
CREATE TABLE worker_profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID UNIQUE REFERENCES profiles(id) ON DELETE CASCADE,
  job_categories TEXT[] NOT NULL DEFAULT '{}',
  years_experience INTEGER DEFAULT 0,
  bio TEXT,
  rate_amount INTEGER DEFAULT 0,
  rate_type TEXT DEFAULT 'hourly',
  rate_visible BOOLEAN DEFAULT FALSE,
  availability_status availability_status DEFAULT 'not_available',
  availability_updated_at TIMESTAMPTZ,
  preferred_shifts shift_type[] DEFAULT '{}',
  rating DECIMAL(3,2) DEFAULT 0,
  total_hires INTEGER DEFAULT 0,
  response_time_hours INTEGER DEFAULT 24,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Perfil empresa
CREATE TABLE employer_profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID UNIQUE REFERENCES profiles(id) ON DELETE CASCADE,
  company_name TEXT NOT NULL,
  company_type TEXT,
  description TEXT,
  address TEXT,
  rating DECIMAL(3,2) DEFAULT 0,
  plan TEXT DEFAULT 'free',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Necesidades/turnos publicados por empresas
CREATE TABLE needs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  employer_id UUID REFERENCES employer_profiles(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  description TEXT,
  location_text TEXT,
  date DATE NOT NULL,
  start_time TIME NOT NULL,
  end_time TIME NOT NULL,
  shift_type shift_type,
  rate_amount INTEGER,
  rate_type TEXT DEFAULT 'negotiable',
  status need_status DEFAULT 'open',
  is_urgent BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  expires_at TIMESTAMPTZ
);

-- Matches entre necesidades y trabajadores
CREATE TABLE matches (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  need_id UUID REFERENCES needs(id) ON DELETE CASCADE,
  worker_id UUID REFERENCES worker_profiles(id) ON DELETE CASCADE,
  employer_id UUID REFERENCES employer_profiles(id) ON DELETE CASCADE,
  status match_status DEFAULT 'pending',
  match_score INTEGER DEFAULT 0,
  initiated_by TEXT DEFAULT 'system',
  worker_message TEXT,
  employer_message TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(need_id, worker_id)
);

-- Notificaciones
CREATE TABLE notifications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  type TEXT NOT NULL,
  title TEXT NOT NULL,
  message TEXT,
  data JSONB DEFAULT '{}',
  read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- RLS (Row Level Security)
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE worker_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE employer_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE needs ENABLE ROW LEVEL SECURITY;
ALTER TABLE matches ENABLE ROW LEVEL SECURITY;
ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;

-- Políticas
CREATE POLICY "Perfil propio" ON profiles FOR ALL USING (auth.uid() = id);
CREATE POLICY "Profiles publicos lectura" ON profiles FOR SELECT USING (true);
CREATE POLICY "Worker lee su perfil" ON worker_profiles FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Workers publicos" ON worker_profiles FOR SELECT USING (true);
CREATE POLICY "Employer lee su perfil" ON employer_profiles FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Employers publicos" ON employer_profiles FOR SELECT USING (true);
CREATE POLICY "Needs publicas" ON needs FOR SELECT USING (status = 'open');
CREATE POLICY "Employer gestiona sus needs" ON needs FOR ALL USING (
  employer_id IN (SELECT id FROM employer_profiles WHERE user_id = auth.uid())
);
CREATE POLICY "Match visible para involucrados" ON matches FOR SELECT USING (
  worker_id IN (SELECT id FROM worker_profiles WHERE user_id = auth.uid())
  OR employer_id IN (SELECT id FROM employer_profiles WHERE user_id = auth.uid())
);
CREATE POLICY "Employer crea matches" ON matches FOR INSERT WITH CHECK (
  employer_id IN (SELECT id FROM employer_profiles WHERE user_id = auth.uid())
);
CREATE POLICY "Involucrados actualizan match" ON matches FOR UPDATE USING (
  worker_id IN (SELECT id FROM worker_profiles WHERE user_id = auth.uid())
  OR employer_id IN (SELECT id FROM employer_profiles WHERE user_id = auth.uid())
);
CREATE POLICY "Notificaciones propias" ON notifications FOR ALL USING (auth.uid() = user_id);

-- Enable realtime for notifications
ALTER PUBLICATION supabase_realtime ADD TABLE notifications;
