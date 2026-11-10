import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { supabase } from '../../lib/supabase';
import { useStudyData } from '../../context/IeltsTalkContext';
import {
  Mail,
  User as UserIcon,
  Shield,
  KeyRound,
  LogOut,
  RotateCcw,
  Check,
  Edit3,
  Target,
  Award,
  Crown,
  Star,
  Bug,
  Lightbulb,
} from 'lucide-react';
import { toast } from '../../hooks/use-toast';
import { isAdminEmail, isSuperAdmin } from '../../utils/admin';

import { PersonalizedOnboardingModal } from '../onboarding/PersonalizedOnboardingModal';
import { LearningTrackStorage } from '../../utils/storage/LearningTrackStorage';
import { useRatingModalStore } from '../../stores';

const AccountSection: React.FC = () => {
  const { user, settings, resetXP, getRank, primaryLanguage } = useStudyData();
  const openRatingModal = useRatingModalStore((s) => s.openModal);

  const displayEmail = user?.email || '';
  const isCurrentSuperAdmin = Boolean(displayEmail && isSuperAdmin(displayEmail));
  const isCurrentAdmin = Boolean(displayEmail && isAdminEmail(displayEmail, (user as any)?.role));

  const [isEditingName, setIsEditingName] = useState(false);
  const [isOnboardingOpen, setIsOnboardingOpen] = useState(false);
  const [fullName, setFullName] = useState<string>(
    user?.user_metadata?.full_name || localStorage.getItem('ielts_talk_user_name') || '',
  );
  const [targetGoal, setTargetGoal] = useState<string>(
    LearningTrackStorage.getTargetGoal(primaryLanguage),
  );
  const [isSavingName, setIsSavingName] = useState(false);

  const handleSaveName = async () => {
    setIsSavingName(true);
    try {
      localStorage.setItem('ielts_talk_user_name', fullName);
      LearningTrackStorage.setTargetGoal(primaryLanguage, targetGoal);

      if (user) {
        await supabase.auth.updateUser({
          data: { full_name: fullName, target_goal: targetGoal },
        });
      }
      setIsEditingName(false);
      toast({ title: "✅ Profil ma'lumotlari muvaffaqiyatli saqlandi!" });
    } catch (e) {
      console.error(e);
      toast({ title: 'Xatolik yuz berdi', variant: 'destructive' });
    } finally {
      setIsSavingName(false);
    }
  };

  const handlePasswordReset = async () => {
    if (!user?.email) return;
    if (confirm(`${user.email} manziliga parolni tiklash havolasi yuborilsinmi?`)) {
      try {
        const { error } = await supabase.auth.resetPasswordForEmail(user.email, {
          redirectTo: `${window.location.origin}/settings`,
        });
        if (error) throw error;
        toast({ title: '📧 Parolni tiklash havolasi pochtangizga yuborildi!' });
      } catch (e: any) {
        toast({ title: e?.message || 'Xatolik yuz berdi', variant: 'destructive' });
      }
    }
  };

  const handleLogout = async () => {
    if (confirm('Tizimdan chiqishni tasdiqlaysizmi?')) {
      try {
        await supabase.auth.signOut();
      } catch (e) {
        console.error('Sign out error', e);
      } finally {
        localStorage.clear();
        window.location.href = '/';
      }
    }
  };

  const handleResetXP = async () => {
    if (confirm('Diqqat! XP ballaringizni va darajangizni 0 ga qaytarishni tasdiqlaysizmi?')) {
      await resetXP();
      toast({ title: "🔄 XP ballaringiz 0 ga va darajangiz 1-levelga o'zgartirildi!" });
    }
  };

  const rankTitle = getRank ? getRank(settings.level || 1) : 'Bilimdon';

  return (
    <div className="space-y-6 duration-300 animate-in fade-in">
      {/* User Profile Card */}
      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-xs">
        <div className="flex items-center justify-between border-b border-border p-4">
          <div className="flex items-center gap-2">
            <UserIcon size={16} className="text-muted-foreground" />
            <span className="text-xs font-extrabold uppercase tracking-wider text-muted-foreground">
              SHAXSIY MA'LUMOTLAR
            </span>
          </div>
          {!isEditingName ? (
            <button
              onClick={() => setIsEditingName(true)}
              className="flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-bold text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <Edit3 size={13} />
              Tahrirlash
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <button
                onClick={handleSaveName}
                disabled={isSavingName}
                className="flex items-center gap-1 rounded-lg px-2.5 py-1 text-xs font-bold text-emerald-600 transition-colors hover:bg-emerald-500/10 dark:text-emerald-400"
              >
                <Check size={13} />
                Saqlash
              </button>
              <button
                onClick={() => setIsEditingName(false)}
                className="px-2 py-1 text-xs text-muted-foreground hover:text-foreground"
              >
                Bekor
              </button>
            </div>
          )}
        </div>

        <div className="space-y-4 p-4 sm:space-y-6 sm:p-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
            {/* Name / Display Name */}
            <div>
              <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-muted-foreground sm:mb-2">
                Ism / Taxallus
              </label>
              {isEditingName ? (
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Ismingizni kiriting"
                  className="w-full rounded-xl border border-border bg-background px-3.5 py-2 text-sm font-semibold text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 sm:px-4 sm:py-2.5"
                />
              ) : (
                <div className="rounded-xl border border-border bg-muted/50 px-3.5 py-2 text-sm font-bold text-foreground sm:px-4 sm:py-2.5">
                  {fullName || user?.email?.split('@')[0] || "O'quvchi"}
                </div>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-muted-foreground sm:mb-2">
                Elektron Pochta (Gmail)
              </label>
              <div className="flex items-center gap-2.5 rounded-xl border border-border bg-muted/50 px-3.5 py-2 text-sm font-medium text-foreground sm:gap-3 sm:px-4 sm:py-2.5">
                <Mail size={15} className="shrink-0 text-muted-foreground" />
                <span className="truncate font-bold text-foreground">{displayEmail}</span>
                {isCurrentSuperAdmin ? (
                  <span className="badge-gold ml-auto shrink-0 text-[10px] font-black sm:text-xs">
                    <Crown size={12} className="text-[#C9A961]" />
                    SUPER ADMIN
                  </span>
                ) : isCurrentAdmin ? (
                  <span className="badge-hanko ml-auto shrink-0 text-[10px] font-black sm:text-xs">
                    🛡️ ADMIN
                  </span>
                ) : (
                  <span className="ml-auto shrink-0 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 text-[9px] font-bold text-emerald-600 dark:text-emerald-400 sm:px-2.5 sm:text-[10px]">
                    Tasdiqlangan
                  </span>
                )}
              </div>
            </div>

            {/* Target Exam / Goal */}
            <div className="md:col-span-2">
              <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-muted-foreground sm:mb-2">
                Asosiy Maqsad & Imtihon
              </label>
              {isEditingName ? (
                <input
                  type="text"
                  value={targetGoal}
                  onChange={(e) => setTargetGoal(e.target.value)}
                  placeholder="Masalan: IELTS 7.5, Academic Writing, Speaking Band 8.0"
                  className="w-full rounded-xl border border-border bg-background px-3.5 py-2 text-sm font-semibold text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 sm:px-4 sm:py-2.5"
                />
              ) : (
                <div className="flex items-center justify-between rounded-xl border border-border bg-muted/50 px-3.5 py-2 text-sm font-semibold text-foreground sm:px-4 sm:py-2.5">
                  <div className="flex min-w-0 items-center gap-2.5">
                    <Target size={15} className="shrink-0 text-muted-foreground" />
                    <span className="truncate">{targetGoal}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsOnboardingOpen(true)}
                    className="shrink-0 rounded-lg px-2.5 py-1 text-xs font-bold text-primary hover:underline"
                  >
                    O'zgartirish ➔
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <PersonalizedOnboardingModal
        isOpen={isOnboardingOpen}
        onClose={() => {
          setIsOnboardingOpen(false);
          setTargetGoal(LearningTrackStorage.getTargetGoal(primaryLanguage));
        }}
      />

      {/* Gamification Level & Rank Progress */}
      <div className="rounded-2xl border border-border bg-card p-4 shadow-xs sm:p-6">
        <div className="mb-3.5 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#C9A961]/25 bg-[#C9A961]/10 text-[#C9A961]">
              <Award size={20} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-foreground sm:text-base">
                Daraja {settings.level || 1} — {rankTitle}
              </h4>
              <p className="text-xs text-muted-foreground">
                Jami to'plangan XP:{' '}
                <strong className="text-[#C9A961]">{settings.totalXp || 0} XP</strong>
              </p>
            </div>
          </div>
          <span className="rounded-full border border-[#C9A961]/30 bg-amber-500/10 px-2.5 py-1 text-xs font-black text-[#C9A961]">
            🔥 {settings.currentStreak || 0} Kunlik Streak
          </span>
        </div>

        {/* Progress Bar */}
        <div className="space-y-1.5">
          <div className="flex justify-between text-xs font-semibold text-muted-foreground">
            <span>Keyingi darajagacha progress</span>
            <span>{(settings.totalXp || 0) % 500} / 500 XP</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full border border-border bg-muted p-0.5">
            <div
              className="h-full rounded-full bg-[#C9A961] transition-all duration-500"
              style={{
                width: `${Math.min(100, Math.max(5, (((settings.totalXp || 0) % 500) / 500) * 100))}%`,
              }}
            />
          </div>
        </div>
      </div>

      {/* App Rating & Feedback Card */}
      <div className="relative overflow-hidden rounded-2xl border border-amber-500/30 bg-card shadow-xs">
        <div className="pointer-events-none absolute right-0 top-0 -mr-10 -mt-10 h-36 w-36 rounded-full bg-amber-500/10 blur-2xl" />
        <div className="flex items-center justify-between border-b border-border bg-gradient-to-r from-amber-500/5 to-transparent p-3.5 sm:p-4">
          <div className="flex items-center gap-2">
            <Star size={16} className="fill-amber-500 text-amber-500" />
            <span className="text-xs font-extrabold uppercase tracking-wider text-foreground">
              ILOVANI BAHOLASH VA KAMCHILIKLAR
            </span>
          </div>
          <span className="rounded-full border border-amber-500/25 bg-amber-500/10 px-2 py-0.5 text-[10px] font-bold text-amber-600 dark:text-amber-400 sm:text-[11px]">
            Fikr-mulohaza
          </span>
        </div>

        <div className="space-y-4 p-4 sm:p-6">
          <div>
            <h4 className="text-sm font-bold text-foreground sm:text-base">
              IELTS Talk ilovasi sizga ma'qul keldimi?
            </h4>
            <p className="mt-0.5 text-xs text-muted-foreground">
              Tajribangizni yulduzchalar bilan baholang yoki taklif va kamchiliklarni
              to'g'ridan-to'g'ri adminga yuboring.
            </p>
          </div>

          {/* Quick Star Selection */}
          <div className="flex flex-col items-center justify-between gap-3 rounded-xl border border-border bg-muted/40 p-3 sm:flex-row sm:p-4">
            <div className="flex items-center gap-1.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => openRatingModal({ rating: s, category: 'general' })}
                  className="group rounded-lg p-1 transition-transform hover:scale-110 hover:bg-amber-500/15 active:scale-90"
                  title={`${s} yulduzcha berish`}
                >
                  <Star className="h-6 w-6 fill-amber-400 text-amber-400 transition-all group-hover:drop-shadow-[0_0_8px_rgba(245,158,11,0.5)] sm:h-7 sm:w-7" />
                </button>
              ))}
            </div>
            <span className="text-center text-xs font-semibold text-muted-foreground sm:text-right">
              Yulduzchani tanlab, darhol baholang
            </span>
          </div>

          {/* Action Cards (Bug Report & Feature Suggestion) */}
          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3">
            <button
              type="button"
              onClick={() => openRatingModal({ rating: 3, category: 'bug' })}
              className="group flex items-start gap-2.5 rounded-xl border border-rose-500/20 bg-rose-500/5 p-3 text-left transition-all hover:bg-rose-500/10 active:scale-[0.98] sm:gap-3 sm:p-3.5"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-rose-500/15 text-rose-500 transition-transform group-hover:scale-105 sm:h-9 sm:w-9">
                <Bug size={16} />
              </div>
              <div>
                <div className="text-xs font-bold text-foreground transition-colors group-hover:text-rose-500">
                  Xatolik yoki kamchilik bildirish
                </div>
                <div className="mt-0.5 text-[11px] text-muted-foreground">
                  Dizayn, audio yoki AI duduqlanishi kabi muammolar
                </div>
              </div>
            </button>

            <button
              type="button"
              onClick={() => openRatingModal({ rating: 5, category: 'suggestion' })}
              className="group flex items-start gap-2.5 rounded-xl border border-primary/20 bg-primary/5 p-3 text-left transition-all hover:bg-primary/10 active:scale-[0.98] sm:gap-3 sm:p-3.5"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary transition-transform group-hover:scale-105 sm:h-9 sm:w-9">
                <Lightbulb size={16} />
              </div>
              <div>
                <div className="text-xs font-bold text-foreground transition-colors group-hover:text-primary">
                  Yangi taklif yoki g'oya bildirish
                </div>
                <div className="mt-0.5 text-[11px] text-muted-foreground">
                  Ilovada ko'rishni xohlagan yangi imkoniyatlar
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Security & Account Management */}
      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-xs">
        <div className="flex items-center gap-2 border-b border-border p-3.5 sm:p-4">
          <Shield size={16} className="text-muted-foreground" />
          <span className="text-xs font-extrabold uppercase tracking-wider text-muted-foreground">
            XAVFSIZLIK VA BOSHQARUV
          </span>
        </div>

        <div className="space-y-3 p-4 sm:space-y-4 sm:p-6">
          <div className="flex flex-col justify-between gap-3 rounded-xl border border-border bg-muted/40 p-3.5 sm:flex-row sm:items-center sm:p-4">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <KeyRound size={17} className="shrink-0 text-muted-foreground" />
              <div>
                <h5 className="text-xs font-bold text-foreground sm:text-sm">Parolni Yangilash</h5>
                <p className="text-[11px] text-muted-foreground sm:text-xs">
                  Pochtaga xavfsiz havola yuborish orqali yangilang
                </p>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={handlePasswordReset}
              className="w-full shrink-0 text-xs font-semibold sm:w-auto"
            >
              Havola Yuborish
            </Button>
          </div>

          <div className="flex flex-col justify-between gap-3 rounded-xl border border-amber-500/20 bg-amber-500/5 p-3.5 sm:flex-row sm:items-center sm:p-4">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <RotateCcw size={17} className="shrink-0 text-amber-600 dark:text-amber-400" />
              <div>
                <h5 className="text-xs font-bold text-foreground sm:text-sm">
                  XP & Darajani Qayta Boshlash
                </h5>
                <p className="text-[11px] text-muted-foreground sm:text-xs">
                  Barcha ballarni 0 ga qaytarish (o'quv materiallari saqlanadi)
                </p>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={handleResetXP}
              className="w-full shrink-0 border-amber-500/30 text-xs font-bold text-amber-600 hover:bg-amber-500/10 dark:text-amber-400 sm:w-auto"
            >
              Qayta Boshlash
            </Button>
          </div>
        </div>

        <div className="flex justify-end border-t border-border bg-muted/20 p-3.5 sm:p-4">
          <Button
            variant="destructive"
            onClick={handleLogout}
            className="flex w-full items-center justify-center gap-2 px-5 text-xs font-bold sm:w-auto"
          >
            <LogOut size={15} />
            Tizimdan Chiqish
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AccountSection;
