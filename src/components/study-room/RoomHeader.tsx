import React from 'react';
import { ArrowLeft, VideoOff, Users, PenTool, Video, Share2, Check, RotateCcw } from 'lucide-react';
import { Button } from '../ui/Button';

interface RoomHeaderProps {
  roomDisplayName: string;
  connectedPeers: number;
  copiedLink: boolean;
  onCopyLink: () => void;
  mobileView: 'video' | 'collab' | 'pomodoro';
  setMobileView: (view: 'video' | 'collab' | 'pomodoro') => void;
  collabTab: 'whiteboard' | 'pomodoro';
  setCollabTab: (tab: 'whiteboard' | 'pomodoro') => void;
  showCollabPanel: boolean;
  setShowCollabPanel: (show: boolean) => void;
  onExit: () => void;
}

export const RoomHeader: React.FC<RoomHeaderProps> = ({
  roomDisplayName,
  connectedPeers,
  copiedLink,
  onCopyLink,
  mobileView,
  setMobileView,
  collabTab,
  setCollabTab,
  showCollabPanel,
  setShowCollabPanel,
  onExit,
}) => {
  return (
    <header className="mb-3 flex shrink-0 flex-col items-stretch justify-between gap-2.5 rounded-2xl border border-slate-700/50 bg-[#1e293b] p-3 shadow-xl sm:mb-5 sm:flex-row sm:items-center sm:gap-3 sm:p-4">
      <div className="flex w-full items-center justify-between sm:w-auto">
        <div className="flex min-w-0 items-center gap-2.5 sm:gap-4">
          <button
            onClick={onExit}
            className="shrink-0 cursor-pointer rounded-xl p-2 transition-colors hover:bg-slate-700"
            title="Chiqish"
          >
            <ArrowLeft size={20} className="text-gray-300 sm:size-6" />
          </button>
          <div className="min-w-0">
            <h1 className="max-w-[170px] truncate text-base font-bold tracking-tight text-white sm:max-w-xs sm:text-lg md:max-w-none md:text-xl">
              {roomDisplayName}
            </h1>
            <div className="mt-0.5 flex items-center gap-1.5 sm:gap-2">
              <span className="h-2 w-2 shrink-0 animate-ping rounded-full bg-green-500" />
              <p className="whitespace-nowrap text-[11px] font-medium text-green-400 sm:text-xs">
                Sinxron Faoliyat
              </p>
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-600" />
              <span className="flex items-center gap-1 whitespace-nowrap text-[11px] text-slate-400 sm:text-xs">
                <Users size={12} /> {connectedPeers} ta talaba
              </span>
            </div>
          </div>
        </div>

        {/* Mobile Exit & Share Buttons */}
        <div className="flex shrink-0 items-center gap-1.5 sm:hidden">
          <button
            onClick={onCopyLink}
            className="cursor-pointer rounded-xl border border-slate-700 bg-slate-800 p-2 text-xs font-semibold text-slate-200 shadow-sm transition-all hover:bg-slate-700 active:scale-95"
            title="Xona havolasini nusxalash"
          >
            {copiedLink ? <Check size={16} className="text-emerald-400" /> : <Share2 size={16} />}
          </button>
          <Button
            variant="secondary"
            onClick={onExit}
            className="cursor-pointer rounded-xl border-none bg-red-500/10 px-2.5 py-1.5 text-xs font-bold text-red-400 hover:bg-red-500 hover:text-white"
          >
            <VideoOff size={15} className="mr-1" /> Chiqish
          </Button>
        </div>
      </div>

      <div className="flex w-full items-center justify-between gap-2 sm:w-auto sm:justify-end">
        {/* Mobile Switch View Segmented Control (Video / Whiteboard / Pomodoro) */}
        <div className="grid w-full grid-cols-3 gap-1 rounded-xl border border-slate-700 bg-slate-800/90 p-1 sm:w-auto md:hidden">
          <button
            onClick={() => setMobileView('video')}
            className={`flex cursor-pointer items-center justify-center gap-1 rounded-lg px-2 py-1.5 text-xs font-semibold transition-all ${
              mobileView === 'video'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Video size={13} />
            <span>Video</span>
          </button>
          <button
            onClick={() => {
              setMobileView('collab');
              setCollabTab('whiteboard');
            }}
            className={`flex cursor-pointer items-center justify-center gap-1 rounded-lg px-2 py-1.5 text-xs font-semibold transition-all ${
              mobileView === 'collab' && collabTab === 'whiteboard'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <PenTool size={13} />
            <span>Doska</span>
          </button>
          <button
            onClick={() => {
              setMobileView('pomodoro');
              setCollabTab('pomodoro');
            }}
            className={`flex cursor-pointer items-center justify-center gap-1 rounded-lg px-2 py-1.5 text-xs font-semibold transition-all ${
              mobileView === 'pomodoro' || (mobileView === 'collab' && collabTab === 'pomodoro')
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <RotateCcw size={13} />
            <span>Fokus</span>
          </button>
        </div>

        {/* Desktop Action Buttons */}
        <div className="hidden items-center gap-2 sm:flex">
          {/* Copy Room Link Button */}
          <button
            onClick={onCopyLink}
            className="flex cursor-pointer items-center gap-1.5 rounded-xl border border-slate-700 bg-slate-800 px-3.5 py-2.5 text-xs font-semibold text-slate-200 shadow-sm transition-all hover:bg-slate-700 active:scale-95"
            title="Xona havolasini nusxalash"
          >
            {copiedLink ? <Check size={16} className="text-emerald-400" /> : <Share2 size={16} />}
            <span>{copiedLink ? 'Nusxalandi!' : 'Havola'}</span>
          </button>

          {/* Desktop Whiteboard / Collab Panel Toggle Button */}
          <button
            onClick={() => setShowCollabPanel(!showCollabPanel)}
            className={`flex cursor-pointer items-center gap-2 rounded-xl border px-4 py-2.5 text-xs font-bold shadow-sm transition-all active:scale-95 ${
              showCollabPanel
                ? 'border-indigo-500/40 bg-indigo-600/20 text-indigo-300'
                : 'border-slate-700 bg-slate-800 text-slate-200 hover:bg-slate-700'
            }`}
            title={
              showCollabPanel ? 'Hamkorlik panelini yashirish' : "Hamkorlik panelini ko'rsatish"
            }
          >
            <PenTool size={16} />
            <span>{showCollabPanel ? 'Panelni yashirish' : 'Hamkorlik Paneli'}</span>
          </button>

          <Button
            variant="secondary"
            onClick={onExit}
            className="cursor-pointer rounded-xl border-none bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white"
          >
            <VideoOff size={18} className="mr-2" /> Chiqish
          </Button>
        </div>
      </div>
    </header>
  );
};
