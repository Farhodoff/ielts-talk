import React, { useState } from 'react';
import { X, Clock, CheckCircle2, Crown, Bell, Zap } from 'lucide-react';
import { FreemiumService } from '../../services/FreemiumService';
import { useStudyData } from '../../context/StudyPlannerContext';

interface FreemiumLimitModalProps {
  isOpen: boolean;
  onClose: () => void;
  feature: 'writing' | 'speaking';
  hoursUntilReset?: number;
  minutesUntilReset?: number;
}

export const FreemiumLimitModal: React.FC<FreemiumLimitModalProps> = ({
  isOpen,
  onClose,
  feature,
  hoursUntilReset = 0,
  minutesUntilReset = 0,
}) => {
  const { user } = useStudyData();
  const [contactInput, setContactInput] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const featureName = feature === 'writing' ? 'IELTS Writing Tekshiruvi' : 'IELTS Speaking Mock';

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactInput.trim()) return;
    setIsSubmitting(true);
    await FreemiumService.registerForProWaitlist(contactInput, feature, user?.id);
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-md duration-200 animate-in fade-in">
      <div className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-amber-500/30 bg-gradient-to-b from-slate-900 via-slate-900 to-indigo-950 p-6 text-white shadow-2xl md:p-8">
        {/* Ambient Glows */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-amber-500/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-blue-500/15 blur-3xl" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-2 text-slate-400 transition hover:bg-slate-800 hover:text-white"
          aria-label="Yopish"
        >
          <X size={20} />
        </button>

        {/* Header Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/15 px-3 py-1 text-xs font-black text-amber-400">
          <Crown size={14} className="animate-pulse" />
          <span>KUNLIK LIMIT YAKUNLANDI</span>
        </div>

        {/* Main Title & Description */}
        <div className="mt-4 space-y-2">
          <h2 className="text-xl font-black tracking-tight text-white sm:text-2xl">
            Bugungi bepul {featureName} imkoniyatingiz tugadi
          </h2>
          <p className="text-xs leading-relaxed text-slate-300 sm:text-sm">
            IELTS Talk bepul tarifida har kuni <strong>1 ta bepul {featureName}</strong> taqdim
            etiladi.
          </p>
        </div>

        {/* Countdown Box */}
        <div className="mt-4 flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-950/60 p-3.5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/20 text-blue-400">
            <Clock size={20} />
          </div>
          <div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Yangi bepul imkoniyat:
            </div>
            <div className="text-sm font-black text-blue-300">
              Ertaga 00:00 da (yana {hoursUntilReset} soat {minutesUntilReset} daqiqa)
            </div>
          </div>
        </div>

        {/* PRO Perks Box */}
        <div className="mt-5 space-y-2.5 rounded-2xl border border-amber-500/20 bg-amber-500/5 p-4">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-amber-300">
              <Zap size={14} className="text-amber-400" /> IELTS PRO Imkoniyatlari:
            </span>
            <span className="rounded-full bg-amber-500/20 px-2 py-0.5 text-[10px] font-extrabold text-amber-300">
              Tez kunda
            </span>
          </div>
          <ul className="space-y-1.5 text-xs text-slate-200">
            <li className="flex items-center gap-2">
              <CheckCircle2 size={14} className="shrink-0 text-emerald-400" />
              <span>
                <strong>Cheksiz</strong> Speaking Mock va Writing insho tekshiruvlari
              </span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 size={14} className="shrink-0 text-emerald-400" />
              <span>
                <strong>Band 9 AI Rewrite:</strong> Inshongizni ekspert darajasiga moslash
              </span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 size={14} className="shrink-0 text-emerald-400" />
              <span>Tezkor AI baholash va rasmiy TRF hisobotlar eksporti</span>
            </li>
          </ul>
        </div>

        {/* Waitlist / Notification Form */}
        <div className="mt-5">
          {submitted ? (
            <div className="flex items-center gap-3 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-3.5 text-emerald-300">
              <CheckCircle2 size={20} className="shrink-0 text-emerald-400" />
              <div className="text-xs font-semibold">
                Rahmat! To'lov tizimi ochilishi bilan sizga birinchilardan bo'lib{' '}
                <strong>50% maxsus chegirma</strong> bilan xabar beramiz.
              </div>
            </div>
          ) : (
            <form onSubmit={handleWaitlistSubmit} className="space-y-2">
              <label className="block text-xs font-bold text-slate-300">
                PRO obuna ochilganda xabardor bo'lish (va chegirma olish):
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={contactInput}
                  onChange={(e) => setContactInput(e.target.value)}
                  placeholder="Telegram @username yoki Email"
                  className="flex-1 rounded-xl border border-slate-700 bg-slate-950/80 px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-amber-500 focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  disabled={isSubmitting || !contactInput.trim()}
                  className="inline-flex cursor-pointer items-center gap-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-4 py-2 text-xs font-black text-slate-950 shadow-md shadow-amber-500/20 transition hover:from-amber-400 hover:to-amber-500 disabled:opacity-50"
                >
                  <Bell size={13} />
                  <span>{isSubmitting ? '...' : 'Eslatish'}</span>
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Action button */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="w-full cursor-pointer rounded-xl bg-slate-800 px-5 py-2.5 text-xs font-bold text-slate-200 transition hover:bg-slate-700 sm:w-auto"
          >
            Tushundim
          </button>
        </div>
      </div>
    </div>
  );
};
