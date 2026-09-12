// @ts-expect-error: Deno imports
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.0';
// @ts-expect-error: Deno imports
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { getSupabaseSecretKey } from '../_shared/secretKey.ts';

declare const Deno: { env: { get(key: string): string | undefined } };

const BOT_TOKEN = Deno.env.get('TELEGRAM_BOT_TOKEN')!;
const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!;
// Supabase Secret key (sb_secret_...) — trusted cron/server bearer sifatida ham ishlatiladi
const SUPABASE_KEY = getSupabaseSecretKey();

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// Helper to escape HTML characters
function escapeHTML(str: string): string {
    if (!str) return '';
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

function getTaskTypeIcon(type?: string): string {
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

// Helper to send message
async function sendMessage(chatId: number, text: string, reply_markup?: any) {
    try {
        const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
        const body: any = {
            chat_id: chatId,
            text,
            parse_mode: 'HTML',
            disable_web_page_preview: true
        };
        if (reply_markup) {
            body.reply_markup = reply_markup;
        }
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });
        const data = await response.json();
        if (!data.ok) {
            console.error(`Failed to send message to ${chatId}:`, data);
        }
        return data;
    } catch (error) {
        console.error(`Error sending message to ${chatId}:`, error);
        return null;
    }
}

serve(async (req: Request) => {
    try {
        const url = new URL(req.url);
        const debugTime = url.searchParams.get('time');

        // SECURITY: this function messages every linked Telegram user.
        // Only the service role (cron) or an admin may invoke it. The
        // ?time= debug parameter is gated behind this auth as well.
        const authHeader = req.headers.get('Authorization') || '';
        const token = authHeader.replace('Bearer ', '').trim();
        const jsonHeaders = { 'Content-Type': 'application/json' };

        if (!token) {
            return new Response(JSON.stringify({ error: 'Missing Authorization header' }), {
                status: 401,
                headers: jsonHeaders,
            });
        }

        if (token !== SUPABASE_KEY) {
            const { data: { user }, error: authError } = await supabase.auth.getUser(token);
            if (authError || !user) {
                return new Response(JSON.stringify({ error: 'Invalid token' }), {
                    status: 401,
                    headers: jsonHeaders,
                });
            }
            const { data: profile } = await supabase
                .from('profiles')
                .select('role, email')
                .eq('id', user.id)
                .maybeSingle();
            const isAdmin = profile &&
                (profile.role === 'admin' || profile.role === 'superadmin' || profile.email === 'fsoyilov@gmail.com');
            if (!isAdmin) {
                return new Response(JSON.stringify({ error: 'Forbidden: admin only' }), {
                    status: 403,
                    headers: jsonHeaders,
                });
            }
        }

        // 1. Get current time in Uzbekistan Time (UTC+5)
        const timeFormatter = new Intl.DateTimeFormat('en-US', {
            timeZone: 'Asia/Tashkent',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        });

        const dateFormatter = new Intl.DateTimeFormat('en-CA', { // YYYY-MM-DD format
            timeZone: 'Asia/Tashkent',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        });

        const now = new Date();
        const currentTime = (debugTime || timeFormatter.format(now)).trim();
        const todayDate = dateFormatter.format(now); // Local YYYY-MM-DD

        console.log(`Checking notifications at: "${currentTime}" (Tashkent Time), Date: ${todayDate}`);

        // Default: Supported notification windows: 09:00, 14:00, 20:00, 21:00 or debug
        const isScheduledHour = ['09:00', '14:00', '20:00', '21:00'].includes(currentTime);
        if (!isScheduledHour && !debugTime) {
            return new Response(JSON.stringify({ message: `No scheduled notifications for ${currentTime}` }), { status: 200 });
        }

        // 2. Get ALL active users with notifications enabled
        const { data: users, error: userError } = await supabase
            .from('telegram_users')
            .select('user_id, chat_id, telegram_first_name')
            .eq('notifications_enabled', true)
            .eq('is_active', true);

        if (userError) {
            console.error('Error fetching users:', userError);
            return new Response(JSON.stringify({ error: userError.message }), { status: 500 });
        }

        if (!users || users.length === 0) {
            return new Response(JSON.stringify({ message: 'No active users found' }), { status: 200 });
        }

        console.log(`Found ${users.length} users to notify`);
        let sentCount = 0;

        for (const user of users) {
            // 1. Fetch tasks for TODAY (Local Date)
            const { data: tasks } = await supabase
                .from('tasks')
                .select('title, due_date, priority, status')
                .eq('user_id', user.user_id)
                .lte('due_date', todayDate + 'T23:59:59')
                .order('due_date', { ascending: true });

            // 2. Fetch active personal learning goal & weekly plan
            let activeGoal: any = null;
            try {
                const { data: goal } = await supabase
                    .from('personal_learning_goals')
                    .select('*')
                    .eq('user_id', user.user_id)
                    .eq('status', 'active')
                    .order('created_at', { ascending: false })
                    .limit(1)
                    .maybeSingle();
                activeGoal = goal;
            } catch (e) {
                console.warn('Could not query personal goal:', e);
            }

            let planTasks: any[] = [];
            let weeklyPlan: any = null;
            const dayOfWeek = new Intl.DateTimeFormat('en-US', {
                timeZone: 'Asia/Tashkent',
                weekday: 'long'
            }).format(now).toLowerCase();

            try {
                let planQuery = supabase
                    .from('weekly_learning_plans')
                    .select('*')
                    .eq('user_id', user.user_id);
                if (activeGoal?.id) {
                    planQuery = planQuery.eq('goal_id', activeGoal.id);
                }
                const { data: plan } = await planQuery
                    .order('week_number', { ascending: false })
                    .limit(1)
                    .maybeSingle();
                weeklyPlan = plan;
                if (weeklyPlan?.plan_data?.days && Array.isArray(weeklyPlan.plan_data.days)) {
                    const dayObj = weeklyPlan.plan_data.days.find((d: any) => (d.day || '').toLowerCase() === dayOfWeek);
                    if (dayObj && Array.isArray(dayObj.tasks)) {
                        planTasks = dayObj.tasks;
                    }
                }
            } catch (e) {
                console.warn('Could not query weekly plan:', e);
            }

            // Fetch due SRS flashcards
            const { data: dueCards } = await supabase
                .from('flashcards')
                .select('id, front')
                .eq('user_id', user.user_id)
                .lte('next_review_date', todayDate + 'T23:59:59');

            const allCompletedItems: any[] = [];
            const allPendingItems: any[] = [];

            planTasks.forEach(t => {
                const isDone = t.completed === true || t.status === 'completed';
                const item = {
                    title: t.title,
                    type: t.type || 'task',
                    duration: t.estimatedMinutes || 15,
                    isDone
                };
                if (isDone) allCompletedItems.push(item);
                else allPendingItems.push(item);
            });

            (tasks || []).forEach((t: any) => {
                const isDone = t.status === 'done' || (t.due_date?.startsWith(todayDate) && t.completed === true);
                const item = {
                    title: t.title,
                    type: 'task',
                    duration: 20,
                    isDone
                };
                if (isDone) allCompletedItems.push(item);
                else allPendingItems.push(item);
            });

            const dueFlashcardsCount = dueCards?.length || 0;
            const totalPlannedMinutes = planTasks.reduce((sum, t) => sum + (t.estimatedMinutes || 15), 0);
            const goalName = activeGoal?.target_goal || (activeGoal?.target_level ? `IELTS Band ${activeGoal.target_level}` : 'IELTS / Ingliz tili');
            const weekNum = weeklyPlan?.week_number || activeGoal?.current_week || 1;

            let message = '';
            let replyMarkup: any = null;

            const baseAppUrl = 'https://ielts-talk.vercel.app'; // Production frontend URL

            // --- MORNING / MIDDAY NOTIFICATION (09:00 / 14:00) ---
            if (currentTime === '09:00' || currentTime === '14:00') {
                const srsText = dueFlashcardsCount > 0
                    ? `🧠 <b>SRS Fleshkartalar:</b> Bugun <b>${dueFlashcardsCount} ta</b> so'z takrorlashga tayyor!\n\n`
                    : '';

                if (allPendingItems.length === 0 && dueFlashcardsCount === 0) {
                    message = `🌅 <b>Xayrli kun, ${escapeHTML(user.telegram_first_name || 'Foydalanuvchi')}!</b>\n\n` +
                        `Bugungi kun uchun barcha vazifalar bajarilgan yoki hali reja tuzilmagan.\n` +
                        `IELTS Talk orqali yangi 1 haftalik maqsadli reja tuzing! 🚀\n\n` +
                        `<i>Unumli kun tilayman!</i> ✨`;
                    replyMarkup = {
                        inline_keyboard: [
                            [{ text: "🎯 Shaxsiy Reja Tuzish 🚀", web_app: { url: `${baseAppUrl}/planner` } }]
                        ]
                    };
                } else {
                    const taskList = allPendingItems.slice(0, 6).map((t, i) => {
                        const icon = getTaskTypeIcon(t.type);
                        return `  <b>${i + 1}.</b> ${icon} <b>${escapeHTML(t.title)}</b> <i>(~${t.duration} daq)</i>`;
                    }).join('\n');

                    message = `🌅 <b>Xayrli kun, ${escapeHTML(user.telegram_first_name || 'Foydalanuvchi')}!</b>\n\n` +
                        (activeGoal ? `🎯 <b>Maqsad:</b> ${escapeHTML(goalName)} <i>(${weekNum}-hafta)</i>\n\n` : '') +
                        srsText +
                        (allPendingItems.length > 0 ? `📋 <b>Bugungi rejalaringiz (${allPendingItems.length} ta):</b>\n${taskList}\n\n` : '') +
                        (totalPlannedMinutes > 0 ? `⏱️ <b>Rejalashtirilgan vaqt:</b> ~${totalPlannedMinutes} daqiqa\n\n` : '') +
                        `<i>Kun davomida rejangizga amal qilib, streak ballingizni oshiring!</i> 💪`;

                    replyMarkup = {
                        inline_keyboard: [
                            [{ text: "🚀 Darslarni Boshlash (Mini App)", web_app: { url: `${baseAppUrl}/study-mode` } }],
                            [{ text: "🧠 Fleshkartalarni Takrorlash", url: `${baseAppUrl}/decks` }]
                        ]
                    };
                }

                if (message) {
                    await sendMessage(user.chat_id, message, replyMarkup);
                    sentCount++;
                }
            }

            // --- EVENING NOTIFICATION (20:00 / 21:00) ---
            else if (currentTime === '20:00' || currentTime === '21:00') {
                const isSunday = now.getDay() === 0;

                if (isSunday) {
                    // WEEKLY REPORT
                    const weekAgoDate = new Date(now);
                    weekAgoDate.setDate(weekAgoDate.getDate() - 7);
                    const weekAgoStr = dateFormatter.format(weekAgoDate);

                    // Fetch weekly tasks
                    const { data: weeklyTasks } = await supabase
                        .from('tasks')
                        .select('status')
                        .eq('user_id', user.user_id)
                        .eq('status', 'done')
                        .gte('due_date', weekAgoStr + 'T00:00:00')
                        .lte('due_date', todayDate + 'T23:59:59');

                    // Fetch weekly study sessions
                    const { data: weeklySessions } = await supabase
                        .from('study_sessions')
                        .select('duration')
                        .eq('user_id', user.user_id)
                        .eq('completed', true)
                        .eq('type', 'focus')
                        .gte('start_time', weekAgoStr + 'T00:00:00')
                        .lte('start_time', todayDate + 'T23:59:59');

                    const totalWeeklyTasks = (weeklyTasks?.length || 0) + allCompletedItems.length;
                    const totalDurationMinutes = weeklySessions?.reduce((acc: number, s: { duration: number }) => acc + (s.duration || 0), 0) || 0;
                    const hours = Math.floor(totalDurationMinutes / 60);
                    const minutes = totalDurationMinutes % 60;
                    const durationStr = hours > 0 ? `${hours} soat ${minutes} daqiqa` : `${minutes} daqiqa`;

                    message = `📊 <b>Haftalik Hisobotingiz tayyor, ${escapeHTML(user.telegram_first_name || 'Foydalanuvchi')}!</b>\n\n` +
                        `O'tgan 7 kun ichida siz:\n` +
                        `✅ <b>${totalWeeklyTasks}</b> ta vazifani yakunladingiz.\n` +
                        `⏱ <b>${durationStr}</b> diqqat (fokus) qildingiz.\n\n` +
                        `Kelgusi haftada ham shu ruhda davom eting! 💪\n` +
                        `<i>Yaxshi dam oling!</i> 🌙`;
                    await sendMessage(user.chat_id, message);
                    sentCount++;

                } else {
                    // REGULAR DAILY REPORT + ACCOUNTABILITY
                    const { data: todaySessions } = await supabase
                        .from('study_sessions')
                        .select('duration')
                        .eq('user_id', user.user_id)
                        .eq('completed', true)
                        .gte('start_time', todayDate + 'T00:00:00')
                        .lte('start_time', todayDate + 'T23:59:59');

                    const todayDuration = todaySessions?.reduce((acc: number, s: { duration: number }) => acc + (s.duration || 0), 0) || 0;
                    const totalToday = allPendingItems.length + allCompletedItems.length;

                    if (allCompletedItems.length === 0 && todayDuration === 0 && dueFlashcardsCount > 0) {
                        message = `⚠️ <b>Kechki Eslatma, ${escapeHTML(user.telegram_first_name || 'Foydalanuvchi')}!</b>\n\n` +
                                  `Bugun hali dars seansi o'tkazilmadi, ammo <b>${dueFlashcardsCount} ta fleshkartangiz</b> takrorlashni kutmoqda!\n` +
                                  `Uxlashdan oldin 5 daqiqa ajratib takrorlab oling va streak ballingizni saqlab qoling 🧠⚡️`;

                        replyMarkup = {
                            inline_keyboard: [
                                [{ text: "🧠 Hozir 5 Daqiqada Takrorlash 🚀", url: `${baseAppUrl}/decks` }],
                                [{ text: "😴 Bugun charchadim", callback_data: `excuse_tired_${todayDate}` }]
                            ]
                        };
                        await sendMessage(user.chat_id, message, replyMarkup);
                        sentCount++;
                    } else if (allCompletedItems.length === 0 && todayDuration === 0 && allPendingItems.length === 0) {
                        message = `⚠️ <b>Sizni sog'indik, ${escapeHTML(user.telegram_first_name || 'Foydalanuvchi')}!</b>\n\n` +
                                  `Bugun hech qanday vazifa yopilmadi.\n` +
                                  `IELTS Talk orqali shaxsiy o'quv rejangizni faollashtiring! 🚀\n`;

                        replyMarkup = {
                            inline_keyboard: [
                                [{ text: "🎯 Reja Tuzish", web_app: { url: `${baseAppUrl}/planner` } }],
                                [{ text: "😴 Bugun charchadim", callback_data: `excuse_tired_${todayDate}` }]
                            ]
                        };
                        await sendMessage(user.chat_id, message, replyMarkup);
                        sentCount++;
                    } else {
                        const progress = totalToday > 0 ? Math.round((allCompletedItems.length / totalToday) * 100) : 0;
                        const srsRemind = dueFlashcardsCount > 0
                            ? `\n🧠 Kutilayotgan fleshkartalar: <b>${dueFlashcardsCount} ta</b>`
                            : '';

                        let pendingText = '';
                        if (allPendingItems.length > 0) {
                            pendingText = '\n⏳ <b>Qolgan vazifalar:</b>\n' +
                                allPendingItems.map((t, i) => `  ${i + 1}. ${getTaskTypeIcon(t.type)} ${escapeHTML(t.title)}`).join('\n') +
                                `\n\n<i>Uxlashdan oldin qolgan vazifalarni yakunlab oling va streakingizni saqlang! 🔥</i>`;
                        } else {
                            pendingText = `\n🎉 <i>Barchasini mukammal uddaladingiz! Barakalla!</i> 🌟`;
                        }

                        message = `🌙 <b>Xayrli kech, ${escapeHTML(user.telegram_first_name || 'Foydalanuvchi')}!</b>\n\n` +
                            (activeGoal ? `🎯 <b>Maqsad:</b> ${escapeHTML(goalName)}\n` : '') +
                            `📊 <b>Bugungi natijalaringiz:</b>\n` +
                            `✅ Bajarildi: <b>${allCompletedItems.length}</b> ta vazifa\n` +
                            `⏳ Qoldi: <b>${allPendingItems.length}</b> ta vazifa\n` +
                            (todayDuration > 0 ? `⏱ Fokus vaqti: <b>${todayDuration} daqiqa</b>\n` : '') +
                            `📈 Samaradorlik: <b>${progress}%</b>` +
                            srsRemind + `\n` +
                            pendingText + `\n\n` +
                            `<i>Tinch osuda tun tilayman!</i> 😴`;
                        
                        replyMarkup = {
                            inline_keyboard: [
                                [{ text: "🚀 IELTS Talk-ni Ochish", web_app: { url: `${baseAppUrl}/` } }]
                            ]
                        };
                        await sendMessage(user.chat_id, message, replyMarkup);
                        sentCount++;
                    }
                }
            }

            await new Promise(resolve => setTimeout(resolve, 100)); // Rate limiting
        }

        return new Response(JSON.stringify({
            message: `Notifications sent to ${sentCount} users at ${currentTime}`,
            total_users: users.length
        }), {
            headers: { 'Content-Type': 'application/json' },
            status: 200
        });

    } catch (error: unknown) {
        console.error('Unexpected error:', error);
        const err = error as { message?: string };
        return new Response(JSON.stringify({ error: err.message || String(error) }), { status: 500 });
    }
});
