import { supabase } from '../lib/supabase';

let pending: Promise<void> | null = null;

export function ensurePasswordRecoverySession(): Promise<void> {
  if (pending) return pending;
  // Capture the link before the SDK removes its fragment during initialization.
  const tokens = new URLSearchParams(window.location.hash.replace(/^#/, ''));
  const accessToken = tokens.get('access_token');
  const refreshToken = tokens.get('refresh_token');
  const code = new URLSearchParams(window.location.search).get('code');
  pending = (async () => {
    const { data, error } = await supabase.auth.getSession();
    if (data.session && !error) return;
    if (accessToken && refreshToken) {
      const result = await supabase.auth.setSession({
        access_token: accessToken,
        refresh_token: refreshToken,
      });
      if (result.error || !result.data.session) {
        throw new Error('Tiklash havolasi yaroqsiz yoki muddati tugagan. Yangi havola oling.');
      }
      // Only remove credentials after they have been accepted.
      window.history.replaceState(null, '', window.location.pathname);
      return;
    }
    if (code) {
      const result = await supabase.auth.exchangeCodeForSession(code);
      if (!result.error && result.data.session) return;
    }
    throw new Error('Tiklash sessiyasi topilmadi. Emailingizga yangi tiklash havolasini yuboring.');
  })().finally(() => {
    pending = null;
  });
  return pending;
}
