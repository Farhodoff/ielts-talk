import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Target, Clock, ArrowRight, ArrowLeft, X } from 'lucide-react';
import { useStudyData } from '../../context/IeltsTalkContext';
import { toast } from '../../hooks/use-toast';
import { useNavigate } from 'react-router-dom';

interface PersonalizedOnboardingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PersonalizedOnboardingModal: React.FC<PersonalizedOnboardingModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { updateSettings, subjects, addSubject, addFlashcardsBatch, setPrimaryFocus } =
    useStudyData();
  const navigate = useNavigate();

  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [selectedLevel, setSelectedLevel] = useState<string>('B2');
  const [selectedGoal, setSelectedGoal] = useState<string>('🎯 IELTS Imtihoni (Band 7+)');
  const [selectedGoalMinutes, setSelectedGoalMinutes] = useState<number>(30);
  const [isFinalizing, setIsFinalizing] = useState(false);

  if (!isOpen) return null;

  const handleDismiss = () => {
    localStorage.setItem('ielts_talk_personalized_onboarded', 'true');
    onClose();
  };

  const handleTrackSelect = (track: 'academic' | 'general') => {
    if (track === 'general') {
      setSelectedLevel('B2');
      setSelectedGoal('🎯 IELTS General Training (Band 7+)');
    } else {
      setSelectedLevel('B2');
      setSelectedGoal('🎯 IELTS Academic (Band 7.5+)');
    }
    setStep(2);
  };

  const handleFinish = async () => {
    setIsFinalizing(true);
    try {
      // 1. Save settings
      await updateSettings({
        dailyStudyGoalMinutes: selectedGoalMinutes,
      });

      // 2. Save primary focus through unified context & Supabase
      await setPrimaryFocus('en', selectedLevel, `${selectedGoal} (${selectedLevel})`);

      // 3. Auto-seed starter subject and flashcards if user has 0 subjects
      if (subjects.length === 0) {
        const newSub = await addSubject({
          name: `IELTS (${selectedLevel}) High-Frequency Vocab`,
          color: '#6366f1',
          icon: '🎓',
          schedule: [],
          description: `${selectedLevel} vocabulary set for IELTS & Academic English`,
        });
        if (newSub && newSub.id) {
          await addFlashcardsBatch([
            {
              subjectId: newSub.id,
              front: 'Perseverance',
              back: 'matonat, sabr-toqat (persistence in doing something)',
            },
            {
              subjectId: newSub.id,
              front: 'Eloquent',
              back: 'ravon, fasih gapiruvchi (fluent or persuasive in speaking)',
            },
            {
              subjectId: newSub.id,
              front: 'Comprehend',
              back: 'tushunmoq, anglamoq (to grasp mentally; understand)',
            },
            {
              subjectId: newSub.id,
              front: 'Consistency',
              back: 'davomiylik, muntazamlik (conformity in application)',
            },
          ]);
        }
      }

      setStep(4);
    } catch (e) {
      console.error('Onboarding finish error:', e);
      toast({ title: 'Xatolik yuz berdi, lekin sozlamalar saqlandi' });
      setStep(4);
    } finally {
      setIsFinalizing(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 p-4 backdrop-blur-md duration-200 animate-in fade-in">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.2 }}
        className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-border/80 bg-card p-6 shadow-2xl md:p-8"
      >
        {/* Top Header with Close Button */}
        <div className="mb-4 flex items-center justify-between">
          {step < 4 ? (
            <div className="flex items-center gap-2">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    step === s
                      ? 'w-8 bg-primary shadow-xs'
                      : step > s
                        ? 'w-4 bg-primary/40'
                        : 'w-4 bg-muted'
                  }`}
                />
              ))}
              <span className="ml-2 text-xs font-black uppercase tracking-wider text-muted-foreground">
                {step === 1 && "1/3 • Yo'nalish"}
                {step === 2 && '2/3 • Daraja'}
                {step === 3 && '3/3 • Reja'}
              </span>
            </div>
          ) : (
            <div />
          )}

          <button
            onClick={handleDismiss}
            className="rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            title="Yopish"
          >
            <X size={18} />
          </button>
        </div>

        {/* STEP 1: Choose Language / Focus */}
        {step === 1 && (
          <div className="space-y-6">
            <div className="space-y-2 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary shadow-xs">
                <Sparkles size={28} className="animate-pulse" />
              </div>
              <h2 className="text-2xl font-black tracking-tight text-foreground">
                Qaysi yo'nalishni o'rganmoqchisiz?
              </h2>
              <p className="text-xs text-muted-foreground">
                60 soniyada o'zingizga moslashtirilgan o'quv rejasini yarating
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3.5">
              <button
                onClick={() => handleTrackSelect('academic')}
                className="group flex w-full items-center gap-4 rounded-2xl border-2 border-primary/50 bg-primary/5 p-5 text-left shadow-sm transition-all hover:border-primary hover:shadow-md"
              >
                <span className="rounded-2xl bg-primary/10 p-2.5 text-4xl text-primary transition-transform group-hover:scale-105">
                  🇬🇧
                </span>
                <div className="flex-1">
                  <div className="flex items-center justify-between text-base font-extrabold text-foreground">
                    <span>IELTS Academic Track</span>
                    <span className="rounded-full border border-primary/30 bg-primary/20 px-2.5 py-0.5 text-[10px] font-black uppercase text-primary">
                      Asosiy Fokus
                    </span>
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    Universitet qabuli, Speaking mock (Gordon), Writing tahlil va Cambridge testlari
                  </p>
                </div>
                <ArrowRight
                  size={20}
                  className="text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-primary"
                />
              </button>

              <button
                onClick={() => handleTrackSelect('general')}
                className="group flex w-full items-center gap-4 rounded-2xl border-2 border-border bg-background p-5 text-left shadow-sm transition-all hover:border-primary/50 hover:bg-primary/5 hover:shadow-md"
              >
                <span className="rounded-2xl bg-amber-500/10 p-2.5 text-4xl text-amber-500 transition-transform group-hover:scale-105">
                  🎯
                </span>
                <div className="flex-1">
                  <div className="flex items-center justify-between text-base font-extrabold text-foreground">
                    <span>IELTS General Training Track</span>
                    <span className="rounded-full border border-amber-500/30 bg-amber-500/20 px-2.5 py-0.5 text-[10px] font-black uppercase text-amber-500">
                      Immigratsiya & Ish
                    </span>
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    Ish vizasi, xalqaro ko'chish, kundalik ish joyi muloqoti va amaliy xatlar
                  </p>
                </div>
                <ArrowRight
                  size={20}
                  className="text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-amber-500"
                />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: Choose Current / Target Level */}
        {step === 2 && (
          <div className="space-y-6">
            <div className="space-y-2 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-indigo-500/20 bg-indigo-500/10 text-indigo-500 shadow-xs">
                <Target size={28} />
              </div>
              <h2 className="text-2xl font-black tracking-tight text-foreground">
                Hozirgi yoki maqsad darajangiz qanday?
              </h2>
              <p className="text-xs text-muted-foreground">
                Tizim aynan ushbu darajaga mos lug'at, testlar va o'quv rejasini tayyorlaydi
              </p>
            </div>

            <div className="grid max-h-72 grid-cols-1 gap-2.5 overflow-y-auto pr-1 sm:grid-cols-2">
              {[
                {
                  level: 'A1-A2',
                  title: '🌱 Beginner (A1-A2)',
                  desc: "Asosiy grammatika & tayanch so'zlar",
                },
                { level: 'B1', title: '🎓 Intermediate (B1)', desc: 'IELTS 4.5 - 5.5 bazasi' },
                {
                  level: 'B2',
                  title: '🎓 Upper-Int (B2)',
                  desc: 'IELTS 6.0 - 7.0 akademik tayyorgarlik',
                  tag: 'Tavsiya',
                },
                { level: 'C1', title: '🎓 Advanced (C1)', desc: 'IELTS 7.5 - 8.5 & Karyera' },
                { level: 'C2', title: '🎓 Mastery (C2)', desc: 'Ona tili darajasidagi ravonlik' },
              ].map((item) => (
                <button
                  key={item.level}
                  onClick={() => setSelectedLevel(item.level)}
                  className={`flex flex-col justify-between rounded-2xl border-2 p-3.5 text-left transition-all ${
                    selectedLevel === item.level
                      ? 'border-indigo-500 bg-indigo-500/10 font-bold text-foreground shadow-xs'
                      : 'border-border bg-background text-muted-foreground hover:bg-muted/60 hover:text-foreground'
                  }`}
                >
                  <div className="flex w-full items-center justify-between">
                    <span className="text-sm font-extrabold text-foreground">{item.title}</span>
                    {item.tag && (
                      <span className="rounded-md bg-indigo-600 px-1.5 py-0.5 text-[10px] font-black text-white">
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <div className="mt-1 text-[11px] text-muted-foreground">{item.desc}</div>
                </button>
              ))}
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                onClick={() => setStep(1)}
                className="flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-bold text-muted-foreground transition-colors hover:text-foreground"
              >
                <ArrowLeft size={16} />
                Orqaga
              </button>
              <button
                onClick={() => setStep(3)}
                className="flex items-center gap-2 rounded-xl bg-primary px-6 py-2.5 text-xs font-bold text-primary-foreground shadow-md shadow-primary/20 transition-all hover:scale-[1.02] active:scale-95"
              >
                Davom etish
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Choose Primary Goal & Daily Intensity */}
        {step === 3 && (
          <div className="space-y-5">
            <div className="space-y-1.5 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-orange-500/20 bg-orange-500/10 text-orange-500 shadow-xs">
                <Clock size={24} />
              </div>
              <h2 className="text-xl font-black tracking-tight text-foreground">
                Asosiy maqsadingiz va kunlik rejangiz
              </h2>
              <p className="text-xs text-muted-foreground">
                O'qishingiz uchun optimal yuklamani belgilang
              </p>
            </div>

            {/* Goal Choices */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Asosiy Maqsad:
              </label>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {[
                  '🎯 IELTS 7.0+ Imtihoni',
                  '💬 Erkin Speaking & Muloqot',
                  '🎓 Xorijiy Universitetga Kirish',
                  '💼 Xalqaro Karyera & Ish',
                ].map((g) => (
                  <button
                    key={g}
                    type="button"
                    onClick={() => setSelectedGoal(g)}
                    className={`rounded-xl border p-2.5 text-left text-xs font-bold transition-all ${
                      selectedGoal === g
                        ? 'border-primary bg-primary/10 text-primary shadow-xs'
                        : 'border-border bg-background text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>

            {/* Daily Time Goal */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Kunlik O'qish Vaqti:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { min: 15, title: '15 daqiqa', desc: 'Yengil' },
                  { min: 30, title: '30 daqiqa', desc: 'Tavsiya', popular: true },
                  { min: 60, title: '60 daqiqa', desc: 'Super Fokus' },
                ].map((opt) => (
                  <button
                    key={opt.min}
                    type="button"
                    onClick={() => setSelectedGoalMinutes(opt.min)}
                    className={`rounded-xl border p-3 text-center transition-all ${
                      selectedGoalMinutes === opt.min
                        ? 'border-primary bg-primary/10 font-bold text-primary shadow-xs'
                        : 'border-border bg-background text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <div className="text-xs font-extrabold">{opt.title}</div>
                    <div className="text-[10px] text-muted-foreground">{opt.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                onClick={() => setStep(2)}
                className="flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-bold text-muted-foreground transition-colors hover:text-foreground"
              >
                <ArrowLeft size={16} />
                Orqaga
              </button>
              <button
                onClick={handleFinish}
                disabled={isFinalizing}
                className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-indigo-600 px-6 py-2.5 text-xs font-black text-white shadow-lg shadow-primary/25 transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-50"
              >
                {isFinalizing ? 'Tayyorlanmoqda...' : 'Rejani Yaratish 🚀'}
              </button>
            </div>
          </div>
        )}

        {/* STEP 4: Celebration / Success */}
        {step === 4 && (
          <div className="space-y-6 py-4 text-center duration-300 animate-in zoom-in-95">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl border-4 border-background bg-gradient-to-tr from-emerald-500 to-teal-400 text-3xl text-white shadow-xl shadow-emerald-500/25">
              🎉
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-black tracking-tight text-foreground md:text-3xl">
                Shaxsiy Rejangiz Tayyor!
              </h2>
              <p className="mx-auto max-w-sm text-xs leading-relaxed text-muted-foreground">
                <strong>{selectedLevel}</strong> darajasi uchun kunlik{' '}
                <strong>{selectedGoalMinutes} daqiqalik</strong> o'quv rejasi va boshlang'ich
                kartochkalar kutubxonangizga joylandi.
              </p>
            </div>

            <div className="space-y-2 rounded-2xl border border-border bg-muted/40 p-4 text-left">
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Tanlangan Yo'nalish:</span>
                <strong className="text-foreground">
                  {selectedGoal.includes('General')
                    ? '🎯 IELTS General Training'
                    : '🎓 IELTS Academic'}
                </strong>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Maqsad Darajasi:</span>
                <strong className="text-primary">{selectedLevel}</strong>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Kunlik Odatiy Vaqt:</span>
                <strong className="text-foreground">{selectedGoalMinutes} daqiqa / kun</strong>
              </div>
            </div>

            <button
              onClick={() => {
                onClose();
                navigate('/ielts');
                toast({ title: '🚀 Darsingiz boshlandi! Omad tilaymiz!' });
              }}
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 px-6 py-3.5 text-sm font-black text-white shadow-xl shadow-emerald-600/25 transition-all hover:scale-[1.02] hover:from-emerald-500 hover:to-teal-500 active:scale-95"
            >
              <span>▶️ Bugungi 1-Darsni Boshlash</span>
              <ArrowRight size={18} />
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
};
