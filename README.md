# 🇬🇧 IELTS Talk — AI English & IELTS Preparation Platform

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.0+-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.0+-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4+-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-Database_%26_Auth-3FCF8E?logo=supabase&logoColor=white)](https://supabase.com/)

A full-stack, AI-powered **IELTS (Academic & General) and CEFR (A1–C2)** self-study and test preparation platform. Designed to take learners from everyday English to **IELTS Band 7.5+** with real-time AI Voice Coaching, AI Essay Assessment, Cambridge-standard Mocks, Spaced Repetition Flashcards, and Adaptive Study Roadmaps.

---

## 🇺🇿 O'zbekcha Sharh (Uzbek Summary)

**IELTS Talk** — IELTS imtihonlariga (Band 7.5+) va CEFR (A1–C2) darajalariga mustaqil hamda yuqori samaradorlik bilan tayyorlanish uchun mo'ljallangan yagona AI o'quv platformasi.

### ✨ Asosiy Imkoniyatlar:
- 🎓 **IELTS Master Hub:**
  - **IELTS Writing Task 1 & Task 2:** Rasmiy 4 ta mezon (*Task Response, Coherence & Cohesion, Lexical Resource, Grammatical Range & Accuracy*) bo'yicha AI bilan esselarni tekshirish va band ball berish.
  - **IELTS Reading & Listening Mocks:** Cambridge formatidagi interaktiv testlar va audiolarni tinglash.
  - **IELTS Grammar in Use:** Murphy standartlari bo'yicha 100+ interaktiv grammatik mavzular va mashqlar.
- 🎙️ **Real-Time AI Speaking Coach:**
  - DeepSeek Reasoner va Gemini AI bilan ovozli jonli suhbat.
  - IELTS Speaking Part 1, Part 2 (Cue Card) va Part 3 tahliliy suhbat mashqlari.
  - Jonli talaffuz, grammatik xatolarni real-vaqtda to'g'rilash va tavsiyalar.
- ⚡ **Anki SM-2 Fleshkartalar (Spaced Repetition):**
  - Academic va General IELTS uchun saralangan minglab so'zlar.
  - Interval takrorlash algoritmi asosida uzoq muddatli xotiraga singdirish.
- 🗺️ **Adaptiv O'quv Rejasi (Personal Plan & Roadmap):**
  - Imtihongacha qolgan vaqtga qarab kunlik reja.
  - *Next Best Action* — o'quvchining kuchsiz tomonlarini aniqlab avtomatik tavsiyalar berish.
- ⏱️ **Focus & Gamification:**
  - Pomodoro taymeri, o'quv statistikasi, yutuqlar va kundalik faolliklar.
- 📱 **Telegram Mini App & PWA:**
  - Sayt, mobil ilova (PWA) va Telegram Mini App orqali foydalanish imkoniyati.

---

## 🛠️ Texnologiyalar (Tech Stack)

| Qatlam | Texnologiyalar |
| :--- | :--- |
| **Frontend** | React 18, TypeScript (Strict), Vite, Tailwind CSS, Lucide Icons |
| **Backend & DB** | Supabase (PostgreSQL, Row Level Security, Auth) |
| **AI & LLM** | DeepSeek API (Reasoner / Chat) / Google Gemini 2.0 / Audio STT & TTS |
| **PWA & Offline** | VitePWA, Service Workers, Safe LocalStorage |
| **Deployment** | Vercel (Edge Functions, Serverless API, Global CDN) |

---

## 🚀 O'rnatish va Ishga Tushirish (Quick Start)

### 1. Repozitoriyani yuklab olish va paketlarni o'rnatish:
```bash
git clone https://github.com/Farhodoff/ielts-talk.git
cd ielts-talk
npm install --legacy-peer-deps
```

### 2. Muhit o'zgaruvchilari (.env):
`.env.example` faylidan nusxa olib, `.env` faylini to'ldiring:
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
DEEPSEEK_API_KEY=your_deepseek_api_key
```

### 3. Loyihani mahalliylashtirib ishga tushirish (Dev mode):
```bash
npm run dev
```

### 4. Vercel uchun build qilish:
```bash
npm run build
```

---

## 📄 Litsenziya
Ushbu loyiha MIT litsenziyasi ostida tarqatiladi.
