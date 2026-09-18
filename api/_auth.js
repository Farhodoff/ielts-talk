import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL =
  process.env.VITE_SUPABASE_URL ||
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  'https://qmuimxnknxwarvnkpnlo.supabase.co';
const DEFAULT_SUPABASE_ANON_KEY = 'sb_publishable_6g0Ei_1Cw46e1mJLKj_1Ug_sOmhlgoI';

const isValidAnonKey = (key) => {
  if (!key || typeof key !== 'string') return false;
  const trimmed = key.trim();
  if (
    trimmed === '[SENSITIVE]' ||
    trimmed.includes('placeholder') ||
    trimmed.includes('your_supabase') ||
    trimmed === 'undefined' ||
    trimmed === 'null' ||
    trimmed === ''
  ) {
    return false;
  }
  if (trimmed.startsWith('sb_publishable_') && trimmed.length > 25) return true;
  if (trimmed.startsWith('eyJ') && trimmed.split('.').length === 3 && trimmed.length > 50) return true;
  return false;
};

const rawAnonKey =
  process.env.VITE_SUPABASE_ANON_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

export const SUPABASE_ANON_KEY = isValidAnonKey(rawAnonKey)
  ? rawAnonKey.trim()
  : DEFAULT_SUPABASE_ANON_KEY;

/**
 * Extract bearer token from either Fetch Request (Edge) or Node IncomingMessage (Vercel serverless)
 */
export function getBearerToken(req) {
  let authHeader = null;
  if (req && typeof req.headers?.get === 'function') {
    authHeader = req.headers.get('Authorization') || req.headers.get('authorization');
  } else if (req && req.headers) {
    authHeader = req.headers['authorization'] || req.headers['Authorization'];
  }

  if (!authHeader || typeof authHeader !== 'string' || !authHeader.startsWith('Bearer ')) {
    return null;
  }
  const token = authHeader.substring(7).trim();
  return token.length > 0 ? token : null;
}

/**
 * Legacy Telegram WebApp sessions used unsigned deterministic tokens of the shape
 * `tg-jwt-<uuid>`. They were accepted as fully authenticated users without any
 * signature, expiry or Telegram HMAC check, which allowed anyone to mint one with
 * curl. Only real Supabase sessions are trusted now; callers must re-authenticate.
 */
export function isLegacyTelegramToken(token) {
  return typeof token === 'string' && token.startsWith('tg-jwt-');
}

const NON_ROLE_VALUES = new Set(['', 'authenticated', 'anon', 'service_role']);

const PRIVILEGED_ROLES = new Set(['superadmin', 'admin', 'owner']);

export function isPrivilegedRole(role) {
  return PRIVILEGED_ROLES.has(String(role || '').toLowerCase());
}

function normalizeRoleValue(candidate) {
  if (typeof candidate !== 'string') return null;
  const value = candidate.trim().toLowerCase();
  if (!value || NON_ROLE_VALUES.has(value)) return null;
  return value;
}

/**
 * Resolves the application role from Supabase user metadata.
 *
 * `app_metadata` is writable only through the admin API, so it is the only
 * source allowed to grant an elevated role. `user_metadata` can be rewritten by
 * the user themselves via `supabase.auth.updateUser`, so it may describe an
 * ordinary role but never grant admin/superadmin — otherwise any signed-in user
 * could promote themselves by editing their own metadata.
 */
export function getUserRole(user) {
  if (!user) return 'guest';
  const app = user.app_metadata || {};
  const meta = user.user_metadata || {};

  for (const candidate of [app.custom_role, app.role]) {
    const value = normalizeRoleValue(candidate);
    if (value) return value;
  }

  const metaRole = normalizeRoleValue(meta.role);
  if (metaRole && !isPrivilegedRole(metaRole)) return metaRole;

  return 'student';
}

/**
 * Verifies the caller's Supabase JWT access token.
 *
 * Returns { user, error, status }:
 * - no token / anon key  -> { user: null, error: null, status: 0 }  (anonymous caller)
 * - invalid/expired token -> { user: null, error: <message>, status: 401 }
 *
 * Callers MUST honour `error` and respond with `status` instead of silently
 * downgrading an authenticated caller to the anonymous rate-limit bucket.
 */
export async function verifyAuth(req) {
  const token = getBearerToken(req);
  if (!token || token === SUPABASE_ANON_KEY) {
    return { user: null, error: null, status: 0 };
  }

  if (isLegacyTelegramToken(token)) {
    return {
      user: null,
      error:
        'Legacy Telegram session format is no longer supported. Please sign in to Telegram again to obtain a valid session.',
      status: 401,
    };
  }

  try {
    const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      auth: { persistSession: false, autoRefreshToken: false },
    });
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser(token);
    if (error || !user) {
      return {
        user: null,
        error: 'Invalid or expired authentication session.',
        status: 401,
      };
    }
    return { user, error: null, status: 0 };
  } catch (err) {
    console.warn('[Auth] Token verification failed:', err?.message || err);
    return {
      user: null,
      error: 'Authentication verification failed.',
      status: 401,
    };
  }
}
