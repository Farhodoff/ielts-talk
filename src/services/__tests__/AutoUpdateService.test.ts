import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import autoUpdateService from '../AutoUpdateService';

describe('AutoUpdateService', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('1. correctly initializes and returns initial status', () => {
    const status = autoUpdateService.getStatus();
    expect(status).toHaveProperty('hasUpdate');
    expect(status).toHaveProperty('localBuildTime');
    expect(status).toHaveProperty('appVersion');
    expect(status.appVersion).toBe('1.1.0');
  });

  it('2. detects remote update when remote buildTime is newer', async () => {
    const currentBuildTime = autoUpdateService.getStatus().localBuildTime;
    const newerTime = currentBuildTime + 100000;

    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        version: '1.1.0',
        buildTime: newerTime,
        builtAt: new Date(newerTime).toISOString(),
      }),
    } as any);

    let notified = false;
    const unsubscribe = autoUpdateService.subscribe((hasUpdate, info) => {
      if (hasUpdate) {
        notified = true;
        expect(info?.buildTime).toBe(newerTime);
      }
    });

    const isUpdateAvailable = await autoUpdateService.checkForUpdate();
    expect(isUpdateAvailable).toBe(true);
    expect(notified).toBe(true);

    unsubscribe();
  });

  it('3. does not trigger update if remote buildTime is same or older', async () => {
    const currentBuildTime = autoUpdateService.getStatus().localBuildTime;

    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        version: '1.1.0',
        buildTime: currentBuildTime - 5000,
        builtAt: new Date(currentBuildTime - 5000).toISOString(),
      }),
    } as any);

    const isUpdateAvailable = await autoUpdateService.checkForUpdate();
    expect(isUpdateAvailable).toBe(false);
  });

  it('4. purgeCachesAndReload purges CacheStorage and reloads', async () => {
    const mockCachesDelete = vi.fn().mockResolvedValue(true);
    const mockCachesKeys = vi.fn().mockResolvedValue(['workbox-precache-v1', 'dynamic-cache-v1']);

    (global as any).caches = {
      keys: mockCachesKeys,
      delete: mockCachesDelete,
    };

    // Mock window.location.reload
    const reloadMock = vi.fn();
    delete (window as any).location;
    window.location = { reload: reloadMock } as any;

    await autoUpdateService.purgeCachesAndReload();

    expect(mockCachesKeys).toHaveBeenCalled();
    expect(mockCachesDelete).toHaveBeenCalledWith('workbox-precache-v1');
    expect(mockCachesDelete).toHaveBeenCalledWith('dynamic-cache-v1');
    expect(reloadMock).toHaveBeenCalled();
  });
});
