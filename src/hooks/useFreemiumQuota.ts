import { useState, useEffect, useCallback } from 'react';
import { FreemiumService, FreemiumQuotaStatus } from '../services/FreemiumService';
import { useStudyData } from '../context/IeltsTalkContext';
import { isAdminEmail } from '../utils/admin';

export const useFreemiumQuota = () => {
  const { user } = useStudyData();
  const displayEmail = user?.email || '';
  const isUserAdmin = Boolean(displayEmail && isAdminEmail(displayEmail, (user as any)?.role));
  const isProUser = isUserAdmin; // In future: check subscription tier from Supabase

  const [status, setStatus] = useState<FreemiumQuotaStatus>(() =>
    FreemiumService.getQuotaStatus(user?.id, isUserAdmin, isProUser),
  );

  const refreshQuota = useCallback(() => {
    const updated = FreemiumService.getQuotaStatus(user?.id, isUserAdmin, isProUser);
    setStatus(updated);
  }, [user?.id, isUserAdmin, isProUser]);

  useEffect(() => {
    refreshQuota();
  }, [refreshQuota]);

  const consumeWriting = useCallback(() => {
    if (isUserAdmin || isProUser) return true;
    if (!status.canUseWriting) return false;
    FreemiumService.recordWritingUsage(user?.id);
    refreshQuota();
    return true;
  }, [user?.id, isUserAdmin, isProUser, status.canUseWriting, refreshQuota]);

  const consumeSpeaking = useCallback(() => {
    if (isUserAdmin || isProUser) return true;
    if (!status.canUseSpeaking) return false;
    FreemiumService.recordSpeakingUsage(user?.id);
    refreshQuota();
    return true;
  }, [user?.id, isUserAdmin, isProUser, status.canUseSpeaking, refreshQuota]);

  return {
    ...status,
    refreshQuota,
    consumeWriting,
    consumeSpeaking,
    isAdmin: isUserAdmin,
    isPro: isProUser,
  };
};
