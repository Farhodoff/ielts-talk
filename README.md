# 🇬🇧 IELTS Talk — AI IELTS (Academic & General) Preparation Platform

[![Live App](https://img.shields.io/badge/Live_Demo-ielts--talk.vercel.app-blue?style=for-the-badge&logo=vercel)](https://ielts-talk.vercel.app/)
[![License: MIT](https://img.shields.io/badge/License-MIT-emerald.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.0+-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.0+-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4+-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-Database_%26_Auth-3FCF8E?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com/)

A comprehensive, full-stack, AI-powered **IELTS (Academic & General Training)** self-study and test preparation platform. Designed to help learners achieve **IELTS Band 7.5+** with real-time AI Voice Coaching, AI Essay Assessment, Cambridge-standard Mock Exams, Spaced Repetition Flashcards, and Adaptive Study Roadmaps.

---

## 🇺🇿 O'zbekcha Sharh (Uzbek Summary)

**IELTS Talk** — IELTS imtihonlariga (**Band 7.5+**) va ingliz tilini akademik darajada o'zlashtirishga qaratilgan yagona ixtisoslashtirilgan AI platforma. Platforma to'liq 100% faqat IELTS va ingliz tiliga yo'naltirilgan bo'lib, o'quvchiga real imtihonchining tajribasini taqdim etadi.

### ✨ Asosiy Imkoniyatlar:

- 🎙️ **Real-Time AI Speaking Coach (Examiner Gordon):**
  - Rasmiy British Council / IDP imtihonchisi roli asosida Part 1, Part 2 (Cue Card) va Part 3 chuqur savol-javob mashqi.
  - Jonli ovozli muloqot (Web Speech API / TTS / STT), talaffuz, ravonlik va grammatik xatolarni real-vaqtda tahlil qilish.
  - Har bir mashg'ulot yakunida rasmiy mezonlar (*Fluency & Coherence, Lexical Resource, Grammatical Range & Accuracy, Pronunciation*) bo'yicha batafsil baholash hisoboti.

- ✍️ **AI Writing Evaluator (Task 1 & Task 2):**
  - Task 1 (Akademik grafiklar, jadvallar, diagrammalar tahlili) va Task 2 (Keng qamrovli insho / Essay).
  - 4 ta rasmiy IELTS mezoni bo'yicha soniyalar ichida avtomatik tekshirish va band ball berish.
  - Har bir xatoga aniq tavsiyalar, grammatik takliflar va Band 8+ darajasidagi muqobil jumlalar.

- 🎧 **Reading & Listening Mock Imtihonlar:**
  - Haqiqiy imtihon vaqt nazorati bilan to'liq Cambridge formatidagi testlar.
  - O'quvchi xatolarini avtomatik tahlil qilish va zaif savol turlari (Multiple choice, True/False/Not Given, Headings) ustida ishlash.

- 📖 **English Grammar in Use:**
  - Raymond Murphy standarti bo'yicha 100+ interaktiv grammatik mavzular, tushuntirishlar va mashqlar.

- 🎴 **Anki SM-2 Fleshkartalar (Spaced Repetition):**
  - **Oxford 3000** va **Academic Word List (AWL)** bo'yicha saralangan minglab so'zlar.
  - Ebbinghaus unutilish egri chizig'iga asoslangan aqlli interval takrorlash tizimi.

- 🗺️ **Adaptiv O'quv Rejasi (Personal Roadmap):**
  - Imtihongacha qolgan muddatga qarab kunlik reja tuzish va *Next Best Action* orqali eng muhim vazifani tavsiya etish.

- 📱 **Telegram Mini App (TWA) & PWA:**
  - Mobil qurilmalarga o'rnatiluvchi PWA va Telegram ichida to'liq ishlovchi TWA integratsiyasi.

---

## 🛠️ Texnologiyalar (Tech Stack)

| Qatlam | Texnologiyalar |
| :--- | :--- |
| **Frontend** | React 18, TypeScript (Strict), Vite, Tailwind CSS, Lucide Icons, Framer Motion |
| **Backend & Database** | Supabase (PostgreSQL, Row Level Security, Realtime, Auth) |
| **AI Modellari** | DeepSeek Reasoner & Chat / Google Gemini 2.0 / Audio STT & TTS |
| **Offline & PWA** | VitePWA, Service Workers, Safe LocalStorage |
| **Deployment** | Vercel (Edge Network, Fast CDN, Automated CI/CD) |

---

## 🚀 O'rnatish va Ishga Tushirish (Quick Start)

### 1. Repozitoriyani klonlash va paketlarni o'rnatish:
```bash
git clone https://github.com/Farhodoff/ielts-talk.git
cd ielts-talk
npm install --legacy-peer-deps
```

### 2. Muhit o'zgaruvchilari (.env):
`.env.example` asosida `.env` faylini to'ldiring:
```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
DEEPSEEK_API_KEY=your_deepseek_api_key
```

### 3. Dasturni ishlab chiqish rejimida ishga tushirish:
```bash
npm run dev
```

### 4. Testlarni yurgazish:
```bash
npm test -- --run
```

### 5. Production uchun yig'ish (Build):
```bash
npm run build
```

---

## 📄 Litsenziya
Ushbu loyiha MIT litsenziyasi ostida taqdim etiladi.
