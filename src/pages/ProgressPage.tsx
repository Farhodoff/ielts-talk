import React, { useState } from 'react';
import SmartInsight from '../components/SmartInsight';
import StudyStatsCards from '../components/analytics/StudyStatsCards';
import ActivityAnalytics from '../components/analytics/ActivityAnalytics';
import ActivityHeatmap from '../components/analytics/ActivityHeatmap';
import SubjectAnalytics from '../components/analytics/SubjectAnalytics';
import FlashcardAnalytics from '../components/analytics/FlashcardAnalytics';
import ExamHistoryAnalytics from '../components/analytics/ExamHistoryAnalytics';
import CoachAnalytics from '../components/analytics/CoachAnalytics';
import { useStudyData } from '../context/StudyPlannerContext';
import Skeleton from '../components/ui/Skeleton';
import ShareCardModal from '../components/ShareCardModal';
import { Share2, BarChart3, Globe2, BookOpen } from 'lucide-react';
import { useGamificationInfo } from '../stores';

const ProgressPage: React.FC = () => {
  const { sessions, subjects, tasks, settings, flashcards, coachSessions, loading } =
    useStudyData();
  const { totalXp, level } = useGamificationInfo();
  const [activeTab, setActiveTab] = useState<'overview' | 'language' | 'subjects'>('overview');
  const [isShareOpen, setIsShareOpen] = useState(false);

  const totalHours = (sessions.reduce((acc, s) => acc + s.duration, 0) / 60).toFixed(1);
  const completedTasks = tasks.filter((t) => t.completed || t.status === 'done').length;

  return (
    <div className="mx-auto max-w-7xl space-y-4 p-3.5 pb-16 duration-200 animate-in fade-in sm:space-y-6 sm:p-4 sm:pb-12 md:p-8">
      {/* Header */}
      <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
        <div>
          <h2 className="text-2xl font-black tracking-tight text-gray-900 dark:text-white sm:text-3xl">
            O'quv Statistikasi & Progress
          </h2>
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400 sm:text-sm">
            Kunlik o'rganish natijalari, faollik xaritasi va o'sish ko'rsatkichlari.
          </p>
        </div>
        <button
          onClick={() => setIsShareOpen(true)}
          className="flex cursor-pointer items-center gap-2 rounded-2xl bg-primary px-3.5 py-2 text-xs font-bold text-primary-foreground shadow-sm transition-all hover:opacity-90 sm:px-4"
        >
          <Share2 size={15} />
          <span>Ulashish</span>
        </button>
      </div>

      {/* Smart Insight AI recommendation */}
      <SmartInsight />

      {/* KPI Cards */}
      {loading ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="rounded-2xl border border-border bg-card p-5">
              <Skeleton width={40} height={40} className="mb-2 rounded-lg" />
              <Skeleton width={80} height={28} className="mb-1" />
              <Skeleton width={100} height={14} />
            </div>
          ))}
        </div>
      ) : (
        <StudyStatsCards
          totalHours={totalHours}
          completedTasks={completedTasks}
          currentStreak={settings.currentStreak}
          totalXp={totalXp}
          level={level}
        />
      )}

      {/* Tab Navigation */}
      <div className="no-scrollbar flex items-center gap-2 overflow-x-auto border-b border-border pb-3">
        <button
          onClick={() => setActiveTab('overview')}
          className={`flex shrink-0 cursor-pointer items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-extrabold transition-all sm:gap-2 sm:px-4 ${
            activeTab === 'overview'
              ? 'bg-primary text-primary-foreground shadow-sm'
              : 'bg-muted/40 text-muted-foreground hover:bg-muted'
          }`}
        >
          <BarChart3 size={15} />
          <span className="hidden sm:inline">Umumiy Faoliyat & Vaqt</span>
          <span className="sm:hidden">Faoliyat</span>
        </button>
        <button
          onClick={() => setActiveTab('language')}
          className={`flex shrink-0 cursor-pointer items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-extrabold transition-all sm:gap-2 sm:px-4 ${
            activeTab === 'language'
              ? 'bg-primary text-primary-foreground shadow-sm'
              : 'bg-muted/40 text-muted-foreground hover:bg-muted'
          }`}
        >
          <Globe2 size={15} />
          <span>IELTS & Speaking</span>
        </button>
        <button
          onClick={() => setActiveTab('subjects')}
          className={`flex shrink-0 cursor-pointer items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-extrabold transition-all sm:gap-2 sm:px-4 ${
            activeTab === 'subjects'
              ? 'bg-primary text-primary-foreground shadow-sm'
              : 'bg-muted/40 text-muted-foreground hover:bg-muted'
          }`}
        >
          <BookOpen size={15} />
          <span className="hidden sm:inline">Fanlar & Fleshkartalar</span>
          <span className="sm:hidden">Fleshkartalar</span>
        </button>
      </div>

      {/* Tab 1: Overview & Time Activity */}
      {activeTab === 'overview' && (
        <div className="space-y-8 duration-300 animate-in fade-in">
          <ActivityAnalytics sessions={sessions} />
          <ActivityHeatmap sessions={sessions} subjects={subjects} />
        </div>
      )}

      {/* Tab 2: Language, IELTS & Coach */}
      {activeTab === 'language' && (
        <div className="space-y-8 duration-300 animate-in fade-in">
          <CoachAnalytics sessions={coachSessions} />
          <ExamHistoryAnalytics />
        </div>
      )}

      {/* Tab 3: Subjects & Flashcards */}
      {activeTab === 'subjects' && (
        <div className="space-y-8 duration-300 animate-in fade-in">
          <SubjectAnalytics subjects={subjects} sessions={sessions} flashcards={flashcards} />
          <FlashcardAnalytics flashcards={flashcards} />
        </div>
      )}

      <ShareCardModal isOpen={isShareOpen} onClose={() => setIsShareOpen(false)} />
    </div>
  );
};

export default ProgressPage;
