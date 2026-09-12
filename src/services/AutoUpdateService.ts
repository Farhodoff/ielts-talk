/**
 * AutoUpdateService — Real-time deployment detection, cache purger and instant app updater.
 *
 * Ensures that whenever a new build is deployed:
 * 1. Checks remote /version.json periodically and on user visibility/focus.
 * 2. Immediately detects when a newer build is live.
 * 3. Automatically purges browser CacheStorage and outdated ServiceWorker registrations.
 * 4. Gracefully prompts user or auto-reloads so new features are visible immediately without manual hard-refresh.
 */

export interface VersionInfo {
  version: string;
  buildTime: number;
  builtAt: string;
}

export type UpdateListener = (hasUpdate: boolean, versionInfo?: VersionInfo) => void;

declare const __APP_BUILD_TIME__: string | number | undefined;
declare const __APP_VERSION__: string | undefined;

class AutoUpdateService {
  private localBuildTime: number;
  private appVersion: string;
  private hasUpdate = false;
  private remoteVersionInfo: VersionInfo | null = null;
  private isPurging = false;
  private pollTimer: NodeJS.Timeout | null = null;
  private listeners: Set<UpdateListener> = new Set();
  private isInitialized = false;

  constructor() {
    let rawTime: string | number | undefined;
    try {
      rawTime = typeof __APP_BUILD_TIME__ !== 'undefined' ? __APP_BUILD_TIME__ : undefined;
    } catch {
      rawTime = undefined;
    }

    this.localBuildTime = rawTime ? Number(rawTime) : Date.now();
    this.appVersion = typeof __APP_VERSION__ !== 'undefined' ? String(__APP_VERSION__) : '1.1.0';
  }

  /**
   * Initializes the auto-updater: initial check, visibility listener, and periodic polling.
   */
  public init(intervalMs = 30000): void {
    if (this.isInitialized || typeof window === 'undefined') return;
    this.isInitialized = true;

    // 1. Initial check after 2.5s (allow initial page load to settle)
    setTimeout(() => {
      this.checkForUpdate().catch(() => {});
    }, 2500);

    // 2. Poll every `intervalMs` (default 30 seconds)
    this.pollTimer = setInterval(() => {
      this.checkForUpdate().catch(() => {});
    }, intervalMs);

    // 3. Check immediately when user returns to tab
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        this.checkForUpdate().catch(() => {});
      }
    });

    // 4. Check on window focus
    window.addEventListener('focus', () => {
      this.checkForUpdate().catch(() => {});
    });

    // 5. Catch dynamic chunk load failures (Vite chunk 404 after new deploy)
    window.addEventListener('vite:preloadError', async (event) => {
      event.preventDefault();
      console.warn('[AutoUpdate] Dynamic import preload error detected. Purging caches and reloading...');
      await this.purgeCachesAndReload();
    });
  }

  /**
   * Stops polling and cleans up listeners.
   */
  public destroy(): void {
    if (this.pollTimer) {
      clearInterval(this.pollTimer);
      this.pollTimer = null;
    }
    this.isInitialized = false;
    this.listeners.clear();
  }

  /**
   * Queries /version.json with cache-busting to detect newer deployments.
   */
  public async checkForUpdate(): Promise<boolean> {
    if (typeof window === 'undefined') return false;

    try {
      const url = `/version.json?t=${Date.now()}`;
      const response = await fetch(url, {
        cache: 'no-store',
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          Pragma: 'no-cache',
        },
      });

      if (!response.ok) return false;

      const data: VersionInfo = await response.json();

      if (data?.buildTime && data.buildTime > this.localBuildTime) {
        if (!this.hasUpdate) {
          console.info(`[AutoUpdate] New version detected! Local: ${this.localBuildTime}, Remote: ${data.buildTime}`);
          this.hasUpdate = true;
          this.remoteVersionInfo = data;
          this.notifyListeners();
        }
        return true;
      }
    } catch (_) {
      // Ignore network / offline errors quietly
    }

    return false;
  }

  /**
   * Purges all browser CacheStorage, tells ServiceWorker to skipWaiting, and reloads.
   */
  public async purgeCachesAndReload(): Promise<void> {
    if (typeof window === 'undefined' || this.isPurging) return;
    this.isPurging = true;

    try {
      // 1. Purge all CacheStorage caches
      if ('caches' in window) {
        const cacheKeys = await caches.keys();
        await Promise.all(cacheKeys.map((key) => caches.delete(key)));
        console.info(`[AutoUpdate] Cleared ${cacheKeys.length} browser cache partitions.`);
      }

      // 2. Notify ServiceWorker registrations to skipWaiting and update
      if ('serviceWorker' in navigator) {
        const registrations = await navigator.serviceWorker.getRegistrations();
        for (const reg of registrations) {
          if (reg.waiting) {
            reg.waiting.postMessage({ type: 'SKIP_WAITING' });
          }
          await reg.update().catch(() => {});
        }
      }

      // 3. Clear session storage flags related to versions
      try {
        sessionStorage.removeItem('last_app_version');
      } catch (_) {}
    } catch (err) {
      console.warn('[AutoUpdate] Cache purge notice:', err);
    } finally {
      // 4. Hard reload page with cache bypass
      window.location.reload();
    }
  }

  /**
   * Subscribe to update notifications.
   */
  public subscribe(listener: UpdateListener): () => void {
    this.listeners.add(listener);
    if (this.hasUpdate) {
      listener(true, this.remoteVersionInfo || undefined);
    }
    return () => {
      this.listeners.delete(listener);
    };
  }

  private notifyListeners(): void {
    for (const listener of this.listeners) {
      try {
        listener(this.hasUpdate, this.remoteVersionInfo || undefined);
      } catch (_) {}
    }
  }

  public getStatus(): { hasUpdate: boolean; localBuildTime: number; appVersion: string; remoteVersionInfo: VersionInfo | null } {
    return {
      hasUpdate: this.hasUpdate,
      localBuildTime: this.localBuildTime,
      appVersion: this.appVersion,
      remoteVersionInfo: this.remoteVersionInfo,
    };
  }
}

export const autoUpdateService = new AutoUpdateService();
export default autoUpdateService;
