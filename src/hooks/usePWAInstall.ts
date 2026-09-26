import { useState, useEffect, useCallback } from 'react';
import { isTelegramWebApp } from '../utils/telegramAuth';

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

const DISMISSED_KEY = 'ielts_talk_pwa_dismissed_until';
const SEVEN_DAYS_MS = 7 * 24 * 60 * 60 * 1000;

export function usePWAInstall() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // 1. Standalone / Installed tekshiruvi
    const isStandalone =
      window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as unknown as { standalone?: boolean }).standalone === true ||
      document.referrer.includes('android-app://');

    if (isStandalone) {
      setIsInstalled(true);
      setIsReady(true);
      return;
    }

    // 2. Telegram WebApp ichida bo'lsa PWA prompt kerak emas
    if (isTelegramWebApp()) {
      setIsReady(true);
      return;
    }

    // 3. Foydalanuvchi avval bannerni yopganmi?
    try {
      const dismissedUntil = localStorage.getItem(DISMISSED_KEY);
      if (dismissedUntil && Number(dismissedUntil) > Date.now()) {
        setIsDismissed(true);
      }
    } catch {
      // localStorage xatolarini yutish
    }

    // 4. iOS Safari tekshiruvi
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIosDevice =
      /iphone|ipad|ipod/.test(userAgent) ||
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    const isSafari =
      /safari/.test(userAgent) && !/chrome|crios|crmo|firefox|fxios|edg|opera|opr/.test(userAgent);

    if (isIosDevice && isSafari && !isStandalone) {
      setIsIOS(true);
    }

    // 5. Chrome / Edge / Android `beforeinstallprompt` hodisasi
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    const handleAppInstalled = () => {
      setIsInstalled(true);
      setDeferredPrompt(null);
      try {
        localStorage.removeItem(DISMISSED_KEY);
      } catch {}
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    setIsReady(true);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const promptInstall = useCallback(async (): Promise<
    'accepted' | 'dismissed' | 'ios' | 'unavailable'
  > => {
    if (isIOS) {
      return 'ios';
    }

    if (!deferredPrompt) {
      return 'unavailable';
    }

    try {
      await deferredPrompt.prompt();
      const choiceResult = await deferredPrompt.userChoice;
      setDeferredPrompt(null);

      if (choiceResult.outcome === 'accepted') {
        setIsInstalled(true);
      }
      return choiceResult.outcome;
    } catch {
      return 'unavailable';
    }
  }, [deferredPrompt, isIOS]);

  const dismiss = useCallback(() => {
    setIsDismissed(true);
    try {
      localStorage.setItem(DISMISSED_KEY, String(Date.now() + SEVEN_DAYS_MS));
    } catch {}
  }, []);

  const isInstallable = Boolean(deferredPrompt) || (isIOS && !isInstalled);

  return {
    isInstallable,
    isInstalled,
    isIOS,
    isDismissed,
    isReady,
    promptInstall,
    dismiss,
  };
}
