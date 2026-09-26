import React from 'react';
import { X, Share, PlusSquare, CheckCircle2 } from 'lucide-react';

interface IOSInstallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const IOSInstallModal: React.FC<IOSInstallModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-end justify-center bg-black/60 p-0 backdrop-blur-sm duration-200 animate-in fade-in sm:items-center sm:p-4">
      <div
        className="w-full max-w-md rounded-t-3xl border border-gray-800 bg-[#161B22] p-6 text-white shadow-2xl animate-in slide-in-from-bottom-10 sm:rounded-2xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby="ios-install-title"
      >
        <div className="mb-4 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/pwa-192x192.png"
              alt="IELTS Talk"
              className="h-12 w-12 rounded-xl border border-white/10 shadow-md"
            />
            <div>
              <h3 id="ios-install-title" className="text-base font-bold text-white">
                IELTS Talk ilovasini o'rnatish
              </h3>
              <p className="text-xs text-gray-400">iOS Safari uchun ko'rsatma</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-gray-400 transition hover:bg-gray-800 hover:text-white"
            aria-label="Yopish"
          >
            <X size={20} />
          </button>
        </div>

        <p className="mb-5 text-sm leading-relaxed text-gray-300">
          IELTS Talk platformasini to'liq ekranli ilova sifatida foydalanish uchun quyidagi oddiy
          qadamlarni bajaring:
        </p>

        <div className="mb-6 space-y-3.5">
          <div className="flex items-center gap-3.5 rounded-xl border border-gray-700/50 bg-gray-800/60 p-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500/20 text-indigo-400">
              <Share size={20} />
            </div>
            <div className="text-xs leading-snug text-gray-200">
              <span className="font-semibold text-white">1-qadam:</span> Safari pastki panelidagi{' '}
              <span className="font-semibold text-indigo-300">Ulashish (Share)</span> belgisini
              bosing.
            </div>
          </div>

          <div className="flex items-center gap-3.5 rounded-xl border border-gray-700/50 bg-gray-800/60 p-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400">
              <PlusSquare size={20} />
            </div>
            <div className="text-xs leading-snug text-gray-200">
              <span className="font-semibold text-white">2-qadam:</span> Menyu bo'ylab pastga suring
              va{' '}
              <span className="font-semibold text-emerald-300">
                "Bosh ekranga qo'shish" (Add to Home Screen)
              </span>{' '}
              bandini tanlang.
            </div>
          </div>

          <div className="flex items-center gap-3.5 rounded-xl border border-gray-700/50 bg-gray-800/60 p-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400">
              <CheckCircle2 size={20} />
            </div>
            <div className="text-xs leading-snug text-gray-200">
              <span className="font-semibold text-white">3-qadam:</span> Yuqori o'ng burchakdagi{' '}
              <span className="font-semibold text-amber-300">"Qo'shish" (Add)</span> tugmasini
              bosing.
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="active:scale-98 w-full rounded-xl bg-indigo-600 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-600/30 transition hover:bg-indigo-500"
        >
          Tushunarli
        </button>
      </div>
    </div>
  );
};

export default IOSInstallModal;
