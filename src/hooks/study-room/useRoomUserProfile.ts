import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { UserProfile } from './useRoomWebRTC';

export const useRoomUserProfile = (clientId: string) => {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const sessionRes = await supabase.auth.getSession();
        const user = sessionRes?.data?.session?.user;
        if (user?.id) {
          const { data: profile } = await supabase
            .from('profiles')
            .select('full_name')
            .eq('id', user.id)
            .maybeSingle();
          setUserProfile({
            id: user.id,
            name: profile?.full_name || user.email?.split('@')[0] || 'Talaba',
            email: user.email || '',
          });
        } else {
          setUserProfile({
            id: `guest-${clientId}`,
            name: 'Mehmon Talaba',
            email: '',
          });
        }
      } catch {
        setUserProfile({
          id: `guest-${clientId}`,
          name: 'Mehmon Talaba',
          email: '',
        });
      }
    };
    fetchUser();
  }, [clientId]);

  return userProfile;
};
