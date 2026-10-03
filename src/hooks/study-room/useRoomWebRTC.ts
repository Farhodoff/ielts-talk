import { useState, useEffect, useRef, useCallback } from 'react';
import { supabase } from '../../lib/supabase';
import { recordTelemetryEvent } from '../../lib/errorTracking';

export interface UserProfile {
  id: string;
  name: string;
  email: string;
}

interface UseRoomWebRTCOptions {
  userProfile: UserProfile | null;
  channelRef: React.RefObject<ReturnType<typeof supabase.channel> | null>;
}

export const useRoomWebRTC = ({ userProfile, channelRef }: UseRoomWebRTCOptions) => {
  const [localStream, setLocalStream] = useState<MediaStream | null>(null);
  const [remoteStreams, setRemoteStreams] = useState<Record<string, MediaStream>>({});
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [videoEnabled, setVideoEnabled] = useState(true);
  const [joinedCall, setJoinedCall] = useState(false);
  const [isScreenSharing, setIsScreenSharing] = useState(false);

  const pcsRef = useRef<Record<string, RTCPeerConnection>>({});
  const localStreamRef = useRef<MediaStream | null>(null);
  const screenStreamRef = useRef<MediaStream | null>(null);
  const joinedCallRef = useRef(joinedCall);
  const userProfileRef = useRef(userProfile);

  useEffect(() => {
    joinedCallRef.current = joinedCall;
  }, [joinedCall]);

  useEffect(() => {
    userProfileRef.current = userProfile;
  }, [userProfile]);

  // Fetch local camera & microphone stream with progressive fallback
  useEffect(() => {
    const getMedia = async () => {
      if (typeof navigator === 'undefined' || !navigator.mediaDevices?.getUserMedia) return;
      let stream: MediaStream | null = null;
      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: { width: 640, height: 480, frameRate: { ideal: 15 } },
          audio: true,
        });
      } catch (videoAudioErr) {
        console.warn(
          'Video+Audio getUserMedia failed, attempting audio-only fallback:',
          videoAudioErr,
        );
        try {
          stream = await navigator.mediaDevices.getUserMedia({
            video: false,
            audio: true,
          });
          setVideoEnabled(false);
        } catch (audioErr: any) {
          console.warn('Audio-only getUserMedia also failed or was denied:', audioErr);
          setVideoEnabled(false);
          setAudioEnabled(false);
          recordTelemetryEvent('webrtc', 'Media devices access denied or unavailable', {
            metadata: { error: audioErr?.message || String(audioErr) },
          });
        }
      }
      if (stream) {
        setLocalStream(stream);
        localStreamRef.current = stream;
      }
    };

    if (userProfile) {
      getMedia();
    }

    return () => {
      if (localStreamRef.current) {
        localStreamRef.current.getTracks().forEach((t) => t.stop());
      }
      if (screenStreamRef.current) {
        screenStreamRef.current.getTracks().forEach((t) => t.stop());
      }
    };
  }, [userProfile]);

  const cleanupPeerConnection = useCallback((peerId: string) => {
    const pc = pcsRef.current[peerId];
    if (pc) {
      console.log(`Cleaning peer connection for ${peerId}`);
      try {
        pc.close();
      } catch {}
      delete pcsRef.current[peerId];
    }
    setRemoteStreams((prev) => {
      const copy = { ...prev };
      delete copy[peerId];
      return copy;
    });
  }, []);

  const cleanupAllPeers = useCallback(() => {
    Object.keys(pcsRef.current).forEach((peerId) => {
      cleanupPeerConnection(peerId);
    });
  }, [cleanupPeerConnection]);

  const createPeerConnection = useCallback(
    (peerId: string) => {
      if (pcsRef.current[peerId]) return pcsRef.current[peerId];

      const configuredTurnUrls = import.meta.env.VITE_TURN_URLS
        ? import.meta.env.VITE_TURN_URLS.split(',')
        : [
            'turn:openrelay.metered.ca:80',
            'turn:openrelay.metered.ca:443',
            'turn:openrelay.metered.ca:443?transport=tcp',
          ];
      const configuredTurnUsername = import.meta.env.VITE_TURN_USERNAME || 'openrelayproject';
      const configuredTurnCredential = import.meta.env.VITE_TURN_CREDENTIAL || 'openrelayproject';

      const pc = new RTCPeerConnection({
        iceServers: [
          { urls: 'stun:stun.l.google.com:19302' },
          { urls: 'stun:stun1.l.google.com:19302' },
          {
            urls: configuredTurnUrls,
            username: configuredTurnUsername,
            credential: configuredTurnCredential,
          },
        ],
      });

      if (localStreamRef.current) {
        localStreamRef.current.getTracks().forEach((track) => {
          pc.addTrack(track, localStreamRef.current!);
        });
      }

      pc.onicecandidate = (event) => {
        if (event.candidate && channelRef.current && userProfileRef.current) {
          channelRef.current.send({
            type: 'broadcast',
            event: 'webrtc_ice_candidate',
            payload: {
              senderId: userProfileRef.current.id,
              targetId: peerId,
              candidate: event.candidate,
            },
          });
        }
      };

      pc.ontrack = (event) => {
        console.log(`Received track from ${peerId}:`, event.streams[0]);
        setRemoteStreams((prev) => ({
          ...prev,
          [peerId]: event.streams[0],
        }));
      };

      pc.onconnectionstatechange = () => {
        console.log(`Connection state with ${peerId}: ${pc.connectionState}`);
        if (pc.connectionState === 'disconnected' || pc.connectionState === 'failed') {
          cleanupPeerConnection(peerId);
          if (joinedCallRef.current) {
            setTimeout(() => {
              if (joinedCallRef.current && !pcsRef.current[peerId] && userProfileRef.current) {
                createPeerConnection(peerId);
                if (userProfileRef.current.id < peerId) {
                  initiateCall(peerId);
                }
              }
            }, 2000);
          }
        } else if (pc.connectionState === 'closed') {
          cleanupPeerConnection(peerId);
        }
      };

      pcsRef.current[peerId] = pc;
      return pc;
    },
    [channelRef, cleanupPeerConnection],
  );

  const initiateCall = useCallback(
    async (peerId: string) => {
      const pc = createPeerConnection(peerId);
      try {
        const offer = await pc.createOffer();
        await pc.setLocalDescription(offer);

        channelRef.current?.send({
          type: 'broadcast',
          event: 'webrtc_offer',
          payload: {
            senderId: userProfileRef.current?.id,
            targetId: peerId,
            offer,
          },
        });
      } catch (e) {
        console.error(`Error creating offer for ${peerId}:`, e);
      }
    },
    [channelRef, createPeerConnection],
  );

  const toggleAudio = () => {
    if (localStream) {
      const audioTrack = localStream.getAudioTracks()[0];
      if (audioTrack) {
        audioTrack.enabled = !audioTrack.enabled;
        setAudioEnabled(audioTrack.enabled);
      }
    }
  };

  const toggleVideo = () => {
    if (isScreenSharing && screenStreamRef.current) {
      const screenTrack = screenStreamRef.current.getVideoTracks()[0];
      if (screenTrack) {
        screenTrack.enabled = !screenTrack.enabled;
        setVideoEnabled(screenTrack.enabled);
      }
    } else if (localStream) {
      const videoTrack = localStream.getVideoTracks()[0];
      if (videoTrack) {
        videoTrack.enabled = !videoTrack.enabled;
        setVideoEnabled(videoTrack.enabled);
      }
    }
  };

  const stopScreenShare = () => {
    if (screenStreamRef.current) {
      screenStreamRef.current.getTracks().forEach((track) => track.stop());
      screenStreamRef.current = null;
    }
    setIsScreenSharing(false);

    const cameraVideoTrack = localStreamRef.current?.getVideoTracks()[0];

    Object.values(pcsRef.current).forEach((pc) => {
      const senders = pc.getSenders();
      const videoSender = senders.find((sender) => sender.track?.kind === 'video');
      if (videoSender && cameraVideoTrack) {
        videoSender.replaceTrack(cameraVideoTrack);
      }
    });

    if (localStreamRef.current) {
      setLocalStream(localStreamRef.current);
    }
  };

  const startScreenShare = async () => {
    try {
      const screenStream = await navigator.mediaDevices.getDisplayMedia({
        video: {
          displaySurface: 'monitor',
        },
        selfBrowserSurface: 'exclude',
      } as unknown as DisplayMediaStreamOptions);
      screenStreamRef.current = screenStream;
      setIsScreenSharing(true);

      const screenTrack = screenStream.getVideoTracks()[0];

      Object.values(pcsRef.current).forEach((pc) => {
        const senders = pc.getSenders();
        const videoSender = senders.find((sender) => sender.track?.kind === 'video');
        if (videoSender) {
          videoSender.replaceTrack(screenTrack);
        }
      });

      const localAudioTrack = localStreamRef.current?.getAudioTracks()[0];
      const combinedStream = new MediaStream();
      if (localAudioTrack) {
        combinedStream.addTrack(localAudioTrack);
      }
      combinedStream.addTrack(screenTrack);
      setLocalStream(combinedStream);

      screenTrack.onended = () => {
        stopScreenShare();
      };
    } catch (e) {
      console.error('Failed to share screen:', e);
    }
  };

  return {
    localStream,
    setLocalStream,
    remoteStreams,
    audioEnabled,
    videoEnabled,
    joinedCall,
    setJoinedCall,
    isScreenSharing,
    pcsRef,
    localStreamRef,
    screenStreamRef,
    joinedCallRef,
    createPeerConnection,
    cleanupPeerConnection,
    cleanupAllPeers,
    initiateCall,
    toggleAudio,
    toggleVideo,
    startScreenShare,
    stopScreenShare,
  };
};
