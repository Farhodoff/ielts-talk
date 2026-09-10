import React, { useState, useEffect, useCallback } from 'react';
import { WifiOff, Wifi, RefreshCw, CheckCircle2, Trash2, X } from 'lucide-react';
import { FlashcardOfflineSync } from '../services/FlashcardOfflineSync';
import { toast } from '../hooks/use-toast';
import { isPublicPreviewActive } from '../config/previewMode';

const OfflineIndicator: React.FC = () => {
  const [isOffline, setIsOffline] = useState(!navigator.onLine);
  const [pendingCount, setPendingCount] = useState(0);
  const [isSyncing, setIsSyncing] = useState(false);
  const [justSynced, setJustSynced] = useState(false);
  const [isDismissed, setIsDismissed] = useState(() => {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem('dismiss_offline_sync') === 'true';
    }
    return false;
  });

  // Fetch pending count periodically
  const refreshPendingCount = useCallback(async () => {
    try {
      const count = await FlashcardOfflineSync.getPendingCount();
      setPendingCount(count);
    } catch {}
  }, []);

  const handleSync = async () => {
    setIsSyncing(true);
    try {
      const result = await FlashcardOfflineSync.syncPending();
      if (result.synced > 0) {
        setJustSynced(true);
        toast({
          title: '✅ Sinxronlash muvaffaqiyatli',
          description: `${result.synced} ta oflayn o'zgarish bazaga saqlandi.`,
        });
        setTimeout(() => setJustSynced(false), 4000);
      } else if (result.failed > 0) {
        toast({
          title: '⚠️ Sinxronlash amalga oshmadi',
          description: "O'zgarishlarni saqlash uchun profilingizga kiring yoki 'Tozalash' tugmasini bosing.",
        });
      }
    } catch {
      toast({
        title: '⚠️ Tarmoq xatosi',
        description: "Server bilan bog'lanishda xatolik yuz berdi.",
      });
    } finally {
      setIsSyncing(false);
      refreshPendingCount();
    }
  };

  const handleClear = async () => {
    try {
      await FlashcardOfflineSync.clearQueue();
      setPendingCount(0);
      toast({
        title: '🗑️ Oflayn navbat tozalandi',
        description: "Barcha sinxronlanmagan o'zgarishlar o'chirildi.",
      });
    } catch {}
  };

  const handleDismiss = () => {
    setIsDismissed(true);
    try {
      sessionStorage.setItem('dismiss_offline_sync', 'true');
    } catch {}
  };

  useEffect(() => {
    refreshPendingCount();

    // Auto-sync attempt on mount if online and has pending items
    if (navigator.onLine) {
      FlashcardOfflineSync.getPendingCount().then((count) => {
        if (count > 0) {
          handleSync();
        }
      });
    }

    const handleOnline = async () => {
      setIsOffline(false);
      const count = await FlashcardOfflineSync.getPendingCount();
      if (count > 0) {
        handleSync();
      }
    };

    const handleOffline = () => {
      setIsOffline(true);
      refreshPendingCount();
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    const interval = setInterval(refreshPendingCount, 30000);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      clearInterval(interval);
    };
  }, [refreshPendingCount]);

  // Don't show in public preview mode
  if (isPublicPreviewActive()) return null;

  // Success toast after reconnection sync
  if (justSynced && !isOffline) {
    return (
      <div className="fixed left-0 right-0 top-0 z-[100] flex items-center justify-center gap-2 bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-md animate-in slide-in-from-top-2">
        <CheckCircle2 size={16} />
        <span>Barcha o'zgarishlar muvaffaqiyatli sinxronlandi ✓</span>
      </div>
    );
  }

  // Nothing to show when online with no pending items or dismissed
  if (!isOffline && (pendingCount === 0 || isDismissed)) return null;

  // Online but has pending sync items
  if (!isOffline && pendingCount > 0) {
    return (
      <div className="fixed left-0 right-0 top-0 z-[100] flex items-center justify-between gap-3 bg-amber-600/95 px-4 py-2 text-xs sm:text-sm font-semibold text-white shadow-lg backdrop-blur-md animate-in slide-in-from-top-2 border-b border-amber-500">
        <div className="flex items-center gap-2">
          {isSyncing ? (
            <RefreshCw size={16} className="animate-spin shrink-0 text-amber-200" />
          ) : (
            <Wifi size={16} className="shrink-0 text-amber-200" />
          )}
          <span>
            <b>{pendingCount} ta</b> o'zgarish sinxronlanishni kutmoqda
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleSync}
            disabled={isSyncing}
            className="flex items-center gap-1.5 rounded-lg bg-white/20 hover:bg-white/30 active:scale-95 px-3 py-1 text-xs font-bold transition disabled:opacity-50 text-white cursor-pointer"
            title="Hozir sinxronlash"
          >
            <RefreshCw size={12} className={isSyncing ? 'animate-spin' : ''} />
            <span>{isSyncing ? 'Yuklanmoqda...' : 'Sinxronlash'}</span>
          </button>

          <button
            type="button"
            onClick={handleClear}
            className="flex items-center gap-1 rounded-lg bg-red-600/40 hover:bg-red-600/60 active:scale-95 px-2.5 py-1 text-xs font-bold transition text-white cursor-pointer"
            title="Oflayn navbatni tozalash"
          >
            <Trash2 size={12} />
            <span className="hidden sm:inline">Tozalash</span>
          </button>

          <button
            type="button"
            onClick={handleDismiss}
            className="rounded-lg p-1 hover:bg-white/20 active:scale-95 text-white/80 hover:text-white transition cursor-pointer"
            title="Yopish"
            aria-label="Yopish"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    );
  }

  // Offline state
  return (
    <div className="fixed left-0 right-0 top-0 z-[100] flex items-center justify-center gap-2 bg-yellow-600/95 px-4 py-2 text-sm font-semibold text-white shadow-lg backdrop-blur-sm animate-in slide-in-from-top-2 border-b border-yellow-500">
      <WifiOff size={16} />
      <span>
        Oflayn rejim
        {pendingCount > 0 && (
          <span className="ml-1 rounded-full bg-white/20 px-2 py-0.5 text-xs font-bold">
            {pendingCount} ta o'zgarish kutmoqda
          </span>
        )}
      </span>
    </div>
  );
};

export default OfflineIndicator;
