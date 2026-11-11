import { verifyAuth, getBearerToken, getUserRole } from '../_auth.js';
import { checkRateLimit } from '../_rateLimit.js';
import { checkDailyQuota } from '../_quota.js';
import { validateIeltsResponse } from '../_validators.js';

export const config = {
  runtime: 'edge',
};

function safeParseJson(rawContent, fallback = {}) {
  if (!rawContent || typeof rawContent !== 'string') return fallback;
  try {
    const cleaned = rawContent
      .replace(/^```(?:json)?\s*/i, '')
      .replace(/\s*```$/i, '')
      .trim();
    return JSON.parse(cleaned);
  } catch (e) {
    const match = rawContent.match(/\{[\s\S]*\}/);
    if (match) {
      try {
        return JSON.parse(match[0]);
      } catch {}
    }
    return fallback;
  }
}

export default async function handler(req) {
  // CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    });
  }

  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method Not Allowed. Use POST.' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    });
  }

  const rawBodyText = await req.text().catch(() => '');
  let body;
  try {
    body = JSON.parse(rawBodyText || '{}');
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON payload' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    });
  }

  const serverKey = process.env.DEEPSEEK_API_KEY;
  if (!serverKey) {
    return new Response(JSON.stringify({
      error: 'AI_UNAVAILABLE',
      message: 'Serverda DeepSeek API kaliti sozlanmagan.',
    }), {
      status: 503,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    });
  }

  const effectiveApiKey = serverKey;
  let authenticatedUserId = null;

  const { user, error: authError, status: authStatus } = await verifyAuth(req);
  if (authError) {
    return new Response(JSON.stringify({ error: 'Unauthorized', message: authError }), {
      status: authStatus || 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  if (!user || !user.id) {
    // Anonymous callers share the server API key, so they must be IP throttled.
    const anonRate = await checkRateLimit(req, null);
    if (!anonRate.allowed) {
      return new Response(JSON.stringify({
        error: 'Too Many Requests',
        message: `So'rovlar tezligi oshdi. Iltimos ${anonRate.retryAfter} soniyadan so'ng qayta urinib ko'ring.`,
        retryAfter: anonRate.retryAfter,
      }), {
        status: 429,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Retry-After': String(anonRate.retryAfter),
        },
      });
    }
  }
  if (user && user.id) {
    authenticatedUserId = user.id;

    // Rate limiting for shared server API key
    const rateCheck = await checkRateLimit(req, authenticatedUserId);
    if (!rateCheck.allowed) {
      return new Response(JSON.stringify({
        error: 'Too Many Requests',
        message: `IELTS baholash so'rovlari tezligi oshdi. Iltimos ${rateCheck.retryAfter} soniyadan so'ng qayta urinib ko'ring.`,
        retryAfter: rateCheck.retryAfter,
      }), {
        status: 429,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Retry-After': String(rateCheck.retryAfter),
        },
      });
    }

    // Daily quota & Request size check
    const quotaCheck = await checkDailyQuota(authenticatedUserId, getUserRole(user), rawBodyText);
    if (!quotaCheck.allowed) {
      return new Response(JSON.stringify({
        error: 'Quota Exceeded',
        message: quotaCheck.reason,
      }), {
        status: 403,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });
    }
  } else {
    // Guest IP rate limit
    const ipRate = await checkRateLimit(req, null);
    if (!ipRate.allowed) {
      return new Response(JSON.stringify({
        error: 'Too Many Requests',
        message: `So'rovlar tezligi oshdi. Iltimos ${ipRate.retryAfter} soniyadan so'ng qayta urinib ko'ring.`,
        retryAfter: ipRate.retryAfter,
      }), {
        status: 429,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Retry-After': String(ipRate.retryAfter),
        },
      });
    }
  }

  const { essay, topic = 'General IELTS Task', taskType = 'task2' } = body;

  if (!essay || typeof essay !== 'string' || essay.trim().length < 20) {
    return new Response(JSON.stringify({ error: 'Please provide an essay with at least 20 characters.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    });
  }

  const prompt = `You are a world-class IELTS Senior Examiner and Pedagogical Mentor.
Your goal is not just to grade, but to lead the student from their current level up to Band 7.5+.

Evaluate the following IELTS ${taskType === 'task1' ? 'Task 1 Report' : 'Task 2 Essay'}.
Topic/Prompt: "${topic}"
Student Essay:
"""
${essay.substring(0, 8000)}
"""

PEDAGOGICAL MENTORING RULES:
1. Analysis over Grading: Focus on WHY a score is given.
2. Structural Integrity: First, analyze if the essay follows the correct IELTS structure (Intro, Body, Conclusion). If not, prioritize this as the biggest gap.
3. Growth-Oriented Feedback: Instead of just "improvements", provide "Growth Tasks". A Growth Task is a specific action the student must take to reach the next 0.5 band (e.g., "Rewrite the second paragraph using at least two complex sentences").
4. Band 8.0+ Upgrade: For every point of criticism, provide a "Gold Standard" example of how a Band 8.0+ writer would phrase that specific idea.

Provide your assessment strictly in the following JSON format without markdown fences:
{
  "overallBand": 7.0,
  "scores": {
    "taskAchievement": 7.0,
    "coherenceAndCohesion": 7.0,
    "lexicalResource": 7.5,
    "grammaticalRange": 6.5
  },
  "mentorSummary": "A balanced summary: what was done well, the single biggest blocker to a higher band, and a positive encouragement.",
  "structuralAnalysis": {
    "isCorrect": true,
    "feedback": "Analysis of the essay structure"
  },
  "growthTasks": [
    {
      "area": "Grammar/Vocab/Structure",
      "issue": "The specific mistake",
      "task": "A concrete task for the student to fix this (e.g., 'Rewrite X using Y')"
    }
  ],
  "goldStandardPhrasing": [
    {
      "original": "Student's phrase",
      "upgraded": "Band 8.0+ version",
      "why": "Why this is better"
    }
  ],
  "correctedEssay": "Full improved version of the essay, incorporating all mentor suggestions"
}`;

  try {
    const aiResponse = await fetch('https://api.deepseek.com/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${effectiveApiKey}`,
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: [
          { role: 'system', content: 'You are an IELTS examiner API that outputs valid raw JSON only.' },
          { role: 'user', content: prompt }
        ],
        temperature: 0.3,
        response_format: { type: 'json_object' }
      }),
    });

    if (!aiResponse.ok) {
      const errText = await aiResponse.text();
      return new Response(JSON.stringify({ error: 'AI evaluation failed', details: errText }), {
        status: 502,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      });
    }

    const aiData = await aiResponse.json();
    const content = aiData.choices?.[0]?.message?.content;
    const rawParsed = safeParseJson(content, {});
    const validatedData = validateIeltsResponse(rawParsed, essay);

    return new Response(JSON.stringify({ success: true, data: validatedData }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal API Server Error', message: error?.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    });
  }
}
