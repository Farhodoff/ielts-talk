import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  BookOpen,
  Sparkles,
  Search,
  Volume2,
  CheckCircle2,
  Flame,
  Plus,
  Check,
  ArrowRight,
  ArrowLeft,
  BookCheck,
} from 'lucide-react';
import type { IeltsGrammarTopic } from '../../data/ielts/ielts_grammar_data';
import { useGrammarLessons } from '../../hooks/useGrammarLessons';
import { speakText } from '../../utils/audioTts';
import { useStudyData } from '../../context/IeltsTalkContext';
import {
  useEnglishGrammarMastery,
  GrammarMasteryStatus,
} from '../../hooks/useEnglishGrammarMastery';
import { toast } from '../../hooks/use-toast';
import { getOrEnsureLanguageSubject } from '../../utils/subjectResolver';

export const IeltsGrammarMaster: React.FC = () => {
  const { addFlashcardsBatch, awardXP, subjects, addSubject, addSession } = useStudyData();
  const { topics: rawTopics } = useGrammarLessons('en');
  const { getItemStatus, setItemStatus, getStatsForLevel } = useEnglishGrammarMastery();

  const [searchParams, setSearchParams] = useSearchParams();
  const topicParam = searchParams.get('topic');

  const [activeTab, setActiveTab] = useState<'grammar' | 'quiz'>('grammar');
  const [selectedLevel, setSelectedLevel] = useState<'ALL' | 'A1' | 'A2' | 'B1' | 'B2' | 'C1'>(
    'A1',
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'ALL' | GrammarMasteryStatus>('ALL');
  const [fallbackTopics, setFallbackTopics] = useState<IeltsGrammarTopic[]>([]);
  const [isLoadingFallback, setIsLoadingFallback] = useState(true);

  useEffect(() => {
    const loadDb = async () => {
      try {
        const module = await import('../../data/ielts/ielts_grammar_data');
        setFallbackTopics(module.IELTS_GRAMMAR_DATABASE);
      } catch (err) {
        console.error('Failed to load IELTS grammar data', err);
      } finally {
        setIsLoadingFallback(false);
      }
    };
    loadDb();
  }, []);

  // Saved Flashcard Items Notification State
  const [savedCardIds, setSavedCardIds] = useState<string[]>([]);

  // Use local comprehensive database if hook is still loading or for instant response
  const topics: IeltsGrammarTopic[] = rawTopics.length > 0 ? rawTopics : fallbackTopics;

  // If topicParam is present in URL, synchronize selectedLevel and auto-scroll to the topic card
  useEffect(() => {
    if (!topicParam || topics.length === 0) return;

    const matched = topics.find((t) => t.id === topicParam);
    if (matched) {
      if (matched.level.includes('A1')) setSelectedLevel('A1');
      else if (matched.level.includes('A2')) setSelectedLevel('A2');
      else if (matched.level.includes('B1')) setSelectedLevel('B1');
      else if (matched.level.includes('B2')) setSelectedLevel('B2');
      else if (matched.level.includes('C1')) setSelectedLevel('C1');
      else setSelectedLevel('ALL');

      setStatusFilter('ALL');

      const timer = setTimeout(() => {
        const el = document.getElementById(`grammar-topic-${topicParam}`);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [topicParam, topics.length]);

  // Quiz State
  const [quizIndex, setQuizIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [missedQuestions, setMissedQuestions] = useState<{ topic: IeltsGrammarTopic; q: any }[]>(
    [],
  );
  const [focusedQuizAnswers, setFocusedQuizAnswers] = useState<Record<number, string>>({});

  if (isLoadingFallback && rawTopics.length === 0) {
    return (
      <div className="flex items-center justify-center p-12">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-indigo-600 border-t-transparent"></div>
      </div>
    );
  }

  // Direct Export to Flashcards
  const handleExportToFlashcard = async (topic: IeltsGrammarTopic) => {
    const subjectId = await getOrEnsureLanguageSubject(subjects, addSubject, 'en');

    const frontText = `[${topic.level} English Grammar] ${topic.title}\n\n📐 Formula:\n${topic.structure}`;
    const backText = `🇺🇿 Ma'nosi: ${topic.uzbekMeaning}\n\n💡 Qoida:\n${topic.explanation}\n\n📑 Misol:\n${topic.academicExamples[0]?.sentence || ''}\n(${topic.academicExamples[0]?.translation || ''})`;

    try {
      await addFlashcardsBatch([
        {
          subjectId,
          front: frontText,
          back: backText,
          interval: 1,
          repetitions: 0,
          easeFactor: 2.5,
        },
      ]);
      setSavedCardIds((prev) => [...prev, topic.id]);
      toast({
        title: '⚡ Fleshkarta Yaratildi!',
        description: `"${topic.title}" fleshkartalarga qo'shildi.`,
      });
    } catch (e) {
      toast({
        variant: 'destructive',
        title: 'Xatolik',
        description: 'Fleshkartani saqlashda xato yuz berdi.',
      });
    }
  };

  // Filter Topics
  const filteredTopics = topics.filter((item) => {
    const matchesLevel =
      selectedLevel === 'ALL' ||
      item.level === selectedLevel ||
      (selectedLevel === 'A1' && item.level === 'A1-A2') ||
      (selectedLevel === 'A2' && item.level === 'A1-A2') ||
      (selectedLevel === 'B1' && item.level === 'B1-B2') ||
      (selectedLevel === 'B2' && item.level === 'B1-B2');

    const matchesQuery =
      !searchQuery.trim() ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.uzbekMeaning.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.explanation.toLowerCase().includes(searchQuery.toLowerCase());

    const itemStatus = getItemStatus(item.id);
    const matchesStatus = statusFilter === 'ALL' || itemStatus === statusFilter;

    return matchesLevel && matchesQuery && matchesStatus;
  });

  // Level Stats for Progress Bar
  const currentLevelItems =
    selectedLevel === 'ALL'
      ? topics
      : topics.filter(
          (i) => i.level === selectedLevel || (selectedLevel === 'A1' && i.level === 'A1-A2'),
        );
  const levelStats = getStatsForLevel(currentLevelItems);

  // Compile all questions from currently selected level
  const allQuizPool = currentLevelItems.flatMap((topic) =>
    topic.quizQuestions.map((q) => ({ topic, q })),
  );

  const handleAnswerQuiz = (option: string) => {
    if (selectedOption !== null) return;
    setSelectedOption(option);
    const currentItem = allQuizPool[quizIndex];
    if (!currentItem) return;

    if (option === currentItem.q.correctAnswer) {
      setScore((prev) => prev + 1);
      setItemStatus(currentItem.topic.id, 'mastered');
    } else {
      setMissedQuestions((prev) => [...prev, currentItem]);
      setItemStatus(currentItem.topic.id, 'hard');
    }
  };

  const handleNextQuiz = async () => {
    setSelectedOption(null);
    if (quizIndex + 1 < allQuizPool.length) {
      setQuizIndex((prev) => prev + 1);
    } else {
      setIsQuizCompleted(true);
      if (awardXP && score > 0) {
        await awardXP(score * 25);
      }
      if (addSession) {
        try {
          let engSub = subjects.find(
            (s) =>
              s.name.toLowerCase().includes('english') || s.name.toLowerCase().includes('ielts'),
          );
          await addSession({
            duration: Math.max(3, Math.round(allQuizPool.length * 1.5)),
            type: 'focus',
            completed: true,
            subjectId: engSub?.id || undefined,
            startTime: new Date().toISOString(),
          });
        } catch (e) {}
      }
    }
  };

  const resetQuiz = () => {
    setQuizIndex(0);
    setSelectedOption(null);
    setScore(0);
    setIsQuizCompleted(false);
    setMissedQuestions([]);
  };

  const focusedTopic = topicParam
    ? topics.find(
        (t) =>
          t.id === topicParam ||
          t.id.toLowerCase() === topicParam.toLowerCase() ||
          t.title.toLowerCase().includes(topicParam.toLowerCase()),
      )
    : null;

  // If a specific topic is selected via URL (?topic=...), show the dedicated isolated masterclass
  if (focusedTopic) {
    const isMastered = getItemStatus(focusedTopic.id) === 'mastered';
    const isExported = savedCardIds.includes(focusedTopic.id);
    const currentIndex = topics.findIndex((t) => t.id === focusedTopic.id);
    const nextTopic =
      currentIndex >= 0 && currentIndex < topics.length - 1 ? topics[currentIndex + 1] : null;

    const handleSelectTopic = (targetId: string) => {
      const nextParams = new URLSearchParams(searchParams);
      nextParams.set('topic', targetId);
      setSearchParams(nextParams);
      setFocusedQuizAnswers({});
    };

    const handleBack = () => {
      const nextParams = new URLSearchParams(searchParams);
      nextParams.delete('topic');
      setSearchParams(nextParams);
    };

    const handleCompleteTopic = async () => {
      await setItemStatus(focusedTopic.id, 'mastered');
      awardXP(50);
      try {
        let engSub = subjects.find(
          (s) => s.name.toLowerCase().includes('english') || s.name.toLowerCase().includes('ielts'),
        );
        await addSession({
          duration: 15,
          type: 'focus',
          completed: true,
          subjectId: engSub?.id || undefined,
          startTime: new Date().toISOString(),
        });
      } catch (e) {}
      toast({
        title: '🎉 Tabriklaymiz! Unit Muvaffaqiyatli Yakunlandi',
        description: `"${focusedTopic.title}" bo'yicha dars to'liq o'zlashtirildi va +50 XP berildi!`,
      });
    };

    return (
      <div className="space-y-6 duration-300 animate-in fade-in">
        {/* Navigation & Actions Top Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-800 bg-slate-900/90 p-3 shadow-xl backdrop-blur-md sm:p-4">
          <button
            onClick={handleBack}
            className="flex cursor-pointer items-center gap-2 rounded-xl bg-slate-800 px-3.5 py-2 text-xs font-bold text-slate-200 transition hover:bg-slate-700 active:scale-95"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>← Barcha darslar</span>
          </button>

          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`rounded-full border px-3 py-1 text-xs font-black ${
                focusedTopic.level.startsWith('A')
                  ? 'border-emerald-500/40 bg-emerald-500/20 text-emerald-300'
                  : focusedTopic.level.startsWith('B')
                    ? 'border-blue-500/40 bg-blue-500/20 text-blue-300'
                    : 'border-purple-500/40 bg-purple-500/20 text-purple-300'
              }`}
            >
              {focusedTopic.level} • {focusedTopic.category}
            </span>

            <button
              onClick={() => handleExportToFlashcard(focusedTopic)}
              disabled={isExported}
              className={`flex cursor-pointer items-center gap-1.5 rounded-xl border px-3.5 py-1.5 text-xs font-bold transition ${
                isExported
                  ? 'cursor-default border-emerald-500/50 bg-emerald-500/20 text-emerald-300'
                  : 'border-slate-700 bg-slate-800 text-slate-200 hover:bg-slate-700'
              }`}
            >
              {isExported ? <Check className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
              {isExported ? 'Fleshkartada mavjud' : 'Fleshkartaga saqlash'}
            </button>

            <button
              onClick={handleCompleteTopic}
              className={`flex cursor-pointer items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-black shadow-md transition ${
                isMastered
                  ? 'border border-emerald-500/40 bg-emerald-600/30 text-emerald-300'
                  : 'bg-emerald-600 text-white hover:bg-emerald-500'
              }`}
            >
              <CheckCircle2 className="h-4 w-4" />
              <span>{isMastered ? "✅ O'zlashtirildi" : 'Darsni yakunlash (+50 XP)'}</span>
            </button>
          </div>
        </div>

        {/* Hero Card */}
        <div className="relative overflow-hidden rounded-2xl border border-indigo-500/30 bg-gradient-to-br from-slate-900 via-indigo-950/40 to-slate-900 p-4 shadow-2xl sm:rounded-3xl sm:p-6 md:p-8">
          <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-indigo-500/10 blur-3xl" />
          <div className="flex flex-col gap-3">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/15 px-3 py-1 text-xs font-extrabold text-amber-300">
              <Sparkles className="h-3.5 w-3.5" /> Shaxsiy Rejangizdagi Fokus Dars
            </div>
            <div>
              <h1 className="text-xl font-black tracking-tight text-white sm:text-2xl md:text-3xl">
                {focusedTopic.title}
              </h1>
              <p className="mt-1.5 text-sm font-semibold text-amber-300/90 sm:text-base md:text-lg">
                🇺🇿 {focusedTopic.uzbekMeaning}
              </p>
            </div>
            {focusedTopic.ieltsRelevance && (
              <div className="flex items-start gap-2.5 rounded-xl border border-blue-500/30 bg-blue-500/10 p-3 text-xs leading-relaxed text-blue-200 sm:rounded-2xl sm:p-4 md:text-sm">
                <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />
                <div>
                  <span className="mb-0.5 block font-extrabold text-white">
                    IELTS Qo'llanilishi:
                  </span>
                  {focusedTopic.ieltsRelevance}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Formula & Theory Card */}
        <div className="space-y-3 rounded-2xl border border-slate-800 bg-slate-900/90 p-3.5 shadow-xl backdrop-blur-md sm:space-y-4 sm:rounded-3xl sm:p-6 md:p-8">
          <h2 className="flex items-center gap-2 text-sm font-black text-white sm:text-base md:text-lg">
            <span>📐 Formula</span>
          </h2>

          <div className="rounded-xl border border-indigo-500/30 bg-gradient-to-r from-indigo-950/70 to-slate-950/90 p-3 font-mono text-xs font-bold text-indigo-200 shadow-inner sm:rounded-2xl sm:p-5 sm:text-sm md:text-base">
            {focusedTopic.structure}
          </div>

          <div className="space-y-1 pt-1 sm:pt-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Qoida:</h3>
            <p className="text-xs leading-relaxed text-slate-200 sm:text-sm md:text-base">
              {focusedTopic.explanation}
            </p>
          </div>
        </div>

        {/* Academic & Speaking Examples with Audio */}
        {focusedTopic.academicExamples && focusedTopic.academicExamples.length > 0 && (
          <div className="space-y-3 rounded-2xl border border-slate-800 bg-slate-900/90 p-3.5 shadow-xl backdrop-blur-md sm:space-y-4 sm:rounded-3xl sm:p-6 md:p-8">
            <h2 className="flex items-center gap-2 text-sm font-black text-white sm:text-base md:text-lg">
              <span>🎙️ Misollar va audio</span>
            </h2>
            <div className="space-y-2 sm:space-y-2.5">
              {focusedTopic.academicExamples.map((ex, idx) => (
                <div
                  key={idx}
                  className="group relative flex flex-col justify-between gap-2.5 rounded-xl border border-slate-800/80 bg-slate-950/60 p-3 transition hover:border-indigo-500/40 hover:bg-slate-950/90 sm:flex-row sm:items-center sm:rounded-2xl sm:p-4"
                >
                  <div className="flex-1 space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="rounded-md bg-indigo-500/20 px-1.5 py-0.5 text-[10px] font-black text-indigo-300">
                        {ex.context}
                      </span>
                      <p className="text-xs font-bold text-white transition group-hover:text-indigo-200 sm:text-sm md:text-base">
                        {ex.sentence}
                      </p>
                    </div>
                    <p className="text-[11px] italic text-slate-400 sm:text-xs">
                      🇺🇿 {ex.translation}
                    </p>
                  </div>
                  <button
                    onClick={() => speakText(ex.sentence, 'en-GB')}
                    className="flex shrink-0 cursor-pointer items-center justify-center self-start rounded-xl border border-indigo-500/30 bg-indigo-500/10 p-2 text-indigo-300 transition hover:bg-indigo-500/20 active:scale-95 sm:self-center sm:p-2.5"
                    title="Audioni tinglash"
                  >
                    <Volume2 className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Common Mistakes & Pitfalls */}
        {focusedTopic.commonMistakes && focusedTopic.commonMistakes.length > 0 && (
          <div className="space-y-3 rounded-2xl border border-rose-950/40 bg-slate-900/90 p-3.5 shadow-xl backdrop-blur-md sm:space-y-4 sm:rounded-3xl sm:p-6 md:p-8">
            <h2 className="flex items-center gap-2 text-sm font-black text-white sm:text-base md:text-lg">
              <span>⚠️ Xatolar tahlili</span>
            </h2>
            <div className="space-y-2 sm:space-y-2.5">
              {focusedTopic.commonMistakes.map((m, idx) => (
                <div
                  key={idx}
                  className="space-y-1.5 rounded-xl border border-rose-500/20 bg-rose-950/10 p-3 text-xs sm:rounded-2xl sm:p-4 sm:text-sm"
                >
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4">
                    <div className="flex items-center gap-1.5">
                      <span className="shrink-0 rounded-md bg-rose-500/20 px-1.5 py-0.5 text-[10px] font-black text-rose-300">
                        ❌ XATO
                      </span>
                      <span className="font-medium text-rose-300 line-through">{m.incorrect}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="shrink-0 rounded-md bg-emerald-500/20 px-1.5 py-0.5 text-[10px] font-black text-emerald-300">
                        ✅ TO'G'RI
                      </span>
                      <span className="font-bold text-emerald-300">{m.correct}</span>
                    </div>
                  </div>
                  {m.explanation && (
                    <div className="border-t border-slate-800/80 pt-1 text-[11px] text-slate-400 sm:text-xs">
                      💡 <span className="font-semibold text-slate-300">Izoh:</span> {m.explanation}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Practice Quiz for this unit */}
        {focusedTopic.quizQuestions && focusedTopic.quizQuestions.length > 0 && (
          <div className="space-y-3.5 rounded-2xl border border-slate-800 bg-slate-900/90 p-3.5 shadow-xl backdrop-blur-md sm:space-y-5 sm:rounded-3xl sm:p-6 md:p-8">
            <h2 className="flex items-center gap-2 text-sm font-black text-white sm:text-base md:text-lg">
              <span>🎯 Mustahkamlash testi ({focusedTopic.quizQuestions.length})</span>
            </h2>
            <div className="space-y-6">
              {focusedTopic.quizQuestions.map((q, qIdx) => {
                const selectedOpt = focusedQuizAnswers[qIdx];
                const isAnswered = !!selectedOpt;
                const isCorrect = selectedOpt === q.correctAnswer;

                return (
                  <div
                    key={qIdx}
                    className="space-y-3 rounded-2xl border border-slate-800 bg-slate-950/70 p-4 sm:p-5"
                  >
                    <div className="text-sm font-bold text-white sm:text-base">
                      {qIdx + 1}. {q.question}
                    </div>

                    <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                      {q.options.map((opt, oIdx) => {
                        const isThisSelected = selectedOpt === opt;
                        const isThisCorrect = opt === q.correctAnswer;

                        let btnClass =
                          'border-slate-800 bg-slate-900 text-slate-300 hover:border-indigo-500 hover:bg-slate-800';
                        if (isAnswered) {
                          if (isThisCorrect) {
                            btnClass =
                              'border-emerald-500/60 bg-emerald-500/20 text-emerald-200 font-bold';
                          } else if (isThisSelected) {
                            btnClass = 'border-rose-500/60 bg-rose-500/20 text-rose-200';
                          } else {
                            btnClass =
                              'border-slate-800/50 bg-slate-900/40 text-slate-500 opacity-60';
                          }
                        }

                        return (
                          <button
                            key={oIdx}
                            disabled={isAnswered}
                            onClick={() => {
                              setFocusedQuizAnswers((prev) => ({ ...prev, [qIdx]: opt }));
                              if (opt === q.correctAnswer) {
                                awardXP(10);
                              }
                            }}
                            className={`cursor-pointer rounded-xl border p-3 text-left text-xs font-medium transition sm:text-sm ${btnClass}`}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>

                    {isAnswered && (
                      <div
                        className={`rounded-xl p-3 text-xs leading-relaxed ${
                          isCorrect
                            ? 'border border-emerald-500/30 bg-emerald-500/15 text-emerald-300'
                            : 'border border-rose-500/30 bg-rose-500/15 text-rose-300'
                        }`}
                      >
                        <span className="mb-0.5 block font-bold">
                          {isCorrect
                            ? "✅ To'g'ri javob!"
                            : `❌ Noto'g'ri. To'g'ri javob: ${q.correctAnswer}`}
                        </span>
                        💡 {q.explanation}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Footer Navigation Bar */}
        <div className="flex flex-col items-center justify-between gap-3 rounded-2xl border border-slate-800 bg-slate-900/90 p-4 shadow-xl sm:flex-row">
          <button
            onClick={handleBack}
            className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-slate-800 px-5 py-2.5 text-xs font-bold text-slate-300 transition hover:bg-slate-700 sm:w-auto"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>← Barcha Darslarga Qaytish</span>
          </button>

          <div className="flex w-full items-center gap-2 sm:w-auto">
            {nextTopic && (
              <button
                onClick={() => handleSelectTopic(nextTopic.id)}
                className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-xs font-black text-white shadow-md transition hover:bg-indigo-500 sm:w-auto"
              >
                <span>Keyingi Unit ({nextTopic.level}) →</span>
              </button>
            )}
            <button
              onClick={handleCompleteTopic}
              className={`flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-xs font-black shadow-md transition sm:w-auto ${
                isMastered
                  ? 'border border-emerald-500/40 bg-emerald-600/30 text-emerald-300'
                  : 'bg-emerald-600 text-white hover:bg-emerald-500'
              }`}
            >
              <CheckCircle2 className="h-4 w-4" />
              <span>{isMastered ? "✅ O'zlashtirildi" : 'Darsni Yakunlash (+50 XP)'}</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-2xl border border-blue-800/40 bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 p-4 shadow-2xl sm:rounded-3xl sm:p-6 md:p-8">
        <div className="pointer-events-none absolute -right-12 -top-12 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-12 -left-12 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />

        <div className="relative z-10 flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h1 className="flex items-center gap-2.5 text-xl font-black tracking-tight text-white md:text-2xl">
              <span>📚 English Grammar Master</span>
            </h1>
            <p className="mt-1 text-xs text-slate-300 sm:text-sm">
              A1 dan C1 gacha 76 ta interaktiv dars va mustahkamlash testlari.
            </p>
          </div>

          {/* Compact Stats */}
          <div className="flex items-center gap-2 rounded-2xl border border-slate-800 bg-slate-900/80 px-4 py-2 shadow-lg backdrop-blur-md">
            <Flame className="h-5 w-5 text-amber-400" />
            <div className="text-xs font-bold text-slate-200">
              {topics.length} Dars · {allQuizPool.length} Test
            </div>
          </div>
        </div>

        {/* Sub-Tabs Bar */}
        <div className="mt-5 flex items-center gap-2 overflow-x-auto border-t border-slate-800/80 pt-3">
          <button
            onClick={() => setActiveTab('grammar')}
            className={`flex cursor-pointer items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition-all ${
              activeTab === 'grammar'
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'border border-slate-800 bg-slate-900/70 text-slate-400 hover:bg-slate-800 hover:text-slate-200'
            }`}
          >
            <BookOpen className="h-3.5 w-3.5" />
            <span>Grammatika ({topics.length})</span>
          </button>

          <button
            onClick={() => {
              setActiveTab('quiz');
              resetQuiz();
            }}
            className={`flex cursor-pointer items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition-all ${
              activeTab === 'quiz'
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'border border-slate-800 bg-slate-900/70 text-slate-400 hover:bg-slate-800 hover:text-slate-200'
            }`}
          >
            <Flame className="h-3.5 w-3.5 text-amber-400" />
            <span>Testlar ({allQuizPool.length})</span>
          </button>
        </div>
      </div>

      {/* Level & Search Controls (Matching user screenshot 4) */}
      {activeTab === 'grammar' && (
        <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/90 p-4 shadow-xl backdrop-blur-md">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            {/* Level Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
              {(['BARCHASI', 'A1', 'A2', 'B1', 'B2', 'C1'] as const).map((lvl) => {
                const levelKey = lvl === 'BARCHASI' ? 'ALL' : lvl;
                const isSelected = selectedLevel === levelKey;
                return (
                  <button
                    key={lvl}
                    onClick={() => setSelectedLevel(levelKey)}
                    className={`rounded-xl px-4 py-1.5 text-xs font-bold transition-all ${
                      isSelected
                        ? 'scale-105 bg-rose-600 text-white shadow-md shadow-rose-600/30'
                        : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-slate-200'
                    }`}
                  >
                    {lvl}
                  </button>
                );
              })}
            </div>

            {/* Search Bar */}
            <div className="relative max-w-md flex-1">
              <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Mavzu yoki qoidani qidirish..."
                className="w-full rounded-xl border border-slate-800 bg-slate-950/80 py-2.5 pl-10 pr-4 text-sm text-white placeholder-slate-500 transition focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Mastery Filter & Progress Bar */}
          <div className="flex flex-col justify-between gap-3 border-t border-slate-800/80 pt-3 md:flex-row md:items-center">
            {/* Status Filter buttons */}
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="mr-1 font-medium text-slate-400">Holat:</span>
              {(['ALL', 'mastered', 'learned', 'hard', 'unlearned'] as const).map((st) => (
                <button
                  key={st}
                  onClick={() => setStatusFilter(st)}
                  className={`rounded-lg px-2.5 py-1 font-medium transition ${
                    statusFilter === st
                      ? 'bg-indigo-600 text-white'
                      : 'border border-slate-800 bg-slate-950 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {st === 'ALL'
                    ? 'Barchasi'
                    : st === 'mastered'
                      ? 'Mustahkamlandi'
                      : st === 'learned'
                        ? "O'rganildi"
                        : st === 'hard'
                          ? 'Qiyin'
                          : 'Yangi'}
                </button>
              ))}
            </div>

            {/* Progress Bar Widget */}
            <div className="flex items-center gap-3">
              <div className="text-xs text-slate-400">
                Natija ({selectedLevel}):{' '}
                <span className="font-bold text-emerald-400">{levelStats.progressPercent}%</span> (
                {levelStats.mastered + levelStats.learned}/{levelStats.total})
              </div>
              <div className="h-2.5 w-32 overflow-hidden rounded-full border border-slate-800 bg-slate-950">
                <div
                  className="h-full bg-gradient-to-r from-emerald-500 to-indigo-500 transition-all duration-500"
                  style={{ width: `${levelStats.progressPercent}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 1: GRAMMAR UNITS LIST */}
      {activeTab === 'grammar' && (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {filteredTopics.length === 0 ? (
            <div className="col-span-2 space-y-3 rounded-3xl border border-dashed border-slate-800 bg-slate-900/60 p-12 text-center text-slate-400">
              <BookCheck className="mx-auto h-8 w-8 text-slate-600" />
              <p className="text-sm font-semibold">Mos keluvchi grammatika mavzusi topilmadi.</p>
              <button
                onClick={() => {
                  setSelectedLevel('ALL');
                  setStatusFilter('ALL');
                  setSearchQuery('');
                }}
                className="rounded-xl bg-indigo-600 px-4 py-2 text-xs font-bold text-white transition hover:bg-indigo-700"
              >
                Filtrlarni tozalash
              </button>
            </div>
          ) : (
            filteredTopics.map((topic) => {
              const status = getItemStatus(topic.id);
              const isExported = savedCardIds.includes(topic.id);
              const isTargetTopic = topic.id === topicParam;

              return (
                <div
                  key={topic.id}
                  id={`grammar-topic-${topic.id}`}
                  className={`group relative flex flex-col justify-between space-y-4 rounded-2xl border p-5 shadow-lg backdrop-blur-md transition-all duration-300 ${
                    isTargetTopic
                      ? 'border-amber-500 bg-gradient-to-b from-amber-500/10 via-slate-900/95 to-slate-900/95 shadow-2xl shadow-amber-500/20 ring-2 ring-amber-500/70'
                      : 'border-slate-800/80 bg-slate-900/80 hover:border-indigo-500/50'
                  }`}
                >
                  <div>
                    {/* Header Row: Level Badge, Category, Audio & Flashcards */}
                    <div className="mb-3 flex items-center justify-between gap-2">
                      <div className="flex flex-wrap items-center gap-2">
                        {isTargetTopic && (
                          <span className="inline-flex animate-pulse items-center gap-1 rounded-full border border-amber-500/50 bg-amber-500/20 px-2.5 py-0.5 text-xs font-black text-amber-300">
                            🎯 Rejadagi dars
                          </span>
                        )}
                        <span
                          className={`rounded-full border px-2.5 py-0.5 text-xs font-bold ${
                            topic.level.startsWith('A')
                              ? 'border-emerald-500/30 bg-emerald-500/20 text-emerald-300'
                              : topic.level.startsWith('B')
                                ? 'border-blue-500/30 bg-blue-500/20 text-blue-300'
                                : 'border-purple-500/30 bg-purple-500/20 text-purple-300'
                          }`}
                        >
                          {topic.level}
                        </span>
                        <span className="text-[11px] font-semibold text-slate-400">
                          {topic.category}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() =>
                            speakText(topic.title.replace(/Unit \d+:\s*/, ''), 'en-US')
                          }
                          className="rounded-xl bg-slate-800/80 p-2 text-slate-400 transition hover:bg-indigo-600/30 hover:text-indigo-300"
                          title="Inglizcha talaffuz"
                        >
                          <Volume2 className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleExportToFlashcard(topic)}
                          className={`rounded-xl border p-2 transition ${
                            isExported
                              ? 'border-emerald-500/30 bg-emerald-500/20 text-emerald-300'
                              : 'border-slate-800 bg-slate-800/80 text-slate-400 hover:bg-amber-600/30 hover:text-amber-300'
                          }`}
                          title="Fleshkartaga saqlash"
                        >
                          {isExported ? (
                            <Check className="h-4 w-4" />
                          ) : (
                            <Plus className="h-4 w-4" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Unit Title & Uzbek meaning */}
                    <h3 className="mb-1 text-lg font-black tracking-tight text-white transition group-hover:text-indigo-300">
                      {topic.title}
                    </h3>
                    <p className="mb-3 text-xs font-semibold text-indigo-400/90">
                      🇺🇿 {topic.uzbekMeaning}
                    </p>

                    {/* Formula / Structure Box */}
                    <div className="mb-3 space-y-1 rounded-xl border border-slate-800/80 bg-slate-950/70 p-3">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-rose-400">
                        📐 Formula:
                      </div>
                      <code className="block break-words font-mono text-xs text-amber-300">
                        {topic.structure}
                      </code>
                    </div>

                    {/* Explanation Box */}
                    <div className="mb-3 space-y-1 rounded-xl border border-slate-800/40 bg-slate-950/40 p-3 text-xs leading-relaxed text-slate-300">
                      <span className="block text-[11px] font-bold text-slate-200">💡 Qoida:</span>
                      <p>{topic.explanation}</p>
                    </div>

                    {/* Example Sentences with individual Audio */}
                    <div className="mb-3 space-y-2">
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        📑 Misollar:
                      </span>
                      {topic.academicExamples.map((ex, idx) => (
                        <div
                          key={idx}
                          className="space-y-1 rounded-xl border border-slate-800/60 bg-slate-950/50 p-2.5"
                        >
                          <div className="flex items-center justify-between gap-2 text-xs font-semibold text-slate-100">
                            <span>"{ex.sentence}"</span>
                            <button
                              onClick={() => speakText(ex.sentence, 'en-US')}
                              className="shrink-0 rounded-lg p-1 text-slate-400 hover:bg-slate-800 hover:text-indigo-300"
                              title="O'qib berish"
                            >
                              <Volume2 className="h-3.5 w-3.5" />
                            </button>
                          </div>
                          <p className="border-l-2 border-indigo-500 pl-2 text-[11px] text-slate-400">
                            {ex.translation}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Common Mistakes Box */}
                    {topic.commonMistakes.length > 0 && (
                      <div className="mb-3 space-y-1">
                        {topic.commonMistakes.map((m, idx) => (
                          <div
                            key={idx}
                            className="space-y-1 rounded-xl border border-rose-900/40 bg-rose-950/30 p-2.5 text-xs"
                          >
                            <div className="text-rose-400 line-through">❌ {m.incorrect}</div>
                            <div className="font-bold text-emerald-400">✅ {m.correct}</div>
                            <div className="text-[10px] text-slate-400">{m.explanation}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Bottom Row: Status Toggles */}
                  <div className="flex items-center justify-between gap-2 border-t border-slate-800/80 pt-3">
                    <span className="hidden text-[10px] font-medium text-slate-500 sm:inline">
                      Holat:
                    </span>
                    <div className="flex w-full items-center justify-between gap-1 sm:w-auto sm:justify-start">
                      {(['unlearned', 'hard', 'learned', 'mastered'] as const).map((st) => (
                        <button
                          key={st}
                          onClick={() => setItemStatus(topic.id, st)}
                          className={`flex-1 rounded-lg px-2 py-1 text-center text-[10px] font-bold transition sm:flex-initial ${
                            status === st
                              ? st === 'mastered'
                                ? 'bg-emerald-600 text-white'
                                : st === 'learned'
                                  ? 'bg-blue-600 text-white'
                                  : st === 'hard'
                                    ? 'bg-amber-600 text-white'
                                    : 'bg-slate-700 text-white'
                              : 'border border-slate-800 bg-slate-950 text-slate-500 hover:text-slate-300'
                          }`}
                        >
                          {st === 'mastered'
                            ? 'Mustahkam'
                            : st === 'learned'
                              ? "O'rganildi"
                              : st === 'hard'
                                ? 'Qiyin'
                                : 'Yangi'}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      )}

      {/* TAB 2: AI / PRACTICE QUIZ GENERATOR */}
      {activeTab === 'quiz' && (
        <div className="mx-auto max-w-2xl space-y-6 rounded-3xl border border-slate-800 bg-slate-900/90 p-6 shadow-2xl backdrop-blur-md md:p-8">
          {!isQuizCompleted && allQuizPool.length > 0 ? (
            <>
              {/* Quiz Header & Progress */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                    Savol {quizIndex + 1} / {allQuizPool.length}
                  </span>
                  <h3 className="mt-0.5 text-sm font-black text-white">
                    {allQuizPool[quizIndex]?.topic.title}
                  </h3>
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-400">To'plangan ball</span>
                  <div className="text-lg font-black text-emerald-400">
                    {score} / {allQuizPool.length}
                  </div>
                </div>
              </div>

              {/* Question Text */}
              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4 text-base font-bold leading-relaxed text-white">
                {allQuizPool[quizIndex]?.q.question}
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 gap-2.5">
                {allQuizPool[quizIndex]?.q.options.map((opt: string, idx: number) => {
                  const isSelected = selectedOption === opt;
                  const isCorrect = opt === allQuizPool[quizIndex]?.q.correctAnswer;

                  let btnClass =
                    'bg-slate-950/70 hover:bg-slate-800 border-slate-800 text-slate-200';
                  if (selectedOption !== null) {
                    if (isCorrect) {
                      btnClass = 'bg-emerald-950/80 border-emerald-500 text-emerald-300 font-bold';
                    } else if (isSelected && !isCorrect) {
                      btnClass = 'bg-rose-950/80 border-rose-500 text-rose-300';
                    } else {
                      btnClass = 'bg-slate-950/40 border-slate-900 text-slate-500 opacity-50';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleAnswerQuiz(opt)}
                      disabled={selectedOption !== null}
                      className={`flex w-full items-center justify-between rounded-xl border p-3.5 text-left text-xs font-medium transition ${btnClass}`}
                    >
                      <span>{opt}</span>
                      {selectedOption !== null && isCorrect && (
                        <CheckCircle2 size={16} className="text-emerald-400" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Answer Explanation & Next Button */}
              {selectedOption !== null && (
                <div className="space-y-4 pt-2 animate-in fade-in">
                  <div className="rounded-xl border border-indigo-900/40 bg-indigo-950/40 p-3 text-xs text-indigo-300">
                    💡 <strong>Tushuntirish:</strong> {allQuizPool[quizIndex]?.q.explanation}
                  </div>
                  <button
                    onClick={handleNextQuiz}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 py-3 text-xs font-bold text-white shadow-lg shadow-indigo-600/30 transition hover:bg-indigo-700"
                  >
                    <span>Keyingi Savol</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              )}
            </>
          ) : isQuizCompleted ? (
            <div className="space-y-6 py-6 text-center">
              <div className="inline-flex rounded-full border border-emerald-500/30 bg-emerald-500/20 p-4 text-emerald-400">
                <Sparkles className="h-10 w-10" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-white">Test Yakunlandi! 🎉</h3>
                <p className="mt-1 text-sm text-slate-300">
                  Siz {allQuizPool.length} ta savoldan <strong>{score}</strong> tasiga to'g'ri javob
                  berdingiz ({Math.round((score / allQuizPool.length) * 100)}%).
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-3">
                {missedQuestions.length > 0 && (
                  <button
                    onClick={async () => {
                      const subjectId = await getOrEnsureLanguageSubject(
                        subjects,
                        addSubject,
                        'en',
                      );
                      const cards = missedQuestions.map((m) => ({
                        subjectId: subjectId || undefined,
                        front: `[${m.topic.level} Grammar Practice] ${m.topic.title}\n\n❓ ${m.q.question}`,
                        back: `✅ To'g'ri javob: ${m.q.correctAnswer}\n\n💡 Izoh: ${m.q.explanation}\n\n📐 Formula: ${m.topic.structure}`,
                        interval: 1,
                        repetitions: 0,
                        easeFactor: 2.5,
                      }));
                      await addFlashcardsBatch(cards);
                      toast({
                        title: '🎴 Fleshkartalar Saqlandi!',
                        description: `${cards.length} ta xato qilingan savol takrorlash tizimiga qo'shildi.`,
                      });
                    }}
                    className="rounded-xl bg-amber-600 px-6 py-2.5 text-xs font-bold text-white shadow transition hover:bg-amber-700"
                  >
                    Xatolarni Fleshkartaga Saqlash ({missedQuestions.length})
                  </button>
                )}
                <button
                  onClick={resetQuiz}
                  className="rounded-xl bg-indigo-600 px-6 py-2.5 text-xs font-bold text-white shadow transition hover:bg-indigo-700"
                >
                  Qayta topshirish
                </button>
                <button
                  onClick={() => setActiveTab('grammar')}
                  className="rounded-xl bg-slate-800 px-6 py-2.5 text-xs font-bold text-slate-200 transition hover:bg-slate-700"
                >
                  Darslarga qaytish
                </button>
              </div>
            </div>
          ) : (
            <div className="p-8 text-center text-xs text-slate-400">
              Ushbu darajada test savollari topilmadi.
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default IeltsGrammarMaster;
