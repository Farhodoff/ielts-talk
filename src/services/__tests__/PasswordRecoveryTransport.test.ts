import { afterEach, expect, it, vi } from 'vitest';
import { ensurePasswordRecoverySession } from '../PasswordRecoveryService';
import { supabase } from '../../lib/supabase';

const { transport } = vi.hoisted(() => ({ transport: vi.fn() }));
vi.mock('../../lib/supabase', async () => {
  const { createClient } = await import('@supabase/supabase-js');
  return {
    supabase: createClient('https://recovery-test.supabase.co', 'test-public-key', {
      auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false },
      global: { fetch: (...args) => transport(...args) },
    }),
  };
});

afterEach(() => window.history.replaceState({}, '', '/'));

it('recovers from a rejected access JWT using the real SDK and submits with the fresh session', async () => {
  const jwt = (signature: string) => {
    const encode = (value: object) =>
      btoa(JSON.stringify(value)).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
    return `${encode({ alg: 'HS256', typ: 'JWT' })}.${encode({ sub: 'test-user', exp: Math.floor(Date.now() / 1000) + 3600 })}.${signature}`;
  };
  const rejected = jwt('rejected');
  const fresh = jwt('fresh');
  const user = {
    id: 'test-user',
    aud: 'authenticated',
    role: 'authenticated',
    email: 'test@example.invalid',
  };
  const response = (body: unknown, status = 200) =>
    new Response(JSON.stringify(body), {
      status,
      headers: { 'Content-Type': 'application/json' },
    });
  transport.mockImplementation(async (input: string, init: RequestInit) => {
    const url = String(input);
    if (url.endsWith('/user') && init.method === 'GET') {
      return response(
        { code: 'bad_jwt', msg: 'token signature is invalid: signature is invalid' },
        403,
      );
    }
    if (url.includes('/token?grant_type=refresh_token')) {
      expect(JSON.parse(String(init.body))).toEqual({ refresh_token: 'recovery-refresh' });
      return response({
        access_token: fresh,
        refresh_token: 'rotated-refresh',
        token_type: 'bearer',
        expires_in: 3600,
        user,
      });
    }
    if (url.endsWith('/user') && init.method === 'PUT') {
      expect(new Headers(init.headers).get('Authorization')).toBe(`Bearer ${fresh}`);
      return response(user);
    }
    throw new Error('Unexpected auth request');
  });
  window.history.replaceState(
    {},
    '',
    `/auth/reset-password#access_token=${rejected}&refresh_token=recovery-refresh&type=recovery`,
  );
  await ensurePasswordRecoverySession();
  expect(window.location.hash).toBe('');
  const { error } = await supabase.auth.updateUser({ password: 'Synthetic-password-123!' });
  expect(error).toBeNull();
  expect(transport).toHaveBeenCalledTimes(3);
});
