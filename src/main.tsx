import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { registerSW } from 'virtual:pwa-register';
import { initErrorTracking } from './lib/errorTracking';
import { installConsoleShield } from './lib/consoleFilter';
import { FlashcardOfflineSync } from './services/FlashcardOfflineSync';

import './index.css';

// Xavfsiz konsol filtri va Cookie tozalagichni faollashtirish
installConsoleShield();

// Sentry / Error tracking tizimini ishga tushirish
initErrorTracking();

// Offline-first fleshkartalar avtomatik sinxronizatsiyasi
FlashcardOfflineSync.initAutoSync();

import autoUpdateService from './services/AutoUpdateService';

const isLocalhost =
  typeof window !== 'undefined' &&
  (window.location.hostname === 'localhost' ||
    window.location.hostname === '127.0.0.1' ||
    window.location.hostname.endsWith('.local'));

// Real-time kesh tozalash va PWA service worker-ni faqat productionda ro'yxatdan o'tkazish
// Localhostda service worker keshlar to'qnashuvi va to'xtovsiz reload hosil qilmasligi uchun o'chiriladi
if (!isLocalhost && import.meta.env.PROD) {
  autoUpdateService.init(30000);

  let isRefreshing = false;
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (isRefreshing) return;
      isRefreshing = true;
      console.info('[PWA] Yangi versiya faollashdi. Sahifa avtomatik yangilanmoqda...');
      window.location.reload();
    });
  }

  registerSW({
    immediate: true,
    onRegisteredSW(_swUrl, registration) {
      if (registration) {
        // 1. Dastlabki kirganda yangilanishni darhol tekshirish
        registration.update().catch(() => {});

        // 2. Har 30 soniyada yangi deploy borligini tekshirish
        setInterval(() => {
          registration.update().catch(() => {});
        }, 30 * 1000);

        // 3. Foydalanuvchi ilovaga qaytganida (tab active bo'lganda) tekshirish
        document.addEventListener('visibilitychange', () => {
          if (document.visibilityState === 'visible') {
            registration.update().catch(() => {});
          }
        });
      }
    },
    onNeedRefresh() {
      console.info('[PWA] Yangi versiya aniqlandi, keshlar tozalanib yangilanmoqda...');
      autoUpdateService.purgeCachesAndReload();
    },
    onRegisterError(error) {
      console.warn('[PWA] ServiceWorker registration ignored:', error);
    },
  });
} else if (isLocalhost && typeof window !== 'undefined' && 'serviceWorker' in navigator) {
  // Localhostda eski keshlar va service workerlarni tozalash (reload looplarini bartaraf qilish)
  navigator.serviceWorker
    .getRegistrations()
    .then((registrations) => {
      for (const reg of registrations) {
        reg.unregister();
      }
    })
    .catch(() => {});
}

// Yangi deploydan keyin keshdagi eski chunklar 404 berganda keshni tozalab avtomatik yangilash
window.addEventListener('vite:preloadError', async (event) => {
  event.preventDefault();
  console.warn(
    '[Vite] Dynamic import preload error detected. Keshlarni tozalab qayta yuklanmoqda...',
  );
  await autoUpdateService.purgeCachesAndReload();
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
