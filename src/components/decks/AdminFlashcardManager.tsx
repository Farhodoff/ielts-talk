import React, { useState, useMemo } from 'react';
import { useStudyData } from '../../context/IeltsTalkContext';
import { Flashcard } from '../../types';
import { Button } from '../ui/Button';
import {
  Search,
  Trash2,
  ShieldAlert,
  CheckSquare,
  Square,
  X,
  AlertCircle,
  Filter,
} from 'lucide-react';
import { toast } from '../../hooks/use-toast';

interface AdminFlashcardManagerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminFlashcardManager: React.FC<AdminFlashcardManagerProps> = ({
  isOpen,
  onClose,
}) => {
  const { flashcards, subjects, deleteFlashcard } = useStudyData();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>('all');
  const [onlyGibberish, setOnlyGibberish] = useState(false);
  const [selectedCardIds, setSelectedCardIds] = useState<string[]>([]);
  const [isDeleting, setIsDeleting] = useState(false);

  // Gibberish / Bad card detection logic
  const isGibberish = (card: Flashcard): boolean => {
    if (!card.front || !card.back) return true;
    if (card.front.trim().length === 0 || card.back.trim().length === 0) return true;

    // Detect JSON code leaks, raw response strings, or object serialization leaks
    if (
      card.front.includes('```') ||
      card.back.includes('```') ||
      card.front.includes('{"') ||
      card.back.includes('{"')
    )
      return true;
    if (
      card.front.includes('"front":') ||
      card.back.includes('"back":') ||
      card.front.includes('"word":')
    )
      return true;

    // Detect weird JS artifacts or unparsed tags
    if (card.front.includes('undefined') || card.back.includes('undefined')) return true;
    if (card.front.includes('[object Object]') || card.back.includes('[object Object]'))
      return true;
    if (card.front.includes('null') && card.front.length < 10) return true;

    return false;
  };

  const filteredCards = useMemo(() => {
    return flashcards.filter((c) => {
      const matchesSubject = selectedSubjectId === 'all' || c.subjectId === selectedSubjectId;
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        !q || c.front.toLowerCase().includes(q) || c.back.toLowerCase().includes(q);
      const matchesGibberish = !onlyGibberish || isGibberish(c);
      return matchesSubject && matchesSearch && matchesGibberish;
    });
  }, [flashcards, selectedSubjectId, searchQuery, onlyGibberish]);

  const toggleSelectAll = () => {
    if (selectedCardIds.length === filteredCards.length) {
      setSelectedCardIds([]);
    } else {
      setSelectedCardIds(filteredCards.map((c) => c.id));
    }
  };

  const toggleSelectCard = (id: string) => {
    setSelectedCardIds((prev) =>
      prev.includes(id) ? prev.filter((cId) => cId !== id) : [...prev, id],
    );
  };

  const handleDeleteSelected = async () => {
    if (selectedCardIds.length === 0) return;
    if (
      !window.confirm(
        `Siz rostdan ham ${selectedCardIds.length} ta kartani BAZADAN BUTKUL O'CHIRMOQCHIMISIZ?`,
      )
    )
      return;

    setIsDeleting(true);
    try {
      for (const id of selectedCardIds) {
        await deleteFlashcard(id, true); // permanent delete
      }
      toast({
        title: 'Muvaffaqiyatli',
        description: `${selectedCardIds.length} ta karta o'chirildi.`,
      });
      setSelectedCardIds([]);
    } catch (err) {
      console.error('Admin batch delete error:', err);
      toast({
        variant: 'destructive',
        title: 'Xatolik',
        description: "Kartalarni o'chirishda xatolik yuz berdi.",
      });
    } finally {
      setIsDeleting(false);
    }
  };

  const handleDeleteSingle = async (id: string) => {
    if (!window.confirm("Ushbu kartani bazadan o'chirmoqchimisiz?")) return;
    try {
      await deleteFlashcard(id, true);
      setSelectedCardIds((prev) => prev.filter((cId) => cId !== id));
    } catch (err) {
      console.error('Admin single delete error:', err);
    }
  };

  if (!isOpen) return null;

  const gibberishCount = flashcards.filter(isGibberish).length;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md animate-in fade-in">
      <div className="relative flex h-[85vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-2xl">
        {/* Modal Header */}
        <div className="flex items-center justify-between bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 p-6 text-white">
          <div>
            <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-black backdrop-blur-md">
              <ShieldAlert size={14} /> ADMIN FLASHCARD MANAGER
            </div>
            <h2 className="text-2xl font-black">Fleshkartalarni Saralash va O'chirish</h2>
            <p className="mt-1 text-xs text-rose-100">
              AI tomonidan noto'g'ri yaratilgan yoki buzuq kartalarni qidirish hamda bazadan butkul
              o'chirish.
            </p>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-2 text-white/80 transition-all hover:bg-white/10 hover:text-white"
          >
            <X size={24} />
          </button>
        </div>

        {/* Controls Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border bg-muted/30 p-4">
          <div className="flex flex-1 flex-wrap items-center gap-3">
            {/* Search Input */}
            <div className="relative min-w-[200px] flex-1">
              <Search
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
              <input
                type="text"
                placeholder="Kartochka matni bo'yicha qidirish..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-input bg-background py-2 pl-10 pr-4 text-xs text-foreground outline-none focus:ring-2 focus:ring-rose-500"
              />
            </div>

            {/* Subject Filter */}
            <select
              value={selectedSubjectId}
              onChange={(e) => setSelectedSubjectId(e.target.value)}
              className="rounded-xl border border-input bg-background px-3 py-2 text-xs font-bold text-foreground outline-none"
            >
              <option value="all">Barcha Fanlar ({flashcards.length})</option>
              {subjects.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name}
                </option>
              ))}
            </select>

            {/* Gibberish Detector Filter */}
            <button
              onClick={() => setOnlyGibberish(!onlyGibberish)}
              className={`flex items-center gap-1.5 rounded-xl border px-3 py-2 text-xs font-bold transition-all ${
                onlyGibberish
                  ? 'border-rose-500 bg-rose-500 text-white shadow-sm'
                  : 'border-input bg-background text-muted-foreground hover:text-foreground'
              }`}
            >
              <AlertCircle size={14} />
              <span>Buzuq kartalar ({gibberishCount})</span>
            </button>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleSelectAll}
              className="flex items-center gap-1.5 rounded-xl border border-input bg-background px-3 py-2 text-xs font-bold text-foreground hover:bg-muted"
            >
              {selectedCardIds.length === filteredCards.length && filteredCards.length > 0 ? (
                <CheckSquare size={14} className="text-rose-500" />
              ) : (
                <Square size={14} />
              )}
              <span>Barchasini Tanlash ({filteredCards.length})</span>
            </button>

            {selectedCardIds.length > 0 && (
              <Button
                onClick={handleDeleteSelected}
                disabled={isDeleting}
                className="flex items-center gap-1.5 rounded-xl bg-red-600 px-4 py-2 text-xs font-black text-white shadow-md hover:bg-red-700"
              >
                <Trash2 size={14} />
                <span>
                  {isDeleting
                    ? "O'chirilmoqda..."
                    : `${selectedCardIds.length} ta kartani O'chirish`}
                </span>
              </Button>
            )}
          </div>
        </div>

        {/* Cards Grid / List */}
        <div className="flex-1 space-y-3 overflow-y-auto p-4">
          {filteredCards.length === 0 ? (
            <div className="flex h-64 flex-col items-center justify-center text-center text-muted-foreground">
              <Filter size={40} className="mb-2 opacity-50" />
              <p className="text-sm font-bold">Hech qanday kartochka topilmadi</p>
            </div>
          ) : (
            filteredCards.map((card) => {
              const isSelected = selectedCardIds.includes(card.id);
              const cardIsGibberish = isGibberish(card);
              const subject = subjects.find((s) => s.id === card.subjectId);

              return (
                <div
                  key={card.id}
                  className={`flex items-start justify-between gap-4 rounded-2xl border p-4 transition-all ${
                    isSelected
                      ? 'border-rose-500/60 bg-rose-500/10'
                      : cardIsGibberish
                        ? 'border-amber-500/40 bg-amber-500/10'
                        : 'border-border/80 bg-background hover:border-border'
                  }`}
                >
                  <div className="flex flex-1 items-start gap-3">
                    <button
                      onClick={() => toggleSelectCard(card.id)}
                      className="mt-1 text-muted-foreground hover:text-foreground"
                    >
                      {isSelected ? (
                        <CheckSquare size={18} className="text-rose-500" />
                      ) : (
                        <Square size={18} />
                      )}
                    </button>

                    <div className="flex-1 space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="rounded-md bg-muted px-2 py-0.5 text-[10px] font-extrabold text-muted-foreground">
                          {subject?.name || 'Fansiz'}
                        </span>
                        {cardIsGibberish && (
                          <span className="flex items-center gap-1 rounded-md bg-amber-500/20 px-2 py-0.5 text-[10px] font-extrabold text-amber-600 dark:text-amber-400">
                            <AlertCircle size={10} /> Buzuq / Xato AI matni
                          </span>
                        )}
                      </div>

                      <div className="text-sm font-black text-foreground">{card.front}</div>
                      <div className="whitespace-pre-wrap text-xs text-muted-foreground">
                        {card.back}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => handleDeleteSingle(card.id)}
                    className="rounded-xl p-2 text-rose-500 transition-colors hover:bg-rose-500/10"
                    title="Bazadan o'chirish"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};
