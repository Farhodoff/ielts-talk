export const SUPER_ADMIN_EMAIL = 'fsoyilov@gmail.com';

export const SUPER_ADMIN_EMAILS = ['fsoyilov@gmail.com'];

export const DEFAULT_ADMIN_EMAILS = ['fsoyilov@gmail.com', 'admin@ielts-talk.com'];

// Check if user is Super Admin
export const isSuperAdmin = (email?: string | null, role?: string | null): boolean => {
  if (role === 'superadmin') return true;
  if (!email) return false;
  const e = email.toLowerCase().trim();
  return SUPER_ADMIN_EMAILS.includes(e);
};

// English / IELTS track is currently in private preview and only available to Super Admin
export const isEnglishTrackAllowed = (email?: string | null): boolean => {
  return isSuperAdmin(email);
};

// Check if user is Admin or Super Admin
export const isAdminEmail = (email?: string | null, role?: string | null): boolean => {
  if (role === 'admin' || role === 'superadmin') return true;
  if (!email) return false;
  const e = email.toLowerCase().trim();
  if (DEFAULT_ADMIN_EMAILS.includes(e)) return true;
  return false;
};

/**
 * Resolves the application role for a user object.
 *
 * `user.role` is the Postgres role ('authenticated') for real Supabase sessions,
 * so it must not shadow the actual application role. Telegram users get their
 * role through `app_metadata.custom_role`, which only the admin API can set.
 */
const PRIVILEGED_ROLES = new Set(['superadmin', 'admin', 'owner']);

export const resolveUserRole = (user?: any): string | undefined => {
  if (!user) return undefined;

  const normalize = (candidate: unknown): string | undefined => {
    if (typeof candidate !== 'string') return undefined;
    const value = candidate.trim().toLowerCase();
    if (!value || value === 'authenticated' || value === 'anon') return undefined;
    return value;
  };

  // Only `app_metadata` (writable exclusively through the Supabase admin API)
  // may report an elevated role.
  for (const candidate of [user.app_metadata?.custom_role, user.app_metadata?.role]) {
    const value = normalize(candidate);
    if (value) return value;
  }

  // `user.role` mirrors the role stored server-side (profiles.role), so it is
  // trusted for elevated roles.
  const serverRole = normalize(user.role);
  if (serverRole) return serverRole;

  // `user_metadata` is rewritten directly by the user through
  // `supabase.auth.updateUser`, so it may describe an ordinary role but may
  // never grant admin rights.
  const userRole = normalize(user.user_metadata?.role);
  if (userRole && !PRIVILEGED_ROLES.has(userRole)) return userRole;

  return undefined;
};

// Helper for user object
export const isUserAdmin = (user?: any): boolean => {
  if (!user) return false;
  return isAdminEmail(user.email, resolveUserRole(user));
};

export const ADMIN_ROLE_ENDPOINT = '/api/admin/role';

type RoleAction = 'grant' | 'revoke';

/**
 * Role changes are performed by the server, never by the browser.
 *
 * Writing `profiles.role` directly from the client meant the only thing
 * protecting admin privileges was client-side JavaScript: anyone able to update
 * their own profile row could grant themselves admin. The server re-checks the
 * caller's superadmin status and is the only writer of the role columns.
 */
const changeAdminRole = async (email: string, action: RoleAction): Promise<boolean> => {
  if (!email) return false;
  try {
    const { supabase } = await import('../lib/supabase');
    const { data: sessionData } = await supabase.auth.getSession();
    const accessToken = sessionData?.session?.access_token;
    if (!accessToken) {
      console.warn('[Admin] Role change rejected: no authenticated session.');
      return false;
    }

    const res = await fetch(ADMIN_ROLE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ email: email.toLowerCase().trim(), action }),
    });

    const payload: any = await res.json().catch(() => ({}));
    if (!res.ok || payload?.ok !== true) {
      console.warn(
        `[Admin] Role ${action} rejected by server (${res.status}):`,
        payload?.message || payload?.error || 'unknown error',
      );
      return false;
    }

    console.info(
      `[Admin] Admin role ${action === 'grant' ? 'granted to' : 'revoked from'} ${email}`,
    );
    return true;
  } catch (e: any) {
    console.warn(`[Admin] Role ${action} exception:`, e?.message);
    return false;
  }
};

// Dynamic role grant — authorised and executed server-side
export const grantAdminRole = async (email: string): Promise<boolean> => {
  return changeAdminRole(email, 'grant');
};

export const revokeAdminRole = async (email: string): Promise<boolean> => {
  if (!email) return false;
  // Never allow revoking superadmin
  if (isSuperAdmin(email)) {
    console.warn('[Admin] Cannot revoke superadmin role');
    return false;
  }
  return changeAdminRole(email, 'revoke');
};
