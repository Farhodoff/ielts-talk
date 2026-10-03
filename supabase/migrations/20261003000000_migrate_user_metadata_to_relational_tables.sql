-- ====================================================================
-- IELTS Talk - Relational Migration from Auth user_metadata
-- Migration: 20261003000000_migrate_user_metadata_to_relational_tables.sql
-- Description: Creates clean relational tables for Daily Reflections,
--              Vocabulary Search History, and Learning Signals so that
--              auth.users.user_metadata is never bloated with operational data.
-- ====================================================================

-- 1. user_daily_reflections: Daily journal and discipline scores
CREATE TABLE IF NOT EXISTS public.user_daily_reflections (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    reflection_date DATE NOT NULL,
    text TEXT NOT NULL,
    score NUMERIC DEFAULT 85,
    feedback TEXT DEFAULT '',
    strengths JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now(),
    CONSTRAINT unique_user_reflection_date UNIQUE (user_id, reflection_date)
);

ALTER TABLE public.user_daily_reflections ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can read own daily reflections" ON public.user_daily_reflections;
DROP POLICY IF EXISTS "Users can insert own daily reflections" ON public.user_daily_reflections;
DROP POLICY IF EXISTS "Users can update own daily reflections" ON public.user_daily_reflections;
DROP POLICY IF EXISTS "Users can delete own daily reflections" ON public.user_daily_reflections;

CREATE POLICY "Users can read own daily reflections"
    ON public.user_daily_reflections FOR SELECT TO authenticated
    USING (auth.uid() = user_id OR public.is_admin());

CREATE POLICY "Users can insert own daily reflections"
    ON public.user_daily_reflections FOR INSERT TO authenticated
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own daily reflections"
    ON public.user_daily_reflections FOR UPDATE TO authenticated
    USING (auth.uid() = user_id OR public.is_admin());

CREATE POLICY "Users can delete own daily reflections"
    ON public.user_daily_reflections FOR DELETE TO authenticated
    USING (auth.uid() = user_id OR public.is_admin());

CREATE INDEX IF NOT EXISTS idx_daily_reflections_user_date ON public.user_daily_reflections(user_id, reflection_date DESC);


-- 2. user_vocab_history: Recent search history for Vocabulary Builder
CREATE TABLE IF NOT EXISTS public.user_vocab_history (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    word TEXT NOT NULL,
    language TEXT NOT NULL DEFAULT 'en',
    details JSONB DEFAULT '{}'::jsonb,
    searched_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE public.user_vocab_history ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can read own vocab history" ON public.user_vocab_history;
DROP POLICY IF EXISTS "Users can insert own vocab history" ON public.user_vocab_history;
DROP POLICY IF EXISTS "Users can delete own vocab history" ON public.user_vocab_history;

CREATE POLICY "Users can read own vocab history"
    ON public.user_vocab_history FOR SELECT TO authenticated
    USING (auth.uid() = user_id OR public.is_admin());

CREATE POLICY "Users can insert own vocab history"
    ON public.user_vocab_history FOR INSERT TO authenticated
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own vocab history"
    ON public.user_vocab_history FOR DELETE TO authenticated
    USING (auth.uid() = user_id OR public.is_admin());

CREATE INDEX IF NOT EXISTS idx_vocab_history_user_date ON public.user_vocab_history(user_id, searched_at DESC);
CREATE INDEX IF NOT EXISTS idx_vocab_history_user_word ON public.user_vocab_history(user_id, word);


-- 3. user_learning_signals: Adaptive engine learning signals
CREATE TABLE IF NOT EXISTS public.user_learning_signals (
    id TEXT PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    language TEXT NOT NULL DEFAULT 'en',
    type TEXT NOT NULL,
    signal_data JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE public.user_learning_signals ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can read own learning signals" ON public.user_learning_signals;
DROP POLICY IF EXISTS "Users can insert own learning signals" ON public.user_learning_signals;
DROP POLICY IF EXISTS "Users can delete own learning signals" ON public.user_learning_signals;

CREATE POLICY "Users can read own learning signals"
    ON public.user_learning_signals FOR SELECT TO authenticated
    USING (auth.uid() = user_id OR public.is_admin());

CREATE POLICY "Users can insert own learning signals"
    ON public.user_learning_signals FOR INSERT TO authenticated
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own learning signals"
    ON public.user_learning_signals FOR DELETE TO authenticated
    USING (auth.uid() = user_id OR public.is_admin());

CREATE INDEX IF NOT EXISTS idx_learning_signals_user_time ON public.user_learning_signals(user_id, created_at DESC);
