import { describe, expect, it, vi, beforeEach } from 'vitest';
import {
  isTelegramWebApp,
  getTelegramWebAppUser,
  createTelegramUser,
  initTelegramAuth,
  authenticateTelegramWebApp,
  isLegacyTelegramToken,
  readCachedTelegramSession,
  TELEGRAM_SUPERADMIN_ID,
} from '../telegramAuth';
import { safeLocalStorage } from '../storage/safeLocalStorage';

const { verifyOtpMock } = vi.hoisted(() => ({ verifyOtpMock: vi.fn() }));

vi.mock('../../lib/supabase', () => ({
  supabase: { auth: { verifyOtp: verifyOtpMock } },
}));

const SESSION_KEY = 'telegram_supabase_session';
const USER_CACHE_KEY = 'study_planner_user_cache';

const buildVerifiedSession = (id = 'real-supabase-user-id') => ({
  access_token: 'signed.supabase.access.token',
  token_type: 'bearer',
  expires_in: 3600,
  expires_at: Math.floor(Date.now() / 1000) + 3600,
  refresh_token: 'signed.refresh.token',
  user: {
    id,
    email: 'tg_998877@nihontalk.app',
    aud: 'authenticated',
    user_metadata: { full_name: 'Temur Malik', role: 'student' },
    app_metadata: { provider: 'telegram', custom_role: 'student' },
  },
});

describe('telegramAuth utility', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.unstubAllGlobals();
    delete (window as any).Telegram;
    localStorage.clear();
  });

  it('1. detects when NOT running inside Telegram WebApp', () => {
    expect(isTelegramWebApp()).toBe(false);
    expect(getTelegramWebAppUser()).toBeNull();
    expect(initTelegramAuth()).toBeNull();
  });

  it('2. detects Telegram WebApp from window.Telegram.WebApp.initData', () => {
    (window as any).Telegram = {
      WebApp: {
        initData: 'query_id=AA&user=%7B%22id%22%3A123456%2C%22first_name%22%3A%22Ali%22%7D',
        ready: vi.fn(),
        expand: vi.fn(),
      },
    };

    expect(isTelegramWebApp()).toBe(true);
    const user = getTelegramWebAppUser();
    expect(user).toBeDefined();
    expect(user?.id).toBe(123456);
    expect(user?.first_name).toBe('Ali');
  });

  it('3. identifies Superadmin (6756073816) and assigns superadmin role and fsoyilov@gmail.com', () => {
    const tgAdmin = {
      id: TELEGRAM_SUPERADMIN_ID,
      first_name: 'Farhod',
      last_name: 'Soyilov',
      username: 'Soyilov_Farhod',
    };

    const user = createTelegramUser(tgAdmin);
    expect(user.email).toBe('fsoyilov@gmail.com');
    expect(user.app_metadata.custom_role).toBe('superadmin');
    expect(user.user_metadata.role).toBe('superadmin');
    expect(user.user_metadata.full_name).toBe('Farhod Soyilov');
    expect(user.id).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i);
  });

  it('4. creates regular student profile with deterministic UUID and tg_ email', () => {
    const tgStudent = {
      id: 99887766,
      first_name: 'Temur',
      last_name: 'Malik',
    };

    const user1 = createTelegramUser(tgStudent);
    const user2 = createTelegramUser(tgStudent);

    expect(user1.id).toBe(user2.id);
    expect(user1.email).toBe('tg_99887766@nihontalk.app');
    expect(user1.app_metadata.custom_role).toBe('student');
    expect(user1.user_metadata.full_name).toBe('Temur Malik');
  });

  it('5. never fabricates a session — no verified session means null, with stale caches purged', () => {
    (window as any).Telegram = {
      WebApp: {
        initDataUnsafe: { user: { id: 887766, first_name: 'Shahzod' } },
        ready: vi.fn(),
        expand: vi.fn(),
      },
    };

    // Simulate the legacy fabricated identity left behind by older builds.
    safeLocalStorage.setJSON(USER_CACHE_KEY, { id: 'stale-local-id', email: 'stale@x.dev' });
    safeLocalStorage.setItem('study_planner_user_email', 'stale@x.dev');

    const authResult = initTelegramAuth();

    expect(authResult).toBeNull();
    expect(safeLocalStorage.getJSON(USER_CACHE_KEY, null)).toBeNull();
    expect(safeLocalStorage.getItem('study_planner_user_email')).toBeNull();
  });

  it('6. rejects and removes legacy unsigned tg-jwt tokens', () => {
    expect(isLegacyTelegramToken('tg-jwt-abc')).toBe(true);
    expect(isLegacyTelegramToken('eyJhbGciOiJIUzI1NiJ9.x.y')).toBe(false);

    safeLocalStorage.setJSON(SESSION_KEY, {
      ...buildVerifiedSession(),
      access_token: 'tg-jwt-00000000-0000-0000-0000-000000000001',
    });

    expect(readCachedTelegramSession()).toBeNull();
    expect(safeLocalStorage.getJSON(SESSION_KEY, null)).toBeNull();
  });

  it('7. returns a cached server-verified session and rehydrates the user cache', () => {
    (window as any).Telegram = {
      WebApp: {
        initData: 'query_id=AA&user=%7B%22id%22%3A998877%7D',
        ready: vi.fn(),
        expand: vi.fn(),
      },
    };

    const session = buildVerifiedSession();
    safeLocalStorage.setJSON(SESSION_KEY, session);

    const authResult = initTelegramAuth();

    expect(authResult?.session.access_token).toBe('signed.supabase.access.token');
    expect(authResult?.user.id).toBe('real-supabase-user-id');
    expect(safeLocalStorage.getJSON<any>(USER_CACHE_KEY, null)?.id).toBe('real-supabase-user-id');
  });

  it('8. exchanges the server tokenHash for a real Supabase session', async () => {
    (window as any).Telegram = {
      WebApp: {
        initData: 'query_id=AA&user=%7B%22id%22%3A998877%7D&hash=signed',
        ready: vi.fn(),
        expand: vi.fn(),
      },
    };

    const session = buildVerifiedSession();
    verifyOtpMock.mockResolvedValue({ data: { session }, error: null });

    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => ({ ok: true, tokenHash: 'one-time-hash', userId: session.user.id }),
    });
    vi.stubGlobal('fetch', fetchMock);

    const result = await authenticateTelegramWebApp();

    expect(fetchMock).toHaveBeenCalledWith(
      expect.stringContaining('/api/telegram/auth-twa'),
      expect.objectContaining({ method: 'POST' }),
    );
    expect(verifyOtpMock).toHaveBeenCalledWith({
      type: 'magiclink',
      token_hash: 'one-time-hash',
    });
    expect(result?.session.access_token).toBe('signed.supabase.access.token');
    expect(safeLocalStorage.getJSON<any>(SESSION_KEY, null)?.access_token).toBe(
      'signed.supabase.access.token',
    );
  });

  it('9. returns null when the server rejects the Telegram session', async () => {
    (window as any).Telegram = {
      WebApp: {
        initData: 'query_id=AA&user=%7B%22id%22%3A998877%7D&hash=tampered',
        ready: vi.fn(),
        expand: vi.fn(),
      },
    };

    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: false,
        status: 401,
        json: async () => ({ ok: false, error: 'Invalid Telegram initData signature.' }),
      }),
    );

    const result = await authenticateTelegramWebApp();

    expect(result).toBeNull();
    expect(verifyOtpMock).not.toHaveBeenCalled();
  });
});
