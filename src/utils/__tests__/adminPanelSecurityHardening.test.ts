import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import fs from 'fs';
import path from 'path';

// @ts-ignore — serverless handlers are plain ESM JavaScript
import { isSuperAdminUser, normalizeRoleAction } from '../../../api/admin/role.js';

vi.mock('../../lib/supabase', () => ({
  supabase: {
    auth: {
      getSession: vi.fn(),
      getUser: vi.fn(),
    },
    from: vi.fn(),
  },
}));

import { supabase } from '../../lib/supabase';
import {
  ADMIN_ROLE_ENDPOINT,
  grantAdminRole,
  revokeAdminRole,
  resolveUserRole,
  isUserAdmin,
} from '../admin';

const readSource = (relativePath: string) =>
  fs.readFileSync(path.resolve(__dirname, relativePath), 'utf-8');

describe('Superadmin gate (api/admin/role)', () => {
  it('rejects missing identities', () => {
    expect(isSuperAdminUser(null)).toBe(false);
    expect(isSuperAdminUser(undefined)).toBe(false);
    expect(isSuperAdminUser({})).toBe(false);
    expect(isSuperAdminUser({ email: '' })).toBe(false);
    expect(isSuperAdminUser({ email: 'student@example.com' })).toBe(false);
  });

  it('accepts the configured superadmin email regardless of casing', () => {
    expect(isSuperAdminUser({ email: 'fsoyilov@gmail.com' })).toBe(true);
    expect(isSuperAdminUser({ email: 'FSOYILOV@GMAIL.COM' })).toBe(true);
    expect(isSuperAdminUser({ email: '  fsoyilov@gmail.com  ' })).toBe(true);
    expect(isSuperAdminUser({ email: 'fsoyilovv@gmail.com' })).toBe(false);
  });

  it('accepts a superadmin role that only the admin API could have written', () => {
    expect(
      isSuperAdminUser({
        email: 'staff@example.com',
        app_metadata: { custom_role: 'superadmin' },
      }),
    ).toBe(true);
  });

  it('ignores user_metadata roles, which the user can rewrite themselves', () => {
    expect(
      isSuperAdminUser({
        email: 'student@example.com',
        user_metadata: { role: 'superadmin' },
      }),
    ).toBe(false);
  });

  it('does not treat a plain admin as a superadmin', () => {
    expect(
      isSuperAdminUser({ email: 'staff@example.com', app_metadata: { custom_role: 'admin' } }),
    ).toBe(false);
  });

  it('normalizes only grant/revoke actions', () => {
    expect(normalizeRoleAction('grant')).toEqual({ action: 'grant', role: 'admin' });
    expect(normalizeRoleAction(' REVOKE ')).toEqual({ action: 'revoke', role: 'user' });
    expect(normalizeRoleAction('delete')).toBeNull();
    expect(normalizeRoleAction('')).toBeNull();
    expect(normalizeRoleAction(null)).toBeNull();
  });
});

describe('resolveUserRole hardening', () => {
  it('never reports an elevated role from user-writable metadata', () => {
    expect(resolveUserRole({ user_metadata: { role: 'superadmin' } })).toBeUndefined();
    expect(resolveUserRole({ user_metadata: { role: 'admin' } })).toBeUndefined();
    expect(
      isUserAdmin({ email: 'student@example.com', user_metadata: { role: 'superadmin' } }),
    ).toBe(false);
  });

  it('accepts app_metadata roles, server-side roles and ordinary user roles', () => {
    expect(resolveUserRole({ app_metadata: { custom_role: 'admin' } })).toBe('admin');
    expect(resolveUserRole({ role: 'admin' })).toBe('admin');
    expect(resolveUserRole({ user_metadata: { role: 'student' } })).toBe('student');
    expect(resolveUserRole({ role: 'authenticated' })).toBeUndefined();
  });

  it('still trusts the verified email allow-list', () => {
    expect(isUserAdmin({ email: 'fsoyilov@gmail.com' })).toBe(true);
  });
});

describe('Role changes are executed by the server, not the browser', () => {
  const fetchMock = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    vi.stubGlobal('fetch', fetchMock);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('refuses to call the API without an authenticated session', async () => {
    (supabase.auth.getSession as any).mockResolvedValue({ data: { session: null } });

    expect(await grantAdminRole('student@example.com')).toBe(false);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('sends the session token to the server endpoint', async () => {
    (supabase.auth.getSession as any).mockResolvedValue({
      data: { session: { access_token: 'session-token' } },
    });
    fetchMock.mockResolvedValue({ ok: true, status: 200, json: async () => ({ ok: true }) });

    expect(await grantAdminRole('Student@Example.com')).toBe(true);

    expect(fetchMock).toHaveBeenCalledTimes(1);
    const [url, init] = fetchMock.mock.calls[0];
    expect(url).toBe(ADMIN_ROLE_ENDPOINT);
    expect(init.method).toBe('POST');
    expect(init.headers.Authorization).toBe('Bearer session-token');
    expect(JSON.parse(init.body)).toEqual({ email: 'student@example.com', action: 'grant' });
  });

  it('propagates a server rejection instead of assuming success', async () => {
    (supabase.auth.getSession as any).mockResolvedValue({
      data: { session: { access_token: 'session-token' } },
    });
    fetchMock.mockResolvedValue({
      ok: false,
      status: 403,
      json: async () => ({ error: 'Forbidden' }),
    });

    expect(await grantAdminRole('student@example.com')).toBe(false);
  });

  it('never lets the client revoke a superadmin', async () => {
    (supabase.auth.getSession as any).mockResolvedValue({
      data: { session: { access_token: 'session-token' } },
    });

    expect(await revokeAdminRole('fsoyilov@gmail.com')).toBe(false);
    expect(fetchMock).not.toHaveBeenCalled();
  });
});

describe('Admin panel source guarantees', () => {
  it('does not authorise the admin route from a localStorage user cache', () => {
    const appSource = readSource('../../App.tsx');
    expect(appSource).not.toContain('cachedUser');
    expect(appSource).not.toContain('safeLocalStorage');
  });

  it('verifies the live Supabase session before rendering admin data', () => {
    const adminSource = readSource('../../pages/AdminDashboardPage.tsx');
    expect(adminSource).toContain('supabase.auth.getUser()');
    // No read of the cache-backed user object is allowed as an identity source.
    expect(adminSource).not.toMatch(/ielts_talk_user_cache['"`]\s*[,)]/);
  });

  it('clears cached admin PII when the visitor is not authorised', () => {
    const adminSource = readSource('../../pages/AdminDashboardPage.tsx');
    expect(adminSource).toContain("localStorage.removeItem('ielts_talk_admin_users_cache')");
    expect(adminSource).toContain("localStorage.removeItem('ielts_talk_admin_stats_cache')");
    expect(adminSource).toContain(
      "localStorage.removeItem('ielts_talk_admin_speech_sessions_cache')",
    );
  });
});
