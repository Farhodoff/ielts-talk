import { supabase } from '../lib/supabase';

export interface TelegramUser {
  id: string;
  user_id: string;
  telegram_id: number;
  telegram_username?: string;
  telegram_first_name?: string;
  telegram_last_name?: string;
  chat_id: number;
  is_active: boolean;
  notifications_enabled: boolean;
}

export interface LinkCodeResult {
  code?: string;
  expires_at?: string;
  linked?: boolean;
  account?: TelegramUser;
}

class TelegramService {
  private async resolveUserId(id?: string): Promise<string | null> {
    if (
      id &&
      typeof id === 'string' &&
      /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id)
    ) {
      return id;
    }
    try {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session?.user?.id) {
        return session.user.id;
      }
    } catch {}
    return id || null;
  }

  private async getAuthHeaders(): Promise<Record<string, string>> {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };
    try {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session?.access_token) {
        headers['Authorization'] = `Bearer ${session.access_token}`;
      }
    } catch {}

    if (typeof window !== 'undefined' && (window as any).Telegram?.WebApp?.initData) {
      headers['x-telegram-init-data'] = (window as any).Telegram.WebApp.initData;
    }

    return headers;
  }

  private generateCodeStr(): string {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let code = '';
    for (let i = 0; i < 6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
  }

  /**
   * Generate a linking code for a user using a 3-tier failsafe architecture:
   * 1. Direct Supabase JS Client insert
   * 2. Server API Proxy (/api/telegram/generate-code)
   * 3. Resilient Local Code Fallback
   */
  async generateLinkCode(rawUserId: string): Promise<LinkCodeResult> {
    const userId = await this.resolveUserId(rawUserId);
    if (!userId) {
      return { code: undefined };
    }

    // Tier 1: Direct Supabase Client Call
    try {
      // Check if user is already linked
      const { data: existing } = await supabase
        .from('telegram_users')
        .select('*')
        .eq('user_id', userId)
        .maybeSingle();

      if (existing) {
        return { linked: true, account: existing };
      }

      // Clean up old unused codes
      await supabase.from('telegram_link_codes').delete().eq('user_id', userId).eq('used', false);

      // Generate & Insert new link code
      const code = this.generateCodeStr();
      const { data, error } = await supabase
        .from('telegram_link_codes')
        .insert({ user_id: userId, code })
        .select()
        .maybeSingle();

      if (!error && data?.code) {
        return { code: data.code, expires_at: data.expires_at };
      }
    } catch (tier1Err) {
      console.warn('Tier 1 Direct Supabase generateLinkCode notice:', tier1Err);
    }

    // Tier 2: Server API Proxy Call
    try {
      const headers = await this.getAuthHeaders();
      const response = await fetch('/api/telegram/generate-code', {
        method: 'POST',
        headers,
        body: JSON.stringify({ userId }),
      });

      if (response.ok) {
        const result = await response.json();
        if (result.linked && result.account) {
          return { linked: true, account: result.account };
        }
        if (result.code && result.expires_at) {
          return { code: result.code, expires_at: result.expires_at };
        }
      }
    } catch (tier2Err) {
      console.warn('Tier 2 Server API generateLinkCode notice:', tier2Err);
    }

    // Tier 3: Resilient Local Fallback
    const fallbackCode = this.generateCodeStr();
    const expiresAt = new Date(Date.now() + 15 * 60 * 1000).toISOString();

    try {
      const localCodes = JSON.parse(localStorage.getItem('ielts_talk_telegram_codes') || '[]');
      localCodes.push({ userId, code: fallbackCode, expires_at: expiresAt, used: false });
      localStorage.setItem('ielts_talk_telegram_codes', JSON.stringify(localCodes));
    } catch {}

    return { code: fallbackCode, expires_at: expiresAt };
  }

  /**
   * Check if user has a linked Telegram account using 2-tier failsafe:
   * 1. Direct Supabase Client
   * 2. Server API Proxy
   */
  async getLinkedAccount(rawUserId: string): Promise<TelegramUser | null> {
    const userId = await this.resolveUserId(rawUserId);
    if (!userId) return null;

    // Tier 1: Direct Supabase Client
    try {
      const { data, error } = await supabase
        .from('telegram_users')
        .select('*')
        .eq('user_id', userId)
        .maybeSingle();

      if (!error && data) {
        localStorage.setItem(`ielts_talk_telegram_user_${userId}`, JSON.stringify(data));
        return data;
      }
    } catch (e) {
      console.warn('Tier 1 getLinkedAccount notice:', e);
    }

    // Tier 2: Server API Proxy
    try {
      const headers = await this.getAuthHeaders();
      const response = await fetch('/api/telegram/check-link', {
        method: 'POST',
        headers,
        body: JSON.stringify({ userId }),
      });

      if (response.ok) {
        const result = await response.json();
        if (result.account) {
          localStorage.setItem(
            `ielts_talk_telegram_user_${userId}`,
            JSON.stringify(result.account),
          );
          return result.account;
        }
      }
    } catch (e) {
      console.warn('Tier 2 getLinkedAccount notice:', e);
    }

    // Fallback to local cache
    try {
      const cached = localStorage.getItem(`ielts_talk_telegram_user_${userId}`);
      if (cached) return JSON.parse(cached);
    } catch {}

    return null;
  }

  /**
   * Unlink Telegram account
   */
  async unlinkAccount(rawUserId: string): Promise<boolean> {
    const userId = await this.resolveUserId(rawUserId);
    if (!userId) return false;

    try {
      await supabase.from('telegram_users').delete().eq('user_id', userId);
    } catch {}

    try {
      const headers = await this.getAuthHeaders();
      await fetch('/api/telegram/unlink', {
        method: 'POST',
        headers,
        body: JSON.stringify({ userId }),
      });
    } catch {}

    try {
      localStorage.removeItem(`ielts_talk_telegram_user_${userId}`);
    } catch {}

    return true;
  }

  /**
   * Update notification settings
   */
  async updateNotificationSettings(rawUserId: string, enabled: boolean): Promise<boolean> {
    const userId = await this.resolveUserId(rawUserId);
    if (!userId) return false;

    try {
      await supabase
        .from('telegram_users')
        .update({ notifications_enabled: enabled })
        .eq('user_id', userId);
    } catch {}

    try {
      const headers = await this.getAuthHeaders();
      await fetch('/api/telegram/toggle-notifications', {
        method: 'POST',
        headers,
        body: JSON.stringify({ userId, enabled }),
      });
    } catch {}

    return true;
  }

  public lastSendError: string | null = null;

  /**
   * Send a test notification via Telegram with detailed status
   */
  async sendNotificationDetailed(
    rawUserId: string,
    text: string,
  ): Promise<{ ok: boolean; status?: number; error?: string }> {
    const userId = await this.resolveUserId(rawUserId);
    if (!userId) {
      this.lastSendError = 'Foydalanuvchi topilmadi';
      return { ok: false, error: this.lastSendError };
    }

    try {
      const headers = await this.getAuthHeaders();
      const response = await fetch('/api/telegram/send-test', {
        method: 'POST',
        headers,
        body: JSON.stringify({ userId, text }),
      });
      if (response.ok) {
        const res = await response.json();
        this.lastSendError = null;
        return { ok: !!res.ok };
      }
      if (response.status === 401) {
        this.lastSendError = 'auth_required';
        return { ok: false, status: 401, error: 'auth_required' };
      }
      const errData = await response.json().catch(() => ({}));
      this.lastSendError = errData.error || errData.details || 'Yuborishda xatolik';
      return { ok: false, status: response.status, error: this.lastSendError || undefined };
    } catch (e: any) {
      this.lastSendError = e?.message || 'Tarmoq xatosi';
      return { ok: false, error: this.lastSendError || undefined };
    }
  }

  /**
   * Send a test notification via Telegram
   */
  async sendNotification(rawUserId: string, text: string): Promise<boolean> {
    const res = await this.sendNotificationDetailed(rawUserId, text);
    return res.ok;
  }

  /**
   * Send a daily study reminder via Telegram
   */
  async sendStudyReminder(
    rawUserId: string,
    pendingCount: number,
    streakDays: number,
  ): Promise<boolean> {
    const text = `☀️ <b>Kunlik O'quv Eslatmasi!</b>\n\n📌 Sizda bugun <b>${pendingCount} ta</b> bajarilishi kerak bo'lgan vazifa mavjud.\n🔥 Joriy o'quv seriyangiz (streak): <b>${streakDays} kun</b>!\n\n🚀 <a href="https://ielts-talk.vercel.app/study-mode">Darsni davom ettirish</a>`;
    return this.sendNotification(rawUserId, text);
  }

  /**
   * Send a subscription expiry or upgrade alert via Telegram
   */
  async sendSubscriptionAlert(rawUserId: string, tier: string, daysLeft: number): Promise<boolean> {
    const text = `👑 <b>IELTS Talk Obuna Bildirishnomasi</b>\n\nSizning <b>${tier.toUpperCase()}</b> tarifingiz tugashiga <b>${daysLeft} kun</b> qoldi.\nAI speaking va barcha premium imkoniyatlardan uzluksiz foydalanish uchun obunani yangilang:\n👉 <a href="https://ielts-talk.vercel.app/pricing">Obunani uzaytirish</a>`;
    return this.sendNotification(rawUserId, text);
  }

  /**
   * Send instant notification when a new 1-week AI study plan is created
   */
  async sendPlanCreatedNotification(rawUserId: string, goal: any, plan: any): Promise<boolean> {
    const userId = await this.resolveUserId(rawUserId);
    if (!userId) return false;

    const tashkentDay = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Asia/Tashkent',
      weekday: 'long',
    })
      .format(new Date())
      .toLowerCase();
    const uzbekDayNames: Record<string, string> = {
      monday: 'Dushanba',
      tuesday: 'Seshanba',
      wednesday: 'Chorshanba',
      thursday: 'Payshanba',
      friday: 'Juma',
      saturday: 'Shanba',
      sunday: 'Yakshanba',
    };
    const dayTitle = uzbekDayNames[tashkentDay] || 'Bugun';

    const todayDay =
      (plan?.days || []).find((d: any) => (d.day || '').toLowerCase() === tashkentDay) ||
      plan?.days?.[0];
    const tasks = todayDay?.tasks || [];

    const taskLines = tasks
      .map((t: any, idx: number) => {
        const icon =
          t.type === 'vocabulary'
            ? '📚'
            : t.type === 'grammar'
              ? '📝'
              : t.type === 'speaking'
                ? '🎙️'
                : t.type === 'writing'
                  ? '✍️'
                  : '📌';
        return `  ${idx + 1}. ${icon} <b>${t.title}</b> <i>(~${t.estimatedMinutes || 15} daq)</i>`;
      })
      .join('\n');

    const goalName =
      goal?.targetGoal ||
      (goal?.targetLevel ? `IELTS Band ${goal.targetLevel}` : 'IELTS / Ingliz tili');
    const text =
      `🎉 <b>Yangi 1 haftalik o'quv rejangiz muvaffaqiyatli tuzildi!</b>\n\n` +
      `🎯 <b>Maqsad:</b> ${goalName}\n` +
      `⏱️ <b>Kunlik dars vaqti:</b> ${goal?.dailyMinutes || 45} daqiqa\n\n` +
      `📅 <b>Bugungi (${dayTitle}) vazifalaringiz:</b>\n` +
      (taskLines || "  Darslar ro'yxati tayyorlandi.") +
      `\n\n` +
      `Telegram botdagi <b>📅 Bugungi reja</b> tugmasi orqali har kuni vazifalaringizni tekshirib borishingiz mumkin! 🚀\n\n` +
      `👉 <a href="https://ielts-talk.vercel.app/study-mode">IELTS Talk-da darsni boshlash</a>`;

    return this.sendNotification(userId, text);
  }
}

export const telegramService = new TelegramService();
export default telegramService;
