import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Compass,
  CheckCircle2,
  ArrowRight,
  BookOpen,
  Mic,
  PenTool,
  Headphones,
  Award,
  Layers,
  Zap,
  ChevronDown,
  ChevronUp,
  Target,
  Brain,
  HelpCircle,
} from 'lucide-react';
import { safeLocalStorage } from '../../utils/storage/safeLocalStorage';
import { CheckpointCard } from './checkpoint/CheckpointCard';
import { CheckpointTestModal } from './checkpoint/CheckpointTestModal';
import { getCheckpointForStage, CheckpointTest } from '../../data/ielts/checkpointTestsData';
import { CheckpointTestService, CheckpointResult } from '../../services/CheckpointTestService';

export interface RoadmapStage {
  id: number;
  levelCode: string;
  cefr: string;
  ieltsBand: string;
  titleUz: string;
  subtitleUz: string;
  color: string;
  accentGradient: string;
  badgeBg: string;
  badgeBorder: string;
  badgeText: string;
  targetAudience: string;
  estimatedTime: string;
  skills: {
    title: string;
    description: string;
    actionUrl: string;
    actionText: string;
    iconName: 'book' | 'mic' | 'pen' | 'headphones' | 'layers' | 'zap';
  }[];
  keyMilestones: string[];
}

const STAGES: RoadmapStage[] = [
  {
    id: 1,
    levelCode: 'A1-A2',
    cefr: 'Beginner -> Elementary',
    ieltsBand: '0.0 - 4.0',
    titleUz: '1-Bosqich: Foundation (Ingliz Tili Poydevori)',
    subtitleUz: "Noldan boshlovchilar uchun fonetika, 600 ta asosiy so'z va baza grammatika",
    color: '#10B981',
    accentGradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
    badgeBg: 'bg-emerald-500/15',
    badgeBorder: 'border-emerald-500/30',
    badgeText: 'text-emerald-500 dark:text-emerald-400',
    targetAudience: "Ingliz tilini mutlaqo bilmaydigan yoki maktabdan so'ng unutib yuborganlar",
    estimatedTime: '4 - 8 hafta',
    skills: [
      {
        title: "Fonetika, Alifbo & Bo'g'in Urg'ulari",
        description:
          "Inglizcha 44 ta fonetik tovush, to'g'ri talaffuz va eshitib tushunish poydevori.",
        actionUrl: '/study-mode',
        actionText: 'Talaffuz Darslari',
        iconName: 'headphones',
      },
      {
        title: 'Baza Grammatika: To be, Zamonlar & Olmoshlar',
        description:
          "Present Simple, Past Simple (50 ta noto'g'ri fe'llar) va oddiy gap tuzish qoidalari.",
        actionUrl: '/study-mode',
        actionText: 'Baza Darslar',
        iconName: 'book',
      },
      {
        title: '600 Essential English Words',
        description:
          "Kundalik hayotda eng ko'p ishlatiladigan asosiy so'zlar to'plami (SRS Flashcards).",
        actionUrl: '/flashcards',
        actionText: "So'zlarni Yodlash",
        iconName: 'layers',
      },
    ],
    keyMilestones: [
      'Oddiy inglizcha gaplarni eshitib tushunish',
      "O'zi, oilasi va qiziqishlari haqida erkin gapira olish",
      "Kundalik 600 ta so'zni xatosiz yozish va talaffuz qilish",
    ],
  },
  {
    id: 2,
    levelCode: 'B1',
    cefr: 'Intermediate',
    ieltsBand: '4.5 - 5.5',
    titleUz: "2-Bosqich: Pre-IELTS Bridge (IELTSga Ko'prik)",
    subtitleUz: "IELTS mavzuiy lug'ati, murakkab gaplar va Speaking Part 1 kirish",
    color: '#3B82F6',
    accentGradient: 'from-blue-500/20 via-indigo-500/10 to-transparent',
    badgeBg: 'bg-blue-500/15',
    badgeBorder: 'border-blue-500/30',
    badgeText: 'text-blue-500 dark:text-blue-400',
    targetAudience:
      "Boshlang'ich grammatikani biladigan, lekin IELTS formatini hali boshlamaganlar",
    estimatedTime: '6 - 10 hafta',
    skills: [
      {
        title: 'IELTS Topic Vocabulary (1,000 Academic Words)',
        description: "Education, Technology, Environment, Society mavzularidagi eng muhim so'zlar.",
        actionUrl: '/flashcards',
        actionText: "IELTS Lug'ati",
        iconName: 'layers',
      },
      {
        title: 'Murakkab Grammatika (Conditionals & Passive)',
        description:
          'Present Perfect, Passiv nisbat, 1-2 turdagi shart ergash gaplar va Relative Clauses.',
        actionUrl: '/ielts?tab=grammar',
        actionText: 'Grammatika Mashqlari',
        iconName: 'book',
      },
      {
        title: 'Speaking Part 1 Kirish & Savol-Javoblar',
        description:
          "Imtihonda eng ko'p beriladigan 20 ta mavzuda 20-30 soniyalik ravon javob berish.",
        actionUrl: '/ielts/speaking-mock',
        actionText: 'Part 1 Mashqi',
        iconName: 'mic',
      },
    ],
    keyMilestones: [
      "Murakkab bog'lovchilardan (although, whereas, furthermore) to'g'ri foydalanish",
      'IELTS matnlaridagi asosiy fikrlarni ajrata olish',
      "Speaking Part 1 savollariga to'xtalmasdan 3-4 gap bilan javob berish",
    ],
  },
  {
    id: 3,
    levelCode: 'B2',
    cefr: 'Upper-Intermediate',
    ieltsBand: '6.0 - 6.5',
    titleUz: '3-Bosqich: IELTS Core Skills (Asosiy Standartlar)',
    subtitleUz:
      "4 ta modul bo'yicha to'liq strategiyalar: Listening S1-4, Reading TFNG, Writing T1/T2",
    color: '#8B5CF6',
    accentGradient: 'from-purple-500/20 via-pink-500/10 to-transparent',
    badgeBg: 'bg-purple-500/15',
    badgeBorder: 'border-purple-500/30',
    badgeText: 'text-purple-500 dark:text-purple-400',
    targetAudience: "IELTS topshirishga qat'iy tayyorlanayotgan va 6.5 ballni maqsad qilganlar",
    estimatedTime: '8 - 12 hafta',
    skills: [
      {
        title: 'Listening Section 1-4 Strategiyalari',
        description:
          "Chalg'ituvchilar (distractors), form completion va xarita savollarini yechish sirlari.",
        actionUrl: '/ielts?tab=reading_listening',
        actionText: 'Listening Mock',
        iconName: 'headphones',
      },
      {
        title: 'Reading: Skimming, Scanning & TFNG',
        description:
          'True/False/Not Given, Heading Match va ilmiy matnlarni tezkor tahlil qilish usullari.',
        actionUrl: '/ielts?tab=reading_listening',
        actionText: 'Reading Mock',
        iconName: 'book',
      },
      {
        title: 'Writing Task 1 & Task 2 4-Bosqichli Struktura',
        description:
          "Grafiklar, jadvallar tahlili va 250 so'zlik Opinion/Discussion esse andozalari.",
        actionUrl: '/ielts?tab=writing',
        actionText: 'Writing Examiner',
        iconName: 'pen',
      },
      {
        title: 'Speaking Part 2 Cue Card Mahorati',
        description: "1 daqiqa ichida puxta reja tuzish va 2 daqiqa davomida to'xtovsiz gapirish.",
        actionUrl: '/ielts/speaking-mock',
        actionText: 'Cue Card Mashqi',
        iconName: 'mic',
      },
    ],
    keyMilestones: [
      "Listening & Reading dan barqaror 28-32 ta to'g'ri javob (Band 6.5)",
      "Writing Task 2 ni 40 daqiqa ichida to'liq va mantiqiy yakunlash",
      "Speaking Part 2 da 2 daqiqa to'xtamasdan nutq so'zlay olish",
    ],
  },
  {
    id: 4,
    levelCode: 'C1-C2',
    cefr: 'Advanced Mastery',
    ieltsBand: '7.0 - 8.5+',
    titleUz: '4-Bosqich: High Scorer & Makkar 2026 (Elita Daraja)',
    subtitleUz:
      '30 ta Makkar 2026 biletlari, Band 8+ Lexical Resource va AI Examiner bilan jonli intervyu',
    color: '#F59E0B',
    accentGradient: 'from-amber-500/20 via-orange-500/10 to-transparent',
    badgeBg: 'bg-amber-500/15',
    badgeBorder: 'border-amber-500/30',
    badgeText: 'text-amber-500 dark:text-amber-400',
    targetAudience:
      "Grantlar, magistratura va chet el vizalari uchun Band 7.5+ olmoqchi bo'lganlar",
    estimatedTime: '6 - 10 hafta',
    skills: [
      {
        title: '30 ta Makkar May-August 2026 Biletlari',
        description:
          "Eng yangi bashorat biletlari bo'yicha AI Examiner Gordon bilan to'liq jonli audio muloqot.",
        actionUrl: '/ielts/speaking-mock',
        actionText: 'Makkar 2026 Biletlari',
        iconName: 'mic',
      },
      {
        title: 'Band 8+ Lexical Resource & Idiomalar',
        description: 'Tabiiy kollokatsiyalar, akademik parafraza va mavzuiy idiomatik iboralar.',
        actionUrl: '/ielts?tab=grammar',
        actionText: 'Band 7.5+ Grammatika',
        iconName: 'zap',
      },
      {
        title: 'Writing Task 2 Cohesion & Advanced Syntax',
        description:
          'Inversiya, passiv tuzilmalar va murakkab sintaksis orqali esseni Band 8.0 ga olib chiqish.',
        actionUrl: '/ielts?tab=writing',
        actionText: 'Esse Tahlili',
        iconName: 'pen',
      },
    ],
    keyMilestones: [
      'Makkar 2026 dagi kutilmagan mavzularga ikkilanmasdan ravon javob berish',
      "Writing da grammatik va leksik xatolarning deyarli bo'lmasligi (Band 7.5+)",
      'Real imtihon simulyatsiyasida barqaror Band 7.5 - 8.0 natijasi',
    ],
  },
];

export const IeltsMasterRoadmapView: React.FC = () => {
  const navigate = useNavigate();

  // Saved user stage (defaults to Stage 1 for 0-level, or user selection)
  const [currentStageId, setCurrentStageId] = useState<number>(() => {
    const saved = safeLocalStorage.getItem('ielts_user_current_stage');
    return saved ? parseInt(saved, 10) : 1;
  });

  const [expandedStageId, setExpandedStageId] = useState<number>(currentStageId);
  const [selectedCheckpoint, setSelectedCheckpoint] = useState<CheckpointTest | null>(null);
  const [isCheckpointModalOpen, setIsCheckpointModalOpen] = useState(false);
  const [checkpointResults, setCheckpointResults] = useState<Record<string, CheckpointResult>>(() =>
    CheckpointTestService.getAllResults(),
  );

  const handleStartCheckpoint = (checkpoint: CheckpointTest) => {
    setSelectedCheckpoint(checkpoint);
    setIsCheckpointModalOpen(true);
  };

  const handleCheckpointCompleted = (_res: CheckpointResult) => {
    setCheckpointResults(CheckpointTestService.getAllResults());
  };

  const handleSelectMyStage = (stageId: number) => {
    setCurrentStageId(stageId);
    setExpandedStageId(stageId);
    safeLocalStorage.setItem('ielts_user_current_stage', String(stageId));
  };

  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'book':
        return <BookOpen size={16} className="text-indigo-500" />;
      case 'mic':
        return <Mic size={16} className="text-emerald-500" />;
      case 'pen':
        return <PenTool size={16} className="text-amber-500" />;
      case 'headphones':
        return <Headphones size={16} className="text-purple-500" />;
      case 'layers':
        return <Layers size={16} className="text-blue-500" />;
      default:
        return <Zap size={16} className="text-rose-500" />;
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in sm:space-y-8">
      {/* Top Banner: Diagnostic Quick Callout */}
      <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-r from-card via-muted/30 to-card p-4 shadow-sm sm:rounded-3xl sm:p-6 md:p-8">
        <div className="flex flex-col justify-between gap-4 sm:gap-6 md:flex-row md:items-center">
          <div className="max-w-2xl space-y-2 sm:space-y-2.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/15 px-2.5 py-1 text-[11px] font-black text-amber-500 sm:px-3 sm:text-xs">
                <Compass size={14} /> Strategik Yo'l Xaritasi
              </span>
              <span className="text-[11px] font-semibold text-muted-foreground sm:text-xs">
                Noldan (A1) ➡️ Band 8.5 (C1-C2)
              </span>
            </div>
            <h2 className="text-xl font-black tracking-tight text-foreground sm:text-2xl md:text-3xl">
              Siz Qaysi Bosqichdasiz?
            </h2>
            <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
              O'zingizga mos bosqichni tanlang va shaxsiy reja bo'yicha harakatlaning. Agar
              darajangizni aniq bilmasangiz, 10 daqiqalik diagnostik test orqali aniqlab olishingiz
              mumkin.
            </p>
          </div>

          <div className="flex shrink-0 flex-col items-stretch gap-2.5 sm:flex-row sm:items-center sm:gap-3">
            <button
              onClick={() => navigate('/diagnostic')}
              className="flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-border bg-background px-4 py-2.5 text-xs font-bold text-foreground shadow-xs transition-all hover:bg-muted active:scale-95 sm:rounded-2xl sm:py-3"
            >
              <Brain size={16} className="text-purple-500" />
              <span>Darajani Aniqlash Testi</span>
            </button>
            <button
              onClick={() => navigate('/ielts/speaking-mock')}
              className="flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2.5 text-xs font-black text-white shadow-lg shadow-blue-500/20 transition-all hover:from-blue-700 hover:to-indigo-700 active:scale-95 sm:rounded-2xl sm:px-5 sm:py-3"
            >
              <Mic size={16} />
              <span>Makkar 2026 Mocks</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

        {/* 4-Stage Fast Tracker Pills */}
        <div className="mt-5 grid grid-cols-2 gap-2 border-t border-border/60 pt-5 sm:mt-6 sm:gap-2.5 sm:pt-6 md:grid-cols-4">
          {STAGES.map((st) => (
            <button
              key={st.id}
              onClick={() => {
                setExpandedStageId(st.id);
              }}
              className={`cursor-pointer rounded-xl border p-2.5 text-left transition-all sm:rounded-2xl sm:p-3 ${
                expandedStageId === st.id
                  ? 'border-primary/50 bg-card shadow-md ring-1 ring-primary/40'
                  : 'border-border/70 bg-muted/30 hover:bg-muted/60'
              }`}
            >
              <div className="mb-1 flex items-center justify-between gap-1">
                <span
                  className={`rounded-md px-1.5 py-0.5 text-[9px] font-extrabold uppercase sm:px-2 sm:text-[10px] ${st.badgeBg} ${st.badgeText}`}
                >
                  {st.levelCode}
                </span>
                {currentStageId === st.id && (
                  <span className="flex items-center gap-0.5 truncate text-[9px] font-bold text-amber-500 sm:text-[10px]">
                    <Target size={11} className="shrink-0" /> Mening Bosqichim
                  </span>
                )}
              </div>
              <div className="truncate text-[11px] font-extrabold text-foreground sm:text-xs">
                {st.titleUz.split(':')[1] || st.titleUz}
              </div>
              <div className="mt-0.5 font-mono text-[10px] text-muted-foreground sm:text-[11px]">
                Band {st.ieltsBand}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Vertical Stages List */}
      <div className="space-y-4 sm:space-y-6">
        {STAGES.map((stage) => {
          const isExpanded = expandedStageId === stage.id;
          const isCurrent = currentStageId === stage.id;

          return (
            <div
              key={stage.id}
              className={`relative overflow-hidden rounded-2xl border transition-all duration-300 sm:rounded-3xl ${
                isCurrent
                  ? 'border-primary/40 bg-card shadow-lg ring-1 ring-primary/20'
                  : 'border-border bg-card shadow-xs hover:border-border/80'
              }`}
            >
              {/* Background gradient banner */}
              <div
                className={`absolute left-0 right-0 top-0 h-32 bg-gradient-to-b ${stage.accentGradient} pointer-events-none`}
              />

              {/* Stage Header */}
              <div className="relative z-10 p-4 sm:p-5 md:p-6">
                <div className="flex flex-col justify-between gap-3 sm:gap-4 md:flex-row md:items-center">
                  <div className="flex-1 space-y-1.5">
                    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                      <span
                        className={`rounded-full border px-2 py-0.5 text-[11px] font-black sm:px-2.5 sm:py-1 sm:text-xs ${stage.badgeBg} ${stage.badgeBorder} ${stage.badgeText}`}
                      >
                        {stage.levelCode} • {stage.cefr}
                      </span>
                      <span className="rounded-full border border-border bg-muted px-2 py-0.5 text-[11px] font-bold text-muted-foreground sm:px-2.5 sm:py-1 sm:text-xs">
                        🎯 Band {stage.ieltsBand}
                      </span>
                      <span className="rounded-full px-2 py-0.5 text-[11px] font-medium text-muted-foreground sm:px-2.5 sm:py-1 sm:text-xs">
                        ⏱️ {stage.estimatedTime}
                      </span>
                    </div>

                    <h3 className="pt-1 text-lg font-black text-foreground sm:text-xl md:text-2xl">
                      {stage.titleUz}
                    </h3>
                    <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                      {stage.subtitleUz}
                    </p>
                  </div>

                  {/* Header Actions */}
                  <div className="flex shrink-0 items-center gap-2">
                    <button
                      onClick={() => handleSelectMyStage(stage.id)}
                      className={`cursor-pointer rounded-xl px-3 py-1.5 text-xs font-black transition-all sm:py-2 ${
                        isCurrent
                          ? 'bg-emerald-600 text-white shadow-md'
                          : 'border border-border bg-muted text-foreground hover:bg-muted/80'
                      }`}
                    >
                      {isCurrent ? '✓ Mening Bosqichim' : 'Bosqichni Tanlash'}
                    </button>
                    <button
                      onClick={() => setExpandedStageId(isExpanded ? 0 : stage.id)}
                      className="cursor-pointer rounded-xl border border-border bg-muted p-1.5 text-foreground transition-all hover:bg-muted/80 sm:p-2"
                      title={isExpanded ? 'Yopish' : 'Ochish'}
                    >
                      {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </button>
                  </div>
                </div>

                {/* Audience note */}
                <div className="mt-3 flex items-center gap-2 rounded-xl border border-border/50 bg-muted/40 p-2.5 text-xs text-muted-foreground sm:mt-4 sm:rounded-2xl sm:p-3">
                  <HelpCircle size={15} className="shrink-0 text-primary" />
                  <span>
                    <strong>Kimlar uchun:</strong> {stage.targetAudience}
                  </span>
                </div>
              </div>

              {/* Collapsible Content: Skills & Milestones */}
              {isExpanded && (
                <div className="space-y-5 border-t border-border/40 p-4 pt-0 duration-200 animate-in fade-in sm:p-5 md:p-6">
                  {/* Skills Grid */}
                  <div className="space-y-3 pt-4">
                    <h4 className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-muted-foreground">
                      <Layers size={14} className="text-primary" /> Ushbu Bosqich Darslari va
                      Mashg'ulotlari:
                    </h4>

                    <div className="grid grid-cols-1 gap-3.5 md:grid-cols-3">
                      {stage.skills.map((skill, sIdx) => (
                        <div
                          key={sIdx}
                          className="group flex flex-col justify-between gap-3 rounded-2xl border border-border bg-card p-4 shadow-xs transition-all hover:border-primary/40"
                        >
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <div className="rounded-xl bg-muted p-2 transition-transform group-hover:scale-105">
                                {getSkillIcon(skill.iconName)}
                              </div>
                              <h5 className="text-xs font-extrabold leading-snug text-foreground">
                                {skill.title}
                              </h5>
                            </div>
                            <p className="text-xs leading-relaxed text-muted-foreground">
                              {skill.description}
                            </p>
                          </div>

                          <button
                            onClick={() => navigate(skill.actionUrl)}
                            className="flex w-full cursor-pointer items-center justify-center gap-1.5 rounded-xl border border-border bg-muted px-3 py-2 text-xs font-bold text-foreground transition-all hover:bg-primary hover:text-primary-foreground active:scale-95 group-hover:border-primary"
                          >
                            <span>{skill.actionText}</span>
                            <ArrowRight size={13} />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Milestones checklist */}
                  <div className="space-y-2.5 rounded-2xl border border-border/60 bg-muted/20 p-4">
                    <h4 className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-muted-foreground">
                      <Award size={14} className="text-amber-500" /> Bosqichni Yakunlash Natijalari
                      (Kutiladigan Ko'nikmalar):
                    </h4>
                    <div className="grid grid-cols-1 gap-2 pt-1 md:grid-cols-3">
                      {stage.keyMilestones.map((ms, mIdx) => (
                        <div
                          key={mIdx}
                          className="flex items-start gap-2 text-xs font-medium text-foreground"
                        >
                          <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-emerald-500" />
                          <span>{ms}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stage Checkpoint Exam Gate */}
                  {getCheckpointForStage(stage.id) && (
                    <div className="pt-1">
                      <CheckpointCard
                        checkpoint={getCheckpointForStage(stage.id)!}
                        result={checkpointResults[getCheckpointForStage(stage.id)!.id] || null}
                        isUnlocked={CheckpointTestService.isStageUnlocked(stage.id)}
                        onStartTest={handleStartCheckpoint}
                      />
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Checkpoint Test Modal Runner */}
      {isCheckpointModalOpen && selectedCheckpoint && (
        <CheckpointTestModal
          isOpen={isCheckpointModalOpen}
          checkpoint={selectedCheckpoint}
          onClose={() => setIsCheckpointModalOpen(false)}
          onCompleted={handleCheckpointCompleted}
        />
      )}
    </div>
  );
};

export default IeltsMasterRoadmapView;
