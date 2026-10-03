import React from 'react';
import { PenTool, Clock, Minimize2 } from 'lucide-react';
import { RoomPomodoro } from './RoomPomodoro';
import { PomodoroMode } from '../../hooks/study-room/useRoomPomodoroSync';

const RoomWhiteboard = React.lazy(() => import('./RoomWhiteboard'));

interface RoomCollabPanelProps {
  showCollabPanel: boolean;
  setShowCollabPanel: (show: boolean) => void;
  mobileView: 'video' | 'collab' | 'pomodoro';
  collabTab: 'whiteboard' | 'pomodoro';
  setCollabTab: (tab: 'whiteboard' | 'pomodoro') => void;
  onWhiteboardMount: (canvas: HTMLCanvasElement | null) => () => void;
  pomodoroMode: PomodoroMode;
  timeLeft: number;
  isRunning: boolean;
  handlePomodoroModeChange: (mode: PomodoroMode, durationMinutes: number) => void;
  handleStartPomodoro: () => void;
  handlePausePomodoro: () => void;
  handleResetPomodoro: (seconds?: number) => void;
  formatPomodoroTime: (sec: number) => string;
}

export const RoomCollabPanel: React.FC<RoomCollabPanelProps> = ({
  showCollabPanel,
  setShowCollabPanel,
  mobileView,
  collabTab,
  setCollabTab,
  onWhiteboardMount,
  pomodoroMode,
  timeLeft,
  isRunning,
  handlePomodoroModeChange,
  handleStartPomodoro,
  handlePausePomodoro,
  handleResetPomodoro,
  formatPomodoroTime,
}) => {
  return (
    <div
      className={`relative min-h-0 w-full flex-col overflow-hidden rounded-3xl border border-slate-700/50 bg-[#1e293b] shadow-2xl transition-all duration-300 animate-in fade-in slide-in-from-right-4 md:w-[460px] lg:w-[540px] ${
        showCollabPanel && (mobileView === 'collab' || mobileView === 'pomodoro')
          ? 'flex h-full flex-1'
          : showCollabPanel
            ? 'hidden md:flex'
            : 'hidden'
      }`}
    >
      {/* Panel Header with Segmented Tabs */}
      <div className="flex shrink-0 items-center justify-between border-b border-slate-800 bg-slate-900/90 px-3.5 py-3 sm:px-4">
        <div className="flex items-center gap-1 rounded-xl border border-slate-700/60 bg-slate-800 p-0.5">
          <button
            onClick={() => setCollabTab('whiteboard')}
            className={`flex cursor-pointer items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-bold transition-all sm:px-3 ${
              collabTab === 'whiteboard'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <PenTool size={13} />
            <span>Oq Doska</span>
          </button>
          <button
            onClick={() => setCollabTab('pomodoro')}
            className={`flex cursor-pointer items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-bold transition-all sm:px-3 ${
              collabTab === 'pomodoro'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Clock size={13} />
            <span>Pomodoro ({formatPomodoroTime(timeLeft)})</span>
          </button>
        </div>
        <button
          onClick={() => setShowCollabPanel(false)}
          className="hidden cursor-pointer rounded-xl p-1.5 text-slate-400 transition-colors hover:bg-slate-800 hover:text-white md:flex"
          title="Yashirish"
        >
          <Minimize2 size={16} />
        </button>
      </div>

      {/* Whiteboard Content Area */}
      {collabTab === 'whiteboard' && (
        <div className="relative flex h-full min-h-0 flex-1 touch-none flex-col overflow-hidden rounded-b-3xl bg-white p-2 sm:p-4">
          <React.Suspense
            fallback={
              <div className="flex h-full items-center justify-center text-xs font-bold text-slate-500">
                Oq doska yuklanmoqda...
              </div>
            }
          >
            <RoomWhiteboard onMount={onWhiteboardMount} />
          </React.Suspense>
        </div>
      )}

      {/* Pomodoro Content Area */}
      {collabTab === 'pomodoro' && (
        <div className="flex h-full min-h-0 flex-1 flex-col overflow-y-auto rounded-b-3xl bg-[#1e293b] p-3 sm:p-6">
          <RoomPomodoro
            pomodoroMode={pomodoroMode}
            timeLeft={timeLeft}
            isRunning={isRunning}
            handleModeChange={handlePomodoroModeChange}
            handleStart={handleStartPomodoro}
            handlePause={handlePausePomodoro}
            handleReset={handleResetPomodoro}
            formatTime={formatPomodoroTime}
          />
        </div>
      )}
    </div>
  );
};
