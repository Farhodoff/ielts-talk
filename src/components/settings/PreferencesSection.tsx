import React, { useState } from 'react';
import { Bell, GraduationCap, RefreshCw, Smartphone, Download, CheckCircle2 } from 'lucide-react';
import { PushNotificationService } from '../../services/PushNotificationService';
import { useStudyData } from '../../context/StudyPlannerContext';
import { toast } from '../../hooks/use-toast';
import { isSuperAdmin } from '../../utils/admin';
import { useLanguage } from '../../context/LanguageContext';
import { UzbekistanFlag, UKFlag } from '../common/FlagIcons';
import AIProviderSection from './AIProviderSection';
import autoUpdateService from '../../services/AutoUpdateService';
import { usePWAInstall } from '../../hooks/usePWAInstall';
import { IOSInstallModal } from '../pwa/IOSInstallModal';

interface Settings {
  theme: 'light' | 'dark' | 'system';
  notificationsEnabled: boolean;
}

interface PreferencesSectionProps {
  settings: Settings;
  onToggleNotifications: () => void;
}

const PreferencesSection: React.FC<PreferencesSectionProps> = ({
  settings,
  onToggleNotifications,
}) => {
  const { language, setLanguage } = useLanguage();
  const { user, targetLevel, targetGoal, setPrimaryFocus } = useStudyData();

  const isSuper = isSuperAdmin(user?.email);
  const { isInstalled, isIOS, promptInstall } = usePWAInstall();
  const [showIOSModal, setShowIOSModal] = useState(false);

  return (
    <div className="space-y-6 rounded-2xl border border-border bg-card p-4 duration-200 animate-in fade-in sm:space-y-8 sm:p-6 md:p-8">
      {/* AI Provider & Engine Status (Super Admin Only) */}
      {isSuper && <AIProviderSection />}

      {/* Dedicated Learning Focus & Languages Manager */}
      <div id="learning-focus" className="space-y-4 sm:space-y-6">
        <div>
          <h3 className="flex items-center gap-2 text-base font-bold text-foreground sm:text-lg">
            <GraduationCap size={19} className="text-muted-foreground" />
            O'quv Yo'nalishi & Tillari
          </h3>
          <p className="mt-0.5 text-xs text-muted-foreground">
            Asosiy til menyu, o'quv rejalari va tavsiyalarni boshqaradi.
          </p>
        </div>

        {/* Primary Language Card - IELTS ONLY */}
        <div className="rounded-2xl border border-l-4 border-border border-l-primary bg-card/60 p-3.5 transition-all sm:p-5">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="rounded-xl border border-border bg-background/90 p-2 text-3xl shadow-xs sm:p-2.5 sm:text-4xl">
                🇬🇧
              </div>
              <div className="space-y-0.5 sm:space-y-1">
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                  <span className="text-sm font-black text-foreground sm:text-base">
                    Ingliz Tili (IELTS Master Track)
                  </span>
                  <span className="badge-gold text-[9px] font-bold sm:text-[10px]">
                    ★ ASOSIY FOKUS
                  </span>
                </div>
                <div className="text-xs text-muted-foreground">
                  Maqsad: <strong className="text-foreground">{targetLevel || '7.0'}</strong> •{' '}
                  {targetGoal || 'IELTS 7.5+'}
                </div>
              </div>
            </div>

            {/* Level Quick Select */}
            <div className="flex items-center gap-2 self-start sm:self-center">
              <span className="text-xs font-bold text-muted-foreground">Band:</span>
              <select
                value={targetLevel}
                onChange={(e) => setPrimaryFocus('en', e.target.value, targetGoal)}
                className="outline-hidden rounded-xl border border-border bg-background px-2.5 py-1.5 text-xs font-bold text-foreground focus:ring-2 focus:ring-primary"
              >
                <option value="5.5">Band 5.5 (Modest)</option>
                <option value="6.0">Band 6.0 (Competent)</option>
                <option value="6.5">Band 6.5 (Upper-Intermediate)</option>
                <option value="7.0">Band 7.0 (Good User)</option>
                <option value="7.5">Band 7.5 (Very Good)</option>
                <option value="8.0">Band 8.0 (Expert)</option>
                <option value="8.5">Band 8.5+ (Life-Long Mastery)</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* App Interface Language & Notifications */}
      <div className="space-y-3.5 border-t border-border pt-4 sm:space-y-4 sm:pt-6">
        <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground sm:text-sm">
          Tizim & Interfeys Tili
        </h4>

        {/* Interface Language Switcher Card */}
        <div className="flex flex-col justify-between gap-3 rounded-xl border border-border bg-background/50 p-3.5 sm:flex-row sm:items-center sm:gap-4 sm:p-4">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-primary/10 p-2 text-base text-primary sm:p-2.5 sm:text-lg">
              🌐
            </div>
            <div>
              <span className="block text-xs font-bold text-foreground sm:text-sm sm:font-semibold">
                {language === 'uz' ? 'Ilova Interfeys Tili' : 'App Interface Language'}
              </span>
              <span className="text-[11px] text-muted-foreground sm:text-xs">
                {language === 'uz'
                  ? 'Menyu va tugmalar tilini tanlang'
                  : 'Select display language for menus and buttons'}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                setLanguage('uz');
                toast({ title: "O'zbek tili tanlandi" });
              }}
              className={`flex flex-1 cursor-pointer items-center justify-center gap-1.5 rounded-xl border px-3 py-1.5 text-xs font-bold transition-all sm:flex-initial sm:gap-2 sm:px-3.5 sm:py-2 ${
                language === 'uz'
                  ? 'border-primary bg-primary text-primary-foreground shadow-xs'
                  : 'border-border bg-card text-muted-foreground hover:bg-muted'
              }`}
            >
              <UzbekistanFlag className="h-2.5 w-4" />
              <span>O'zbekcha</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setLanguage('en');
                toast({ title: 'English language selected' });
              }}
              className={`flex flex-1 cursor-pointer items-center justify-center gap-1.5 rounded-xl border px-3 py-1.5 text-xs font-bold transition-all sm:flex-initial sm:gap-2 sm:px-3.5 sm:py-2 ${
                language === 'en'
                  ? 'border-primary bg-primary text-primary-foreground shadow-xs'
                  : 'border-border bg-card text-muted-foreground hover:bg-muted'
              }`}
            >
              <UKFlag className="h-2.5 w-4" />
              <span>English</span>
            </button>
          </div>
        </div>

        {/* Notifications */}
        <div className="flex items-center justify-between gap-3 rounded-xl border border-border bg-background/50 p-3.5 sm:gap-4 sm:p-4">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-orange-500/10 p-2 text-orange-500 sm:p-2.5">
              <Bell size={18} className="sm:size-[20px]" />
            </div>
            <div>
              <span className="block text-xs font-bold text-foreground sm:text-sm sm:font-semibold">
                Brauzer Bildirishnomalari
              </span>
              <span className="text-[11px] text-muted-foreground sm:text-xs">
                Dars va Streak eslatmalarini qurilmada olish
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            {settings.notificationsEnabled && (
              <button
                onClick={async () => {
                  const ok = await PushNotificationService.sendTestNotification();
                  if (ok) {
                    toast({ title: '🔔 Sinov bildirishnomasi yuborildi!' });
                  } else {
                    toast({ title: "Xatolik yoki ruxsat yo'q", variant: 'destructive' });
                  }
                }}
                className="rounded-lg border border-border px-2.5 py-1 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-muted sm:px-3 sm:py-1.5 sm:text-xs"
              >
                Sinab ko'rish
              </button>
            )}
            <label className="relative inline-flex cursor-pointer items-center">
              <input
                type="checkbox"
                checked={settings.notificationsEnabled}
                onChange={onToggleNotifications}
                className="peer sr-only"
              />
              <div className="peer h-6 w-11 rounded-full bg-muted after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none"></div>
            </label>
          </div>
        </div>

        {/* Real-time Update & Cache Purge */}
        <div className="flex flex-col justify-between gap-3 rounded-xl border border-border bg-background/50 p-3.5 sm:flex-row sm:items-center sm:gap-4 sm:p-4">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-indigo-500/10 p-2 text-indigo-500 sm:p-2.5">
              <RefreshCw size={18} className="sm:size-[20px]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-foreground sm:text-sm sm:font-semibold">
                  Ilova Versiyasi & Keshni Tozalash
                </span>
                <span className="rounded-md bg-indigo-100 px-1.5 py-0.5 text-[9px] font-bold text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400 sm:text-[10px]">
                  v1.1.0
                </span>
              </div>
              <span className="text-[11px] text-muted-foreground sm:text-xs">
                Yangi funksiyalar qo'shilganda keshni tozalab eng so'nggi versiyani yuklash
              </span>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2 sm:flex-nowrap">
            <button
              type="button"
              onClick={async () => {
                toast({ title: '🔍 Yangilanishlar tekshirilmoqda...' });
                const hasNew = await autoUpdateService.checkForUpdate();
                if (!hasNew) {
                  toast({ title: '✅ Siz eng so‘nggi versiyadan foydalanmoqdasiz!' });
                }
              }}
              className="flex-1 rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted sm:flex-initial"
            >
              Tekshirish
            </button>
            <button
              type="button"
              onClick={async () => {
                toast({
                  title: '🔄 Kesh tozalanmoqda...',
                  description: 'Sahifa qayta yuklanmoqda',
                });
                await autoUpdateService.purgeCachesAndReload();
              }}
              className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-indigo-600 px-3 py-1.5 text-xs font-bold text-white shadow-xs transition hover:bg-indigo-700 active:scale-95 sm:flex-initial sm:px-3.5"
            >
              <RefreshCw size={12} />
              <span>Tozalash va yangilash</span>
            </button>
          </div>
        </div>

        {/* PWA App Installation Card */}
        <div className="flex flex-col justify-between gap-3 rounded-xl border border-border bg-background/50 p-3.5 sm:flex-row sm:items-center sm:gap-4 sm:p-4">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-emerald-500/10 p-2 text-emerald-500 sm:p-2.5">
              <Smartphone size={18} className="sm:size-[20px]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-foreground sm:text-sm sm:font-semibold">
                  IELTS Talk Ilovasi (PWA)
                </span>
                {isInstalled ? (
                  <span className="rounded-md bg-emerald-100 px-1.5 py-0.5 text-[9px] font-bold text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400 sm:text-[10px]">
                    O'rnatilgan
                  </span>
                ) : (
                  <span className="rounded-md bg-indigo-100 px-1.5 py-0.5 text-[9px] font-bold text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400 sm:text-[10px]">
                    O'rnatishga tayyor
                  </span>
                )}
              </div>
              <span className="text-[11px] text-muted-foreground sm:text-xs">
                {isInstalled
                  ? "Ilova qurilmangizga to'liq o'rnatilgan va mustaqil ishlamoqda."
                  : "Bosh ekranga o'rnating va tezroq foydalaning."}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {isInstalled ? (
              <div className="flex items-center gap-1.5 rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold text-emerald-500">
                <CheckCircle2 size={14} />
                <span>Faol</span>
              </div>
            ) : (
              <button
                type="button"
                onClick={async () => {
                  const res = await promptInstall();
                  if (res === 'ios') {
                    setShowIOSModal(true);
                  } else if (res === 'accepted') {
                    toast({ title: "✅ IELTS Talk muvaffaqiyatli o'rnatildi!" });
                  } else if (res === 'unavailable') {
                    if (isIOS) {
                      setShowIOSModal(true);
                    } else {
                      toast({
                        title: 'ℹ️ Brauzer menyusidan foydalaning',
                        description:
                          "Brauzeringiz menyusidan 'Bosh ekranga qo'shish' yoki 'Ilovani o'rnatish' bandini tanlang.",
                      });
                    }
                  }
                }}
                className="flex w-full cursor-pointer items-center justify-center gap-1.5 rounded-lg bg-emerald-600 px-3.5 py-1.5 text-xs font-bold text-white shadow-xs transition hover:bg-emerald-500 active:scale-95 sm:w-auto"
              >
                <Download size={13} />
                <span>Ilovani o'rnatish</span>
              </button>
            )}
          </div>
        </div>
      </div>

      <IOSInstallModal isOpen={showIOSModal} onClose={() => setShowIOSModal(false)} />
    </div>
  );
};

export default PreferencesSection;
