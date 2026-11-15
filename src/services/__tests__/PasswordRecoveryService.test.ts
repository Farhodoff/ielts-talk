import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest';
import { supabase } from '../../lib/supabase';
import { ensurePasswordRecoverySession } from '../PasswordRecoveryService';
vi.mock('../../lib/supabase', () => ({
  supabase: { auth: { getSession: vi.fn(), setSession: vi.fn(), exchangeCodeForSession: vi.fn() } },
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
    await expect(ensurePasswordRecoverySession()).rejects.toThrow('muddati');
  });
});
