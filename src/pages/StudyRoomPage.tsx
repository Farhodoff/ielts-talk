import React, { useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabase';

// Custom Hooks
import { useRoomUserProfile } from '../hooks/study-room/useRoomUserProfile';
import { useRoomPomodoroSync } from '../hooks/study-room/useRoomPomodoroSync';
import { useRoomWebRTC } from '../hooks/study-room/useRoomWebRTC';
import { useRoomChannel } from '../hooks/study-room/useRoomChannel';

// Subcomponents
import { RoomHeader } from '../components/study-room/RoomHeader';
import { RoomVideoGrid } from '../components/study-room/RoomVideoGrid';
import { RoomCollabPanel } from '../components/study-room/RoomCollabPanel';

const StudyRoomPage: React.FC = () => {
  const { roomId } = useParams<{ roomId: string }>();
  const navigate = useNavigate();

  const clientIdRef = useRef<string>(Math.random().toString(36).substring(2, 9));
  const [copiedLink, setCopiedLink] = useState(false);

  // UI View States
  const [mobileView, setMobileView] = useState<'video' | 'collab' | 'pomodoro'>('video');
  const [showCollabPanel, setShowCollabPanel] = useState(true);
  const [collabTab, setCollabTab] = useState<'whiteboard' | 'pomodoro'>('whiteboard');

  // Whiteboard canvas ref
  const editorRef = useRef<any>(null);

  // Shared channel ref across WebRTC, Channel, and Pomodoro
  const channelRef = useRef<ReturnType<typeof supabase.channel> | null>(null);

  // User Profile
  const userProfile = useRoomUserProfile(clientIdRef.current);

  // Synchronized Pomodoro State
  const pomodoro = useRoomPomodoroSync({
    channelRef,
    clientId: clientIdRef.current,
  });

  // WebRTC Mesh & Media State
  const webrtc = useRoomWebRTC({
    userProfile,
    channelRef,
  });

  // Realtime Channel & Presence Synchronization
  const channel = useRoomChannel({
    roomId,
    clientId: clientIdRef.current,
    userProfile,
    channelRef,
    pcsRef: webrtc.pcsRef,
    joinedCallRef: webrtc.joinedCallRef,
    createPeerConnection: webrtc.createPeerConnection,
    cleanupPeerConnection: webrtc.cleanupPeerConnection,
    initiateCall: webrtc.initiateCall,
    pomodoroStateRef: pomodoro.pomodoroStateRef,
    setTimeLeft: pomodoro.setTimeLeft,
    setIsRunning: pomodoro.setIsRunning,
    setPomodoroMode: pomodoro.setPomodoroMode,
  });

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleWhiteboardMount = (canvas: HTMLCanvasElement | null) => {
    editorRef.current = canvas;
    return () => {};
  };

  if (!userProfile) {
    return (
      <div className="flex h-screen flex-col items-center justify-center bg-[#0f172a] text-white">
        <Loader2 className="mb-4 h-10 w-10 animate-spin text-indigo-500" />
        <p className="animate-pulse font-bold uppercase tracking-widest text-gray-400">
          Yuklanmoqda...
        </p>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col overflow-hidden bg-[#0f172a] p-3 pb-20 font-sans text-gray-100 sm:p-4 md:p-6 md:pb-6">
      {/* Header */}
      <RoomHeader
        roomDisplayName={channel.roomDisplayName}
        connectedPeers={channel.connectedPeers}
        copiedLink={copiedLink}
        onCopyLink={handleCopyLink}
        mobileView={mobileView}
        setMobileView={setMobileView}
        collabTab={collabTab}
        setCollabTab={setCollabTab}
        showCollabPanel={showCollabPanel}
        setShowCollabPanel={setShowCollabPanel}
        onExit={() => navigate('/ielts')}
      />

      {/* Split Screen Layout */}
      <div className="flex min-h-0 flex-1 flex-col gap-4 overflow-hidden md:flex-row md:gap-6">
        {/* Left Side: Video Grid */}
        <RoomVideoGrid
          joinedCall={webrtc.joinedCall}
          setJoinedCall={webrtc.setJoinedCall}
          localStream={webrtc.localStream}
          remoteStreams={webrtc.remoteStreams}
          peersInfo={channel.peersInfo}
          userProfile={userProfile}
          audioEnabled={webrtc.audioEnabled}
          videoEnabled={webrtc.videoEnabled}
          isScreenSharing={webrtc.isScreenSharing}
          toggleAudio={webrtc.toggleAudio}
          toggleVideo={webrtc.toggleVideo}
          startScreenShare={webrtc.startScreenShare}
          stopScreenShare={webrtc.stopScreenShare}
          mobileView={mobileView}
        />

        {/* Right Side: Collapsible Whiteboard / Pomodoro Sidebar */}
        <RoomCollabPanel
          showCollabPanel={showCollabPanel}
          setShowCollabPanel={setShowCollabPanel}
          mobileView={mobileView}
          collabTab={collabTab}
          setCollabTab={setCollabTab}
          onWhiteboardMount={handleWhiteboardMount}
          pomodoroMode={pomodoro.pomodoroMode}
          timeLeft={pomodoro.timeLeft}
          isRunning={pomodoro.isRunning}
          handlePomodoroModeChange={pomodoro.handlePomodoroModeChange}
          handleStartPomodoro={pomodoro.handleStartPomodoro}
          handlePausePomodoro={pomodoro.handlePausePomodoro}
          handleResetPomodoro={pomodoro.handleResetPomodoro}
          formatPomodoroTime={pomodoro.formatPomodoroTime}
        />
      </div>
    </div>
  );
};

export default StudyRoomPage;
