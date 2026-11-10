import React, { Suspense, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Session } from '@supabase/supabase-js';
import ErrorBoundary from './components/ErrorBoundary';
import GlobalAudioPlayer from './components/GlobalAudioPlayer';
import AppRoutes from './AppRoutes';
import PageLoader from './components/PageLoader';
import { StudyPlannerProvider } from './context/StudyPlannerContext';
import { FocusTimerProvider } from './context/FocusTimerContext';
import { LanguageProvider } from './context/LanguageContext';
import { supabase } from './lib/supabase';
import OfflineIndicator from './components/OfflineIndicator';
import { InstallPrompt } from './components/pwa/InstallPrompt';
import { PushNotificationPrompt } from './components/pwa/PushNotificationPrompt';
import { Toaster } from './components/ui/toaster';
import { isPublicPreviewActive, MOCK_PREVIEW_SESSION } from './config/previewMode';
import {
  isTelegramWebApp,
  initTelegramAuth,
  authenticateTelegramWebApp,
} from './utils/telegramAuth';

import ReloadPrompt from './components/pwa/ReloadPrompt';
import UnauthRouter from './components/UnauthRouter';

const App: React.FC = () => {
  const [session, setSession] = useState<Session | null>(() => {
    if (isPublicPreviewActive()) {
      return MOCK_PREVIEW_SESSION as unknown as Session;
    }
    if (typeof window !== 'undefined' && isTelegramWebApp()) {
      const tgAuth = initTelegramAuth();
      if (tgAuth?.session) {
        return tgAuth.session;
      }
    }
    if (typeof window !== 'undefined') {
      try {
        const rawUser = localStorage.getItem('study_planner_user_cache');
        if (rawUser) {
          const parsed = JSON.parse(rawUser);
          if (parsed && parsed.email) {
            return {
              access_token: 'cached-token',
              token_type: 'bearer',
              expires_in: 360000,
              refresh_token: 'cached-refresh',
              user: parsed,
            } as unknown as Session;
          }
        }
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          if (key && (key.includes('auth-token') || key.includes('supabase.auth.token'))) {
            const raw = localStorage.getItem(key);
            if (raw) {
              const parsed = JSON.parse(raw);
              if (
                parsed &&
                (parsed.access_token ||
                  (parsed.currentSession && parsed.currentSession.access_token))
              ) {
                return parsed.currentSession || parsed;
              }
            }
          }
        }
      } catch {}
    }
    return null;
  });
  const [isLoading, setIsLoading] = useState<boolean>(() => !session && !isPublicPreviewActive());

  useEffect(() => {
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
    try {
      localStorage.setItem('study_planner_theme', 'dark');
    } catch {}
  }, []);

  useEffect(() => {
    // Safety timeout: Never leave the UI stuck on "Yuklanmoqda..."
    const safetyTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    // Telegram Mini App: a real Supabase session is obtained from the server by
    // exchanging the signed initData. Cached sessions are only a fast path.
    const resolveTelegramSession = () => {
      const cached = initTelegramAuth();
      if (cached?.session) {
        setSession(cached.session);
        setIsLoading(false);
        return;
      }

      authenticateTelegramWebApp()
        .then((result) => {
          if (result?.session) setSession(result.session);
        })
        .catch((tgErr) => {
          console.warn('Telegram authentication failed:', tgErr);
        })
        .finally(() => setIsLoading(false));
    };

    supabase.auth
      .getSession()
      .then(({ data: { session: fetchedSession } }) => {
        clearTimeout(safetyTimer);
        if (fetchedSession) {
          setSession(fetchedSession);
          setIsLoading(false);
          return;
        }
        if (isTelegramWebApp()) {
          resolveTelegramSession();
          return;
        }
        if (isPublicPreviewActive()) {
          setSession(MOCK_PREVIEW_SESSION as unknown as Session);
        }
        setIsLoading(false);
      })
      .catch((err) => {
        clearTimeout(safetyTimer);
        console.warn('Session check aborted/failed:', err);
        if (isTelegramWebApp()) {
          resolveTelegramSession();
          return;
        }
        if (isPublicPreviewActive()) {
          setSession(MOCK_PREVIEW_SESSION as unknown as Session);
        }
        setIsLoading(false);
      });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, newSession) => {
      if (newSession) {
        setSession(newSession);
      } else if (isTelegramWebApp()) {
        const tgAuth = initTelegramAuth();
        if (tgAuth?.session) {
          setSession(tgAuth.session);
        }
      } else if (isPublicPreviewActive()) {
        setSession(MOCK_PREVIEW_SESSION as unknown as Session);
      }
    });

    const handleStorageAuth = (e: StorageEvent) => {
      if (
        e.key &&
        (e.key.includes('auth-token') || e.key.includes('supabase.auth.token')) &&
        !e.newValue
      ) {
        if (isPublicPreviewActive()) {
          setSession(MOCK_PREVIEW_SESSION as unknown as Session);
        } else {
          setSession(null);
        }
      }
    };

    window.addEventListener('storage', handleStorageAuth);

    return () => {
      clearTimeout(safetyTimer);
      subscription.unsubscribe();
      window.removeEventListener('storage', handleStorageAuth);
    };
  }, []);

  if (isLoading) {
    return <PageLoader />;
  }

  const isGuest = !session && !isPublicPreviewActive();

  return (
    <ErrorBoundary>
      <LanguageProvider>
        <StudyPlannerProvider>
          {isGuest ? (
            <>
              <UnauthRouter />
              <ReloadPrompt />
            </>
          ) : (
            <FocusTimerProvider>
              <BrowserRouter>
                <div className="relative h-screen overflow-hidden bg-background text-foreground transition-colors duration-200">
                  <Suspense fallback={<PageLoader />}>
                    <AppRoutes />
                  </Suspense>
                  <GlobalAudioPlayer />

                  {/* PWA Prompts */}
                  <ReloadPrompt />
                  <InstallPrompt />
                  <PushNotificationPrompt />

                  <OfflineIndicator />
                  <Toaster />
                </div>
              </BrowserRouter>
            </FocusTimerProvider>
          )}
        </StudyPlannerProvider>
      </LanguageProvider>
    </ErrorBoundary>
  );
};

export default App;
