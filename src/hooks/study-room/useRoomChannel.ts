import { useState, useEffect, useRef } from 'react';
import { supabase } from '../../lib/supabase';
import { UserProfile } from './useRoomWebRTC';
import { PomodoroMode } from './useRoomPomodoroSync';

const DEFAULT_ROOM_NAMES: Record<string, string> = {
  library: 'Jimjit Kutubxona 📚',
  lofi: 'Lofi Zali 🎧',
  'group-a': "Guruhli O'qish Zali 🗣️",
};

interface UseRoomChannelOptions {
  roomId: string | undefined;
  clientId: string;
  userProfile: UserProfile | null;
  channelRef: React.MutableRefObject<ReturnType<typeof supabase.channel> | null>;
  pcsRef: React.MutableRefObject<Record<string, RTCPeerConnection>>;
  joinedCallRef: React.MutableRefObject<boolean>;
  createPeerConnection: (peerId: string) => RTCPeerConnection;
  cleanupPeerConnection: (peerId: string) => void;
  initiateCall: (peerId: string) => Promise<void>;
  pomodoroStateRef: React.MutableRefObject<{
    timeLeft: number;
    isRunning: boolean;
    mode: PomodoroMode;
  }>;
  setTimeLeft: (time: number) => void;
  setIsRunning: (running: boolean) => void;
  setPomodoroMode: (mode: PomodoroMode) => void;
}

export const useRoomChannel = ({
  roomId,
  clientId,
  userProfile,
  channelRef,
  pcsRef,
  joinedCallRef,
  createPeerConnection,
  cleanupPeerConnection,
  initiateCall,
  pomodoroStateRef,
  setTimeLeft,
  setIsRunning,
  setPomodoroMode,
}: UseRoomChannelOptions) => {
  const [roomDisplayName, setRoomDisplayName] = useState<string>("O'quv Xonasi");
  const [connectedPeers, setConnectedPeers] = useState<number>(1);
  const [peersInfo, setPeersInfo] = useState<Record<string, string>>({});

  const userProfileRef = useRef<UserProfile | null>(null);
  useEffect(() => {
    userProfileRef.current = userProfile;
  }, [userProfile]);

  // Set up Realtime Sync
  useEffect(() => {
    if (!userProfile || !roomId) return;

    let channel: ReturnType<typeof supabase.channel> | null = null;
    let isComponentMounted = true;

    const setupChannel = async () => {
      if (roomId && DEFAULT_ROOM_NAMES[roomId]) {
        setRoomDisplayName(DEFAULT_ROOM_NAMES[roomId]);
      } else if (roomId) {
        try {
          const { data: dbRoom } = await supabase
            .from('study_rooms')
            .select('name, created_at, creator_id')
            .eq('id', roomId)
            .single();
          if (dbRoom?.name) {
            setRoomDisplayName(dbRoom.name);
          }
        } catch {
          try {
            const { data: dbRoomByRoomId } = await supabase
              .from('study_rooms')
              .select('name, created_at, creator_id')
              .eq('room_id', roomId)
              .single();
            if (dbRoomByRoomId?.name) {
              setRoomDisplayName(dbRoomByRoomId.name);
            } else {
              const cleanName = roomId.startsWith('custom_')
                ? `Maxsus Xona #${roomId.split('_')[1]?.substring(0, 6) || ''}`
                : roomId;
              setRoomDisplayName(cleanName);
            }
          } catch {
            const cleanName = roomId.startsWith('custom_')
              ? `Maxsus Xona #${roomId.split('_')[1]?.substring(0, 6) || ''}`
              : roomId;
            setRoomDisplayName(cleanName);
          }
        }
      }

      let room: { created_at?: string; creator_id?: string } | null = null;
      try {
        const { data } = await supabase
          .from('study_rooms')
          .select('created_at, creator_id')
          .eq('id', roomId)
          .single();
        room = data;
      } catch {}

      let channelName = `study-room-${roomId}`;
      if (room && room.created_at && room.creator_id) {
        const secret = btoa(`${room.created_at}-${room.creator_id}`)
          .substring(0, 16)
          .replace(/=/g, '');
        channelName = `study-room-${roomId}-${secret}`;
      }

      if (!isComponentMounted) return;

      channel = supabase.channel(channelName, {
        config: {
          presence: {
            key: userProfile.id,
          },
        },
      });
      channelRef.current = channel;

      const bindChannelEvents = (ch: ReturnType<typeof supabase.channel>) => {
        ch.on('presence', { event: 'sync' }, () => {
          const state = ch.presenceState();
          setConnectedPeers(Object.keys(state).length);

          const peerIds = Object.keys(state).filter((id) => id !== userProfile.id);

          const newPeersInfo: Record<string, string> = {};
          Object.entries(state).forEach(([id, presences]) => {
            if (id !== userProfile.id) {
              const pres = presences[0] as { name?: string };
              newPeersInfo[id] = pres?.name || 'Talaba';
            }
          });
          setPeersInfo(newPeersInfo);

          if (!joinedCallRef.current) {
            Object.keys(pcsRef.current).forEach((peerId) => {
              cleanupPeerConnection(peerId);
            });
            return;
          }

          Object.keys(pcsRef.current).forEach((peerId) => {
            if (!peerIds.includes(peerId)) {
              cleanupPeerConnection(peerId);
            }
          });

          peerIds.forEach((peerId) => {
            if (!pcsRef.current[peerId]) {
              createPeerConnection(peerId);
              if (userProfile.id < peerId) {
                initiateCall(peerId);
              }
            }
          });
        })
          .on('presence', { event: 'join' }, ({ newPresences }) => {
            console.log('Joined peers:', newPresences);
          })
          .on('presence', { event: 'leave' }, ({ leftPresences }) => {
            console.log('Left peers:', leftPresences);
          });

        ch.on('broadcast', { event: 'pomodoro_state_update' }, ({ payload }) => {
          const data = payload as {
            senderId: string;
            timeLeft: number;
            isRunning: boolean;
            mode: PomodoroMode;
          };
          if (data.senderId !== clientId) {
            setTimeLeft(data.timeLeft);
            setIsRunning(data.isRunning);
            setPomodoroMode(data.mode);
          }
        })
          .on('broadcast', { event: 'request_state' }, ({ payload }) => {
            const data = payload as { requesterId: string };
            if (data.requesterId !== clientId) {
              ch.send({
                type: 'broadcast',
                event: 'pomodoro_state_response',
                payload: {
                  timeLeft: pomodoroStateRef.current.timeLeft,
                  isRunning: pomodoroStateRef.current.isRunning,
                  mode: pomodoroStateRef.current.mode,
                  targetId: data.requesterId,
                },
              });
            }
          })
          .on('broadcast', { event: 'pomodoro_state_response' }, ({ payload }) => {
            const data = payload as {
              targetId: string;
              timeLeft: number;
              isRunning: boolean;
              mode: PomodoroMode;
            };
            if (data.targetId === clientId) {
              setTimeLeft(data.timeLeft);
              setIsRunning(data.isRunning);
              setPomodoroMode(data.mode);
            }
          })
          .on('broadcast', { event: 'webrtc_offer' }, async ({ payload }) => {
            if (!joinedCallRef.current) return;
            const data = payload as {
              senderId: string;
              targetId: string;
              offer: RTCSessionDescriptionInit;
            };
            if (data.targetId === userProfileRef.current?.id) {
              console.log(`Received WebRTC offer from ${data.senderId}`);
              const pc = createPeerConnection(data.senderId);
              try {
                await pc.setRemoteDescription(new RTCSessionDescription(data.offer));
                const answer = await pc.createAnswer();
                await pc.setLocalDescription(answer);

                ch.send({
                  type: 'broadcast',
                  event: 'webrtc_answer',
                  payload: {
                    senderId: userProfileRef.current?.id,
                    targetId: data.senderId,
                    answer,
                  },
                });
              } catch (e) {
                console.error('Failed to handle offer:', e);
              }
            }
          })
          .on('broadcast', { event: 'webrtc_answer' }, async ({ payload }) => {
            if (!joinedCallRef.current) return;
            const data = payload as {
              senderId: string;
              targetId: string;
              answer: RTCSessionDescriptionInit;
            };
            if (data.targetId === userProfileRef.current?.id) {
              console.log(`Received WebRTC answer from ${data.senderId}`);
              const pc = pcsRef.current[data.senderId];
              if (pc) {
                try {
                  await pc.setRemoteDescription(new RTCSessionDescription(data.answer));
                } catch (e) {
                  console.error('Failed to handle answer:', e);
                }
              }
            }
          })
          .on('broadcast', { event: 'webrtc_ice_candidate' }, async ({ payload }) => {
            if (!joinedCallRef.current) return;
            const data = payload as {
              senderId: string;
              targetId: string;
              candidate: RTCIceCandidateInit;
            };
            if (data.targetId === userProfileRef.current?.id) {
              const pc = pcsRef.current[data.senderId];
              if (pc) {
                try {
                  await pc.addIceCandidate(new RTCIceCandidate(data.candidate));
                } catch (e) {
                  console.error('Failed to add ICE candidate:', e);
                }
              }
            }
          });

        ch.subscribe(async (status) => {
          if (status === 'SUBSCRIBED') {
            await ch.track({
              user_id: userProfile.id,
              name: userProfile.name,
              joined_at: new Date().toISOString(),
            });

            ch.send({
              type: 'broadcast',
              event: 'request_state',
              payload: { requesterId: clientId },
            });
          }
        });
      };

      bindChannelEvents(channel);
    };

    setupChannel().catch((e) => console.error('Error setting up channel:', e));

    const currentPcs = pcsRef.current;
    return () => {
      isComponentMounted = false;
      if (channel) {
        supabase.removeChannel(channel);
      }
      Object.keys(currentPcs).forEach((peerId) => {
        cleanupPeerConnection(peerId);
      });
    };
  }, [
    userProfile,
    roomId,
    clientId,
    channelRef,
    createPeerConnection,
    cleanupPeerConnection,
    initiateCall,
    joinedCallRef,
    pcsRef,
    pomodoroStateRef,
    setIsRunning,
    setPomodoroMode,
    setTimeLeft,
  ]);

  return {
    roomDisplayName,
    connectedPeers,
    peersInfo,
  };
};
