import React, { useState } from 'react';
import { useStudyData } from '../context/StudyPlannerContext';
import { useLanguage } from '../context/LanguageContext';
import { requestNotificationPermission } from '../utils/notifications';
import PreferencesSection from '../components/settings/PreferencesSection';
import AccountSection from '../components/settings/AccountSection';
import {
  User,
  Sliders,
  Shield,
  Send,
  Flame,
  Award,
  Clock,
  Sparkles,
  Mail,
  Star,
} from 'lucide-react';
import { isAdminEmail, isSuperAdmin } from '../utils/admin';
import { toast } from '../hooks/use-toast';
import { motion, AnimatePresence } from 'framer-motion';

import AdminDashboardPage from './AdminDashboardPage';
import TelegramSection from '../components/settings/TelegramSection';
import { useSettingsStore, useRatingModalStore } from '../stores';

const SettingsPage: React.FC = () => {
  const { settings, updateSettings } = useSettingsStore();
  const { user, getRank } = useStudyData();
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState('profile');
  const openRatingModal = useRatingModalStore((s) => s.openModal);

  const displayEmail = user?.email || '';
  const isCurrentSuperAdmin = Boolean(displayEmail && isSuperAdmin(displayEmail));
  const isCurrentAdmin = Boolean(displayEmail && isAdminEmail(displayEmail, (user as any)?.role));

  const tabs = [
    {
      id: 'profile',
      label: language === 'en' ? 'Profile' : 'Profil & Hisob',
      shortLabel: 'Profil',
      icon: User,
    },
    {
      id: 'telegram',
      label: language === 'en' ? 'Telegram' : 'Telegram Bot',
      shortLabel: 'Telegram',
      icon: Send,
    },
    {
      id: 'preferences',
      label: language === 'en' ? 'Preferences' : "O'quv Yo'nalishi & Tizim",
      shortLabel: 'Sozlamalar',
      icon: Sliders,
    },
  ];

  // Admin bo'lsa Admin tab qo'shamiz
  if (isCurrentAdmin) {
    tabs.push({
      id: 'admin',
      label: 'Admin Panel',
      shortLabel: 'Admin',
      icon: Shield,
    });
  }

  const toggleNotifications = async () => {
    if (!settings.notificationsEnabled) {
      const granted = await requestNotificationPermission();
      if (granted) {
        updateSettings({ notificationsEnabled: true });
        toast({
          title: language === 'en' ? '🔔 Notifications enabled' : '🔔 Bildirishnomalar yoqildi',
        });
      } else {
        toast({
          variant: 'destructive',
          title: language === 'en' ? '❌ Permission denied' : '❌ Ruxsat rad etildi',
        });
      }
    } else {
      updateSettings({ notificationsEnabled: false });
      toast({
        title: language === 'en' ? '🔕 Notifications disabled' : "🔕 Bildirishnomalar o'chirildi",
      });
    }
  };

  const rankTitle = getRank ? getRank(settings.level || 1) : 'Bilimdon';
  const userName =
    user?.user_metadata?.full_name ||
    (displayEmail ? displayEmail.split('@')[0] : language === 'en' ? 'Student' : 'Talaba');

  return (
    <div className="mx-auto min-h-screen max-w-5xl space-y-4 p-3.5 pb-28 duration-300 animate-in fade-in sm:space-y-6 sm:p-4 md:space-y-8 md:p-8 md:pb-12">
      {/* Hero Profile Banner */}
      <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-4 shadow-xs sm:rounded-3xl sm:p-6 md:p-8">
        <div className="relative z-10 flex flex-col justify-between gap-4 md:flex-row md:items-center md:gap-6">
          {/* Left: Avatar & Identity */}
          <div className="flex items-center gap-3.5 sm:gap-5">
            <div className="relative shrink-0">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-muted/90 font-display text-xl font-black text-foreground shadow-xs ring-1 ring-border/50 sm:h-16 sm:w-16 sm:text-2xl md:h-20 md:w-20 md:text-3xl">
                {userName.charAt(0).toUpperCase()}
              </div>
              <div className="py-0.2 absolute -bottom-1 -right-1 rounded-full border border-border bg-card px-1.5 text-[9px] font-bold text-muted-foreground shadow-xs sm:px-2 sm:py-0.5 sm:text-[10px]">
                Lvl {settings.level || 1}
              </div>
            </div>
            <div className="min-w-0 space-y-0.5 sm:space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="truncate font-display text-lg font-black tracking-tight text-foreground sm:text-2xl md:text-3xl">
                  {userName}
                </h1>
                {isCurrentSuperAdmin ? (
                  <span className="badge-gold text-[10px] font-black sm:text-xs">
                    👑 SUPER ADMIN
                  </span>
                ) : isCurrentAdmin ? (
                  <span className="badge-hanko text-[10px] font-black sm:text-xs">🛡️ ADMIN</span>
                ) : (
                  <span className="flex items-center gap-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 text-[9px] font-bold text-emerald-600 dark:text-emerald-400 sm:px-2.5 sm:text-[10px]">
                    🎓 O'QUVCHI
                  </span>
                )}
              </div>
              <p className="flex items-center gap-1 text-xs font-medium text-muted-foreground md:text-sm">
                <Mail size={13} className="shrink-0 text-muted-foreground" />
                <span className="truncate font-semibold text-foreground/90">{displayEmail}</span>
              </p>
            </div>
          </div>

          {/* Right: 4 Standout Quick Stats */}
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
            <div className="backdrop-blur-xs rounded-xl border border-border bg-muted/30 p-2.5 text-center transition-all hover:border-amber-500/30 sm:rounded-2xl sm:p-3.5">
              <div className="mb-0.5 flex items-center justify-center gap-1 text-[#C9A961]">
                <Flame size={13} className="sm:size-[15px]" />
                <span className="text-[10px] font-bold uppercase tracking-wider sm:text-[11px]">
                  Streak
                </span>
              </div>
              <div className="text-lg font-black tabular-nums tracking-tight text-foreground sm:text-xl md:text-2xl">
                {settings.currentStreak || 0}
              </div>
              <div className="text-[10px] font-medium text-muted-foreground sm:text-[11px]">
                kun ketma-ket
              </div>
            </div>

            <div className="backdrop-blur-xs rounded-xl border border-border bg-muted/30 p-2.5 text-center transition-all hover:border-border sm:rounded-2xl sm:p-3.5">
              <div className="mb-0.5 flex items-center justify-center gap-1 text-[#C9A961]">
                <Award size={13} className="sm:size-[15px]" />
                <span className="text-[10px] font-bold uppercase tracking-wider sm:text-[11px]">
                  Daraja
                </span>
              </div>
              <div className="text-lg font-black tabular-nums tracking-tight text-foreground sm:text-xl md:text-2xl">
                {settings.level || 1}
              </div>
              <div className="truncate px-1 text-[10px] font-medium text-muted-foreground sm:text-[11px]">
                {rankTitle}
              </div>
            </div>

            <div className="backdrop-blur-xs rounded-xl border border-border bg-muted/30 p-2.5 text-center transition-all hover:border-border sm:rounded-2xl sm:p-3.5">
              <div className="mb-0.5 flex items-center justify-center gap-1 text-muted-foreground">
                <Clock size={13} className="sm:size-[15px]" />
                <span className="text-[10px] font-bold uppercase tracking-wider sm:text-[11px]">
                  Maqsad
                </span>
              </div>
              <div className="text-lg font-black tabular-nums tracking-tight text-foreground sm:text-xl md:text-2xl">
                {Math.floor((settings.dailyStudyGoalMinutes || 240) / 60)}
              </div>
              <div className="text-[10px] font-medium text-muted-foreground sm:text-[11px]">
                soat/kun
              </div>
            </div>

            <div className="backdrop-blur-xs rounded-xl border border-border bg-muted/30 p-2.5 text-center transition-all hover:border-emerald-500/30 sm:rounded-2xl sm:p-3.5">
              <div className="mb-0.5 flex items-center justify-center gap-1 text-emerald-500">
                <Sparkles size={13} className="sm:size-[15px]" />
                <span className="text-[10px] font-bold uppercase tracking-wider sm:text-[11px]">
                  AI Kredit
                </span>
              </div>
              <div className="pt-0.5 text-sm font-black tracking-tight text-emerald-600 dark:text-emerald-400 sm:text-base md:text-lg">
                Cheksiz
              </div>
              <div className="text-[10px] font-medium text-muted-foreground sm:text-[11px]">
                Har doim bepul
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rate App & Leave Feedback Ribbon */}
      <div className="flex items-center justify-between gap-3 rounded-2xl border border-amber-500/25 bg-gradient-to-r from-amber-500/10 via-card to-primary/10 p-3 shadow-xs sm:p-4">
        <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-500/20 text-amber-500 shadow-inner sm:h-10 sm:w-10">
            <Star className="h-4 w-4 fill-amber-400 text-amber-500 sm:h-5 sm:w-5" />
          </div>
          <div className="min-w-0">
            <h3 className="truncate text-xs font-bold text-foreground sm:text-sm">
              {language === 'en' ? 'Rate App & Feedback' : 'Ilovani baholash'}
            </h3>
            <p className="truncate text-[11px] text-muted-foreground sm:text-xs">
              {language === 'en'
                ? 'Rate 5 stars or send feedback'
                : '5★ baho bering yoki taklif qoldiring'}
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => openRatingModal()}
          className="flex shrink-0 items-center gap-1.5 rounded-xl bg-amber-500 px-3 py-1.5 text-xs font-bold text-white shadow-xs transition hover:brightness-105 active:scale-95 sm:px-3.5 sm:py-2"
        >
          <Star className="h-3.5 w-3.5 fill-white" />
          <span>{language === 'en' ? 'Rate (5★)' : 'Baholash'}</span>
        </button>
      </div>

      {/* Navigation Tabs (Horizontal Scrollable Pills) */}
      <div className="scrollbar-hide sticky top-0 z-20 flex gap-1 overflow-x-auto rounded-2xl border border-border bg-card/90 p-1 shadow-xs backdrop-blur-md sm:gap-1.5 sm:p-1.5">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex select-none items-center gap-1.5 whitespace-nowrap rounded-xl px-3 py-2 text-xs font-bold transition-all duration-200 sm:gap-2 sm:px-4 sm:py-2.5 ${
                isActive
                  ? 'scale-[1.01] bg-primary text-primary-foreground shadow-xs'
                  : 'text-muted-foreground hover:bg-muted/70 hover:text-foreground'
              }`}
            >
              <Icon size={14} className="shrink-0" />
              <span className="sm:hidden">{tab.shortLabel}</span>
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Contents with Framer Motion Animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.18 }}
          className="mt-6"
        >
          {activeTab === 'profile' && <AccountSection />}

          {activeTab === 'telegram' && <TelegramSection />}

          {activeTab === 'preferences' && (
            <PreferencesSection settings={settings} onToggleNotifications={toggleNotifications} />
          )}

          {activeTab === 'admin' && <AdminDashboardPage />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default SettingsPage;
