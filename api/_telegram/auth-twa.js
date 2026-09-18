import crypto from 'crypto';
import { createClient } from '@supabase/supabase-js';

// Environment is read lazily so a rotated secret is picked up without a redeploy
// and so cold-start configuration is never captured stale.
const getSupabaseUrl = () =>
  process.env.VITE_SUPABASE_URL ||
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  'https://qmuimxnknxwarvnkpnlo.supabase.co';
const getServiceRole = () => process.env.SERVICE_ROLE || process.env.SUPABASE_SERVICE_ROLE_KEY;
const getBotToken = () => process.env.TELEGRAM_BOT_TOKEN;

const DEFAULT_INIT_DATA_MAX_AGE_SECONDS = 86400; // Telegram recommends rejecting stale initData
const SUPERADMIN_TELEGRAM_IDS = (
  process.env.SUPERADMIN_TELEGRAM_IDS || '6756073816,6839776532'
)
  .split(',')
  .map((id) => Number(id.trim()))
  .filter((id) => Number.isFinite(id));
const SUPERADMIN_USERNAME = (process.env.SUPERADMIN_TELEGRAM_USERNAME || 'soyilov_farhod').toLowerCase();
const SUPERADMIN_EMAIL = process.env.SUPERADMIN_EMAIL || 'fsoyilov@gmail.com';
const TELEGRAM_EMAIL_DOMAIN = process.env.TELEGRAM_EMAIL_DOMAIN || 'nihontalk.app';

/**
 * Validates Telegram WebApp initData with the bot token.
 * Returns { valid, user, authDate, reason }
 */
export function verifyTelegramWebAppData(initData, botToken) {
  if (!initData || !botToken) return { valid: false, reason: 'missing_input' };

  try {
    const params = new URLSearchParams(initData);
    const hash = params.get('hash');
    if (!hash) return { valid: false, reason: 'missing_hash' };

    params.delete('hash');
    const sortedKeys = Array.from(params.keys()).sort();
    const dataCheckString = sortedKeys.map((key) => `${key}=${params.get(key)}`).join('\n');

    const secretKey = crypto.createHmac('sha256', 'WebAppData').update(botToken).digest();
    const calculatedHash = crypto.createHmac('sha256', secretKey).update(dataCheckString).digest('hex');

    let isValid = false;
    try {
      isValid = crypto.timingSafeEqual(Buffer.from(calculatedHash, 'hex'), Buffer.from(hash, 'hex'));
    } catch {
      isValid = false;
    }

    let user = null;
    const userJson = params.get('user');
    if (userJson) {
      user = JSON.parse(userJson);
    }

    const authDate = Number(params.get('auth_date') || 0);

    return { valid: isValid, user, authDate };
  } catch (e) {
    console.error('Error verifying Telegram WebApp data:', e);
    return { valid: false, reason: e.message };
  }
}

/**
 * Rejects replayed initData. Telegram does not expire initData itself, so the
 * server has to enforce the freshness window.
 */
export function isInitDataFresh(authDate, maxAgeSeconds = DEFAULT_INIT_DATA_MAX_AGE_SECONDS) {
  const parsed = Number(authDate);
  if (!Number.isFinite(parsed) || parsed <= 0) return false;
  const ageSeconds = Math.floor(Date.now() / 1000) - parsed;
  // Small negative tolerance for clock skew between Telegram and the host.
  return ageSeconds <= maxAgeSeconds && ageSeconds >= -300;
}

/**
 * Dev/test-only escape hatch. Never enabled in production deployments.
 */
export function isMockTelegramUserAllowed() {
  if (process.env.ALLOW_TWA_MOCK === 'true' && process.env.NODE_ENV !== 'production') {
    return true;
  }
  return (
    process.env.NODE_ENV !== 'production' &&
    process.env.VERCEL_ENV !== 'production' &&
    process.env.ALLOW_TWA_MOCK !== 'false'
  );
}

/**
 * Derives the canonical identity (email + application role) for a Telegram user.
 */
export function resolveTelegramIdentity(tgUser) {
  const telegramId = Number(tgUser?.id);
  const username = String(tgUser?.username || '').toLowerCase();
  const isSuper = SUPERADMIN_TELEGRAM_IDS.includes(telegramId) || username === SUPERADMIN_USERNAME;

  const fullName =
    [tgUser?.first_name, tgUser?.last_name].filter(Boolean).join(' ').trim() ||
    tgUser?.username ||
    "O'quvchi";

  return {
    telegramId,
    email: isSuper ? SUPERADMIN_EMAIL : `tg_${telegramId}@${TELEGRAM_EMAIL_DOMAIN}`,
    role: isSuper ? 'superadmin' : 'student',
    fullName,
  };
}

/**
 * Mints a REAL Supabase session for a verified Telegram user.
 *
 * `admin.generateLink` returns a one-time `hashed_token`; the client exchanges it
 * with `supabase.auth.verifyOtp({ type: 'magiclink', token_hash })` to receive a
 * signed access token + refresh token. No unsigned/self-issued JWT is involved.
 */
export async function mintSupabaseSession(supabase, telegramUser) {
  const identity = resolveTelegramIdentity(telegramUser);

  const { data, error } = await supabase.auth.admin.generateLink({
    type: 'magiclink',
    email: identity.email,
    options: {
      data: {
        full_name: identity.fullName,
        first_name: telegramUser?.first_name || '',
        last_name: telegramUser?.last_name || '',
        username: telegramUser?.username || '',
        telegram_id: identity.telegramId,
        avatar_url: telegramUser?.photo_url || '',
        role: identity.role,
      },
    },
  });

  if (error) {
    return { error: `Supabase session minting failed: ${error.message}` };
  }

  const userId = data?.user?.id;
  const tokenHash = data?.properties?.hashed_token;
  if (!userId || !tokenHash) {
    return { error: 'Supabase session minting returned an incomplete payload.' };
  }

  // app_metadata is only writable through the admin API and is what server-side
  // role checks rely on.
  const { error: metaError } = await supabase.auth.admin.updateUserById(userId, {
    app_metadata: { provider: 'telegram', custom_role: identity.role },
  });
  if (metaError) {
    console.warn('[TWA Auth] Failed to set app_metadata.custom_role:', metaError.message);
  }

  return { userId, tokenHash, identity };
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { initData, mockUser } = req.body || {};
  const botToken = getBotToken();

  let telegramUser = null;

  if (initData) {
    if (!botToken) {
      console.error('[TWA Auth] TELEGRAM_BOT_TOKEN is not configured; refusing to trust initData.');
      return res.status(503).json({ ok: false, error: 'Telegram authentication is not configured.' });
    }

    const { valid, user, authDate } = verifyTelegramWebAppData(initData, botToken);

    // No fallback that parses unverified initData: an unsigned payload is an
    // attacker-controlled payload.
    if (!valid) {
      return res.status(401).json({ ok: false, error: 'Invalid Telegram initData signature.' });
    }

    const maxAge = Number(process.env.TWA_INIT_DATA_MAX_AGE_SECONDS) || DEFAULT_INIT_DATA_MAX_AGE_SECONDS;
    if (!isInitDataFresh(authDate, maxAge)) {
      return res.status(401).json({ ok: false, error: 'Telegram session expired. Please reopen the Mini App.' });
    }

    telegramUser = user;
  } else if (mockUser && isMockTelegramUserAllowed()) {
    telegramUser = mockUser;
  }

  if (!telegramUser || !telegramUser.id) {
    return res.status(400).json({ ok: false, error: 'Telegram user data missing or invalid' });
  }

  const serviceRole = getServiceRole();
  if (!serviceRole) {
    console.error('[TWA Auth] SERVICE_ROLE is not configured; cannot mint a Supabase session.');
    return res.status(503).json({ ok: false, error: 'Auth backend is not configured.' });
  }

  const supabase = createClient(getSupabaseUrl(), serviceRole, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  try {
    const minted = await mintSupabaseSession(supabase, telegramUser);
    if (minted.error) {
      console.error('[TWA Auth]', minted.error);
      return res.status(500).json({ ok: false, error: 'Could not create an authenticated session.' });
    }

    const { userId, tokenHash, identity } = minted;

    // Keep the telegram_users mapping in sync with the Supabase user id so that
    // every other Telegram endpoint resolves the same identity.
    const { data: existingUser } = await supabase
      .from('telegram_users')
      .select('*')
      .eq('telegram_id', telegramUser.id)
      .maybeSingle();

    const profile = {
      telegram_username: telegramUser.username || '',
      telegram_first_name: telegramUser.first_name || '',
      telegram_last_name: telegramUser.last_name || '',
      updated_at: new Date().toISOString(),
    };

    if (existingUser) {
      await supabase
        .from('telegram_users')
        .update({
          ...profile,
          user_id: userId,
          telegram_username: profile.telegram_username || existingUser.telegram_username,
          telegram_first_name: profile.telegram_first_name || existingUser.telegram_first_name,
          telegram_last_name: profile.telegram_last_name || existingUser.telegram_last_name,
          last_interaction: new Date().toISOString(),
        })
        .eq('id', existingUser.id);
    } else {
      const { error: insertErr } = await supabase.from('telegram_users').insert({
        user_id: userId,
        telegram_id: telegramUser.id,
        chat_id: telegramUser.id,
        ...profile,
        notifications_enabled: true,
        is_active: true,
      });
      if (insertErr) {
        console.warn('[TWA Auth] telegram_users insert notice:', insertErr.message);
      }
    }

    let dueFlashcards = 0;
    try {
      const nowIso = new Date().toISOString();
      const { count } = await supabase
        .from('flashcards')
        .select('id', { count: 'exact', head: true })
        .eq('user_id', userId)
        .lte('next_review', nowIso);
      dueFlashcards = count || 0;
    } catch {}

    return res.status(200).json({
      ok: true,
      userId,
      // One-time credential, exchanged client-side for a real Supabase session.
      tokenHash,
      role: identity.role,
      isNewUser: !existingUser,
      telegramUser: {
        id: telegramUser.id,
        firstName: telegramUser.first_name,
        lastName: telegramUser.last_name || '',
        username: telegramUser.username || '',
        photoUrl: telegramUser.photo_url || '',
      },
      stats: { dueFlashcards },
    });
  } catch (err) {
    console.error('TWA Auth Error:', err);
    return res.status(500).json({ ok: false, error: 'Telegram authentication failed.' });
  }
}
