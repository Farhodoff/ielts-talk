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
  HelpCircle
} from 'lucide-react';
import { safeLocalStorage } from '../../utils/storage/safeLocalStorage';

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
    titleUz: "1-Bosqich: Foundation (Ingliz Tili Poydevori)",
    subtitleUz: "Noldan boshlovchilar uchun fonetika, 600 ta asosiy so'z va baza grammatika",
    color: '#10B981',
    accentGradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
    badgeBg: 'bg-emerald-500/15',
    badgeBorder: 'border-emerald-500/30',
    badgeText: 'text-emerald-500 dark:text-emerald-400',
    targetAudience: "Ingliz tilini mutlaqo bilmaydigan yoki maktabdan so'ng unutib yuborganlar",
    estimatedTime: "4 - 8 hafta",
    skills: [
      {
        title: "Fonetika, Alifbo & Bo'g'in Urg'ulari",
        description: "Inglizcha 44 ta fonetik tovush, to'g'ri talaffuz va eshitib tushunish poydevori.",
        actionUrl: "/study-mode",
        actionText: "Talaffuz Darslari",
        iconName: "headphones"
      },
      {
        title: "Baza Grammatika: To be, Zamonlar & Olmoshlar",
        description: "Present Simple, Past Simple (50 ta noto'g'ri fe'llar) va oddiy gap tuzish qoidalari.",
        actionUrl: "/study-mode",
        actionText: "Baza Darslar",
        iconName: "book"
      },
      {
        title: "600 Essential English Words",
        description: "Kundalik hayotda eng ko'p ishlatiladigan asosiy so'zlar to'plami (SRS Flashcards).",
        actionUrl: "/flashcards",
        actionText: "So'zlarni Yodlash",
        iconName: "layers"
      }
    ],
    keyMilestones: [
      "Oddiy inglizcha gaplarni eshitib tushunish",
      "O'zi, oilasi va qiziqishlari haqida erkin gapira olish",
      "Kundalik 600 ta so'zni xatosiz yozish va talaffuz qilish"
    ]
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
    targetAudience: "Boshlang'ich grammatikani biladigan, lekin IELTS formatini hali boshlamaganlar",
    estimatedTime: "6 - 10 hafta",
    skills: [
      {
        title: "IELTS Topic Vocabulary (1,000 Academic Words)",
        description: "Education, Technology, Environment, Society mavzularidagi eng muhim so'zlar.",
        actionUrl: "/flashcards",
        actionText: "IELTS Lug'ati",
        iconName: "layers"
      },
      {
        title: "Murakkab Grammatika (Conditionals & Passive)",
        description: "Present Perfect, Passiv nisbat, 1-2 turdagi shart ergash gaplar va Relative Clauses.",
        actionUrl: "/ielts?tab=grammar",
        actionText: "Grammatika Mashqlari",
        iconName: "book"
      },
      {
        title: "Speaking Part 1 Kirish & Savol-Javoblar",
        description: "Imtihonda eng ko'p beriladigan 20 ta mavzuda 20-30 soniyalik ravon javob berish.",
        actionUrl: "/ielts/speaking-mock",
        actionText: "Part 1 Mashqi",
        iconName: "mic"
      }
    ],
    keyMilestones: [
      "Murakkab bog'lovchilardan (although, whereas, furthermore) to'g'ri foydalanish",
      "IELTS matnlaridagi asosiy fikrlarni ajrata olish",
      "Speaking Part 1 savollariga to'xtalmasdan 3-4 gap bilan javob berish"
    ]
  },
  {
    id: 3,
    levelCode: 'B2',
    cefr: 'Upper-Intermediate',
    ieltsBand: '6.0 - 6.5',
    titleUz: "3-Bosqich: IELTS Core Skills (Asosiy Standartlar)",
    subtitleUz: "4 ta modul bo'yicha to'liq strategiyalar: Listening S1-4, Reading TFNG, Writing T1/T2",
    color: '#8B5CF6',
    accentGradient: 'from-purple-500/20 via-pink-500/10 to-transparent',
    badgeBg: 'bg-purple-500/15',
    badgeBorder: 'border-purple-500/30',
    badgeText: 'text-purple-500 dark:text-purple-400',
    targetAudience: "IELTS topshirishga qat'iy tayyorlanayotgan va 6.5 ballni maqsad qilganlar",
    estimatedTime: "8 - 12 hafta",
    skills: [
      {
        title: "Listening Section 1-4 Strategiyalari",
        description: "Chalg'ituvchilar (distractors), form completion va xarita savollarini yechish sirlari.",
        actionUrl: "/ielts?tab=reading_listening",
        actionText: "Listening Mock",
        iconName: "headphones"
      },
      {
        title: "Reading: Skimming, Scanning & TFNG",
        description: "True/False/Not Given, Heading Match va ilmiy matnlarni tezkor tahlil qilish usullari.",
        actionUrl: "/ielts?tab=reading_listening",
        actionText: "Reading Mock",
        iconName: "book"
      },
      {
        title: "Writing Task 1 & Task 2 4-Bosqichli Struktura",
        description: "Grafiklar, jadvallar tahlili va 250 so'zlik Opinion/Discussion esse andozalari.",
        actionUrl: "/ielts?tab=writing",
        actionText: "Writing Examiner",
        iconName: "pen"
      },
      {
        title: "Speaking Part 2 Cue Card Mahorati",
        description: "1 daqiqa ichida puxta reja tuzish va 2 daqiqa davomida to'xtovsiz gapirish.",
        actionUrl: "/ielts/speaking-mock",
        actionText: "Cue Card Mashqi",
        iconName: "mic"
      }
    ],
    keyMilestones: [
      "Listening & Reading dan barqaror 28-32 ta to'g'ri javob (Band 6.5)",
      "Writing Task 2 ni 40 daqiqa ichida to'liq va mantiqiy yakunlash",
      "Speaking Part 2 da 2 daqiqa to'xtamasdan nutq so'zlay olish"
    ]
  },
  {
    id: 4,
    levelCode: 'C1-C2',
    cefr: 'Advanced Mastery',
    ieltsBand: '7.0 - 8.5+',
    titleUz: "4-Bosqich: High Scorer & Makkar 2026 (Elita Daraja)",
    subtitleUz: "30 ta Makkar 2026 biletlari, Band 8+ Lexical Resource va AI Examiner bilan jonli intervyu",
    color: '#F59E0B',
    accentGradient: 'from-amber-500/20 via-orange-500/10 to-transparent',
    badgeBg: 'bg-amber-500/15',
    badgeBorder: 'border-amber-500/30',
    badgeText: 'text-amber-500 dark:text-amber-400',
    targetAudience: "Grantlar, magistratura va chet el vizalari uchun Band 7.5+ olmoqchi bo'lganlar",
    estimatedTime: "6 - 10 hafta",
    skills: [
      {
        title: "30 ta Makkar May-August 2026 Biletlari",
        description: "Eng yangi bashorat biletlari bo'yicha AI Examiner Gordon bilan to'liq jonli audio muloqot.",
        actionUrl: "/ielts/speaking-mock",
        actionText: "Makkar 2026 Biletlari",
        iconName: "mic"
      },
      {
        title: "Band 8+ Lexical Resource & Idiomalar",
        description: "Tabiiy kollokatsiyalar, akademik parafraza va mavzuiy idiomatik iboralar.",
        actionUrl: "/ielts?tab=grammar",
        actionText: "Band 7.5+ Grammatika",
        iconName: "zap"
      },
      {
        title: "Writing Task 2 Cohesion & Advanced Syntax",
        description: "Inversiya, passiv tuzilmalar va murakkab sintaksis orqali esseni Band 8.0 ga olib chiqish.",
        actionUrl: "/ielts?tab=writing",
        actionText: "Esse Tahlili",
        iconName: "pen"
      }
    ],
    keyMilestones: [
      "Makkar 2026 dagi kutilmagan mavzularga ikkilanmasdan ravon javob berish",
      "Writing da grammatik va leksik xatolarning deyarli bo'lmasligi (Band 7.5+)",
      "Real imtihon simulyatsiyasida barqaror Band 7.5 - 8.0 natijasi"
    ]
  }
];

export const IeltsMasterRoadmapView: React.FC = () => {
  const navigate = useNavigate();

  // Saved user stage (defaults to Stage 1 for 0-level, or user selection)
  const [currentStageId, setCurrentStageId] = useState<number>(() => {
    const saved = safeLocalStorage.getItem('ielts_user_current_stage');
    return saved ? parseInt(saved, 10) : 1;
  });

  const [expandedStageId, setExpandedStageId] = useState<number>(currentStageId);

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
    <div className="space-y-6 sm:space-y-8 animate-in fade-in">
      {/* Top Banner: Diagnostic Quick Callout */}
      <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-border bg-gradient-to-r from-card via-muted/30 to-card p-4 sm:p-6 md:p-8 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6">
          <div className="space-y-2 sm:space-y-2.5 max-w-2xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 sm:px-3 py-1 bg-amber-500/15 border border-amber-500/30 text-amber-500 rounded-full text-[11px] sm:text-xs font-black flex items-center gap-1.5">
                <Compass size={14} /> Strategik Yo'l Xaritasi
              </span>
              <span className="text-[11px] sm:text-xs font-semibold text-muted-foreground">
                Noldan (A1) ➡️ Band 8.5 (C1-C2)
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-foreground">
              Siz Qaysi Bosqichdasiz?
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              O'zingizga mos bosqichni tanlang va shaxsiy reja bo'yicha harakatlaning. Agar darajangizni aniq bilmasangiz, 10 daqiqalik diagnostik test orqali aniqlab olishingiz mumkin.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 shrink-0">
            <button
              onClick={() => navigate('/diagnostic')}
              className="px-4 py-2.5 sm:py-3 bg-background border border-border hover:bg-muted text-foreground rounded-xl sm:rounded-2xl text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-xs cursor-pointer active:scale-95"
            >
              <Brain size={16} className="text-purple-500" />
              <span>Darajani Aniqlash Testi</span>
            </button>
            <button
              onClick={() => navigate('/ielts/speaking-mock')}
              className="px-4 sm:px-5 py-2.5 sm:py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl sm:rounded-2xl text-xs font-black flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 transition-all cursor-pointer active:scale-95"
            >
              <Mic size={16} />
              <span>Makkar 2026 Mocks</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

        {/* 4-Stage Fast Tracker Pills */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-2.5 mt-5 sm:mt-6 pt-5 sm:pt-6 border-t border-border/60">
          {STAGES.map((st) => (
            <button
              key={st.id}
              onClick={() => {
                setExpandedStageId(st.id);
              }}
              className={`p-2.5 sm:p-3 rounded-xl sm:rounded-2xl border text-left transition-all cursor-pointer ${
                expandedStageId === st.id
                  ? 'bg-card border-primary/50 shadow-md ring-1 ring-primary/40'
                  : 'bg-muted/30 border-border/70 hover:bg-muted/60'
              }`}
            >
              <div className="flex items-center justify-between gap-1 mb-1">
                <span className={`text-[9px] sm:text-[10px] font-extrabold uppercase px-1.5 sm:px-2 py-0.5 rounded-md ${st.badgeBg} ${st.badgeText}`}>
                  {st.levelCode}
                </span>
                {currentStageId === st.id && (
                  <span className="text-[9px] sm:text-[10px] font-bold text-amber-500 flex items-center gap-0.5 truncate">
                    <Target size={11} className="shrink-0" /> Mening Bosqichim
                  </span>
                )}
              </div>
              <div className="text-[11px] sm:text-xs font-extrabold text-foreground truncate">
                {st.titleUz.split(':')[1] || st.titleUz}
              </div>
              <div className="text-[10px] sm:text-[11px] font-mono text-muted-foreground mt-0.5">
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
              className={`relative rounded-2xl sm:rounded-3xl border transition-all duration-300 overflow-hidden ${
                isCurrent
                  ? 'bg-card border-primary/40 shadow-lg ring-1 ring-primary/20'
                  : 'bg-card border-border shadow-xs hover:border-border/80'
              }`}
            >
              {/* Background gradient banner */}
              <div className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-b ${stage.accentGradient} pointer-events-none`} />

              {/* Stage Header */}
              <div className="relative z-10 p-4 sm:p-5 md:p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4">
                  <div className="space-y-1.5 flex-1">
                    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                      <span className={`px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-[11px] sm:text-xs font-black border ${stage.badgeBg} ${stage.badgeBorder} ${stage.badgeText}`}>
                        {stage.levelCode} • {stage.cefr}
                      </span>
                      <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-[11px] sm:text-xs font-bold bg-muted text-muted-foreground border border-border">
                        🎯 Band {stage.ieltsBand}
                      </span>
                      <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-[11px] sm:text-xs font-medium text-muted-foreground">
                        ⏱️ {stage.estimatedTime}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl md:text-2xl font-black text-foreground pt-1">
                      {stage.titleUz}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {stage.subtitleUz}
                    </p>
                  </div>

                  {/* Header Actions */}
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => handleSelectMyStage(stage.id)}
                      className={`px-3 py-1.5 sm:py-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
                        isCurrent
                          ? 'bg-emerald-600 text-white shadow-md'
                          : 'bg-muted hover:bg-muted/80 text-foreground border border-border'
                      }`}
                    >
                      {isCurrent ? '✓ Mening Bosqichim' : 'Bosqichni Tanlash'}
                    </button>
                    <button
                      onClick={() => setExpandedStageId(isExpanded ? 0 : stage.id)}
                      className="p-1.5 sm:p-2 bg-muted hover:bg-muted/80 rounded-xl text-foreground border border-border transition-all cursor-pointer"
                      title={isExpanded ? "Yopish" : "Ochish"}
                    >
                      {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </button>
                  </div>
                </div>

                {/* Audience note */}
                <div className="mt-3 sm:mt-4 p-2.5 sm:p-3 bg-muted/40 rounded-xl sm:rounded-2xl border border-border/50 text-xs text-muted-foreground flex items-center gap-2">
                  <HelpCircle size={15} className="text-primary shrink-0" />
                  <span><strong>Kimlar uchun:</strong> {stage.targetAudience}</span>
                </div>
              </div>

              {/* Collapsible Content: Skills & Milestones */}
              {isExpanded && (
                <div className="p-4 sm:p-5 md:p-6 pt-0 border-t border-border/40 space-y-5 animate-in fade-in duration-200">
                  {/* Skills Grid */}
                  <div className="space-y-3 pt-4">
                    <h4 className="text-xs font-black uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                      <Layers size={14} className="text-primary" /> Ushbu Bosqich Darslari va Mashg'ulotlari:
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                      {stage.skills.map((skill, sIdx) => (
                        <div
                          key={sIdx}
                          className="bg-card border border-border rounded-2xl p-4 flex flex-col justify-between gap-3 shadow-xs hover:border-primary/40 transition-all group"
                        >
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <div className="p-2 bg-muted rounded-xl group-hover:scale-105 transition-transform">
                                {getSkillIcon(skill.iconName)}
                              </div>
                              <h5 className="text-xs font-extrabold text-foreground leading-snug">
                                {skill.title}
                              </h5>
                            </div>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                              {skill.description}
                            </p>
                          </div>

                          <button
                            onClick={() => navigate(skill.actionUrl)}
                            className="w-full py-2 px-3 bg-muted hover:bg-primary hover:text-primary-foreground text-foreground rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer active:scale-95 border border-border group-hover:border-primary"
                          >
                            <span>{skill.actionText}</span>
                            <ArrowRight size={13} />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Milestones checklist */}
                  <div className="bg-muted/20 border border-border/60 rounded-2xl p-4 space-y-2.5">
                    <h4 className="text-xs font-black uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                      <Award size={14} className="text-amber-500" /> Bosqichni Yakunlash Natijalari (Kutiladigan Ko'nikmalar):
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 pt-1">
                      {stage.keyMilestones.map((ms, mIdx) => (
                        <div key={mIdx} className="flex items-start gap-2 text-xs text-foreground font-medium">
                          <CheckCircle2 size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                          <span>{ms}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default IeltsMasterRoadmapView;
