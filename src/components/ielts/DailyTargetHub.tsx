import React from 'react';
import {
  Target,
  CheckCircle2,
  Clock,
  BookOpen,
  Mic,
  BrainCircuit,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { useStudyData } from '../../context/IeltsTalkContext';
import { calculateRealMetrics } from '../../utils/realAnalytics';
import { PersonalLearningPlanService } from '../../services/PersonalLearningPlanService';
import { useNavigate } from 'react-router-dom';

interface DailyTargetHubProps {
  onOpenReflection: () => void;
}

export const DailyTargetHub: React.FC<DailyTargetHubProps> = ({ onOpenReflection }) => {
  const navigate = useNavigate();
  const { flashcards, tasks, sessions, user } = useStudyData();
  const metrics = calculateRealMetrics(flashcards, tasks, sessions);

  // Fetch active learning goal for dynamic daily targets
  const userId = user?.id || 'guest';
  const activeGoal = PersonalLearningPlanService.getActiveGoal(userId);

  // Target calculation from real user plan
  const targetFocusMins = activeGoal?.dailyMinutes || 60;
  const currentFocusMins = metrics.todayFocusMinutes;
  const focusPercent = Math.min(100, Math.round((currentFocusMins / targetFocusMins) * 100));

  // Flashcard repetitions
  const targetCards = 20;
  const currentCards = Math.min(targetCards, flashcards.filter((f) => f.repetitions > 0).length);
  const cardsPercent = Math.min(100, Math.round((currentCards / targetCards) * 100));

  // Speaking sessions / completed tasks today
  const todayCompletedTasks = tasks.filter((t) => t.completed || t.status === 'done').length;

  const isDayCompleted = focusPercent >= 80 || (currentCards >= 10 && todayCompletedTasks > 0);

  return (
    <div className="space-y-6 rounded-3xl border border-indigo-500/30 bg-gradient-to-br from-indigo-900 via-indigo-950 to-slate-900 p-6 text-white shadow-2xl">
      <div className="flex flex-col justify-between gap-4 border-b border-indigo-500/20 pb-4 md:flex-row md:items-center">
        <div className="flex items-center gap-3">
          <div className="rounded-2xl border border-indigo-500/30 bg-indigo-500/20 p-3 text-indigo-400">
            <Target size={26} />
          </div>
          <div>
            <div className="mb-1 inline-flex items-center gap-1.5 rounded-full bg-indigo-500/20 px-2.5 py-0.5 text-[10px] font-bold text-indigo-300">
              <Sparkles size={11} />{' '}
              {activeGoal
                ? `${activeGoal.currentLevel} → ${activeGoal.targetLevel} Shaxsiy Reja`
                : "Kunlik O'quv Maqsadi"}
            </div>
            <h2 className="text-xl font-black md:text-2xl">
              Bugungi Aniqlashtirilgan Dars Maqsadi 🎯
            </h2>
            <p className="text-xs text-indigo-200/80">
              Grammatika, Speaking, Listening va Lug'at bloklari bo'yicha integratsiyalashgan ta'lim
            </p>
          </div>
        </div>

        <button
          onClick={onOpenReflection}
          className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 px-5 py-3 text-xs font-extrabold text-white shadow-lg shadow-amber-500/20 transition-all hover:from-amber-600 hover:to-orange-600"
        >
          <BrainCircuit size={18} />
          <span>Kunlik Hisobot (Xulosa)</span>
        </button>
      </div>

      {/* Daily Target Progress Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* Metric 1: Focus Time */}
        <div className="flex flex-col justify-between space-y-2 rounded-2xl border border-white/10 bg-white/5 p-4">
          <div>
            <div className="mb-1 flex items-center justify-between text-xs font-bold text-indigo-200">
              <span className="flex items-center gap-1.5">
                <Clock size={15} /> Kunlik Dars Vaqti
              </span>
              <span className="font-mono">
                {currentFocusMins} / {targetFocusMins} daqiqa
              </span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-indigo-400 transition-all duration-500"
                style={{ width: `${focusPercent}%` }}
              />
            </div>
          </div>
          <p className="text-[11px] text-indigo-300/70">{focusPercent}% bajarildi</p>
        </div>

        {/* Metric 2: Grammar Theory & Units */}
        <div className="flex flex-col justify-between space-y-2 rounded-2xl border border-white/10 bg-white/5 p-4">
          <div>
            <div className="mb-1 flex items-center justify-between text-xs font-bold text-indigo-200">
              <span className="flex items-center gap-1.5">
                <BookOpen size={15} /> Grammatika (Murphy)
              </span>
              <span className="font-mono">A1 Nazariya</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-blue-400 transition-all duration-500"
                style={{ width: '100%' }}
              />
            </div>
          </div>
          <p className="text-[11px] text-indigo-300/70">Formulalar & Testlar</p>
        </div>

        {/* Metric 3: Vocabulary SRS */}
        <div className="flex flex-col justify-between space-y-2 rounded-2xl border border-white/10 bg-white/5 p-4">
          <div>
            <div className="mb-1 flex items-center justify-between text-xs font-bold text-indigo-200">
              <span className="flex items-center gap-1.5">
                <BookOpen size={15} /> Lug'at Qotirish
              </span>
              <span className="font-mono">
                {currentCards} / {targetCards} so'z
              </span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-emerald-400 transition-all duration-500"
                style={{ width: `${cardsPercent}%` }}
              />
            </div>
          </div>
          <p className="text-[11px] text-indigo-300/70">{cardsPercent}% takrorlandi</p>
        </div>

        {/* Metric 4: Speaking Practice */}
        <div className="flex flex-col justify-between space-y-2 rounded-2xl border border-white/10 bg-white/5 p-4">
          <div>
            <div className="mb-1 flex items-center justify-between text-xs font-bold text-indigo-200">
              <span className="flex items-center gap-1.5">
                <Mic size={15} /> Speaking Mashqi
              </span>
              <span className="font-mono">
                {todayCompletedTasks > 0 ? `${todayCompletedTasks} mashq` : 'Kutilmoqda'}
              </span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-amber-400 transition-all duration-500"
                style={{ width: todayCompletedTasks > 0 ? '100%' : '15%' }}
              />
            </div>
          </div>
          <p className="text-[11px] text-indigo-300/70">
            {todayCompletedTasks > 0 ? "Muvaffaqiyatli o'tkazildi" : 'AI Murabbiy bilan muloqot'}
          </p>
        </div>
      </div>

      {/* Quick Action Navigation Buttons */}
      <div className="flex flex-col justify-between gap-4 rounded-2xl border border-indigo-500/30 bg-indigo-500/10 p-4 md:flex-row md:items-center">
        <div className="flex items-center gap-3">
          <CheckCircle2 size={22} className="shrink-0 text-emerald-400" />
          <div className="text-xs">
            <span className="block font-extrabold uppercase tracking-wider text-indigo-200">
              Bugungi Tavsiya Etilgan Harakat:
            </span>
            <span className="font-medium text-white">
              {isDayCompleted
                ? "Bugungi barcha asosiy bloklar bajarildi! Kunni yakunlash uchun 'Kunlik Hisobot' tugmasini bosing."
                : "Murphy A1 Grammatika qoidalarini o'rganing va Scenarios bo'limida 15 daqiqa AI Murabbiy bilan ovozli muloqot qiling."}
            </span>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <button
            onClick={() => navigate('/scenarios')}
            className="flex items-center gap-1.5 rounded-xl bg-indigo-600 px-4 py-2 text-xs font-bold text-white shadow transition hover:bg-indigo-700"
          >
            <Mic size={14} />
            <span>Scenarios (Speaking)</span>
          </button>
          <button
            onClick={() => navigate('/vocabulary')}
            className="flex items-center gap-1.5 rounded-xl bg-slate-800 px-4 py-2 text-xs font-bold text-slate-200 transition hover:bg-slate-700"
          >
            <BookOpen size={14} />
            <span>Lug'at</span>
            <ArrowRight size={13} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DailyTargetHub;
