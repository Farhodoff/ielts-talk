import { supabase, supabaseAnonKey, supabaseUrl } from '../lib/supabase';
import { purgeOversizedCookies } from '../lib/consoleFilter';
import { isLegacyTelegramToken } from './telegramAuth';

export interface DeepSeekRequestOptions {
  systemPrompt?: string;
  isJson?: boolean;
  modelName?: 'deepseek-chat' | 'deepseek-reasoner' | string;
  thinkingEnabled?: boolean;
  timeoutMs?: number;
}

/**
 * ARCHITECTURE INVARIANTS
 * - Single AI provider: DeepSeek.
 * - Requests go through the serverless gateway `POST /api/deepseek` first, so that
 *   server-side rate limiting, daily quota and payload clamping always apply.
 * - The signed-in Supabase access token is attached when available; anonymous
 *   callers fall back to the public anon key and are IP rate limited.
 * - Responses with an authentication/authorization/quota status (401/403/429) are
 *   NEVER retried through a fallback route — those must surface to the user.
 * - The non-gateway path (Supabase SDK invoke) exists only for gateway outages and
 *   is skipped whenever the gateway answered with a definitive status.
 */

const GATEWAY_PATH = '/api/deepseek';
const DEFAULT_TIMEOUT_MS = 60_000;
const STREAM_TIMEOUT_MS = 90_000;

/** Statuses that are authoritative and must not be retried elsewhere. */
const NON_RETRYABLE_STATUSES = new Set([400, 401, 403, 422, 429]);

function extractChoiceText(data: any): string {
  return (
    data?.choices?.[0]?.message?.content ||
    data?.choices?.[0]?.message?.reasoning_content ||
    data?.choices?.[0]?.text ||
    data?.reply ||
    ''
  );
}

function parseMaybeJson(raw: string): any {
  try {
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

function formatDeepSeekError(status: number, errObj: any): string {
  const rawMsg =
    errObj?.error?.message ||
    errObj?.message ||
    (typeof errObj?.error === 'string' ? errObj.error : null) ||
    '';
  const lower = rawMsg.toLowerCase();

  const errorCode =
    errObj?.error?.code || (typeof errObj?.error === 'string' ? errObj.error : null);

  // The gateway's own 401 means OUR session is invalid — not a provider key problem.
  if (status === 401 && errObj?.error === 'Unauthorized') {
    return 'AI_SESSION_EXPIRED: Sessiyangiz yaroqsiz yoki muddati tugagan. Iltimos qaytadan kiring.';
  }

  if (
    status === 401 ||
    lower.includes('invalid api key') ||
    lower.includes('authentication fails') ||
    lower.includes('authentication') ||
    lower.includes('unauthorized')
  ) {
    return "AI_UNAVAILABLE: DeepSeek API kaliti noto'g'ri sozlangan yoki muddati o'tgan (Authentication Fails). Iltimos Vercel Dashboard → Settings → Environment Variables bo'limida DEEPSEEK_API_KEY kalitini yangilang.";
  }
  if (
    status === 403 &&
    (lower.includes('quota') || lower.includes('limit') || errObj?.error === 'Quota Exceeded')
  ) {
    return `AI_QUOTA_EXCEEDED: ${rawMsg || "Kunlik AI so'rovlar limitingiz tugadi."}`;
  }
  if (status === 403) {
    return `AI_FORBIDDEN: ${rawMsg || "Bu amal uchun ruxsat yo'q."}`;
  }
  if (
    status === 503 ||
    errorCode === 'AI_UNAVAILABLE' ||
    errorCode === 'AI_NOT_CONFIGURED' ||
    lower.includes('unavailable') ||
    lower.includes('not configured')
  ) {
    return "AI_UNAVAILABLE: AI xizmati vaqtincha mavjud emas. Iltimos birozdan so'ng qayta urinib ko'ring.";
  }
  if (status === 429 || lower.includes('rate limit') || lower.includes('too many requests')) {
    return "AI_RATE_LIMITED: AI so'rovlar tezligi oshdi (429). Iltimos bir necha soniyadan so'ng qayta urinib ko'ring.";
  }
  if (status === 408 || lower.includes('timeout')) {
    return "AI_TIMEOUT: AI xizmati javob berish vaqti tugadi (Timeout). Iltimos qayta urinib ko'ring.";
  }
  if (
    status === 494 ||
    status === 431 ||
    lower.includes('header too large') ||
    lower.includes('cookie')
  ) {
    purgeOversizedCookies();
    return "AI_UNAVAILABLE: Brauzer xotirasi sarlavhalari to'ldi (HTTP 494). Kesh avtomatik tozalandi, iltimos sahifani yangilab qayta urinib ko'ring.";
  }
  if (lower.includes('balance') || lower.includes('insufficient')) {
    return "AI_UNAVAILABLE: DeepSeek hisobingizda mablag' (balans) tugagan. Iltimos DeepSeek hisobini to'ldiring.";
  }
  if (rawMsg) {
    return `AI_ERROR (${status}): ${rawMsg}`;
  }
  return `AI_ERROR: AI xizmatida xatolik yuz berdi (HTTP ${status}). Iltimos qayta urinib ko'ring.`;
}

/**
 * Builds request headers, attaching the real Supabase access token when the user
 * is signed in so that server-side per-user rate limiting and quota apply.
 * Legacy unsigned Telegram tokens are never sent — they are rejected server-side.
 */
async function buildGatewayHeaders(
  extra: Record<string, string> = {},
): Promise<Record<string, string>> {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    apikey: supabaseAnonKey,
    Authorization: `Bearer ${supabaseAnonKey}`,
    ...extra,
  };

  try {
    const { data } = await supabase.auth.getSession();
    const token = data?.session?.access_token;
    if (token && !isLegacyTelegramToken(token)) {
      headers.Authorization = `Bearer ${token}`;
    }
  } catch {
    // Anonymous callers stay on the anon key and are IP rate limited.
  }

  return headers;
}

// Resolved lazily: several test suites partially mock `lib/supabase`.
const edgeStreamUrl = () => `${String(supabaseUrl || '').replace(/\/$/, '')}/functions/v1/deepseek`;

/**
 * Opens an SSE response, preferring the authenticated gateway.
 * A definitive gateway status (401/403/429) is authoritative and never retried,
 * so rate limiting and quota cannot be bypassed by forcing a fallback.
 */
async function requestEventStream(
  payload: Record<string, unknown>,
  signal: AbortSignal | undefined,
): Promise<Response> {
  const attempts: { url: string; headers: () => Promise<Record<string, string>> }[] = [
    { url: GATEWAY_PATH, headers: () => buildGatewayHeaders({ Accept: 'text/event-stream' }) },
    {
      url: edgeStreamUrl(),
      headers: async () => ({
        'Content-Type': 'application/json',
        Accept: 'text/event-stream',
        apikey: supabaseAnonKey,
        Authorization: `Bearer ${supabaseAnonKey}`,
      }),
    },
  ];

  let lastError: string | null = null;

  for (let i = 0; i < attempts.length; i++) {
    const attempt = attempts[i];
    try {
      const response = await fetch(attempt.url, {
        method: 'POST',
        headers: await attempt.headers(),
        body: JSON.stringify(payload),
        signal,
      });

      if (response.ok) return response;

      const errData = parseMaybeJson(await response.text().catch(() => ''));
      const message = formatDeepSeekError(response.status, errData);
      lastError = message;

      if (i === 0) {
        console.warn('[DeepSeek Gateway] Streaming status:', response.status, message);
        if (NON_RETRYABLE_STATUSES.has(response.status)) {
          throw new Error(message);
        }
      }
    } catch (err: any) {
      if (err?.message && err.message.startsWith('AI_')) throw err;
      lastError = err?.message || null;
      console.warn('[DeepSeek] Streaming attempt failed:', attempt.url, err?.message);
    }
  }

  throw new Error(lastError || 'AI_UNAVAILABLE: AI xizmati vaqtincha mavjud emas.');
}

function timeoutSignal(timeoutMs: number, external?: AbortSignal): AbortSignal | undefined {
  if (external) return external;
  if (typeof AbortSignal !== 'undefined' && 'timeout' in AbortSignal) {
    return AbortSignal.timeout(timeoutMs);
  }
  return undefined;
}

/**
 * Universal DeepSeek AI Dispatcher.
 */
export const callDeepSeek = async (
  prompt: string,
  systemPromptOrOptions?: string | DeepSeekRequestOptions | null,
  systemPromptParam?: string,
  isJson: boolean = false,
  modelName: string = 'deepseek-chat',
  thinkingEnabled: boolean = false,
): Promise<string> => {
  let effectiveSystemPrompt: string | undefined = undefined;
  let effectiveIsJson = isJson;
  let effectiveModel = modelName;
  let effectiveThinking = thinkingEnabled;
  let effectiveTimeoutMs = DEFAULT_TIMEOUT_MS;

  if (systemPromptOrOptions && typeof systemPromptOrOptions === 'object') {
    effectiveSystemPrompt = systemPromptOrOptions.systemPrompt;
    effectiveIsJson = Boolean(systemPromptOrOptions.isJson);
    effectiveModel = systemPromptOrOptions.modelName || 'deepseek-chat';
    effectiveThinking = Boolean(systemPromptOrOptions.thinkingEnabled);
    if (
      typeof systemPromptOrOptions.timeoutMs === 'number' &&
      systemPromptOrOptions.timeoutMs > 0
    ) {
      effectiveTimeoutMs = systemPromptOrOptions.timeoutMs;
    }
  } else if (typeof systemPromptOrOptions === 'string') {
    effectiveSystemPrompt = systemPromptOrOptions;
  } else if (systemPromptParam) {
    effectiveSystemPrompt = systemPromptParam;
  }

  let actualModel = 'deepseek-chat';
  if (
    !effectiveIsJson &&
    (effectiveModel === 'deepseek-reasoner' ||
      effectiveModel.includes('reasoner') ||
      effectiveThinking)
  ) {
    actualModel = 'deepseek-reasoner';
  }

  const messages: { role: string; content: string }[] = [];
  if (effectiveSystemPrompt) {
    messages.push({ role: 'system', content: effectiveSystemPrompt });
  }
  messages.push({ role: 'user', content: prompt });

  const payload: Record<string, unknown> = {
    model: actualModel,
    messages: messages,
  };

  if (effectiveIsJson) {
    payload.model = 'deepseek-chat';
    payload.response_format = { type: 'json_object' };
  }

  let lastSpecificError: string | null = null;

  // 1. Primary route: authenticated, rate-limited serverless gateway.
  try {
    purgeOversizedCookies();
    const response = await fetch(GATEWAY_PATH, {
      method: 'POST',
      headers: await buildGatewayHeaders(),
      body: JSON.stringify(payload),
      signal: timeoutSignal(effectiveTimeoutMs),
    });

    if (response.ok) {
      const data = await response.json();
      if (data?.error) {
        const status = data?.status || (data.error?.code === 'AI_NOT_CONFIGURED' ? 503 : 400);
        throw new Error(formatDeepSeekError(status, data));
      }
      const text = extractChoiceText(data);
      if (text && text.trim().length > 0) return text;
      throw new Error("AI_EMPTY_RESPONSE: AI xizmati bo'sh javob qaytardi.");
    }

    const errData = parseMaybeJson(await response.text().catch(() => ''));
    const errMsg = formatDeepSeekError(response.status, errData);
    lastSpecificError = errMsg;
    console.warn('[DeepSeek Gateway] Status:', response.status, errMsg);

    // Definitive statuses are surfaced immediately; no fallback that would
    // bypass rate limiting, quota or authentication.
    if (NON_RETRYABLE_STATUSES.has(response.status)) {
      throw new Error(errMsg);
    }
  } catch (gatewayErr: any) {
    if (gatewayErr?.message && gatewayErr.message.startsWith('AI_')) {
      throw gatewayErr;
    }
    console.warn('[DeepSeek Gateway] Notice, trying degraded fallback:', gatewayErr?.message);
  }

  // 2. Degraded fallback for gateway outages only (Supabase Edge Function invoke).
  try {
    const { data, error } = await supabase.functions.invoke('deepseek', {
      body: payload,
      headers: {
        Authorization: `Bearer ${supabaseAnonKey}`,
        apikey: supabaseAnonKey,
      },
    });

    if (!error && data) {
      if (data.error) {
        const status = data?.status || (data.error?.code === 'AI_NOT_CONFIGURED' ? 503 : 400);
        throw new Error(formatDeepSeekError(status, data));
      }
      const text = extractChoiceText(data);
      if (text && text.trim().length > 0) return text;
    } else if (error) {
      console.warn('[DeepSeek Edge Fallback] Error:', error.message);
    }
  } catch (fallbackErr: any) {
    if (fallbackErr?.message && fallbackErr.message.startsWith('AI_')) {
      throw fallbackErr;
    }
    console.warn('[DeepSeek Edge Fallback] Exception:', fallbackErr?.message);
  }

  if (lastSpecificError) {
    throw new Error(lastSpecificError);
  }

  throw new Error(
    "AI_UNAVAILABLE: AI xizmati vaqtincha mavjud emas. Iltimos qayta urinib ko'ring.",
  );
};

/**
 * Streams tokens from DeepSeek through the serverless gateway.
 *
 * The gateway forwards the upstream SSE body as-is, so `onToken` is called as soon
 * as each delta arrives instead of after the full completion.
 */
export const streamDeepSeekTokens = async (
  messages: { role: string; content: string }[],
  onToken: (token: string) => void,
  isJson: boolean = false,
  signal?: AbortSignal,
): Promise<string> => {
  purgeOversizedCookies();

  const payload: Record<string, unknown> = {
    model: 'deepseek-chat',
    messages,
    stream: true,
  };

  if (isJson) {
    payload.response_format = { type: 'json_object' };
  }

  const response = await requestEventStream(payload, timeoutSignal(STREAM_TIMEOUT_MS, signal));

  const contentType = response.headers.get('content-type') || '';

  // Gateway (or an upstream proxy) answered with a buffered JSON body.
  if (!response.body || !contentType.includes('event-stream')) {
    const data = await response.json().catch(() => ({}));
    const text = extractChoiceText(data);
    if (text && text.trim().length > 0) {
      onToken(text);
      return text;
    }
    throw new Error("AI_EMPTY_RESPONSE: AI xizmati bo'sh javob qaytardi.");
  }

  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let accumulated = '';
  let buffer = '';

  try {
    for (;;) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split('\n');
      // Keep the trailing partial line for the next chunk.
      buffer = lines.pop() ?? '';

      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith(':') || trimmed === 'data: [DONE]') continue;
        if (!trimmed.startsWith('data: ')) continue;

        const parsed = parseMaybeJson(trimmed.slice(6));
        const delta = parsed?.choices?.[0]?.delta?.content || '';
        if (delta) {
          accumulated += delta;
          onToken(delta);
        }
      }
    }
  } finally {
    reader.releaseLock?.();
  }

  if (!accumulated.trim()) {
    throw new Error("AI_EMPTY_RESPONSE: AI xizmati bo'sh javob qaytardi.");
  }

  return accumulated;
};
