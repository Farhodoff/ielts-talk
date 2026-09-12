import React, { useState, useEffect, useRef } from 'react';
import { useRegisterSW } from 'virtual:pwa-register/react';
import { RefreshCw, X, Sparkles } from 'lucide-react';
import autoUpdateService from '../../services/AutoUpdateService';
import { useAutoUpdate } from '../../hooks/useAutoUpdate';

const ReloadPrompt: React.FC = () => {
  const { hasUpdate: autoUpdateAvailable, isUpdating } = useAutoUpdate();
  const [dismissed, setDismissed] = useState(false);
  const [countdown, setCountdown] = useState(4);
  const autoReloadTimerRef = useRef<NodeJS.Timeout | null>(null);

  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(r) {
      if (r) {
        // Poll for Service Worker script updates
        r.update().catch(() => {});
        setInterval(() => {
          r.update().catch(() => {});
        }, 30 * 1000);
      }
    },
    onRegisterError(error) {
      console.warn('[PWA] ServiceWorker registration warning:', error);
    },
  });

  const shouldShow = (!dismissed && (needRefresh || autoUpdateAvailable)) || offlineReady;

  // Auto-reload countdown when a new version/feature is pushed
  useEffect(() => {
    if ((needRefresh || autoUpdateAvailable) && !dismissed) {
      setCountdown(4);

      const interval = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            handleReload();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [needRefresh, autoUpdateAvailable, dismissed]);

  const handleReload = async () => {
    try {
      if (needRefresh) {
        await updateServiceWorker(true);
      }
      await autoUpdateService.purgeCachesAndReload();
    } catch {
      window.location.reload();
    }
  };

  const close = () => {
    setOfflineReady(false);
    setNeedRefresh(false);
    setDismissed(true);
    if (autoReloadTimerRef.current) {
      clearTimeout(autoReloadTimerRef.current);
    }
  };

  if (!shouldShow) return null;

  const isUpdateAlert = needRefresh || autoUpdateAvailable;

  return (
    <div className="fixed bottom-20 left-4 right-4 z-[999] duration-300 animate-in slide-in-from-bottom-10 md:bottom-8 md:left-auto md:right-8">
      <div className="mx-auto flex max-w-md flex-col items-center gap-4 rounded-2xl border border-indigo-100 bg-white/95 p-4 shadow-2xl backdrop-blur-md dark:border-indigo-900/50 dark:bg-gray-900/95 md:flex-row md:p-5">
        <div className="flex flex-1 items-center gap-3.5">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 text-white shadow-md shadow-indigo-500/20">
            {isUpdateAlert ? (
              <Sparkles className="h-5 w-5 animate-pulse" />
            ) : (
              <RefreshCw className="h-5 w-5" />
            )}
          </div>
          <div>
            <h4 className="flex items-center gap-2 font-bold text-gray-900 dark:text-white">
              {isUpdateAlert ? (
                <>
                  <span>Yangi funksiyalar qo'shildi!</span>
                  <span className="rounded-full bg-indigo-100 px-2 py-0.5 text-xs font-semibold text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400">
                    {countdown > 0 ? `${countdown}s` : 'Yangilanmoqda'}
                  </span>
                </>
              ) : (
                'Offline ishlashga tayyor'
              )}
            </h4>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {isUpdateAlert
                ? 'Kesh tozalanib, so‘nggi yangilanish avtomatik yuklanmoqda...'
                : 'Ilova keshlandi va internetsiz ham ishlaydi.'}
            </p>
          </div>
        </div>

        <div className="flex w-full items-center gap-2 md:w-auto">
          {isUpdateAlert && (
            <button
              onClick={handleReload}
              disabled={isUpdating}
              className="flex flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded-xl bg-indigo-600 px-4 py-2 text-xs font-bold text-white shadow-sm transition-all hover:bg-indigo-700 active:scale-95 disabled:opacity-50 md:flex-none"
            >
              <RefreshCw className={`h-3.5 w-3.5 ${isUpdating ? 'animate-spin' : ''}`} />
              Hozir yangilash
            </button>
          )}
          <button
            onClick={close}
            className="rounded-lg p-1.5 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-800 dark:hover:text-gray-200"
            aria-label="Keyinroq"
            title="Keyinroq"
          >
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReloadPrompt;
