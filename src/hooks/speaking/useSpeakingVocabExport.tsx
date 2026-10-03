import { useNavigate } from 'react-router-dom';
import { CoachVocabularyItem, translateTextToUzbek } from '../../utils/ai';
import { CoachPersona, PERSONAS_BY_LANG } from '../../components/speaking/speakingTypes';
import { ConversationScenario } from '../../components/speaking/scenarioTypes';
import { SpeakingVocabularyService } from '../../services/SpeakingVocabularyService';
import { getOrEnsureSpeakingDeck } from '../../utils/subjectResolver';
import { supabase } from '../../lib/supabase';
import { toast } from '../use-toast';
import { Flashcard, Subject } from '../../types';

interface UseSpeakingVocabExportOptions {
  language: 'en' | 'ja';
  persona: CoachPersona;
  activeScenario: ConversationScenario | null;
  user: { id: string; email?: string } | null;
  subjects?: Subject[];
  addSubject?: (subject: Partial<Subject>) => Promise<Subject | null>;
  flashcards?: Flashcard[];
  addFlashcardsBatch?: (cards: Partial<Flashcard>[]) => Promise<Flashcard[]>;
}

export const useSpeakingVocabExport = ({
  language,
  persona,
  activeScenario,
  user,
  subjects,
  addSubject,
  flashcards,
  addFlashcardsBatch,
}: UseSpeakingVocabExportOptions) => {
  const navigate = useNavigate();

  const handleAddVocabToFlashcards = async (vocab: CoachVocabularyItem): Promise<boolean> => {
    try {
      const isJa =
        language === 'ja' || /[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff]/.test(vocab.word);
      const activeLang = isJa ? 'ja' : 'en';

      // 1. Direct PostgreSQL DB Persist into `speaking_vocabularies` table
      let effectiveUserId = user?.id;
      if (!effectiveUserId || effectiveUserId === 'local_user' || effectiveUserId === 'guest') {
        try {
          const { data } = await supabase.auth.getSession();
          if (data?.session?.user?.id) effectiveUserId = data.session.user.id;
        } catch {}
      }
      const userId = effectiveUserId || 'local_user';
      const personaName = PERSONAS_BY_LANG[activeLang]?.[persona]?.name;
      const scenarioName = activeScenario
        ? activeScenario.title_uz || activeScenario.title_en || activeScenario.title_ja
        : undefined;
      await SpeakingVocabularyService.saveVocabulary(
        userId,
        vocab,
        activeLang,
        personaName || scenarioName || 'AI Speaking Coach',
      );

      // 2. Resolve or auto-create DEDICATED Speaking Flashcard Deck
      const targetSubjectId = await getOrEnsureSpeakingDeck(
        subjects || [],
        addSubject as any,
        isJa ? 'ja' : 'en',
      );

      const targetDeckName = isJa ? "🎙️ AI Speaking Lug'atlari" : '🎙️ AI Speaking Vocabulary';

      // 3. Extract or translate Uzbek and English meanings
      let uzbekMeaning = '';
      let englishMeaning = '';

      const raw = (vocab.meaning || '').trim();
      const parenMatch = raw.match(/^(.*?)\s*[([](.*)[)\]]$/);
      const bulletMatch = raw.match(/^(.*?)\s*[•|/]\s*(.*)$/);

      if (parenMatch) {
        uzbekMeaning = parenMatch[1].trim();
        englishMeaning = parenMatch[2].trim();
      } else if (bulletMatch) {
        uzbekMeaning = bulletMatch[1].trim();
        englishMeaning = bulletMatch[2].trim();
      } else if (isJa) {
        const isPrimarilyEnglish = /^[a-zA-Z\s/,\-–.?!'"]+$/.test(raw);
        if (isPrimarilyEnglish) {
          englishMeaning = raw;
          const knownTranslations: Record<string, string> = {
            'reason for applying / application motivation': 'Ishga topshirish sababi va maqsadi',
            'reason for applying': 'Ishga topshirish sababi',
            'application motivation': 'Topshirish maqsadi',
            'self-promotion / strengths presentation':
              "O'zini tanishtirish va kuchli tomonlarini taqdim etish",
            'self-promotion': "O'zini tanishtirish",
            'strengths presentation': 'Kuchli tomonlarni ko‘rsatish',
            'technology stack / skills': "Texnologiyalar to'plami va ko'nikmalar",
            'technology stack': "Texnologiyalar to'plami",
          };
          const lowerRaw = raw.toLowerCase().trim();
          if (knownTranslations[lowerRaw]) {
            uzbekMeaning = knownTranslations[lowerRaw];
          } else {
            try {
              uzbekMeaning = await translateTextToUzbek(raw);
            } catch {
              uzbekMeaning = raw;
            }
          }
        } else {
          uzbekMeaning = raw;
          englishMeaning = '';
        }
      } else {
        englishMeaning = raw;
      }

      // 4. Format cards with pedagogical clarity
      const front = isJa
        ? vocab.reading
          ? `${vocab.word}\n【${vocab.reading}】`
          : vocab.word
        : vocab.word;

      let back = '';
      if (isJa) {
        if (uzbekMeaning && englishMeaning) {
          back = `📌 O'zbekcha: ${uzbekMeaning}\n🌐 English: ${englishMeaning}`;
        } else if (uzbekMeaning) {
          back = `📌 Ma'nosi: ${uzbekMeaning}`;
        } else {
          back = `📌 Ma'nosi: ${vocab.meaning}`;
        }
      } else {
        back = `📌 Ma'nosi: ${vocab.meaning}`;
      }

      if (vocab.example && vocab.example.trim()) {
        back += `\n\n💬 Misol: ${vocab.example.trim()}`;
      }

      // 5. Duplicate prevention: check if this word already exists in this deck
      const isAlreadyInDeck = flashcards?.some(
        (f) => f.subjectId === targetSubjectId && f.front.includes(vocab.word.trim()),
      );

      if (!isAlreadyInDeck && addFlashcardsBatch) {
        await addFlashcardsBatch([
          {
            front,
            back,
            subjectId: targetSubjectId || undefined,
          },
        ]);
      }

      toast({
        title: '🎴 Fleshkartaga Saqlandi!',
        description: `"${vocab.word}" so'zi alohida "${targetDeckName}" albomiga muvaffaqiyatli saqlandi.`,
        action: (
          <button
            type="button"
            onClick={() => navigate(targetSubjectId ? `/decks?study=${targetSubjectId}` : '/decks')}
            className="inline-flex cursor-pointer items-center gap-1 rounded-lg bg-primary px-2.5 py-1 text-xs font-bold text-primary-foreground shadow-xs hover:bg-primary/90"
          >
            Fleshkartani Ochish
          </button>
        ) as any,
      });
      return true;
    } catch (err) {
      console.error('handleAddVocabToFlashcards error:', err);
      toast({
        variant: 'destructive',
        title: 'Xatolik',
        description: "So'zni saqlashda xatolik yuz berdi.",
      });
      return false;
    }
  };

  return { handleAddVocabToFlashcards };
};
