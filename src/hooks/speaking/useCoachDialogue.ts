import { useState, useRef, useCallback } from 'react';
import {
  streamCoachDialogue,
  converseWithCoachStructured,
  CoachStructuredResponse,
  translateTextToUzbek,
  parseMicroErrors,
  extractSpeechAudioText,
} from '../../utils/ai';
import { CoachChatMessage, CoachPersona } from '../../components/speaking/speakingTypes';
import { ConversationScenario } from '../../components/speaking/scenarioTypes';
import { ErrorTag } from '../../components/speaking/RealtimeVoiceOverlay';
import { playConversationChime } from '../../utils/audioChime';
import { isAcousticEcho } from '../../utils/echoFilter';
import { ErrorVaultService } from '../../services/ErrorVaultService';
import { MasteryEngine } from '../../services/MasteryEngine';
import { toast } from '../use-toast';

interface UseCoachDialogueOptions {
  chatHistory: CoachChatMessage[];
  setChatHistory: React.Dispatch<React.SetStateAction<CoachChatMessage[]>>;
  chatHistoryRef: React.MutableRefObject<CoachChatMessage[]>;
  languageRef: React.MutableRefObject<'en' | 'ja'>;
  personaRef: React.MutableRefObject<CoachPersona>;
  activeScenarioRef: React.MutableRefObject<ConversationScenario | null>;
  isSpeaking: boolean;
  setIsSpeaking: (speaking: boolean) => void;
  isListening: boolean;
  recognitionRef: React.RefObject<any>;
  isProcessingRef: React.MutableRefObject<boolean>;
  stopSpeaking: () => void;
  speakText: (text: string) => void;
  unlockAudio: () => void;
  enqueueStreamSentence: (sentence: string) => void;
  endStreamPlayback: () => void;
  startListening: () => void;
  setCurrentTranscript: (transcript: string) => void;
  transcriptBufferRef: React.MutableRefObject<string>;
  setError: (err: string | null) => void;
  user: { id: string } | null;
}

export const useCoachDialogue = ({
  chatHistory,
  setChatHistory,
  chatHistoryRef,
  languageRef,
  personaRef,
  activeScenarioRef,
  isSpeaking,
  setIsSpeaking,
  isListening,
  recognitionRef,
  isProcessingRef,
  stopSpeaking,
  speakText,
  unlockAudio,
  enqueueStreamSentence,
  endStreamPlayback,
  startListening,
  setCurrentTranscript,
  transcriptBufferRef,
  setError,
  user,
}: UseCoachDialogueOptions) => {
  const [isThinking, setIsThinking] = useState(false);
  const [liveErrors, setLiveErrors] = useState<ErrorTag[]>([]);

  const streamAbortControllerRef = useRef<AbortController | null>(null);
  const lastCoachSpokenTextRef = useRef<string>('');

  const handleBargeIn = useCallback(() => {
    if (streamAbortControllerRef.current) {
      streamAbortControllerRef.current.abort();
      streamAbortControllerRef.current = null;
    }
    if (isSpeaking) {
      playConversationChime('barge_in');
      stopSpeaking();
      setIsSpeaking(false);
      isProcessingRef.current = false;
      setTimeout(() => {
        startListening();
      }, 100);
    }
  }, [isSpeaking, stopSpeaking, setIsSpeaking, isProcessingRef, startListening]);

  const toggleMic = useCallback(() => {
    unlockAudio();
    if (isSpeaking) {
      handleBargeIn();
      return;
    }
    if (isListening) {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.stop();
        } catch {}
      }
    } else {
      startListening();
    }
  }, [unlockAudio, isSpeaking, handleBargeIn, isListening, startListening, recognitionRef]);

  const handleSendUserText = async (text: string) => {
    const cleanText = (text || '').trim();
    if (!cleanText || cleanText.length < 2) return;

    // Acoustic Echo Suppression: Discard microphone loopback of coach's own audio
    const lastCoachText =
      lastCoachSpokenTextRef.current ||
      [...chatHistoryRef.current].reverse().find((m) => m.role === 'assistant')?.content ||
      '';
    if (isAcousticEcho(cleanText, lastCoachText)) {
      console.warn('[SpeakingCoach] Discarded acoustic speaker echo loopback:', cleanText);
      isProcessingRef.current = false;
      setIsThinking(false);
      setCurrentTranscript('');
      transcriptBufferRef.current = '';
      return;
    }

    isProcessingRef.current = true;
    setIsThinking(true);
    setError(null);

    stopSpeaking();
    setIsSpeaking(false);

    if (streamAbortControllerRef.current) {
      streamAbortControllerRef.current.abort();
      streamAbortControllerRef.current = null;
    }
    const abortController = new AbortController();
    streamAbortControllerRef.current = abortController;

    const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const userMsg: CoachChatMessage = { role: 'user', content: cleanText, timestamp: timeStr };
    const updatedHistory = [...chatHistoryRef.current, userMsg];

    setChatHistory(updatedHistory);
    chatHistoryRef.current = updatedHistory;

    try {
      let structured: CoachStructuredResponse;
      let streamedSentences = 0;
      let accumulatedSpeech = '';

      try {
        structured = await streamCoachDialogue(
          cleanText,
          updatedHistory.map((h) => ({ role: h.role, content: h.content })),
          languageRef.current,
          personaRef.current,
          activeScenarioRef.current,
          (sentence, index) => {
            if (abortController.signal.aborted) return;
            streamedSentences++;
            accumulatedSpeech += (accumulatedSpeech ? ' ' : '') + sentence;
            lastCoachSpokenTextRef.current = accumulatedSpeech;
            if (index === 0) {
              setIsThinking(false);
              const liveAiMsg: CoachChatMessage = {
                role: 'assistant',
                content: sentence,
                timestamp: new Date().toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                }),
              };
              setChatHistory((prev) => {
                const next = [...prev, liveAiMsg];
                chatHistoryRef.current = next;
                return next;
              });
            } else {
              setChatHistory((prev) => {
                const copy = [...prev];
                const lastIdx = copy.length - 1;
                if (lastIdx >= 0 && copy[lastIdx].role === 'assistant') {
                  copy[lastIdx] = { ...copy[lastIdx], content: accumulatedSpeech };
                }
                chatHistoryRef.current = copy;
                return copy;
              });
            }
            enqueueStreamSentence(sentence);
          },
          abortController.signal,
        );
        endStreamPlayback();
      } catch (streamErr: any) {
        if (abortController.signal.aborted || streamErr?.name === 'AbortError') {
          return;
        }
        console.warn(
          '[SpeakingCoach] Streaming dialogue failed, fallback to non-streaming:',
          streamErr,
        );
        stopSpeaking();
        structured = await converseWithCoachStructured(
          cleanText,
          updatedHistory.map((h) => ({ role: h.role, content: h.content })),
          languageRef.current,
          personaRef.current,
          undefined,
          activeScenarioRef.current,
        );
      }

      if (abortController.signal.aborted) {
        return;
      }

      let cleanReply = (structured.reply || '').trim();
      if (
        cleanReply.startsWith('{') &&
        (cleanReply.includes('"reply"') || cleanReply.includes('"language"'))
      ) {
        try {
          const parsed = JSON.parse(cleanReply);
          if (parsed && parsed.reply && typeof parsed.reply === 'string') {
            cleanReply = parsed.reply.trim();
          }
        } catch {
          const m = cleanReply.match(/"(?:reply|message|content|text)"\s*:\s*"((?:[^"\\]|\\.)*)"/i);
          if (m) {
            cleanReply = m[1].replace(/\\"/g, '"').replace(/\\n/g, '\n').trim();
          }
        }
      }
      if (cleanReply.startsWith('{') && cleanReply.endsWith('}')) {
        cleanReply =
          languageRef.current === 'ja'
            ? 'はい、よく分かりました！続けて日本語でお話ししましょう。'
            : "Understood! Let's continue speaking practice.";
      }

      const aiMsg: CoachChatMessage = {
        role: 'assistant',
        content: cleanReply,
        romaji: structured.romaji,
        ttsText: structured.ttsText,
        correction: structured.correction,
        vocabulary: structured.vocabulary,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      const finalHistory = [...updatedHistory, aiMsg];

      // Record structured micro-error for real-time live overlay & persist immediately
      if (
        structured.correction &&
        (structured.correction.hasError ||
          Boolean(
            structured.correction.corrected && structured.correction.corrected.trim().length > 0,
          )) &&
        structured.correction.corrected
      ) {
        const errorTag: ErrorTag = {
          id: Math.random().toString(36).substring(2, 9),
          type: 'grammar',
          originalText: structured.correction?.original || cleanText,
          correction: structured.correction?.corrected || '',
          explanation: structured.correction?.explanation || '',
        };
        setLiveErrors((prev) => [errorTag, ...prev].slice(0, 10));

        ErrorVaultService.logErrors([
          {
            verbatim: structured.correction.original || cleanText,
            correction: structured.correction.corrected,
            explanation: structured.correction.explanation || '',
            category: 'grammar',
            language: languageRef.current,
          },
        ]);

        const activeUserId = user?.id || 'default-user';
        MasteryEngine.recordEvidence(activeUserId, languageRef.current, {
          id: `ev_spk_err_${Date.now()}`,
          skill: 'speaking',
          timestamp: new Date().toISOString(),
          score: 40,
          activityType: 'speaking',
          details: `Speaking error corrected: ${structured.correction.corrected}`,
        });
      } else {
        const extractedErrs = parseMicroErrors(structured.rawText || structured.reply);
        if (extractedErrs.length > 0) {
          setLiveErrors((prev) => [...extractedErrs, ...prev].slice(0, 10));
        } else {
          const activeUserId = user?.id || 'default-user';
          MasteryEngine.recordEvidence(activeUserId, languageRef.current, {
            id: `ev_spk_turn_${Date.now()}`,
            skill: 'speaking',
            timestamp: new Date().toISOString(),
            score: 90,
            activityType: 'speaking',
            details: `Clean speaking turn with ${personaRef.current} persona`,
          });
        }
      }

      if (streamedSentences > 0) {
        setChatHistory((prev) => {
          const copy = [...prev];
          const lastIdx = copy.length - 1;
          if (lastIdx >= 0 && copy[lastIdx].role === 'assistant') {
            copy[lastIdx] = aiMsg;
          } else {
            copy.push(aiMsg);
          }
          chatHistoryRef.current = copy;
          return copy;
        });
      } else {
        setChatHistory(finalHistory);
        chatHistoryRef.current = finalHistory;
      }

      setIsThinking(false);
      isProcessingRef.current = false;

      // Direct TTS fallback if no streamed sentences
      if (streamedSentences === 0) {
        let speechToPlay = structured.ttsText || extractSpeechAudioText(structured.reply);
        if (!speechToPlay && structured.correction?.hasError) {
          const advice = structured.correction.explanation
            ? `${structured.correction.explanation} ${structured.correction.corrected || ''}`
            : structured.correction.corrected || '';
          speechToPlay = advice;
        }
        lastCoachSpokenTextRef.current = speechToPlay;
        if (speechToPlay) {
          speakText(speechToPlay);
        }
      }
    } catch (err: any) {
      if (abortController.signal.aborted || err?.name === 'AbortError') {
        return;
      }
      console.error('Coach response error:', err);
      let errorMessage = err.message || 'Tahlil qilishda xatolik yuz berdi.';
      if (errorMessage.startsWith('RATE_LIMIT: ')) {
        errorMessage = errorMessage.substring('RATE_LIMIT: '.length);
      }
      stopSpeaking();
      setIsSpeaking(false);
      setError(errorMessage);
      toast({ variant: 'destructive', title: '❌ AI Xatosi', description: errorMessage });
      setIsThinking(false);
      isProcessingRef.current = false;
    }
  };

  const handleTranslateMessage = async (idx: number) => {
    const msg = chatHistory[idx];
    if (!msg || msg.role !== 'assistant') return;

    if (msg.translation) {
      setChatHistory((prev) =>
        prev.map((m, i) => (i === idx ? { ...m, showTranslation: !m.showTranslation } : m)),
      );
      return;
    }

    setChatHistory((prev) => prev.map((m, i) => (i === idx ? { ...m, isTranslating: true } : m)));

    try {
      const trans = await translateTextToUzbek(msg.content);
      setChatHistory((prev) =>
        prev.map((m, i) =>
          i === idx ? { ...m, translation: trans, showTranslation: true, isTranslating: false } : m,
        ),
      );
    } catch (err) {
      console.error('Translation failed:', err);
      setChatHistory((prev) =>
        prev.map((m, i) => (i === idx ? { ...m, isTranslating: false } : m)),
      );
    }
  };

  return {
    isThinking,
    setIsThinking,
    liveErrors,
    setLiveErrors,
    streamAbortControllerRef,
    lastCoachSpokenTextRef,
    handleBargeIn,
    toggleMic,
    handleSendUserText,
    handleTranslateMessage,
  };
};
