import React, { useState } from 'react';
import { Download, X } from 'lucide-react';
import { usePWAInstall } from '../../hooks/usePWAInstall';
import { IOSInstallModal } from './IOSInstallModal';

export const InstallPrompt: React.FC = () => {
  const { isInstallable, isInstalled, isDismissed, promptInstall, dismiss } = usePWAInstall();
  const [showIOSModal, setShowIOSModal] = useState(false);

  // O'rnatilgan bo'lsa, o'rnatib bo'lmaydigan brauzerda yoki foydalanuvchi yopgan bo'lsa ko'rsatilmaydi
  if (!isInstallable || isInstalled || isDismissed) {
    return (
      <IOSInstallModal
        isOpen={showIOSModal}
        onClose={() => {
          setShowIOSModal(false);
          dismiss();
        }}
      />
    );
  }

  const handleInstallClick = async () => {
    const result = await promptInstall();
    if (result === 'ios') {
      setShowIOSModal(true);
    }
  };

  return (
    <>
      <div className="fixed bottom-20 left-4 right-4 z-[998] duration-300 animate-in slide-in-from-bottom-8 md:bottom-6 md:left-6 md:right-auto md:max-w-sm">
        <div className="flex items-center gap-3.5 rounded-2xl border border-indigo-500/30 bg-[#0F1419]/95 p-3.5 shadow-2xl ring-1 ring-white/10 backdrop-blur-md dark:border-indigo-500/20">
          <img
            src="/pwa-192x192.png"
            alt="IELTS Talk"
            className="h-11 w-11 shrink-0 rounded-xl border border-white/10 object-cover shadow-md"
          />

          <div className="min-w-0 flex-1">
            <h4 className="truncate text-xs font-bold text-white">
              IELTS Talk ilovasini o'rnatish
            </h4>
            <p className="line-clamp-1 text-[11px] text-gray-400">
              Tezkor kirish va qulay o'qish uchun o'rnating
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-1.5">
            <button
              onClick={handleInstallClick}
              className="flex cursor-pointer items-center gap-1 rounded-xl bg-indigo-600 px-3 py-1.5 text-xs font-bold text-white shadow-md transition-all hover:bg-indigo-500 active:scale-95"
            >
              <Download size={13} />
              <span>O'rnatish</span>
            </button>
            <button
              onClick={dismiss}
              className="cursor-pointer rounded-lg p-1.5 text-gray-400 transition hover:bg-white/10 hover:text-white"
              title="Keyinroq"
              aria-label="Keyinroq"
            >
              <X size={15} />
            </button>
          </div>
        </div>
      </div>

      <IOSInstallModal
        isOpen={showIOSModal}
        onClose={() => {
          setShowIOSModal(false);
          dismiss();
        }}
      />
    </>
  );
};

export default InstallPrompt;
