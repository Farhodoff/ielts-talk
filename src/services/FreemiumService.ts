/**
 * Freemium Service — IELTS Talk
 * Manages daily free usage limits (1 Writing, 1 Speaking per day)
 * and waitlist/notification subscriptions for the upcoming PRO tier.
 */

export interface DailyUsage {
  date: string; // YYYY-MM-DD
  writingCount: number;
  speakingCount: number;
}

export interface FreemiumQuotaStatus {
  canUseWriting: boolean;
  canUseSpeaking: boolean;
  writingUsed: number;
  speakingUsed: number;
  maxWriting: number;
  maxSpeaking: number;
  remainingWriting: number;
  remainingSpeaking: number;
  hoursUntilReset: number;
  minutesUntilReset: number;
}

const STORAGE_PREFIX = 'ielts_freemium_usage_';
const WAITLIST_STORAGE_KEY = 'ielts_pro_waitlist';

export const MAX_FREE_WRITING_PER_DAY = 1;
export const MAX_FREE_SPEAKING_PER_DAY = 1;

function getTodayString(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function getStorageKey(userId?: string): string {
  const userKey = userId ? `user_${userId}` : 'guest';
  return `${STORAGE_PREFIX}${userKey}_${getTodayString()}`;
}

export class FreemiumService {
  /**
   * Retrieves today's usage for the given user or guest
   */
  static getTodayUsage(userId?: string): DailyUsage {
    const today = getTodayString();
    try {
      const key = getStorageKey(userId);
      const raw = localStorage.getItem(key);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed.date === today) {
          return {
            date: today,
            writingCount: typeof parsed.writingCount === 'number' ? parsed.writingCount : 0,
            speakingCount: typeof parsed.speakingCount === 'number' ? parsed.speakingCount : 0,
          };
        }
      }
    } catch (e) {
      console.warn('[FreemiumService] Failed to read from localStorage:', e);
    }

    return {
      date: today,
      writingCount: 0,
      speakingCount: 0,
    };
  }

  /**
   * Calculates current quota status and remaining limits
   */
  static getQuotaStatus(
    userId?: string,
    isAdmin: boolean = false,
    isPro: boolean = false,
  ): FreemiumQuotaStatus {
    // Admins and PRO subscribers have unlimited access
    if (isAdmin || isPro) {
      return {
        canUseWriting: true,
        canUseSpeaking: true,
        writingUsed: 0,
        speakingUsed: 0,
        maxWriting: 9999,
        maxSpeaking: 9999,
        remainingWriting: 9999,
        remainingSpeaking: 9999,
        hoursUntilReset: 24,
        minutesUntilReset: 0,
      };
    }

    const usage = this.getTodayUsage(userId);
    const now = new Date();
    const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59, 999);
    const diffMs = Math.max(0, endOfDay.getTime() - now.getTime());
    const hoursUntilReset = Math.floor(diffMs / (1000 * 60 * 60));
    const minutesUntilReset = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

    const remainingWriting = Math.max(0, MAX_FREE_WRITING_PER_DAY - usage.writingCount);
    const remainingSpeaking = Math.max(0, MAX_FREE_SPEAKING_PER_DAY - usage.speakingCount);

    return {
      canUseWriting: remainingWriting > 0,
      canUseSpeaking: remainingSpeaking > 0,
      writingUsed: usage.writingCount,
      speakingUsed: usage.speakingCount,
      maxWriting: MAX_FREE_WRITING_PER_DAY,
      maxSpeaking: MAX_FREE_SPEAKING_PER_DAY,
      remainingWriting,
      remainingSpeaking,
      hoursUntilReset,
      minutesUntilReset,
    };
  }

  /**
   * Records 1 usage of Writing
   */
  static recordWritingUsage(userId?: string): DailyUsage {
    const usage = this.getTodayUsage(userId);
    const updated: DailyUsage = {
      ...usage,
      writingCount: usage.writingCount + 1,
    };
    try {
      localStorage.setItem(getStorageKey(userId), JSON.stringify(updated));
    } catch (e) {
      console.warn('[FreemiumService] Failed to save writing usage:', e);
    }
    return updated;
  }

  /**
   * Records 1 usage of Speaking
   */
  static recordSpeakingUsage(userId?: string): DailyUsage {
    const usage = this.getTodayUsage(userId);
    const updated: DailyUsage = {
      ...usage,
      speakingCount: usage.speakingCount + 1,
    };
    try {
      localStorage.setItem(getStorageKey(userId), JSON.stringify(updated));
    } catch (e) {
      console.warn('[FreemiumService] Failed to save speaking usage:', e);
    }
    return updated;
  }

  /**
   * Registers a user or guest into the upcoming PRO notification waitlist
   */
  static async registerForProWaitlist(
    contactInfo: string,
    feature: 'writing' | 'speaking' | 'general' = 'general',
    userId?: string,
  ): Promise<boolean> {
    const cleanContact = contactInfo.trim();
    if (!cleanContact) return false;

    try {
      const existingRaw = localStorage.getItem(WAITLIST_STORAGE_KEY);
      const list = existingRaw ? JSON.parse(existingRaw) : [];
      list.push({
        contact: cleanContact,
        feature,
        userId: userId || 'guest',
        date: new Date().toISOString(),
      });
      localStorage.setItem(WAITLIST_STORAGE_KEY, JSON.stringify(list));
      return true;
    } catch (e) {
      console.error('[FreemiumService] Waitlist registration error:', e);
      return false;
    }
  }
}
