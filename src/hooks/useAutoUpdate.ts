import { useState, useEffect } from 'react';
import autoUpdateService, { VersionInfo } from '../services/AutoUpdateService';

export function useAutoUpdate() {
  const [hasUpdate, setHasUpdate] = useState(() => autoUpdateService.getStatus().hasUpdate);
  const [versionInfo, setVersionInfo] = useState<VersionInfo | null>(() => autoUpdateService.getStatus().remoteVersionInfo);
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    autoUpdateService.init();

    const unsubscribe = autoUpdateService.subscribe((updateAvailable, info) => {
      setHasUpdate(updateAvailable);
      if (info) setVersionInfo(info);
    });

    return unsubscribe;
  }, []);

  const updateNow = async () => {
    setIsUpdating(true);
    await autoUpdateService.purgeCachesAndReload();
  };

  return {
    hasUpdate,
    versionInfo,
    isUpdating,
    updateNow,
    checkForUpdate: () => autoUpdateService.checkForUpdate(),
  };
}

export default useAutoUpdate;
