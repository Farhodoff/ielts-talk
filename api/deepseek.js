import { verifyAuth, getUserRole } from './_auth.js';
import { checkRateLimit } from './_rateLimit.js';
import { checkDailyQuota } from './_quota.js';

export const config = {
  maxDuration: 60,
};

const ALLOWED_MODELS = new Set(['deepseek-chat', 'deepseek-reasoner']);
const ALLOWED_PAYLOAD_KEYS = new Set([
  'model',
  'messages',
  'max_tokens',
  'temperature',
  'top_p',
  'presence_penalty',
  'frequency_penalty',
  'stop',
  'response_format',
  'stream',
  'seed',
]);

const ALLOWED_MESSAGE_ROLES = new Set(['system', 'user', 'assistant']);
const MAX_MESSAGES = 40;
const MAX_MESSAGE_CHARS = 24000;
const MAX_TOTAL_CHARS = 120000;

const CONFIGURED_ORIGINS = (process.env.ALLOWED_ORIGINS || process.env.CORS_ALLOWED_ORIGINS || '')
  .split(',')
  .map((origin) => origin.trim().replace(/\/$/, ''))
  .filter(Boolean);

function clampNumber(value, min, max) {
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) return undefined;
  return Math.min(Math.max(parsed, min), max);
}

/**
 * Sets CORS headers only for origins we explicitly trust.
 * Same-origin calls from the app itself never need an Access-Control-Allow-Origin
 * header, so an unknown origin simply gets no CORS permission.
 */
function applyCors(req, res) {
  const origin = req.headers?.origin || req.headers?.Origin;
  if (!origin || typeof origin !== 'string') return;

  const normalized = origin.replace(/\/$/, '');
  const deploymentOrigin = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null;
  const isAllowed =
    CONFIGURED_ORIGINS.includes(normalized) || (deploymentOrigin && normalized === deploymentOrigin);

  if (!isAllowed) {
    console.warn('[api/deepseek] Blocked cross-origin request from:', normalized);
    return;
  }

  res.setHeader('Access-Control-Allow-Origin', normalized);
  res.setHeader('Vary', 'Origin');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, apikey');
}

/**
 * Whitelists and clamps everything that reaches the upstream provider.
 * Prevents this endpoint from being used as an arbitrary AI proxy (model swapping,
 * oversized contexts, provider-specific parameters).
 */
export function sanitizeAiPayload(raw) {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) {
    return { error: 'Invalid request body.' };
  }

  const clean = {};
  for (const key of Object.keys(raw)) {
    if (ALLOWED_PAYLOAD_KEYS.has(key)) clean[key] = raw[key];
  }

  if (typeof clean.model !== 'string' || !ALLOWED_MODELS.has(clean.model)) {
    clean.model = 'deepseek-chat';
  }

  if (!Array.isArray(clean.messages) || clean.messages.length === 0) {
    return { error: 'The `messages` field is required.' };
  }

  const messages = [];
  let totalChars = 0;
  for (const message of clean.messages.slice(0, MAX_MESSAGES)) {
    if (!message || typeof message !== 'object') continue;
    const role = ALLOWED_MESSAGE_ROLES.has(message.role) ? message.role : 'user';
    const content = typeof message.content === 'string' ? message.content.slice(0, MAX_MESSAGE_CHARS) : '';
    if (!content) continue;
    totalChars += content.length;
    if (totalChars > MAX_TOTAL_CHARS) break;
    messages.push({ role, content });
  }

  if (messages.length === 0) {
    return { error: 'The `messages` field must contain at least one non-empty message.' };
  }
  clean.messages = messages;

  if (clean.max_tokens !== undefined) {
    clean.max_tokens = Math.min(Math.max(Math.floor(Number(clean.max_tokens)) || 1, 1), 4096);
  }
  const numericBounds = {
    temperature: [0, 2],
    top_p: [0, 1],
    presence_penalty: [-2, 2],
    frequency_penalty: [-2, 2],
  };
  for (const [key, [min, max]] of Object.entries(numericBounds)) {
    if (clean[key] === undefined) continue;
    const value = clampNumber(clean[key], min, max);
    if (value === undefined) {
      delete clean[key];
    } else {
      clean[key] = value;
    }
  }

  if (clean.response_format !== undefined) {
    if (clean.response_format?.type === 'json_object') {
      clean.response_format = { type: 'json_object' };
    } else {
      delete clean.response_format;
    }
  }

  clean.stream = clean.stream === true;

  return { payload: clean };
}

async function pipeEventStream(upstream, res) {
  res.setHeader('Content-Type', 'text/event-stream; charset=utf-8');
  res.setHeader('Cache-Control', 'no-cache, no-transform');
  res.setHeader('Connection', 'keep-alive');
  res.setHeader('X-Accel-Buffering', 'no');
  if (typeof res.flushHeaders === 'function') res.flushHeaders();

  const reader = upstream.body.getReader();
  try {
    for (;;) {
      const { done, value } = await reader.read();
      if (done) break;
      res.write(Buffer.from(value));
    }
  } finally {
    res.end();
  }
}

export default async function handler(req, res) {
  applyCors(req, res);

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  // Diagnostic GET route: reports availability without leaking provider details.
  if (req.method === 'GET') {
    return res.status(200).json({ status: 'active', available: true });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  let parsedBody = req.body || {};
  if (typeof parsedBody === 'string') {
    try {
      parsedBody = JSON.parse(parsedBody);
    } catch {
      return res.status(400).json({ error: 'Invalid JSON payload' });
    }
  }

  const rawBody = typeof req.body === 'string' ? req.body : JSON.stringify(req.body || {});

  // --- Authentication -------------------------------------------------------
  const { user, error: authError, status: authStatus } = await verifyAuth(req);

  if (authError) {
    // An invalid/expired token must never be silently downgraded to the
    // anonymous bucket: that hides real auth failures and weakens accounting.
    return res.status(authStatus || 401).json({ error: 'Unauthorized', message: authError });
  }

  const authenticatedUserId = user?.id || null;
  const userRole = getUserRole(user);

  // --- Rate limiting & quota ------------------------------------------------
  if (authenticatedUserId) {
    const rateCheck = await checkRateLimit(req, authenticatedUserId);
    if (!rateCheck.allowed) {
      res.setHeader('Retry-After', String(rateCheck.retryAfter));
      return res.status(429).json({
        error: 'Too Many Requests',
        message: `AI so'rovlar tezligi oshdi. Iltimos ${rateCheck.retryAfter} soniyadan so'ng qayta urinib ko'ring.`,
        retryAfter: rateCheck.retryAfter,
      });
    }

    const quotaCheck = await checkDailyQuota(authenticatedUserId, userRole, rawBody);
    if (!quotaCheck.allowed) {
      return res.status(403).json({
        error: 'Quota Exceeded',
        message: quotaCheck.reason,
      });
    }
  } else {
    const ipRate = await checkRateLimit(req, null);
    if (!ipRate.allowed) {
      res.setHeader('Retry-After', String(ipRate.retryAfter));
      return res.status(429).json({
        error: 'Too Many Requests',
        message: `So'rovlar tezligi oshdi. Iltimos ${ipRate.retryAfter} soniyadan so'ng qayta urinib ko'ring.`,
        retryAfter: ipRate.retryAfter,
      });
    }
  }

  // --- Payload sanitization -------------------------------------------------
  const sanitized = sanitizeAiPayload(parsedBody);
  if (sanitized.error) {
    return res.status(400).json({ error: sanitized.error });
  }
  const payload = sanitized.payload;
  const wantsStream = payload.stream === true;

  const supabaseUrl = (
    process.env.VITE_SUPABASE_URL ||
    process.env.NEXT_PUBLIC_SUPABASE_URL ||
    'https://qmuimxnknxwarvnkpnlo.supabase.co'
  ).replace(/\/$/, '');
  const anonKey =
    process.env.VITE_SUPABASE_ANON_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
    'sb_publishable_6g0Ei_1Cw46e1mJLKj_1Ug_sOmhlgoI';

  // --- Primary: Supabase Edge AI gateway ------------------------------------
  try {
    const edgeRes = await fetch(`${supabaseUrl}/functions/v1/deepseek`, {
      method: 'POST',
      headers: {
        apikey: anonKey,
        Authorization: `Bearer ${anonKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (edgeRes.ok) {
      const upstreamType = edgeRes.headers.get('content-type') || '';
      if (wantsStream && edgeRes.body && upstreamType.includes('event-stream')) {
        return await pipeEventStream(edgeRes, res);
      }
      const edgeData = await edgeRes.json();
      return res.status(edgeRes.status).json(edgeData);
    }

    console.warn('[api/deepseek] Supabase Edge Function non-200 status:', edgeRes.status);
  } catch (edgeProxyErr) {
    console.warn(
      '[api/deepseek] Failed to proxy to Supabase Edge Function:',
      edgeProxyErr?.message || edgeProxyErr,
    );
  }

  // --- Degraded fallback: direct DeepSeek with the server key ---------------
  const rawServerKey = process.env.DEEPSEEK_API_KEY;
  if (rawServerKey && rawServerKey.trim().length > 10) {
    try {
      const cleanKey = rawServerKey
        .trim()
        .replace(/^["']|["']$/g, '')
        .replace(/^Bearer\s+/i, '');

      const directRes = await fetch('https://api.deepseek.com/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${cleanKey}`,
        },
        body: JSON.stringify(payload),
      });

      if (directRes.ok && wantsStream && directRes.body) {
        return await pipeEventStream(directRes, res);
      }

      const directData = await directRes.json().catch(() => ({}));
      return res.status(directRes.status).json(directData);
    } catch (directApiErr) {
      console.error(
        '[api/deepseek] Direct DeepSeek API fallback error:',
        directApiErr?.message || directApiErr,
      );
    }
  }

  return res.status(503).json({
    error: {
      code: 'AI_NOT_CONFIGURED',
      message: 'AI xizmati vaqtincha mavjud emas.',
    },
  });
}
