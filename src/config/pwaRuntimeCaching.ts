/**
 * PWA Workbox Runtime Caching Configuration for IELTS Talk
 *
 * Provides robust offline caching strategies for:
 * 1. Large lazy-loaded curriculum, decks, and data chunks
 * 2. Navigation HTML (offline fallback)
 * 3. Version checking (NetworkOnly)
 * 4. Google & Gstatic web fonts
 * 5. External ambient and focus audio streams (Pixabay, Google Actions, Mixkit)
 * 6. Dicebear avatar SVGs for offline profile icons
 * 7. Same-origin local audio files
 * 8. Supabase storage public audio files
 * 9. Static and dynamic image assets
 */

export interface WorkboxExpiration {
  maxEntries?: number;
  maxAgeSeconds?: number;
}

export interface WorkboxCacheableResponse {
  statuses: number[];
}

export interface WorkboxCachingOptions {
  cacheName: string;
  networkTimeoutSeconds?: number;
  expiration?: WorkboxExpiration;
  cacheableResponse?: WorkboxCacheableResponse;
}

export interface WorkboxRuntimeCachingRule {
  urlPattern: RegExp | ((options: { request: Request; url: URL }) => boolean);
  handler: 'CacheFirst' | 'NetworkFirst' | 'NetworkOnly' | 'StaleWhileRevalidate';
  options?: WorkboxCachingOptions;
}

export const pwaGlobIgnores = [
  '**/curriculum-en-*.js',
  '**/oxford_3000_*.js',
  '**/starter-*.js',
  '**/academic-*.js',
  '**/ielts-grammar-data-*.js',
  '**/reading_data-*.js',
  '**/checkpointTestsData-*.js',
  '**/TrfCertificateService-*.js',
  '**/AdminDashboardPage-*.js',
  '**/html2canvas-*.js',
  '**/version.json',
];

export const pwaRuntimeCaching: WorkboxRuntimeCachingRule[] = [
  {
    urlPattern:
      /assets\/(?:curriculum-en|oxford_3000|starter|academic|ielts-grammar-data|reading_data|checkpointTestsData|TrfCertificateService|AdminDashboardPage|html2canvas).*\.js$/i,
    handler: 'StaleWhileRevalidate',
    options: {
      cacheName: 'large-data-chunks-cache',
      expiration: {
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
      },
      cacheableResponse: {
        statuses: [0, 200],
      },
    },
  },
  {
    urlPattern: ({ request }: { request: Request }) => request.mode === 'navigate',
    handler: 'NetworkFirst',
    options: {
      cacheName: 'html-cache',
      networkTimeoutSeconds: 2,
      expiration: {
        maxEntries: 1,
        maxAgeSeconds: 24 * 60 * 60, // 24 hours
      },
      cacheableResponse: {
        statuses: [0, 200],
      },
    },
  },
  {
    urlPattern: /version\.json/i,
    handler: 'NetworkOnly',
  },
  {
    urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
    handler: 'CacheFirst',
    options: {
      cacheName: 'google-fonts-cache',
      expiration: {
        maxEntries: 10,
        maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
      },
      cacheableResponse: {
        statuses: [0, 200],
      },
    },
  },
  {
    urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
    handler: 'CacheFirst',
    options: {
      cacheName: 'gstatic-fonts-cache',
      expiration: {
        maxEntries: 10,
        maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
      },
      cacheableResponse: {
        statuses: [0, 200],
      },
    },
  },
  {
    urlPattern:
      /^https:\/\/(?:cdn\.pixabay\.com|actions\.google\.com|assets\.mixkit\.co)\/.*\.(?:mp3|wav|ogg|m4a)$/i,
    handler: 'CacheFirst',
    options: {
      cacheName: 'external-audio-cache',
      expiration: {
        maxEntries: 50,
        maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
      },
      cacheableResponse: {
        statuses: [0, 200],
      },
    },
  },
  {
    urlPattern: /^https:\/\/api\.dicebear\.com\/.*/i,
    handler: 'CacheFirst',
    options: {
      cacheName: 'dicebear-avatar-cache',
      expiration: {
        maxEntries: 100,
        maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
      },
      cacheableResponse: {
        statuses: [0, 200],
      },
    },
  },
  {
    urlPattern: /\.(?:mp3|wav|ogg|m4a)$/i,
    handler: 'CacheFirst',
    options: {
      cacheName: 'audio-assets-cache',
      expiration: {
        maxEntries: 100,
        maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
      },
      cacheableResponse: {
        statuses: [0, 200],
      },
    },
  },
  {
    urlPattern: /^https:\/\/.*\.supabase\.co\/storage\/v1\/object\/public\/.*audio.*/i,
    handler: 'CacheFirst',
    options: {
      cacheName: 'supabase-audio-cache',
      expiration: {
        maxEntries: 100,
        maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
      },
      cacheableResponse: {
        statuses: [0, 200],
      },
    },
  },
  {
    urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp|ico)$/i,
    handler: 'StaleWhileRevalidate',
    options: {
      cacheName: 'images-cache',
      expiration: {
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
      },
    },
  },
];
