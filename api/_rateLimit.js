/**
 * Distributed Rate Limiter for Vercel Serverless & Edge Runtime.
 * 
 * Primary: Upstash Redis REST API (Multi-instance & cold-start safe)
 * Fallback: Sliding-window In-Memory Map (Local dev / testing environment)
 */

const WINDOW_SECONDS = 60; // 1 minute window
const MAX_REQUESTS_PER_WINDOW = 15; // Max 15 requests per minute

function isProductionRuntime() {
  return process.env.NODE_ENV === 'production' || process.env.VERCEL_ENV === 'production';
}

/**
 * When the distributed limiter is unreachable we must choose a side:
 * - fail CLOSED in production, so an outage cannot become an unbounded provider bill;
 * - fail OPEN elsewhere, so local development works without Redis.
 * `RATE_LIMIT_FAIL_OPEN=true` restores the old permissive behaviour if needed.
 */
function degradedDecision(reason) {
  const failOpen = process.env.RATE_LIMIT_FAIL_OPEN === 'true' || !isProductionRuntime();
  console.warn(
    `[RateLimit] Distributed limiter degraded (${reason}). Failing ${failOpen ? 'OPEN' : 'CLOSED'}.`,
  );
  if (failOpen) return null;
  return {
    allowed: false,
    remaining: 0,
    retryAfter: WINDOW_SECONDS,
    isDistributed: true,
    degraded: true,
  };
}

// Fallback in-memory store for local testing
const localIpStore = new Map();
const localUserStore = new Map();

function checkLocalFallback(store, key, maxLimit) {
  const now = Date.now();
  const windowMs = WINDOW_SECONDS * 1000;
  const timestamps = (store.get(key) || []).filter(t => now - t < windowMs);

  if (timestamps.length >= maxLimit) {
    const oldest = timestamps[0];
    const retryAfter = Math.max(1, Math.ceil((oldest + windowMs - now) / 1000));
    return { allowed: false, remaining: 0, retryAfter };
  }

  timestamps.push(now);
  store.set(key, timestamps);
  return { allowed: true, remaining: maxLimit - timestamps.length, retryAfter: 0 };
}

/**
 * Executes an atomic sliding/fixed window rate limit check.
 * Uses Upstash Redis pipeline via native fetch if env vars exist.
 */
export async function checkRateLimit(req, userId = null, customMaxLimit = null) {
  const redisUrl = process.env.UPSTASH_REDIS_REST_URL;
  const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN;

  // Extract client IP safely
  let clientIp = 'unknown_ip';
  if (req && typeof req.headers?.get === 'function') {
    clientIp = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown_ip';
  } else if (req && req.headers) {
    clientIp = req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || 'unknown_ip';
  }
  clientIp = clientIp.split(',')[0].trim();

  const rateLimitKey = userId ? `ratelimit:user:${userId}` : `ratelimit:ip:${clientIp}`;
  const maxLimit =
    customMaxLimit !== null
      ? (userId ? customMaxLimit : Math.max(30, Math.floor(customMaxLimit / 2)))
      : (userId ? MAX_REQUESTS_PER_WINDOW : Math.floor(MAX_REQUESTS_PER_WINDOW / 2));

  // 1. If Upstash Redis is configured, execute atomic distributed INCR + EXPIRE
  if (redisUrl && redisToken) {
    try {
      const response = await fetch(`${redisUrl}/pipeline`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${redisToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([
          ['INCR', rateLimitKey],
          ['EXPIRE', rateLimitKey, WINDOW_SECONDS, 'NX'],
          ['TTL', rateLimitKey],
        ]),
      });

      if (response.ok) {
        const results = await response.json();
        const count = results[0]?.result || 1;
        const ttl = results[2]?.result || WINDOW_SECONDS;

        if (count > maxLimit) {
          return {
            allowed: false,
            remaining: 0,
            retryAfter: Math.max(1, ttl),
            isDistributed: true,
          };
        }

        return {
          allowed: true,
          remaining: Math.max(0, maxLimit - count),
          retryAfter: 0,
          isDistributed: true,
        };
      }

      const degraded = degradedDecision(`unexpected status ${response.status}`);
      if (degraded) return degraded;
    } catch (err) {
      const degraded = degradedDecision(err?.message || 'request failed');
      if (degraded) return degraded;
    }
  } else {
    console.warn(
      '[RateLimit] UPSTASH_REDIS_REST_URL/TOKEN are not configured. Rate limiting falls back to per-instance memory and is NOT reliable in serverless.',
    );
  }

  // 2. Fallback to local memory limiter if Redis is not configured or fails
  const fallbackStore = userId ? localUserStore : localIpStore;
  const targetKey = userId || clientIp;
  const fallbackResult = checkLocalFallback(fallbackStore, targetKey, maxLimit);

  return {
    ...fallbackResult,
    isDistributed: false,
  };
}
