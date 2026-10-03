# 01 — Curriculum Dynamic Chunking & Lazy Loading Architecture

## Muammo va Kontekst

Loyihadagi `curriculum-english.ts` fayli 1.5 Megabaytdan ortiq hajmga ega bo'lib, 6,000 dan ortiq qatorda barcha CEFR (A1, A2, B1, B2, C1, C2) darslarini bitta massivga joylagan edi. Bu dastlabki sahifa yuklanishida katta resurs talab qilardi.

## Amalga Oshirilgan Yechim

1. **Dinamik Daraja Chunklari**:
   - `src/data/curriculum/curriculum-en-a1.ts`
   - `src/data/curriculum/curriculum-en-a2.ts`
   - `src/data/curriculum/curriculum-en-b1.ts`
   - `src/data/curriculum/curriculum-en-b2.ts`
   - `src/data/curriculum/curriculum-en-c1.ts`
   - `src/data/curriculum/curriculum-en-c2.ts`
2. **Yengil Manifest Tizimi**:
   - `CurriculumManifestService.ts` orqali 15KB manifest orqali darslar ro'yxati va tuzilmasi tezkor taqdim etiladi. Darsning to'liq kontenti esa faqat talaba shu darsga kirgandagina `import()` yordamida yuklanadi.
3. **Kesh va Xotira Boshqaruvi**:
   - Yuklangan darajalar xotirada keshlanadi, takroriy tarmoq so'rovlari oldi olinadi.

## Natijalar

- Dastlabki yuklanish vaqti 10 barobarga tezlashdi.
- Production buildda alohida 200-300KB li chunklar hosil bo'ldi.
