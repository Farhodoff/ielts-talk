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

import crypto from 'crypto';

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const SERVICE_ROLE = process.env.SERVICE_ROLE || process.env.SUPABASE_SERVICE_ROLE_KEY;

export function verifyTelegramWebAppData(initData, botToken) {
  if (!initData || !botToken) return { valid: false };

  try {
    const params = new URLSearchParams(initData);
    const hash = params.get('hash');
    if (!hash) return { valid: false };

    params.delete('hash');
    const sortedKeys = Array.from(params.keys()).sort();
    const dataCheckString = sortedKeys.map((key) => `${key}=${params.get(key)}`).join('\n');

    const secretKey = crypto.createHmac('sha256', 'WebAppData').update(botToken).digest();
    const calculatedHash = crypto.createHmac('sha256', secretKey).update(dataCheckString).digest('hex');

    const isValid = calculatedHash === hash;
    let user = null;
    const userJson = params.get('user');
    if (userJson) {
      user = JSON.parse(userJson);
    }

    return { valid: isValid, user };
  } catch (e) {
    return { valid: false, error: e.message };
  }
}

/**
 * Verifies Supabase JWT access token or signed Telegram WebApp initData.
 * Returns { user, error }
 */
export async function verifyAuth(req) {
  // 1. Check Supabase JWT access token
  const token = getBearerToken(req);
  if (token && token !== SUPABASE_ANON_KEY) {
    try {
      const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
        auth: { persistSession: false, autoRefreshToken: false },
      });
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser(token);
      if (!error && user) {
        return { user, error: null };
      }
    } catch (_) {}
  }

  // 2. Check signed Telegram WebApp initData (from Telegram Mini App)
  let twaHeader = null;
  if (req && typeof req.headers?.get === 'function') {
    twaHeader = req.headers.get('x-telegram-init-data');
  } else if (req && req.headers) {
    twaHeader = req.headers['x-telegram-init-data'];
  }

  if (twaHeader && BOT_TOKEN && SERVICE_ROLE) {
    const { valid, user: tgUser } = verifyTelegramWebAppData(twaHeader, BOT_TOKEN);
    if (valid && tgUser?.id) {
      try {
        const supabaseAdmin = createClient(SUPABASE_URL, SERVICE_ROLE);
        const { data: linked } = await supabaseAdmin
          .from('telegram_users')
          .select('user_id')
          .eq('telegram_id', tgUser.id)
          .maybeSingle();

        if (linked?.user_id) {
          return { user: { id: linked.user_id }, error: null };
        }
      } catch (_) {}
    }
  }

  return { user: null, error: 'Authentication required' };
}
