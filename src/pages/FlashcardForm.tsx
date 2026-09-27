import { ArrowLeft } from 'lucide-react';
import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { useStudyData } from '../context/StudyPlannerContext';
import { toast } from '../hooks/use-toast';

const FlashcardForm: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const defaultSubjectId = searchParams.get('subjectId') || '';

  const [isCreatingNewSub, setIsCreatingNewSub] = useState(false);
  const [newSubName, setNewSubName] = useState('');
  const [newSubColor, setNewSubColor] = useState('#8b5cf6');

  const { addFlashcard, addSubject, subjects } = useStudyData();

  const handleCreateSubjectInline = async () => {
    if (!newSubName.trim()) return;
    const created = await addSubject({
      name: newSubName.trim(),
      color: newSubColor,
      schedule: [],
    });
    if (created && created.id) {
      setSubjectId(created.id);
      setIsCreatingNewSub(false);
      setNewSubName('');
    }
  };

  const [front, setFront] = useState('');
  const [back, setBack] = useState('');
  const [subjectId, setSubjectId] = useState(defaultSubjectId);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!front || !back || isSubmitting) return;

    const targetSubId = subjectId || subjects.find((s) => !s.isArchived)?.id || '';

    setIsSubmitting(true);
    try {
      await addFlashcard({
        subjectId: targetSubId,
        front,
        back,
      });
      toast({
        title: 'Fleshkarta Saqlandi',
        description: 'Yangi fleshkarta muvaffaqiyatli saqlandi!',
      });
      navigate('/flashcards');
    } catch (error) {
      console.error('Failed to add flashcard:', error);
      toast({
        variant: 'destructive',
        title: 'Xatolik',
        description: "Fleshkarta saqlashda xatolik yuz berdi. Qayta urinib ko'ring.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto max-w-xl px-3.5 py-4 sm:px-6 sm:py-8">
      <div className="mb-5 flex items-center gap-3 sm:mb-6">
        <button
          onClick={() => navigate('/flashcards')}
          className="cursor-pointer rounded-xl border border-border p-2 text-foreground transition-colors hover:bg-muted active:scale-95"
          title="Orqaga"
        >
          <ArrowLeft size={18} className="text-muted-foreground" />
        </button>
        <div>
          <h2 className="text-xl font-black text-foreground sm:text-2xl">Yangi Fleshkarta</h2>
          <p className="text-xs text-muted-foreground">
            Shaxsiy to'plamingizga yangi so'z yoki ibora qo'shing
          </p>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-5 rounded-3xl border border-border bg-card p-4 shadow-xl sm:p-7 md:p-8"
      >
        <div>
          <div className="mb-1.5 flex items-center justify-between">
            <label className="block text-xs font-bold text-foreground">Fan / To'plam</label>
            <button
              type="button"
              onClick={() => setIsCreatingNewSub(!isCreatingNewSub)}
              className="cursor-pointer text-xs font-bold text-primary hover:underline"
            >
              + Yangi Fan Yaratish
            </button>
          </div>

          {isCreatingNewSub ? (
            <div className="mb-2 space-y-3 rounded-2xl border border-primary/20 bg-primary/5 p-3.5">
              <input
                type="text"
                placeholder="Fan nomi (masalan, IELTS Vocabulary)..."
                value={newSubName}
                onChange={(e) => setNewSubName(e.target.value)}
                className="outline-hidden w-full rounded-xl border border-border bg-card px-3 py-2 text-xs text-foreground focus:ring-2 focus:ring-primary sm:text-sm"
              />
              <div className="flex items-center justify-between">
                <div className="flex gap-1.5">
                  {['#E8483A', '#C9A961', '#10b981', '#3b82f6', '#8b5cf6'].map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setNewSubColor(c)}
                      className={`h-6 w-6 cursor-pointer rounded-full transition-transform ${newSubColor === c ? 'scale-125 ring-2 ring-primary' : ''}`}
                      style={{ backgroundColor: c }}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setIsCreatingNewSub(false)}
                    className="cursor-pointer px-3 py-1 text-xs text-muted-foreground hover:text-foreground"
                  >
                    Bekor qilish
                  </button>
                  <button
                    type="button"
                    onClick={handleCreateSubjectInline}
                    className="cursor-pointer rounded-lg bg-primary px-3 py-1 text-xs font-bold text-primary-foreground active:scale-95"
                  >
                    Saqlash
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <select
              value={subjectId}
              onChange={(e) => setSubjectId(e.target.value)}
              className="focus:outline-hidden w-full rounded-2xl border border-border bg-card px-3.5 py-2.5 text-xs font-medium text-foreground focus:ring-2 focus:ring-primary sm:px-4 sm:py-3 sm:text-sm"
            >
              <option value="">Avtomatik Fan (yoki tanlang)</option>
              {subjects
                .filter((s) => !s.isArchived)
                .map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name}
                  </option>
                ))}
            </select>
          )}
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-bold text-foreground">
            Old tomoni (So'z / Savol / Ibora)
          </label>
          <textarea
            value={front}
            onChange={(e) => setFront(e.target.value)}
            className="focus:outline-hidden h-28 w-full resize-none rounded-2xl border border-border bg-card px-3.5 py-2.5 text-xs text-foreground placeholder:text-muted-foreground/60 focus:ring-2 focus:ring-primary sm:h-32 sm:px-4 sm:py-3 sm:text-sm"
            placeholder="masalan: Comprehensive (C1, Adjective)"
            required
          />
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-bold text-foreground">
            Orqa tomoni (Tarjima / Ta'rif / Misol)
          </label>
          <textarea
            value={back}
            onChange={(e) => setBack(e.target.value)}
            className="focus:outline-hidden h-28 w-full resize-none rounded-2xl border border-border bg-card px-3.5 py-2.5 text-xs text-foreground placeholder:text-muted-foreground/60 focus:ring-2 focus:ring-primary sm:h-32 sm:px-4 sm:py-3 sm:text-sm"
            placeholder="masalan: Keng qamrovli, har tomonlama to'liq."
            required
          />
        </div>

        <div className="pt-2">
          <Button
            type="submit"
            disabled={isSubmitting || !front.trim() || !back.trim()}
            className="w-full cursor-pointer rounded-2xl bg-primary py-3.5 text-sm font-black text-primary-foreground shadow-md transition-all hover:bg-primary/90 active:scale-95 disabled:opacity-50"
          >
            {isSubmitting ? 'Saqlanmoqda...' : 'Fleshkarta Yaratish 🎴'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default FlashcardForm;
