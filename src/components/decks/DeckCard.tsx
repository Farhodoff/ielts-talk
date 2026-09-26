import {
  Book,
  Play,
  Plus,
  Sparkles,
  Download,
  GraduationCap,
  Award,
  BookOpen,
  Code,
  Mic,
  Globe,
  Beaker,
  Atom,
  Music,
  Palette,
  Dumbbell,
  Trash2,
  Archive,
  ArchiveRestore,
  CheckSquare,
  Square,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import { Subject } from '../../types';

interface DeckCardProps {
  subject: Subject;
  cardCount: number;
  dueCount: number;
  isSelected?: boolean;
  onToggleSelect?: () => void;
  onToggleArchive?: () => void;
  onDelete?: () => void;
  onAIGenerate: () => void;
  onStudy?: () => void;
  onPopulatePreset?: () => void;
  onExploreFolders?: () => void;
}

const renderSubjectIcon = (iconName?: string) => {
  if (!iconName) return <Book size={22} />;

  // Check if it's an emoji (or non-ascii symbol)
  if (/\p{Extended_Pictographic}/u.test(iconName)) {
    return <span className="text-xl leading-none">{iconName}</span>;
  }

  const lower = iconName.toLowerCase().trim();
  if (lower === 'sparkles') return <Sparkles size={22} />;
  if (lower.includes('graduation')) return <GraduationCap size={22} />;
  if (lower === 'award') return <Award size={22} />;
  if (lower === 'code') return <Code size={22} />;
  if (lower === 'mic') return <Mic size={22} />;
  if (lower === 'book' || lower === 'bookopen') return <BookOpen size={22} />;
  if (lower === 'globe') return <Globe size={22} />;
  if (lower === 'beaker' || lower === 'science') return <Beaker size={22} />;
  if (lower === 'atom') return <Atom size={22} />;
  if (lower === 'music') return <Music size={22} />;
  if (lower === 'art' || lower === 'palette') return <Palette size={22} />;
  if (lower === 'sport' || lower === 'dumbbell') return <Dumbbell size={22} />;

  // Fallback: If it's short string (emoji), render text, else fallback icon
  if (iconName.length <= 4) {
    return <span className="text-xl leading-none">{iconName}</span>;
  }

  return <Book size={22} />;
};

const DeckCard: React.FC<DeckCardProps> = ({
  subject,
  cardCount,
  dueCount,
  isSelected,
  onToggleSelect,
  onToggleArchive,
  onDelete,
  onAIGenerate,
  onStudy,
  onPopulatePreset,
  onExploreFolders,
}) => {
  return (
    <div
      className={`group relative flex flex-col justify-between rounded-3xl border bg-card p-4 transition-all hover:shadow-lg sm:p-5 ${
        isSelected
          ? 'border-primary bg-primary/5 ring-2 ring-primary'
          : 'border-border hover:border-primary/40'
      }`}
    >
      {/* Top Bar with Select Checkbox & Quick Actions */}
      <div className="mb-3.5 flex items-center justify-between">
        <div className="flex items-center gap-2.5 sm:gap-3">
          {onToggleSelect && (
            <button
              onClick={onToggleSelect}
              className="text-muted-foreground transition-colors hover:text-foreground"
              title={isSelected ? 'Tanlovni bekor qilish' : 'Tanlash'}
            >
              {isSelected ? (
                <CheckSquare size={18} className="text-primary" />
              ) : (
                <Square size={18} />
              )}
            </button>
          )}

          <div
            className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl text-lg font-bold sm:h-12 sm:w-12 sm:text-xl"
            style={{ backgroundColor: subject.color + '20', color: subject.color }}
          >
            {renderSubjectIcon(subject.icon)}
          </div>

          <div>
            <h3 className="text-base font-extrabold leading-snug text-foreground sm:text-lg">
              {subject.name}
            </h3>
            <p className="text-xs font-semibold text-muted-foreground">{cardCount} ta kartochka</p>
          </div>
        </div>

        {/* Quick Action Icons (Archive / Delete) */}
        <div className="flex items-center gap-1 opacity-80 transition-opacity group-hover:opacity-100">
          {onToggleArchive && (
            <button
              onClick={onToggleArchive}
              className="rounded-lg p-1.5 text-muted-foreground transition-all hover:bg-[#C9A961]/10 hover:text-[#C9A961]"
              title={subject.isArchived ? 'Arxivdan chiqarish' : 'Arxivlash'}
            >
              {subject.isArchived ? <ArchiveRestore size={16} /> : <Archive size={16} />}
            </button>
          )}

          {onDelete && (
            <button
              onClick={onDelete}
              className="rounded-lg p-1.5 text-muted-foreground transition-all hover:bg-rose-500/10 hover:text-rose-500"
              title="To'plamni o'chirish"
            >
              <Trash2 size={16} />
            </button>
          )}
        </div>
      </div>

      <div className="mb-3.5 flex justify-between text-xs font-bold">
        <span className="text-muted-foreground">Takrorlash:</span>
        <span
          className={`rounded-full px-2.5 py-0.5 ${dueCount > 0 ? 'bg-[#C9A961]/15 text-[#C9A961]' : 'bg-emerald-500/10 text-emerald-500'}`}
        >
          {dueCount > 0 ? `${dueCount} ta kutilmoqda` : 'Hammasi tayyor ✨'}
        </span>
      </div>

      <div className="space-y-3">
        {cardCount === 0 && onPopulatePreset ? (
          <Button
            onClick={onPopulatePreset}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-2.5 text-xs font-extrabold text-primary-foreground shadow-xs hover:bg-primary/90"
          >
            <Download size={15} /> Kartalarni yuklash ⚡
          </Button>
        ) : (
          <div className="flex gap-2 pt-1">
            {onStudy ? (
              <Button
                onClick={onStudy}
                className="flex flex-1 items-center justify-center gap-2 bg-primary text-xs font-bold text-primary-foreground hover:bg-primary/90"
                disabled={cardCount === 0}
              >
                <Play size={15} /> {dueCount > 0 ? "O'rganish" : 'Takrorlash'}
              </Button>
            ) : (
              <Link to={`/flashcards?study=${subject.id}`} className="flex-1">
                <Button
                  className="flex w-full items-center justify-center gap-2 bg-primary text-xs font-bold text-primary-foreground hover:bg-primary/90"
                  disabled={cardCount === 0}
                >
                  <Play size={15} /> {dueCount > 0 ? "O'rganish" : 'Takrorlash'}
                </Button>
              </Link>
            )}
            {onExploreFolders && (
              <Button
                variant="secondary"
                className="px-3 text-foreground hover:text-primary"
                onClick={onExploreFolders}
                title="Keyingi qismlar / Jildlarni ko'rish"
              >
                <BookOpen size={18} />
              </Button>
            )}
            <Button
              variant="secondary"
              className="px-3 text-primary hover:bg-primary/10"
              onClick={onAIGenerate}
              title="AI bilan yaratish"
            >
              <Sparkles size={18} />
            </Button>
            <Link to={`/flashcards/new?subjectId=${subject.id}`}>
              <Button
                variant="secondary"
                className="px-3 text-muted-foreground hover:text-foreground"
              >
                <Plus size={18} />
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default DeckCard;
