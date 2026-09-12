import { describe, it, expect, vi, beforeEach } from 'vitest';
import webhookHandler from '../../../api/_telegram/webhook.js';
import notifyDailyHandler from '../../../api/_telegram/notify-daily.js';
import telegramService from '../TelegramService';

// Mock Supabase
vi.mock('@supabase/supabase-js', () => {
  return {
    createClient: vi.fn(() => ({
      from: vi.fn((table: string) => {
        if (table === 'telegram_link_codes') {
          return {
            select: vi.fn().mockReturnThis(),
            ilike: vi.fn().mockReturnThis(),
            eq: vi.fn().mockReturnThis(),
            gt: vi.fn().mockReturnThis(),
            maybeSingle: vi.fn().mockImplementation(async () => {
              return {
                data: {
                  id: 'code_rec_123',
                  code: 'KAIZ01',
                  user_id: 'user_uuid_123',
                  used: false,
                  expires_at: new Date(Date.now() + 3600000).toISOString(),
                },
                error: null,
              };
            }),
            update: vi.fn().mockReturnValue({
              eq: vi.fn().mockResolvedValue({ error: null }),
            }),
          };
        }

        if (table === 'telegram_users') {
          return {
            select: vi.fn().mockReturnThis(),
            eq: vi.fn().mockReturnThis(),
            maybeSingle: vi.fn().mockImplementation(async () => {
              return {
                data: {
                  id: 'tg_user_1',
                  user_id: 'user_uuid_123',
                  telegram_id: 998877,
                  chat_id: 998877,
                  telegram_first_name: 'Farhod',
                  notifications_enabled: true,
                },
                error: null,
              };
            }),
            upsert: vi.fn().mockResolvedValue({ error: null }),
          };
        }

        if (table === 'user_subscriptions') {
          return {
            select: vi.fn().mockReturnThis(),
            eq: vi.fn().mockReturnThis(),
            maybeSingle: vi.fn().mockImplementation(async () => {
              return {
                data: {
                  id: 'user_uuid_123',
                  tier: 'pro',
                  ai_credits: 250,
                  valid_until: new Date(Date.now() + 86400000 * 2).toISOString(), // 2 days left
                },
                error: null,
              };
            }),
          };
        }

        if (table === 'personal_learning_goals') {
          return {
            select: vi.fn().mockReturnThis(),
            eq: vi.fn().mockReturnThis(),
            order: vi.fn().mockReturnThis(),
            limit: vi.fn().mockReturnThis(),
            maybeSingle: vi.fn().mockResolvedValue({
              data: {
                id: 'goal_123',
                user_id: 'user_uuid_123',
                target_goal: 'IELTS Band 7.5',
                target_level: '7.5',
                daily_minutes: 60,
                current_week: 1,
                status: 'active'
              },
              error: null
            })
          };
        }

        if (table === 'weekly_learning_plans') {
          const tashkentDay = new Intl.DateTimeFormat('en-US', { timeZone: 'Asia/Tashkent', weekday: 'long' }).format(new Date()).toLowerCase();
          return {
            select: vi.fn().mockReturnThis(),
            eq: vi.fn().mockReturnThis(),
            order: vi.fn().mockReturnThis(),
            limit: vi.fn().mockReturnThis(),
            update: vi.fn().mockReturnValue({
              eq: vi.fn().mockResolvedValue({ error: null })
            }),
            maybeSingle: vi.fn().mockResolvedValue({
              data: {
                id: 'plan_123',
                goal_id: 'goal_123',
                user_id: 'user_uuid_123',
                week_number: 1,
                plan_data: {
                  startDate: '2026-09-08',
                  endDate: '2026-09-14',
                  days: [
                    {
                      day: tashkentDay,
                      tasks: [
                        { id: 'plan_task_1', title: 'Oxford 3000 A2 Part 1', type: 'vocabulary', estimatedMinutes: 20, completed: false, status: 'pending' },
                        { id: 'plan_task_2', title: 'Murphy Unit 1 Present Continuous', type: 'grammar', estimatedMinutes: 25, completed: true, status: 'completed' },
                        { id: 'plan_task_3', title: 'Speaking Coach IELTS Part 1', type: 'speaking', estimatedMinutes: 15, completed: false, status: 'pending' }
                      ]
                    }
                  ]
                }
              },
              error: null
            })
          };
        }

        if (table === 'tasks') {
          return {
            select: vi.fn().mockReturnThis(),
            eq: vi.fn().mockReturnThis(),
            order: vi.fn().mockReturnThis(),
            limit: vi.fn().mockImplementation(async () => {
              return {
                data: [
                  { id: 'task_1', title: 'JLPT N3 Kanji 20 cards', completed: false },
                  { id: 'task_2', title: 'Speaking Coach IELTS Part 2', completed: true },
                ],
                error: null,
              };
            }),
          };
        }

        return {
          select: vi.fn().mockReturnThis(),
          eq: vi.fn().mockReturnThis(),
          or: vi.fn().mockReturnThis(),
          order: vi.fn().mockReturnThis(),
          limit: vi.fn().mockReturnThis(),
          maybeSingle: vi.fn().mockResolvedValue({ data: null, error: null }),
        };
      }),
    })),
  };
});

// Helper mock response
function createMockRes() {
  const res: any = {
    headers: {},
    statusCode: 200,
    setHeader: (k: string, v: string) => {
      res.headers[k] = v;
    },
    status: (s: number) => {
      res.statusCode = s;
      return res;
    },
    json: (d: any) => {
      res.data = d;
      return res;
    },
    end: () => res,
  };
  return res;
}

describe('Telegram Webhook & Notifications End-to-End Suite', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    process.env.TELEGRAM_BOT_TOKEN = '123456789:ABCdefGhIJKlmNoPQRsTUVwxyZ';
    process.env.SERVICE_ROLE = 'mock-service-role-key';
    process.env.VITE_SUPABASE_URL = 'https://qmuimxnknxwarvnkpnlo.supabase.co';
    // Mock global fetch for Telegram API
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ ok: true, result: { message_id: 101 } }),
    } as any);
  });

  it('1. handles OPTIONS preflight and non-POST methods correctly', async () => {
    const optionsRes = createMockRes();
    await webhookHandler({ method: 'OPTIONS', headers: {} } as any, optionsRes);
    expect(optionsRes.statusCode).toBe(204);

    const getRes = createMockRes();
    await webhookHandler({ method: 'GET', headers: {} } as any, getRes);
    expect(getRes.statusCode).toBe(405);
  });

  it('2. verifies account linking when user submits /start KAIZ01', async () => {
    const res = createMockRes();
    const req = {
      method: 'POST',
      headers: {},
      body: {
        message: {
          message_id: 1,
          chat: { id: 998877 },
          from: { id: 998877, first_name: 'Farhod', username: 'farhod_dev' },
          text: '/start KAIZ01',
        },
      },
    };

    await webhookHandler(req as any, res);
    expect(res.statusCode).toBe(200);
    expect(global.fetch).toHaveBeenCalledWith(
      expect.stringContaining('sendMessage'),
      expect.objectContaining({
        body: expect.stringContaining('Tabriklaymiz, Farhod!'),
      }),
    );
  });

  it('3. responds with subscription status when user requests /subscription', async () => {
    const res = createMockRes();
    const req = {
      method: 'POST',
      headers: {},
      body: {
        message: {
          message_id: 2,
          chat: { id: 998877 },
          from: { id: 998877, first_name: 'Farhod' },
          text: '/subscription',
        },
      },
    };

    await webhookHandler(req as any, res);
    expect(res.statusCode).toBe(200);
    expect(global.fetch).toHaveBeenCalledWith(
      expect.stringContaining('sendMessage'),
      expect.objectContaining({
        body: expect.stringContaining('100% Bepul'),
      }),
    );
  });

  it('4. responds with active tasks when user requests /plan', async () => {
    const res = createMockRes();
    const req = {
      method: 'POST',
      headers: {},
      body: {
        message: {
          message_id: 3,
          chat: { id: 998877 },
          from: { id: 998877, first_name: 'Farhod' },
          text: '/plan',
        },
      },
    };

    await webhookHandler(req as any, res);
    expect(res.statusCode).toBe(200);
    expect(global.fetch).toHaveBeenCalledWith(
      expect.stringContaining('sendMessage'),
      expect.objectContaining({
        body: expect.stringContaining('JLPT N3 Kanji 20 cards'),
      }),
    );
  });

  it('5. handles interactive quiz callback queries', async () => {
    const res = createMockRes();
    const req = {
      method: 'POST',
      headers: {},
      body: {
        callback_query: {
          id: 'cb_query_1',
          data: 'quiz_0_0',
          message: {
            chat: { id: 998877 },
          },
        },
      },
    };

    await webhookHandler(req as any, res);
    expect(res.statusCode).toBe(200);
    expect(global.fetch).toHaveBeenCalledWith(
      expect.stringContaining('answerCallbackQuery'),
      expect.any(Object),
    );
  });

  it('6. formats study reminders and subscription alerts via TelegramService', async () => {
    const reminderSpy = vi.spyOn(telegramService, 'sendNotification').mockResolvedValue(true);

    const okReminder = await telegramService.sendStudyReminder(
      '00000000-0000-0000-0000-000000000001',
      3,
      5,
    );
    expect(okReminder).toBe(true);
    expect(reminderSpy).toHaveBeenCalledWith(
      '00000000-0000-0000-0000-000000000001',
      expect.stringContaining('5 kun'),
    );

    const okAlert = await telegramService.sendSubscriptionAlert(
      '00000000-0000-0000-0000-000000000001',
      'pro',
      2,
    );
    expect(okAlert).toBe(true);
    expect(reminderSpy).toHaveBeenCalledWith(
      '00000000-0000-0000-0000-000000000001',
      expect.stringContaining('PRO'),
    );
  });

  it('7. dispatches daily notifications to linked users via notify-daily handler', async () => {
    const res = createMockRes();
    const req = {
      method: 'POST',
      headers: {},
    };

    await notifyDailyHandler(req as any, res);
    expect(res.statusCode).toBe(200);
    expect(res.data).toMatchObject({ success: true });
  });

  it('8. displays today tasks from active weekly learning plan when user clicks 📅 Bugungi reja', async () => {
    const res = createMockRes();
    const req = {
      method: 'POST',
      headers: {},
      body: {
        message: {
          message_id: 8,
          chat: { id: 998877 },
          from: { id: 998877, first_name: 'Farhod' },
          text: '📅 Bugungi reja',
        },
      },
    };

    await webhookHandler(req as any, res);
    expect(res.statusCode).toBe(200);
    expect(global.fetch).toHaveBeenCalledWith(
      expect.stringContaining('sendMessage'),
      expect.objectContaining({
        body: expect.stringContaining('Oxford 3000 A2 Part 1'),
      }),
    );
    expect(global.fetch).toHaveBeenCalledWith(
      expect.stringContaining('sendMessage'),
      expect.objectContaining({
        body: expect.stringContaining('IELTS Band 7.5'),
      }),
    );
  });

  it('9. handles ptoggle callback queries to complete a weekly plan task from Telegram', async () => {
    const res = createMockRes();
    const req = {
      method: 'POST',
      headers: {},
      body: {
        callback_query: {
          id: 'cb_query_toggle_1',
          data: 'ptoggle:plan_123:plan_task_1',
          from: { id: 998877, first_name: 'Farhod' },
          message: {
            message_id: 99,
            chat: { id: 998877 },
          },
        },
      },
    };

    await webhookHandler(req as any, res);
    expect(res.statusCode).toBe(200);
    expect(global.fetch).toHaveBeenCalledWith(
      expect.stringContaining('answerCallbackQuery'),
      expect.objectContaining({
        body: expect.stringContaining('+25 XP'),
      }),
    );
  });

  it('10. sends instant plan created notification via TelegramService', async () => {
    const notificationSpy = vi.spyOn(telegramService, 'sendNotification').mockResolvedValue(true);

    const goal = {
      id: 'goal_1',
      userId: 'user_123',
      targetGoal: 'IELTS Band 7.0+',
      dailyMinutes: 45,
      currentWeek: 1,
    };
    const plan = {
      id: 'plan_1',
      goalId: 'goal_1',
      userId: 'user_123',
      weekNumber: 1,
      days: [
        {
          day: 'monday',
          tasks: [
            { id: 't1', title: 'Oxford 3000 A2 Part 1', type: 'vocabulary', estimatedMinutes: 20 },
            { id: 't2', title: 'Murphy Unit 1 Present Continuous', type: 'grammar', estimatedMinutes: 25 },
          ],
        },
      ],
    };

    const result = await telegramService.sendPlanCreatedNotification(
      '00000000-0000-0000-0000-000000000001',
      goal as any,
      plan as any,
    );

    expect(result).toBe(true);
    expect(notificationSpy).toHaveBeenCalledWith(
      '00000000-0000-0000-0000-000000000001',
      expect.stringContaining("Yangi 1 haftalik o'quv rejangiz muvaffaqiyatli tuzildi!"),
    );
    expect(notificationSpy).toHaveBeenCalledWith(
      '00000000-0000-0000-0000-000000000001',
      expect.stringContaining('IELTS Band 7.0+'),
    );
  });
});
