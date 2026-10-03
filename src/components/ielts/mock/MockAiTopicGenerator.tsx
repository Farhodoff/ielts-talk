import React, { useState } from 'react';
import { Sparkles, RefreshCw, AlertCircle } from 'lucide-react';
import { Button } from '../../ui/Button';
import { generateAIResponse, extractJsonFromAiResponse } from '../../../utils/ai/aiCore';
import { MockPassageData } from '../../../types/ieltsMock';

interface MockAiTopicGeneratorProps {
  testType: 'reading' | 'listening';
  onGenerated: (data: MockPassageData) => void;
}

export const MockAiTopicGenerator: React.FC<MockAiTopicGeneratorProps> = ({
  testType,
  onGenerated,
}) => {
  const [topic, setTopic] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async (presetTopic?: string) => {
    const chosenTopic = presetTopic || topic.trim() || 'Artificial Intelligence & Global Warming';
    setIsGenerating(true);
    setError(null);

    const prompt = `
      Act as an expert IELTS Academic Test Maker.
      Generate one complete IELTS practice task on the topic: "${chosenTopic}".
      The task type is: "${testType}" (either "reading" or "listening").
      
      Guidelines for "reading":
      Provide an Academic Reading passage of approximately 300 words, a title, and exactly 4 questions (combination of multiple choice and sentence completion).
      
      Guidelines for "listening":
      Provide an authentic IELTS listening conversation or academic lecture script of approximately 220 words, a title, and exactly 4 questions.
      
      Each question can be 'choice' (multiple choice, options index 0-3) or 'fill' (note/sentence completion with short text).
      
      Return ONLY a valid JSON object matching this structure (DO NOT wrap in markdown, backticks, or write other explanations):
      {
        "title": "Passage/Audio Title",
        "text": "The full reading passage text or listening script...",
        "questions": [
          {
            "id": 1,
            "text": "Question text...",
            "type": "choice",
            "options": ["Option A", "Option B", "Option C", "Option D"],
            "correctAnswer": "0",
            "explanation": "Explanation for why this is correct..."
          },
          {
            "id": 2,
            "text": "Sentence completion question: The primary element is ________.",
            "type": "fill",
            "correctAnswer": "hydrogen",
            "explanation": "Explanation citation..."
          }
        ]
      }
    `;

    try {
      const rawResponse = await generateAIResponse(
        [
          { role: 'system', content: 'You are a JSON only provider.' },
          { role: 'user', content: prompt },
        ],
        { isJson: true },
      );
      const data = extractJsonFromAiResponse<MockPassageData>(rawResponse);

      if (data && data.title && data.text && Array.isArray(data.questions)) {
        onGenerated({
          title: data.title,
          text: data.text,
          script: testType === 'listening' ? data.text : undefined,
          questions: data.questions,
        });
      } else {
        throw new Error('Invalid response format received from AI.');
      }
    } catch (err: any) {
      console.error(err);
      setError("Mashq yaratishda xatolik yuz berdi. Iltimos qaytadan urinib ko'ring.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="space-y-3 rounded-2xl border border-indigo-500/20 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-transparent p-4 shadow-sm sm:space-y-4 sm:rounded-3xl sm:p-6 md:p-8">
      <div className="flex flex-col justify-between gap-2 sm:gap-3 md:flex-row md:items-center">
        <div className="space-y-1">
          <h4 className="flex items-center gap-2 text-sm font-black text-foreground sm:text-base">
            <Sparkles size={18} className="text-indigo-500" />
            Ixtiyoriy Mavzuda AI Generator
          </h4>
          <p className="text-xs text-muted-foreground">
            Istalgan mavzuni kiriting — AI avtomatik matn, audio va 4 ta savol yaratadi.
          </p>
        </div>
      </div>

      {/* Preset Quick Chips */}
      <div className="flex flex-wrap gap-1.5 sm:gap-2">
        {['Global Warming', 'Urban AI', 'Genetics', 'Space Exploration'].map((chip) => (
          <button
            key={chip}
            onClick={() => handleGenerate(chip)}
            disabled={isGenerating}
            className="cursor-pointer rounded-lg border border-border bg-background/80 px-2.5 py-1 text-[11px] font-bold text-muted-foreground transition-all hover:border-indigo-500/40 hover:bg-background hover:text-foreground sm:px-3"
          >
            ⚡ {chip}
          </button>
        ))}
      </div>

      <div className="flex gap-2 pt-1">
        <input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Mavzuni kiriting (AI, Ecology, Space)..."
          disabled={isGenerating}
          className="flex-1 rounded-xl border border-border bg-background px-3 py-2 text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:px-4 sm:py-2.5"
        />
        <Button
          onClick={() => handleGenerate()}
          disabled={isGenerating}
          className="flex shrink-0 cursor-pointer items-center gap-1.5 rounded-xl bg-indigo-600 px-3.5 py-2 text-xs font-extrabold text-white shadow hover:bg-indigo-700 sm:px-5 sm:py-2.5"
        >
          {isGenerating ? <RefreshCw className="animate-spin" size={14} /> : <Sparkles size={14} />}
          <span>{isGenerating ? 'Kutilmoqda...' : 'Yaratish'}</span>
        </Button>
      </div>

      {error && (
        <p className="flex items-center gap-1.5 text-xs text-rose-500">
          <AlertCircle size={14} /> {error}
        </p>
      )}
    </div>
  );
};
