import React, { useState, useEffect } from 'react';
import {
  Search,
  Sparkles,
  BookOpen,
  Volume2,
  Plus,
  Check,
  Bookmark,
  History,
  Trash2,
  ArrowRight,
} from 'lucide-react';
import { generateAIResponse, extractJsonFromAiResponse } from '../utils/ai/aiCore';
import { speakText } from '../utils/audioTts';
import { useStudyData } from '../context/StudyPlannerContext';
import { FuriganaText } from "../components/common/FuriganaText";
import { supabase } from '../lib/supabase';
import { toDeterministicUUID } from '../utils/uuid';
import { isSuperAdmin } from '../utils/admin';
import { useLanguage } from '../context/LanguageContext';
import { findLanguageSubject, getOrEnsureLanguageSubject } from '../utils/subjectResolver';

export interface VocabWordDetails {
  word: string;
  language: 'en' | 'ja';
  phonetic?: string;
  furigana?: string;
  level: string; // e.g. B2, C1, C2, N3, N2, N1
  partOfSpeech: string;
  uzbekTranslation: string;
  definition: string;
  synonyms: string[];
  collocations: string[];
  examples: { sentence: string; translation: string }[];
}

export const VocabularyBuilderPage: React.FC = () => {
  const { user, subjects, addFlashcard, addSubject, primaryLanguage } = useStudyData();
  const { language } = useLanguage();
  const isSuper = isSuperAdmin(user?.email, user?.role);

  const BUILTIN_VOCAB_DB: Record<string, VocabWordDetails> = {
    comprehensive: {
      word: 'comprehensive',
      language: 'en',
      phonetic: '/ˌkɒm.prɪˈhen.sɪv/',
      furigana: '',
      level: 'B2',
      partOfSpeech: 'Adjective',
      uzbekTranslation: "Keng qamrovli, har tomonlama, to'liq",
      definition: 'Complete and including everything that is necessary.',
      synonyms: ['exhaustive', 'thorough', 'all-inclusive', 'extensive'],
      collocations: ['comprehensive study', 'comprehensive review', 'comprehensive guide'],
      examples: [
        {
          sentence: 'The academy provides a comprehensive IELTS preparation program.',
          translation: "Akademiya keng qamrovli IELTS tayyorgarlik dasturini taqdim etadi.",
        },
      ],
    },
  };

  const [query, setQuery] = useState('comprehensive');
  const [isSearching, setIsSearching] = useState(false);
  const [currentResult, setCurrentResult] = useState<VocabWordDetails | null>(
    () => BUILTIN_VOCAB_DB['comprehensive'],
  );
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>('');
  const [isAddedToFlashcards, setIsAddedToFlashcards] = useState(false);

  const [activeTab, setActiveTab] = useState<'search' | 'saved' | 'history'>('search');
  const [history, setHistory] = useState<VocabWordDetails[]>(() => [BUILTIN_VOCAB_DB['comprehensive']]);
  const [savedWords, setSavedWords] = useState<VocabWordDetails[]>([]);

  const SAMPLE_WORDS = [
    { label: 'paramount (C1)', query: 'paramount' },
    { label: 'ubiquitous (C2)', query: 'ubiquitous' },
    { label: 'resilient (B2)', query: 'resilient' },
    { label: 'pragmatic (C1)', query: 'pragmatic' },
    { label: 'perseverance (C1)', query: 'perseverance' },
    { label: 'meticulous (C2)', query: 'meticulous' },
  ];

  useEffect(() => {
    // Load from localStorage as fallback
    try {
      const h = localStorage.getItem('study_planner_vocab_history');
      if (h) setHistory(JSON.parse(h));

      const s = localStorage.getItem('study_planner_vocab_saved');
      if (s) setSavedWords(JSON.parse(s));
    } catch (e) {
      console.error(e);
    }

    // Load from Supabase DB (user_saved_vocabulary table + metadata fallback)
    const fetchDbVocab = async () => {
      try {
        const targetUserId = user?.id;
        if (!targetUserId) return;

        // 1. Fetch saved words from user_saved_vocabulary table
        const { data: dbSavedRows, error: dbErr } = await supabase
          .from('user_saved_vocabulary')
          .select('*')
          .eq('user_id', targetUserId)
          .order('created_at', { ascending: false });

        if (!dbErr && dbSavedRows && dbSavedRows.length > 0) {
          const mappedSaved: VocabWordDetails[] = dbSavedRows.map((r) => ({
            word: r.term,
            language: (r.language || 'ja') as 'en' | 'ja',
            reading: r.reading || undefined,
            furigana: r.reading || undefined,
            level: 'N3',
            partOfSpeech: '',
            uzbekTranslation: r.meaning,
            definition: r.meaning,
            synonyms: [],
            collocations: [],
            examples: r.example_sentence
              ? [{ sentence: r.example_sentence, translation: r.example_translation || '' }]
              : [],
          }));
          setSavedWords(mappedSaved);
          localStorage.setItem('study_planner_vocab_saved', JSON.stringify(mappedSaved));
        } else if (user.user_metadata?.vocab_saved) {
          // Fallback to user_metadata
          const dbS = user.user_metadata.vocab_saved;
          setSavedWords(dbS);
          localStorage.setItem('study_planner_vocab_saved', JSON.stringify(dbS));
        }

        if (user.user_metadata?.vocab_history) {
          const dbH = user.user_metadata.vocab_history;
          setHistory(dbH);
          localStorage.setItem('study_planner_vocab_history', JSON.stringify(dbH));
        }
      } catch (err) {
        console.warn('Failed to fetch DB vocab state:', err);
      }
    };
    fetchDbVocab();
  }, []);

  useEffect(() => {
    if (subjects.length > 0 && !selectedSubjectId) {
      const isJa = !isSuper || primaryLanguage === 'ja';
      const matched = findLanguageSubject(subjects, isJa ? 'ja' : 'en');
      setSelectedSubjectId(matched ? matched.id : subjects[0].id);
    }
  }, [subjects, selectedSubjectId, isSuper, primaryLanguage]);

  const handleSearch = async (targetQuery?: string) => {
    const searchTerm = (targetQuery || query).trim();
    if (!searchTerm) return;

    setIsSearching(true);
    setErrorMsg(null);
    setIsAddedToFlashcards(false);

    // Check local preloaded entries for instant zero-latency dictionary hit
    if (BUILTIN_VOCAB_DB[searchTerm]) {
      const hit = BUILTIN_VOCAB_DB[searchTerm];
      setCurrentResult(hit);
      setIsSearching(false);
      const updatedHistory = [
        hit,
        ...history.filter((h) => h.word.toLowerCase() !== hit.word.toLowerCase()),
      ].slice(0, 30);
      setHistory(updatedHistory);
      try {
        localStorage.setItem('study_planner_vocab_history', JSON.stringify(updatedHistory));
      } catch (e) {}
      return;
    }

    const prompt = `You are a professional English linguist, lexicographer, and IELTS vocabulary expert.
Analyze the following English word or phrase: "${searchTerm}".

Return ONLY a raw valid JSON object (no markdown, no backticks) with this structure:
{
  "word": "${searchTerm}",
  "language": "en",
  "phonetic": "IPA pronunciation (e.g. /ˈpær.ə.maʊnt/)",
  "furigana": "",
  "level": "A1" | "A2" | "B1" | "B2" | "C1" | "C2" | "IELTS",
  "partOfSpeech": "noun / verb / adjective / adverb / phrasal verb",
  "uzbekTranslation": "To'g'ri va aniq o'zbekcha tarjimasi",
  "definition": "Clear Oxford/Cambridge English definition",
  "synonyms": ["synonym1", "synonym2", "synonym3", "synonym4"],
  "collocations": ["collocation 1", "collocation 2", "collocation 3"],
  "examples": [
    { "sentence": "Authentic academic or IELTS example sentence 1", "translation": "O'zbekcha tarjimasi 1" },
    { "sentence": "Example sentence 2", "translation": "O'zbekcha tarjimasi 2" },
    { "sentence": "Example sentence 3", "translation": "O'zbekcha tarjimasi 3" }
  ]
}`;

    try {
      const res = await generateAIResponse(
        [
          {
            role: 'system',
            content:
              'You are a dictionary JSON API provider. Return ONLY raw valid JSON object without markdown fences.',
          },
          { role: 'user', content: prompt },
        ],
        { isJson: true },
      );

      const parsed = extractJsonFromAiResponse<VocabWordDetails>(res);
      if (!parsed || !parsed.word) {
        throw new Error('Failed to parse dictionary structure');
      }
      setCurrentResult(parsed);

      // Pre-select matching subject for the analyzed word language
      const matchedSubject = findLanguageSubject(subjects, parsed.language || 'ja');
      if (matchedSubject) {
        setSelectedSubjectId(matchedSubject.id);
      }

      // Add to history
      const updatedHistory = [
        parsed,
        ...history.filter((h) => h.word.toLowerCase() !== parsed.word.toLowerCase()),
      ].slice(0, 30);
      setHistory(updatedHistory);
      try {
        localStorage.setItem('study_planner_vocab_history', JSON.stringify(updatedHistory));
      } catch (e) {
        console.warn(e);
      }
      if (user) {
        supabase.auth
          .updateUser({ data: { vocab_history: updatedHistory } })
          .catch((err) => console.warn(err));
      }
    } catch (err: any) {
      console.error('Vocab search error:', err);
      if (BUILTIN_VOCAB_DB[searchTerm]) {
        setCurrentResult(BUILTIN_VOCAB_DB[searchTerm]);
      } else {
        setErrorMsg(
          language === 'ja'
            ? '単語の分析中にエラーが発生しました。もう一度お試しください。'
            : "So'zni tahlil qilishda xatolik yuz berdi. Iltimos qayta urinib ko'ring.",
        );
      }
    } finally {
      setIsSearching(false);
    }
  };

  const toggleSaveWord = (wordObj: VocabWordDetails) => {
    const isSaved = savedWords.some((w) => w.word.toLowerCase() === wordObj.word.toLowerCase());
    let updated: VocabWordDetails[];
    if (isSaved) {
      updated = savedWords.filter((w) => w.word.toLowerCase() !== wordObj.word.toLowerCase());
    } else {
      updated = [wordObj, ...savedWords];
    }
    setSavedWords(updated);
    try {
      localStorage.setItem('study_planner_vocab_saved', JSON.stringify(updated));
    } catch (e) {
      console.warn(e);
    }

    if (user?.id) {
      const uuid = toDeterministicUUID(`vocab_${user.id}_${wordObj.word.toLowerCase()}`);
      if (!isSaved) {
        // Insert into user_saved_vocabulary table
        supabase
          .from('user_saved_vocabulary')
          .upsert({
            id: uuid,
            user_id: user.id,
            language: wordObj.language || 'ja',
            term: wordObj.word,
            reading: wordObj.furigana || wordObj.phonetic || null,
            meaning: wordObj.uzbekTranslation || wordObj.definition,
            example_sentence: wordObj.examples?.[0]?.sentence || null,
            example_translation: wordObj.examples?.[0]?.translation || null,
            is_saved: true,
            updated_at: new Date().toISOString(),
          })
          .then(({ error }) => {
            if (error) console.warn('[VocabularyBuilderPage] DB upsert error:', error);
          });
      } else {
        // Delete from user_saved_vocabulary table
        supabase
          .from('user_saved_vocabulary')
          .delete()
          .eq('id', uuid)
          .then(({ error }) => {
            if (error) console.warn('[VocabularyBuilderPage] DB delete error:', error);
          });
      }

      // Fallback metadata update
      supabase.auth
        .updateUser({ data: { vocab_saved: updated } })
        .catch((err) => console.warn(err));
    }
  };

  const handleCreateFlashcard = async () => {
    if (!currentResult) return;

    let targetSubId = selectedSubjectId;
    if (!targetSubId) {
      targetSubId = await getOrEnsureLanguageSubject(
        subjects,
        addSubject,
        currentResult.language || 'ja',
      );
      setSelectedSubjectId(targetSubId);
    }

    const front =
      currentResult.furigana ||
      `${currentResult.word} (${currentResult.partOfSpeech}) [${currentResult.level}]`;
    const back = `Tarjimasi: ${currentResult.uzbekTranslation}\nTa'rifi: ${currentResult.definition}\nCollocations: ${currentResult.collocations.join(', ')}\n\nMisol: ${currentResult.examples[0]?.sentence || ''}`;

    await addFlashcard({
      subjectId: targetSubId || undefined,
      front,
      back,
    });

    setIsAddedToFlashcards(true);
    setTimeout(() => setIsAddedToFlashcards(false), 3000);
  };

  const isCurrentSaved = currentResult
    ? savedWords.some((w) => w.word.toLowerCase() === currentResult.word.toLowerCase())
    : false;

  return (
    <div className="mx-auto max-w-6xl space-y-8 p-4 pb-16 md:p-8">
      {/* Header */}
      <div className="flex flex-col items-start justify-between gap-4 border-b border-border pb-6 md:flex-row md:items-center">
        <div className="flex items-center gap-3.5">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-primary/25 bg-primary/10 text-primary shadow-xs">
            <BookOpen size={22} />
          </div>
          <div>
            <h1 className="font-display text-2xl font-black tracking-tight text-foreground md:text-3xl">
              {language === 'ja' ? 'AI単語帳・辞書ビルダー' : 'Smart Vocabulary Builder'}
            </h1>
            <p className="mt-0.5 text-xs text-muted-foreground">
              {language === 'en'
                ? 'Master academic & IELTS vocabulary with AI definitions, collocations, and examples.'
                : "IELTS va akademik ingliz tili lug'at boyligingizni oshiring, kolokatsiyalar, sinonimlar va misollar o'rganing."}
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex rounded-2xl border border-border bg-muted/60 p-1.5">
          <button
            onClick={() => setActiveTab('search')}
            className={`flex cursor-pointer items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-bold transition-all ${
              activeTab === 'search'
                ? 'bg-primary text-primary-foreground shadow-xs'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <Search size={14} /> {language === 'ja' ? '検索' : 'Qidiruv'}
          </button>
          <button
            onClick={() => setActiveTab('saved')}
            className={`flex cursor-pointer items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-bold transition-all ${
              activeTab === 'saved'
                ? 'bg-primary text-primary-foreground shadow-xs'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <Bookmark size={14} />{' '}
            {language === 'ja'
              ? `保存済み (${savedWords.length})`
              : `Saqlanganlar (${savedWords.length})`}
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className={`flex cursor-pointer items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-bold transition-all ${
              activeTab === 'history'
                ? 'bg-primary text-primary-foreground shadow-xs'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <History size={14} /> {language === 'ja' ? '履歴' : 'Tarix'}
          </button>
        </div>
      </div>

      {/* TAB 1: SEARCH */}
      {activeTab === 'search' && (
        <div className="space-y-6">
          {/* Search Input Bar */}
          <div className="space-y-4 rounded-3xl border border-border bg-card p-6 shadow-sm">
            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-3.5 text-muted-foreground" size={18} />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                  placeholder={
                    language === 'en'
                      ? 'Type an English word & press Enter (e.g. resilient, paramount, meticulous)...'
                      : "So'z kiritib Enter bosing (masalan: resilient, paramount, meticulous)..."
                  }
                  className="w-full rounded-2xl border border-border bg-background py-3.5 pl-11 pr-4 text-sm font-medium text-foreground transition-all placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <button
                onClick={() => handleSearch()}
                disabled={isSearching || !query.trim()}
                className="flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-3.5 text-xs font-bold text-primary-foreground shadow-md shadow-primary/20 transition-all hover:bg-primary/90 active:scale-95 disabled:opacity-50"
              >
                {isSearching ? (
                  <Sparkles size={16} className="animate-spin" />
                ) : (
                  <Search size={16} />
                )}
                <span>
                  {isSearching
                    ? language === 'ja'
                      ? '分析中...'
                      : 'Tahlil qilinmoqda...'
                    : language === 'ja'
                      ? 'AI分析'
                      : 'AI Tahlil'}
                </span>
              </button>
            </div>

            {/* Sample topics */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                {language === 'ja' ? 'おすすめ単語:' : 'Namunalar:'}
              </span>
              {SAMPLE_WORDS.map((w, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setQuery(w.query);
                    handleSearch(w.query);
                  }}
                  className="cursor-pointer rounded-full border border-border bg-muted px-3 py-1 text-[11px] font-medium text-muted-foreground transition-all hover:bg-muted/80 hover:text-foreground active:scale-95"
                >
                  {w.label}
                </button>
              ))}
            </div>
          </div>

          {/* Error */}
          {errorMsg && (
            <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-4 text-xs font-bold text-red-500">
              {errorMsg}
            </div>
          )}

          {/* Search Result Card */}
          {currentResult && (
            <div className="space-y-6 rounded-3xl border border-border bg-card p-6 shadow-sm md:p-8">
              {/* Word Top Header */}
              <div className="flex flex-col items-start justify-between gap-4 border-b border-border pb-6 sm:flex-row sm:items-center">
                <div>
                  <div className="flex items-center gap-3">
                    <h2 className="font-display text-3xl font-black text-foreground">
                      {currentResult.furigana ? (
                        <FuriganaText text={currentResult.furigana} />
                      ) : (
                        currentResult.word
                      )}
                    </h2>
                    <span className="rounded-full border border-[#C9A961]/30 bg-[#C9A961]/15 px-3 py-1 text-xs font-black uppercase tracking-wider text-[#C9A961]">
                      {currentResult.level}
                    </span>
                    <span className="font-serif text-xs italic text-muted-foreground">
                      ({currentResult.partOfSpeech})
                    </span>
                  </div>
                  {currentResult.phonetic && (
                    <p className="mt-1 font-mono text-xs text-muted-foreground">
                      {currentResult.phonetic}
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      speakText(
                        currentResult.word,
                        currentResult.language === 'ja' ? 'ja-JP' : 'en-US',
                      )
                    }
                    className="flex cursor-pointer items-center gap-2 rounded-2xl border border-border bg-muted p-3 text-xs font-bold text-foreground transition-all hover:bg-muted/80 active:scale-95"
                  >
                    <Volume2 size={18} className="text-primary" />
                    <span>{language === 'ja' ? '発音' : 'Talaffuz'}</span>
                  </button>
                  <button
                    onClick={() => toggleSaveWord(currentResult)}
                    className={`flex cursor-pointer items-center gap-2 rounded-2xl border p-3 text-xs font-bold transition-all active:scale-95 ${
                      isCurrentSaved
                        ? 'border-[#C9A961]/40 bg-[#C9A961]/15 text-[#C9A961]'
                        : 'border-border bg-muted text-foreground hover:bg-muted/80'
                    }`}
                  >
                    <Bookmark size={18} className={isCurrentSaved ? 'fill-current' : ''} />
                    <span>
                      {language === 'ja'
                        ? isCurrentSaved
                          ? '保存済み'
                          : '保存する'
                        : isCurrentSaved
                          ? 'Saqlangan'
                          : 'Saqlash'}
                    </span>
                  </button>
                </div>
              </div>

              {/* Uzbek / Japanese Translation & Definition */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-1 rounded-2xl border border-l-4 border-border border-l-primary bg-card p-5 shadow-xs">
                  <span className="text-[10px] font-black uppercase tracking-wider text-primary">
                    {language === 'ja' ? '主な意味・対訳' : "O'zbekcha Tarjima"}
                  </span>
                  <p className="text-xl font-bold text-foreground">
                    {currentResult.uzbekTranslation}
                  </p>
                </div>
                <div className="space-y-1 rounded-2xl border border-border bg-muted/30 p-5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                    {language === 'ja' ? '定義・解説' : "Ta'rif (Definition)"}
                  </span>
                  <p className="text-sm font-medium text-foreground">{currentResult.definition}</p>
                </div>
              </div>

              {/* Synonyms & Collocations */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {currentResult.synonyms.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
                      {language === 'ja' ? '類義語・同義語' : 'Sinonimlar'}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {currentResult.synonyms.map((syn, i) => (
                        <span
                          key={i}
                          className="rounded-xl border border-border bg-muted px-3 py-1 text-xs font-bold text-foreground"
                        >
                          {syn}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {currentResult.collocations.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
                      {language === 'ja'
                        ? 'コロケーション・連語'
                        : "Collocations (So'z birikmalari)"}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {currentResult.collocations.map((col, i) => (
                        <span
                          key={i}
                          className="rounded-xl border border-border bg-muted/80 px-3 py-1 text-xs font-semibold text-foreground"
                        >
                          {col}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Example Sentences */}
              {currentResult.examples.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
                    {language === 'ja' ? '実践例文' : 'Kontekstual Misollar (3 ta gap)'}
                  </h4>
                  <div className="space-y-3">
                    {currentResult.examples.map((ex, i) => (
                      <div
                        key={i}
                        className="space-y-1 rounded-2xl border border-border bg-muted/20 p-4"
                      >
                        <p className="text-xs font-bold italic text-foreground">
                          {i + 1}. "{ex.sentence}"
                        </p>
                        <p className="text-[11px] font-medium text-muted-foreground">
                          ➔ {ex.translation}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 1-Click Flashcard Creator Bar (Super Admin only) */}
              {isSuper && (
                <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-4 sm:flex-row">
                  <div className="flex w-full items-center gap-3 sm:w-auto">
                    <span className="whitespace-nowrap text-xs font-bold text-muted-foreground">
                      {language === 'ja' ? '単語帳を選択:' : 'Fan tanlang:'}
                    </span>
                    <select
                      value={selectedSubjectId}
                      onChange={(e) => setSelectedSubjectId(e.target.value)}
                      className="rounded-xl border border-border bg-background px-3 py-2 text-xs font-bold text-foreground focus:border-primary focus:outline-none"
                    >
                      {subjects.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    onClick={handleCreateFlashcard}
                    disabled={isAddedToFlashcards}
                    className={`flex cursor-pointer items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-bold transition-all ${
                      isAddedToFlashcards
                        ? 'bg-emerald-500 text-white'
                        : 'bg-primary text-primary-foreground shadow-sm shadow-primary/20 hover:bg-primary/90'
                    }`}
                  >
                    {isAddedToFlashcards ? (
                      <>
                        <Check size={16} />
                        <span>{language === 'ja' ? '追加完了！' : "Qo'shildi!"}</span>
                      </>
                    ) : (
                      <>
                        <Plus size={16} />
                        <span>
                          {language === 'ja' ? 'フラッシュカードに追加' : "Fleshkardga qo'shish"}
                        </span>
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* TAB 2: SAVED WORDS */}
      {activeTab === 'saved' && (
        <div className="space-y-4">
          {savedWords.length === 0 ? (
            <div className="space-y-2 rounded-3xl border border-dashed border-border bg-card p-12 text-center">
              <Bookmark size={32} className="mx-auto text-muted-foreground" />
              <p className="text-sm font-bold text-foreground">Saqlangan so'zlar yo'q</p>
              <p className="text-xs text-muted-foreground">
                Qidiruv davomida so'zlarni saqlab qo'yishingiz mumkin.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {savedWords.map((item, idx) => (
                <div
                  key={idx}
                  className="group relative space-y-3 rounded-3xl border border-border bg-card p-5 shadow-sm transition-all hover:border-primary/40"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-wider text-[#C9A961]">
                        {item.level}
                      </span>
                      <h3 className="mt-0.5 font-display text-xl font-black text-foreground">
                        {item.furigana ? <FuriganaText text={item.furigana} /> : item.word}
                      </h3>
                    </div>
                    <button
                      onClick={() => toggleSaveWord(item)}
                      className="cursor-pointer p-1 text-muted-foreground transition-colors hover:text-primary"
                      title="Saqlanganlardan o'chirish"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                  <p className="text-xs font-bold text-foreground">{item.uzbekTranslation}</p>
                  <p className="line-clamp-2 text-[11px] text-muted-foreground">
                    {item.definition}
                  </p>
                  <button
                    onClick={() => {
                      setCurrentResult(item);
                      setActiveTab('search');
                    }}
                    className="flex cursor-pointer items-center gap-1 pt-1 text-[11px] font-bold text-primary hover:underline"
                  >
                    Batafsil ko'rish <ArrowRight size={12} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* TAB 3: SEARCH HISTORY */}
      {activeTab === 'history' && (
        <div className="space-y-4">
          {history.length === 0 ? (
            <div className="space-y-2 rounded-3xl border border-dashed border-border bg-card p-12 text-center">
              <History size={32} className="mx-auto text-muted-foreground" />
              <p className="text-sm font-bold text-foreground">Qidiruv tarixi bo'sh</p>
            </div>
          ) : (
            <div className="divide-y divide-border overflow-hidden rounded-3xl border border-border bg-card">
              {history.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    setCurrentResult(item);
                    setActiveTab('search');
                  }}
                  className="flex cursor-pointer items-center justify-between p-4 transition-all hover:bg-muted/40"
                >
                  <div className="flex items-center gap-3">
                    <span className="rounded-full border border-[#C9A961]/30 bg-[#C9A961]/15 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-[#C9A961]">
                      {item.level}
                    </span>
                    <div>
                      <span className="text-sm font-bold text-foreground">
                        {item.furigana ? <FuriganaText text={item.furigana} /> : item.word}
                      </span>
                      <span className="ml-3 text-xs text-muted-foreground">
                        {item.uzbekTranslation}
                      </span>
                    </div>
                  </div>
                  <ArrowRight size={16} className="text-muted-foreground" />
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default VocabularyBuilderPage;
