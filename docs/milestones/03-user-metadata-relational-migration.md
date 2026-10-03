# Milestone 3: Supabase user_metadata dan Relatsion PostgreSQL Jadvallariga To'liq O'tish

## Bog'liq Issue

- Closes #5

## Kontekst va Muammo

Avvalgi arxitekturada foydalanuvchining o'quv faoliyati bilan bog'liq dinamik operatsion ma'lumotlar (lug'at tarixi, darslar o'zlashtirilishi, kunlik tahlillar, o'quv signallari va rebalans tarixi) Supabase `auth.users.user_metadata` JSON obyektiga yozilar edi.

Bu quyidagi jiddiy muammolarni keltirib chiqarayotgan edi:

1. **JWT Token Bloat**: Har bir Supabase auth sessiyasida `user_metadata` JWT token ichida uzatilganligi sababli, foydalanuvchi ma'lumotlari ko'paygan sari JWT token hajmi haddan tashqari oshib ketishi va HTTP header limitlariga xavf tug'dirishi mumkin edi.
2. **Tranzaksion va Relatsion cheklovlar**: JSON obyektidagi ma'lumotlarni qidirish, agregatsiya qilish (TRF diagnostikasi uchun) va xorijiy kalitlar (foreign keys) orqali bog'lash imkoni yo'q edi.
3. **Konfliktlar va Race Conditions**: Bir vaqtning o'zida turli modullardan yozish paytida JSON obyektining qismlari ustiga yozilib ketish xavfi mavjud edi.

## Amalga Oshirilgan Arxitektura Yechimlari

### 1. PostgreSQL Relatsion Jadvallari va RLS Xavfsizligi

PostgreSQL ma'lumotlar bazasida tegishli indekslar, tashqi kalitlar (`user_id -> auth.users.id`) va qat'iy Row Level Security (RLS) qoidalari bilan quyidagi jadvallar yaratildi:

- `user_daily_reflections`: Foydalanuvchining kunlik dars tahlili, o'zlashtirish foizi va tavsiyalari.
- `user_vocab_history`: Yodlangan so'zlar, CEFR darajalari, eslash ko'rsatkichlari (spaced repetition).
- `user_learning_signals`: O'quv jarayonidagi kognitiv signallar, qiyinchilik darajalari va adaptiv tavsiyalar.

### 2. Maxsus Ma'lumotlar Servislari (Data Services)

Operatsion o'zgarishlarni bevosita PostgreSQL jadvallariga xavfsiz yozish va o'qish uchun TypeScript servislari joriy qilindi:

- `DailyReflectionService`: Kunlik tahlillarni saqlash va o'qish.
- `LearningSignalService`: Adaptiv signallarni yozish va qayta ishlash.
- `SpeakingVocabularyService`: Lug'at o'zgarishlarini relatsion boshqarish.

### 3. Ma'lumotlarni Yo'qotmasdan Ko'chirish (Data Migration)

Mavjud foydalanuvchilarning `user_metadata` ichida to'plangan barcha arxiv ma'lumotlarini bazaga o'tkazish uchun `DataMigrationService.migrateUserMetadataToDB` tizimi ishlab chiqildi. Foydalanuvchi tizimga kirganida eski metadata avtomatik tekshirilib, bazadagi relatsion jadvallarga ko'chiriladi va metadata tozalab qo'yiladi.

## Natijalar va Samaradorlik

- Supabase JWT token hajmi minimal darajaga qaytarildi.
- Barcha o'quv ma'lumotlari PostgreSQL darajasida xavfsiz RLS bilan himoyalandi.
- SQL indekslar yordamida TRF diagnostikasi va statistik hisobotlar tezligi bir necha barobarga oshdi.
