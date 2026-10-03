import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import { defineConfig } from 'vitest/config';
import { VitePWA } from 'vite-plugin-pwa';
import { telegramApiPlugin } from './server/vitePlugin.js';
import { visualizer } from 'rollup-plugin-visualizer';
import { pwaGlobIgnores, pwaRuntimeCaching } from './src/config/pwaRuntimeCaching';

const BUILD_TIMESTAMP = Date.now();

// Single source of truth for the app version (avoid drift with the hardcoded copies).
const APP_VERSION: string = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, 'package.json'), 'utf-8'),
).version;

function buildVersionPlugin() {
  const versionData = JSON.stringify(
    {
      version: APP_VERSION,
      buildTime: BUILD_TIMESTAMP,
      builtAt: new Date(BUILD_TIMESTAMP).toISOString(),
    },
    null,
    2,
  );

  return {
    name: 'build-version-plugin',
    buildStart() {
      try {
        const publicDir = path.resolve(__dirname, 'public');
        if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
        fs.writeFileSync(path.resolve(publicDir, 'version.json'), versionData);
      } catch (_) {}
    },
    generateBundle() {
      this.emitFile({
        type: 'asset',
        fileName: 'version.json',
        source: versionData,
      });
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  envPrefix: ['VITE_', 'NEXT_PUBLIC_'],
  define: {
    __APP_BUILD_TIME__: JSON.stringify(BUILD_TIMESTAMP),
    __APP_VERSION__: JSON.stringify(APP_VERSION),
  },
  plugins: [
    buildVersionPlugin(),
    ...(process.env.ANALYZE === 'true'
      ? [
          visualizer({
            open: true,
            gzipSize: true,
            brotliSize: true,
            filename: 'bundle-analysis.html',
          }),
        ]
      : []),
    react(),
    telegramApiPlugin(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: [
        'favicon.ico',
        'favicon.svg',
        'favicon.png',
        'apple-touch-icon.png',
        'pwa-192x192.png',
        'pwa-512x512.png',
      ],
      manifest: {
        name: 'IELTS Talk — AI Speaking Coach & Platform',
        short_name: 'IELTS Talk',
        description:
          'IELTS Talk — AI Speaking Coach, Writing Evaluator va IELTS Master Platformasi',
        theme_color: '#0F1419',
        background_color: '#0F1419',
        display: 'standalone',
        orientation: 'portrait',
        scope: '/',
        start_url: '/',
        id: '/',
        display_override: ['standalone', 'window-controls-overlay'],
        categories: ['education', 'productivity'],
        shortcuts: [
          {
            name: 'IELTS Hub',
            short_name: 'IELTS',
            description: 'IELTS Master Hub va imtihonlar',
            url: '/ielts',
            icons: [{ src: '/pwa-192x192.png', sizes: '192x192', type: 'image/png' }],
          },
          {
            name: 'Speaking Coach',
            short_name: 'Speaking',
            description: 'AI IELTS Speaking Mock muloqoti',
            url: '/speaking-coach?lang=en',
            icons: [{ src: '/pwa-192x192.png', sizes: '192x192', type: 'image/png' }],
          },
          {
            name: 'Fleshkartalar (SRS)',
            short_name: 'Fleshkartalar',
            description: 'Anki SM-2 takrorlash to‘plamlari',
            url: '/flashcards',
            icons: [{ src: '/pwa-192x192.png', sizes: '192x192', type: 'image/png' }],
          },
          {
            name: 'Focus Taymer',
            short_name: 'Focus',
            description: 'Pomodoro o‘quv taymeri',
            url: '/focus',
            icons: [{ src: '/pwa-192x192.png', sizes: '192x192', type: 'image/png' }],
          },
        ],
        icons: [
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'maskable',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
          {
            src: '/favicon.svg',
            sizes: 'any',
            type: 'image/svg+xml',
            purpose: 'any',
          },
        ],
        screenshots: [
          {
            src: '/og-image.png',
            sizes: '1200x630',
            type: 'image/png',
            form_factor: 'wide',
            label: 'IELTS Talk Dashboard & Speaking Coach',
          },
          {
            src: '/og-image.png',
            sizes: '1200x630',
            type: 'image/png',
            label: 'IELTS Talk Platformasi',
          },
        ],
      },
      workbox: {
        maximumFileSizeToCacheInBytes: 4 * 1024 * 1024,
        skipWaiting: true,
        clientsClaim: true,
        cleanupOutdatedCaches: true,
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
        globIgnores: pwaGlobIgnores,
        navigateFallback: '/index.html',
        navigateFallbackDenylist: [/^\/api/, /^\/version\.json/],
        runtimeCaching: pwaRuntimeCaching,
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'build', // Vercel uchun output papkasini 'build' ga o'zgartirish
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (
              id.includes('react/') ||
              id.includes('react-dom/') ||
              id.includes('react-router-dom/')
            ) {
              return 'vendor';
            }
            if (id.includes('katex')) {
              return 'katex';
            }
            if (id.includes('lucide-react')) {
              return 'icons';
            }
            if (id.includes('@supabase')) {
              return 'supabase';
            }
            if (id.includes('framer-motion')) {
              return 'framer-motion';
            }
            if (id.includes('@dnd-kit')) {
              return 'dnd-kit';
            }
          }
          // Fine-grained curriculum code-splitting per CEFR level
          if (id.includes('/data/curriculum/englishA1')) {
            return 'curriculum-en-a1';
          }
          if (id.includes('/data/curriculum/englishA2')) {
            return 'curriculum-en-a2';
          }
          if (id.includes('/data/curriculum/englishB1')) {
            return 'curriculum-en-b1';
          }
          if (id.includes('/data/curriculum/englishB2')) {
            return 'curriculum-en-b2';
          }
          if (id.includes('/data/curriculum/englishC1')) {
            return 'curriculum-en-c1';
          }
          if (id.includes('/data/curriculum/englishC2')) {
            return 'curriculum-en-c2';
          }
          if (
            id.includes('/data/ielts/ielts_grammar_data') ||
            id.includes('/data/ielts/ielts_grammar_quizzes')
          ) {
            return 'ielts-grammar-data';
          }
        },
      },
    },
    // Chunk size warning limit
    chunkSizeWarningLimit: 1800,
    // esbuild minification (tezroq va default)
    minify: 'esbuild',
    // CSS code splitting
    cssCodeSplit: true,
    // Source map o'chirish (production uchun)
    sourcemap: false,
  },
  // Production build uchun console.debug/console.warn/console.log chaqiruvlarini olib tashlash.
  // DIQQAT: `drop: ['console']` barcha console.* CHAQIRUVLARINI (console.error ham) olib tashlaydi,
  // shuning uchun production'da xatolarni Sentry (VITE_SENTRY_DSN) orqali kuzatish kerak.
  // TODO(tech-debt): Vite 8 transform uchun oxc ishlatadi; bu blokni oxc/rolldown
  // ekvivalentiga ko'chirish kerak, aks holda sozlama bir kuni jimgina e'tiborsiz qoladi.
  esbuild: {
    drop: process.env.NODE_ENV === 'production' ? ['console', 'debugger'] : [],
    pure: process.env.NODE_ENV === 'production' ? ['console.log', 'console.warn'] : [],
  },
  // Development server optimizatsiyasi
  server: {
    port: 5173,
    proxy: {
      '/api/deepseek': {
        target: 'https://api.deepseek.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/deepseek/, ''),
      },
      '/api/tts': {
        target: 'https://nihon-talk.vercel.app',
        changeOrigin: true,
      },
    },
    fs: {
      allow: ['..'],
    },
  },
  // Pre-bundling optimization
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', '@supabase/supabase-js'],
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: path.resolve(__dirname, './vitest.setup.ts'),
    include: ['src/**/*.{test,spec}.{ts,tsx}'],
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/cypress/**',
      '**/e2e/**',
      '.**',
      '**/*.config.*',
    ],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'src/test-env.d.ts',
        '**/*.test.{ts,tsx}',
        '**/*.test.{js,jsx}',
        'vite.config.ts',
        'vitest.setup.ts',
        'eslint.config.js',
        'postcss.config.js',
        'tailwind.config.js',
      ],
    },
  },
});
