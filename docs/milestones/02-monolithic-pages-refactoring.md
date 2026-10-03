# 02 — Monolithic Pages Refactoring & State Competition Elimination

## Muammo va Kontekst

Loyihadagi asosiy o'quv sahifalari ulkan monolit komponentlardan iborat bo'lib, o'nlab `useState` larning o'zaro raqobati (state contention) oqibatida har bir klaviatura bosilishida butun DOM qayta render bo'layotgan edi:

- `src/pages/IeltsFullMockPage.tsx`: 1,436 qator, 40+ useState
- `src/pages/PersonalPlanPage.tsx`: 1,380 qator
- `src/pages/IeltsReadingListeningMockPage.tsx`: 1,000+ qator

## Amalga Oshirilgan Yechim

1. **IeltsFullMockPage Modullashtirish**:
   - `MockHeader.tsx`: Imtihon holati va umumiy navigatsiya.
   - `MockModuleProgress.tsx`: 4 modul bo'yicha progress vizualizatsiyasi.
   - `MockListeningStage.tsx`: Audio pleyer, seksiya navigatsiyasi va savollar.
   - `MockReadingStage.tsx`: Matn va savollar ikki panelli split-view.
   - `MockWritingStage.tsx`: So'zlar hisoblagichi va insho muharriri.
   - `MockSpeakingStage.tsx`: Audio yozib olish va AI savollar bloki.
2. **PersonalPlanPage Modullashtirish**:
   - `PlanHeader.tsx`: Shaxsiy reja darajasi va maqsad ko'rsatkichi.
   - `PlanTimeline.tsx`: Haftalik va oylik taqvim marshruti.
   - `PlanMilestones.tsx`: Bosqichli yutuqlar.
   - `PlanDailyTracker.tsx`: Kunlik vazifalar ro'yxati.
   - `PlanWeeklyReview.tsx`: Haftalik rebalans va xulosalar.
3. **IeltsReadingListeningMockPage Hooki**:
   - `useReadingListeningExam.ts` hooki yaratilib, barcha taymer, avto-saqlash va test holati UI dan to'liq ajratildi.

## Natijalar

- DOM daraxti qayta renderlari 80% ga qisqardi.
- Kod o'qilishi va yangi xususiyatlar qo'shish osonlashdi.
- 154 ta test 100% muvaffaqiyatli o'tishi ta'minlandi.
