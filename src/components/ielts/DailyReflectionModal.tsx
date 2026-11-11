import React, { useState } from 'react';
import { BrainCircuit, X, CheckCircle2, Sparkles, Send, Award } from 'lucide-react';
import { generateAIResponse, extractJsonFromAiResponse } from '../../utils/ai/aiCore';
import { useStudyData } from '../../context/IeltsTalkContext';
import { DailyReflectionService } from '../../services/DailyReflectionService';

interface DailyReflectionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DailyReflectionModal: React.FC<DailyReflectionModalProps> = ({ isOpen, onClose }) => {
  const { awardXP, user } = useStudyData();
  const [learnedText, setLearnedText] = useState('');
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [evaluationResult, setEvaluationResult] = useState<{
    masteryScore: number;
    feedback: string;
    strengths: string[];
  } | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async () => {
    if (!learnedText.trim()) return;
    setIsEvaluating(true);
    try {
      const prompt = `
            Act as an Academic English Tutor.
            Evaluate the student's end-of-day learning reflection:
            "${learnedText}"

            Assess how effectively they retained vocabulary, grammar concepts, or speaking techniques.
            Provide a JSON output ONLY in Uzbek:
            {
                "masteryScore": number (70 to 100),
                "feedback": "Samimiy, intizomli o'zbekcha baho va tavsiya",
                "strengths": ["Yutuq 1", "Yutuq 2"]
            }
            `;

      const rawRes = await generateAIResponse([{ role: 'user', content: prompt }], {
        isJson: true,
      });
      const parsed = extractJsonFromAiResponse<{
        masteryScore?: number;
        feedback?: string;
        strengths?: string[];
      }>(rawRes);

      setEvaluationResult({
        masteryScore: parsed.masteryScore || 85,
        feedback: parsed.feedback || "Bugun juda yaxshi natija ko'rsatdingiz!",
        strengths: parsed.strengths || ["Yangi so'zlar yodlandi", "Grammatik qoida o'zlashtirildi"],
      });

      // Save to PostgreSQL user_daily_reflections table and local cache
      const todayStr = new Date().toISOString().split('T')[0];
      const activeUserId = user?.id || 'guest';
      await DailyReflectionService.saveReflection(
        activeUserId,
        todayStr,
        learnedText,
        parsed.masteryScore || 85,
        parsed.feedback || "Bugun juda yaxshi natija ko'rsatdingiz!",
        parsed.strengths || ["Yangi so'zlar yodlandi", "Grammatik qoida o'zlashtirildi"],
      );

      // Award XP for reflection completion
      try {
        await awardXP(25);
      } catch (e) {}
    } catch (err) {
      setEvaluationResult({
        masteryScore: 85,
        feedback: "Juda ajoyib intizom! Bugun o'rgangan bilimingiz xotiraga muhrlandi.",
        strengths: ['Intizomli takrorlash', 'Faol eslash (Active Recall)'],
      });
    } finally {
      setIsEvaluating(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-lg space-y-4 overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-2 text-muted-foreground hover:bg-muted/60 hover:text-foreground"
        >
          <X size={20} />
        </button>

        <div className="flex items-center gap-3 border-b border-border pb-4">
          <div className="rounded-2xl bg-amber-500/10 p-3 text-amber-500">
            <BrainCircuit size={26} />
          </div>
          <div>
            <h3 className="text-lg font-black text-foreground">Oxirida Nimani O'rgandingiz? 🧠</h3>
            <p className="text-xs text-muted-foreground">
              Kunlik Active Recall & Bilimni Mustahkamlash Testi
            </p>
          </div>
        </div>

        {!evaluationResult ? (
          <div className="space-y-4">
            <p className="text-xs leading-relaxed text-muted-foreground">
              Bugungi darsingizdan <b>3 ta eng muhim so'z, ibora yoki grammatik qoidani</b> yozib
              bering. Sun'iy intellekt bilim darajangizni va eslab qolish darajasini baholaydi:
            </p>

            <textarea
              rows={4}
              value={learnedText}
              onChange={(e) => setLearnedText(e.target.value)}
              placeholder="Masalan: 1. Inevitable (muqarrar), 2. Present Perfect Tense (Natija zamoni), 3. Speaking Part 2 'However' o'tish so'zi..."
              className="w-full rounded-2xl border border-input bg-background p-4 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-amber-500"
            />

            <button
              onClick={handleSubmit}
              disabled={isEvaluating || !learnedText.trim()}
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-amber-500/20 transition-all hover:from-amber-600 hover:to-orange-600 disabled:opacity-50"
            >
              {isEvaluating ? <Sparkles size={18} className="animate-spin" /> : <Send size={18} />}
              <span>
                {isEvaluating ? 'AI Tahlil Qilmoqda...' : 'Bilimni Tekshirish & Natijani Saqlash'}
              </span>
            </button>
          </div>
        ) : (
          <div className="space-y-5 animate-in fade-in">
            <div className="space-y-2 rounded-2xl border border-amber-500/20 bg-amber-500/10 p-5 text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                Bugungi Bilim O'zlashtirish Darajasi:
              </span>
              <div className="flex items-center justify-center gap-2 text-4xl font-black text-amber-500">
                <Award size={36} />
                {evaluationResult.masteryScore}%
              </div>
              <p className="border-t border-amber-500/20 pt-2 text-xs leading-relaxed text-foreground">
                {evaluationResult.feedback}
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase text-muted-foreground">
                Mustahkamlangan Yutuqlar:
              </span>
              <div className="space-y-1.5">
                {evaluationResult.strengths.map((str, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 rounded-xl border border-border/60 bg-muted/40 p-2.5 text-xs font-medium text-foreground"
                  >
                    <CheckCircle2 size={16} className="text-emerald-500" />
                    <span>{str}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-full rounded-2xl bg-indigo-600 py-3.5 text-sm font-bold text-white shadow-lg shadow-indigo-500/20 transition-all hover:bg-indigo-700"
            >
              Darsni Muvaffaqiyatli Yakunlash ✨
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
