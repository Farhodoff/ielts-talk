import { describe, expect, it, vi, afterEach } from 'vitest';
import {
  verifyAuth,
  getUserRole,
  isPrivilegedRole,
  isLegacyTelegramToken,
} from '../../../api/_auth.js';
// @ts-ignore
import { sanitizeAiPayload } from '../../../api/deepseek.js';
// @ts-ignore
import { getDailyQuotaForRole, checkDailyQuota } from '../../../api/_quota.js';
// @ts-ignore
import { checkRateLimit } from '../../../api/_rateLimit.js';
// @ts-ignore
import { resolveTelegramAction } from '../../../api/telegram.js';

const bearerReq = (token: string) => ({ headers: { authorization: `Bearer ${token}` } });

describe('api/_auth — session verification', () => {
  it('treats a missing token as an anonymous caller', async () => {
    const result = await verifyAuth({ headers: {} });
    expect(result.user).toBeNull();
    expect(result.error).toBeNull();
    expect(result.status).toBe(0);
  });

  it('rejects legacy unsigned tg-jwt tokens with 401 (no more auth bypass)', async () => {
    expect(isLegacyTelegramToken('tg-jwt-anything')).toBe(true);

    const result = await verifyAuth(bearerReq('tg-jwt-00000000-0000-0000-0000-000000000001'));

    expect(result.user).toBeNull();
    expect(result.error).toBeTruthy();
    expect(result.status).toBe(401);
  });

  it('resolves the application role, ignoring the Postgres role', () => {
    expect(getUserRole(null)).toBe('guest');

    expect(
      getUserRole({ role: 'authenticated', app_metadata: { custom_role: 'superadmin' } }),
    ).toBe('superadmin');

    // user_metadata is editable by the user themselves (supabase.auth.updateUser),
    // so it can describe an ordinary role but never grant an elevated one.
    expect(getUserRole({ role: 'authenticated', user_metadata: { role: 'admin' } })).toBe(
      'student',
    );
    expect(getUserRole({ user_metadata: { role: 'superadmin' } })).toBe('student');
    expect(getUserRole({ user_metadata: { role: 'student' } })).toBe('student');

    // Only the Postgres role present -> default application role.
    expect(getUserRole({ role: 'authenticated', app_metadata: {} })).toBe('student');

    expect(isPrivilegedRole('superadmin')).toBe(true);
    expect(isPrivilegedRole('student')).toBe(false);
  });
});

describe('api/_quota — role based daily limits', () => {
  it('no longer disables the limit with a 99999 hardcode', () => {
    expect(getDailyQuotaForRole('student')).toBe(25);
    expect(getDailyQuotaForRole('superadmin')).toBe(500);
    expect(getDailyQuotaForRole(undefined)).toBe(25);
    expect(getDailyQuotaForRole('admin')).toBe(500);
  });
});

describe('api/deepseek — payload sanitization', () => {
  it('rejects malformed bodies and missing messages', () => {
    expect(sanitizeAiPayload(null).error).toBeTruthy();
    expect(sanitizeAiPayload('nope').error).toBeTruthy();
    expect(sanitizeAiPayload({ model: 'deepseek-chat' }).error).toBeTruthy();
    expect(sanitizeAiPayload({ messages: [] }).error).toBeTruthy();
    expect(sanitizeAiPayload({ messages: [{ role: 'user', content: '' }] }).error).toBeTruthy();
  });

  it('whitelists keys instead of forwarding arbitrary provider options', () => {
    const { payload } = sanitizeAiPayload({
      model: 'gpt-4o',
      messages: [{ role: 'user', content: 'hello' }],
      tools: [{ type: 'function' }],
      api_key: 'stolen',
      n: 3,
    });

    expect(payload.model).toBe('deepseek-chat');
    expect(payload.tools).toBeUndefined();
    expect(payload.api_key).toBeUndefined();
    expect(payload.n).toBeUndefined();
    expect(payload.messages).toEqual([{ role: 'user', content: 'hello' }]);
  });

  it('clamps numeric parameters and normalizes unknown roles', () => {
    const { payload } = sanitizeAiPayload({
      model: 'deepseek-reasoner',
      messages: [{ role: 'root', content: 'hi' }],
      max_tokens: 999999,
      temperature: 42,
      top_p: -5,
      response_format: { type: 'text' },
    });

    expect(payload.model).toBe('deepseek-reasoner');
    expect(payload.messages[0].role).toBe('user');
    expect(payload.max_tokens).toBe(4096);
    expect(payload.temperature).toBe(2);
    expect(payload.top_p).toBe(0);
    expect(payload.response_format).toBeUndefined();
    expect(payload.stream).toBe(false);
  });

  it('caps the number of messages and total content', () => {
    const messages = Array.from({ length: 60 }, () => ({
      role: 'user',
      content: 'x'.repeat(30000),
    }));
    const { payload } = sanitizeAiPayload({ messages });

    expect(payload.messages.length).toBeLessThanOrEqual(40);
    expect(payload.messages[0].content.length).toBe(24000);
  });
});

describe('api/telegram — exact routing', () => {
  it('resolves known actions from the path only', () => {
    expect(resolveTelegramAction('/api/telegram/notify-daily')).toBe('notify-daily');
    expect(resolveTelegramAction('/api/telegram/dispatch-daily-dataset?window=morning')).toBe(
      'dispatch-daily-dataset',
    );
    expect(resolveTelegramAction('/api/telegram/toggle-notifications')).toBe(
      'toggle-notifications',
    );
  });

  it('does not let query strings or unknown paths select a handler', () => {
    // Previously `url.includes('webhook')` matched the query string.
    expect(resolveTelegramAction('/api/telegram/notify-daily?debug=webhook')).toBe('notify-daily');
    expect(resolveTelegramAction('/api/telegram/not-a-real-route')).toBeNull();
    expect(resolveTelegramAction('')).toBeNull();
  });
});

describe('api/_rateLimit — degraded behaviour', () => {
  const ORIGINAL = {
    NODE_ENV: process.env.NODE_ENV,
    VERCEL_ENV: process.env.VERCEL_ENV,
    FAIL_OPEN: process.env.RATE_LIMIT_FAIL_OPEN,
    REDIS_URL: process.env.UPSTASH_REDIS_REST_URL,
    REDIS_TOKEN: process.env.UPSTASH_REDIS_REST_TOKEN,
  };

  const restoreEnv = () => {
    for (const [key, value] of Object.entries({
      NODE_ENV: ORIGINAL.NODE_ENV,
      VERCEL_ENV: ORIGINAL.VERCEL_ENV,
      RATE_LIMIT_FAIL_OPEN: ORIGINAL.FAIL_OPEN,
      UPSTASH_REDIS_REST_URL: ORIGINAL.REDIS_URL,
      UPSTASH_REDIS_REST_TOKEN: ORIGINAL.REDIS_TOKEN,
    })) {
      if (value === undefined) delete process.env[key];
      else process.env[key] = value;
    }
  };

  afterEach(() => {
    vi.unstubAllGlobals();
    restoreEnv();
  });

  const req = { headers: { 'x-forwarded-for': '203.0.113.7' } };

  it('falls back to per-instance memory when Redis is not configured', async () => {
    delete process.env.UPSTASH_REDIS_REST_URL;
    delete process.env.UPSTASH_REDIS_REST_TOKEN;

    const result = await checkRateLimit(req, 'user-without-redis');
    expect(result.allowed).toBe(true);
    expect(result.isDistributed).toBe(false);
  });

  it('fails CLOSED in production when the distributed limiter is unreachable', async () => {
    process.env.NODE_ENV = 'production';
    delete process.env.RATE_LIMIT_FAIL_OPEN;
    process.env.UPSTASH_REDIS_REST_URL = 'https://redis.example.com';
    process.env.UPSTASH_REDIS_REST_TOKEN = 'token';
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('ECONNREFUSED')));

    const result = await checkRateLimit(req, 'user-with-broken-redis');
    expect(result.allowed).toBe(false);
    expect(result.degraded).toBe(true);
  });

  it('honours the RATE_LIMIT_FAIL_OPEN escape hatch', async () => {
    process.env.NODE_ENV = 'production';
    process.env.RATE_LIMIT_FAIL_OPEN = 'true';
    process.env.UPSTASH_REDIS_REST_URL = 'https://redis.example.com';
    process.env.UPSTASH_REDIS_REST_TOKEN = 'token';
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('ECONNREFUSED')));

    const result = await checkRateLimit(req, 'user-fail-open');
    expect(result.allowed).toBe(true);
  });

  it('denies once the distributed counter exceeds the window limit', async () => {
    delete process.env.NODE_ENV;
    delete process.env.RATE_LIMIT_FAIL_OPEN;
    process.env.UPSTASH_REDIS_REST_URL = 'https://redis.example.com';
    process.env.UPSTASH_REDIS_REST_TOKEN = 'token';

    const withCount = (count: number) =>
      vi.stubGlobal(
        'fetch',
        vi.fn().mockResolvedValue({
          ok: true,
          json: async () => [{ result: count }, { result: 1 }, { result: 42 }],
        }),
      );

    withCount(3);
    const allowedResult = await checkRateLimit(req, 'user-within-limit');
    expect(allowedResult.allowed).toBe(true);
    expect(allowedResult.isDistributed).toBe(true);

    withCount(99);
    const deniedResult = await checkRateLimit(req, 'user-over-limit');
    expect(deniedResult.allowed).toBe(false);
    expect(deniedResult.retryAfter).toBeGreaterThan(0);
  });
});

describe('api/_quota — request guards', () => {
  it('rejects oversized request bodies', async () => {
    const result = await checkDailyQuota('user-oversized', 'student', 'x'.repeat(30 * 1024));
    expect(result.allowed).toBe(false);
    expect(result.reason).toContain('oshdi');
  });

  it('does not quota-check anonymous callers (they are IP throttled)', async () => {
    const result = await checkDailyQuota(null, 'student', '{}');
    expect(result.allowed).toBe(true);
    expect(result.remainingQuota).toBeNull();
  });

  it('enforces the role limit for a signed-in user', async () => {
    const limit = getDailyQuotaForRole('student');
    const userId = `quota-user-${Date.now()}`;

    for (let i = 0; i < limit; i++) {
      const result = await checkDailyQuota(userId, 'student', '{}');
      expect(result.allowed).toBe(true);
    }

    const exceeded = await checkDailyQuota(userId, 'student', '{}');
    expect(exceeded.allowed).toBe(false);
    expect(exceeded.reason).toContain(String(limit));
  });
});
