import React, { useState, useEffect, useCallback } from 'react';
import {
  Loader2,
  ExternalLink,
  Send,
  Copy,
  Check,
  Bell,
  Bot,
  Sparkles,
  RefreshCw,
  Unlink,
  AlertCircle,
  BookOpen,
  CheckSquare,
  Zap,
  Clock,
  ShieldCheck,
} from 'lucide-react';
import { Button } from '../ui/Button';
import telegramService, { TelegramUser } from '../../services/TelegramService';
import { useStudyData } from '../../context/IeltsTalkContext';
import { toast } from '../../hooks/use-toast';
import { motion, AnimatePresence } from 'framer-motion';
import { safeLocalStorage } from '../../utils/storage/safeLocalStorage';

const TelegramSection: React.FC = () => {
  const { user, flashcards } = useStudyData();
  const [linkCode, setLinkCode] = useState<string | null>(null);
  const [expiresAt, setExpiresAt] = useState<string | null>(null);
  const [linkedAccount, setLinkedAccount] = useState<TelegramUser | null>(null);
  const [loading, setLoading] = useState(false);
  const [actionLoading, setActionLoading] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [showCommands, setShowCommands] = useState(false);

  const dueCardsCount = flashcards.filter(
    (f) => !f.nextReviewDate || new Date(f.nextReviewDate) <= new Date(),
  ).length;

  // Get user ID strictly from authenticated user, local session cache, or persistent guest UUID
  const getEffectiveUserId = useCallback(() => {
    if (user?.id) return user.id;
    try {
      const cached = safeLocalStorage.getJSON<{ id?: string } | null>(
        'ielts_talk_user_cache',
        null,
      );
      if (cached?.id) return cached.id;
    } catch {}
    try {
      let guestId = localStorage.getItem('ielts_talk_guest_id');
      if (!guestId) {
        guestId =
          typeof crypto !== 'undefined' && crypto.randomUUID
            ? crypto.randomUUID()
            : 'guest_' + Math.random().toString(36).substring(2, 15);
        localStorage.setItem('ielts_talk_guest_id', guestId);
      }
      return guestId;
    } catch {}
    return null;
  }, [user]);

  const effectiveUserId = getEffectiveUserId();

  const checkLinkStatus = useCallback(
    async (silent = false) => {
      if (!effectiveUserId) {
        setLinkedAccount(null);
        setLoading(false);
        return;
      }
      if (!silent) setLoading(true);
      try {
        const account = await telegramService.getLinkedAccount(effectiveUserId);
        setLinkedAccount(account);
        if (account) {
          setNotificationsEnabled(account.notifications_enabled);
          setLinkCode(null);
        }
        if (!silent && account) {
          toast({ title: '✅ Telegram holati yangilandi: Ulangan' });
        }
      } catch (err) {
        if (!silent) {
          toast({ variant: 'destructive', title: 'Holatni tekshirishda xatolik' });
        }
      } finally {
        if (!silent) setLoading(false);
      }
    },
    [effectiveUserId],
  );

  // Load linked account on mount
  useEffect(() => {
    checkLinkStatus(true);
  }, [checkLinkStatus]);

  // Poll for link completion after code is generated
  useEffect(() => {
    if (!effectiveUserId || !linkCode || linkedAccount) return;

    const pollInterval = setInterval(async () => {
      try {
        const account = await telegramService.getLinkedAccount(effectiveUserId);
        if (account) {
          setLinkedAccount(account);
          setNotificationsEnabled(account.notifications_enabled);
          setLinkCode(null);
          toast({
            title: '🎉 Telegram muvaffaqiyatli ulandi!',
            description: `@${account.telegram_username || account.telegram_first_name || 'Foydalanuvchi'} hisobi bog'landi.`,
          });
        }
      } catch {
        // Silently ignore polling errors
      }
    }, 3000);

    return () => clearInterval(pollInterval);
  }, [effectiveUserId, linkCode, linkedAccount]);

  const handleGenerateCode = async () => {
    if (!effectiveUserId) {
      toast({ variant: 'destructive', title: 'Telegram botni ulash uchun avval tizimga kiring' });
      return;
    }
    setLoading(true);
    try {
      const result = await telegramService.generateLinkCode(effectiveUserId);
      if (result.linked && result.account) {
        setLinkedAccount(result.account);
        setNotificationsEnabled(result.account.notifications_enabled);
        toast({ title: '✅ Akkaunt allaqachon ulangan!' });
      } else if (result.code) {
        setLinkCode(result.code);
        setExpiresAt(result.expires_at || new Date(Date.now() + 15 * 60 * 1000).toISOString());
        toast({
          title: '🔑 Ulanish kodi yaratildi',
          description: 'Telegram botga kodni yuboring yoki quyidagi tugmani bosing.',
        });
      }
    } catch (err) {
      toast({ variant: 'destructive', title: 'Kodni yaratishda xatolik yuz berdi' });
    } finally {
      setLoading(false);
    }
  };

  const handleCopyCode = async () => {
    if (!linkCode) return;
    try {
      await navigator.clipboard.writeText(linkCode);
      setCopied(true);
      toast({ title: '📋 Kod nusxalandi!', description: `Kod: ${linkCode}` });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast({ title: `Kod: ${linkCode}` });
    }
  };

  const handleUnlink = async () => {
    if (!effectiveUserId) return;
    if (
      !window.confirm(
        "Haqiqatan ham Telegram akkauntini uzmoqchimisiz? Bildirishnomalar to'xtatiladi.",
      )
    )
      return;

    setActionLoading('unlink');
    try {
      const success = await telegramService.unlinkAccount(effectiveUserId);
      if (success) {
        setLinkedAccount(null);
        setLinkCode(null);
        toast({ title: '🔌 Telegram akkaunti muvaffaqiyatli uzildi' });
      } else {
        toast({ variant: 'destructive', title: 'Uzishda xatolik yuz berdi' });
      }
    } catch {
      toast({ variant: 'destructive', title: 'Uzishda xatolik yuz berdi' });
    } finally {
      setActionLoading(null);
    }
  };

  const handleToggleNotifications = async () => {
    if (!effectiveUserId) return;
    const newValue = !notificationsEnabled;
    setActionLoading('toggle_notif');
    try {
      const success = await telegramService.updateNotificationSettings(effectiveUserId, newValue);
      if (success) {
        setNotificationsEnabled(newValue);
        toast({
          title: newValue
            ? '🔔 Telegram bildirishnomalari yoqildi'
            : "🔕 Telegram bildirishnomalari o'chirildi",
        });
      } else {
        toast({ variant: 'destructive', title: 'Sozlamani saqlashda xatolik' });
      }
    } catch {
      toast({ variant: 'destructive', title: 'Sozlamani saqlashda xatolik' });
    } finally {
      setActionLoading(null);
    }
  };

  const handleSendSrsNotification = async () => {
    if (!linkedAccount || !effectiveUserId) return;
    setActionLoading('srs_notif');
    try {
      const text =
        `🧠 <b>IELTS Talk — SRS Fleshkartalar Eslatmasi!</b>\n\n` +
        `Salom, ${linkedAccount.telegram_first_name || "O'quvchi"}! 👋\n` +
        (dueCardsCount > 0
          ? `Sizda bugun takrorlash uchun <b>${dueCardsCount} ta fleshkarta</b> tayyor turibdi.\n5 daqiqa ajratib takrorlang va streak ballingizni oshiring! 🚀`
          : `Barcha fleshkartalaringiz bugun uchun o'zlashtirilgan! Yangi so'zlar qo'shishingiz yoki test topshirishingiz mumkin. ✨`);
      const result = await telegramService.sendNotificationDetailed(effectiveUserId, text);
      if (result.ok) {
        toast({
          title: '🧠 SRS eslatmasi yuborildi!',
          description: 'Telegram botingizni tekshiring.',
        });
      } else if (result.status === 401 || result.error === 'auth_required') {
        toast({
          variant: 'destructive',
          title: '🔐 Tizimga qayta kirish zarur',
          description:
            'Baza yangilandi. Xabarnoma yuborish uchun profilingizdan bir marta chiqib qayta kiring (Profil → Chiqish).',
        });
      } else {
        toast({
          variant: 'destructive',
          title: 'Xabar yuborishda xatolik',
          description: result.error || 'Bot sozlamalarini tekshiring.',
        });
      }
    } catch {
      toast({ variant: 'destructive', title: 'Xabar yuborishda xatolik' });
    } finally {
      setActionLoading(null);
    }
  };

  const handleSendTestNotification = async () => {
    if (!effectiveUserId) return;
    setActionLoading('test_notif');
    try {
      const result = await telegramService.sendNotificationDetailed(
        effectiveUserId,
        '🔔 <b>IELTS Talk — Sinov Xabarnomasi!</b>\n\nTelegram integratsiyasi muvaffaqiyatli ishlamoqda. Kunlik rejalaringiz va eslatmalaringiz shu yerga yetkaziladi! 🚀',
      );
      if (result.ok) {
        toast({
          title: '🔔 Sinov xabarnomasi yuborildi!',
          description: 'Telegram ilovangizga xabar bordi.',
        });
      } else if (result.status === 401 || result.error === 'auth_required') {
        toast({
          variant: 'destructive',
          title: '🔐 Tizimga qayta kirish zarur',
          description:
            'Baza yangilandi. Xabarnoma yuborish uchun profilingizdan bir marta chiqib qayta kiring (Profil → Chiqish).',
        });
      } else {
        toast({
          variant: 'destructive',
          title: 'Xabar yetkazilmadi',
          description: result.error || 'Bot sozlamalarini tekshiring.',
        });
      }
    } catch {
      toast({ variant: 'destructive', title: 'Xatolik yuz berdi' });
    } finally {
      setActionLoading(null);
    }
  };

  const formatExpiry = (expiry: string) => {
    const diff = new Date(expiry).getTime() - Date.now();
    const minutes = Math.max(1, Math.floor(diff / 60000));
    return `${minutes} daqiqa`;
  };

  const botUsername = import.meta.env.VITE_TELEGRAM_BOT_USERNAME || 'ielts_superapp_bot';

  const botCommands = [
    { cmd: '/today', desc: "Bugungi bajarilmagan rejalarni ko'rish va tugma orqali bajarish" },
    { cmd: '/done', desc: "Oxirgi bajarilgan vazifalar ro'yxati va vaqtini ko'rish" },
    { cmd: '/add [nomi]', desc: "Yangi vazifani to'g'ridan-to'g'ri bot orqali saytga qo'shish" },
    { cmd: '/stats', desc: "Mening darajam (Level), umumiy XP va Streak ma'lumotlari" },
    { cmd: '/goals', desc: "Qo'yilgan asosiy maqsadlar va ularning foizdagi bajarilish holati" },
    {
      cmd: '/time [HH:MM]',
      desc: 'Kunlik avtomatik eslatma vaqtini belgilash (masalan, /time 08:00)',
    },
  ];

  return (
    <div className="space-y-4 rounded-2xl border border-border bg-card p-4 shadow-xs transition-all sm:space-y-6 sm:p-6 md:p-8">
      {/* Header */}
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center sm:gap-4">
        <div className="flex items-center gap-2.5 sm:gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-sky-500 to-blue-600 text-white shadow-md shadow-sky-500/20 sm:h-11 sm:w-11 sm:rounded-2xl">
            <Bot size={18} className="sm:size-[22px]" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              <h3 className="text-base font-bold tracking-tight text-foreground sm:text-lg">
                Telegram Bot Integratsiyasi
              </h3>
              {linkedAccount ? (
                <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[9px] font-black text-emerald-400 sm:text-[10px]">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                  ULANGAN
                </span>
              ) : linkCode ? (
                <span className="inline-flex items-center gap-1 rounded-full border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 text-[9px] font-black text-amber-400 sm:text-[10px]">
                  <span className="h-1.5 w-1.5 animate-ping rounded-full bg-amber-400" />
                  KOD KUTILMOQDA
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 rounded-full border border-border bg-muted px-2 py-0.5 text-[9px] font-bold text-muted-foreground sm:text-[10px]">
                  ULANMAGAN
                </span>
              )}
            </div>
            <p className="mt-0.5 text-[11px] text-muted-foreground sm:text-xs">
              Kunlik vazifalar, SRS fleshkartalar va eslatmalarni Telegramda oling
            </p>
          </div>
        </div>

        {linkedAccount && (
          <button
            type="button"
            onClick={() => checkLinkStatus(false)}
            disabled={loading}
            className="inline-flex items-center gap-1.5 self-start rounded-xl border border-border bg-background px-2.5 py-1 text-xs font-bold text-muted-foreground transition-colors hover:bg-muted hover:text-foreground sm:self-center sm:px-3 sm:py-1.5"
          >
            <RefreshCw size={12} className={loading ? 'animate-spin text-primary' : ''} />
            <span>Holatni tekshirish</span>
          </button>
        )}
      </div>

      {/* Guest Warning if not authenticated */}
      {!user && (
        <div className="flex items-center gap-2.5 rounded-xl border border-amber-500/30 bg-amber-500/10 p-3 text-[11px] text-amber-200 sm:gap-3 sm:p-3.5 sm:text-xs">
          <AlertCircle size={15} className="shrink-0 text-amber-400" />
          <span>
            Mehmon rejimidasiz. Sozlamalar sinxron bo'lishi uchun <strong>Profil & Hisob</strong>{' '}
            bo'limida tizimga kiring.
          </span>
        </div>
      )}

      <AnimatePresence mode="wait">
        {linkedAccount ? (
          /* ---------------- LINKED STATE ---------------- */
          <motion.div
            key="linked"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="space-y-5"
          >
            {/* Account Card */}
            <div className="flex flex-col justify-between gap-3 rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-3.5 sm:flex-row sm:items-center sm:gap-4 sm:rounded-2xl sm:p-5">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-emerald-500/40 bg-emerald-500/20 text-lg font-black text-emerald-400 sm:h-12 sm:w-12 sm:rounded-2xl sm:text-xl">
                  <ShieldCheck size={22} className="sm:size-[26px]" />
                </div>
                <div className="min-w-0 space-y-0.5">
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                    <h4 className="truncate text-xs font-bold text-foreground sm:text-sm">
                      {linkedAccount.telegram_first_name || 'Telegram Foydalanuvchi'}
                      {linkedAccount.telegram_last_name
                        ? ` ${linkedAccount.telegram_last_name}`
                        : ''}
                    </h4>
                    {linkedAccount.telegram_username && (
                      <span className="truncate rounded border border-emerald-500/20 bg-emerald-500/10 px-1.5 py-0.5 font-mono text-[10px] text-emerald-400 sm:text-xs">
                        @{linkedAccount.telegram_username}
                      </span>
                    )}
                  </div>
                  <p className="truncate text-[11px] text-muted-foreground sm:text-xs">
                    Chat ID:{' '}
                    <code className="font-mono text-foreground">{linkedAccount.chat_id}</code> •
                    Bot: <span className="font-bold text-primary">@{botUsername}</span>
                  </p>
                </div>
              </div>

              <a
                href={`https://t.me/${botUsername}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-1.5 rounded-xl border border-sky-500/30 bg-sky-500/10 px-3 py-1.5 text-xs font-bold text-sky-400 transition-colors hover:bg-sky-500/20 sm:w-auto sm:px-3.5 sm:py-2"
              >
                <span>Botni ochish</span>
                <ExternalLink size={13} />
              </a>
            </div>

            {/* Notification Toggle Section */}
            <div className="flex items-center justify-between gap-3 rounded-xl border border-border bg-background/50 p-3 sm:gap-4 sm:p-4">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="shrink-0 rounded-xl bg-primary/10 p-2 text-primary sm:p-2.5">
                  <Bell size={17} />
                </div>
                <div>
                  <span className="block text-xs font-bold text-foreground sm:text-sm">
                    Telegram Bildirishnomalari
                  </span>
                  <span className="text-[11px] text-muted-foreground sm:text-xs">
                    Kunlik vazifalar, eslatmalar va tavsiyalar
                  </span>
                </div>
              </div>
              <label className="relative inline-flex shrink-0 cursor-pointer items-center">
                <input
                  type="checkbox"
                  checked={notificationsEnabled}
                  onChange={handleToggleNotifications}
                  disabled={actionLoading === 'toggle_notif'}
                  className="peer sr-only"
                />
                <div className="peer-focus:outline-hidden peer h-6 w-11 rounded-full bg-muted after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
              </label>
            </div>

            {/* SRS Flashcards Status */}
            <div className="flex flex-col justify-between gap-2.5 rounded-xl border border-indigo-500/20 bg-indigo-950/20 p-3 sm:flex-row sm:items-center sm:gap-3 sm:p-4">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="shrink-0 rounded-xl bg-indigo-500/20 p-2 text-indigo-400 sm:p-2.5">
                  <Sparkles size={17} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-foreground sm:text-sm">
                      🧠 SRS Fleshkartalar Holati
                    </span>
                    <span className="rounded-full bg-primary px-2 py-0.5 text-[10px] font-black text-primary-foreground sm:text-xs">
                      {dueCardsCount} ta tayyor
                    </span>
                  </div>
                  <p className="mt-0.5 text-[11px] text-muted-foreground sm:text-xs">
                    Har kuni 09:00 va 20:00 da takrorlash kutilayotgan so'zlar eslatiladi
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 gap-2.5 pt-1 sm:grid-cols-2 sm:gap-3">
              <button
                type="button"
                onClick={handleSendSrsNotification}
                disabled={!!actionLoading}
                className="flex items-center justify-center gap-2 rounded-xl bg-primary px-3.5 py-2.5 text-xs font-bold text-primary-foreground shadow-md shadow-primary/20 transition-all hover:scale-[1.01] hover:bg-primary/90 active:scale-95 disabled:opacity-50 sm:py-3"
              >
                {actionLoading === 'srs_notif' ? (
                  <Loader2 size={15} className="animate-spin" />
                ) : (
                  <Send size={14} />
                )}
                <span>🧠 SRS Eslatmasini Yuborish</span>
              </button>

              <button
                type="button"
                onClick={handleSendTestNotification}
                disabled={!!actionLoading}
                className="flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-3.5 py-2.5 text-xs font-bold text-foreground transition-all hover:scale-[1.01] hover:bg-muted active:scale-95 disabled:opacity-50 sm:py-3"
              >
                {actionLoading === 'test_notif' ? (
                  <Loader2 size={15} className="animate-spin" />
                ) : (
                  <Bell size={14} />
                )}
                <span>🔔 Sinov Xabarnomasi</span>
              </button>
            </div>

            {/* Bot Commands Quick Guide Accordion */}
            <div className="pt-1">
              <button
                type="button"
                onClick={() => setShowCommands(!showCommands)}
                className="flex w-full items-center justify-between rounded-xl border border-border bg-background/50 p-3 text-xs font-bold text-muted-foreground transition-colors hover:bg-muted/50 hover:text-foreground"
              >
                <span className="flex items-center gap-2">
                  <BookOpen size={14} className="text-primary" />
                  <span>Telegram Bot Buyruqlari ({botCommands.length} ta)</span>
                </span>
                <span className="text-[11px] text-primary underline">
                  {showCommands ? 'Yopish' : "Ko'rsatish"}
                </span>
              </button>

              {showCommands && (
                <div className="mt-2 space-y-2 rounded-xl border border-border bg-background/80 p-3 duration-200 animate-in fade-in sm:p-4">
                  {botCommands.map((item) => (
                    <div
                      key={item.cmd}
                      className="flex flex-col justify-between gap-0.5 border-b border-border/50 py-1 text-xs last:border-0 sm:flex-row sm:items-center sm:gap-1"
                    >
                      <code className="font-mono font-bold text-primary">{item.cmd}</code>
                      <span className="text-[11px] text-muted-foreground sm:text-right">
                        {item.desc}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Unlink Action */}
            <div className="flex justify-end border-t border-border pt-2">
              <button
                type="button"
                onClick={handleUnlink}
                disabled={!!actionLoading}
                className="inline-flex w-full items-center justify-center gap-1.5 rounded-xl border border-transparent px-3.5 py-2 text-xs font-bold text-rose-400 transition-all hover:border-rose-500/20 hover:bg-rose-500/10 hover:text-rose-300 disabled:opacity-50 sm:w-auto"
              >
                {actionLoading === 'unlink' ? (
                  <Loader2 size={13} className="animate-spin" />
                ) : (
                  <Unlink size={13} />
                )}
                <span>Telegram hisobini uzish</span>
              </button>
            </div>
          </motion.div>
        ) : linkCode ? (
          /* ---------------- CODE GENERATED STATE ---------------- */
          <motion.div
            key="code"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="space-y-4 sm:space-y-6"
          >
            {/* 6-digit Code Box */}
            <div className="relative space-y-2.5 overflow-hidden rounded-2xl border-2 border-primary/40 bg-primary/5 p-4 text-center sm:space-y-3 sm:p-6">
              <div className="text-[11px] font-black uppercase tracking-widest text-primary sm:text-xs">
                Bir Martalik Ulanish Kodi
              </div>

              <div className="flex items-center justify-center gap-2.5 sm:gap-3">
                <span className="font-mono text-3xl font-black tracking-widest text-foreground selection:bg-primary selection:text-white sm:text-4xl md:text-5xl">
                  {linkCode}
                </span>
                <button
                  type="button"
                  onClick={handleCopyCode}
                  className="rounded-xl border border-border bg-background p-2.5 text-muted-foreground shadow-xs transition-all hover:bg-muted hover:text-foreground sm:p-3"
                  title="Kodni nusxalash"
                >
                  {copied ? <Check size={18} className="text-emerald-400" /> : <Copy size={18} />}
                </button>
              </div>

              {expiresAt && (
                <div className="flex items-center justify-center gap-1.5 text-[11px] text-muted-foreground sm:text-xs">
                  <Clock size={12} />
                  <span>
                    Amal qilish muddati:{' '}
                    <strong className="text-foreground">{formatExpiry(expiresAt)}</strong>
                  </span>
                </div>
              )}
            </div>

            {/* Step by step Instructions */}
            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3 sm:gap-3">
              <div className="space-y-1 rounded-xl border border-border bg-background/50 p-3 sm:p-4">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/20 text-xs font-black text-primary">
                  1
                </div>
                <div className="text-xs font-bold text-foreground">Botni oching</div>
                <div className="text-[11px] text-muted-foreground">
                  Quyidagi tugmani bosing va Telegramga o'ting.
                </div>
              </div>
              <div className="space-y-1 rounded-xl border border-border bg-background/50 p-3 sm:p-4">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/20 text-xs font-black text-primary">
                  2
                </div>
                <div className="text-xs font-bold text-foreground">Start tugmasini bosing</div>
                <div className="text-[11px] text-muted-foreground">
                  Botda <b>Start</b> tugmasini bosing yoki kodni yuboring.
                </div>
              </div>
              <div className="space-y-1 rounded-xl border border-border bg-background/50 p-3 sm:p-4">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-xs font-black text-emerald-400">
                  3
                </div>
                <div className="text-xs font-bold text-foreground">Avtomatik ulanish</div>
                <div className="text-[11px] text-muted-foreground">
                  Sahifa avtomatik "Ulangan" holatiga o'tadi.
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2.5 sm:space-y-3">
              <a
                href={`https://t.me/${botUsername}?start=${linkCode}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-4 py-3 text-xs font-bold text-white shadow-lg shadow-sky-500/25 transition-all hover:scale-[1.01] hover:from-sky-400 hover:to-blue-500 active:scale-95 sm:py-3.5 sm:text-sm"
              >
                <Send size={16} />
                <span>📱 Telegram orqali 1-bosishda ulash</span>
                <ExternalLink size={14} />
              </a>

              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Loader2 size={13} className="animate-spin text-primary" />
                  <span>Telegram javobi kutilmoqda...</span>
                </div>

                <button
                  type="button"
                  onClick={() => setLinkCode(null)}
                  className="rounded-xl border border-border px-3 py-1.5 text-xs font-bold text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  Bekor qilish
                </button>
              </div>
            </div>
          </motion.div>
        ) : (
          /* ---------------- NOT LINKED STATE ---------------- */
          <motion.div
            key="not-linked"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="space-y-4 sm:space-y-6"
          >
            {/* Features Grid */}
            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3.5">
              <div className="flex items-start gap-2.5 rounded-xl border border-border bg-background/50 p-3 sm:gap-3 sm:p-4">
                <div className="shrink-0 rounded-lg bg-orange-500/10 p-1.5 text-orange-400 sm:p-2">
                  <Bell size={16} className="sm:size-[18px]" />
                </div>
                <div className="space-y-0.5">
                  <h5 className="text-xs font-bold text-foreground">Rejalar & Deadlinelar</h5>
                  <p className="text-[11px] text-muted-foreground">
                    Kunlik vazifalar va muhim muddatlar haqida eslatmalar oling.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 rounded-xl border border-border bg-background/50 p-3 sm:gap-3 sm:p-4">
                <div className="shrink-0 rounded-lg bg-indigo-500/10 p-1.5 text-indigo-400 sm:p-2">
                  <Sparkles size={16} className="sm:size-[18px]" />
                </div>
                <div className="space-y-0.5">
                  <h5 className="text-xs font-bold text-foreground">SRS Fleshkarta Eslatmalari</h5>
                  <p className="text-[11px] text-muted-foreground">
                    Takrorlash kutilayotgan so'zlarni o'z vaqtida mustahkamlang.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 rounded-xl border border-border bg-background/50 p-3 sm:gap-3 sm:p-4">
                <div className="shrink-0 rounded-lg bg-emerald-500/10 p-1.5 text-emerald-400 sm:p-2">
                  <CheckSquare size={16} className="sm:size-[18px]" />
                </div>
                <div className="space-y-0.5">
                  <h5 className="text-xs font-bold text-foreground">Tezkor Vazifa Qo'shish</h5>
                  <p className="text-[11px] text-muted-foreground">
                    Botga <code>/add Yangi vazifa</code> yozib, rejani saytga saqlang.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 rounded-xl border border-border bg-background/50 p-3 sm:gap-3 sm:p-4">
                <div className="shrink-0 rounded-lg bg-purple-500/10 p-1.5 text-purple-400 sm:p-2">
                  <Zap size={16} className="sm:size-[18px]" />
                </div>
                <div className="space-y-0.5">
                  <h5 className="text-xs font-bold text-foreground">Streak & Daraja Nazorati</h5>
                  <p className="text-[11px] text-muted-foreground">
                    Kunlik faollik, to'plangan XP va natijalaringizni tekshiring.
                  </p>
                </div>
              </div>
            </div>

            {/* Connect Button CTA */}
            <Button
              onClick={handleGenerateCode}
              disabled={loading}
              className="w-full rounded-xl py-3 text-xs font-black shadow-lg shadow-primary/20 transition-all hover:scale-[1.01] active:scale-95 sm:py-3.5 sm:text-sm"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 animate-spin" size={16} />
                  Kod yaratilmoqda...
                </>
              ) : (
                '🔗 Telegram Botni Ulash'
              )}
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TelegramSection;
