import React, { useState } from 'react';
import { ArrowRight, Sparkles, ShieldCheck, CheckCircle2, Crown, Zap, Bell } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useSEO } from '../hooks/useSEO';
import { useStudyData } from '../context/StudyPlannerContext';
import { AppLogo } from '../components/AppLogo';
import { FreemiumService } from '../services/FreemiumService';

export const PricingPage: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useStudyData();
  const [waitlistContact, setWaitlistContact] = useState('');
  const [waitlistSubmitted, setWaitlistSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useSEO({
    title: "Ta'riflar va Freemium Imkoniyatlar — IELTS Talk",
    description:
      "Har kuni bepul 1 ta Speaking va 1 ta Writing tekshiruvi, to'liq bepul Reading/Listening, Anki SRS va kelgusi IELTS PRO ta'rifi.",
    canonical: '/pricing',
  });

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!waitlistContact.trim()) return;
    setIsSubmitting(true);
    await FreemiumService.registerForProWaitlist(waitlistContact, 'general', user?.id);
    setIsSubmitting(false);
    setWaitlistSubmitted(true);
  };

  return (
    <div className="flex min-h-screen flex-col justify-between bg-background p-4 text-foreground md:p-8">
      {/* Top Navigation Bar */}
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between py-4">
        <div className="cursor-pointer" onClick={() => navigate('/')}>
          <AppLogo size="md" />
        </div>
        <button
          onClick={() => navigate(user ? '/ielts' : '/login')}
          className="cursor-pointer rounded-xl border border-border bg-card px-4 py-2 text-xs font-bold text-foreground transition-all hover:bg-muted"
        >
          {user ? 'Platformaga kirish' : 'Kirish'}
        </button>
      </div>

      {/* Main Header */}
      <div className="mx-auto max-w-3xl space-y-3 pb-8 pt-4 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1.5 text-xs font-extrabold text-blue-400">
          <Sparkles size={14} className="animate-pulse" />
          <span>IELTS TALK FREEMIUM VA PRO REJALARI</span>
        </div>
        <h1 className="font-display text-2xl font-black tracking-tight text-foreground sm:text-4xl">
          Har Kuni Bepul Mashq Qiling va Band 7.5+ ga Erishing
        </h1>
        <p className="mx-auto max-w-xl text-xs leading-relaxed text-muted-foreground sm:text-sm">
          IELTS Talk har kuni 1 ta Speaking va 1 ta Writing testini bepul taqdim etadi. Barcha
          Reading, Listening, Lug'at va Grammatika darslari esa doimo 100% ochiq.
        </p>
      </div>

      {/* Plans Comparison Grid */}
      <div className="mx-auto my-auto grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
        {/* FREE TIER CARD */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="relative flex flex-col justify-between rounded-3xl border border-border bg-card p-6 shadow-xl transition-all hover:border-border/80 sm:p-8"
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-500">
                Boshlang'ich Bepul Tarif
              </span>
              <span className="text-xs font-bold text-muted-foreground">Doimiy</span>
            </div>

            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-black text-foreground">0 so'm</span>
                <span className="text-xs text-muted-foreground">/ oy</span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                Mustaqil tayyorgarlik ko'ruvchi talabalar uchun kundalik bepul imkoniyatlar.
              </p>
            </div>

            <hr className="border-border/60" />

            <ul className="space-y-2.5 text-xs text-muted-foreground">
              <li className="flex items-center gap-2.5 font-medium text-foreground">
                <CheckCircle2 size={16} className="shrink-0 text-emerald-500" />
                <span>
                  <strong>Kuniga 1 ta</strong> AI IELTS Speaking Mock
                </span>
              </li>
              <li className="flex items-center gap-2.5 font-medium text-foreground">
                <CheckCircle2 size={16} className="shrink-0 text-emerald-500" />
                <span>
                  <strong>Kuniga 1 ta</strong> IELTS Writing Task 1 yoki Task 2
                </span>
              </li>
              <li className="flex items-center gap-2.5 font-medium text-foreground">
                <CheckCircle2 size={16} className="shrink-0 text-emerald-500" />
                <span>
                  <strong>Cheksiz</strong> Cambridge Reading & Listening Mocks
                </span>
              </li>
              <li className="flex items-center gap-2.5 font-medium text-foreground">
                <CheckCircle2 size={16} className="shrink-0 text-emerald-500" />
                <span>
                  <strong>100+</strong> Murphy Grammatika darslari va mashqlari
                </span>
              </li>
              <li className="flex items-center gap-2.5 font-medium text-foreground">
                <CheckCircle2 size={16} className="shrink-0 text-emerald-500" />
                <span>
                  <strong>Anki SM-2:</strong> Oxford 3000 va Academic Word List
                </span>
              </li>
            </ul>
          </div>

          <div className="mt-6 border-t border-border/60 pt-6">
            <Button
              onClick={() => navigate(user ? '/ielts' : '/register')}
              className="w-full cursor-pointer justify-center rounded-xl bg-muted py-3 text-xs font-bold text-foreground hover:bg-muted/80"
            >
              <span>{user ? "Platformaga O'tish" : 'Hoziroq Bepul Boshlang'}</span>
              <ArrowRight size={14} className="ml-1" />
            </Button>
          </div>
        </motion.div>

        {/* PRO TIER CARD */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-amber-500/40 bg-gradient-to-b from-card via-card to-amber-500/5 p-6 shadow-2xl sm:p-8"
        >
          {/* Ambient Glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-amber-500/10 blur-3xl" />

          <div className="relative z-10 space-y-4">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/15 px-3 py-1 text-xs font-black text-amber-400">
                <Crown size={13} className="fill-amber-400" /> IELTS PRO
              </span>
              <span className="rounded-full border border-blue-500/30 bg-blue-500/15 px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-blue-400">
                Tez kunda
              </span>
            </div>

            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-black text-foreground">PRO Obuna</span>
              </div>
              <p className="mt-1 text-xs font-medium text-amber-400/90">
                To'lov tizimlari ulanmoqda. Birinchilardan bo'lib 50% chegirmaga ega bo'ling.
              </p>
            </div>

            <hr className="border-border/60" />

            <ul className="space-y-2.5 text-xs font-medium text-foreground">
              <li className="flex items-center gap-2.5">
                <Zap size={16} className="shrink-0 text-amber-400" />
                <span>
                  <strong>Cheksiz</strong> Speaking Mock va Jonli AI Examiner suhbatlari
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Zap size={16} className="shrink-0 text-amber-400" />
                <span>
                  <strong>Cheksiz</strong> Writing Task 1 va Task 2 insho tekshiruvlari
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Sparkles size={16} className="shrink-0 text-amber-400" />
                <span>
                  <strong>Band 9 AI Rewrite:</strong> Inshongizni ekspert darajasiga ko'tarish
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <ShieldCheck size={16} className="shrink-0 text-amber-400" />
                <span>
                  <strong>Rasmiy TRF Sertifikatlari:</strong> Band hisoboti va PDF eksport
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Crown size={16} className="shrink-0 text-amber-400" />
                <span>Shaxsiy adaptiv maqsad va zaif nuqtalar ustida ishlash xaritasi</span>
              </li>
            </ul>
          </div>

          <div className="relative z-10 mt-6 border-t border-border/60 pt-6">
            {waitlistSubmitted ? (
              <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3 text-center text-xs font-bold text-emerald-400">
                ✓ Rahmat! PRO ochilganda sizga maxsus 50% chegirma taqdim etiladi.
              </div>
            ) : (
              <form onSubmit={handleWaitlistSubmit} className="space-y-2">
                <label className="block text-[11px] font-bold text-muted-foreground">
                  PRO ochilishi bilan eslatma olish:
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={waitlistContact}
                    onChange={(e) => setWaitlistContact(e.target.value)}
                    placeholder="Telegram yoki Email"
                    className="flex-1 rounded-xl border border-border bg-background px-3 py-2 text-xs text-foreground placeholder-muted-foreground focus:border-amber-500 focus:outline-none"
                    required
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting || !waitlistContact.trim()}
                    className="inline-flex cursor-pointer items-center gap-1 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-3.5 py-2 text-xs font-black text-slate-950 transition hover:from-amber-400 hover:to-amber-500 disabled:opacity-50"
                  >
                    <Bell size={13} />
                    <span>{isSubmitting ? '...' : 'Eslatish'}</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>

      {/* Footer Notice */}
      <div className="mx-auto w-full max-w-4xl py-6 text-center text-xs text-muted-foreground">
        © 2026 IELTS Talk · Barcha bepul darslar, Reading & Listening va Anki so'z boyligi doimo
        ochiq.
      </div>
    </div>
  );
};

export default PricingPage;
