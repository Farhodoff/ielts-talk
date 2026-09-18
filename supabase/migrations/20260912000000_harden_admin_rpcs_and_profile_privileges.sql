-- Migration: 20260912000000_harden_admin_rpcs_and_profile_privileges.sql
-- Description: Close admin data leaks in the dashboard RPCs and stop profile
--              self-escalation.
--
-- Context of the three problems fixed here:
--
-- 1. get_admin_all_users() was granted to `anon` and, when is_admin() returned
--    false, it returned the ENTIRE profiles table instead of nothing. Because
--    the publishable anon key ships inside the browser bundle, anyone could
--    POST /rest/v1/rpc/get_admin_all_users and dump every user's email.
-- 2. get_admin_all_sessions() and get_admin_database_metrics() were
--    SECURITY DEFINER (so RLS does not apply) with NO admin check at all and
--    EXECUTE granted to `anon`. Anyone could read up to 500 rows of every
--    user's speaking/study sessions, transcripts included.
-- 3. Profiles UPDATE policy allows `auth.uid() = id`, i.e. a user may update
--    every column of their own row. is_admin() compared public.profiles.email
--    against the superadmin address, so a single PATCH setting
--    profiles.email = 'fsoyilov@gmail.com' was enough to become admin.

BEGIN;

-- ---------------------------------------------------------------------------
-- 1. is_admin() only trusts identities the authentication system owns:
--    the signed JWT claims and auth.users. public.profiles.email is no longer
--    consulted, and app_metadata.custom_role (writable only through the admin
--    API) is honoured so server-side role grants keep working.
-- ---------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN
LANGUAGE plpgsql
STABLE
SECURITY DEFINER
SET search_path = public, auth
AS $$
DECLARE
    _uid UUID;
    _jwt_email TEXT;
    _jwt_role TEXT;
    _auth_email TEXT;
    _profile_role TEXT;
BEGIN
    _uid := auth.uid();

    BEGIN
        _jwt_email := LOWER(TRIM(COALESCE(auth.jwt() ->> 'email', '')));
        _jwt_role := LOWER(TRIM(COALESCE(auth.jwt() -> 'app_metadata' ->> 'custom_role', '')));
    EXCEPTION WHEN OTHERS THEN
        _jwt_email := '';
        _jwt_role := '';
    END;

    -- Superadmin allow-list, checked against signed claims only.
    IF _jwt_email = 'fsoyilov@gmail.com' THEN
        RETURN TRUE;
    END IF;

    -- Role granted through the Supabase admin API (api/admin/role.js).
    IF _jwt_role IN ('admin', 'superadmin') THEN
        RETURN TRUE;
    END IF;

    IF _uid IS NULL THEN
        RETURN FALSE;
    END IF;

    -- Authoritative account email, read from auth.users (bypasses RLS).
    SELECT LOWER(TRIM(COALESCE(email, '')))
    INTO _auth_email
    FROM auth.users
    WHERE id = _uid;

    IF _auth_email = 'fsoyilov@gmail.com' THEN
        RETURN TRUE;
    END IF;

    -- Server-managed application role. Users cannot raise this themselves:
    -- see the protect_profile_privileges trigger below.
    SELECT LOWER(TRIM(COALESCE(role, '')))
    INTO _profile_role
    FROM public.profiles
    WHERE id = _uid;

    IF _profile_role IN ('admin', 'superadmin') THEN
        RETURN TRUE;
    END IF;

    RETURN FALSE;
END;
$$;

REVOKE ALL ON FUNCTION public.is_admin() FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.is_admin() TO anon, authenticated, service_role;

-- ---------------------------------------------------------------------------
-- 2. profiles.role / profiles.email can no longer be self-assigned.
-- ---------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION public.protect_profile_privileges()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, auth
AS $$
DECLARE
    _account_email TEXT;
BEGIN
    -- Admin API / service_role writes (no end-user session) pass through.
    IF auth.uid() IS NULL THEN
        RETURN NEW;
    END IF;

    -- Existing administrators may manage roles.
    IF public.is_admin() THEN
        RETURN NEW;
    END IF;

    IF NEW.role IS DISTINCT FROM OLD.role THEN
        RAISE EXCEPTION 'profiles.role can only be changed by an administrator'
            USING ERRCODE = '42501';
    END IF;

    IF NEW.email IS DISTINCT FROM OLD.email THEN
        SELECT LOWER(TRIM(COALESCE(email, '')))
        INTO _account_email
        FROM auth.users
        WHERE id = auth.uid();

        IF NEW.email IS NULL
           OR LOWER(TRIM(NEW.email)) IS DISTINCT FROM _account_email THEN
            RAISE EXCEPTION 'profiles.email must match the authenticated account email'
                USING ERRCODE = '42501';
        END IF;
    END IF;

    RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS protect_profile_privileges ON public.profiles;
CREATE TRIGGER protect_profile_privileges
BEFORE UPDATE ON public.profiles
FOR EACH ROW
EXECUTE FUNCTION public.protect_profile_privileges();

-- ---------------------------------------------------------------------------
-- 3. Dashboard RPCs: admin only, no unauthenticated access, no fallbacks that
--    hand out the full dataset.
-- ---------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION public.get_admin_all_users()
RETURNS TABLE (
    id UUID,
    email TEXT,
    full_name TEXT,
    role TEXT,
    tier TEXT,
    ai_credits INT,
    created_at TIMESTAMPTZ,
    last_sign_in_at TIMESTAMPTZ
)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, auth
AS $$
BEGIN
    -- No "return everything instead" fallback: that is what leaked the whole
    -- user table to any holder of the public anon key.
    IF NOT public.is_admin() THEN
        RAISE EXCEPTION 'Admin privileges required' USING ERRCODE = '42501';
    END IF;

    RETURN QUERY
    SELECT
        u.id,
        u.email::TEXT,
        COALESCE(p.full_name, u.raw_user_meta_data->>'full_name', split_part(u.email, '@', 1))::TEXT AS full_name,
        (CASE WHEN LOWER(TRIM(u.email)) = 'fsoyilov@gmail.com' THEN 'superadmin' ELSE COALESCE(p.role, 'user') END)::TEXT AS role,
        'unlimited'::TEXT AS tier,
        99999::INT AS ai_credits,
        u.created_at,
        u.last_sign_in_at
    FROM auth.users u
    LEFT JOIN public.profiles p ON p.id = u.id
    ORDER BY u.created_at DESC;
END;
$$;

REVOKE ALL ON FUNCTION public.get_admin_all_users() FROM PUBLIC;
REVOKE ALL ON FUNCTION public.get_admin_all_users() FROM anon;
GRANT EXECUTE ON FUNCTION public.get_admin_all_users() TO authenticated, service_role;

CREATE OR REPLACE FUNCTION public.get_admin_all_sessions()
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, auth
AS $$
DECLARE
    _result JSON;
BEGIN
    IF NOT public.is_admin() THEN
        RAISE EXCEPTION 'Admin privileges required' USING ERRCODE = '42501';
    END IF;

    SELECT json_build_object(
        'study_sessions', COALESCE((SELECT json_agg(s) FROM (SELECT * FROM public.study_sessions ORDER BY created_at DESC LIMIT 500) s), '[]'::json),
        'speaking_sessions', COALESCE((SELECT json_agg(s) FROM (SELECT * FROM public.speaking_sessions ORDER BY created_at DESC LIMIT 500) s), '[]'::json),
        'speaking_coach_sessions', COALESCE((SELECT json_agg(s) FROM (SELECT * FROM public.speaking_coach_sessions ORDER BY created_at DESC LIMIT 500) s), '[]'::json),
        'ai_coach_sessions', COALESCE((SELECT json_agg(s) FROM (SELECT * FROM public.ai_coach_sessions ORDER BY created_at DESC LIMIT 500) s), '[]'::json)
    ) INTO _result;

    RETURN _result;
END;
$$;

REVOKE ALL ON FUNCTION public.get_admin_all_sessions() FROM PUBLIC;
REVOKE ALL ON FUNCTION public.get_admin_all_sessions() FROM anon;
GRANT EXECUTE ON FUNCTION public.get_admin_all_sessions() TO authenticated, service_role;

CREATE OR REPLACE FUNCTION public.get_admin_database_metrics()
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
    result jsonb;
BEGIN
    IF NOT public.is_admin() THEN
        RAISE EXCEPTION 'Admin privileges required' USING ERRCODE = '42501';
    END IF;

    SELECT jsonb_build_object(
        'flashcards_count', COALESCE((SELECT COUNT(*) FROM flashcards), 0),
        'study_sessions_count', COALESCE((SELECT COUNT(*) FROM study_sessions), 0),
        'speaking_sessions_count', COALESCE((SELECT COUNT(*) FROM speaking_sessions), 0),
        'speaking_coach_sessions_count', COALESCE((SELECT COUNT(*) FROM speaking_coach_sessions), 0),
        'ai_coach_sessions_count', COALESCE((SELECT COUNT(*) FROM ai_coach_sessions), 0),
        'speaking_errors_count', COALESCE((SELECT COUNT(*) FROM speaking_errors), 0),
        'speaking_vocabularies_count', COALESCE((SELECT COUNT(*) FROM speaking_vocabularies), 0),
        'diagnostic_results_count', COALESCE((SELECT COUNT(*) FROM diagnostic_results), 0),
        'learning_goals_count', COALESCE((SELECT COUNT(*) FROM learning_goals), 0),
        'profiles_count', COALESCE((SELECT COUNT(*) FROM profiles), 0)
    ) INTO result;

    RETURN result;
END;
$$;

REVOKE ALL ON FUNCTION public.get_admin_database_metrics() FROM PUBLIC;
REVOKE ALL ON FUNCTION public.get_admin_database_metrics() FROM anon;
GRANT EXECUTE ON FUNCTION public.get_admin_database_metrics() TO authenticated, service_role;

-- ---------------------------------------------------------------------------
-- 4. Session tables: anon has no business reading them.
-- ---------------------------------------------------------------------------
DROP POLICY IF EXISTS "Users and admins view study sessions" ON public.study_sessions;
CREATE POLICY "Users and admins view study sessions" ON public.study_sessions FOR SELECT
TO authenticated USING (auth.uid() = user_id OR public.is_admin());

DROP POLICY IF EXISTS "Users and admins read speaking sessions" ON public.speaking_sessions;
CREATE POLICY "Users and admins read speaking sessions" ON public.speaking_sessions FOR SELECT
TO authenticated USING (auth.uid() = user_id OR public.is_admin());

DROP POLICY IF EXISTS "Users and admins read speaking coach sessions" ON public.speaking_coach_sessions;
CREATE POLICY "Users and admins read speaking coach sessions" ON public.speaking_coach_sessions FOR SELECT
TO authenticated USING (auth.uid() = user_id OR public.is_admin());

DROP POLICY IF EXISTS "Users and admins view ai coach sessions" ON public.ai_coach_sessions;
CREATE POLICY "Users and admins view ai coach sessions" ON public.ai_coach_sessions FOR SELECT
TO authenticated USING (auth.uid() = user_id OR public.is_admin());

REVOKE SELECT ON public.study_sessions FROM anon;
REVOKE SELECT ON public.speaking_sessions FROM anon;
REVOKE SELECT ON public.speaking_coach_sessions FROM anon;
REVOKE SELECT ON public.ai_coach_sessions FROM anon;

-- ---------------------------------------------------------------------------
-- 5. profiles was world-readable (`USING (true)` for anon + authenticated), so
--    every user's email could be listed directly from the REST API — the same
--    data the leaked RPC returned. Only the owner and administrators may read
--    a row now. The application only ever selects its own row or (from the
--    admin dashboard) as an administrator.
-- ---------------------------------------------------------------------------
DROP POLICY IF EXISTS "Users and admins view profiles" ON public.profiles;
CREATE POLICY "Users and admins view profiles"
ON public.profiles FOR SELECT
TO authenticated
USING (auth.uid() = id OR public.is_admin());

REVOKE SELECT ON public.profiles FROM anon;

COMMIT;
