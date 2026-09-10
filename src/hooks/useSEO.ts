import { useEffect } from 'react';

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  locale?: string;
  schema?: Record<string, any>;
  noIndex?: boolean;
}

const DEFAULT_TITLE = 'IELTS Talk';
const DEFAULT_DESC =
  'IELTS Academic va General imtihonlariga tayyorgarlik platformasi. AI Speaking Coach (Examiner Gordon), Writing tahlili, Band 8.0+ fleshkartalar va shaxsiy o\'quv rejasi.';
const DEFAULT_KEYWORDS =
  "IELTS Talk, IELTS imtihon, IELTS speaking mock, Examiner Gordon, IELTS writing evaluation, Band 7.5, Band 8.0, Cambridge IELTS, British Council, IDP, fleshkartalar, AI Speaking Coach";
const BASE_URL = 'https://ielts-talk.vercel.app';
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.jpg?v=3`;

export const useSEO = ({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  ogType = 'website',
  locale,
  schema,
  noIndex = false,
}: SEOProps = {}) => {
  useEffect(() => {
    // 1. Update Title - avoid redundant duplication of brand name
    let finalTitle = DEFAULT_TITLE;
    if (title && title.trim() !== DEFAULT_TITLE) {
      finalTitle = title.includes('IELTS Talk') ? title : `${title} — IELTS Talk`;
    }
    document.title = finalTitle;

    // Helper to update or create meta tag
    const setMetaTag = (
      selector: string,
      attribute: string,
      value: string,
      createTag: string = 'meta',
    ) => {
      let element = document.querySelector(selector) as HTMLMetaElement | HTMLLinkElement | null;
      if (!element) {
        element = document.createElement(createTag) as any;
        if (selector.startsWith('meta[name=')) {
          const name = selector.match(/name="([^"]+)"/)?.[1];
          if (name) element?.setAttribute('name', name);
        } else if (selector.startsWith('meta[property=')) {
          const prop = selector.match(/property="([^"]+)"/)?.[1];
          if (prop) element?.setAttribute('property', prop);
        } else if (selector.startsWith('link[rel=')) {
          const rel = selector.match(/rel="([^"]+)"/)?.[1];
          if (rel) element?.setAttribute('rel', rel);
        }
        if (element) document.head.appendChild(element);
      }
      if (element) {
        element.setAttribute(attribute, value);
      }
    };

    const finalDesc = description || DEFAULT_DESC;
    const finalKeywords = keywords || DEFAULT_KEYWORDS;
    const finalImage = ogImage || DEFAULT_OG_IMAGE;
    const path = canonical || (typeof window !== 'undefined' ? window.location.pathname : '/');
    const finalCanonical = `${BASE_URL}${path.startsWith('/') ? path : `/${path}`}`;

    // 2. Standard Meta
    setMetaTag('meta[name="description"]', 'content', finalDesc);
    setMetaTag('meta[name="keywords"]', 'content', finalKeywords);
    setMetaTag(
      'meta[name="robots"]',
      'content',
      noIndex ? 'noindex, nofollow' : 'index, follow, max-snippet:-1, max-image-preview:large',
    );

    // 3. Canonical URL
    setMetaTag('link[rel="canonical"]', 'href', finalCanonical, 'link');

    // 4. Multilingual Hreflang Tags (SEO for Uzbek and English)
    const setHreflang = (lang: string, href: string) => {
      let link = document.querySelector(
        `link[rel="alternate"][hreflang="${lang}"]`,
      ) as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'alternate');
        link.setAttribute('hreflang', lang);
        document.head.appendChild(link);
      }
      link.setAttribute('href', href);
    };

    setHreflang('uz', `${finalCanonical}?lang=uz`);
    setHreflang('en', `${finalCanonical}?lang=en`);
    setHreflang('x-default', finalCanonical);

    // 5. Open Graph / Facebook / Telegram
    const activeLocale = locale || (document.documentElement.lang === 'en' ? 'en_US' : 'uz_UZ');
    const ogTitle =
      finalTitle === DEFAULT_TITLE
        ? "IELTS Talk — AI IELTS Preparation & Speaking Coach"
        : finalTitle.replace(/ — IELTS Talk$/i, '');

    setMetaTag('meta[property="og:site_name"]', 'content', 'IELTS Talk');
    setMetaTag('meta[property="og:title"]', 'content', ogTitle);
    setMetaTag('meta[property="og:description"]', 'content', finalDesc);
    setMetaTag('meta[property="og:image"]', 'content', finalImage);
    setMetaTag('meta[property="og:url"]', 'content', finalCanonical);
    setMetaTag('meta[property="og:type"]', 'content', ogType);
    setMetaTag('meta[property="og:locale"]', 'content', activeLocale);

    // 6. Twitter Card Tags
    setMetaTag('meta[name="twitter:card"]', 'content', 'summary_large_image');
    setMetaTag('meta[name="twitter:title"]', 'content', ogTitle);
    setMetaTag('meta[name="twitter:description"]', 'content', finalDesc);
    setMetaTag('meta[name="twitter:image"]', 'content', finalImage);

    // 7. Dynamic JSON-LD Structured Data Injection
    let scriptTag: HTMLScriptElement | null = null;
    if (schema) {
      const scriptId = 'dynamic-page-schema';
      scriptTag = document.getElementById(scriptId) as HTMLScriptElement | null;
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = scriptId;
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.text = JSON.stringify(schema);
    }

    // 8. Synchronize live user rating with Google Rich Results schema
    syncLiveAggregateRating();

    return () => {
      if (scriptTag && scriptTag.parentNode) {
        scriptTag.parentNode.removeChild(scriptTag);
      }
    };
  }, [title, description, keywords, canonical, ogImage, ogType, locale, schema, noIndex]);
};

export interface AggregateRatingData {
  '@type'?: string;
  ratingValue: string | number;
  ratingCount: string | number;
  bestRating?: string | number;
  worstRating?: string | number;
  reviewCount?: number;
}

let cachedRating: AggregateRatingData | null = null;
let isFetchingRating = false;

export function applyAggregateRatingToDOM(rating: AggregateRatingData): boolean {
  if (typeof document === 'undefined') return false;

  let applied = false;
  const scripts = document.querySelectorAll('script[type="application/ld+json"]');

  for (const script of Array.from(scripts)) {
    // Skip per-page temporary schemas that are not the main graph
    if (script.id === 'dynamic-page-schema') continue;

    try {
      const json = JSON.parse(script.textContent || '{}');
      let modified = false;

      if (json['@graph'] && Array.isArray(json['@graph'])) {
        for (const item of json['@graph']) {
          if (item['@type'] === 'WebApplication' || item['@type'] === 'Course') {
            item.aggregateRating = {
              '@type': 'AggregateRating',
              ratingValue: String(rating.ratingValue),
              ratingCount: String(rating.ratingCount),
              bestRating: String(rating.bestRating || '5'),
              worstRating: String(rating.worstRating || '1'),
            };
            modified = true;
          }
        }
      } else if (json['@type'] === 'WebApplication') {
        json.aggregateRating = {
          '@type': 'AggregateRating',
          ratingValue: String(rating.ratingValue),
          ratingCount: String(rating.ratingCount),
          bestRating: String(rating.bestRating || '5'),
          worstRating: String(rating.worstRating || '1'),
        };
        modified = true;
      }

      if (modified) {
        script.textContent = JSON.stringify(json, null, 2);
        applied = true;
      }
    } catch {
      // Gracefully ignore parse errors
    }
  }

  return applied;
}

export async function syncLiveAggregateRating(force = false): Promise<AggregateRatingData | null> {
  if (typeof window === 'undefined') return null;

  if (cachedRating && !force) {
    applyAggregateRatingToDOM(cachedRating);
    return cachedRating;
  }

  if (isFetchingRating) return cachedRating;

  isFetchingRating = true;
  try {
    const res = await fetch('/api/seo/ratings');
    if (!res.ok) return cachedRating;

    const data = await res.json();
    if (data?.success && data?.aggregateRating) {
      cachedRating = data.aggregateRating;
      applyAggregateRatingToDOM(cachedRating!);
      return cachedRating;
    }
  } catch (err) {
    // Graceful fallback: existing index.html schema remains active
  } finally {
    isFetchingRating = false;
  }

  return cachedRating;
}
