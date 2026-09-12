import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.VITE_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://qmuimxnknxwarvnkpnlo.supabase.co';
const SERVICE_ROLE = process.env.SERVICE_ROLE || process.env.SUPABASE_SERVICE_ROLE_KEY;
const CRON_SECRET = process.env.CRON_SECRET;

function escapeHTML(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

async function sendTelegramMessage(chatId, text, replyMarkup = null) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  if (!botToken) return { ok: false, error: 'No bot token' };
  const body = {
    chat_id: chatId,
    text,
    parse_mode: 'HTML'
  };
  if (replyMarkup) {
    body.reply_markup = replyMarkup;
  }
  const res = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  return res.json();
}

function getTaskTypeIcon(type) {
  switch ((type || '').toLowerCase()) {
    case 'vocabulary':
      return '📚';
    case 'grammar':
      return '📝';
    case 'speaking':
      return '🎙️';
    case 'writing':
      return '✍️';
    case 'reading':
      return '📖';
    case 'listening':
      return '🎧';
    case 'srs':
      return '🧠';
    case 'mock_test':
      return '⏱️';
    default:
      return '📌';
  }
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, x-cron-secret');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  // Security check for cron secret if configured
  if (CRON_SECRET) {
    const authHeader = req.headers['authorization'] || '';
    const cronHeader = req.headers['x-cron-secret'] || '';
    const isSecretValid = cronHeader === CRON_SECRET || authHeader === `Bearer ${CRON_SECRET}`;
    if (!isSecretValid) {
      return res.status(401).json({ error: 'Unauthorized: invalid cron secret' });
    }
  }

  try {
    const supabase = createClient(SUPABASE_URL, SERVICE_ROLE);

    // Fetch all users with enabled notifications
    const { data: users, error: userErr } = await supabase
      .from('telegram_users')
      .select('*')
      .eq('notifications_enabled', true);

    if (userErr || !users || users.length === 0) {
      return res.status(200).json({ success: true, count: 0, message: 'No notification targets found' });
    }

    const now = new Date();
    const tashkentHour = parseInt(new Intl.DateTimeFormat('en-US', { timeZone: 'Asia/Tashkent', hour: 'numeric', hour12: false }).format(now), 10);
    const tashkentDate = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Tashkent' }).format(now);
    const tashkentDay = new Intl.DateTimeFormat('en-US', { timeZone: 'Asia/Tashkent', weekday: 'long' }).format(now).toLowerCase();

    const uzbekDayNames = {
      monday: 'Dushanba',
      tuesday: 'Seshanba',
      wednesday: 'Chorshanba',
      thursday: 'Payshanba',
      friday: 'Juma',
      saturday: 'Shanba',
      sunday: 'Yakshanba'
    };
    const dayNameUz = uzbekDayNames[tashkentDay] || 'Bugun';

    const windowParam = req.query?.window;
    const isMorning = windowParam === 'morning' || (!windowParam && tashkentHour >= 5 && tashkentHour < 14);

    let sentCount = 0;

    for (const u of users) {
      if (!u.chat_id) continue;

      // 1. Fetch active personal learning goal
      let activeGoal = null;
      try {
        const { data: goal } = await supabase
          .from('personal_learning_goals')
          .select('*')
          .eq('user_id', u.user_id)
          .eq('status', 'active')
          .order('created_at', { ascending: false })
          .limit(1)
          .maybeSingle();
        activeGoal = goal;
      } catch (e) {
        console.warn('Could not query personal goal:', e?.message);
      }

      // 2. Fetch weekly learning plan
      let planTasks = [];
      let weeklyPlan = null;
      try {
        let planQuery = supabase
          .from('weekly_learning_plans')
          .select('*')
          .eq('user_id', u.user_id);

        if (activeGoal?.id) {
          planQuery = planQuery.eq('goal_id', activeGoal.id);
        }
        const { data: plan } = await planQuery
          .order('week_number', { ascending: false })
          .limit(1)
          .maybeSingle();

        weeklyPlan = plan;
        if (weeklyPlan?.plan_data?.days && Array.isArray(weeklyPlan.plan_data.days)) {
          const dayObj = weeklyPlan.plan_data.days.find(d => (d.day || '').toLowerCase() === tashkentDay);
          if (dayObj && Array.isArray(dayObj.tasks)) {
            planTasks = dayObj.tasks;
          }
        }
      } catch (e) {
        console.warn('Could not query weekly plan:', e?.message);
      }

      // 3. Fetch standalone tasks
      let customTasks = [];
      try {
        let { data: tasks } = await supabase
          .from('tasks')
          .select('id, title, status, completed')
          .eq('user_id', u.user_id)
          .limit(5);
        customTasks = tasks || [];
      } catch (e) {
        console.warn('Could not query tasks:', e?.message);
      }

      // Map combined tasks
      const completedItems = [];
      const pendingItems = [];

      planTasks.forEach(t => {
        const isDone = t.completed === true || t.status === 'completed';
        const item = {
          title: t.title,
          type: t.type || 'task',
          duration: t.estimatedMinutes || 15,
          isDone
        };
        if (isDone) completedItems.push(item);
        else pendingItems.push(item);
      });

      customTasks.forEach(t => {
        const isDone = t.completed === true || t.status === 'done';
        const item = {
          title: t.title,
          type: 'task',
          duration: 20,
          isDone
        };
        if (isDone) completedItems.push(item);
        else pendingItems.push(item);
      });

      // 4. Fetch due flashcards count (SRS)
      const nowIso = new Date().toISOString();
      let dueCardsCount = 0;
      try {
        const { count } = await supabase
          .from('flashcards')
          .select('id', { count: 'exact', head: true })
          .eq('user_id', u.user_id)
          .lte('next_review', nowIso);
        dueCardsCount = count || 0;
      } catch (e) {
        console.warn('Could not query due flashcards:', e?.message);
      }

      // 5. Check today's speaking sessions
      let todaySpeakingCount = 0;
      try {
        const { count } = await supabase
          .from('speaking_sessions')
          .select('id', { count: 'exact', head: true })
          .eq('user_id', u.user_id)
          .gte('created_at', `${tashkentDate}T00:00:00`);
        todaySpeakingCount = count || 0;
      } catch (e) {
        console.warn('Could not query speaking sessions:', e?.message);
      }

      // 6. Fetch user streak
      let streak = 1;
      try {
        const { data: profile } = await supabase
          .from('profiles')
          .select('streak, total_xp')
          .eq('id', u.user_id)
          .maybeSingle();
        if (profile?.streak) streak = profile.streak;
      } catch (e) {
        console.warn('Could not query profile streak:', e?.message);
      }

      const totalCount = completedItems.length + pendingItems.length;
      const completedCount = completedItems.length;
      const progressPct = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
      const totalMinutes = planTasks.reduce((sum, t) => sum + (t.estimatedMinutes || 15), 0);

      const goalName = activeGoal?.target_goal || (activeGoal?.target_level ? `IELTS Band ${activeGoal.target_level}` : 'IELTS / Ingliz tili');
      const weekNum = weeklyPlan?.week_number || activeGoal?.current_week || 1;
      const userName = escapeHTML(u.telegram_first_name || 'talaba');

      let messageText = '';
      let replyMarkup = null;

      if (isMorning) {
        // --- MORNING STUDY PLAN NOTIFICATION ---
        const taskLines = pendingItems.map((t, i) => {
          const icon = getTaskTypeIcon(t.type);
          return `  <b>${i + 1}.</b> ${icon} ${escapeHTML(t.title)} <i>(~${t.duration} daq)</i>`;
        }).join('\n');

        let srsStatus = '';
        if (dueCardsCount > 0) {
          srsStatus = `\n🧠 <b>SRS Fleshkartalar:</b> Bugun <b>${dueCardsCount} ta</b> so'zni takrorlash kerak.`;
        }

        let speakingStatus = `\n🎙️ <b>Speaking Coach:</b> Bugungi 10 daqiqalik jonli muloqot mashqi kutilmoqda.`;

        messageText = `🌅 <b>Xayrli tong, ${userName}! Bugungi dars rejangiz:</b>\n\n` +
          `🎯 <b>Maqsad:</b> ${escapeHTML(goalName)} <i>(${weekNum}-hafta)</i>\n` +
          `📅 <b>Bugungi kun:</b> ${dayNameUz}, ${tashkentDate}\n` +
          (totalMinutes > 0 ? `⏱️ <b>Rejalashtirilgan vaqt:</b> ~${totalMinutes} daqiqa\n\n` : '\n') +
          (pendingItems.length > 0 ? `📋 <b>Bugun bajarilishi kerak bo'lgan vazifalar (${pendingItems.length} ta):</b>\n${taskLines}\n` : `🎉 Bugun uchun rejalashtirilgan barcha vazifalar bajarilgan!\n`) +
          srsStatus +
          speakingStatus +
          `\n\n🔥 <i>Joriy o'quv seriyangiz: <b>${streak} kun</b>! Bugun ham faollikni saqlang!</i> 💪`;

        replyMarkup = {
          inline_keyboard: [
            [{ text: "🚀 Darslarni Boshlash (Mini App)", web_app: { url: "https://ielts-talk.vercel.app/study-mode" } }],
            [{ text: "📅 Bugungi Rejani Ko'rish", callback_data: "refresh_today" }]
          ]
        };
      } else {
        // --- EVENING ACCOUNTABILITY NOTIFICATION ---
        let habitStatus = '';
        if (todaySpeakingCount > 0) {
          habitStatus = `\n✅ <b>Speaking Coach:</b> Bugungi muloqot bajarildi (${todaySpeakingCount} ta mashq)! 👏`;
        } else {
          habitStatus = `\n🎙 <b>Speaking Coach:</b> Bugun hali 10 daqiqalik muloqot qilmadingiz!`;
        }

        let flashcardStatus = '';
        if (dueCardsCount > 0) {
          flashcardStatus = `\n📚 <b>SRS Fleshkartalar:</b> <b>${dueCardsCount} ta</b> so'z takrorlashni kutmoqda.`;
        }

        let remainingSection = '';
        if (pendingItems.length > 0) {
          remainingSection = '\n⏳ <b>Hali yakunlanmagan vazifalar:</b>\n' +
            pendingItems.map((t, i) => `  ${i + 1}. ${getTaskTypeIcon(t.type)} ${escapeHTML(t.title)}`).join('\n') +
            `\n\n<i>Uxlashdan oldin 10-15 daqiqa ajratib, bugungi vazifalarni yakunlang va streak ballingizni boy bermang! 🔥</i>`;
        } else {
          remainingSection = `\n🎉 <b>Barakalla! Bugungi barcha vazifalar to'liq bajarildi!</b> 🌟\n<i>Tinch osuda tun tilaymiz! 🌙</i>`;
        }

        messageText = `🌙 <b>Xayrli oqshom, ${userName}! Bugungi hisobotingiz:</b>\n\n` +
          `🎯 <b>Maqsad:</b> ${escapeHTML(goalName)}\n` +
          `📊 <b>Bugungi natija:</b> <b>${completedCount}/${totalCount}</b> vazifa bajarildi (${progressPct}%)\n` +
          habitStatus +
          flashcardStatus +
          `\n` +
          remainingSection;

        replyMarkup = {
          inline_keyboard: [
            [{ text: "🚀 IELTS Talk-da Yakunlash", web_app: { url: "https://ielts-talk.vercel.app/" } }]
          ]
        };
      }

      await sendTelegramMessage(u.chat_id, messageText, replyMarkup);
      sentCount++;
    }

    return res.status(200).json({ success: true, sentCount });
  } catch (err) {
    console.error('notify-daily error:', err);
    return res.status(500).json({ error: 'Internal server error', details: err?.message });
  }
}
