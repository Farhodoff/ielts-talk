import type { User, Session } from '@supabase/supabase-js';
import type { TelegramWebAppUser } from '../types/telegram-webapp';
import { toDeterministicUUID } from './uuid';
import { safeLocalStorage } from './storage/safeLocalStorage';
import { supabase } from '../lib/supabase';

export const TELEGRAM_SUPERADMIN_ID = 6756073816;
export const TELEGRAM_SUPERADMIN_IDS = [6756073816, 6839776532];

const TG_SESSION_CACHE_KEY = 'telegram_supabase_session';
const USER_CACHE_KEY = 'ielts_talk_user_cache';
const USER_EMAIL_KEY = 'ielts_talk_user_email';
const EXPIRY_SKEW_SECONDS = 60;

/**
 * SECURITY NOTE
 *
 * Telegram WebApp sessions used to be fabricated on the client as
 * `tg-jwt-<uuid>` and were then trusted by `/api/*` without any signature check.
 * That allowed anyone to mint an "authenticated" session with curl.
 *
 * Sessions are now obtained exclusively from the server:
 *   1. the Mini App posts its raw `initData` to /api/telegram/auth-twa;
 *   2. the server verifies the Telegram HMAC and freshness window;
 *   3. the server returns a one-time `tokenHash` created with the Supabase admin API;
 *   4. the client exchanges it through `supabase.auth.verifyOtp()` for a real,
 *      refreshable Supabase session.
 *
 * Nothing in this module ever invents credentials.
 */

/**
 * Checks whether the current runtime environment is inside Telegram WebApp (Mini App).
 */
export function isTelegramWebApp(): boolean {
  if (typeof window === 'undefined') return false;

  const tg = window.Telegram?.WebApp;
  if (!tg) {
    return (
      window.location.search.includes('twa=true') || window.location.search.includes('tgWebAppData')
    );
  }

  return Boolean(
    tg.initData ||
    tg.initDataUnsafe?.user ||
    window.location.search.includes('twa=true') ||
    window.location.search.includes('tgWebAppData'),
  );
}

/**
 * Extracts the Telegram user from WebApp initData or URL mock.
 * This is display metadata only — it is never used as an authentication credential.
 */
export function getTelegramWebAppUser(): TelegramWebAppUser | null {
  if (typeof window === 'undefined') return null;

  const tg = window.Telegram?.WebApp;
  if (tg?.initDataUnsafe?.user && tg.initDataUnsafe.user.id) {
    return tg.initDataUnsafe.user;
  }

  if (tg?.initData) {
    try {
      const params = new URLSearchParams(tg.initData);
      const userJson = params.get('user');
      if (userJson) {
        const parsed = JSON.parse(userJson);
        if (parsed && parsed.id) return parsed;
      }
    } catch {}
  }

  // Development / test fallback from query string (never trusted by the server).
  if (import.meta.env.DEV) {
    try {
      const searchParams = new URLSearchParams(window.location.search);
      const mockUserJson = searchParams.get('mock_tg_user');
      if (mockUserJson) {
        const parsed = JSON.parse(decodeURIComponent(mockUserJson));
        if (parsed && parsed.id) return parsed;
      }
    } catch {}
  }

  return null;
}

/**
 * Builds a display profile for a Telegram WebApp user.
 * NOTE: the returned object is a UI placeholder. It carries NO session and must
 * not be treated as proof of identity — the authoritative user comes from the
 * Supabase session returned by `authenticateTelegramWebApp()`.
 */
export function createTelegramUser(tgUser: TelegramWebAppUser): User {
  const isSuper =
    TELEGRAM_SUPERADMIN_IDS.includes(tgUser.id) ||
    tgUser.username?.toLowerCase() === 'soyilov_farhod';

  const fullName =
    [tgUser.first_name, tgUser.last_name].filter(Boolean).join(' ').trim() ||
    tgUser.username ||
    "O'quvchi";

  const email = isSuper ? 'fsoyilov@gmail.com' : `tg_${tgUser.id}@nihontalk.app`;
  const userId = toDeterministicUUID(`tg-user-${tgUser.id}`);
  const role = isSuper ? 'superadmin' : 'student';

  return {
    id: userId,
    app_metadata: {
      provider: 'telegram',
      providers: ['telegram'],
      // `custom_role` is the application role used after the auth migration;
      // `role` is kept for backwards compatibility with existing UI checks.
      custom_role: role,
      role,
    },
    user_metadata: {
      full_name: fullName,
      first_name: tgUser.first_name || '',
      last_name: tgUser.last_name || '',
      username: tgUser.username || '',
      telegram_id: tgUser.id,
      avatar_url: tgUser.photo_url || '',
      role,
    },
    aud: 'authenticated',
    confirmation_sent_at: new Date().toISOString(),
    recovery_sent_at: null,
    email_change_sent_at: null,
    new_email: null,
    invited_at: null,
    action_link: null,
    email,
    phone: null,
    created_at: new Date().toISOString(),
    confirmed_at: new Date().toISOString(),
    email_confirmed_at: new Date().toISOString(),
    phone_confirmed_at: null,
    last_sign_in_at: new Date().toISOString(),
    role: 'authenticated',
    updated_at: new Date().toISOString(),
    identities: [],
    factors: null,
  } as unknown as User;
}

/** Legacy unsigned `tg-jwt-*` tokens must never be treated as credentials. */
export function isLegacyTelegramToken(token?: string | null): boolean {
  return typeof token === 'string' && token.startsWith('tg-jwt-');
}

export function clearCachedTelegramSession(): void {
  safeLocalStorage.removeItem(TG_SESSION_CACHE_KEY);
}

/**
 * Returns a previously verified Supabase session, or null.
 * Expired sessions are dropped so the caller re-runs the server exchange.
 */
export function readCachedTelegramSession(): Session | null {
  const cached = safeLocalStorage.getJSON<Session | null>(TG_SESSION_CACHE_KEY, null);
  if (!cached?.access_token) return null;

  if (isLegacyTelegramToken(cached.access_token)) {
    clearCachedTelegramSession();
    return null;
  }

  if (cached.expires_at && cached.expires_at * 1000 - Date.now() < EXPIRY_SKEW_SECONDS * 1000) {
    return null;
  }

  return cached;
}

function persistVerifiedSession(session: Session): void {
  safeLocalStorage.setJSON(TG_SESSION_CACHE_KEY, session);
  safeLocalStorage.setJSON(USER_CACHE_KEY, session.user);
  if (session.user?.email) {
    safeLocalStorage.setItem(USER_EMAIL_KEY, session.user.email);
  }
}

function configureWebAppUi(): void {
  const tg = window.Telegram?.WebApp;
  try {
    tg?.ready?.();
    tg?.expand?.();
    tg?.enableClosingConfirmation?.();

    if (tg?.setHeaderColor) {
      tg.setHeaderColor('#0F1419');
    }
    if (tg?.setBackgroundColor) {
      tg.setBackgroundColor('#0F1419');
    }
  } catch (err) {
    console.debug('[TelegramAuth] WebApp UI config warning:', err);
  }
}

/**
 * Synchronous hydration used during render.
 *
 * Returns ONLY a cached, previously server-verified Supabase session. When no
 * such session exists it returns null and purges stale identity caches so that
 * a revoked/legacy Telegram identity cannot keep the UI logged in.
 * Call `authenticateTelegramWebApp()` to establish a session.
 */
export function initTelegramAuth(): { user: User; session: Session } | null {
  if (typeof window === 'undefined' || !isTelegramWebApp()) return null;

  configureWebAppUi();

  const session = readCachedTelegramSession();
  if (session?.user) {
    safeLocalStorage.setJSON(USER_CACHE_KEY, session.user);
    if (session.user.email) {
      safeLocalStorage.setItem(USER_EMAIL_KEY, session.user.email);
    }
    return { user: session.user, session };
  }

  // No verified session: drop any cached Telegram identity that may have been
  // written by the removed client-side session fabrication, so a stale or
  // revoked Telegram identity cannot keep the UI logged in.
  clearCachedTelegramSession();
  safeLocalStorage.removeItem(USER_CACHE_KEY);
  safeLocalStorage.removeItem(USER_EMAIL_KEY);

  return null;
}

let inFlightExchange: Promise<{ user: User; session: Session } | null> | null = null;

/**
 * Performs the server-side Telegram handshake and installs a real Supabase session.
 * Safe to call multiple times; concurrent calls share a single request.
 */
export async function authenticateTelegramWebApp(): Promise<{
  user: User;
  session: Session;
} | null> {
  if (typeof window === 'undefined' || !isTelegramWebApp()) return null;
  if (inFlightExchange) return inFlightExchange;
  if (!window.location?.origin || typeof fetch === 'undefined') return null;

  inFlightExchange = (async () => {
    try {
      const tg = window.Telegram?.WebApp;
      const initData = tg?.initData || '';

      const payload: Record<string, unknown> = { initData };
      if (!initData) {
        // Only ever reachable in local development; the server rejects mock
        // users in production.
        const mockUser = getTelegramWebAppUser();
        if (!import.meta.env.DEV || !mockUser) return null;
        payload.mockUser = mockUser;
      }

      const response = await fetch(`${window.location.origin}/api/telegram/auth-twa`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => ({}));
      if (!response.ok || !data?.tokenHash) {
        console.warn(
          '[TelegramAuth] Server rejected the Telegram session:',
          response.status,
          data?.error,
        );
        return null;
      }

      const { data: otpData, error } = await supabase.auth.verifyOtp({
        type: 'magiclink',
        token_hash: data.tokenHash,
      });

      if (error || !otpData?.session) {
        console.warn('[TelegramAuth] Session exchange failed:', error?.message);
        return null;
      }

      persistVerifiedSession(otpData.session);
      return { user: otpData.session.user, session: otpData.session };
    } catch (err) {
      console.warn('[TelegramAuth] Authentication failed:', err);
      return null;
    } finally {
      inFlightExchange = null;
    }
  })();

  return inFlightExchange;
}
