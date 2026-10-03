import { describe, it, expect } from 'vitest';
import {
  pwaGlobIgnores,
  pwaRuntimeCaching,
  WorkboxRuntimeCachingRule,
} from '../../config/pwaRuntimeCaching';

describe('PWA Workbox Runtime Caching & Offline Resilience (IELTS Talk)', () => {
  const findRuleByCacheName = (cacheName: string): WorkboxRuntimeCachingRule | undefined => {
    return pwaRuntimeCaching.find((rule) => rule.options?.cacheName === cacheName);
  };

  it('defines all required production cache stores with handlers', () => {
    const cacheNames = pwaRuntimeCaching
      .map((r) => r.options?.cacheName)
      .filter((name): name is string => Boolean(name));

    expect(cacheNames).toContain('large-data-chunks-cache');
    expect(cacheNames).toContain('html-cache');
    expect(cacheNames).toContain('google-fonts-cache');
    expect(cacheNames).toContain('gstatic-fonts-cache');
    expect(cacheNames).toContain('external-audio-cache');
    expect(cacheNames).toContain('dicebear-avatar-cache');
    expect(cacheNames).toContain('audio-assets-cache');
    expect(cacheNames).toContain('supabase-audio-cache');
    expect(cacheNames).toContain('images-cache');
  });

  describe('External Ambient & Focus Audio (external-audio-cache)', () => {
    const audioRule = findRuleByCacheName('external-audio-cache');

    it('exists and uses CacheFirst strategy', () => {
      expect(audioRule).toBeDefined();
      expect(audioRule?.handler).toBe('CacheFirst');
    });

    it('matches Pixabay, Google Actions, and Mixkit audio URLs', () => {
      const pattern = audioRule?.urlPattern as RegExp;
      expect(pattern).toBeInstanceOf(RegExp);
      expect(pattern.test('https://cdn.pixabay.com/audio/2022/05/27/audio_1808fbf07a.mp3')).toBe(
        true,
      );
      expect(pattern.test('https://cdn.pixabay.com/audio/2021/08/04/audio_0625c1539c.mp3')).toBe(
        true,
      );
      expect(pattern.test('https://actions.google.com/sounds/v1/weather/rain_heavy.ogg')).toBe(
        true,
      );
      expect(
        pattern.test('https://actions.google.com/sounds/v1/ambiences/forest_morning.ogg'),
      ).toBe(true);
      expect(pattern.test('https://assets.mixkit.co/active_storage/sfx/2869/2869-500.wav')).toBe(
        true,
      );
    });

    it('rejects unsupported origins or non-audio formats', () => {
      const pattern = audioRule?.urlPattern as RegExp;
      expect(pattern.test('https://untrusted-domain.com/sound.mp3')).toBe(false);
      expect(pattern.test('https://cdn.pixabay.com/images/cat.jpg')).toBe(false);
    });

    it('supports opaque responses (status 0) from CDNs', () => {
      expect(audioRule?.options?.cacheableResponse?.statuses).toContain(0);
      expect(audioRule?.options?.cacheableResponse?.statuses).toContain(200);
    });
  });

  describe('Dicebear User Avatars (dicebear-avatar-cache)', () => {
    const avatarRule = findRuleByCacheName('dicebear-avatar-cache');

    it('exists and matches avatar SVGs', () => {
      expect(avatarRule).toBeDefined();
      expect(avatarRule?.handler).toBe('CacheFirst');
      const pattern = avatarRule?.urlPattern as RegExp;
      expect(pattern.test('https://api.dicebear.com/7.x/avataaars/svg?seed=guest123')).toBe(true);
      expect(avatarRule?.options?.cacheableResponse?.statuses).toEqual([0, 200]);
    });
  });

  describe('Curriculum & Large Data Chunks (large-data-chunks-cache)', () => {
    const chunkRule = findRuleByCacheName('large-data-chunks-cache');

    it('uses StaleWhileRevalidate for fast offline load with background updates', () => {
      expect(chunkRule).toBeDefined();
      expect(chunkRule?.handler).toBe('StaleWhileRevalidate');
    });

    it('matches all curriculum, oxford decks, and grammar chunk patterns', () => {
      const pattern = chunkRule?.urlPattern as RegExp;
      expect(pattern.test('/assets/curriculum-en-a1-CvgH0Kgx.js')).toBe(true);
      expect(pattern.test('/assets/curriculum-en-b2-CbFJGLn4.js')).toBe(true);
      expect(pattern.test('/assets/oxford_3000_a1-map4-JCe.js')).toBe(true);
      expect(pattern.test('/assets/oxford_3000_b2-58Ws88I9.js')).toBe(true);
      expect(pattern.test('/assets/starter-BkzPUHgD.js')).toBe(true);
      expect(pattern.test('/assets/academic-BbXcoosz.js')).toBe(true);
      expect(pattern.test('/assets/ielts-grammar-data-M4D-hSho.js')).toBe(true);
      expect(pattern.test('/assets/reading_data-BsL2uAuk.js')).toBe(true);
      expect(pattern.test('/assets/checkpointTestsData-DCObdC8G.js')).toBe(true);
      expect(pattern.test('/assets/TrfCertificateService-CQvxK1bK.js')).toBe(true);
      expect(pattern.test('/assets/AdminDashboardPage-DLwuCZxW.js')).toBe(true);
      expect(pattern.test('/assets/html2canvas-BPAY1Fmm.js')).toBe(true);
    });
  });

  describe('Navigation & Version Handling', () => {
    it('provides NetworkFirst HTML navigation fallback', () => {
      const htmlRule = findRuleByCacheName('html-cache');
      expect(htmlRule).toBeDefined();
      expect(htmlRule?.handler).toBe('NetworkFirst');

      if (typeof htmlRule?.urlPattern === 'function') {
        const fakeReq = { mode: 'navigate' } as Request;
        const fakeUrl = new URL('https://ielts.talk/speaking-coach');
        expect(htmlRule.urlPattern({ request: fakeReq, url: fakeUrl })).toBe(true);

        const fakeNonNavReq = { mode: 'cors' } as Request;
        expect(htmlRule.urlPattern({ request: fakeNonNavReq, url: fakeUrl })).toBe(false);
      }
    });

    it('keeps version.json strictly NetworkOnly', () => {
      const versionRule = pwaRuntimeCaching.find(
        (rule) => rule.urlPattern instanceof RegExp && rule.urlPattern.test('/version.json'),
      );
      expect(versionRule).toBeDefined();
      expect(versionRule?.handler).toBe('NetworkOnly');
    });
  });

  describe('Precache Exclusion Patterns (pwaGlobIgnores)', () => {
    it('excludes heavy dynamic and curriculum chunks from SW install precache', () => {
      expect(pwaGlobIgnores).toContain('**/curriculum-en-*.js');
      expect(pwaGlobIgnores).toContain('**/oxford_3000_*.js');
      expect(pwaGlobIgnores).toContain('**/starter-*.js');
      expect(pwaGlobIgnores).toContain('**/academic-*.js');
      expect(pwaGlobIgnores).toContain('**/ielts-grammar-data-*.js');
      expect(pwaGlobIgnores).toContain('**/reading_data-*.js');
      expect(pwaGlobIgnores).toContain('**/checkpointTestsData-*.js');
      expect(pwaGlobIgnores).toContain('**/TrfCertificateService-*.js');
      expect(pwaGlobIgnores).toContain('**/AdminDashboardPage-*.js');
      expect(pwaGlobIgnores).toContain('**/html2canvas-*.js');
    });
  });
});
