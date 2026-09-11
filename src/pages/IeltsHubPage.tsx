import React, { useState, Suspense, lazy } from 'react';
import { Target, BookOpen, GraduationCap, Headphones, PenTool, Mic, Sparkles, Compass } from 'lucide-react';
import { useSearchParams, Link } from 'react-router-dom';
import { RealWeaknessTracker } from '../components/ielts/RealWeaknessTracker';
import { DailyTargetHub } from '../components/ielts/DailyTargetHub';
import { useSEO } from '../hooks/useSEO';

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
      "IELTS Band 7.5+ uchun maxsus 4 bosqichli strategik xarita, Speaking Makkar 2026, Writing Task 1 & 2 baholash, Reading & Listening mock testlari va Band 7.5 Grammatika.",
    canonical: '/ielts',
    keywords:
      "IELTS 0 dan tayyorgarlik, IELTS roadmap, IELTS mock exam O'zbekiston, IELTS Speaking AI, IELTS Writing baholash, IELTS Band 7 grammatika",
  });

  const [searchParams, setSearchParams] = useSearchParams();
  const tabParam = searchParams.get('tab');
  const topicParam = searchParams.get('topic');
  const activeTab = tabParam || (topicParam ? 'grammar' : 'roadmap');

  const [isReflectionOpen, setIsReflectionOpen] = useState(false);

  const handleTabChange = (tab: string) => {
    setSearchParams({ tab });
  };

  return (
    <div className="mx-auto max-w-7xl max-w-full space-y-4 sm:space-y-6 overflow-x-hidden p-3 sm:p-4 pb-20 sm:pb-16 md:space-y-8 md:p-8">
      {/* When topicParam is present, provide a distraction-free focused single-topic header */}
      {topicParam ? (
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-800 bg-slate-900/90 p-3 sm:p-4 backdrop-blur-md shadow-lg">
          <button
            onClick={() => {
              const next = new URLSearchParams(searchParams);
              next.delete('topic');
              next.set('tab', 'grammar');
              setSearchParams(next);
            }}
            className="inline-flex items-center gap-2 rounded-xl bg-slate-800 hover:bg-slate-700 px-4 py-2 text-xs font-bold text-slate-200 transition shadow-sm cursor-pointer"
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
          {/* Header Banner with Oxford Navy & Cambridge Gold accents */}
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-blue-500/20 bg-gradient-to-r from-slate-900 via-blue-950 to-indigo-950 p-4 sm:p-6 md:p-8 shadow-2xl backdrop-blur-xl">
            <div className="pointer-events-none absolute -right-12 -top-12 h-64 w-64 rounded-full bg-blue-500/15 blur-3xl" />
            <div className="pointer-events-none absolute -left-12 -bottom-12 h-48 w-48 rounded-full bg-amber-500/10 blur-3xl" />

            <div className="relative z-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
              <div className="max-w-2xl space-y-1.5 sm:space-y-2">
                <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/15 px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-extrabold text-amber-400 shadow-xs">
                  <GraduationCap size={14} />
                  <span>IELTS MASTER SUITE & ACADEMY</span>
                </div>
                <h1 className="text-xl sm:text-3xl font-black tracking-tight text-white md:text-4xl">
                  {activeTab === 'roadmap'
                    ? 'IELTS 0 dan Band 8.0 gacha Xarita'
                    : activeTab === 'plan'
                      ? 'IELTS Shaxsiy Rejangiz'
                      : activeTab === 'writing'
                        ? 'IELTS Writing Mock & Examiner'
                        : activeTab === 'reading_listening'
                          ? 'IELTS Reading & Listening Mock'
                          : 'IELTS Band 7.5 Grammatika Akademiyasi'}
                </h1>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-300">
                  {activeTab === 'roadmap'
                    ? 'Noldan boshlovchilar uchun Foundation (baza) dan tortib Makkar 2026 gacha to\'liq bosqichma-bosqich o\'quv dasturi.'
                    : activeTab === 'plan'
                      ? 'Sizning maqsadli Band ballingiz uchun adaptiv kunlik va haftalik vazifalar taqsimoti.'
                      : 'Band 7.5+ Grammatika Akademiyasi, Reading/Listening va Writing mock imtihonlari yagona markazda.'}
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
                <Link
                  to="/ielts/speaking-mock"
                  className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 px-4 sm:px-5 py-2.5 sm:py-3 text-xs font-black text-white shadow-lg shadow-blue-500/25 transition-all duration-200 hover:scale-105 active:scale-95"
                >
                  <Mic size={16} />
                  <span>Speaking Mock Boshlash</span>
                  <Sparkles size={14} />
                </Link>
              </div>
            </div>
          </div>

          {/* Unified IELTS Navigation Tabs */}
          <div className="scrollbar-none flex max-w-full items-center gap-1 sm:gap-1.5 overflow-x-auto rounded-xl sm:rounded-2xl border border-border/80 bg-muted/40 p-1 sm:p-1.5">
            <button
              onClick={() => handleTabChange('roadmap')}
              className={`flex shrink-0 items-center gap-1.5 sm:gap-2 whitespace-nowrap rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 text-xs font-black transition-all ${
                activeTab === 'roadmap'
                  ? 'bg-amber-600 text-white shadow-md'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Compass size={15} /> 🗺️ Bosqichlar Xaritasi
            </button>

            <button
              onClick={() => handleTabChange('plan')}
              className={`flex shrink-0 items-center gap-1.5 sm:gap-2 whitespace-nowrap rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 text-xs font-black transition-all ${
                activeTab === 'plan'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Target size={15} /> 🎯 Shaxsiy Rejam
            </button>

            <button
              onClick={() => handleTabChange('grammar')}
              className={`flex shrink-0 items-center gap-1.5 sm:gap-2 whitespace-nowrap rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 text-xs font-black transition-all ${
                activeTab === 'grammar'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <BookOpen size={15} /> 📚 Band 7.5 Grammatika
            </button>

            <button
              onClick={() => handleTabChange('reading_listening')}
              className={`flex shrink-0 items-center gap-1.5 sm:gap-2 whitespace-nowrap rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 text-xs font-black transition-all ${
                activeTab === 'reading_listening'
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Headphones size={15} /> 🎧 Reading & Listening
            </button>

            <button
              onClick={() => handleTabChange('writing')}
              className={`flex shrink-0 items-center gap-1.5 sm:gap-2 whitespace-nowrap rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 text-xs font-black transition-all ${
                activeTab === 'writing'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <PenTool size={15} /> ✍️ Writing Mock
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
