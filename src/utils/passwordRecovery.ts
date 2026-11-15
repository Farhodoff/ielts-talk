export const PASSWORD_RECOVERY_PATH = '/auth/reset-password';

export function getPasswordRecoveryRedirect(origin: string): string {
  return new URL(PASSWORD_RECOVERY_PATH, origin).href;
}

export function isPasswordRecoveryLocation(
  location: Pick<Location, 'pathname' | 'search' | 'hash'>,
): boolean {
  return (
    location.pathname === PASSWORD_RECOVERY_PATH ||
    location.pathname === '/reset-password' ||
    new URLSearchParams(location.search).get('type') === 'recovery' ||
    new URLSearchParams(location.hash.replace(/^#/, '')).get('type') === 'recovery'
  );
}
