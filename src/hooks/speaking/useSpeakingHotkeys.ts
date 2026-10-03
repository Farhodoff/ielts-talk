import { useEffect } from 'react';

interface UseSpeakingHotkeysOptions {
  toggleMic: () => void;
  handleBargeIn: () => void;
  handleResetChat: () => void;
  isSpeaking: boolean;
  isListening: boolean;
  recognitionRef: React.RefObject<any>;
}

export const useSpeakingHotkeys = ({
  toggleMic,
  handleBargeIn,
  handleResetChat,
  isSpeaking,
  isListening,
  recognitionRef,
}: UseSpeakingHotkeysOptions) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeEl = document.activeElement;
      const isInput =
        activeEl &&
        (activeEl.tagName === 'INPUT' ||
          activeEl.tagName === 'TEXTAREA' ||
          (activeEl as HTMLElement).isContentEditable);
      if (isInput) return;

      if (e.code === 'Space') {
        e.preventDefault();
        toggleMic();
      } else if (e.code === 'Escape') {
        e.preventDefault();
        if (isSpeaking) {
          handleBargeIn();
        } else if (isListening) {
          if (recognitionRef.current) {
            try {
              recognitionRef.current.abort();
            } catch {}
          }
        }
      } else if (e.code === 'KeyR' && !e.ctrlKey && !e.metaKey && !e.altKey) {
        e.preventDefault();
        handleResetChat();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [toggleMic, handleBargeIn, handleResetChat, isSpeaking, isListening, recognitionRef]);
};
