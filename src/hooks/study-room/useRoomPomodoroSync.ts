import { useState, useEffect, useRef } from 'react';
import { supabase } from '../../lib/supabase';

export type PomodoroMode = 'focus' | 'short_break' | 'long_break';

interface UseRoomPomodoroSyncOptions {
  channelRef: React.RefObject<ReturnType<typeof supabase.channel> | null>;
  clientId: string;
}

export const useRoomPomodoroSync = ({ channelRef, clientId }: UseRoomPomodoroSyncOptions) => {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [pomodoroMode, setPomodoroMode] = useState<PomodoroMode>('focus');

  const pomodoroStateRef = useRef({ timeLeft, isRunning, mode: pomodoroMode });
  useEffect(() => {
    pomodoroStateRef.current = { timeLeft, isRunning, mode: pomodoroMode };
  }, [timeLeft, isRunning, pomodoroMode]);

  // Local Pomodoro Ticking
  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval> | null = null;
    if (isRunning) {
      intervalId = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setIsRunning(false);
            try {
              const audio = new Audio(
                'https://assets.mixkit.co/active_storage/sfx/2869/2869-500.wav',
              );
              audio.play();
            } catch (e) {
              console.log('Audio blocked', e);
            }
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isRunning]);

  // Broadcast handlers
  const handlePomodoroModeChange = (mode: PomodoroMode, durationMinutes: number) => {
    const seconds = durationMinutes * 60;
    setPomodoroMode(mode);
    setTimeLeft(seconds);
    setIsRunning(false);
    channelRef.current?.send({
      type: 'broadcast',
      event: 'pomodoro_state_update',
      payload: {
        senderId: clientId,
        timeLeft: seconds,
        isRunning: false,
        mode,
      },
    });
  };

  const handleStartPomodoro = () => {
    setIsRunning(true);
    channelRef.current?.send({
      type: 'broadcast',
      event: 'pomodoro_state_update',
      payload: {
        senderId: clientId,
        timeLeft,
        isRunning: true,
        mode: pomodoroMode,
      },
    });
  };

  const handlePausePomodoro = () => {
    setIsRunning(false);
    channelRef.current?.send({
      type: 'broadcast',
      event: 'pomodoro_state_update',
      payload: {
        senderId: clientId,
        timeLeft,
        isRunning: false,
        mode: pomodoroMode,
      },
    });
  };

  const handleResetPomodoro = (seconds?: number) => {
    const defaultSec =
      pomodoroMode === 'focus' ? 25 * 60 : pomodoroMode === 'short_break' ? 5 * 60 : 15 * 60;
    const newTime = seconds ?? defaultSec;
    setTimeLeft(newTime);
    setIsRunning(false);
    channelRef.current?.send({
      type: 'broadcast',
      event: 'pomodoro_state_update',
      payload: {
        senderId: clientId,
        timeLeft: newTime,
        isRunning: false,
        mode: pomodoroMode,
      },
    });
  };

  const formatPomodoroTime = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  return {
    timeLeft,
    setTimeLeft,
    isRunning,
    setIsRunning,
    pomodoroMode,
    setPomodoroMode,
    pomodoroStateRef,
    handlePomodoroModeChange,
    handleStartPomodoro,
    handlePausePomodoro,
    handleResetPomodoro,
    formatPomodoroTime,
  };
};
