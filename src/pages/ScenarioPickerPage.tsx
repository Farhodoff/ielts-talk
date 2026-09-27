import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ConversationScenario, ScenarioSessionResult } from '../components/speaking/scenarioTypes';
import { ScenarioService } from '../services/ScenarioService';
import {
  Sparkles,
  Play,
  Award,
  History,
  ArrowLeft,
  Plus,
  Globe,
  Trash2,
  X,
  AlertTriangle,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { toast } from '../hooks/use-toast';

export const ScenarioPickerPage: React.FC = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const isEn = language === 'en';

  const activeLang = 'en';
  const [scenarios, setScenarios] = useState<ConversationScenario[]>(() =>
    ScenarioService.getImmediateScenarios(),
  );
  const [history, setHistory] = useState<ScenarioSessionResult[]>(() =>
    ScenarioService.getImmediateHistory(),
  );
  const [selectedLevel, setSelectedLevel] = useState<string>('all');

  // Create Modal State
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [deletingScenario, setDeletingScenario] = useState<ConversationScenario | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // New Scenario Form State
  const [formData, setFormData] = useState({
    emoji: '🎓',
    difficulty: 'B2' as ConversationScenario['difficulty'],
    category: 'academic' as 'business' | 'daily' | 'travel' | 'social' | 'academic',
    title_en: '',
    title_uz: '',
    description_uz: '',
    opening_line_en: '',
    context_prompt: '',
    key_phrases_input: '',
  });

  const refreshData = async () => {
    try {
      const list = await ScenarioService.getScenarios();
      const hist = await ScenarioService.getScenarioHistory();
      setScenarios(list);
      setHistory(hist);
    } catch (err) {
      console.debug('Scenario reload error:', err);
    }
  };

  useEffect(() => {
    let isMounted = true;
    const loadData = async () => {
      try {
        const list = await ScenarioService.getScenarios();
        const hist = await ScenarioService.getScenarioHistory();
        if (isMounted) {
          setScenarios(list);
          setHistory(hist);
        }
      } catch (err) {
        console.debug('Scenario background revalidation note:', err);
      }
    };
    loadData();
    return () => {
      isMounted = false;
    };
  }, []);

  const langScenarios = scenarios.filter((s) => (s.language || 'en') === activeLang);

  const filteredScenarios =
    selectedLevel === 'all'
      ? langScenarios
      : langScenarios.filter((s) => s.difficulty === selectedLevel);

  const handleSelectScenario = (scenario: ConversationScenario) => {
    const lang = scenario.language || 'en';
    navigate(`/speaking-coach?lang=${lang}&scenario=${scenario.id}`);
  };

  const handleOpenCreateModal = () => {
    setFormData({
      emoji: '🎓',
      difficulty: 'B2',
      category: 'academic',
      title_en: '',
      title_uz: '',
      description_uz: '',
      opening_line_en: '',
      context_prompt: '',
      key_phrases_input: '',
    });
    setIsCreateModalOpen(true);
  };

  const handleSaveNewScenario = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (!formData.title_en.trim() || !formData.opening_line_en.trim()) {
        toast({
          variant: 'destructive',
          title: "⚠️ Maydonlar to'liq emas",
          description: 'Inglizcha sarlavha va AI ochilish jumlasi kiritilishi shart.',
        });
        setIsSubmitting(false);
        return;
      }

      if (!formData.title_uz.trim()) {
        toast({
          variant: 'destructive',
          title: "⚠️ Maydonlar to'liq emas",
          description: "O'zbekcha sarlavha kiritilishi shart.",
        });
        setIsSubmitting(false);
        return;
      }

      const keyPhrases = formData.key_phrases_input
        .split(',')
        .map((k) => k.trim())
        .filter((k) => k.length > 0);

      const newScenario: ConversationScenario = {
        id: `custom_${Date.now()}`,
        language: 'en',
        emoji: formData.emoji.trim() || '🎓',
        difficulty: formData.difficulty,
        category: formData.category,
        title_en: formData.title_en.trim(),
        title_uz: formData.title_uz.trim(),
        description_uz: formData.description_uz.trim() || formData.title_uz.trim(),
        opening_line_en: formData.opening_line_en.trim(),
        context_prompt:
          formData.context_prompt.trim() ||
          `You are an IELTS Speaking Examiner and professional conversation coach. Roleplay the scenario "${formData.title_en}" with a ${formData.difficulty} student.`,
        key_phrases:
          keyPhrases.length > 0
            ? keyPhrases
            : ['In my opinion', 'Furthermore', 'To illustrate', 'From my perspective'],
        is_custom: true,
        created_at: new Date().toISOString(),
      };

      await ScenarioService.saveScenario(newScenario);
      await refreshData();
      setIsCreateModalOpen(false);

      toast({
        title: "✅ Ssenariy Muvaffaqiyatli Qo'shildi",
        description: `"${newScenario.title_uz}" ssenariysi ro'yxatga qo'shildi.`,
      });
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: '❌ Xatolik yuz berdi',
        description: error?.message || 'Ssenariyni saqlashda xatolik.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteScenario = async (scenario: ConversationScenario) => {
    try {
      await ScenarioService.deleteScenario(scenario.id);
      // Optimistic update
      setScenarios((prev) => prev.filter((s) => s.id !== scenario.id));
      setDeletingScenario(null);

      toast({
        title: "🗑️ Ssenariy O'chirildi",
        description: `"${scenario.title_uz || scenario.title_en}" muvaffaqiyatli o'chirildi.`,
      });
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: '❌ Xatolik yuz berdi',
        description: "Ssenariyni o'chirishda xatolik yuz berdi.",
      });
    }
  };

  const enLevels = ['all', 'A2', 'B1', 'B2', 'C1', 'IELTS'] as const;

  return (
    <div className="mx-auto max-w-6xl space-y-5 p-3.5 pb-20 animate-in fade-in sm:space-y-7 sm:p-5 md:p-6">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-4 text-foreground shadow-sm sm:p-6 md:p-8">
        <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative z-10 flex flex-col justify-between gap-4 sm:gap-6 md:flex-row md:items-center">
          <div className="space-y-2 sm:space-y-3">
            <div className="flex items-center gap-2">
              <button
                onClick={() => navigate('/ielts')}
                className="cursor-pointer rounded-xl border border-border bg-muted p-1.5 text-foreground transition-all hover:bg-muted/80 active:scale-95 sm:p-2"
                title="IELTS Hub'ga qaytish"
              >
                <ArrowLeft size={16} />
              </button>
              <span className="flex items-center gap-1.5 rounded-full border border-[#C9A961]/30 bg-[#C9A961]/15 px-3 py-1 text-xs font-bold text-[#C9A961]">
                <Globe size={12} />
                🇬🇧 IELTS & Academic Scenarios
              </span>
            </div>
            <h1 className="font-display text-xl font-black tracking-tight text-foreground sm:text-2xl md:text-3xl">
              IELTS Speaking & Conversation Scenarios
            </h1>
            <p className="max-w-xl text-xs leading-relaxed text-muted-foreground md:text-sm">
              IELTS Speaking mock imtihoni (Examiner Gordon), ish intervyusi, viza suhbati va real
              vaziyatlarda jonli ovozli muloqot qiling.
            </p>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={handleOpenCreateModal}
              className="flex w-full cursor-pointer items-center justify-center gap-1.5 rounded-2xl bg-primary px-4 py-2.5 text-xs font-bold text-primary-foreground shadow-sm shadow-primary/20 transition-all hover:bg-primary/90 active:scale-95 sm:w-auto"
            >
              <Plus size={15} />
              <span>Ssenariy Qo'shish</span>
            </button>
          </div>
        </div>
      </div>

      {/* Level Filter Tabs */}
      <div className="flex items-center justify-between gap-3 overflow-x-auto border-b border-border pb-2">
        <div className="flex items-center gap-1.5 sm:gap-2">
          {enLevels.map((lvl) => (
            <button
              key={lvl}
              onClick={() => setSelectedLevel(lvl)}
              className={`cursor-pointer whitespace-nowrap rounded-xl border px-3 py-1.5 text-xs font-extrabold transition-all active:scale-95 sm:rounded-2xl sm:px-4 sm:py-2 ${
                selectedLevel === lvl
                  ? 'border-primary bg-primary text-primary-foreground shadow-xs'
                  : 'border-border bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground'
              }`}
            >
              {lvl === 'all'
                ? isEn
                  ? 'All'
                  : 'Barchasi'
                : lvl === 'IELTS'
                  ? 'IELTS Mock'
                  : `Band / ${lvl}`}
            </button>
          ))}
        </div>

        <div className="flex shrink-0 items-center gap-1 text-xs font-medium text-muted-foreground">
          <Sparkles size={13} className="text-[#C9A961]" />
          <span>
            {isEn
              ? `${filteredScenarios.length} scenarios`
              : `${filteredScenarios.length} ta ssenariy`}
          </span>
        </div>
      </div>

      {/* Scenarios Grid */}
      {scenarios.length === 0 ? (
        <div className="py-12 text-center text-muted-foreground">
          <div className="mb-2 inline-block h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
          <p className="text-xs">{isEn ? 'Loading scenarios...' : 'Ssenariylar yuklanmoqda...'}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-3.5 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredScenarios.map((scenario) => {
            const lastSession = history.find((h) => h.scenario_id === scenario.id);
            const title = scenario.title_en || scenario.title_uz;

            return (
              <div
                key={scenario.id}
                className="group relative flex flex-col justify-between rounded-3xl border border-border bg-card p-4 shadow-xs transition-all duration-300 hover:border-primary/50 hover:shadow-md sm:p-5"
              >
                <div>
                  <div className="mb-2.5 flex items-start justify-between">
                    <div className="rounded-2xl bg-muted/60 p-2.5 text-2xl transition-transform group-hover:scale-105 sm:text-3xl">
                      {scenario.emoji}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span
                        className={`rounded-full border px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider ${
                          scenario.difficulty === 'A1' || scenario.difficulty === 'A2'
                            ? 'border-emerald-500/20 bg-emerald-500/10 text-emerald-400'
                            : 'border-[#C9A961]/30 bg-[#C9A961]/15 text-[#C9A961]'
                        }`}
                      >
                        {scenario.difficulty}
                      </span>

                      {/* Delete Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setDeletingScenario(scenario);
                        }}
                        title="Ssenariyni o'chirish"
                        className="cursor-pointer rounded-lg p-1 text-muted-foreground transition-all hover:bg-red-500/10 hover:text-red-400"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>

                  <h3 className="text-sm font-bold text-foreground transition-colors group-hover:text-primary sm:text-base">
                    {title}
                  </h3>
                  {scenario.title_uz && scenario.title_uz !== scenario.title_en && (
                    <p className="mt-0.5 text-xs font-semibold text-muted-foreground">
                      {scenario.title_uz}
                    </p>
                  )}
                  {scenario.description_uz && (
                    <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-muted-foreground/80">
                      {scenario.description_uz}
                    </p>
                  )}

                  {/* Key Phrases */}
                  {scenario.key_phrases && scenario.key_phrases.length > 0 && (
                    <div className="mt-3.5 space-y-1 border-t border-border/40 pt-2.5">
                      <span className="text-[10px] font-bold uppercase text-muted-foreground">
                        {isEn ? 'Key Phrases:' : 'Kalit iboralar:'}
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {scenario.key_phrases.slice(0, 3).map((kp, idx) => (
                          <span
                            key={idx}
                            className="rounded-md border border-border/40 bg-muted px-2 py-0.5 font-mono text-[10px] text-foreground"
                          >
                            {kp}
                          </span>
                        ))}
                        {scenario.key_phrases.length > 3 && (
                          <span className="self-center text-[10px] text-muted-foreground">
                            +{scenario.key_phrases.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-4 flex items-center justify-between gap-2 border-t border-border/40 pt-3">
                  {lastSession ? (
                    <div className="flex items-center gap-1.5 text-xs">
                      <Award size={15} className="text-[#C9A961]" />
                      <div>
                        <span className="font-bold text-foreground">
                          {lastSession.overall_score}%
                        </span>
                        <span className="ml-1 text-[10px] text-muted-foreground">
                          {isEn ? 'last' : 'oxirgi'}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1 text-[11px] text-muted-foreground">
                      <History size={12} />
                      <span>{isEn ? 'Not started' : 'Boshlanmagan'}</span>
                    </div>
                  )}

                  <button
                    onClick={() => handleSelectScenario(scenario)}
                    className="flex cursor-pointer items-center gap-1.5 rounded-xl bg-primary px-3.5 py-1.5 text-xs font-bold text-primary-foreground shadow-xs transition-all hover:bg-primary/90 active:scale-95 sm:rounded-2xl sm:px-4 sm:py-2"
                  >
                    <Play size={13} className="fill-current" />
                    <span>{isEn ? 'Start' : 'Boshlash'}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Create Scenario Modal */}
      {isCreateModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-3.5 backdrop-blur-sm animate-in fade-in sm:p-4">
          <div className="relative max-h-[88vh] w-full max-w-xl space-y-4 overflow-y-auto rounded-3xl border border-border bg-card p-4 shadow-2xl sm:space-y-5 sm:p-6 md:p-8">
            <div className="flex items-center justify-between border-b border-border pb-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{formData.emoji}</span>
                <div>
                  <h2 className="text-lg font-bold text-foreground sm:text-xl">
                    {isEn ? 'Create New Scenario' : 'Yangi Ssenariy Yaratish'}
                  </h2>
                  <p className="text-xs text-muted-foreground">
                    {isEn
                      ? 'Add a custom roleplay conversation for IELTS AI Coach'
                      : "AI Murabbiy uchun shaxsiy IELTS ssenariysi qo'shing"}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsCreateModalOpen(false)}
                className="cursor-pointer rounded-xl p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSaveNewScenario} className="space-y-4">
              {/* Emoji, Level, Category Row */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                <div>
                  <label className="mb-1.5 block text-xs font-bold text-muted-foreground">
                    Emoji
                  </label>
                  <input
                    type="text"
                    value={formData.emoji}
                    onChange={(e) => setFormData((prev) => ({ ...prev, emoji: e.target.value }))}
                    className="outline-hidden w-full rounded-xl border border-border bg-muted/50 px-3 py-2 text-center text-xs font-bold text-foreground focus:ring-2 focus:ring-primary"
                    placeholder="🎓"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-bold text-muted-foreground">
                    Daraja (Level)
                  </label>
                  <select
                    value={formData.difficulty}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        difficulty: e.target.value as ConversationScenario['difficulty'],
                      }))
                    }
                    className="outline-hidden w-full rounded-xl border border-border bg-muted/50 px-3 py-2 text-xs font-bold text-foreground focus:ring-2 focus:ring-primary"
                  >
                    <option value="A2">A2 Elementary</option>
                    <option value="B1">B1 Intermediate</option>
                    <option value="B2">B2 Upper-Int</option>
                    <option value="C1">C1 Advanced</option>
                    <option value="IELTS">IELTS Mock</option>
                  </select>
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-bold text-muted-foreground">
                    Kategoriya
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, category: e.target.value as any }))
                    }
                    className="outline-hidden w-full rounded-xl border border-border bg-muted/50 px-3 py-2 text-xs font-bold text-foreground focus:ring-2 focus:ring-primary"
                  >
                    <option value="academic">🎓 Akademik (Academic)</option>
                    <option value="business">💼 Biznes (Business)</option>
                    <option value="daily">🍜 Kundalik (Daily Life)</option>
                    <option value="travel">✈️ Sayohat (Travel)</option>
                    <option value="social">🤝 Ijtimoiy (Social)</option>
                  </select>
                </div>
              </div>

              {/* English Title & Opening Line */}
              <div className="space-y-3">
                <div>
                  <label className="mb-1.5 block text-xs font-bold text-muted-foreground">
                    Inglizcha Sarlavha (English Title) *
                  </label>
                  <input
                    type="text"
                    value={formData.title_en}
                    onChange={(e) => setFormData((prev) => ({ ...prev, title_en: e.target.value }))}
                    className="outline-hidden w-full rounded-xl border border-border bg-muted/50 px-3.5 py-2.5 text-sm font-bold text-foreground focus:ring-2 focus:ring-primary"
                    placeholder="e.g. Discussing Climate Change & Energy (Speaking Part 3)"
                    required
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-bold text-muted-foreground">
                    AI Murabbiyning Boshlovchi Jumlasi (Examiner Opening Line) *
                  </label>
                  <input
                    type="text"
                    value={formData.opening_line_en}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, opening_line_en: e.target.value }))
                    }
                    className="outline-hidden w-full rounded-xl border border-border bg-muted/50 px-3.5 py-2.5 text-sm text-foreground focus:ring-2 focus:ring-primary"
                    placeholder="e.g. Good afternoon. Today let's discuss sustainable alternatives in modern city planning."
                    required
                  />
                </div>
              </div>

              {/* Uzbek Title & Description */}
              <div className="space-y-3">
                <div>
                  <label className="mb-1.5 block text-xs font-bold text-muted-foreground">
                    O'zbekcha Sarlavha (Uzbek Title) *
                  </label>
                  <input
                    type="text"
                    value={formData.title_uz}
                    onChange={(e) => setFormData((prev) => ({ ...prev, title_uz: e.target.value }))}
                    className="outline-hidden w-full rounded-xl border border-border bg-muted/50 px-3.5 py-2.5 text-sm font-bold text-foreground focus:ring-2 focus:ring-primary"
                    placeholder="Masalan: Ekologik muammolar va qayta tiklanuvchi energiya muhokamasi"
                    required
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-bold text-muted-foreground">
                    O'zbekcha Qisqacha Tavsif (Uzbek Description) *
                  </label>
                  <textarea
                    value={formData.description_uz}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, description_uz: e.target.value }))
                    }
                    rows={2}
                    className="outline-hidden w-full resize-none rounded-xl border border-border bg-muted/50 px-3.5 py-2.5 text-xs text-foreground focus:ring-2 focus:ring-primary"
                    placeholder="Ushbu mashg'ulotda talaba murakkab mavzularda o'z fikrini ifodalash va dalillarni taqdim etishni mashq qiladi..."
                    required
                  />
                </div>
              </div>

              {/* AI Context Prompt */}
              <div>
                <label className="mb-1.5 block text-xs font-bold text-muted-foreground">
                  AI Examiner uchun Kontekst Prompt (Ixtiyoriy)
                </label>
                <textarea
                  value={formData.context_prompt}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, context_prompt: e.target.value }))
                  }
                  rows={2}
                  className="outline-hidden w-full resize-none rounded-xl border border-border bg-muted/50 px-3.5 py-2.5 font-mono text-xs text-foreground focus:ring-2 focus:ring-primary"
                  placeholder="You are an IELTS Speaking Examiner evaluating fluency, lexical resource, and grammatical accuracy..."
                />
              </div>

              {/* Key Phrases */}
              <div>
                <label className="mb-1.5 block text-xs font-bold text-muted-foreground">
                  Tavsiya etilgan Kalit Iboralar (vergul bilan ajrating)
                </label>
                <input
                  type="text"
                  value={formData.key_phrases_input}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, key_phrases_input: e.target.value }))
                  }
                  className="outline-hidden w-full rounded-xl border border-border bg-muted/50 px-3.5 py-2.5 text-xs text-foreground focus:ring-2 focus:ring-primary"
                  placeholder="In my perspective, substantially, as a consequence, in contrast to"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-end gap-3 border-t border-border pt-4">
                <button
                  type="button"
                  onClick={() => setIsCreateModalOpen(false)}
                  className="cursor-pointer rounded-2xl bg-muted px-5 py-2.5 text-xs font-bold text-foreground transition-all hover:bg-muted/80"
                >
                  Bekor qilish
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="cursor-pointer rounded-2xl bg-primary px-6 py-2.5 text-xs font-bold text-primary-foreground shadow-md shadow-primary/20 transition-all hover:bg-primary/90 disabled:opacity-50"
                >
                  {isSubmitting ? 'Saqlanmoqda...' : 'Ssenariyni Saqlash'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deletingScenario && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm animate-in fade-in">
          <div className="w-full max-w-md space-y-5 rounded-3xl border border-border bg-card p-6 text-center shadow-2xl">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-red-500/20 bg-red-500/10 text-red-500">
              <AlertTriangle size={28} />
            </div>

            <div className="space-y-1.5">
              <h3 className="text-lg font-bold text-foreground">
                Ssenariyni o'chirishni tasdiqlaysizmi?
              </h3>
              <p className="text-xs text-muted-foreground">
                <span className="font-bold text-foreground">
                  "{deletingScenario.title_uz || deletingScenario.title_en}"
                </span>{' '}
                ssenariysi ro'yxatdan o'chiriladi.
              </p>
            </div>

            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                onClick={() => setDeletingScenario(null)}
                className="cursor-pointer rounded-2xl bg-muted px-5 py-2.5 text-xs font-bold text-foreground transition-all hover:bg-muted/80"
              >
                Bekor qilish
              </button>
              <button
                onClick={() => handleDeleteScenario(deletingScenario)}
                className="cursor-pointer rounded-2xl bg-red-600 px-5 py-2.5 text-xs font-bold text-white shadow-md shadow-red-500/20 transition-all hover:bg-red-700"
              >
                Ha, o'chirilsin
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
