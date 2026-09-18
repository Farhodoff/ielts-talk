import { createClient } from '@supabase/supabase-js';
import { verifyAuth } from '../_auth.js';
import { checkRateLimit } from '../_rateLimit.js';

/**
 * Server-side administrator role management.
 *
 * Role assignment previously happened straight from the browser: the admin
 * dashboard wrote `profiles.role` with the public anon key, so the only thing
 * standing between a student and admin rights was client-side JavaScript.
 * Privilege changes must be authorised by the server, so this endpoint is the
 * single place where `profiles.role` and `app_metadata.custom_role` are written.
 */

const getSupabaseUrl = () =>
  process.env.VITE_SUPABASE_URL ||
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  'https://qmuimxnknxwarvnkpnlo.supabase.co';

const getServiceRole = () => process.env.SERVICE_ROLE || process.env.SUPABASE_SERVICE_ROLE_KEY;

const parseList = (value, fallback) =>
  String(value || fallback)
    .split(',')
    .map((entry) => entry.trim().toLowerCase())
    .filter(Boolean);

const SUPER_ADMIN_EMAILS = new Set(
  parseList(process.env.SUPERADMIN_EMAIL || process.env.SUPER_ADMIN_EMAILS, 'fsoyilov@gmail.com'),
);

const CONFIGURED_ORIGINS = (process.env.ALLOWED_ORIGINS || process.env.CORS_ALLOWED_ORIGINS || '')
  .split(',')
  .map((origin) => origin.trim().replace(/\/$/, ''))
  .filter(Boolean);

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function applyCors(req, res) {
  const origin = req.headers?.origin || req.headers?.Origin;
  if (!origin || typeof origin !== 'string') return;

  const normalized = origin.replace(/\/$/, '');
  const deploymentOrigin = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null;
  const isAllowed =
    CONFIGURED_ORIGINS.includes(normalized) || (deploymentOrigin && normalized === deploymentOrigin);

  if (!isAllowed) {
    console.warn('[api/admin/role] Blocked cross-origin request from:', normalized);
    return;
  }

  res.setHeader('Access-Control-Allow-Origin', normalized);
  res.setHeader('Vary', 'Origin');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, apikey');
}

const SUPER_ADMIN_APP_ROLES = new Set(['superadmin', 'owner']);

/**
 * A caller is a superadmin when `app_metadata.custom_role` says so, or when the
 * verified email is on the configured allow-list.
 *
 * Only `app_metadata` is consulted: it can be written exclusively through the
 * Supabase admin API. `user_metadata` is user-editable, so accepting a role from
 * there would let any signed-in user promote themselves.
 */
export function isSuperAdminUser(user) {
  if (!user) return false;

  const appRole = String(user.app_metadata?.custom_role || '')
    .trim()
    .toLowerCase();
  if (SUPER_ADMIN_APP_ROLES.has(appRole)) return true;

  const email = String(user.email || '')
    .trim()
    .toLowerCase();
  return Boolean(email) && SUPER_ADMIN_EMAILS.has(email);
}

export function normalizeRoleAction(raw) {
  const action = String(raw || '')
    .trim()
    .toLowerCase();
  if (action === 'grant') return { action, role: 'admin' };
  if (action === 'revoke') return { action, role: 'user' };
  return null;
}

export default async function handler(req, res) {
  applyCors(req, res);

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST, OPTIONS');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { user, error: authError, status: authStatus } = await verifyAuth(req);
  if (authError) {
    return res.status(authStatus || 401).json({ error: 'Unauthorized', message: authError });
  }
  if (!user) {
    return res.status(401).json({ error: 'Unauthorized', message: 'Authentication required.' });
  }

  if (!isSuperAdminUser(user)) {
    return res.status(403).json({
      error: 'Forbidden',
      message: "Faqat Super Admin admin huquqlarini o'zgartira oladi.",
    });
  }

  // Role changes are rare and high impact — keep a tight per-caller budget.
  const rateCheck = await checkRateLimit(req, `admin-role:${user.id}`, 20);
  if (!rateCheck.allowed) {
    res.setHeader('Retry-After', String(rateCheck.retryAfter));
    return res.status(429).json({
      error: 'Too Many Requests',
      message: 'Rol boshqaruvi uchun so\u2018rovlar tezligi oshdi. Keyinroq qayta urinib ko\u2018ring.',
      retryAfter: rateCheck.retryAfter,
    });
  }

  const serviceRole = getServiceRole();
  if (!serviceRole) {
    console.warn('[api/admin/role] SERVICE_ROLE is not configured; refusing role change.');
    return res.status(503).json({
      error: 'Not Configured',
      message: 'Rol boshqaruvi serverda sozlanmagan (SERVICE_ROLE yo\u2018q).',
    });
  }

  let body = req.body ?? {};
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch {
      return res.status(400).json({ error: 'Invalid JSON payload' });
    }
  }

  const targetEmail = String(body?.email || '')
    .trim()
    .toLowerCase();
  const normalized = normalizeRoleAction(body?.action);

  if (!targetEmail || !EMAIL_PATTERN.test(targetEmail) || targetEmail.length > 320) {
    return res.status(400).json({ error: 'Valid `email` is required.' });
  }
  if (!normalized) {
    return res.status(400).json({ error: '`action` must be either "grant" or "revoke".' });
  }

  const callerEmail = String(user.email || '')
    .trim()
    .toLowerCase();

  if (SUPER_ADMIN_EMAILS.has(targetEmail)) {
    return res.status(403).json({
      error: 'Forbidden',
      message: 'Super Admin rolini o\u2018zgartirish mumkin emas.',
    });
  }
  if (callerEmail && callerEmail === targetEmail) {
    return res.status(403).json({
      error: 'Forbidden',
      message: "O'z rolingizni o'zgartira olmaysiz.",
    });
  }

  const supabase = createClient(getSupabaseUrl(), serviceRole, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  const { data: profiles, error: profileLookupError } = await supabase
    .from('profiles')
    .select('id,email,role')
    .ilike('email', targetEmail)
    .limit(1);

  if (profileLookupError) {
    console.error('[api/admin/role] Profile lookup failed:', profileLookupError.message);
    return res.status(502).json({ error: 'Database error', message: profileLookupError.message });
  }

  const target = Array.isArray(profiles) ? profiles[0] : null;
  if (!target?.id) {
    return res.status(404).json({ error: 'Not Found', message: 'Foydalanuvchi topilmadi.' });
  }

  if (normalized.action === 'grant' && target.role === 'superadmin') {
    return res.status(403).json({
      error: 'Forbidden',
      message: "Faqat Super Admin admin huquqlarini o'zgartira oladi.",
    });
  }

  // `app_metadata` is only writable through the admin API, so it is the
  // authoritative application role used by server-side checks.
  const { error: metaError } = await supabase.auth.admin.updateUserById(target.id, {
    app_metadata: { custom_role: normalized.role },
  });
  if (metaError) {
    console.error('[api/admin/role] app_metadata update failed:', metaError.message);
    return res.status(502).json({ error: 'Role update failed', message: metaError.message });
  }

  const { error: profileError } = await supabase
    .from('profiles')
    .update({ role: normalized.role, updated_at: new Date().toISOString() })
    .eq('id', target.id);

  if (profileError) {
    // The authoritative role already changed, so report a soft failure instead
    // of pretending nothing happened.
    console.warn('[api/admin/role] profiles.role sync failed:', profileError.message);
    return res.status(200).json({
      ok: true,
      email: targetEmail,
      role: normalized.role,
      warning: 'profiles.role sync failed; app_metadata is authoritative.',
    });
  }

  return res.status(200).json({ ok: true, email: targetEmail, role: normalized.role });
}
