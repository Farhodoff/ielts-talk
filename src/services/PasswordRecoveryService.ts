import { supabase } from '../lib/supabase';

let pending: Promise<void> | null = null;

function recoveryError(error: unknown): Error {
  const authError = error as { status?: number; code?: string; message?: string } | null;
  if (
    (authError?.status ?? 0) >= 500 ||
    /fetch|network|connection|timeout/i.test(authError?.message ?? '')
  ) {
    return new Error('Tiklash serveriga ulanishda xato. Qayta urinib ko‘ring.');
  }
  if (authError?.code === 'bad_jwt') {
    return new Error('Server tiklash tokenini tasdiqlamadi. Yangi tiklash havolasini oling.');
  }
  return new Error('Tiklash havolasi yaroqsiz yoki muddati tugagan. Yangi havola oling.');
}

export function ensurePasswordRecoverySession(): Promise<void> {
  if (pending) return pending;
  // Capture the link before the SDK removes its fragment during initialization.
  const tokens = new URLSearchParams(window.location.hash.replace(/^#/, ''));
  const accessToken = tokens.get('access_token');
  const refreshToken = tokens.get('refresh_token');
  const code = new URLSearchParams(window.location.search).get('code');
  pending = (async () => {
    const { data, error } = await supabase.auth.getSession();
    // A recovery link must take precedence over an unrelated stored login.
    if (
      data.session &&
      !error &&
      !code &&
      (!accessToken || data.session.access_token === accessToken)
    ) {
      return;
    }
    if (accessToken && refreshToken) {
      let result = await supabase.auth.setSession({
        access_token: accessToken,
        refresh_token: refreshToken,
      });
      if (result.error || !result.data.session) {
        // setSession validates the link's access JWT first. If it is rejected,
        // exchange the refresh credential for a fresh server-issued session.
        // Never treat decoding a JWT locally as proof of authentication.
        result = await supabase.auth.refreshSession({ refresh_token: refreshToken });
      }
      if (result.error || !result.data.session) {
        throw recoveryError(result.error);
      }
      // Only remove credentials after they have been accepted.
      window.history.replaceState(null, '', window.location.pathname);
      return;
    }
    if (code) {
      const result = await supabase.auth.exchangeCodeForSession(code);
      if (!result.error && result.data.session) return;
      throw recoveryError(result.error);
    }
    if (error) throw recoveryError(error);
    throw new Error('Tiklash sessiyasi topilmadi. Emailingizga yangi tiklash havolasini yuboring.');
  })().finally(() => {
    pending = null;
  });
  return pending;
}
