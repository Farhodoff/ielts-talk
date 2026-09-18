/**
 * AI Daily Quota & Request Size Protection Manager
 *
 * Enforces a per-user daily request limit so a single account cannot run up an
 * unbounded provider bill. Limits are role-aware and overridable through env vars.
 *
 * NOTE: the previous `maxQuota = 99999` hardcode made this module a no-op while
 * its comments still claimed to prevent cost explosion.
 */

const MAX_REQUEST_SIZE_BYTES = 25 * 1024; // 25 KB max request body size

function envQuota(name, fallback) {
  const parsed = Number(process.env[name]);
  return Number.isFinite(parsed) && parsed > 0 ? Math.floor(parsed) : fallback;
}

const DAILY_QUOTA_FREE = envQuota('AI_DAILY_QUOTA_FREE', 25);
const DAILY_QUOTA_ADMIN = envQuota('AI_DAILY_QUOTA_ADMIN', 500);

const PRIVILEGED_ROLES = new Set(['superadmin', 'admin', 'owner']);

/**
 * Resolves the daily AI request allowance for an application role.
 */
export function getDailyQuotaForRole(userRole) {
  const role = String(userRole || 'student').toLowerCase();
  return PRIVILEGED_ROLES.has(role) ? DAILY_QUOTA_ADMIN : DAILY_QUOTA_FREE;
}

// In-memory fallback for daily quota (per instance; Redis is authoritative)
const localDailyQuotaStore = new Map();
let warnedMissingRedis = false;

function getTodayKey() {
  const now = new Date();
  return `${now.getUTCFullYear()}-${String(now.getUTCMonth() + 1).padStart(2, '0')}-${String(now.getUTCDate()).padStart(2, '0')}`;
}

/**
 * Checks request size and daily AI quota.
 * Returns { allowed: boolean, remainingQuota: number, reason?: string }
 */
export async function checkDailyQuota(userId, userRole = 'student', bodyString = '') {
  if (bodyString && typeof bodyString === 'string' && bodyString.length > MAX_REQUEST_SIZE_BYTES) {
    return {
      allowed: false,
      remainingQuota: 0,
      reason: `So'rov hajmi ruxsat etilgan maksimal chegaradan (${MAX_REQUEST_SIZE_BYTES / 1024} KB) oshdi.`,
    };
  }

  // Anonymous callers are throttled by IP in the rate limiter instead.
  if (!userId) {
    return { allowed: true, remainingQuota: null };
  }

  const maxQuota = getDailyQuotaForRole(userRole);
  const todayStr = getTodayKey();
  const redisUrl = process.env.UPSTASH_REDIS_REST_URL;
  const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN;
  const quotaKey = `quota:ai:${userId}:${todayStr}`;

  const quotaExceeded = {
    allowed: false,
    remainingQuota: 0,
    reason: `Bugungi kunlik AI so'rovlar limitingiz (${maxQuota} ta) tugadi. Ertaga qayta urinib ko'ring.`,
  };

  // 1. Redis is authoritative when configured (shared across instances).
  if (redisUrl && redisToken) {
    try {
      const response = await fetch(`${redisUrl}/pipeline`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${redisToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([
          ['INCR', quotaKey],
          ['EXPIRE', quotaKey, 86400, 'NX'], // 24 hours
        ]),
      });

      if (response.ok) {
        const results = await response.json();
        const currentCount = results[0]?.result || 1;

        if (currentCount > maxQuota) {
          return quotaExceeded;
        }

        return {
          allowed: true,
          remainingQuota: maxQuota - currentCount,
        };
      }

      console.warn('[Quota] Upstash Redis returned status', response.status);
    } catch (e) {
      console.warn('[Quota] Upstash Redis quota check failed, falling back to memory store:', e?.message);
    }
  } else if (!warnedMissingRedis) {
    warnedMissingRedis = true;
    console.warn(
      '[Quota] UPSTASH_REDIS_REST_URL/TOKEN are not configured. Daily quotas are enforced per instance only.',
    );
  }

  // 2. In-memory fallback (weak in serverless: resets on cold start).
  const memoryKey = `${userId}:${todayStr}`;
  const currentCount = (localDailyQuotaStore.get(memoryKey) || 0) + 1;
  localDailyQuotaStore.set(memoryKey, currentCount);

  if (currentCount > maxQuota) {
    return quotaExceeded;
  }

  return {
    allowed: true,
    remainingQuota: maxQuota - currentCount,
  };
}
