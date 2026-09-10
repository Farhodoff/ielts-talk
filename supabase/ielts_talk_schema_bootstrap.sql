-- ==============================================================================
-- IELTS TALK - COMPLETE PRODUCTION DATABASE BOOTSTRAP SCHEMA
-- Run this entire script in your new Supabase Project:
-- Supabase Dashboard -> SQL Editor -> New Query -> Paste & Click "Run"
-- ==============================================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ==============================================================================
-- 1. PROFILES & USER ACCOUNTS
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
    email TEXT,
    full_name TEXT,
    avatar_url TEXT,
    theme TEXT DEFAULT 'light',
    notifications_enabled BOOLEAN DEFAULT true,
    total_xp INTEGER DEFAULT 0,
    level INTEGER DEFAULT 1,
    current_streak INTEGER DEFAULT 0,
    last_activity_date DATE,
    role TEXT NOT NULL DEFAULT 'user',
    target_level TEXT DEFAULT 'B2',
    target_goal TEXT DEFAULT 'IELTS 7.5+',
    primary_language TEXT DEFAULT 'en',
    learning_focus TEXT DEFAULT 'en',
    enabled_languages TEXT[] DEFAULT ARRAY['en'],
    google_api_key TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can view own profile" ON public.profiles;
CREATE POLICY "Users can view own profile" ON public.profiles
    FOR SELECT USING (auth.uid() = id);

DROP POLICY IF EXISTS "Users can update own profile" ON public.profiles;
CREATE POLICY "Users can update own profile" ON public.profiles
    FOR UPDATE USING (auth.uid() = id);

DROP POLICY IF EXISTS "Users can insert own profile" ON public.profiles;
CREATE POLICY "Users can insert own profile" ON public.profiles
    FOR INSERT WITH CHECK (auth.uid() = id);

CREATE INDEX IF NOT EXISTS idx_profiles_role ON public.profiles(role);

-- Automatic Profile Creation Trigger on Sign Up
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name, role)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', split_part(NEW.email, '@', 1)),
    CASE WHEN NEW.email IN ('fsoyilov@gmail.com') THEN 'admin' ELSE 'user' END
  )
  ON CONFLICT (id) DO UPDATE
  SET email = EXCLUDED.email,
      updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Helper function: is_admin
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM public.profiles
    WHERE id = auth.uid()
    AND role IN ('admin', 'superadmin')
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ==============================================================================
-- 2. SUBJECTS, FLASHCARDS & STUDY SESSIONS
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.subjects (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    name TEXT NOT NULL,
    color TEXT DEFAULT '#4f46e5',
    teacher_name TEXT,
    room_location TEXT,
    schedule JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE public.subjects ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Users can manage own subjects" ON public.subjects;
CREATE POLICY "Users can manage own subjects" ON public.subjects FOR ALL USING (auth.uid() = user_id);
CREATE INDEX IF NOT EXISTS idx_subjects_user ON public.subjects(user_id);

CREATE TABLE IF NOT EXISTS public.flashcards (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    subject_id UUID REFERENCES public.subjects(id) ON DELETE SET NULL,
    front TEXT NOT NULL,
    back TEXT NOT NULL,
    next_review_date TIMESTAMPTZ DEFAULT NOW(),
    interval INTEGER DEFAULT 0,
    ease_factor REAL DEFAULT 2.5,
    repetitions INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE public.flashcards ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Users can manage own flashcards" ON public.flashcards;
CREATE POLICY "Users can manage own flashcards" ON public.flashcards FOR ALL USING (auth.uid() = user_id);
CREATE INDEX IF NOT EXISTS idx_flashcards_user ON public.flashcards(user_id);
CREATE INDEX IF NOT EXISTS idx_flashcards_subject ON public.flashcards(subject_id);

CREATE TABLE IF NOT EXISTS public.goals (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    title TEXT NOT NULL,
    description TEXT,
    target_date DATE,
    progress INTEGER DEFAULT 0,
    completed BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE public.goals ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Users can manage own goals" ON public.goals;
CREATE POLICY "Users can manage own goals" ON public.goals FOR ALL USING (auth.uid() = user_id);
CREATE INDEX IF NOT EXISTS idx_goals_user ON public.goals(user_id);

CREATE TABLE IF NOT EXISTS public.tasks (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    title TEXT NOT NULL,
    status TEXT DEFAULT 'todo',
    priority TEXT DEFAULT 'medium',
    completed BOOLEAN DEFAULT false,
    due_date DATE,
    goal_id UUID REFERENCES public.goals(id) ON DELETE SET NULL,
    subject_id UUID REFERENCES public.subjects(id) ON DELETE SET NULL,
    estimated_minutes INTEGER,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE public.tasks ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Users can manage own tasks" ON public.tasks;
CREATE POLICY "Users can manage own tasks" ON public.tasks FOR ALL USING (auth.uid() = user_id);
CREATE INDEX IF NOT EXISTS idx_tasks_user ON public.tasks(user_id);

CREATE TABLE IF NOT EXISTS public.study_sessions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    subject_id UUID REFERENCES public.subjects(id) ON DELETE SET NULL,
    start_time TIMESTAMPTZ NOT NULL,
    duration INTEGER NOT NULL,
    type TEXT DEFAULT 'focus',
    mood_before INTEGER,
    mood_after INTEGER,
    completed BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE public.study_sessions ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Users can manage own sessions" ON public.study_sessions;
CREATE POLICY "Users can manage own sessions" ON public.study_sessions FOR ALL USING (auth.uid() = user_id);
CREATE INDEX IF NOT EXISTS idx_sessions_user ON public.study_sessions(user_id);

CREATE TABLE IF NOT EXISTS public.notes (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    subject_id UUID REFERENCES public.subjects(id) ON DELETE SET NULL,
    title TEXT NOT NULL,
    content TEXT,
    attachments JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE public.notes ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Users can manage own notes" ON public.notes;
CREATE POLICY "Users can manage own notes" ON public.notes FOR ALL USING (auth.uid() = user_id);

CREATE TABLE IF NOT EXISTS public.study_notes (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    subject_id UUID REFERENCES public.subjects(id) ON DELETE SET NULL,
    title TEXT NOT NULL,
    content TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE public.study_notes ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Users can manage own study notes" ON public.study_notes;
CREATE POLICY "Users can manage own study notes" ON public.study_notes FOR ALL USING (auth.uid() = user_id);

CREATE TABLE IF NOT EXISTS public.whiteboards (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    title TEXT NOT NULL,
    data JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE public.whiteboards ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Users can manage own whiteboards" ON public.whiteboards;
CREATE POLICY "Users can manage own whiteboards" ON public.whiteboards FOR ALL USING (auth.uid() = user_id);

CREATE TABLE IF NOT EXISTS public.events (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    title TEXT NOT NULL,
    description TEXT,
    event_type TEXT DEFAULT 'general',
    event_date TIMESTAMPTZ NOT NULL,
    notify_before_minutes INTEGER DEFAULT 15,
    is_notified BOOLEAN DEFAULT false,
    repetition_type TEXT DEFAULT 'none',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Users can manage own events" ON public.events;
CREATE POLICY "Users can manage own events" ON public.events FOR ALL USING (auth.uid() = user_id);

-- ==============================================================================
-- 3. SPEAKING COACH & AUDIO SESSIONS
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.conversation_scenarios (
    id VARCHAR(255) PRIMARY KEY,
    title_en TEXT,
    title_uz TEXT NOT NULL,
    emoji TEXT DEFAULT '🗣️',
    difficulty VARCHAR(10) DEFAULT 'B2',
    category VARCHAR(50) DEFAULT 'daily',
    description_uz TEXT,
    opening_line_en TEXT,
    context_prompt TEXT,
    key_phrases JSONB DEFAULT '[]'::jsonb,
    is_custom BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE public.conversation_scenarios ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public read scenarios" ON public.conversation_scenarios;
CREATE POLICY "Public read scenarios" ON public.conversation_scenarios FOR SELECT USING (true);
DROP POLICY IF EXISTS "Public write scenarios" ON public.conversation_scenarios;
CREATE POLICY "Public write scenarios" ON public.conversation_scenarios FOR ALL USING (true);

CREATE TABLE IF NOT EXISTS public.speaking_sessions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    user_email TEXT,
    scenario_id VARCHAR(255),
    persona_title TEXT NOT NULL,
    fluency_score INTEGER DEFAULT 0,
    pronunciation_score INTEGER DEFAULT 0,
    grammar_score INTEGER DEFAULT 0,
    vocabulary_score INTEGER DEFAULT 0,
    overall_score INTEGER DEFAULT 0,
    duration_seconds INTEGER DEFAULT 0,
    feedback TEXT,
    transcript JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE public.speaking_sessions ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Users can view own speaking sessions" ON public.speaking_sessions;
CREATE POLICY "Users can view own speaking sessions" ON public.speaking_sessions FOR SELECT USING (auth.uid() = user_id OR public.is_admin());
DROP POLICY IF EXISTS "Users can insert own speaking sessions" ON public.speaking_sessions;
CREATE POLICY "Users can insert own speaking sessions" ON public.speaking_sessions FOR INSERT WITH CHECK (auth.uid() = user_id OR user_id IS NULL);

CREATE TABLE IF NOT EXISTS public.speaking_coach_sessions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    language TEXT NOT NULL DEFAULT 'en',
    topic TEXT NOT NULL,
    difficulty TEXT NOT NULL DEFAULT 'B2',
    total_turns INTEGER DEFAULT 0,
    duration_seconds INTEGER DEFAULT 0,
    average_score NUMERIC DEFAULT 0,
    transcript JSONB DEFAULT '[]'::jsonb,
    feedback JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE public.speaking_coach_sessions ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Users view own coach sessions" ON public.speaking_coach_sessions;
CREATE POLICY "Users view own coach sessions" ON public.speaking_coach_sessions FOR ALL USING (auth.uid() = user_id OR public.is_admin());

CREATE TABLE IF NOT EXISTS public.speaking_errors (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    language TEXT NOT NULL DEFAULT 'en',
    verbatim TEXT NOT NULL,
    correction TEXT NOT NULL,
    explanation TEXT,
    category TEXT DEFAULT 'grammar',
    times_reviewed INTEGER DEFAULT 0,
    last_reviewed_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE public.speaking_errors ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Users manage own speaking errors" ON public.speaking_errors;
CREATE POLICY "Users manage own speaking errors" ON public.speaking_errors FOR ALL USING (auth.uid() = user_id);

CREATE TABLE IF NOT EXISTS public.speaking_vocabularies (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    word TEXT NOT NULL,
    meaning TEXT NOT NULL,
    ipa TEXT,
    examples JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE public.speaking_vocabularies ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Users manage own speaking vocabs" ON public.speaking_vocabularies;
CREATE POLICY "Users manage own speaking vocabs" ON public.speaking_vocabularies FOR ALL USING (auth.uid() = user_id);

-- ==============================================================================
-- 4. DIAGNOSTIC, CURRICULUM, MASTERY & LEARNING PLANS
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.diagnostic_sessions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    language TEXT NOT NULL DEFAULT 'en',
    current_step INTEGER NOT NULL DEFAULT 0,
    answers JSONB DEFAULT '{}'::jsonb,
    start_time TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    status TEXT DEFAULT 'in_progress',
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);
ALTER TABLE public.diagnostic_sessions ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Users manage own diag sessions" ON public.diagnostic_sessions;
CREATE POLICY "Users manage own diag sessions" ON public.diagnostic_sessions FOR ALL USING (auth.uid() = user_id);

CREATE TABLE IF NOT EXISTS public.diagnostic_results (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    language TEXT NOT NULL DEFAULT 'en',
    estimated_level TEXT NOT NULL,
    score NUMERIC NOT NULL,
    confidence NUMERIC DEFAULT 0,
    weaknesses JSONB DEFAULT '[]'::jsonb,
    strengths JSONB DEFAULT '[]'::jsonb,
    breakdown JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);
ALTER TABLE public.diagnostic_results ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Users view own diag results" ON public.diagnostic_results;
CREATE POLICY "Users view own diag results" ON public.diagnostic_results FOR ALL USING (auth.uid() = user_id);

CREATE TABLE IF NOT EXISTS public.lesson_progress (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    lesson_id TEXT NOT NULL,
    language TEXT NOT NULL DEFAULT 'en',
    current_step_index INTEGER NOT NULL DEFAULT 0,
    is_completed BOOLEAN DEFAULT false,
    score NUMERIC DEFAULT 0,
    answers JSONB DEFAULT '{}'::jsonb,
    completed_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);
ALTER TABLE public.lesson_progress ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Users manage own lesson progress" ON public.lesson_progress;
CREATE POLICY "Users manage own lesson progress" ON public.lesson_progress FOR ALL USING (auth.uid() = user_id);

CREATE TABLE IF NOT EXISTS public.personal_learning_goals (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    language TEXT NOT NULL DEFAULT 'en',
    goal_type TEXT NOT NULL,
    current_level TEXT NOT NULL,
    target_level TEXT NOT NULL,
    target_goal TEXT,
    available_daily_minutes INTEGER DEFAULT 30,
    study_intensity TEXT DEFAULT 'moderate',
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE public.personal_learning_goals ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Users manage own learning goals" ON public.personal_learning_goals;
CREATE POLICY "Users manage own learning goals" ON public.personal_learning_goals FOR ALL USING (auth.uid() = user_id);

CREATE TABLE IF NOT EXISTS public.personal_roadmaps (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    language TEXT NOT NULL DEFAULT 'en',
    roadmap_data JSONB NOT NULL,
    overall_progress NUMERIC DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE public.personal_roadmaps ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Users manage own roadmaps" ON public.personal_roadmaps;
CREATE POLICY "Users manage own roadmaps" ON public.personal_roadmaps FOR ALL USING (auth.uid() = user_id);

CREATE TABLE IF NOT EXISTS public.mastery_evidence (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    language TEXT NOT NULL DEFAULT 'en',
    skill TEXT NOT NULL,
    score NUMERIC NOT NULL,
    evidence_type TEXT NOT NULL,
    metadata JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE public.mastery_evidence ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Users manage own evidence" ON public.mastery_evidence;
CREATE POLICY "Users manage own evidence" ON public.mastery_evidence FOR ALL USING (auth.uid() = user_id);

-- ==============================================================================
-- 5. LEADERBOARD, REVIEWS, SUBSCRIPTIONS & TELEGRAM
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.user_leaderboard (
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
    full_name TEXT,
    avatar_url TEXT,
    total_xp INTEGER DEFAULT 0,
    streak INTEGER DEFAULT 0,
    updated_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE public.user_leaderboard ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public read leaderboard" ON public.user_leaderboard;
CREATE POLICY "Public read leaderboard" ON public.user_leaderboard FOR SELECT USING (true);
DROP POLICY IF EXISTS "Users update own leaderboard" ON public.user_leaderboard;
CREATE POLICY "Users update own leaderboard" ON public.user_leaderboard FOR ALL USING (auth.uid() = user_id);

CREATE TABLE IF NOT EXISTS public.app_reviews (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    rating INT NOT NULL CHECK (rating >= 1 AND rating <= 5),
    comment TEXT,
    category VARCHAR(50) DEFAULT 'general',
    user_email TEXT,
    user_name TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE public.app_reviews ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public insert reviews" ON public.app_reviews;
CREATE POLICY "Public insert reviews" ON public.app_reviews FOR INSERT TO anon, authenticated WITH CHECK (true);
DROP POLICY IF EXISTS "Public select reviews" ON public.app_reviews;
CREATE POLICY "Public select reviews" ON public.app_reviews FOR SELECT USING (true);

CREATE TABLE IF NOT EXISTS public.user_subscriptions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL UNIQUE,
    plan_tier TEXT NOT NULL DEFAULT 'free',
    status TEXT NOT NULL DEFAULT 'active',
    valid_until TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE public.user_subscriptions ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Users read own subscription" ON public.user_subscriptions;
CREATE POLICY "Users read own subscription" ON public.user_subscriptions FOR SELECT USING (auth.uid() = user_id);

CREATE TABLE IF NOT EXISTS public.user_notifications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    title TEXT NOT NULL,
    message TEXT NOT NULL,
    type TEXT DEFAULT 'system',
    is_read BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE public.user_notifications ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Users manage own notifications" ON public.user_notifications;
CREATE POLICY "Users manage own notifications" ON public.user_notifications FOR ALL USING (auth.uid() = user_id);

CREATE TABLE IF NOT EXISTS public.telegram_users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    telegram_id BIGINT UNIQUE NOT NULL,
    username TEXT,
    first_name TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE public.telegram_users ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Users manage telegram link" ON public.telegram_users;
CREATE POLICY "Users manage telegram link" ON public.telegram_users FOR ALL USING (auth.uid() = user_id);

-- ==============================================================================
-- BOOTSTRAP COMPLETE! All IELTS Talk tables created successfully.
-- ==============================================================================
