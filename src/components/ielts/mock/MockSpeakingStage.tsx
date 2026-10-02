import React, { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, ChevronRight, ArrowRight } from 'lucide-react';
import { Button } from '../../ui/Button';
import { FullMockExam } from '../../../data/ielts/fullMockData';
import { toast } from '../../../hooks/use-toast';

interface MockSpeakingStageProps {
  exam: FullMockExam;
  onSavePart1Response: (index: number, response: string) => void;
  onSavePart2Speech: (speech: string) => void;
  onSavePart3Response: (index: number, response: string) => void;
  onCompleteExam: () => void;
}

export const MockSpeakingStage: React.FC<MockSpeakingStageProps> = ({
  exam,
  onSavePart1Response,
  onSavePart2Speech,
  onSavePart3Response,
  onCompleteExam,
}) => {
  const [speakingStep, setSpeakingStep] = useState<
    'part1' | 'part2_prep' | 'part2_speech' | 'part3'
  >('part1');
  const [speakingP1QuestionIdx, setSpeakingP1QuestionIdx] = useState(0);
  const [speakingP3QuestionIdx, setSpeakingP3QuestionIdx] = useState(0);
  const [cueCardPrepTimer, setCueCardPrepTimer] = useState(60);
  const [isRecording, setIsRecording] = useState(false);
  const [speakingTranscript, setSpeakingTranscript] = useState('');
  const recognitionRef = useRef<any>(null);

  const speakExaminerQuestion = (text: string) => {
    if (
      !text ||
      typeof window === 'undefined' ||
      !window.speechSynthesis ||
      typeof SpeechSynthesisUtterance === 'undefined'
    )
      return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-GB';
    utterance.rate = 0.92;
    window.speechSynthesis.speak(utterance);
  };

  const stopAudio = () => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
  };

  const startMicRecording = () => {
    const SpeechRec = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRec) {
      toast({
        variant: 'destructive',
        title: 'Nutq aniqlash qo‘llab-quvvatlanmaydi',
        description: 'Iltimos Chrome yoki Edge brauzeridan foydalaning.',
      });
      return;
    }

    try {
      const rec = new SpeechRec();
      rec.lang = 'en-US';
      rec.continuous = true;
      rec.interimResults = true;

      rec.onresult = (e: any) => {
        let transcript = '';
        for (let i = 0; i < e.results.length; i++) {
          transcript += e.results[i][0].transcript + ' ';
        }
        setSpeakingTranscript(transcript.trim());
      };

      rec.onerror = (e: any) => {
        console.warn('Speech rec error:', e);
      };

      rec.onend = () => {
        setIsRecording(false);
      };

      recognitionRef.current = rec;
      rec.start();
      setIsRecording(true);
    } catch (err) {
      console.warn('Speech rec start error', err);
    }
  };

  const stopMicRecording = () => {
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch {
        // ignore
      }
      recognitionRef.current = null;
    }
    setIsRecording(false);
  };

  // Initial speech when mounting stage
  useEffect(() => {
    speakExaminerQuestion(exam.speaking.part1[0]);
    return () => {
      stopAudio();
      stopMicRecording();
    };
  }, []);

  // Cue card prep timer countdown
  useEffect(() => {
    let t: NodeJS.Timeout | null = null;
    if (speakingStep === 'part2_prep' && cueCardPrepTimer > 0) {
      t = setInterval(() => {
        setCueCardPrepTimer((prev) => prev - 1);
      }, 1000);
    } else if (speakingStep === 'part2_prep' && cueCardPrepTimer === 0) {
      setSpeakingStep('part2_speech');
      speakExaminerQuestion(
        'All right, your preparation time is up. Please begin speaking now for one to two minutes.',
      );
      startMicRecording();
    }
    return () => {
      if (t) clearInterval(t);
    };
  }, [speakingStep, cueCardPrepTimer]);

  const handleNextSpeakingP1Question = () => {
    stopMicRecording();
    const currentQ = exam.speaking.part1[speakingP1QuestionIdx];
    const recordedText = `Q: ${currentQ} | A: ${speakingTranscript || '(No speech recorded)'}`;
    onSavePart1Response(speakingP1QuestionIdx, recordedText);
    setSpeakingTranscript('');

    if (speakingP1QuestionIdx < exam.speaking.part1.length - 1) {
      const nextIdx = speakingP1QuestionIdx + 1;
      setSpeakingP1QuestionIdx(nextIdx);
      speakExaminerQuestion(exam.speaking.part1[nextIdx]);
    } else {
      setSpeakingStep('part2_prep');
      setCueCardPrepTimer(60);
      speakExaminerQuestion(
        `Now, in Part 2, I am going to give you a topic, and I would like you to talk about it for one to two minutes. Before you talk, you have one minute to think about what you are going to say. Here is your topic: ${exam.speaking.part2.title}`,
      );
    }
  };

  const handleFinishPart2Speech = () => {
    stopMicRecording();
    onSavePart2Speech(speakingTranscript);
    setSpeakingTranscript('');
    setSpeakingStep('part3');
    setSpeakingP3QuestionIdx(0);
    speakExaminerQuestion(
      `Thank you. Now in Part 3, let us discuss some more general questions related to this. ${exam.speaking.part3[0]}`,
    );
  };

  const handleNextSpeakingP3Question = () => {
    stopMicRecording();
    const currentQ = exam.speaking.part3[speakingP3QuestionIdx];
    const recordedText = `Q: ${currentQ} | A: ${speakingTranscript || '(No speech recorded)'}`;
    onSavePart3Response(speakingP3QuestionIdx, recordedText);
    setSpeakingTranscript('');

    if (speakingP3QuestionIdx < exam.speaking.part3.length - 1) {
      const nextIdx = speakingP3QuestionIdx + 1;
      setSpeakingP3QuestionIdx(nextIdx);
      speakExaminerQuestion(exam.speaking.part3[nextIdx]);
    } else {
      onCompleteExam();
    }
  };

  return (
    <div className="mx-auto my-auto w-full max-w-2xl space-y-6 duration-150 animate-in fade-in">
      <div className="space-y-6 rounded-3xl border border-purple-500/30 bg-slate-900/80 p-6 text-center shadow-2xl backdrop-blur-xl sm:p-8">
        {/* Examiner Avatar */}
        <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-tr from-purple-600 to-indigo-600 text-white shadow-xl shadow-purple-500/25">
          <Mic size={36} className={isRecording ? 'animate-pulse text-red-300' : ''} />
          {isRecording && (
            <span className="absolute -right-1 -top-1 flex h-4 w-4">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex h-4 w-4 rounded-full bg-red-500" />
            </span>
          )}
        </div>

        <div>
          <span className="rounded-full bg-purple-500/20 px-3 py-1 text-xs font-black uppercase text-purple-300">
            {speakingStep === 'part1'
              ? 'Speaking Part 1: Introduction & Interview'
              : speakingStep === 'part2_prep'
                ? 'Speaking Part 2: 1-Minute Preparation'
                : speakingStep === 'part2_speech'
                  ? 'Speaking Part 2: Individual Long Turn'
                  : 'Speaking Part 3: Two-way Discussion'}
          </span>
          <h3 className="mt-3 text-lg font-black text-white sm:text-xl">
            {speakingStep === 'part1' && exam.speaking.part1[speakingP1QuestionIdx]}
            {speakingStep === 'part2_prep' && exam.speaking.part2.title}
            {speakingStep === 'part2_speech' && exam.speaking.part2.title}
            {speakingStep === 'part3' && exam.speaking.part3[speakingP3QuestionIdx]}
          </h3>
        </div>

        {/* Cue Card Details during Part 2 */}
        {(speakingStep === 'part2_prep' || speakingStep === 'part2_speech') && (
          <div className="space-y-2 rounded-2xl border border-slate-800 bg-slate-950 p-4 text-left text-xs text-slate-300">
            <span className="block font-bold text-purple-400">You should say:</span>
            <ul className="list-disc space-y-1 pl-5">
              {exam.speaking.part2.bullets.map((b, bIdx) => (
                <li key={bIdx}>{b}</li>
              ))}
            </ul>

            {speakingStep === 'part2_prep' && (
              <div className="border-t border-slate-800 pt-3 text-center">
                <span className="block text-[11px] text-slate-400">Tayyorgarlik vaqti:</span>
                <span className="font-mono text-3xl font-black text-amber-400">
                  {cueCardPrepTimer}s
                </span>
              </div>
            )}
          </div>
        )}

        {/* Live Transcript Box */}
        <div className="min-h-[70px] rounded-2xl border border-slate-800 bg-slate-950 p-4 text-left font-mono text-xs text-slate-300">
          <span className="mb-1 block text-[10px] font-bold uppercase text-slate-500">
            Jonli Nutq Matni (Live Transcript):
          </span>
          <p className="italic">
            {speakingTranscript ||
              (isRecording
                ? 'Gapiring, mikrofon yozmoqda...'
                : 'Nutqni boshlash uchun mikrofon tugmasini bosing')}
          </p>
        </div>

        {/* Speaking Controls */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            type="button"
            onClick={() => {
              if (isRecording) stopMicRecording();
              else startMicRecording();
            }}
            className={`flex cursor-pointer items-center gap-2 rounded-2xl px-5 py-3 text-xs font-black text-white shadow-md transition-all ${
              isRecording ? 'bg-red-600 hover:bg-red-500' : 'bg-purple-600 hover:bg-purple-500'
            }`}
          >
            {isRecording ? <MicOff size={16} /> : <Mic size={16} />}
            <span>{isRecording ? 'Yozishni to‘xtatish' : 'Gapirishni boshlash'}</span>
          </button>

          {speakingStep === 'part1' && (
            <Button type="button" onClick={handleNextSpeakingP1Question} className="text-xs">
              <span>Keyingi savol</span>
              <ChevronRight size={14} />
            </Button>
          )}

          {speakingStep === 'part2_prep' && (
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                setCueCardPrepTimer(0);
              }}
              className="text-xs"
            >
              Tayyorman (Taymerni o‘tkazish)
            </Button>
          )}

          {speakingStep === 'part2_speech' && (
            <Button
              type="button"
              onClick={handleFinishPart2Speech}
              className="bg-emerald-600 text-xs text-white hover:bg-emerald-500"
            >
              <span>Part 2 ni yakunlash</span>
              <ArrowRight size={14} />
            </Button>
          )}

          {speakingStep === 'part3' && (
            <Button type="button" onClick={handleNextSpeakingP3Question} className="text-xs">
              <span>
                {speakingP3QuestionIdx < exam.speaking.part3.length - 1
                  ? 'Keyingi savol'
                  : 'Imtihonni Yakunlash'}
              </span>
              <ArrowRight size={14} />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
