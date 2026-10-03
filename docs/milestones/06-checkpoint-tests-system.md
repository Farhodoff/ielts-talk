# Milestone 6: Noldan IELTS gacha 3 Bosqichli Checkpoint Testlari (A1, A2, B1 Gateway) Tizimini Joriy Qilish

## Bog'liq Issue

- Closes #8

## Kontekst va Muammo

IELTS ga tayyorgarlik ko'rayotgan ko'plab o'quvchilar ingliz tilini noldan (A1-A2) yoki boshlang'ich o'rta (B1) darajadan boshlaydi. Biroq to'g'ridan-to'g'ri to'liq IELTS Mock testiga kirish ularda psixologik to'siq, past natija va hafsalasizlikni keltirib chiqarar edi.

O'quvchini bosqichma-bosqich IELTS talablariga tayyorlash, uning har bir CEFR darajasidagi tayyorgarligini rasmiy tekshirib borish va keyingi bosqichga o'tish huquqini taqdim etish uchun maxsus darajalararo **Checkpoint Gateway Tests** tizimi ishlab chiqildi.

## Amalga Oshirilgan Arxitektura Yechimlari

### 1. 3 Bosqichli Checkpoint Testlar Modeli

Har bir bosqich uchun maxsus tuzilgan standartlashtirilgan savollar to'plami yaratildi:

- **A1 Beginner Gateway Test**:
  - Grammatika, asosiy kundalik lug'at va oddiy jumlalarni tushunish.
  - O'tish bali: kamida 70%.
- **A2 Elementary Gateway Test**:
  - O'tgan zamon, qiyosiy sifatlar, kundalik muloqot va qisqa matnlarni tahlil qilish.
  - O'tish bali: kamida 75%.
- **B1 Pre-IELTS Gateway Test**:
  - Murakkab grammatik strukturalar, sabab-oqibat bog'lovchilari, akademik so'zlar va IELTS darajasiga kirish sinovi.
  - O'tish bali: kamida 80%.

### 2. CheckpointTestModal Interaktiv Tizimi

- Foydalanuvchiga qulay, chalg'itmaydigan test topshirish interfeysi:
  - Savollar progress indikatori va vaqt nazorati.
  - Bir nechta variantli savollar (MCQ) va javoblarni tanlash.
  - Natijani bir zumda hisoblash va tahliliy hisobot berish (To'g'ri/Noto'g'ri javoblar izohi).
- **Muvaffaqiyatli yakunlash effekti**: Talaba testdan muvaffaqiyatli o'tganda keyingi o'quv bloklari avtomatik qulfdan chiqariladi.

### 3. Tizimli Integratsiya va Profil Boshqaruvi

- Test natijalari foydalanuvchining o'quv yo'l xaritasi (Curriculum Roadmap) va TRF diagnostikasi bilan bog'landi.
- O'quvchi xohlagan vaqtida o'zining daraja gateway sinovlarini qayta ko'rib chiqishi yoki keyingi daraja uchun imtihon topshirishi mumkin.

## Natijalar va Samaradorlik

- O'quvchilarning noldan IELTS gacha bo'lgan ta'lim traektoriyasi to'liq shaffof va o'lchanadigan tizimga keltirildi.
- Platformaning foydalanuvchini ushlab qolish (retention) va motivatsiya ko'rsatkichlari oshirildi.
- Barcha 154 ta test 100% muvaffaqiyatli o'tdi.
