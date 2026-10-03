# Milestone 4: SpeakingCoachPage va StudyRoomPage Sahifalarini Modulli Subkomponentlar va Custom Hooklarga Ajratish

## Bog'liq Issue

- Closes #6

## Kontekst va Muammo

IELTS platformasidagi eng ko'p ishlatiladigan interaktiv sahifalar bo'lmish `SpeakingCoachPage` va `StudyRoomPage` monolit holatda bo'lib, quyidagi qiyinchiliklarni keltirib chiqarayotgan edi:

1. `SpeakingCoachPage.tsx` 1,495 qatordan iborat bo'lib, unda bir vaqtning o'zida AI ovozli suhbat oqimi, audio vizualizator, echo cancellation, klaviatura boshqaruvi (hotkeys), sessiya yakunida hisobot generatsiyasi va yangi o'rganilgan so'zlarni lug'atga eksport qilish mantiqlari bitta faylda chalkashib ketgan edi.
2. `StudyRoomPage.tsx` 1,188 qatordan iborat bo'lib, WebRTC Mesh video/audio strimlari, Supabase Realtime xona presence tracking, sinxron Pomodoro taymeri, doska (collaborative whiteboard) va guruh chati bitta gigant komponent ichida joylashgan edi. Natijada xona hodisalari yuz berganda butun sahifa qayta render bo'lib, video strimlarida uzilishlar ehtimoli ortgan edi.

## Amalga Oshirilgan Arxitektura Yechimlari

### 1. SpeakingCoachPage Refaktoringi (1,495 -> 645 qator)

Mantiq mustaqil hooklar va yordamchi komponentlarga ajratildi:

- **`useCoachDialogue`**: Audio oqimi, AI nutq tanish (speech-to-text / text-to-speech) va akustik echo filtrlash jarayonlarini to'liq o'ziga oldi.
- **`useCoachSession`**: Sessiya taymeri, yakuniy TRF hisoboti generatsiyasi va faollik ma'lumotlarini saqlashni boshqaradi.
- **`useSpeakingVocabExport`**: Suhbat davomida ishlatilgan yangi so'zlarni `user_vocab_history` relatsion jadvaliga eksport qilish va fleshkartalar bilan sinxronlashni ta'minlaydi.
- **`useSpeakingHotkeys`** & **`useFullscreen`**: Foydalanuvchi klaviatura yorliqlari (masalan, Space orqali mikrofoni boshqarish) va to'liq ekran rejimini izolyatsiyalangan holda boshqaradi.
- **UI Subkomponentlari**: `ScenarioBanner`, `SpeakingAmbientBackground`, `LiveAudioVisualizer`.

### 2. StudyRoomPage Refaktoringi (1,188 -> 148 qator, 88% ga qisqartirildi)

Barcha WebRTC va hamkorlik mantiqlari modul va alohida subkomponentlarga o'tkazildi:

- **`useRoomWebRTC`**: WebRTC Mesh topologiyasi, peer connection'lar yaratish, STUN/TURN konfiguratsiyasi, audio/video treklar va ekran ulashish (screen share) mantiqlarini to'liq izolyatsiya qildi.
- **`useRoomPomodoroSync`**: Supabase Realtime kanali orqali butun xona foydalanuvchilari uchun sinxron pomodoro holatini boshqaradi.
- **`useRoomChannel`**: Xona ishtirokchilarini ro'yxatga olish (presence tracking) va xabar almashinuvini ta'minlaydi.
- **`useRoomUserProfile`**: Foydalanuvchi profili va xona parametrlarini yuklaydi.
- **UI Subkomponentlari**: `RoomHeader`, `RoomVideoGrid`, `RoomCollabPanel` (chat, doska va vazifalar paneli).

## Natijalar va Samaradorlik

- `StudyRoomPage` ning asosiy fayli 88% ga qisqartirilib, atigi 148 qatorli ixcham orkestratorga aylandi.
- WebRTC video streamlari xona UI yangilanishlaridan to'liq izolyatsiya qilindi, qayta renderlar bartaraf etildi.
- Barcha 154 ta test 100% muvaffaqiyatli o'tdi.
