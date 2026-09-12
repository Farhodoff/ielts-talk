import React, { useState, Suspense, lazy } from 'react';
import {
  Target,
  BookOpen,
  GraduationCap,
  Headphones,
  PenTool,
  Mic,
  Sparkles,
  Compass,
} from 'lucide-react';
import { useSearchParams, Link } from 'react-router-dom';
import { RealWeaknessTracker } from '../components/ielts/RealWeaknessTracker';
import { DailyTargetHub } from '../components/ielts/DailyTargetHub';
import { useSEO } from '../hooks/useSEO';
import { useFreemiumQuota } from '../hooks/useFreemiumQuota';

const IeltsMasterRoadmapView = lazy(() => import('../components/ielts/IeltsMasterRoadmapView'));
const PersonalPlanPage = lazy(() => import('./PersonalPlanPage'));
const IeltsGrammarMaster = lazy(() => import('../components/ielts/IeltsGrammarMaster'));
const VocabularyGenerator = lazy(() =>
  import('../components/ielts/VocabularyGenerator').then((m) => ({
    default: m.VocabularyGenerator,
  })),
);
const IeltsReadingListeningMockPage = lazy(() =>
  import('./IeltsReadingListeningMockPage').then((m) => ({
    default: m.IeltsReadingListeningMockPage,
  })),
);
const IeltsWritingPage = lazy(() => import('./IeltsWritingPage'));
const DailyReflectionModal = lazy(() =>
  import('../components/ielts/DailyReflectionModal').then((m) => ({
    default: m.DailyReflectionModal,
  })),
);

export const IeltsHubPage: React.FC = () => {
  useSEO({
    title: 'IELTS Master Hub (Bosqichlar Xaritasi, Shaxsiy Reja, Mocks, Writing)',
    description:
      'IELTS Band 7.5+ uchun maxsus 4 bosqichli strategik xarita, Speaking Makkar 2026, Writing Task 1 & 2 baholash, Reading & Listening mock testlari va Band 7.5 Grammatika.',
    canonical: '/ielts',
    keywords:
      "IELTS 0 dan tayyorgarlik, IELTS roadmap, IELTS mock exam O'zbekiston, IELTS Speaking AI, IELTS Writing baholash, IELTS Band 7 grammatika",
  });

  const [searchParams, setSearchParams] = useSearchParams();
  const tabParam = searchParams.get('tab');
  const topicParam = searchParams.get('topic');
  const activeTab = tabParam || (topicParam ? 'grammar' : 'roadmap');

  const [isReflectionOpen, setIsReflectionOpen] = useState(false);
  const { remainingSpeaking, remainingWriting, isPro, isAdmin } = useFreemiumQuota();
  const isUnlimited = isAdmin || isPro;

  const handleTabChange = (tab: string) => {
    setSearchParams({ tab });
  };

  return (
    <div className="mx-auto max-w-7xl max-w-full space-y-4 overflow-x-hidden p-3 pb-20 sm:space-y-6 sm:p-4 sm:pb-16 md:space-y-8 md:p-8">
      {/* When topicParam is present, provide a distraction-free focused single-topic header */}
      {topicParam ? (
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-800 bg-slate-900/90 p-3 shadow-lg backdrop-blur-md sm:p-4">
          <button
            onClick={() => {
              const next = new URLSearchParams(searchParams);
              next.delete('topic');
              next.set('tab', 'grammar');
              setSearchParams(next);
            }}
            className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-slate-800 px-4 py-2 text-xs font-bold text-slate-200 shadow-sm transition hover:bg-slate-700"
          >
            ← Barcha Grammatika Darslariga Qaytish
          </button>
          <div className="flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/15 px-3 py-1 text-xs font-extrabold text-amber-400">
            <Sparkles size={14} className="animate-pulse" />
            <span>🎯 Fokus Rejim: Shaxsiy Dars</span>
          </div>
        </div>
      ) : (
        <>
          {/* Header Banner: Desktop Full Banner */}
          <div className="relative hidden overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-r from-slate-900 via-blue-950 to-indigo-950 p-6 shadow-2xl backdrop-blur-xl md:block md:p-8">
            <div className="pointer-events-none absolute -right-12 -top-12 h-64 w-64 rounded-full bg-blue-500/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-amber-500/10 blur-3xl" />

            <div className="relative z-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
              <div className="max-w-2xl space-y-1.5 sm:space-y-2">
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/15 px-2.5 py-1 text-[11px] font-bold text-blue-300 shadow-xs sm:px-3 sm:text-xs">
                  <GraduationCap size={14} />
                  <span>IELTS Talk Hub</span>
                </div>
                <h1 className="text-xl font-black tracking-tight text-white sm:text-2xl md:text-3xl">
                  {activeTab === 'roadmap'
                    ? '0 dan Band 8.0 gacha Xarita'
                    : activeTab === 'plan'
                      ? "Shaxsiy O'quv Rejasi"
                      : activeTab === 'writing'
                        ? 'Writing Mock & AI Examiner'
                        : activeTab === 'reading_listening'
                          ? 'Reading & Listening Mock'
                          : 'IELTS Grammatika Akademiyasi'}
                </h1>
                <p className="text-xs text-slate-300 sm:text-sm">
                  {activeTab === 'roadmap'
                    ? "Band 7.5+ uchun 4 bosqichli to'liq tayyorgarlik dasturi."
                    : activeTab === 'plan'
                      ? 'Kundalik va haftalik maqsadli vazifalar.'
                      : activeTab === 'writing'
                        ? 'Task 1 va Task 2 insholarini rasmiy mezonlarda tekshirish.'
                        : activeTab === 'reading_listening'
                          ? "Cambridge standarti bo'yicha to'liq testlar."
                          : 'Murphy qoidalari, amaliy misollar va har bir darsda 10+ testlar.'}
                </p>
              </div>

              <div className="flex w-full shrink-0 items-center gap-3 sm:w-auto">
                <Link
                  to="/ielts/speaking-mock"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2.5 text-xs font-black text-white shadow-lg shadow-blue-500/25 transition-all duration-200 hover:scale-105 hover:from-blue-500 hover:to-indigo-500 active:scale-95 sm:w-auto sm:px-5 sm:py-3"
                >
                  <Mic size={16} />
                  <span>Speaking Mock Boshlash</span>
                  <Sparkles size={14} />
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile Compact Header (Lightweight & Uncluttered) */}
          <div className="flex items-center justify-between gap-2 rounded-2xl border border-blue-500/20 bg-gradient-to-r from-slate-900 to-blue-950 px-3.5 py-2.5 shadow-md md:hidden">
            <div className="min-w-0">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-400">
                IELTS Master
              </span>
              <h1 className="truncate text-sm font-black text-white">
                {activeTab === 'roadmap'
                  ? 'Bosqichlar Xaritasi'
                  : activeTab === 'plan'
                    ? 'Shaxsiy Rejam'
                    : activeTab === 'writing'
                      ? 'Writing Mock'
                      : activeTab === 'reading_listening'
                        ? 'Reading & Listening'
                        : 'Band 7.5 Grammatika'}
              </h1>
            </div>
            <Link
              to="/ielts/speaking-mock"
              className="flex shrink-0 items-center gap-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-3 py-1.5 text-xs font-black text-white shadow-sm active:scale-95"
            >
              <Mic size={14} />
              <span>Mock</span>
            </Link>
          </div>

          {/* Freemium Daily Allowance Bar */}
          <div className="flex flex-wrap items-center justify-between gap-2.5 rounded-2xl border border-border bg-card/80 p-3 text-xs shadow-sm backdrop-blur-md sm:px-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-bold text-foreground text-xs">Bugungi Bepul Imkoniyatingiz:</span>
              <div className="flex items-center gap-2">
                <span
                  className={`rounded-full px-2.5 py-0.5 text-[11px] font-bold border ${
                    isUnlimited || remainingSpeaking > 0
                      ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20'
                      : 'bg-muted text-muted-foreground border-border'
                  }`}
                >
                  🎙️ Speaking: {isUnlimited ? 'Cheksiz ∞' : `${remainingSpeaking}/1`}
                </span>
                <span
                  className={`rounded-full px-2.5 py-0.5 text-[11px] font-bold border ${
                    isUnlimited || remainingWriting > 0
                      ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20'
                      : 'bg-muted text-muted-foreground border-border'
                  }`}
                >
                  ✍️ Writing: {isUnlimited ? 'Cheksiz ∞' : `${remainingWriting}/1`}
                </span>
              </div>
            </div>
            <Link
              to="/pricing"
              className="flex items-center gap-1 text-[11px] font-bold text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 hover:underline"
            >
              <span>⭐ Obuna & Cheksiz Tahlillar</span>
            </Link>
          </div>

          {/* Unified IELTS Navigation Tabs */}
          <div className="scrollbar-none flex max-w-full items-center gap-1 overflow-x-auto rounded-xl border border-border/80 bg-muted/40 p-1 sm:gap-1.5 sm:rounded-2xl sm:p-1.5">
            <button
              onClick={() => handleTabChange('roadmap')}
              className={`flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-lg px-3 py-2 text-xs font-black transition-all sm:gap-2 sm:rounded-xl sm:px-4 ${
                activeTab === 'roadmap'
                  ? 'bg-amber-600 text-white shadow-md'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Compass size={15} />
              <span>Bosqichlar Xaritasi</span>
            </button>

            <button
              onClick={() => handleTabChange('plan')}
              className={`flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-lg px-3 py-2 text-xs font-black transition-all sm:gap-2 sm:rounded-xl sm:px-4 ${
                activeTab === 'plan'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Target size={15} />
              <span>Shaxsiy Rejam</span>
            </button>

            <button
              onClick={() => handleTabChange('grammar')}
              className={`flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-lg px-3 py-2 text-xs font-black transition-all sm:gap-2 sm:rounded-xl sm:px-4 ${
                activeTab === 'grammar'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <BookOpen size={15} />
              <span>Grammatika</span>
            </button>

            <button
              onClick={() => handleTabChange('reading_listening')}
              className={`flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-lg px-3 py-2 text-xs font-black transition-all sm:gap-2 sm:rounded-xl sm:px-4 ${
                activeTab === 'reading_listening'
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Headphones size={15} />
              <span>Mock Testlar</span>
            </button>

            <button
              onClick={() => handleTabChange('writing')}
              className={`flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-lg px-3 py-2 text-xs font-black transition-all sm:gap-2 sm:rounded-xl sm:px-4 ${
                activeTab === 'writing'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <PenTool size={15} />
              <span>Writing Mock</span>
            </button>
          </div>
        </>
      )}

      {/* Tab Views */}
      <Suspense
        fallback={
          <div className="flex items-center justify-center p-12">
            <div className="border-3 h-8 w-8 animate-spin rounded-full border-amber-500 border-t-transparent" />
          </div>
        }
      >
        {/* Tab 0: 4-Stage Strategic Master Roadmap (0 to 8.0) */}
        {activeTab === 'roadmap' && !topicParam && (
          <div className="animate-in fade-in">
            <IeltsMasterRoadmapView />
          </div>
        )}

        {/* Tab 1: Personal Learning Plan & Schedule */}
        {activeTab === 'plan' && !topicParam && (
          <div className="animate-in fade-in">
            <PersonalPlanPage />
          </div>
        )}

        {/* Tab 2: Band 7.5 Grammar Academy & Vocab Tools */}
        {activeTab === 'grammar' && (
          <div className="space-y-8 animate-in fade-in">
            <IeltsGrammarMaster />
            {!topicParam && (
              <>
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  <RealWeaknessTracker />
                  <VocabularyGenerator />
                </div>
                <DailyTargetHub onOpenReflection={() => setIsReflectionOpen(true)} />
              </>
            )}
          </div>
        )}

        {/* Tab 3: Reading & Listening Mock Exam Simulator */}
        {activeTab === 'reading_listening' && (
          <div className="animate-in fade-in">
            <IeltsReadingListeningMockPage />
          </div>
        )}

        {/* Tab 4: Writing Mock & AI Evaluator */}
        {activeTab === 'writing' && (
          <div className="animate-in fade-in">
            <IeltsWritingPage />
          </div>
        )}
      </Suspense>

      {/* Daily Reflection Modal */}
      <Suspense fallback={null}>
        {isReflectionOpen && (
          <DailyReflectionModal
            isOpen={isReflectionOpen}
            onClose={() => setIsReflectionOpen(false)}
          />
        )}
      </Suspense>
    </div>
  );
};

export default IeltsHubPage;
