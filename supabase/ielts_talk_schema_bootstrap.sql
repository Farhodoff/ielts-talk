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
    notification_time TEXT NOT NULL DEFAULT '09:00',
    tour_completed BOOLEAN NOT NULL DEFAULT false,
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

DROP POLICY IF EXISTS "Users and admins view profiles" ON public.profiles;
DROP POLICY IF EXISTS "Users can view own profile" ON public.profiles;
CREATE POLICY "Users and admins view profiles" ON public.profiles
    FOR SELECT TO authenticated, anon USING (true);

DROP POLICY IF EXISTS "Users can update own profile" ON public.profiles;
CREATE POLICY "Users can update own profile" ON public.profiles
    FOR UPDATE USING (auth.uid() = id OR public.is_admin());

DROP POLICY IF EXISTS "Users can insert own profile" ON public.profiles;
CREATE POLICY "Users can insert own profile" ON public.profiles
    FOR INSERT WITH CHECK (auth.uid() = id OR public.is_admin());

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
    language TEXT DEFAULT 'en',
    next_review_date TIMESTAMPTZ DEFAULT NOW(),
    interval INTEGER DEFAULT 0,
    ease_factor REAL DEFAULT 2.5,
    repetitions INTEGER DEFAULT 0,
    deleted_at TIMESTAMPTZ NULL,
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
    deleted_at TIMESTAMPTZ NULL,
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
    start_time TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    end_time TIMESTAMPTZ,
    duration INTEGER NOT NULL DEFAULT 0,
    type TEXT DEFAULT 'focus',
    notes TEXT,
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
    audio_path TEXT,
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
    audio_path TEXT,
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
-- 6. IELTS WRITING & MOCK EXAMS HISTORY
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.ielts_writing_history (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    task_type TEXT NOT NULL,
    prompt TEXT NOT NULL,
    essay TEXT NOT NULL,
    score NUMERIC NOT NULL,
    criteria JSONB DEFAULT '{}'::jsonb,
    feedback TEXT,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);
ALTER TABLE public.ielts_writing_history ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Users view own writing history" ON public.ielts_writing_history;
CREATE POLICY "Users view own writing history" ON public.ielts_writing_history FOR SELECT USING (auth.uid() = user_id OR public.is_admin());
DROP POLICY IF EXISTS "Users insert own writing history" ON public.ielts_writing_history;
CREATE POLICY "Users insert own writing history" ON public.ielts_writing_history FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE INDEX IF NOT EXISTS idx_ielts_writing_user ON public.ielts_writing_history(user_id);

CREATE TABLE IF NOT EXISTS public.mock_exams_history (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    exam_type TEXT NOT NULL,
    level TEXT,
    score NUMERIC NOT NULL,
    total_questions INTEGER NOT NULL,
    band_score NUMERIC,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);
ALTER TABLE public.mock_exams_history ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Users view own mock history" ON public.mock_exams_history;
CREATE POLICY "Users view own mock history" ON public.mock_exams_history FOR SELECT USING (auth.uid() = user_id OR public.is_admin());
DROP POLICY IF EXISTS "Users insert own mock history" ON public.mock_exams_history;
CREATE POLICY "Users insert own mock history" ON public.mock_exams_history FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE INDEX IF NOT EXISTS idx_mock_exams_user ON public.mock_exams_history(user_id);

-- ==============================================================================
-- 7. EXAMS ENGINE (Manager, Take, Questions, Sessions, Answers & Results)
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.exams (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    description TEXT,
    type TEXT NOT NULL DEFAULT 'IELTS',
    is_published BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);
ALTER TABLE public.exams ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Anyone can view published exams" ON public.exams;
CREATE POLICY "Anyone can view published exams" ON public.exams FOR SELECT USING (is_published = true OR public.is_admin());
DROP POLICY IF EXISTS "Admins manage exams" ON public.exams;
CREATE POLICY "Admins manage exams" ON public.exams FOR ALL USING (public.is_admin()) WITH CHECK (public.is_admin());

CREATE TABLE IF NOT EXISTS public.exam_sections (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    exam_id UUID REFERENCES public.exams(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    type TEXT NOT NULL,
    content TEXT,
    audio_url TEXT,
    order_index INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);
ALTER TABLE public.exam_sections ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "View published sections" ON public.exam_sections;
CREATE POLICY "View published sections" ON public.exam_sections FOR SELECT USING (EXISTS (SELECT 1 FROM public.exams WHERE id = exam_sections.exam_id AND (is_published = true OR public.is_admin())));
DROP POLICY IF EXISTS "Admins manage sections" ON public.exam_sections;
CREATE POLICY "Admins manage sections" ON public.exam_sections FOR ALL USING (public.is_admin()) WITH CHECK (public.is_admin());

CREATE TABLE IF NOT EXISTS public.exam_questions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    section_id UUID REFERENCES public.exam_sections(id) ON DELETE CASCADE,
    question_text TEXT NOT NULL,
    type TEXT NOT NULL,
    options JSONB DEFAULT '[]'::jsonb,
    correct_answer TEXT,
    explanation TEXT,
    order_index INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);
ALTER TABLE public.exam_questions ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "View published questions" ON public.exam_questions;
CREATE POLICY "View published questions" ON public.exam_questions FOR SELECT USING (EXISTS (SELECT 1 FROM public.exam_sections JOIN public.exams ON exam_sections.exam_id = exams.id WHERE exam_sections.id = exam_questions.section_id AND (exams.is_published = true OR public.is_admin())));
DROP POLICY IF EXISTS "Admins manage questions" ON public.exam_questions;
CREATE POLICY "Admins manage questions" ON public.exam_questions FOR ALL USING (public.is_admin()) WITH CHECK (public.is_admin());

CREATE TABLE IF NOT EXISTS public.exam_prompts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    section_id UUID REFERENCES public.exam_sections(id) ON DELETE CASCADE,
    prompt_text TEXT NOT NULL,
    type TEXT NOT NULL,
    image_url TEXT,
    time_limit_minutes INTEGER,
    order_index INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);
ALTER TABLE public.exam_prompts ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "View published prompts" ON public.exam_prompts;
CREATE POLICY "View published prompts" ON public.exam_prompts FOR SELECT USING (EXISTS (SELECT 1 FROM public.exam_sections JOIN public.exams ON exam_sections.exam_id = exams.id WHERE exam_sections.id = exam_prompts.section_id AND (exams.is_published = true OR public.is_admin())));
DROP POLICY IF EXISTS "Admins manage prompts" ON public.exam_prompts;
CREATE POLICY "Admins manage prompts" ON public.exam_prompts FOR ALL USING (public.is_admin()) WITH CHECK (public.is_admin());

CREATE TABLE IF NOT EXISTS public.exam_sessions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    exam_id UUID REFERENCES public.exams(id) ON DELETE CASCADE,
    status TEXT NOT NULL DEFAULT 'in_progress',
    started_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
    completed_at TIMESTAMPTZ
);
ALTER TABLE public.exam_sessions ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Users manage own exam sessions" ON public.exam_sessions;
CREATE POLICY "Users manage own exam sessions" ON public.exam_sessions FOR ALL USING (auth.uid() = user_id OR public.is_admin());

CREATE TABLE IF NOT EXISTS public.exam_answers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID REFERENCES public.exam_sessions(id) ON DELETE CASCADE,
    question_id UUID REFERENCES public.exam_questions(id) ON DELETE CASCADE,
    user_answer TEXT,
    is_correct BOOLEAN,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);
ALTER TABLE public.exam_answers ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Users manage own exam answers" ON public.exam_answers;
CREATE POLICY "Users manage own exam answers" ON public.exam_answers FOR ALL USING (EXISTS (SELECT 1 FROM public.exam_sessions WHERE id = exam_answers.session_id AND (auth.uid() = user_id OR public.is_admin())));

CREATE TABLE IF NOT EXISTS public.exam_prompt_responses (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID REFERENCES public.exam_sessions(id) ON DELETE CASCADE,
    prompt_id UUID REFERENCES public.exam_prompts(id) ON DELETE CASCADE,
    text_response TEXT,
    audio_url TEXT,
    ai_score DECIMAL,
    ai_feedback TEXT,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);
ALTER TABLE public.exam_prompt_responses ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Users manage own prompt responses" ON public.exam_prompt_responses;
CREATE POLICY "Users manage own prompt responses" ON public.exam_prompt_responses FOR ALL USING (EXISTS (SELECT 1 FROM public.exam_sessions WHERE id = exam_prompt_responses.session_id AND (auth.uid() = user_id OR public.is_admin())));

CREATE TABLE IF NOT EXISTS public.exam_results (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    exam_id TEXT,
    score INTEGER,
    total_questions INTEGER,
    time_spent_seconds INTEGER,
    completed_at TIMESTAMPTZ,
    details JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE public.exam_results ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Users manage own exam results" ON public.exam_results;
CREATE POLICY "Users manage own exam results" ON public.exam_results FOR ALL USING (auth.uid() = user_id OR public.is_admin());
CREATE INDEX IF NOT EXISTS idx_exam_results_user ON public.exam_results(user_id, created_at DESC);

-- ==============================================================================
-- 8. IELTS GRAMMAR MASTER & DYNAMIC CURRICULUM
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.grammar_lessons (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    language VARCHAR(10) DEFAULT 'en' NOT NULL,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL UNIQUE,
    level VARCHAR(50) NOT NULL,
    category VARCHAR(100) NOT NULL,
    structure TEXT NOT NULL,
    uzbek_meaning TEXT,
    explanation TEXT NOT NULL,
    ielts_relevance TEXT,
    academic_examples JSONB DEFAULT '[]'::jsonb,
    common_mistakes JSONB DEFAULT '[]'::jsonb,
    quiz_questions JSONB DEFAULT '[]'::jsonb,
    order_index INTEGER DEFAULT 0,
    is_published BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);
ALTER TABLE public.grammar_lessons ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public read grammar lessons" ON public.grammar_lessons;
CREATE POLICY "Public read grammar lessons" ON public.grammar_lessons FOR SELECT USING (is_published = true OR public.is_admin());
DROP POLICY IF EXISTS "Admins manage grammar lessons" ON public.grammar_lessons;
CREATE POLICY "Admins manage grammar lessons" ON public.grammar_lessons FOR ALL USING (public.is_admin()) WITH CHECK (public.is_admin());
CREATE INDEX IF NOT EXISTS idx_grammar_lessons_lang ON public.grammar_lessons(language, is_published, order_index);
CREATE INDEX IF NOT EXISTS idx_grammar_lessons_slug ON public.grammar_lessons(slug);

CREATE TABLE IF NOT EXISTS public.english_grammar_progress (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    lesson_slug VARCHAR(255) NOT NULL,
    completed BOOLEAN DEFAULT false,
    score NUMERIC DEFAULT 0,
    total_questions INTEGER DEFAULT 0,
    attempts INTEGER DEFAULT 1,
    last_attempt_at TIMESTAMPTZ DEFAULT now(),
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now(),
    CONSTRAINT unique_user_lesson_progress UNIQUE (user_id, lesson_slug)
);
ALTER TABLE public.english_grammar_progress ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Users manage own grammar progress" ON public.english_grammar_progress;
CREATE POLICY "Users manage own grammar progress" ON public.english_grammar_progress FOR ALL USING (auth.uid() = user_id OR public.is_admin());
CREATE INDEX IF NOT EXISTS idx_eng_grammar_progress_user ON public.english_grammar_progress(user_id);

-- ==============================================================================
-- 9. ADAPTIVE WEEKLY LEARNING PLANS & EVALUATIONS
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.weekly_learning_plans (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    goal_id UUID NOT NULL REFERENCES public.personal_learning_goals(id) ON DELETE CASCADE,
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    week_number INTEGER NOT NULL,
    plan_data JSONB NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    CONSTRAINT unique_goal_week_plan UNIQUE (goal_id, week_number)
);
ALTER TABLE public.weekly_learning_plans ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Users manage own weekly plans" ON public.weekly_learning_plans;
CREATE POLICY "Users manage own weekly plans" ON public.weekly_learning_plans FOR ALL USING (auth.uid() = user_id OR public.is_admin());
CREATE INDEX IF NOT EXISTS idx_plans_user_goal ON public.weekly_learning_plans(user_id, goal_id);

CREATE TABLE IF NOT EXISTS public.weekly_learning_evaluations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    goal_id UUID NOT NULL REFERENCES public.personal_learning_goals(id) ON DELETE CASCADE,
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    week_number INTEGER NOT NULL,
    evaluation_data JSONB NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    CONSTRAINT unique_goal_week_eval UNIQUE (goal_id, week_number)
);
ALTER TABLE public.weekly_learning_evaluations ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Users manage own weekly evals" ON public.weekly_learning_evaluations;
CREATE POLICY "Users manage own weekly evals" ON public.weekly_learning_evaluations FOR ALL USING (auth.uid() = user_id OR public.is_admin());
CREATE INDEX IF NOT EXISTS idx_evals_user_goal ON public.weekly_learning_evaluations(user_id, goal_id);

-- ==============================================================================
-- 10. SCENARIOS, COACH SESSIONS & STUDY ROOMS
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.scenarios (
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
    is_custom BOOLEAN NOT NULL DEFAULT true,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE public.scenarios ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public read scenarios table" ON public.scenarios;
CREATE POLICY "Public read scenarios table" ON public.scenarios FOR SELECT USING (true);
DROP POLICY IF EXISTS "Public write scenarios table" ON public.scenarios;
CREATE POLICY "Public write scenarios table" ON public.scenarios FOR ALL USING (true);

CREATE TABLE IF NOT EXISTS public.coach_sessions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    user_email TEXT,
    persona_title TEXT,
    fluency_score INTEGER DEFAULT 0,
    vocabulary_score INTEGER DEFAULT 0,
    grammar_score INTEGER DEFAULT 0,
    pronunciation_score INTEGER DEFAULT 0,
    overall_score INTEGER DEFAULT 0,
    duration_seconds INTEGER DEFAULT 0,
    audio_path TEXT,
    feedback TEXT,
    transcript JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE public.coach_sessions ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Users manage own coach_sessions" ON public.coach_sessions;
CREATE POLICY "Users manage own coach_sessions" ON public.coach_sessions FOR ALL USING (auth.uid() = user_id OR public.is_admin());

CREATE TABLE IF NOT EXISTS public.ai_coach_sessions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    persona_title TEXT NOT NULL,
    fluency_score INTEGER NOT NULL,
    vocabulary_score INTEGER NOT NULL,
    grammar_score INTEGER NOT NULL,
    pronunciation_score INTEGER NOT NULL,
    overall_score INTEGER DEFAULT 0,
    audio_path TEXT,
    feedback TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);
ALTER TABLE public.ai_coach_sessions ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Users manage own ai_coach_sessions" ON public.ai_coach_sessions;
CREATE POLICY "Users manage own ai_coach_sessions" ON public.ai_coach_sessions FOR ALL USING (auth.uid() = user_id OR public.is_admin());

CREATE TABLE IF NOT EXISTS public.study_rooms (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    room_id TEXT NOT NULL UNIQUE,
    name TEXT NOT NULL,
    description TEXT,
    creator_id TEXT,
    is_private BOOLEAN DEFAULT false,
    share_code TEXT,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE public.study_rooms ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public read study_rooms" ON public.study_rooms;
CREATE POLICY "Public read study_rooms" ON public.study_rooms FOR SELECT USING (true);
DROP POLICY IF EXISTS "Public write study_rooms" ON public.study_rooms;
CREATE POLICY "Public write study_rooms" ON public.study_rooms FOR ALL USING (true) WITH CHECK (true);
CREATE INDEX IF NOT EXISTS idx_study_rooms_id ON public.study_rooms(room_id);

-- ==============================================================================
-- 11. TELEGRAM LINK CODES, ANNOUNCEMENTS, PRESET DECKS & SAVED VOCABULARY
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.telegram_link_codes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL,
    code TEXT NOT NULL UNIQUE,
    telegram_id BIGINT,
    used BOOLEAN DEFAULT false,
    expires_at TIMESTAMPTZ NOT NULL DEFAULT (NOW() + INTERVAL '10 minutes'),
    created_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE public.telegram_link_codes ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public manage telegram link codes" ON public.telegram_link_codes;
CREATE POLICY "Public manage telegram link codes" ON public.telegram_link_codes FOR ALL USING (true) WITH CHECK (true);
CREATE INDEX IF NOT EXISTS idx_tg_link_code ON public.telegram_link_codes(code);

CREATE TABLE IF NOT EXISTS public.admin_announcements (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    message TEXT NOT NULL,
    tag TEXT DEFAULT 'general',
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE public.admin_announcements ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public read announcements" ON public.admin_announcements;
CREATE POLICY "Public read announcements" ON public.admin_announcements FOR SELECT USING (true);
DROP POLICY IF EXISTS "Admins manage announcements" ON public.admin_announcements;
CREATE POLICY "Admins manage announcements" ON public.admin_announcements FOR ALL USING (public.is_admin()) WITH CHECK (public.is_admin());

CREATE TABLE IF NOT EXISTS public.preset_deck_curations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    deck_id TEXT NOT NULL UNIQUE,
    title TEXT NOT NULL,
    level TEXT,
    card_count INTEGER DEFAULT 0,
    cards JSONB DEFAULT '[]'::jsonb,
    approved_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()),
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now())
);
ALTER TABLE public.preset_deck_curations ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public read preset decks" ON public.preset_deck_curations;
CREATE POLICY "Public read preset decks" ON public.preset_deck_curations FOR SELECT USING (true);
DROP POLICY IF EXISTS "Admins manage preset decks" ON public.preset_deck_curations;
CREATE POLICY "Admins manage preset decks" ON public.preset_deck_curations FOR ALL USING (public.is_admin()) WITH CHECK (public.is_admin());

CREATE TABLE IF NOT EXISTS public.admin_preset_albums (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    level TEXT,
    language TEXT DEFAULT 'en',
    card_count INTEGER DEFAULT 0,
    cards JSONB DEFAULT '[]'::jsonb,
    is_published BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE public.admin_preset_albums ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public read admin preset albums" ON public.admin_preset_albums;
CREATE POLICY "Public read admin preset albums" ON public.admin_preset_albums FOR SELECT USING (true);
DROP POLICY IF EXISTS "Admins manage admin preset albums" ON public.admin_preset_albums;
CREATE POLICY "Admins manage admin preset albums" ON public.admin_preset_albums FOR ALL USING (public.is_admin()) WITH CHECK (public.is_admin());

CREATE TABLE IF NOT EXISTS public.user_saved_vocabulary (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    language TEXT NOT NULL DEFAULT 'en',
    term TEXT NOT NULL,
    reading TEXT,
    meaning TEXT NOT NULL,
    example_sentence TEXT,
    example_translation TEXT,
    is_saved BOOLEAN DEFAULT true,
    search_count INTEGER DEFAULT 1,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);
ALTER TABLE public.user_saved_vocabulary ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Users manage own saved vocabulary" ON public.user_saved_vocabulary;
CREATE POLICY "Users manage own saved vocabulary" ON public.user_saved_vocabulary FOR ALL USING (auth.uid() = user_id OR public.is_admin());
CREATE INDEX IF NOT EXISTS idx_user_saved_vocab ON public.user_saved_vocabulary(user_id, language);

-- ==============================================================================
-- 12. STORAGE BUCKET FOR SPEAKING RECORDINGS
-- ==============================================================================
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
    'speaking_audios',
    'speaking_audios',
    false,
    10485760, -- 10MB limit per audio recording
    ARRAY['audio/webm', 'audio/mp4', 'audio/ogg', 'audio/wav', 'audio/mpeg', 'audio/x-m4a']
)
ON CONFLICT (id) DO UPDATE SET
    public = false,
    file_size_limit = 10485760,
    allowed_mime_types = ARRAY['audio/webm', 'audio/mp4', 'audio/ogg', 'audio/wav', 'audio/mpeg', 'audio/x-m4a'];

DROP POLICY IF EXISTS "Users can upload own speaking audio" ON storage.objects;
CREATE POLICY "Users can upload own speaking audio"
ON storage.objects FOR INSERT TO authenticated
WITH CHECK (
    bucket_id = 'speaking_audios' AND (
        (storage.foldername(name))[1] = auth.uid()::text
        OR public.is_admin()
    )
);

DROP POLICY IF EXISTS "Users and admins can view speaking audio" ON storage.objects;
CREATE POLICY "Users and admins can view speaking audio"
ON storage.objects FOR SELECT TO authenticated
USING (
    bucket_id = 'speaking_audios' AND (
        (storage.foldername(name))[1] = auth.uid()::text
        OR public.is_admin()
    )
);

DROP POLICY IF EXISTS "Users and admins can delete speaking audio" ON storage.objects;
CREATE POLICY "Users and admins can delete speaking audio"
ON storage.objects FOR DELETE TO authenticated
USING (
    bucket_id = 'speaking_audios' AND (
        (storage.foldername(name))[1] = auth.uid()::text
        OR public.is_admin()
    )
);

-- ==============================================================================
-- BOOTSTRAP COMPLETE! All IELTS Talk tables, buckets and policies created!
-- ==============================================================================
