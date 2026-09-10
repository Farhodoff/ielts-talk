const { chromium } = require('@playwright/test');
const path = require('path');
const fs = require('fs');

async function generateOgImage() {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1200, height: 630 },
    deviceScaleFactor: 1,
  });

  const htmlContent = `
<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@500;600;700;800;900&family=JetBrains+Mono:wght@600;700&display=swap');
    
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      width: 1200px;
      height: 630px;
      background-color: #090D16;
      background-image: 
        radial-gradient(circle at 12% 18%, rgba(99, 102, 241, 0.28) 0%, transparent 48%),
        radial-gradient(circle at 88% 75%, rgba(245, 158, 11, 0.18) 0%, transparent 45%),
        radial-gradient(circle at 50% 40%, rgba(37, 99, 235, 0.14) 0%, transparent 55%),
        radial-gradient(circle at 75% 20%, rgba(16, 185, 129, 0.12) 0%, transparent 40%);
      font-family: 'Manrope', -apple-system, BlinkMacSystemFont, sans-serif;
      color: #ffffff;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 52px 64px;
      overflow: hidden;
      position: relative;
    }

    body::before {
      content: '';
      position: absolute;
      inset: 0;
      background-image: 
        linear-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 255, 255, 0.035) 1px, transparent 1px);
      background-size: 38px 38px;
      pointer-events: none;
    }

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
      z-index: 10;
    }

    .brand-group {
      display: flex;
      align-items: center;
      gap: 20px;
    }

    .logo-box {
      width: 72px;
      height: 72px;
      border-radius: 20px;
      background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
      border: 2px solid rgba(99, 102, 241, 0.5);
      box-shadow: 0 12px 30px rgba(79, 70, 229, 0.35), 0 2px 8px rgba(0,0,0,0.6);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 8px;
    }

    .logo-box svg {
      width: 52px;
      height: 52px;
    }

    .brand-names {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    .brand-title-wrap {
      display: flex;
      align-items: baseline;
      gap: 12px;
    }

    .brand-title {
      font-size: 38px;
      font-weight: 900;
      letter-spacing: -0.03em;
      color: #ffffff;
    }

    .brand-title span.blue {
      background: linear-gradient(135deg, #60a5fa 0%, #818cf8 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .brand-pill {
      display: inline-flex;
      align-items: center;
      padding: 4px 10px;
      border-radius: 8px;
      background: rgba(245, 158, 11, 0.15);
      border: 1px solid rgba(245, 158, 11, 0.4);
      color: #fbbf24;
      font-size: 11px;
      font-weight: 800;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }

    .brand-tagline {
      font-size: 14px;
      font-weight: 600;
      color: #94a3b8;
      letter-spacing: 0.01em;
    }

    .header-badge {
      display: flex;
      align-items: center;
      gap: 8px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.12);
      padding: 8px 16px;
      border-radius: 999px;
      backdrop-filter: blur(12px);
      font-size: 13px;
      font-weight: 700;
      color: #e2e8f0;
    }

    .header-badge .dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #10b981;
      box-shadow: 0 0 10px #10b981;
    }

    .hero-content {
      position: relative;
      z-index: 10;
      max-width: 960px;
      margin-top: 14px;
    }

    .headline {
      font-size: 48px;
      font-weight: 900;
      line-height: 1.16;
      letter-spacing: -0.035em;
      margin-bottom: 14px;
      color: #ffffff;
    }

    .headline span.highlight {
      background: linear-gradient(135deg, #38bdf8 0%, #6366f1 50%, #a855f7 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .headline span.gold {
      background: linear-gradient(135deg, #f59e0b 0%, #fbbf24 60%, #fde68a 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .subheadline {
      font-size: 19px;
      font-weight: 500;
      color: #94a3b8;
      line-height: 1.45;
      max-width: 880px;
    }

    .cards-row {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 16px;
      position: relative;
      z-index: 10;
      margin-top: 16px;
    }

    .card {
      background: rgba(15, 23, 42, 0.75);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 18px;
      padding: 20px 18px;
      display: flex;
      flex-direction: column;
      gap: 8px;
      box-shadow: 0 12px 28px -6px rgba(0, 0, 0, 0.45);
      transition: all 0.3s ease;
    }

    .card-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .card-icon {
      font-size: 26px;
    }

    .card-title {
      font-size: 16px;
      font-weight: 800;
      color: #ffffff;
      letter-spacing: -0.01em;
    }

    .card-desc {
      font-size: 12.5px;
      font-weight: 500;
      color: #94a3b8;
      line-height: 1.4;
    }

    .card-badge {
      display: inline-block;
      align-self: flex-start;
      padding: 3px 8px;
      border-radius: 6px;
      font-size: 10px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      margin-top: 4px;
    }

    .badge-amber {
      background: rgba(245, 158, 11, 0.16);
      color: #fbbf24;
      border: 1px solid rgba(245, 158, 11, 0.35);
    }

    .badge-rose {
      background: rgba(244, 63, 94, 0.16);
      color: #fb7185;
      border: 1px solid rgba(244, 63, 94, 0.35);
    }

    .badge-indigo {
      background: rgba(99, 102, 241, 0.18);
      color: #a5b4fc;
      border: 1px solid rgba(99, 102, 241, 0.35);
    }

    .badge-emerald {
      background: rgba(16, 185, 129, 0.16);
      color: #34d399;
      border: 1px solid rgba(16, 185, 129, 0.35);
    }

    .footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
      padding-top: 16px;
      font-size: 13px;
      font-weight: 600;
      color: #64748b;
      position: relative;
      z-index: 10;
    }

    .url-chip {
      background: rgba(255, 255, 255, 0.06);
      padding: 6px 16px;
      border-radius: 999px;
      color: #e2e8f0;
      font-family: 'JetBrains Mono', monospace;
      font-size: 13px;
      font-weight: 700;
      border: 1px solid rgba(255, 255, 255, 0.12);
      letter-spacing: 0.02em;
    }
  </style>
</head>
<body>
  <div class="header">
    <div class="brand-group">
      <div class="logo-box">
        <!-- Minimalist Academic Speech Emblem -->
        <svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round">
            <!-- Circular Speech Bubble Body -->
            <path
              d="M172 245 C 130 280, 130 355, 175 395 C 220 435, 292 435, 332 395 L 372 425 L 360 375 C 385 348, 388 305, 368 272"
              stroke-width="32"
            />
            <!-- Graduation Mortarboard Top (Rhombus) -->
            <polygon
              points="256,92 428,168 256,244 84,168"
              stroke-width="32"
              fill="#1C2C78"
            />
            <!-- Under-Cap Band -->
            <path
              d="M170 206 V240 C170 274, 342 274, 342 240 V206"
              stroke-width="26"
            />
            <!-- Tassel Cord and Drop -->
            <path
              d="M400 180 V245"
              stroke="#F59E0B"
              stroke-width="14"
            />
          </g>
          <circle cx="400" cy="254" r="10" fill="#F59E0B" />
        </svg>
      </div>
      <div class="brand-names">
        <div class="brand-title-wrap">
          <span class="brand-title">IELTS <span class="blue">Talk</span></span>
          <span class="brand-pill">Academic & General</span>
        </div>
        <span class="brand-tagline">AI Yordamida IELTS Imtihoniga Tizimli Tayyorgarlik Platformasi</span>
      </div>
    </div>

    <div class="header-badge">
      <span class="dot"></span>
      <span>Cambridge & CEFR Aligned</span>
    </div>
  </div>

  <div class="hero-content">
    <h1 class="headline">
      <span class="highlight">IELTS Band 7.5+</span> Imtihoniga Tayyorlaning & <br/>
      <span class="gold">AI Speaking Coach</span> Bilan Erkin Gapiring
    </h1>
    <p class="subheadline">
      Examiner Gordon bilan jonli Part 1-3 intervyusi, Writing Task 1 & 2 tezkor tahlili va Anki SM-2 aqlli fleshkartalari.
    </p>
  </div>

  <div class="cards-row">
    <div class="card">
      <div class="card-top">
        <div class="card-icon">🎙️</div>
        <span class="card-badge badge-amber">Band 8.5+ Mock</span>
      </div>
      <div class="card-title">AI Speaking Coach</div>
      <div class="card-desc">Examiner Gordon bilan real vaqtda ovozli imtihon simulyatsiyasi va baholash</div>
    </div>

    <div class="card">
      <div class="card-top">
        <div class="card-icon">✍️</div>
        <span class="card-badge badge-rose">Instant Feedback</span>
      </div>
      <div class="card-title">Writing Evaluator</div>
      <div class="card-desc">Task 1 va Task 2 insholarini 4 ta rasmiy mezon bo'yicha tezkor tahlili</div>
    </div>

    <div class="card">
      <div class="card-top">
        <div class="card-icon">🎧</div>
        <span class="card-badge badge-indigo">Full Practice</span>
      </div>
      <div class="card-title">Mock Imtihonlar</div>
      <div class="card-desc">Reading va Listening to'liq testlari, vaqt nazorati va xatolar ustida ishlash</div>
    </div>

    <div class="card">
      <div class="card-top">
        <div class="card-icon">🎴</div>
        <span class="card-badge badge-emerald">Spaced Repetition</span>
      </div>
      <div class="card-title">SRS Fleshkartalar</div>
      <div class="card-desc">Oxford 3000 va Academic Word List bo'yicha Anki SM-2 algoritmli takrorlash</div>
    </div>
  </div>

  <div class="footer">
    <span>© 2026 IELTS Talk. Barcha huquqlar himoyalangan.</span>
    <span class="url-chip">ielts-talk.vercel.app</span>
  </div>
</body>
</html>
  `;

  await page.setContent(htmlContent);
  await page.waitForLoadState('networkidle');

  const publicDir = path.resolve(__dirname, '../public');
  const jpgPath = path.join(publicDir, 'og-image.jpg');
  const pngPath = path.join(publicDir, 'og-image.png');

  await page.screenshot({ path: jpgPath, type: 'jpeg', quality: 88 });
  await page.screenshot({ path: pngPath, type: 'png' });

  console.log('✅ Generated og-image.jpg and og-image.png successfully in:', publicDir);
  await browser.close();
}

generateOgImage().catch((err) => {
  console.error('Error generating og image:', err);
  process.exit(1);
});
