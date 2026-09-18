import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest';
import crypto from 'crypto';
// @ts-ignore - plain JS serverless module has no type declarations
import twaHandler, {
  verifyTelegramWebAppData,
  isInitDataFresh,
  isMockTelegramUserAllowed,
  resolveTelegramIdentity,
} from '../../../api/_telegram/auth-twa.js';

const MINTED_USER_ID = '00000000-0000-0000-0000-000000000001';

vi.mock('@supabase/supabase-js', () => ({
  createClient: () => ({
    auth: {
      admin: {
        generateLink: async () => ({
          data: {
            user: { id: MINTED_USER_ID },
            properties: { hashed_token: 'hashed-token-123' },
          },
          error: null,
        }),
        updateUserById: async () => ({ data: {}, error: null }),
      },
    },
    from: (_table: string) => ({
      select: () => ({
        eq: () => ({
          maybeSingle: async () => ({
            data: {
              id: 'rec_1',
              user_id: MINTED_USER_ID,
              telegram_id: 998877,
              telegram_first_name: 'Farhod',
            },
            error: null,
          }),
          lte: async () => ({ count: 5, error: null }),
        }),
      }),
      update: () => ({
        eq: async () => ({ data: {}, error: null }),
      }),
      insert: async () => ({ data: {}, error: null }),
    }),
  }),
}));

function buildMockRes() {
  let statusCode = 200;
  let jsonResponse: any = null;

  const res = {
    setHeader: vi.fn(),
    status: (code: number) => {
      statusCode = code;
      return {
        json: (data: any) => {
          jsonResponse = data;
        },
        end: vi.fn(),
      };
    },
    get statusCode() {
      return statusCode;
    },
    get jsonResponse() {
      return jsonResponse;
    },
  };

  return res;
}

function signInitData(
  userJson: string,
  botToken: string,
  authDate = Math.floor(Date.now() / 1000),
) {
  const dataCheckString = `auth_date=${authDate}\nuser=${userJson}`;
  const secretKey = crypto.createHmac('sha256', 'WebAppData').update(botToken).digest();
  const hash = crypto.createHmac('sha256', secretKey).update(dataCheckString).digest('hex');
  return `user=${encodeURIComponent(userJson)}&auth_date=${authDate}&hash=${hash}`;
}

const mockBotToken = '123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11';

const ORIGINAL_NODE_ENV = process.env.NODE_ENV;

describe('Telegram TWA Auth', () => {
  beforeEach(() => {
    process.env.TELEGRAM_BOT_TOKEN = mockBotToken;
    process.env.SERVICE_ROLE = 'service-role-key';
    process.env.NODE_ENV = ORIGINAL_NODE_ENV;
  });

  afterEach(() => {
    delete process.env.TELEGRAM_BOT_TOKEN;
    delete process.env.SERVICE_ROLE;
    process.env.NODE_ENV = ORIGINAL_NODE_ENV;
  });

  it('1. correctly validates authentic Telegram WebApp initData', () => {
    const userJson = JSON.stringify({ id: 998877, first_name: 'Farhod', username: 'farhod_dev' });
    const initData = signInitData(userJson, mockBotToken);

    const result = verifyTelegramWebAppData(initData, mockBotToken);
    expect(result.valid).toBe(true);
    expect(result.user?.id).toBe(998877);
    expect(result.user?.first_name).toBe('Farhod');
  });

  it('2. rejects tampered or invalid initData hash', () => {
    const initData = 'user=%7B%22id%22%3A998877%7D&hash=invalid_hash_value_123';
    const result = verifyTelegramWebAppData(initData, mockBotToken);
    expect(result.valid).toBe(false);
  });

  it('2b. rejects a correctly formatted but stale initData payload', () => {
    const staleAuthDate = Math.floor(Date.now() / 1000) - 60 * 60 * 48;
    expect(isInitDataFresh(staleAuthDate)).toBe(false);
    expect(isInitDataFresh(Math.floor(Date.now() / 1000))).toBe(true);
    expect(isInitDataFresh(undefined)).toBe(false);
  });

  it('3. mints a real Supabase session (tokenHash) for verified initData', async () => {
    const userJson = JSON.stringify({ id: 998877, first_name: 'Farhod', username: 'farhod_dev' });
    const res = buildMockRes();

    await twaHandler(
      { method: 'POST', body: { initData: signInitData(userJson, mockBotToken) } } as any,
      res as any,
    );

    expect(res.statusCode).toBe(200);
    expect(res.jsonResponse.ok).toBe(true);
    expect(res.jsonResponse.tokenHash).toBe('hashed-token-123');
    expect(res.jsonResponse.userId).toBe(MINTED_USER_ID);
    // Never returns a self-issued access token.
    expect(res.jsonResponse.access_token).toBeUndefined();
  });

  it('4. rejects unverified initData instead of parsing it', async () => {
    const res = buildMockRes();

    await twaHandler(
      {
        method: 'POST',
        body: {
          initData: 'user=%7B%22id%22%3A998877%2C%22first_name%22%3A%22Attacker%22%7D&hash=forged',
        },
      } as any,
      res as any,
    );

    expect(res.statusCode).toBe(401);
    expect(res.jsonResponse.tokenHash).toBeUndefined();
  });

  it('5. refuses mock users in production', async () => {
    process.env.NODE_ENV = 'production';
    delete process.env.ALLOW_TWA_MOCK;

    expect(isMockTelegramUserAllowed()).toBe(false);

    const res = buildMockRes();
    await twaHandler({ method: 'POST', body: { mockUser: { id: 998877 } } } as any, res as any);
    expect(res.statusCode).toBe(400);
  });

  it('6. derives canonical identity for superadmins and students', () => {
    const admin = resolveTelegramIdentity({ id: 6756073816, username: 'soyilov_farhod' });
    expect(admin.role).toBe('superadmin');
    expect(admin.email).toBe('fsoyilov@gmail.com');

    const student = resolveTelegramIdentity({ id: 12345, first_name: 'Ali', last_name: 'Valiyev' });
    expect(student.role).toBe('student');
    expect(student.email).toBe('tg_12345@nihontalk.app');
    expect(student.fullName).toBe('Ali Valiyev');
  });
});
