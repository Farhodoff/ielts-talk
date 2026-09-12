import { createClient } from '@supabase/supabase-js';
import { getRandomBattleQuestion } from './battle-questions.js';
import { sendGroupPoll } from './dispatch-group-battle.js';

const SUPABASE_URL = process.env.VITE_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://qmuimxnknxwarvnkpnlo.supabase.co';
const SERVICE_ROLE = process.env.SERVICE_ROLE || process.env.SUPABASE_SERVICE_ROLE_KEY;
function escapeHTML(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

const defaultKeyboard = {
  keyboard: [
    [{ text: '🚀 IELTS Talk-ni Ochish', web_app: { url: 'https://ielts-talk.vercel.app/' } }],
    [{ text: '📅 Bugungi reja' }, { text: '🇬🇧 IELTS Quiz' }],
    [{ text: '📚 Fleshkartalar' }, { text: '🎯 Speaking Coach' }],
    [{ text: 'ℹ️ Yordam' }]
  ],
  resize_keyboard: true,
  one_time_keyboard: false
};

async function setTelegramMenuButton(chatId) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  if (!botToken) return;
  try {
    await fetch(`https://api.telegram.org/bot${botToken}/setChatMenuButton`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        menu_button: {
          type: 'web_app',
          text: 'IELTS Talk',
          web_app: { url: 'https://ielts-talk.vercel.app/' }
        }
      })
    });
  } catch (e) {
    console.warn('setChatMenuButton warning:', e.message);
  }
}

const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "🇬🇧 <b>[IELTS Grammar] Bo'sh joyni to'ldiring:</b>\n\nIf the government _____ invested more in renewable energy, pollution levels would be lower today.\n<i>(Agar hukumat qayta tiklanuvchi energiyaga ko'proq sarmoya kiritganida edi, bugun ifloslanish darajasi pastroq bo'lardi.)</i>",
    options: ['1. had', '2. would have', '3. has', '4. was'],
    correct: 0,
    explanation: "To'g'ri javob: <b>had</b>\nThird/Mixed conditional qoidasiga ko'ra o'tmishdagi gipoteza uchun <b>had + V3</b> ishlatiladi."
  },
  {
    id: 2,
    question: "🇬🇧 <b>[IELTS Vocabulary] 'ubiquitous' so'zining eng mos ma'nodoshini tanlang:</b>\n\nSmartphones have become <b>ubiquitous</b> in modern society.",
    options: ['1. omnipresent (hamma joyda mavjud)', '2. rare (kamyob)', '3. dangerous (xavfli)', '4. fragile (mo\'rt)'],
    correct: 0,
    explanation: "To'g'ri javob: <b>omnipresent</b>\n'Ubiquitous' — hamma yerda uchraydigan, keng tarqalgan degan ma'noni anglatadi (Band 7+ Lexical Resource)."
  },
  {
    id: 3,
    question: "🇬🇧 <b>[IELTS Grammar — Inversion] Gapni to'ldiring:</b>\n\nSeldom _____ such an impressive performance in an IELTS speaking test.",
    options: ['1. have I witnessed', '2. I have witnessed', '3. I witnessed', '4. witnessed I'],
    correct: 0,
    explanation: "To'g'ri javob: <b>have I witnessed</b>\nSalbiy inkor so'zlari (Seldom, Rarely, Never) gap boshida kelsa, inversiya (yordamchi fe'l + ega) talab qilinadi."
  },
  {
    id: 4,
    question: "🇬🇧 <b>[IELTS Academic Collocation] 'research' bilan qaysi fe'l eng to'g'ri qo'llanadi?</b>\n\nScientists need to _____ thorough research before publishing results.",
    options: ['1. conduct (olib bormoq)', '2. make (qilmoq)', '3. construct (qurmoq)', '4. create (yaratmoq)'],
    correct: 0,
    explanation: "To'g'ri javob: <b>conduct</b>\nAkademik ingliz tilida 'conduct research' yoki 'carry out research' eng tabiiy kollokatsiya hisoblanadi."
  },
  {
    id: 5,
    question: "🇬🇧 <b>[IELTS Writing Task 1] Mos predlogni tanlang:</b>\n\nThe graph shows a substantial rise _____ the number of international students.",
    options: ['1. in', '2. of', '3. at', '4. to'],
    correct: 0,
    explanation: "To'g'ri javob: <b>in</b>\nMiqdor yoki ko'rsatkichning oshishi/kamayishi uchun 'rise/increase/drop <b>in</b> something' qo'llanadi."
  },
  {
    id: 6,
    question: "🇬🇧 <b>[IELTS Vocabulary] 'detrimental' nimani bildiradi?</b>\n\nExcessive screen time can have a <b>detrimental</b> effect on cognitive development.",
    options: ['1. harmful (zararli)', '2. beneficial (foydali)', '3. temporary (vaqtincha)', '4. unexpected (kutilmagan)'],
    correct: 0,
    explanation: "To'g'ri javob: <b>harmful (zararli)</b>\n'Detrimental' — 'damaging / harmful' so'zining akademik sinonimi (IELTS Band 8+)."
  }
];

function getQuizMarkup(qIndex) {
  const q = QUIZ_QUESTIONS[qIndex];
  return {
    inline_keyboard: [
      q.options.slice(0, 2).map((opt, i) => ({
        text: opt,
        callback_data: `quiz_${qIndex}_${i}`
      })),
      q.options.slice(2, 4).map((opt, i) => ({
        text: opt,
        callback_data: `quiz_${qIndex}_${i + 2}`
      })),
      [{ text: "🎲 Boshqa savol", callback_data: "quiz_next" }]
    ]
  };
}

async function sendTelegramMessage(chatId, text, replyMarkup = defaultKeyboard) {
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

async function answerCallbackQuery(callbackQueryId, text) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  if (!botToken) return;
  await fetch(`https://api.telegram.org/bot${botToken}/answerCallbackQuery`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ callback_query_id: callbackQueryId, text }),
  });
}

async function editTelegramMessage(chatId, messageId, text, replyMarkup = null) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  if (!botToken) return { ok: false, error: 'No bot token' };
  const body = {
    chat_id: chatId,
    message_id: messageId,
    text,
    parse_mode: 'HTML'
  };
  if (replyMarkup) {
    body.reply_markup = replyMarkup;
  }
  const res = await fetch(`https://api.telegram.org/bot${botToken}/editMessageText`, {
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

async function formatTodayPlan(supabase, userId, userName) {
  const now = new Date();
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

  // 1. Fetch active goal
  const { data: activeGoal } = await supabase
    .from('personal_learning_goals')
    .select('*')
    .eq('user_id', userId)
    .eq('status', 'active')
    .order('created_at', { ascending: false })
    .limit(1)
    .maybeSingle();

  // 2. Fetch weekly learning plan
  let planQuery = supabase
    .from('weekly_learning_plans')
    .select('*')
    .eq('user_id', userId);

  if (activeGoal?.id) {
    planQuery = planQuery.eq('goal_id', activeGoal.id);
  }

  const { data: weeklyPlan } = await planQuery
    .order('week_number', { ascending: false })
    .limit(1)
    .maybeSingle();

  // Extract plan tasks for today
  let planTasks = [];
  if (weeklyPlan?.plan_data?.days && Array.isArray(weeklyPlan.plan_data.days)) {
    const dayObj = weeklyPlan.plan_data.days.find(d => (d.day || '').toLowerCase() === tashkentDay);
    if (dayObj && Array.isArray(dayObj.tasks)) {
      planTasks = dayObj.tasks;
    }
  }

  // 3. Fetch standalone tasks
  let customTasks = [];
  try {
    const { data: tasks } = await supabase
      .from('tasks')
      .select('id, title, priority, status, completed, due_date')
      .eq('user_id', userId)
      .limit(10);
    customTasks = tasks || [];
  } catch (e) {
    console.warn('Could not query tasks:', e?.message);
  }

  // If no plan tasks and no custom tasks
  if (planTasks.length === 0 && customTasks.length === 0) {
    return {
      text: `📅 <b>Bugungi o'quv rejangiz (${dayNameUz}, ${tashkentDate}):</b>\n\n` +
            `🎉 <b>Bugun uchun barcha vazifalar bajarilgan yoki hali shaxsiy reja tuzilmagan!</b>\n\n` +
            `AI orqali o'zingizga mos 1 haftalik reja tuzing (IELTS Band 5.0–9.0 yoki General English) va bugungi darslarni boshlang! 🚀`,
      markup: {
        inline_keyboard: [
          [{ text: "🎯 1-Haftalik AI Reja Tuzish", web_app: { url: "https://ielts-talk.vercel.app/planner" } }],
          [{ text: "🔄 Yangilash", callback_data: "refresh_today" }]
        ]
      }
    };
  }

  const completedItems = [];
  const pendingItems = [];

  planTasks.forEach(t => {
    const isDone = t.completed === true || t.status === 'completed';
    const item = {
      id: t.id,
      planId: weeklyPlan.id,
      title: t.title,
      duration: t.estimatedMinutes || 15,
      type: t.type || 'task',
      isDone,
      isPlanTask: true,
      route: t.route || '/study-mode'
    };
    if (isDone) completedItems.push(item);
    else pendingItems.push(item);
  });

  customTasks.forEach(t => {
    const isDone = t.completed === true || t.status === 'done';
    const item = {
      id: t.id,
      title: t.title,
      duration: 20,
      type: 'task',
      isDone,
      isPlanTask: false
    };
    if (isDone) completedItems.push(item);
    else pendingItems.push(item);
  });

  const totalCount = completedItems.length + pendingItems.length;
  const completedCount = completedItems.length;
  const progressPct = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
  const totalMinutes = planTasks.reduce((sum, t) => sum + (t.estimatedMinutes || 15), 0);

  const goalName = activeGoal?.target_goal || (activeGoal?.target_level ? `IELTS Band ${activeGoal.target_level}` : 'IELTS / Ingliz tili');
  const weekNum = weeklyPlan?.week_number || activeGoal?.current_week || 1;

  let text = `📅 <b>Bugungi o'quv rejangiz (${dayNameUz}, ${tashkentDate}):</b>\n`;
  if (weeklyPlan) {
    text += `🎯 <b>Maqsad:</b> ${escapeHTML(goalName)} <i>(${weekNum}-hafta)</i>\n\n`;
  }
  text += `📊 <b>Kunlik natija:</b> <b>${completedCount}/${totalCount}</b> bajarildi (${progressPct}%)\n`;
  if (totalMinutes > 0) {
    text += `⏱️ <b>Rejalashtirilgan vaqt:</b> ~${totalMinutes} daqiqa\n`;
  }
  text += `\n`;

  if (completedItems.length > 0) {
    text += `✅ <b>Bajarilgan vazifalar:</b>\n`;
    completedItems.forEach((t) => {
      const icon = getTaskTypeIcon(t.type);
      text += `  <s>${icon} ${escapeHTML(t.title)}</s> <i>(~${t.duration} daq)</i>\n`;
    });
    text += `\n`;
  }

  if (pendingItems.length > 0) {
    text += `⏳ <b>Bugungi qilinishi kerak bo'lgan vazifalar:</b>\n`;
    pendingItems.forEach((t, i) => {
      const icon = getTaskTypeIcon(t.type);
      text += `  <b>${i + 1}.</b> ${icon} <b>${escapeHTML(t.title)}</b> <i>(~${t.duration} daq)</i>\n`;
    });
    text += `\n💡 <i>Vazifani yakunlash uchun pastdagi raqamli tugmani bosing:</i>\n`;
  } else {
    text += `🎉 <i>Barakalla! Bugungi barcha vazifalar to'liq yakunlandi!</i> 🌟\n`;
  }

  const inlineKeyboard = [];

  if (pendingItems.length > 0) {
    const numberEmojis = ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣'];
    const toggleRow = pendingItems.slice(0, 5).map((t, idx) => ({
      text: `${numberEmojis[idx] || (idx + 1)} ✅`,
      callback_data: t.isPlanTask ? `ptoggle:${t.planId}:${t.id}` : `complete:${t.id}`
    }));
    inlineKeyboard.push(toggleRow);
  }

  inlineKeyboard.push([
    { text: "🚀 IELTS Talk-da Darsni Boshlash", web_app: { url: "https://ielts-talk.vercel.app/study-mode" } }
  ]);

  inlineKeyboard.push([
    { text: "🔄 Yangilash", callback_data: "refresh_today" },
    { text: "📋 Shaxsiy Reja", web_app: { url: "https://ielts-talk.vercel.app/planner" } }
  ]);

  return {
    text,
    markup: { inline_keyboard: inlineKeyboard }
  };
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Telegram-Bot-Api-Secret-Token');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const update = req.body;
  if (!update) {
    return res.status(200).json({ ok: true, message: 'Empty update' });
  }

  const supabase = createClient(SUPABASE_URL, SERVICE_ROLE);

  try {
    // 0. Handle Group Membership Updates (Bot added to or removed from group)
    if (update.my_chat_member) {
      const mcm = update.my_chat_member;
      const chat = mcm.chat;
      const newStatus = mcm.new_chat_member?.status;
      const isGroup = ['group', 'supergroup'].includes(chat?.type);

      if (isGroup && chat?.id) {
        if (['member', 'administrator'].includes(newStatus)) {
          // Register / activate group in telegram_groups
          await supabase.from('telegram_groups').upsert({
            chat_id: chat.id,
            title: chat.title || 'JLPT Study Group',
            chat_type: chat.type,
            is_active: true,
            interval_hours: 2,
            updated_at: new Date().toISOString(),
          }, { onConflict: 'chat_id' });

          const welcomeText =
            `🎌 <b>JLPT Quiz Battle Guruhga Xush Kelibsiz!</b> ⚔️\n\n` +
            `Men <b>IELTS Talk</b> botiman. Ushbu guruhda talabalar o'rtasida IELTS (Band 5.5 - 8.5) bilimi bo'yicha jonli viktorina boshlandi!\n\n` +
            `⚡ <b>Imkoniyatlar:</b>\n` +
            `• Har 2 soatda bot avtomatik yangi JLPT savolini tashlaydi.\n` +
            `• To'g'ri javob bergan ishtirokchilar <b>+10 XP</b> oladi!\n` +
            `• /top yoki /reyting — guruh yetakchilar reytingi\n` +
            `• /battle yoki /quiz — navbatsiz yangi savol tashlash\n` +
            `• /start_battle va /stop_battle — avto-savollarni yoqish/to'xtatish\n\n` +
            `<i>Birinchi savol quyida yo'llanmoqda, barchaga omad! 🔥</i>`;

          await sendTelegramMessage(chat.id, welcomeText, null);

          // Immediately send 1st Quiz Poll
          const q = getRandomBattleQuestion();
          const pollRes = await sendGroupPoll(chat.id, q.question, q.options, q.correct, q.explanation);
          if (pollRes?.ok && pollRes.result?.poll?.id) {
            await supabase.from('telegram_group_polls').insert({
              poll_id: pollRes.result.poll.id,
              chat_id: chat.id,
              question_id: q.id,
              correct_option_id: q.correct,
              explanation: q.explanation,
              created_at: new Date().toISOString(),
            });

            await supabase
              .from('telegram_groups')
              .update({
                last_quiz_at: new Date().toISOString(),
                total_quizzes_sent: 1,
                updated_at: new Date().toISOString(),
              })
              .eq('chat_id', chat.id);
          }
          return res.status(200).json({ ok: true });
        } else if (['left', 'kicked'].includes(newStatus)) {
          // Deactivate group
          await supabase
            .from('telegram_groups')
            .update({
              is_active: false,
              updated_at: new Date().toISOString(),
            })
            .eq('chat_id', chat.id);
          return res.status(200).json({ ok: true });
        }
      }
      return res.status(200).json({ ok: true });
    }

    // 0.1 Handle Poll Answers (Group Quiz Voting)
    if (update.poll_answer) {
      const pa = update.poll_answer;
      const pollId = pa.poll_id;
      const user = pa.user;
      const chosenOption = pa.option_ids?.[0];

      if (pollId && user && chosenOption !== undefined) {
        // Find matching group poll
        const { data: pollRecord } = await supabase
          .from('telegram_group_polls')
          .select('*')
          .eq('poll_id', pollId)
          .maybeSingle();

        if (pollRecord) {
          const isCorrect = chosenOption === pollRecord.correct_option_id;
          const points = isCorrect ? 10 : 0;
          const userName = [user.first_name, user.last_name].filter(Boolean).join(' ') || user.username || 'Talaba';

          const { data: existingScore } = await supabase
            .from('telegram_group_scores')
            .select('*')
            .eq('chat_id', pollRecord.chat_id)
            .eq('user_id', user.id)
            .maybeSingle();

          if (existingScore) {
            await supabase
              .from('telegram_group_scores')
              .update({
                score: (existingScore.score || 0) + points,
                correct_count: (existingScore.correct_count || 0) + (isCorrect ? 1 : 0),
                total_answered: (existingScore.total_answered || 0) + 1,
                user_name: userName,
                username: user.username || existingScore.username || null,
                last_answered_at: new Date().toISOString(),
              })
              .eq('id', existingScore.id);
          } else {
            await supabase
              .from('telegram_group_scores')
              .insert({
                chat_id: pollRecord.chat_id,
                user_id: user.id,
                user_name: userName,
                username: user.username || null,
                score: points,
                correct_count: isCorrect ? 1 : 0,
                total_answered: 1,
                last_answered_at: new Date().toISOString(),
              });
          }
        }
      }
      return res.status(200).json({ ok: true });
    }

    // 1. Handle Callback Queries (Inline Buttons)
    if (update.callback_query) {
      const cb = update.callback_query;
      const chatId = cb.message?.chat?.id;
      const data = cb.data;

      // Handle interactive JLPT Quiz
      if (data && data.startsWith('quiz_')) {
        if (data === 'quiz_next') {
          const nextQIndex = Math.floor(Math.random() * QUIZ_QUESTIONS.length);
          const q = QUIZ_QUESTIONS[nextQIndex];
          await answerCallbackQuery(cb.id, 'Yangi savol yuklanmoqda...');
          await sendTelegramMessage(chatId, q.question, getQuizMarkup(nextQIndex));
          return res.status(200).json({ ok: true });
        }

        const parts = data.split('_');
        const qIdx = parseInt(parts[1], 10);
        const selectedOpt = parseInt(parts[2], 10);
        const q = QUIZ_QUESTIONS[qIdx];

        if (q) {
          const isCorrect = selectedOpt === q.correct;
          const feedbackTitle = isCorrect ? "🎉 <b>TO'G'RI JAVOB!</b>" : "❌ <b>NOTO'G'RI JAVOB!</b>";
          await answerCallbackQuery(cb.id, isCorrect ? "Barakalla! To'g'ri javob! 🎉" : "Noto'g'ri javob! 💡");

          const replyText = `${feedbackTitle}\n\n${q.explanation}\n\n👉 <i>Keyingi savolni ishlash uchun quyidagi tugmani bosing:</i>`;
          const nextMarkup = {
            inline_keyboard: [
              [{ text: "🎲 Keyingi savol ➡️", callback_data: "quiz_next" }],
              [{ text: "🌐 IELTS Talk Webda o'rganish", url: "https://ielts-talk.vercel.app/jlpt" }]
            ]
          };
          await sendTelegramMessage(chatId, replyText, nextMarkup);
          return res.status(200).json({ ok: true });
        }
      }

      // Handle plan task toggle
      if (data && (data.startsWith('ptoggle:') || data.startsWith('ptoggle_'))) {
        const isColon = data.startsWith('ptoggle:');
        const planId = isColon ? data.split(':')[1] : data.replace('ptoggle_', '').split('_')[0];
        const taskId = isColon ? data.split(':').slice(2).join(':') : data.replace('ptoggle_', '').split('_').slice(1).join('_');

        const { data: planRow } = await supabase
          .from('weekly_learning_plans')
          .select('*')
          .eq('id', planId)
          .maybeSingle();

        if (planRow && planRow.plan_data) {
          const planData = planRow.plan_data;
          let found = false;
          let isNowCompleted = false;

          if (Array.isArray(planData.days)) {
            for (const day of planData.days) {
              if (Array.isArray(day.tasks)) {
                for (const t of day.tasks) {
                  if (t.id === taskId) {
                    t.completed = !t.completed;
                    t.status = t.completed ? 'completed' : 'pending';
                    isNowCompleted = t.completed;
                    found = true;
                    break;
                  }
                }
              }
              if (found) break;
            }
          }

          if (found) {
            await supabase
              .from('weekly_learning_plans')
              .update({ plan_data: planData, updated_at: new Date().toISOString() })
              .eq('id', planId);

            await answerCallbackQuery(cb.id, isNowCompleted ? "✅ Vazifa bajarildi! (+25 XP) 🎉" : "⏳ Vazifa qaytarildi.");

            const { data: userLink } = await supabase
              .from('telegram_users')
              .select('user_id, telegram_first_name')
              .eq('telegram_id', cb.from.id)
              .maybeSingle();

            if (userLink && cb.message?.message_id) {
              const planResult = await formatTodayPlan(supabase, userLink.user_id, userLink.telegram_first_name);
              await editTelegramMessage(chatId, cb.message.message_id, planResult.text, planResult.markup);
            }
            return res.status(200).json({ ok: true });
          }
        }
      }

      // Handle standalone task complete
      if (data && data.startsWith('complete:')) {
        const taskId = data.split(':')[1];
        await supabase
          .from('tasks')
          .update({ completed: true, status: 'done', updated_at: new Date().toISOString() })
          .eq('id', taskId);

        await answerCallbackQuery(cb.id, "✅ Vazifa bajarildi! (+20 XP) 🎉");
        const { data: userLink } = await supabase
          .from('telegram_users')
          .select('user_id, telegram_first_name')
          .eq('telegram_id', cb.from.id)
          .maybeSingle();

        if (userLink && cb.message?.message_id) {
          const planResult = await formatTodayPlan(supabase, userLink.user_id, userLink.telegram_first_name);
          await editTelegramMessage(chatId, cb.message.message_id, planResult.text, planResult.markup);
        }
        return res.status(200).json({ ok: true });
      }

      // Handle refresh_today
      if (data === 'refresh_today') {
        await answerCallbackQuery(cb.id, "🔄 Bugungi reja yangilandi!");
        const { data: userLink } = await supabase
          .from('telegram_users')
          .select('user_id, telegram_first_name')
          .eq('telegram_id', cb.from.id)
          .maybeSingle();

        if (userLink && cb.message?.message_id) {
          const planResult = await formatTodayPlan(supabase, userLink.user_id, userLink.telegram_first_name);
          await editTelegramMessage(chatId, cb.message.message_id, planResult.text, planResult.markup);
        }
        return res.status(200).json({ ok: true });
      }

      await answerCallbackQuery(cb.id);
      return res.status(200).json({ ok: true });
    }

    // 2. Handle Messages
    const message = update.message;
    if (!message || !message.text) {
      return res.status(200).json({ ok: true });
    }

    const chatId = message.chat.id;
    const isGroup = ['group', 'supergroup'].includes(message.chat.type);
    const text = message.text.trim();
    const telegramId = message.from?.id;
    const username = message.from?.username || '';
    const firstName = message.from?.first_name || '';
    const lastName = message.from?.last_name || '';
    const cleanCommand = text.split(' ')[0].toLowerCase().split('@')[0];

    // --- Group JLPT Quiz Battle Commands ---
    // 1. /battle or /quiz in group: Drop native quiz poll
    if (cleanCommand === '/battle' || (isGroup && (cleanCommand === '/quiz' || text.includes('Quiz')))) {
      const q = getRandomBattleQuestion();
      const pollRes = await sendGroupPoll(chatId, q.question, q.options, q.correct, q.explanation);
      if (pollRes?.ok && pollRes.result?.poll?.id) {
        await supabase.from('telegram_group_polls').insert({
          poll_id: pollRes.result.poll.id,
          chat_id: chatId,
          question_id: q.id,
          correct_option_id: q.correct,
          explanation: q.explanation,
          created_at: new Date().toISOString(),
        });

        await supabase.from('telegram_groups').upsert({
          chat_id: chatId,
          title: message.chat.title || 'Guruh',
          chat_type: message.chat.type,
          is_active: true,
          last_quiz_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        }, { onConflict: 'chat_id' });
      }
      return res.status(200).json({ ok: true });
    }

    // 2. Leaderboard: /top, /reyting, /leaderboard
    if (cleanCommand === '/top' || cleanCommand === '/reyting' || cleanCommand === '/leaderboard') {
      const { data: topUsers } = await supabase
        .from('telegram_group_scores')
        .select('*')
        .eq('chat_id', chatId)
        .order('score', { ascending: false })
        .order('correct_count', { ascending: false })
        .limit(10);

      if (!topUsers || topUsers.length === 0) {
        await sendTelegramMessage(
          chatId,
          `🏆 <b>Guruh JLPT Quiz Battle Reytingi:</b>\n\nHozircha hech kim savollarga javob bermagan.\nSavol tashlash uchun: /battle\nTo'g'ri javob bering va 1-o'ringa chiqing! ⚔️`,
          null
        );
        return res.status(200).json({ ok: true });
      }

      const medalIcons = ['🥇', '🥈', '🥉', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟'];
      const lines = topUsers.map((u, idx) => {
        const medal = medalIcons[idx] || `${idx + 1}.`;
        const name = escapeHTML(u.user_name || (u.username ? `@${u.username}` : 'Talaba'));
        const tag = u.username ? ` (@${escapeHTML(u.username)})` : '';
        const pct = u.total_answered > 0 ? Math.round((u.correct_count / u.total_answered) * 100) : 0;
        return `${medal} <b>${name}</b>${tag}\n    └ <b>${u.score} XP</b> | ${u.correct_count}/${u.total_answered} to'g'ri (${pct}%)`;
      });

      const topText =
        `🏆 <b>Guruh JLPT Quiz Battle — TOP 10 Yetakchilar:</b>\n\n` +
        lines.join('\n\n') +
        `\n\n⚔️ <i>To'g'ri javob: +10 XP</i>\n` +
        `🎲 Yangi savol: /battle`;

      await sendTelegramMessage(chatId, topText, null);
      return res.status(200).json({ ok: true });
    }

    // 3. /start_battle
    if (cleanCommand === '/start_battle') {
      await supabase.from('telegram_groups').upsert({
        chat_id: chatId,
        title: message.chat.title || 'Guruh',
        chat_type: message.chat.type,
        is_active: true,
        interval_hours: 2,
        updated_at: new Date().toISOString(),
      }, { onConflict: 'chat_id' });

      await sendTelegramMessage(
        chatId,
        `⚔️ <b>JLPT Quiz Battle faollashtirildi!</b>\n\n✅ Bot har 2 soatda avtomatik savol tashlab turadi.\n\n• /battle — Navbatsiz yangi savol\n• /top — Guruh reytingi\n• /stop_battle — Avto-savollarni to'xtatish`,
        null
      );
      return res.status(200).json({ ok: true });
    }

    // 4. /stop_battle
    if (cleanCommand === '/stop_battle') {
      await supabase
        .from('telegram_groups')
        .update({
          is_active: false,
          updated_at: new Date().toISOString(),
        })
        .eq('chat_id', chatId);

      await sendTelegramMessage(
        chatId,
        `⏸️ <b>JLPT Quiz Battle avtomatik savollari to'xtatildi.</b>\n\nQayta yoqish uchun: /start_battle yozing.`,
        null
      );
      return res.status(200).json({ ok: true });
    }

    // 5. /battle_help or /help in group
    if (cleanCommand === '/battle_help' || (isGroup && (cleanCommand === '/help' || text.includes('Yordam')))) {
      const battleHelpText =
        `⚔️ <b>JLPT Quiz Battle Buyruqlari:</b>\n\n` +
        `• /battle — Yangi JLPT savolini navbatsiz tashlash\n` +
        `• /top yoki /reyting — Guruhning TOP 10 reyting jadvali\n` +
        `• /start_battle — Har 2 soatda avtomatik savol yuborishni yoqish\n` +
        `• /stop_battle — Avtomatik savollarni to'xtatish\n` +
        `• /battle_help — Ushbu yordam xabari\n\n` +
        `🚀 <b>IELTS Talk:</b> https://ielts-talk.vercel.app/`;
      await sendTelegramMessage(chatId, battleHelpText, null);
      return res.status(200).json({ ok: true });
    }

    // 6. In groups, ignore any other text messages quietly to avoid spamming the group
    if (isGroup) {
      return res.status(200).json({ ok: true });
    }

    // A. Handle /start <code> or /start
    if (text.startsWith('/start')) {
      const parts = text.split(' ');
      const code = (parts[1] || '').trim().toUpperCase();

      if (code && code.length === 6) {
        // Find code in telegram_link_codes
        const { data: linkRecord, error: codeErr } = await supabase
          .from('telegram_link_codes')
          .select('*')
          .ilike('code', code)
          .eq('used', false)
          .gt('expires_at', new Date().toISOString())
          .maybeSingle();

        if (codeErr || !linkRecord) {
          await sendTelegramMessage(chatId, `❌ <b>Noto'g'ri yoki muddati o'tgan kod!</b>\n\nIltimos, IELTS Talk saytidagi Sozlamalar sahifasidan yangi kod oling:\n<a href="https://ielts-talk.vercel.app/settings">Sozlamalar sahifasiga o'tish</a>`);
          return res.status(200).json({ ok: true });
        }

        // Link user
        await supabase.from('telegram_users').upsert({
          user_id: linkRecord.user_id,
          telegram_id: telegramId,
          chat_id: chatId,
          telegram_username: username,
          telegram_first_name: firstName,
          telegram_last_name: lastName,
          notifications_enabled: true,
          updated_at: new Date().toISOString()
        });

        // Mark code as used
        await supabase.from('telegram_link_codes').update({ used: true }).eq('id', linkRecord.id);

        await sendTelegramMessage(chatId, `🎉 <b>Tabriklaymiz, ${escapeHTML(firstName)}!</b>\n\nTelegram bot IELTS Talk hisobingizga muvaffaqiyatli ulandi! 🚀\n\nEndi siz:\n• Kunlik darslar va vazifalar eslatmalarini olasiz\n• Mini-quizlar orqali IELTS va ingliz tilini mustahkamlaysiz\n• Speaking va fleshkarta natijalaringizni kuzatib borasiz!`, defaultKeyboard);
        return res.status(200).json({ ok: true });
      }

      // Check if already linked
      const { data: existingUser } = await supabase
        .from('telegram_users')
        .select('*')
        .eq('telegram_id', telegramId)
        .maybeSingle();

      await setTelegramMenuButton(chatId);
      const appInlineMarkup = {
        inline_keyboard: [
          [{ text: '🚀 IELTS Talk-ni Ochish', web_app: { url: 'https://ielts-talk.vercel.app/' } }]
        ]
      };

      if (existingUser) {
        await sendTelegramMessage(chatId, `👋 <b>Assalomu alaykum, ${escapeHTML(firstName)}!</b>\n\nHisobingiz platformaga ulangan.\n\nTelegram ichida platformani to'liq ochish uchun quyidagi tugmani bosing:`, appInlineMarkup);
      } else {
        await sendTelegramMessage(chatId, `👋 <b>Assalomu alaykum!</b>\n\nIELTS Talk Telegram botiga xush kelibsiz.\n\nTelegramdan chiqmasdan IELTS va ingliz tilini o'rganishni boshlash uchun quyidagi tugmani bosing:`, appInlineMarkup);
      }
      return res.status(200).json({ ok: true });
    }

    // B. Handle /app or 'Mini App'
    if (text === '/app' || text.includes('Mini App') || text.includes('IELTS Talk')) {
      await setTelegramMenuButton(chatId);
      const appMarkup = {
        inline_keyboard: [
          [{ text: '🚀 IELTS Talk-ni Ochish', web_app: { url: 'https://ielts-talk.vercel.app/' } }]
        ]
      };
      await sendTelegramMessage(
        chatId,
        `📱 <b>IELTS Talk:</b>\n\nTelegramdan chiqmasdan IELTS va ingliz tilini to'liq o'rganing:\n• 🎙️ AI IELTS Speaking Coach (Part 1, 2, 3)\n• 📝 IELTS Mock Exam (Reading, Listening, Writing)\n• 📚 Oxford 3000 & Academic Anki Fleshkartalar\n• 🇬🇧 Grammatika qoidalari va interaktiv quizlar\n• 🔥 Shaxsiy kunlik o'quv rejasi\n\nIlovani ochish uchun quyidagi tugmani bosing:`,
        appMarkup
      );
      return res.status(200).json({ ok: true });
    }

    // C. Handle /quiz or '🇬🇧 IELTS Quiz'
    if (text === '/quiz' || text.includes('IELTS Quiz') || text.includes('Yaponcha Quiz') || text.includes('Quiz')) {
      const randIdx = Math.floor(Math.random() * QUIZ_QUESTIONS.length);
      const q = QUIZ_QUESTIONS[randIdx];
      await sendTelegramMessage(chatId, q.question, getQuizMarkup(randIdx));
      return res.status(200).json({ ok: true });
    }

    // C. Handle /flashcards or '📚 Fleshkartalar'
    if (text === '/flashcards' || text.includes('Fleshkartalar')) {
      const { data: userLink } = await supabase
        .from('telegram_users')
        .select('user_id')
        .eq('telegram_id', telegramId)
        .maybeSingle();

      let cardInfo = "";
      if (userLink?.user_id) {
        const nowIso = new Date().toISOString();
        const { count } = await supabase
          .from('flashcards')
          .select('id', { count: 'exact', head: true })
          .eq('user_id', userLink.user_id)
          .lte('next_review', nowIso);

        cardInfo = count && count > 0
          ? `\n\n📌 <b>Sizda bugun takrorlanishi kerak bo'lgan:</b> <code>${count} ta</code> karta mavjud!`
          : `\n\n✨ Barcha kartalar takrorlangan yoki yangi so'zlar qo'shishingiz mumkin!`;
      }

      const flashcardMarkup = {
        inline_keyboard: [
          [{ text: "🎴 Fleshkartalarni Takrorlash", url: "https://ielts-talk.vercel.app/decks" }]
        ]
      };
      await sendTelegramMessage(
        chatId,
        `📚 <b>IELTS Talk Fleshkartalari (SRS Tizimi):</b>\n\nSuperMemo SM-2 algoritmi asosida Oxford 3000 va Academic so'zlarni eslab qoling.${cardInfo}\n\nFleshkartalarni o'rganish uchun veb ilovaga kiring:`,
        flashcardMarkup
      );
      return res.status(200).json({ ok: true });
    }

    // D. Handle /speaking or '🎯 Speaking Coach'
    if (text === '/speaking' || text.includes('Speaking Mashqi') || text.includes('Speaking Coach')) {
      const speakingMarkup = {
        inline_keyboard: [
          [{ text: "🎙️ Speaking Coach-ga o'tish", url: "https://ielts-talk.vercel.app/speaking" }]
        ]
      };
      await sendTelegramMessage(
        chatId,
        `🎯 <b>Bugungi Speaking Coach Mashqi (10 daqiqa):</b>\n\nIELTS Speaking imtihoni va kundalik ingliz tili muloqotingizni AI bilan oshiring:\n• 🎙️ <b>Part 1:</b> Introduction & Familiar Topics (Work, Study, Hometown)\n• 📋 <b>Part 2:</b> Cue Card (2 daqiqalik monolog nutq)\n• 🧠 <b>Part 3:</b> Two-way Discussion (Tahliliy fikr bildirish)\n• 💡 Band 7+ Lexical Resource & Pronunciation tahlili\n\nHar kuni 10 daqiqa jonli gaplashish speaking balingizni 7.5+ ga ko'taradi! 🚀`,
        speakingMarkup
      );
      return res.status(200).json({ ok: true });
    }

    // E. Handle /plan, /today, /tasks, or '📅 Bugungi reja'
    if (text === '/plan' || text === '/today' || text === '/reja' || text.includes('Bugungi reja') || text === '/tasks') {
      const { data: userLink } = await supabase
        .from('telegram_users')
        .select('user_id, telegram_first_name')
        .eq('telegram_id', telegramId)
        .maybeSingle();

      if (!userLink?.user_id) {
        await sendTelegramMessage(chatId, "⚠️ <i>Avval akkauntingizni botga ulang: /start kod</i>");
        return res.status(200).json({ ok: true });
      }

      const planResult = await formatTodayPlan(supabase, userLink.user_id, userLink.telegram_first_name || firstName);
      await sendTelegramMessage(chatId, planResult.text, planResult.markup);
      return res.status(200).json({ ok: true });
    }

    // F. Legacy fallback: /subscription
    if (text === '/subscription' || text.includes('Obuna holati')) {
      await sendTelegramMessage(chatId, `🎁 <b>IELTS Talk 100% Bepul va Ochiq!</b>\n\nPlatformadagi barcha imkoniyatlar (AI Speaking Coach, IELTS Mock Exam, Anki Fleshkartalar, Audio talaffuz) barcha foydalanuvchilar uchun mutlaqo bepul taqdim etiladi! 🚀\n\n🔗 Web sayt: <a href="https://ielts-talk.vercel.app">IELTS Talk Bosh Sahifa</a>`);
      return res.status(200).json({ ok: true });
    }

    // G. Handle /help or 'ℹ️ Yordam'
    if (text === '/help' || text.includes('Yordam')) {
      await sendTelegramMessage(chatId, `ℹ️ <b>IELTS Talk Bot Yordam Qo'llanmasi:</b>\n\n/start - Akkauntni ulash yoki bosh menyu\n/app - Telegram Mini App ilovasini ochish 🚀\n/quiz - IELTS va ingliz tili bo'yicha interaktiv mini-quiz 🇬🇧\n/plan - Bugungi o'quv rejalari va vazifalar\n/flashcards - Fleshkartalar holati va takrorlash\n/speaking - AI Speaking Coach mashqlari\n/help - Yordam menyusi\n\n🌐 Asosiy veb-sayt: <a href="https://ielts-talk.vercel.app">IELTS Talk Platformasi</a>`);
      return res.status(200).json({ ok: true });
    }

    // Default fallback
    await sendTelegramMessage(chatId, `Tushunarsiz buyruq. Quyidagi menyu tugmalaridan birini tanlang yoki /help yozing:`, defaultKeyboard);
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Telegram webhook error:', err);
    return res.status(200).json({ ok: false, error: err?.message });
  }
}
