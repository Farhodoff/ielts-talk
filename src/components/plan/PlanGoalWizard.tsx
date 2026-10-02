import React, { useState } from 'react';
import { Sparkles, Calendar, AlertTriangle } from 'lucide-react';
import { toast } from '../../hooks/use-toast';
import {
  FeasibilityResult,
  PersonalLearningPlanService,
} from '../../services/PersonalLearningPlanService';

interface PlanGoalWizardProps {
  isUz: boolean;
  latestDiag: any;
  currentLevel: string;
  setCurrentLevel: (lvl: string) => void;
  targetLevel: string;
  setTargetLevel: (lvl: string) => void;
  selectedGoalType: 'ielts' | 'general_en';
  setSelectedGoalType: (gt: 'ielts' | 'general_en') => void;
  deadlineMonths: number;
  setDeadlineMonths: (m: number) => void;
  dailyMinutes: number;
  setDailyMinutes: (m: number) => void;
  targetsList: string[];
  currentLevelsList: string[];
  feasibility: FeasibilityResult;
  roadmapMilestones: Array<{
    month: number;
    title: string;
    desc: string;
    focusAreas?: string[];
  }>;
  onInitializePlan: () => void;
  onNavigateToDiag: () => void;
}

export const PlanGoalWizard: React.FC<PlanGoalWizardProps> = ({
  isUz,
  latestDiag,
  currentLevel,
  setCurrentLevel,
  targetLevel,
  setTargetLevel,
  selectedGoalType,
  setSelectedGoalType,
  deadlineMonths,
  setDeadlineMonths,
  dailyMinutes,
  setDailyMinutes,
  targetsList,
  currentLevelsList,
  feasibility,
  roadmapMilestones,
  onInitializePlan,
  onNavigateToDiag,
}) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);

  return (
    <div className="mx-auto max-w-3xl space-y-6 sm:space-y-8">
      {/* Header Banner */}
      <div className="rounded-2xl border border-border bg-card p-5 shadow-xl sm:rounded-3xl sm:p-6 md:p-8">
        <div className="mb-2 flex items-center gap-2">
          <Sparkles size={18} className="animate-pulse text-primary sm:h-5 sm:w-5" />
          <span className="text-xs font-black uppercase tracking-wider text-primary">
            AI-Powered Planning
          </span>
        </div>
        <h1 className="text-xl font-black tracking-tight text-foreground sm:text-2xl md:text-3xl">
          {isUz ? "Shaxsiy O'quv Rejangizni Yarating" : 'Create Your Personalized Study Plan'}
        </h1>
        <p className="mt-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">
          {isUz
            ? 'Darajangiz, maqsadlaringiz va deadlinelardan kelib chiqqan holda haftalik adaptiv reja tuzing.'
            : 'Construct an adaptive study track customized for your level, targets, deadlines, and schedule parameters.'}
        </p>
      </div>

      {/* STEP 1: Goal Selection */}
      {step === 1 && (
        <div className="space-y-4 sm:space-y-6">
          <h3 className="text-base font-bold text-foreground sm:text-lg">
            {isUz ? '1-Bosqich: IELTS Maqsadingizni tanlang' : 'Step 1: Choose Your IELTS Goal'}
          </h3>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
            <button
              type="button"
              onClick={() => {
                setSelectedGoalType('ielts');
                if (!['5.5', '6.0', '6.5', '7.0', '7.5', '8.0', '8.5+'].includes(targetLevel)) {
                  setTargetLevel('7.0');
                }
              }}
              className={`cursor-pointer rounded-2xl border p-4 text-left transition-all sm:rounded-3xl sm:p-6 ${
                selectedGoalType === 'ielts'
                  ? 'scale-[1.01] border-primary bg-primary/10 shadow-xs ring-2 ring-primary/30'
                  : 'border-border bg-card hover:border-primary/50'
              }`}
            >
              <div className="mb-1.5 flex items-center gap-2 sm:mb-2">
                <span className="text-xl sm:text-2xl">🎯</span>
                <h4 className="text-sm font-bold text-foreground sm:text-base">IELTS Imtihoni</h4>
              </div>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                Band Score (5.5 – 8.5+) ko'rsatkichlariga yo'naltirilgan intensiv akademik va umumiy
                imtihon rejasi.
              </p>
            </button>
            <button
              type="button"
              onClick={() => {
                setSelectedGoalType('general_en');
                if (!['B1', 'B2', 'C1', 'C2'].includes(targetLevel)) {
                  setTargetLevel('B2');
                }
              }}
              className={`rounded-3xl border p-6 text-left transition-all ${
                selectedGoalType === 'general_en'
                  ? 'scale-[1.01] border-primary bg-primary/10 shadow-xs ring-2 ring-primary/30'
                  : 'border-border bg-card hover:border-primary/50'
              }`}
            >
              <div className="mb-2 flex items-center gap-2">
                <span className="text-2xl">🇬🇧</span>
                <h4 className="text-base font-bold text-foreground">General & Academic English</h4>
              </div>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                CEFR (B1 – C2) muloqot, grammatika va akademik so'z boyligini tizimli oshirish.
              </p>
            </button>
          </div>

          <div className="space-y-2 pt-2">
            <label className="block text-sm font-bold text-foreground">
              {isUz ? 'Maqsadli Natija (Target Band / Level)' : 'Target Band or Level'}
            </label>
            <select
              value={targetsList.includes(targetLevel) ? targetLevel : targetsList[0] || ''}
              onChange={(e) => setTargetLevel(e.target.value)}
              className="focus:outline-hidden w-full rounded-2xl border border-border bg-card px-4 py-3 font-bold text-foreground focus:ring-2 focus:ring-primary"
            >
              {targetsList.map((t) => (
                <option key={t} value={t}>
                  {selectedGoalType === 'ielts' ? `IELTS Band ${t}` : `CEFR ${t}`}
                </option>
              ))}
            </select>
          </div>

          <div className="flex justify-end pt-4">
            <button
              type="button"
              onClick={() => setStep(2)}
              className="flex items-center gap-2 rounded-2xl bg-primary px-6 py-3 text-sm font-black text-primary-foreground transition-all hover:bg-primary/90"
            >
              <span>{isUz ? 'Davom etish' : 'Continue'}</span>
            </button>
          </div>
        </div>
      )}

      {/* STEP 2: Current Level Assessment */}
      {step === 2 && (
        <div className="space-y-6">
          <h3 className="text-lg font-bold text-foreground">
            {isUz ? '2-Bosqich: Joriy darajangizni aniqlang' : 'Step 2: Establish Starting Level'}
          </h3>

          {latestDiag && (
            <div className="flex flex-col items-center justify-between gap-4 rounded-3xl border border-primary/30 bg-primary/10 p-5 sm:flex-row">
              <div className="space-y-1 text-left">
                <div className="flex items-center gap-2">
                  <Sparkles size={16} className="text-primary" />
                  <span className="text-xs font-black uppercase tracking-wider text-primary">
                    Diagnostik Natijangiz Mavjud
                  </span>
                </div>
                <p className="text-sm font-bold text-foreground">
                  Oxirgi test natijasi:{' '}
                  <span className="font-black text-primary">
                    {latestDiag.diagnosticLevel || latestDiag.recommendedStartLevel}
                  </span>{' '}
                  ({latestDiag.overallScore || latestDiag.overallConfidence || 0}% aniqlik)
                </p>
                <p className="text-xs text-muted-foreground">
                  Tizim ushbu darajani avtomatik tavsiya qiladi.
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  const levelToSet = latestDiag.diagnosticLevel || latestDiag.recommendedStartLevel;
                  setCurrentLevel(levelToSet);
                  toast({
                    title: 'Daraja belgilandi',
                    description: `Joriy darajangiz ${levelToSet} qilib o'rnatildi.`,
                  });
                }}
                className={`shrink-0 rounded-xl px-4 py-2.5 text-xs font-black transition-all ${
                  currentLevel === (latestDiag.diagnosticLevel || latestDiag.recommendedStartLevel)
                    ? 'bg-emerald-500 text-white'
                    : 'bg-primary text-primary-foreground shadow-sm hover:bg-primary/90'
                }`}
              >
                {currentLevel === (latestDiag.diagnosticLevel || latestDiag.recommendedStartLevel)
                  ? '✓ Tanlangan'
                  : "Shu Darajani Qo'llash"}
              </button>
            </div>
          )}

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex flex-col justify-between space-y-3 rounded-3xl border border-border bg-card p-6">
              <div>
                <h4 className="text-base font-bold text-foreground">
                  {isUz ? "Bilimimni sinab ko'rmoqchiman" : 'Unsure of Level?'}
                </h4>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {isUz
                    ? '10-15 ta adaptiv savoldan iborat diagnostik test topshirib, aniq darajangizni hisoblang.'
                    : 'Conduct a rapid 10-15 question adaptive placement test first.'}
                </p>
              </div>
              <button
                onClick={onNavigateToDiag}
                className="w-full rounded-2xl bg-primary py-3 text-xs font-black text-primary-foreground shadow-md transition-all hover:bg-primary/90"
              >
                Diagnostik Test Topshirish
              </button>
            </div>

            <div className="flex flex-col justify-between space-y-3 rounded-3xl border border-border bg-card p-6">
              <div>
                <h4 className="text-base font-bold text-foreground">
                  {isUz ? 'Taxminiy darajani kiritish' : 'Override Manually'}
                </h4>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  Joriy bilimingizni taxminan belgilang va yo'l xaritasini boshlang.
                </p>
              </div>
              <div className="space-y-1">
                <select
                  value={
                    currentLevelsList.includes(currentLevel)
                      ? currentLevel
                      : currentLevelsList[0] || ''
                  }
                  onChange={(e) => setCurrentLevel(e.target.value)}
                  className="w-full rounded-xl border border-border bg-card px-3 py-2 text-xs text-foreground"
                >
                  {currentLevelsList.map((cl) => (
                    <option key={cl} value={cl}>
                      {cl}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="flex justify-between pt-4">
            <button
              onClick={() => setStep(1)}
              className="rounded-xl bg-secondary px-5 py-2.5 text-xs font-bold text-foreground"
            >
              Orqaga
            </button>
            <button
              onClick={() => {
                if (
                  !PersonalLearningPlanService.isTargetLevelValid(
                    currentLevel,
                    targetLevel,
                    selectedGoalType,
                  )
                ) {
                  toast({
                    variant: 'destructive',
                    title: isUz ? "Noto'g'ri maqsadli daraja" : 'Invalid Target Level',
                    description: isUz
                      ? "Maqsadli daraja joriy darajangizdan yuqori bo'lishi kerak!"
                      : 'Target level must be higher than your current level!',
                  });
                  return;
                }
                setStep(3);
              }}
              className="rounded-2xl bg-primary px-6 py-3 text-sm font-black text-primary-foreground transition-all hover:bg-primary/90"
            >
              Davom etish
            </button>
          </div>
        </div>
      )}

      {/* STEP 3: Deadline & Confirmation */}
      {step === 3 && (
        <div className="space-y-6">
          <h3 className="text-lg font-bold text-foreground">
            {isUz ? '3-Bosqich: Muddat va dars vaqti' : 'Step 3: Milestones & Schedule'}
          </h3>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-foreground">
                {isUz ? 'Tayyorgarlik muddati' : 'Preparation Period'}
              </label>
              <select
                value={deadlineMonths}
                onChange={(e) => setDeadlineMonths(Number(e.target.value))}
                className="w-full rounded-2xl border border-border bg-card px-4 py-3 text-sm text-foreground"
              >
                <option value={1}>1 Oy (Tezkor)</option>
                <option value={3}>3 Oy (Intensiv)</option>
                <option value={6}>6 Oy (Standart)</option>
                <option value={9}>9 Oy (Batafsil)</option>
                <option value={12}>12 Oy (Erkin)</option>
              </select>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="block text-xs font-bold uppercase tracking-wider text-foreground">
                  {isUz ? 'Kunlik dars vaqti (daqiqa)' : 'Daily Minutes Budget'}
                </label>
                <span className="text-xs font-bold text-primary">
                  {dailyMinutes || 0} daq / kun
                </span>
              </div>
              <div className="relative">
                <input
                  type="number"
                  value={dailyMinutes === 0 ? '' : dailyMinutes}
                  onChange={(e) => {
                    const val = e.target.value;
                    if (val === '') {
                      setDailyMinutes(0);
                    } else {
                      const num = parseInt(val, 10);
                      if (!isNaN(num)) {
                        setDailyMinutes(num);
                      }
                    }
                  }}
                  onBlur={() => {
                    if (!dailyMinutes || dailyMinutes < 10) setDailyMinutes(15);
                    if (dailyMinutes > 480) setDailyMinutes(480);
                  }}
                  placeholder="Masalan: 45"
                  min={10}
                  max={480}
                  className="focus:outline-hidden w-full rounded-2xl border border-border bg-card px-4 py-3 text-sm font-medium text-foreground focus:ring-2 focus:ring-primary"
                />
                <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-muted-foreground">
                  daqiqa
                </span>
              </div>
              {/* Quick Preset Buttons */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {[15, 30, 45, 60, 90, 120].map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => setDailyMinutes(preset)}
                    className={`rounded-lg border px-2.5 py-1 text-xs font-bold transition-all ${
                      dailyMinutes === preset
                        ? 'border-primary bg-primary text-primary-foreground'
                        : 'border-border bg-card text-muted-foreground hover:bg-muted'
                    }`}
                  >
                    {preset} daq
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Feasibility Indicator Warning */}
          {feasibility.warningMessage && (
            <div className="flex items-start gap-3 rounded-2xl border border-amber-500/30 bg-amber-500/10 p-5">
              <AlertTriangle className="mt-0.5 shrink-0 text-amber-500" size={18} />
              <div>
                <h5 className="text-xs font-black text-[#C9A961]">
                  {isUz ? 'Agressiv Maqsad Ogohlantirishi' : 'Highly Ambitious Target'}
                </h5>
                <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                  {feasibility.warningMessage}
                </p>
              </div>
            </div>
          )}

          {/* Milestone Roadmap preview */}
          <div className="space-y-4 rounded-3xl border border-border bg-card p-6 shadow-xl">
            <h4 className="flex items-center gap-1.5 text-sm font-bold text-foreground">
              <Calendar size={16} className="text-primary" />
              {isUz
                ? "Haqiqiy O'quv Bosqichlari (Pedagogik Yo'l Xaritasi)"
                : 'Pedagogical Roadmap Milestones'}
            </h4>
            <div className="space-y-4">
              {roadmapMilestones.map((m) => (
                <div
                  key={m.month}
                  className="flex gap-3 border-l-2 border-primary/40 py-1 pl-3.5 text-xs leading-relaxed"
                >
                  <div className="space-y-1">
                    <div className="text-sm font-bold text-foreground">{m.title}</div>
                    <div className="text-muted-foreground">{m.desc}</div>
                    {m.focusAreas && m.focusAreas.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {m.focusAreas.map((fa) => (
                          <span
                            key={fa}
                            className="rounded-md bg-secondary px-2 py-0.5 text-[10px] font-bold text-foreground"
                          >
                            {fa}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-between pt-4">
            <button
              onClick={() => setStep(2)}
              className="rounded-xl bg-secondary px-5 py-2.5 text-xs font-bold text-foreground"
            >
              Orqaga
            </button>
            <button
              onClick={onInitializePlan}
              className="flex items-center gap-2 rounded-2xl bg-primary px-6 py-3.5 text-sm font-black text-primary-foreground shadow-lg transition-all hover:bg-primary/90"
            >
              <Sparkles size={16} />
              <span>Shaxsiy Rejani Yaratish</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
