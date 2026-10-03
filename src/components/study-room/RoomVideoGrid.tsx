import React from 'react';
import { VideoOff, Mic, MicOff, Video, Monitor, MonitorOff } from 'lucide-react';
import { Button } from '../ui/Button';
import { UserProfile } from '../../hooks/study-room/useRoomWebRTC';

interface RoomVideoGridProps {
  joinedCall: boolean;
  setJoinedCall: (joined: boolean) => void;
  localStream: MediaStream | null;
  remoteStreams: Record<string, MediaStream>;
  peersInfo: Record<string, string>;
  userProfile: UserProfile | null;
  audioEnabled: boolean;
  videoEnabled: boolean;
  isScreenSharing: boolean;
  toggleAudio: () => void;
  toggleVideo: () => void;
  startScreenShare: () => void;
  stopScreenShare: () => void;
  mobileView: 'video' | 'collab' | 'pomodoro';
}

export const RoomVideoGrid: React.FC<RoomVideoGridProps> = ({
  joinedCall,
  setJoinedCall,
  localStream,
  remoteStreams,
  peersInfo,
  userProfile,
  audioEnabled,
  videoEnabled,
  isScreenSharing,
  toggleAudio,
  toggleVideo,
  startScreenShare,
  stopScreenShare,
  mobileView,
}) => {
  return (
    <div
      className={`relative flex min-h-0 w-full flex-1 flex-col space-y-3.5 overflow-hidden rounded-3xl border border-slate-800 bg-[#0f172a] p-3.5 shadow-2xl transition-all duration-300 sm:space-y-4 sm:p-4 ${
        mobileView === 'video' ? 'flex' : 'hidden md:flex'
      }`}
    >
      {!joinedCall ? (
        /* Pre-join / Preview Screen */
        <div className="relative flex flex-1 flex-col items-center justify-center overflow-y-auto p-2 sm:p-4">
          {/* Preview Video Box */}
          <div className="relative flex aspect-video max-h-[38vh] w-full max-w-md shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl transition-all duration-300 hover:border-slate-700 sm:max-h-none">
            {videoEnabled && localStream ? (
              <video
                ref={(ref) => {
                  if (ref) ref.srcObject = localStream;
                }}
                autoPlay
                playsInline
                muted
                className="h-full w-full -scale-x-100 transform rounded-2xl object-cover transition-transform duration-500"
              />
            ) : (
              <div className="flex flex-col items-center justify-center text-slate-500 transition-all duration-300">
                <div className="bg-slate-850 mb-1.5 rounded-full p-3 sm:mb-2 sm:p-4">
                  <VideoOff size={28} className="sm:size-8" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 sm:text-xs">
                  Kamera o'chiq
                </span>
              </div>
            )}
            <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1.5 rounded-lg border border-white/10 bg-black/60 px-2.5 py-0.5 text-[11px] font-semibold text-white shadow-lg backdrop-blur-md sm:py-1 sm:text-xs">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-indigo-500" />
              Kamera ko'rinishi (Preview)
            </div>
          </div>

          {/* Join Action Details */}
          <div className="mt-3 w-full max-w-md shrink-0 space-y-3 rounded-2xl border border-slate-800/80 bg-slate-900/60 p-4 text-center shadow-xl sm:mt-5 sm:space-y-4 sm:p-6">
            <h3 className="text-base font-bold tracking-tight text-white sm:text-lg">
              Dars Xonasi Tayyor
            </h3>
            <p className="text-xs text-slate-400 sm:text-sm">
              Guruhdoshlaringiz bilan real-vaqt rejimida video muloqot va hamkorlikni boshlash uchun
              qo'shiling.
            </p>

            <button
              onClick={() => setJoinedCall(true)}
              className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 py-3 text-xs font-bold text-white shadow-lg shadow-indigo-600/30 transition-all duration-200 hover:from-indigo-500 hover:to-violet-500 active:scale-[0.98] sm:py-3.5 sm:text-sm"
            >
              <Video size={17} /> Darsni boshlash
            </button>
          </div>
        </div>
      ) : (
        /* Videos Grid (Active Call) - Auto-scales to fill available width */
        <div className="relative flex h-full min-h-0 w-full flex-1 flex-col items-center justify-center overflow-hidden">
          <div
            className={`grid h-full min-h-0 w-full auto-rows-fr items-center justify-center gap-3 overflow-y-auto p-1 sm:gap-4 ${
              Object.keys(remoteStreams).length === 0
                ? 'mx-auto max-w-4xl grid-cols-1'
                : Object.keys(remoteStreams).length === 1
                  ? 'mx-auto max-w-5xl grid-cols-1 sm:grid-cols-2'
                  : 'mx-auto max-w-6xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
            }`}
          >
            {/* Local Video */}
            <div className="relative flex h-full min-h-[220px] w-full items-center justify-center overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900 shadow-lg transition-all duration-300 hover:border-slate-700/80 sm:min-h-[280px]">
              {videoEnabled && localStream ? (
                <video
                  ref={(ref) => {
                    if (ref) ref.srcObject = localStream;
                  }}
                  autoPlay
                  playsInline
                  muted
                  className={`h-full w-full rounded-2xl transition-all duration-500 ${
                    isScreenSharing
                      ? 'bg-slate-950 object-contain'
                      : '-scale-x-100 transform object-cover'
                  }`}
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-slate-500 duration-300 animate-in fade-in">
                  <div className="mb-2 rounded-full bg-slate-800/60 p-3 sm:p-4">
                    <VideoOff size={28} className="sm:size-8" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider">Kamera o'chiq</span>
                </div>
              )}
              <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1.5 rounded-lg border border-white/10 bg-black/60 px-2.5 py-0.5 text-[11px] font-semibold text-white shadow-md backdrop-blur-md sm:py-1 sm:text-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                Men ({userProfile?.name || 'Talaba'}) {isScreenSharing && '(Ekran ulashilmoqda)'}
              </div>
            </div>

            {/* Remote Videos */}
            {Object.entries(remoteStreams).map(([peerId, stream]) => {
              const peerName = peersInfo[peerId] || 'Talaba';
              return (
                <div
                  key={peerId}
                  className="relative flex h-full min-h-[220px] w-full items-center justify-center overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900 shadow-lg transition-all duration-300 hover:border-slate-700/80 sm:min-h-[280px]"
                >
                  <video
                    ref={(ref) => {
                      if (ref) ref.srcObject = stream;
                    }}
                    autoPlay
                    playsInline
                    className="h-full w-full rounded-2xl object-cover transition-all duration-500"
                  />
                  <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1.5 rounded-lg border border-white/10 bg-black/60 px-2.5 py-0.5 text-[11px] font-semibold text-white shadow-md backdrop-blur-md sm:py-1 sm:text-xs">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
                    {peerName}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Media Controls Glassmorphism Floating Toolbar */}
      <div className="flex shrink-0 items-center justify-center gap-2 self-center rounded-2xl border border-slate-700/60 bg-slate-900/90 px-3.5 py-2 shadow-2xl backdrop-blur-xl sm:gap-3 sm:px-5 sm:py-2.5">
        <button
          onClick={toggleAudio}
          className={`flex cursor-pointer items-center justify-center rounded-xl border p-2.5 transition-all active:scale-95 sm:p-3 ${
            audioEnabled
              ? 'hover:bg-slate-750 border-slate-700 bg-slate-800 text-slate-200'
              : 'border-red-500/30 bg-red-500/10 text-red-400 hover:bg-red-500/20'
          }`}
          title={audioEnabled ? "Mikrofonni o'chirish" : 'Mikrofonni yoqish'}
        >
          {audioEnabled ? (
            <Mic size={17} className="sm:size-[18px]" />
          ) : (
            <MicOff size={17} className="sm:size-[18px]" />
          )}
        </button>
        <button
          onClick={toggleVideo}
          className={`flex cursor-pointer items-center justify-center rounded-xl border p-2.5 transition-all active:scale-95 sm:p-3 ${
            videoEnabled
              ? 'hover:bg-slate-750 border-slate-700 bg-slate-800 text-slate-200'
              : 'border-red-500/30 bg-red-500/10 text-red-400 hover:bg-red-500/20'
          }`}
          title={videoEnabled ? "Kamerani o'chirish" : 'Kamerani yoqish'}
        >
          {videoEnabled ? (
            <Video size={17} className="sm:size-[18px]" />
          ) : (
            <VideoOff size={17} className="sm:size-[18px]" />
          )}
        </button>

        {joinedCall && (
          <>
            <button
              onClick={isScreenSharing ? stopScreenShare : startScreenShare}
              className={`flex cursor-pointer items-center justify-center rounded-xl border p-2.5 transition-all active:scale-95 sm:p-3 ${
                isScreenSharing
                  ? 'border-green-500/30 bg-green-500/10 text-green-400 hover:bg-green-500/20'
                  : 'hover:bg-slate-750 border-slate-700 bg-slate-800 text-slate-200'
              }`}
              title={isScreenSharing ? "Ekranni ulashishni to'xtatish" : 'Ekranni ulashish'}
            >
              {isScreenSharing ? (
                <MonitorOff size={17} className="sm:size-[18px]" />
              ) : (
                <Monitor size={17} className="sm:size-[18px]" />
              )}
            </button>

            <Button
              variant="secondary"
              onClick={() => {
                stopScreenShare();
                setJoinedCall(false);
              }}
              className="cursor-pointer rounded-xl border-none bg-red-500/10 px-3 py-2 text-xs font-bold text-red-400 hover:bg-red-500 hover:text-white sm:px-4 sm:py-2.5"
            >
              Tark etish
            </Button>
          </>
        )}
      </div>
    </div>
  );
};
