import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import {
  ArrowRight,
  Menu,
  X,
  Mic,
  Volume2,
  Flame,
  BookOpen,
  Check,
  Lock,
  GraduationCap,
  Target,
  Sparkles,
} from 'lucide-react';
import { AppLogo } from '../components/AppLogo';
import { UzbekistanFlag, UKFlag } from '../components/common/FlagIcons';
import { useSEO } from '../hooks/useSEO';
import { useLanguage } from '../context/LanguageContext';

/* ------------------------------------------------------------------ */
/*  Animated Section Wrapper                                          */
/* ------------------------------------------------------------------ */
const FadeIn: React.FC<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
  offsetY?: number;
  direction?: 'y' | 'x';
}> = ({ children, className = '', delay = 0, offsetY = 24, direction = 'y' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const initial = direction === 'y' ? { opacity: 0, y: offsetY } : { opacity: 0, x: offsetY };
  const animate = direction === 'y' ? { opacity: 1, y: 0 } : { opacity: 1, x: 0 };
  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={isInView ? animate : initial}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/* ------------------------------------------------------------------ */
/*  Phone Mockup with 3D Tilt & Typing Bubble (Hero)                  */
/* ------------------------------------------------------------------ */
const HeroPhoneMockup: React.FC = () => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  return (
    <div className="mx-auto flex w-full max-w-[300px] sm:max-w-[360px] select-none justify-center [perspective:1200px]">
      <motion.div
        initial={{ opacity: 0, y: 30, rotateY: -12, rotateX: 4 }}
        animate={{ opacity: 1, y: 0, rotateY: -6, rotateX: 2 }}
        whileHover={{ rotateY: 0, rotateX: 0, scale: 1.02 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative flex h-[580px] sm:h-[640px] w-full flex-col justify-between overflow-hidden rounded-[36px] sm:rounded-[44px] border border-border bg-card p-3.5 sm:p-4 shadow-2xl"
      >
        {/* Phone Notch */}
        <div className="mx-auto mb-2 h-6 w-28 shrink-0 rounded-b-2xl bg-foreground/10" />

        {/* Examiner Header */}
        <div className="flex shrink-0 items-center justify-between border-b border-border/80 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-indigo-600 text-sm font-bold text-white shadow-sm">
              <GraduationCap size={18} />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-bold text-foreground">Examiner Gordon</span>
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
              </div>
              <span className="text-[11px] font-medium text-emerald-500">
                ● Live Mock · Part 1: Hometown
              </span>
            </div>
          </div>
          <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 text-[10px] font-black text-amber-500">
            Band 8.5
          </span>
        </div>

        {/* Chat Bubbles */}
        <div className="no-scrollbar flex-1 space-y-3 overflow-y-auto py-3">
          {/* Examiner Question 1 */}
          <div className="rounded-bl-xs max-w-[90%] space-y-1 rounded-2xl border border-border bg-muted/80 p-3 text-sm text-foreground">
            <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
              <span>🇬🇧 Examiner</span>
            </div>
            <p className="text-[13px] leading-relaxed">
              "Good afternoon. Could you tell me a little bit about your hometown?"
            </p>
          </div>

          {/* Candidate Answer */}
          <div className="rounded-br-xs ml-auto max-w-[92%] space-y-1.5 rounded-2xl bg-primary p-3 text-sm text-primary-foreground shadow-sm">
            <p className="text-[13px] leading-relaxed">
              "Certainly! I come from Samarkand, a renowned historic city famous for its breathtaking Silk Road architecture and hospitable community."
            </p>
          </div>

          {/* Live AI Band Assessment Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-2.5 text-xs"
          >
            <div className="flex items-center justify-between pb-1 text-[11px] font-bold text-amber-600 dark:text-amber-400">
              <span className="flex items-center gap-1">
                <span>🎯</span> Live Band Assessment
              </span>
              <span className="rounded-md bg-amber-500/20 px-1.5 py-0.5 text-[10px] font-black">
                Band 8.0
              </span>
            </div>
            <div className="grid grid-cols-2 gap-1 text-[10px] text-muted-foreground">
              <span>Fluency & Coherence: <b className="text-foreground">8.5</b></span>
              <span>Lexical Resource: <b className="text-foreground">8.0</b></span>
              <span>Grammar Accuracy: <b className="text-foreground">8.0</b></span>
              <span>Pronunciation: <b className="text-foreground">7.5</b></span>
            </div>
            <p className="mt-1.5 border-t border-amber-500/20 pt-1 text-[10px] text-muted-foreground">
              💡 <span className="font-semibold text-foreground">Band 8+ Collocations:</span> "renowned historic city", "breathtaking architecture".
            </p>
          </motion.div>

          {/* Examiner Follow-up */}
          <div className="rounded-bl-xs max-w-[90%] space-y-1 rounded-2xl border border-border bg-muted/80 p-3 text-sm text-foreground">
            <p className="text-[13px] leading-relaxed">
              "Fascinating. And what are some of the main tourist attractions there?"
            </p>
          </div>

          {/* Audio Wave / Recording Indicator */}
          <div className="rounded-bl-xs inline-flex items-center gap-2 rounded-2xl border border-border/60 bg-muted/60 px-3 py-1.5">
            <span className="h-2 w-2 animate-ping rounded-full bg-primary" />
            <span className="text-[11px] font-semibold text-muted-foreground">Candidate speaking...</span>
            <div className="flex items-center gap-0.5">
              {[6, 12, 8, 16, 10, 14, 8].map((h, i) => (
                <span
                  key={i}
                  className="w-0.5 rounded-full bg-primary animate-pulse"
                  style={{ height: `${h}px`, animationDelay: `${i * 120}ms` }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Input Area */}
        <div className="flex h-12 shrink-0 items-center justify-between rounded-full border border-border bg-background px-4 text-xs text-muted-foreground shadow-inner">
          <span className="truncate">Speak into microphone to respond…</span>
          <button
            onClick={() => setIsPlayingAudio(!isPlayingAudio)}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md shadow-primary/30 transition-transform hover:scale-105 active:scale-95"
            title="Microphone"
          >
            <Mic size={15} />
          </button>
        </div>
      </motion.div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  Product UI Showcase Mockup                                        */
/* ------------------------------------------------------------------ */
const ProductShowcase: React.FC = () => {
  const [selectedBand, setSelectedBand] = useState('Band 7.5');
  const [selectedTopic, setSelectedTopic] = useState('🏙️ Hometown & Urban Life');
  const [showTranslation, setShowTranslation] = useState(false);
  const [activeHeart, setActiveHeart] = useState<Record<string, boolean>>({ Serene: true });

  const toggleHeart = (word: string) => {
    setActiveHeart((prev) => ({ ...prev, [word]: !prev[word] }));
  };

  const topics = [
    { label: '🏙️ Hometown & Urban Life', section: 'Part 1 · Speaking' },
    { label: '🌍 Environment & Climate', section: 'Part 3 · Global' },
    { label: '🎓 Higher Education & AI', section: 'Part 3 · Academic' },
    { label: '💼 Career & Remote Work', section: 'Part 2 · Cue Card' },
    { label: '🎨 Art & Cultural Heritage', section: 'Part 1 · Culture' },
    { label: '🤖 Technological Future', section: 'Part 3 · Abstract' },
  ];

  const bands = ['Band 6.0', 'Band 6.5', 'Band 7.0', 'Band 7.5', 'Band 8.0'];

  return (
    <div className="grid min-h-[580px] w-full grid-cols-1 overflow-hidden rounded-3xl border border-border bg-card shadow-2xl lg:grid-cols-[270px_1fr_310px]">
      {/* LEFT SIDEBAR (Bands & Topics) */}
      <aside className="hidden flex-col gap-5 border-r border-border bg-muted/20 p-5 lg:flex">
        <button className="flex h-10 w-full items-center justify-center gap-1.5 rounded-xl bg-primary text-xs font-bold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 active:scale-95">
          <Sparkles size={14} /> Yangi Mock Sessiyasi
        </button>

        {/* Band selector */}
        <div>
          <div className="mb-2 text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
            Maqsadli Band
          </div>
          <div className="grid grid-cols-5 gap-1">
            {bands.map((lvl) => (
              <button
                key={`band-${lvl}`}
                onClick={() => setSelectedBand(lvl)}
                className={`rounded-lg border py-1.5 text-[11px] font-bold transition-all ${
                  selectedBand === lvl
                    ? 'border-primary bg-primary/10 text-primary shadow-xs'
                    : 'border-border text-muted-foreground hover:text-foreground'
                }`}
              >
                {lvl.replace('Band ', '')}
              </button>
            ))}
          </div>
        </div>

        {/* Topics */}
        <div className="flex-1">
          <div className="mb-2 text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
            Mock Mavzulari
          </div>
          <div className="space-y-1">
            {topics.map((t) => (
              <button
                key={`topic-${t.label}`}
                onClick={() => setSelectedTopic(t.label)}
                className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-xs font-medium transition-all ${
                  selectedTopic === t.label
                    ? 'bg-primary/15 font-bold text-primary'
                    : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground'
                }`}
              >
                <span className="truncate">{t.label}</span>
                <span className="text-[10px] font-bold opacity-60 shrink-0 ml-1">{t.section}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Recent Mocks */}
        <div className="border-t border-border/80 pt-3">
          <div className="mb-1.5 text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
            So‘nggi Mocklar
          </div>
          <div className="space-y-1 text-xs text-muted-foreground">
            <div className="cursor-pointer rounded-lg px-2 py-1 hover:bg-muted/40 flex items-center justify-between">
              <span>Hometown & City</span>
              <b className="text-amber-500 font-bold">Band 8.0</b>
            </div>
            <div className="cursor-pointer rounded-lg px-2 py-1 hover:bg-muted/40 flex items-center justify-between">
              <span>Education Essay</span>
              <b className="text-indigo-500 font-bold">Band 7.5</b>
            </div>
          </div>
        </div>
      </aside>

      {/* CENTER MAIN CHAT */}
      <main className="flex min-w-0 flex-col bg-background/50">
        {/* Top Coach Bar */}
        <div className="flex items-center gap-3 border-b border-border bg-card/60 px-5 py-3.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-indigo-600 text-xs font-bold text-white shadow-xs">
            <GraduationCap size={16} />
          </div>
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-foreground">
              <span>Examiner Gordon (AI Examiner)</span>
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            <span className="text-[11px] text-muted-foreground">
              {selectedTopic} · {selectedBand} · Cambridge Rubric
            </span>
          </div>

          <div className="ml-auto flex items-center gap-3">
            <div className="hidden items-center gap-2 text-xs font-semibold text-muted-foreground sm:flex">
              <span>Bugun 12/15 daq</span>
              <div className="h-1.5 w-20 overflow-hidden rounded-full bg-muted">
                <div className="h-full w-[80%] rounded-full bg-gradient-to-r from-primary to-indigo-600" />
              </div>
            </div>
            <span className="flex items-center gap-1 rounded-md bg-amber-500/10 px-2 py-0.5 text-xs font-black text-amber-500">
              <Flame size={14} className="fill-amber-500" /> 14 kun
            </span>
          </div>
        </div>

        {/* Chat Message Area */}
        <div className="flex-1 space-y-4 overflow-y-auto p-5 sm:p-6">
          {/* Examiner Message 1 */}
          <div className="flex max-w-[92%] items-start gap-3">
            <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-indigo-600 text-xs font-bold text-white">
              <GraduationCap size={14} />
            </div>
            <div className="space-y-2">
              <div className="rounded-tl-xs rounded-2xl border border-border bg-card p-3.5 text-sm leading-relaxed text-foreground">
                Why do you think some individuals prefer residing in tranquil rural areas rather than bustling metropolitan cities?
              </div>
              <div className="flex flex-wrap gap-1.5 text-[11px] font-semibold text-muted-foreground">
                <button className="flex items-center gap-1 rounded-md bg-muted px-2.5 py-1 hover:bg-muted/80">
                  <Volume2 size={12} /> Tinglash (UK Ovoz)
                </button>
                <button
                  onClick={() => setShowTranslation(!showTranslation)}
                  className="flex items-center gap-1 rounded-md bg-muted px-2.5 py-1 hover:bg-muted/80"
                >
                  🇺🇿 Tarjima
                </button>
                <button className="flex items-center gap-1 rounded-md bg-muted px-2.5 py-1 hover:bg-muted/80">
                  ⚡ Band 9 Model
                </button>
              </div>
              {showTranslation && (
                <p className="text-xs italic text-muted-foreground bg-muted/40 p-2 rounded-lg">
                  Nima uchun ba'zi insonlar gavjum metropoliyalardan ko'ra tinch qishloq joylarda yashashni afzal ko'radilar deb o'ylaysiz?
                </p>
              )}
            </div>
          </div>

          {/* User Message + Smart Correction Card */}
          <div className="ml-auto flex max-w-[92%] items-start justify-end gap-3">
            <div className="space-y-2 text-right">
              <div className="rounded-tr-xs inline-block rounded-2xl bg-primary p-3.5 text-left text-sm leading-relaxed text-primary-foreground shadow-sm">
                In my perspective, rural areas offer a peaceful atmosphere away from traffic jams and loud noise.
              </div>

              {/* Correction Card */}
              <div className="space-y-1.5 rounded-xl border border-amber-500/25 bg-amber-500/10 p-3 text-left text-xs">
                <div className="flex items-center justify-between text-[11px] font-bold text-amber-500">
                  <span className="flex items-center gap-1">
                    <span>✏️</span> Band 8.5 Leksik & Grammatik Yaxshilanish
                  </span>
                  <span className="rounded-md bg-amber-500/20 px-1.5 py-0.5 text-[10px] font-black">
                    Lexical Resource 8.5
                  </span>
                </div>
                <div className="text-[13px] leading-relaxed text-foreground">
                  In my perspective, rural regions{' '}
                  <s className="font-bold text-rose-500 decoration-rose-500 decoration-2">
                    offer a peaceful atmosphere
                  </s>{' '}
                  <u className="border-b-2 border-emerald-500 font-bold text-emerald-500 no-underline">
                    provide an exceptionally serene sanctuary
                  </u>{' '}
                  far away from{' '}
                  <s className="font-bold text-rose-500 decoration-rose-500 decoration-2">
                    traffic jams
                  </s>{' '}
                  <u className="border-b-2 border-emerald-500 font-bold text-emerald-500 no-underline">
                    chronic traffic congestion
                  </u>{' '}
                  and{' '}
                  <u className="border-b-2 border-emerald-500 font-bold text-emerald-500 no-underline">
                    pervasive noise pollution
                  </u>.
                </div>
                <p className="text-[11px] leading-relaxed text-muted-foreground">
                  💡 <b className="text-foreground">Examiner maslahati:</b> "peaceful" so‘zi o‘rniga <b className="text-foreground">serene sanctuary</b> va "traffic jams" o‘rniga <b className="text-foreground">chronic traffic congestion</b> ishlatish sizning Lexical Resource balingizni darhol 8.5+ ga ko‘taradi.
                </p>
              </div>
            </div>
            <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/20 text-xs font-bold text-primary">
              YOU
            </div>
          </div>

          {/* Examiner Message 2 */}
          <div className="flex max-w-[92%] items-start gap-3">
            <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-indigo-600 text-xs font-bold text-white">
              <GraduationCap size={14} />
            </div>
            <div className="space-y-2">
              <div className="rounded-tl-xs rounded-2xl border border-border bg-card p-3.5 text-sm leading-relaxed text-foreground">
                That is a well-reasoned argument. How might this dynamic transform with the rise of remote working and digital technologies?
              </div>
              <div className="flex flex-wrap gap-1.5 text-[11px] font-semibold text-muted-foreground">
                <button className="flex items-center gap-1 rounded-md bg-muted px-2.5 py-1 hover:bg-muted/80">
                  <Volume2 size={12} /> Tinglash
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Chat Input Bar */}
        <div className="border-t border-border bg-card/40 p-4">
          <div className="flex h-12 items-center gap-2 rounded-full border border-border bg-background px-4 text-xs text-muted-foreground shadow-xs">
            <span className="flex-1 truncate">Javobingizni mikrofonga gapiring yoki yozing…</span>
            <span className="hidden items-center gap-1 rounded-full border border-border bg-muted/40 px-2.5 py-1 text-[11px] font-medium sm:inline-flex">
              ⏱ 45s taymer
            </span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Mic size={16} />
            </span>
            <button className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xs hover:opacity-90 transition-transform active:scale-95">
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </main>

      {/* RIGHT SIDEBAR (Vocabulary & Examiner Weak Spots) */}
      <aside className="hidden flex-col gap-5 border-l border-border bg-muted/20 p-5 lg:flex">
        <div>
          <div className="mb-3 text-[11px] font-bold uppercase tracking-wider text-muted-foreground flex items-center justify-between">
            <span>Band 8+ So‘zlar</span>
            <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-bold text-primary">3 ta</span>
          </div>
          <div className="space-y-2">
            {[
              {
                word: 'Serene',
                reading: 'adj · /səˈriːn/',
                meaning: 'osoyishta, tinch, sokin (sanctuary)',
              },
              {
                word: 'Congestion',
                reading: 'noun · /kənˈdʒes.tʃən/',
                meaning: 'tirbandlik, tiqilinch (traffic congestion)',
              },
              {
                word: 'Pervasive',
                reading: 'adj · /pəˈveɪ.sɪv/',
                meaning: 'hamma yoqqa tarqalgan, keng yoyilgan',
              },
            ].map((item) => (
              <div
                key={`word-${item.word}`}
                className="space-y-0.5 rounded-xl border border-border bg-card p-3 shadow-xs"
              >
                <div className="flex items-center justify-between text-sm font-bold text-foreground">
                  <span>{item.word}</span>
                  <button
                    onClick={() => toggleHeart(item.word)}
                    className={`cursor-pointer text-xs ${
                      activeHeart[item.word]
                        ? 'text-rose-500'
                        : 'text-muted-foreground hover:text-rose-400'
                    }`}
                  >
                    {activeHeart[item.word] ? '♥' : '♡'}
                  </button>
                </div>
                <div className="text-[11px] text-muted-foreground">{item.reading}</div>
                <div className="text-xs font-medium text-foreground/80">{item.meaning}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Weak Spots & Rubric Tips */}
        <div className="space-y-2 rounded-xl border border-primary/20 bg-primary/5 p-3.5">
          <div className="flex items-center gap-1.5 text-xs font-bold text-foreground">
            <span>⚠️</span> E'tibor qaratish lozim
          </div>
          <div className="flex flex-wrap gap-1.5">
            <span className="rounded-full border border-primary/20 bg-primary/10 px-2.5 py-0.5 text-[11px] font-semibold text-primary">
              Murakkab bog‘lovchilar
            </span>
            <span className="rounded-full border border-primary/20 bg-primary/10 px-2.5 py-0.5 text-[11px] font-semibold text-primary">
              Collocation aniqligi
            </span>
            <span className="rounded-full border border-primary/20 bg-primary/10 px-2.5 py-0.5 text-[11px] font-semibold text-primary">
              Intonatsiya va urg‘u
            </span>
          </div>
        </div>

        {/* Estimated Band */}
        <div className="mt-auto border-t border-border/80 pt-3 text-center text-xs text-muted-foreground">
          Taxminiy Speaking Band: <b className="font-black text-emerald-500">8.0 ↑ (Top 5%)</b>
        </div>
      </aside>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  Main Landing Page                                                 */
/* ------------------------------------------------------------------ */
const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedLessonTab, setSelectedLessonTab] = useState('Band 7.5');

  useEffect(() => {
    if (typeof window === 'undefined') return;
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
    try {
      localStorage.setItem('study_planner_theme', 'dark');
    } catch {}
  }, []);

  useSEO({
    title: t('landing.seoTitle'),
    description: t('landing.seoDescription'),
    canonical: '/',
    keywords: t('landing.seoKeywords'),
  });

  const isEn = language === 'en';
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { label: t('landing.navFeatures'), target: 'features' },
    { label: t('landing.navSpeaking'), target: 'app' },
    { label: t('landing.navRoadmap'), target: 'lessons' },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-background font-sans text-foreground transition-colors duration-200 selection:bg-primary/20 selection:text-primary">
      {/* ======== NAVBAR ======== */}
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl"
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Left: Logo */}
          <AppLogo size="md" />

          {/* Center: Nav links (desktop) */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link, idx) => (
              <button
                key={`nav-desktop-${link.target}-${idx}`}
                onClick={() => scrollTo(link.target)}
                className="rounded-lg px-3.5 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-muted/60 hover:text-foreground"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right: Controls */}
          <div className="flex items-center gap-2">
            {/* Language switcher (Segmented Desktop) */}
            <div className="flex items-center rounded-xl border border-border bg-card p-1 shadow-xs">
              <button
                onClick={() => setLanguage('uz')}
                className={`flex cursor-pointer items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-bold transition-all ${
                  language === 'uz'
                    ? 'bg-primary text-primary-foreground shadow-xs'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                title="Oʻzbek tiliga o'tish"
              >
                <UzbekistanFlag className="h-2.5 w-4" />
                <span>UZ</span>
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`flex cursor-pointer items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-bold transition-all ${
                  language === 'en'
                    ? 'bg-primary text-primary-foreground shadow-xs'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                title="Switch to English"
              >
                <UKFlag className="h-2.5 w-4" />
                <span>EN</span>
              </button>
            </div>



            {/* Login (desktop) */}
            <button
              onClick={() => navigate('/login')}
              className="hidden rounded-lg px-3.5 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-muted/60 hover:text-foreground md:block"
            >
              {t('landing.navLogin')}
            </button>

            {/* CTA (desktop) */}
            <button
              onClick={() => navigate('/register')}
              className="hidden cursor-pointer items-center gap-1.5 rounded-xl bg-primary px-4 py-2 text-sm font-bold text-primary-foreground transition-all duration-200 hover:scale-[1.03] hover:bg-primary/90 hover:shadow-md hover:shadow-primary/20 active:scale-95 md:flex"
            >
              <span>{t('landing.navCta')}</span>
              <ArrowRight size={15} />
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-muted md:hidden"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="border-t border-border bg-background/95 backdrop-blur-xl md:hidden"
          >
            <div className="space-y-2 px-4 py-4">
              {navLinks.map((link, idx) => (
                <button
                  key={`nav-mobile-${link.target}-${idx}`}
                  onClick={() => scrollTo(link.target)}
                  className="block w-full rounded-lg px-3 py-2.5 text-left text-sm font-semibold text-foreground hover:bg-muted"
                >
                  {link.label}
                </button>
              ))}

              {/* Mobile Lang & Theme Row */}
              <div className="flex flex-col gap-2 border-t border-border pb-1 pt-2">
                <div className="flex items-center rounded-xl border border-border bg-card p-1">
                  <button
                    onClick={() => setLanguage('uz')}
                    className={`flex flex-1 cursor-pointer items-center justify-center gap-1.5 rounded-lg py-2 text-xs font-bold transition-all ${
                      language === 'uz'
                        ? 'bg-primary text-primary-foreground shadow-xs'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <UzbekistanFlag className="h-2.5 w-4" />
                    <span>Oʻzbekcha</span>
                  </button>
                  <button
                    onClick={() => setLanguage('en')}
                    className={`flex flex-1 cursor-pointer items-center justify-center gap-1.5 rounded-lg py-2 text-xs font-bold transition-all ${
                      language === 'en'
                        ? 'bg-primary text-primary-foreground shadow-xs'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <UKFlag className="h-2.5 w-4" />
                    <span>EN</span>
                  </button>
                </div>
              </div>

              <hr className="border-border" />
              <button
                onClick={() => {
                  navigate('/login');
                  setMobileMenuOpen(false);
                }}
                className="block w-full rounded-lg px-3 py-2.5 text-left text-sm font-semibold text-foreground hover:bg-muted"
              >
                {t('landing.navLogin')}
              </button>
              <button
                onClick={() => {
                  navigate('/register');
                  setMobileMenuOpen(false);
                }}
                className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-bold text-primary-foreground shadow-md shadow-primary/20 hover:bg-primary/90"
              >
                {t('landing.navCta')} <ArrowRight size={15} />
              </button>
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* ======== ACADEMIC BACKDROP ACCENTS ======== */}
      <div className="pointer-events-none absolute left-6 top-24 -z-10 hidden sm:block select-none text-[160px] font-black tracking-tighter leading-none text-foreground opacity-[0.02] sm:text-[240px]">
        IELTS
      </div>
      <div className="pointer-events-none absolute right-6 top-[850px] -z-10 hidden sm:block select-none text-[140px] font-black tracking-tighter leading-none text-foreground opacity-[0.02] sm:text-[200px]">
        BAND 9
      </div>

      {/* ======== HERO SECTION ======== */}
      <section className="relative overflow-hidden px-4 pb-20 pt-12 sm:px-6 lg:px-8 lg:pb-28 lg:pt-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          {/* Left Column (Copywriting & CTAs) */}
          <div className="space-y-6 lg:space-y-8">
            {/* Eyebrow */}
            <FadeIn
              offsetY={10}
              delay={0.05}
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1.5 text-xs font-bold tracking-wide text-primary"
            >
              <span className="h-2 w-2 shrink-0 animate-ping rounded-full bg-primary" />
              <span>{t('landing.eyebrow')}</span>
            </FadeIn>

            {/* Main Headline */}
            <FadeIn offsetY={16} delay={0.12}>
              <h1
                className={`font-display text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl ${isEn ? 'leading-[1.12]' : 'leading-[1.08]'}`}
              >
                {isEn ? (
                  <>
                    Achieve IELTS <br />
                    <em className="relative inline-block not-italic text-primary">Band 7.5+.</em>{' '}
                    <br />
                    Starting Today.
                  </>
                ) : (
                  <>
                    IELTS Band 7.5+ ga <br />
                    <em className="relative inline-block not-italic text-primary">
                      AI Examiner bilan
                    </em>{' '}
                    <br />
                    erishing.
                  </>
                )}
              </h1>
            </FadeIn>

            {/* Description */}
            <FadeIn
              offsetY={14}
              delay={0.2}
              className="max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              {t('landing.description')}
            </FadeIn>

            {/* Action Buttons */}
            <FadeIn offsetY={12} delay={0.28} className="flex flex-col gap-3 pt-2 sm:flex-row">
              <button
                onClick={() => navigate('/register')}
                className="flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-base font-bold text-primary-foreground shadow-md shadow-primary/25 transition-all duration-200 hover:scale-[1.02] hover:bg-primary/90 active:scale-95"
              >
                {t('landing.ctaPrimary')}
              </button>
              <button
                onClick={() => scrollTo('app')}
                className="cursor-pointer rounded-xl border border-border bg-card px-7 py-3.5 text-base font-semibold text-foreground transition-all duration-200 hover:scale-[1.01] hover:bg-muted active:scale-95"
              >
                {t('landing.ctaSecondary')}
              </button>
            </FadeIn>

            {/* Social Proof */}
            <FadeIn
              offsetY={10}
              delay={0.36}
              className="flex items-center gap-4 pt-2 text-sm text-muted-foreground"
            >
              <div className="flex -space-x-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-background bg-blue-600 text-xs font-bold text-white shadow-xs">
                  8.5
                </span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-background bg-indigo-600 text-xs font-bold text-white shadow-xs">
                  8.0
                </span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-background bg-emerald-600 text-xs font-bold text-white shadow-xs">
                  7.5
                </span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-background bg-amber-500 text-xs font-bold text-white shadow-xs">
                  8.0
                </span>
              </div>
              <div>
                <span className="font-bold text-amber-500">★★★★★</span>{' '}
                <b className="font-bold text-foreground">4.9/5</b> · 1,500+ nomzodlar
              </div>
            </FadeIn>
          </div>

          {/* Right Column (Interactive 3D Phone Mockup) */}
          <FadeIn delay={0.3} className="flex justify-center">
            <HeroPhoneMockup />
          </FadeIn>
        </div>
      </section>

      {/* ======== FEATURES SECTION ======== */}
      <section
        id="features"
        className="border-t border-border/60 px-4 py-20 sm:px-6 lg:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-6xl space-y-14">
          <FadeIn className="mx-auto max-w-2xl space-y-3 text-center">
            <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">
              <span>{t('landing.navFeatures')}</span>
              <span className="text-sm font-semibold text-muted-foreground">· IELTS MODULLARI</span>
            </div>
            <h2 className="font-display text-3xl font-black tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {t('landing.featuresTitle')}
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              {t('landing.featuresSubtitle')}
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Card 1 */}
            <FadeIn delay={0.05}>
              <div className="group relative h-full space-y-4 overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-xs transition-all duration-300 hover:border-primary/40 hover:shadow-xl">
                <span className="pointer-events-none absolute -right-3 -top-5 text-7xl font-black tracking-tighter text-foreground opacity-[0.03] transition-opacity group-hover:opacity-[0.06]">
                  SPEAK
                </span>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-2xl text-primary shadow-xs">
                  <Mic size={24} />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {t('landing.featureSpeakingTitle')}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {t('landing.featureSpeakingDesc')}
                </p>
              </div>
            </FadeIn>

            {/* Card 2 */}
            <FadeIn delay={0.12}>
              <div className="group relative h-full space-y-4 overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-xs transition-all duration-300 hover:border-primary/40 hover:shadow-xl">
                <span className="pointer-events-none absolute -right-3 -top-5 text-7xl font-black tracking-tighter text-foreground opacity-[0.03] transition-opacity group-hover:opacity-[0.06]">
                  WRITE
                </span>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-2xl text-cyan-500 shadow-xs">
                  <BookOpen size={24} />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {t('landing.featureDiagTitle')}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {t('landing.featureDiagDesc')}
                </p>
              </div>
            </FadeIn>

            {/* Card 3 */}
            <FadeIn delay={0.19}>
              <div className="group relative h-full space-y-4 overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-xs transition-all duration-300 hover:border-primary/40 hover:shadow-xl">
                <span className="pointer-events-none absolute -right-3 -top-5 text-7xl font-black tracking-tighter text-foreground opacity-[0.03] transition-opacity group-hover:opacity-[0.06]">
                  SCORE
                </span>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/10 text-2xl text-amber-500 shadow-xs">
                  <Target size={24} />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {t('landing.featurePlanTitle')}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {t('landing.featurePlanDesc')}
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ======== 3-STEP FLOW SECTION ======== */}
      <section className="border-y border-border/60 bg-muted/20 px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-5xl space-y-14">
          <FadeIn className="mx-auto max-w-2xl space-y-3 text-center">
            <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">
              <span>QANDAY ISHLAYDI</span>
              <span className="text-sm font-semibold text-muted-foreground">· 3 QADAMDA TAYYORGARLIK</span>
            </div>
            <h2 className="font-display text-3xl font-black tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {t('landing.stepsTitle')}
            </h2>
          </FadeIn>

          <div className="relative grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Step 1 */}
            <FadeIn delay={0.05} className="space-y-3 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary bg-background text-lg font-black text-primary shadow-xs">
                1
              </div>
              <span className="block text-xs font-bold tracking-wider uppercase text-primary">
                BAND LEVEL
              </span>
              <h4 className="text-lg font-bold text-foreground">{t('landing.step1Title')}</h4>
              <p className="mx-auto max-w-xs text-sm leading-relaxed text-muted-foreground">
                {t('landing.step1Desc')}
              </p>
            </FadeIn>

            {/* Step 2 */}
            <FadeIn delay={0.12} className="space-y-3 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border-2 border-indigo-500 bg-background text-lg font-black text-indigo-500 shadow-xs">
                2
              </div>
              <span className="block text-xs font-bold tracking-wider uppercase text-indigo-500">
                MOCK MODULE
              </span>
              <h4 className="text-lg font-bold text-foreground">{t('landing.step2Title')}</h4>
              <p className="mx-auto max-w-xs text-sm leading-relaxed text-muted-foreground">
                {t('landing.step2Desc')}
              </p>
            </FadeIn>

            {/* Step 3 */}
            <FadeIn delay={0.19} className="space-y-3 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border-2 border-emerald-500 bg-background text-lg font-black text-emerald-500 shadow-xs">
                3
              </div>
              <span className="block text-xs font-bold tracking-wider uppercase text-emerald-500">
                AI EXAMINER
              </span>
              <h4 className="text-lg font-bold text-foreground">{t('landing.step3Title')}</h4>
              <p className="mx-auto max-w-xs text-sm leading-relaxed text-muted-foreground">
                {t('landing.step3Desc')}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ======== PRODUCT UI SHOWCASE ======== */}
      <section id="app" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl space-y-12">
          <FadeIn className="mx-auto max-w-2xl space-y-3 text-center">
            <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">
              <span>MAHSULOT</span>
              <span className="text-sm font-semibold text-muted-foreground">· AI SIMULATOR</span>
            </div>
            <h2 className="font-display text-3xl font-black tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {t('landing.speakingTitle')}
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              {t('landing.speakingSubtitle')}
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <ProductShowcase />
          </FadeIn>
        </div>
      </section>

      {/* ======== IELTS ROADMAP SECTION ======== */}
      <section
        id="lessons"
        className="border-y border-border/60 bg-muted/20 px-4 py-20 sm:px-6 lg:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-5xl space-y-10">
          <FadeIn className="mx-auto max-w-2xl space-y-3 text-center">
            <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">
              <span>BOSQICHLAR</span>
              <span className="text-sm font-semibold text-muted-foreground">· BAND ROADMAP</span>
            </div>
            <h2 className="font-display text-3xl font-black tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {t('landing.roadmapTitle')}
            </h2>
          </FadeIn>

          {/* Tabs */}
          <div className="flex justify-center gap-2 flex-wrap">
            {['Band 6.0', 'Band 6.5', 'Band 7.0', 'Band 7.5', 'Band 8.0+'].map((tab) => (
              <button
                key={`lesson-tab-${tab}`}
                onClick={() => setSelectedLessonTab(tab)}
                className={`rounded-xl border px-5 py-2.5 text-sm font-bold transition-all ${
                  selectedLessonTab === tab
                    ? 'border-primary bg-primary/10 text-primary shadow-xs'
                    : 'border-transparent text-muted-foreground hover:bg-muted/60 hover:text-foreground'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Lesson Cards Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Module 1 (Done) */}
            <FadeIn delay={0.05}>
              <div className="relative h-full space-y-4 rounded-2xl border border-emerald-500/40 bg-card p-6 shadow-xs">
                <div className="absolute right-4 top-4 flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white shadow-xs">
                  <Check size={14} />
                </div>
                <div className="space-y-1">
                  <div className="text-xl font-bold text-foreground">Speaking Part 2 Cue Cards</div>
                  <div className="text-sm text-muted-foreground">2-Daqiqalik nutq va ravonlik tizimi</div>
                </div>
                <div className="flex items-center gap-2 text-sm font-bold text-emerald-500">
                  <span>100% o‘zlashtirildi</span>
                </div>
                <div className="flex items-center gap-3 border-t border-border pt-2 text-xs text-muted-foreground">
                  <span>📖 35 ta ibora</span>
                  <span>✎ 12 mock</span>
                  <span>⏱ 15 daq</span>
                </div>
              </div>
            </FadeIn>

            {/* Module 2 (In progress) */}
            <FadeIn delay={0.12}>
              <div className="relative h-full space-y-4 rounded-2xl border border-primary/40 bg-card p-6 shadow-xs">
                <div className="space-y-1">
                  <div className="text-xl font-bold text-foreground">
                    Writing Task 1: Grafik Tahlili
                  </div>
                  <div className="text-sm text-muted-foreground">Dinamik diagrammalar va trendlar</div>
                </div>
                <div className="flex items-center gap-2 text-sm font-bold text-primary">
                  <span>65% bajarildi</span>
                </div>
                <div className="flex items-center gap-3 border-t border-border pt-2 text-xs text-muted-foreground">
                  <span>📖 24 ta bog‘lovchi</span>
                  <span>✎ 8 insho</span>
                  <span>⏱ 20 daq</span>
                </div>
              </div>
            </FadeIn>

            {/* Module 3 (Locked) */}
            <FadeIn delay={0.19}>
              <div className="relative h-full space-y-4 rounded-2xl border border-border/80 bg-card p-6 opacity-75 shadow-xs">
                <div className="absolute right-4 top-4 text-muted-foreground">
                  <Lock size={18} />
                </div>
                <div className="space-y-1">
                  <div className="text-xl font-bold text-foreground">Writing Task 2: Argument Esse</div>
                  <div className="text-sm text-muted-foreground">Band 8.0+ darajasidagi esse strukturasi</div>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>Band 7.0 dan so‘ng ochiladi</span>
                </div>
                <div className="flex items-center gap-3 border-t border-border pt-2 text-xs text-muted-foreground">
                  <span>📖 40 ta kollokatsiya</span>
                  <span>✎ 10 esse</span>
                  <span>⏱ 40 daq</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ======== FINAL CTA SECTION ======== */}
      <section
        id="final-cta"
        className="border-t border-border/60 px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-4xl space-y-6 text-center">
          <FadeIn offsetY={20} delay={0.1} className="space-y-3">
            <h2 className="font-display text-3xl font-black tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {t('landing.finalCtaTitle')}
            </h2>
            <p className="mx-auto max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {t('landing.finalCtaDesc')}
            </p>
          </FadeIn>
          <FadeIn offsetY={12} delay={0.2} className="pt-2">
            <button
              onClick={() => navigate('/register')}
              className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-200 hover:scale-[1.03] hover:bg-primary/90 active:scale-95"
            >
              {t('landing.finalCtaButton')}
            </button>
          </FadeIn>
        </div>
      </section>

      {/* ======== FOOTER ======== */}
      <footer className="border-t border-border bg-card/40 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {/* Brand Column */}
            <div className="space-y-3 md:col-span-1">
              <AppLogo size="md" />
              <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                {t('landing.footerSub')}
              </p>
            </div>

            {/* Links Column 1 */}
            <div className="space-y-2">
              <h5 className="text-xs font-bold uppercase tracking-wider text-foreground">
                IELTS Modullari
              </h5>
              <div className="space-y-1.5 text-xs text-muted-foreground sm:text-sm">
                <div>
                  <a href="#app" className="hover:text-foreground">
                    Speaking Mock
                  </a>
                </div>
                <div>
                  <a href="/ielts?tab=writing" className="hover:text-foreground">
                    Writing Evaluator
                  </a>
                </div>
                <div>
                  <a href="/ielts?tab=reading_listening" className="hover:text-foreground">
                    Reading & Listening
                  </a>
                </div>
              </div>
            </div>

            {/* Links Column 2 */}
            <div className="space-y-2">
              <h5 className="text-xs font-bold uppercase tracking-wider text-foreground">
                Resurslar
              </h5>
              <div className="space-y-1.5 text-xs text-muted-foreground sm:text-sm">
                <div>
                  <a href="/ielts" className="hover:text-foreground">
                    IELTS Master Hub
                  </a>
                </div>
                <div>
                  <a href="/vocabulary?lang=en" className="hover:text-foreground">
                    Academic Vocabulary
                  </a>
                </div>
                <div>
                  <a href="/flashcards" className="hover:text-foreground">
                    Fleshkardlar (Anki SRS)
                  </a>
                </div>
              </div>
            </div>

            {/* Links Column 3 */}
            <div className="space-y-2">
              <h5 className="text-xs font-bold uppercase tracking-wider text-foreground">
                Platforma
              </h5>
              <div className="space-y-1.5 text-xs text-muted-foreground sm:text-sm">
                <div>
                  <a href="/focus" className="hover:text-foreground">
                    Pomodoro Focus
                  </a>
                </div>
                <div>
                  <a href="/login" className="hover:text-foreground">
                    Kirish
                  </a>
                </div>
                <div>
                  <a href="/register" className="hover:text-foreground">
                    Ro‘yxatdan o‘tish
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
            <span>{t('landing.footerCopy')}</span>
            <span className="text-xs font-semibold tracking-wider text-muted-foreground">
              Official Cambridge & IDP Exam Format Alignment
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
