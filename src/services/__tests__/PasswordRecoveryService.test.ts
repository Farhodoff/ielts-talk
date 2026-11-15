import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest';
import { supabase } from '../../lib/supabase';
import { ensurePasswordRecoverySession } from '../PasswordRecoveryService';
vi.mock('../../lib/supabase', () => ({
  supabase: {
    auth: {
      getSession: vi.fn(),
      setSession: vi.fn(),
      refreshSession: vi.fn(),
      exchangeCodeForSession: vi.fn(),
    },
  },
}));
beforeEach(() => {
  vi.resetAllMocks();
  window.history.replaceState({}, '', '/auth/reset-password');
});
afterEach(() => {
  window.history.replaceState({}, '', '/');
});
describe('Recovery session establishment', () => {
  it('requires a valid session before changing a password', async () => {
    vi.mocked(supabase.auth.getSession).mockResolvedValue({ data: { session: null }, error: null });
    await expect(ensurePasswordRecoverySession()).rejects.toThrow('yangi');
    expect(supabase.auth.setSession).not.toHaveBeenCalled();
  });
  it('recovers a link when automatic URL initialization did not save a session', async () => {
    window.history.replaceState(
      {},
      '',
      '/auth/reset-password#access_token=example-access&refresh_token=example-refresh&type=recovery',
    );
    vi.mocked(supabase.auth.getSession).mockResolvedValue({ data: { session: null }, error: null });
    vi.mocked(supabase.auth.setSession).mockResolvedValue({
      data: { session: { access_token: 'example-access' }, user: null },
      error: null,
    } as any);
    await ensurePasswordRecoverySession();
    expect(supabase.auth.setSession).toHaveBeenCalledWith({
      access_token: 'example-access',
      refresh_token: 'example-refresh',
    });
    expect(window.location.hash).toBe('');
  });
  it('reports expired or invalid link credentials', async () => {
    window.history.replaceState(
      {},
      '',
      '/auth/reset-password#access_token=invalid&refresh_token=invalid&type=recovery',
    );
    vi.mocked(supabase.auth.getSession).mockResolvedValue({ data: { session: null }, error: null });
    vi.mocked(supabase.auth.setSession).mockResolvedValue({
      data: { session: null, user: null },
      error: new Error('expired'),
    } as any);
    vi.mocked(supabase.auth.refreshSession).mockResolvedValue({
      data: { session: null, user: null },
      error: { code: 'refresh_token_not_found' },
    } as any);
    await expect(ensurePasswordRecoverySession()).rejects.toThrow('muddati');
  });

  it('exchanges the recovery refresh token when the access JWT is rejected', async () => {
    window.history.replaceState(
      {},
      '',
      '/auth/reset-password#access_token=rejected&refresh_token=recovery-refresh',
    );
    vi.mocked(supabase.auth.getSession).mockResolvedValue({
      data: { session: { access_token: 'other-account' } },
      error: null,
    } as any);
    vi.mocked(supabase.auth.setSession).mockResolvedValue({
      data: { session: null, user: null },
      error: { code: 'bad_jwt', status: 403 },
    } as any);
    vi.mocked(supabase.auth.refreshSession).mockResolvedValue({
      data: { session: { access_token: 'fresh' }, user: null },
      error: null,
    } as any);
    await ensurePasswordRecoverySession();
    expect(supabase.auth.setSession).toHaveBeenCalled();
    expect(supabase.auth.refreshSession).toHaveBeenCalledWith({
      refresh_token: 'recovery-refresh',
    });
    expect(window.location.hash).toBe('');
  });

  it('preserves a link for retry when the auth server is temporarily unavailable', async () => {
    window.history.replaceState(
      {},
      '',
      '/auth/reset-password#access_token=access&refresh_token=refresh',
    );
    vi.mocked(supabase.auth.getSession).mockResolvedValue({ data: { session: null }, error: null });
    const unavailable = { data: { session: null, user: null }, error: { status: 520 } } as any;
    vi.mocked(supabase.auth.setSession).mockResolvedValue(unavailable);
    vi.mocked(supabase.auth.refreshSession).mockResolvedValue(unavailable);
    await expect(ensurePasswordRecoverySession()).rejects.toThrow('ulanishda');
    expect(window.location.hash).toContain('refresh_token=refresh');
  });
});
