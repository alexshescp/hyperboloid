# Hyperboloid Multi-Page, Multi-Language SEO Implementation

## Overview

This document describes the comprehensive multi-page, multi-language website implementation for Hyperboloid Stichting with full SEO/SMM optimization, dynamic language selection, and sitemap generation.

## Architecture

### URL Structure
The website implements a clean, SEO-friendly URL structure supporting 7 languages:

```
/en/          - English homepage
/ru/          - Russian homepage
/nl/          - Dutch homepage
/es/          - Spanish homepage
/fr/          - French homepage
/de/          - German homepage
/pl/          - Polish homepage

/en/research     - English Research page
/ru/research     - Russian Research page
... (applies to all languages)
```

**Routes:**
- Home: `/`
- Research: `/research`
- Publications: `/publications`
- Roadmap: `/roadmap`
- Governance: `/governance`
- Contact: `/contact`

## Key Components & Features

### 1. Language Switcher Component
**File:** `src/components/LanguageSwitcher.tsx`

Features:
- Multiple display variants: `horizontal`, `vertical`, `dropdown`
- Size options: `sm`, `md`, `lg`
- Visual feedback showing current language
- Smooth animations with Motion
- Mobile and desktop responsive

Usage:
```tsx
<LanguageSwitcher
  currentLang={lang}
  onChangeLanguage={switchLanguage}
  variant="dropdown"  // or "horizontal", "vertical"
  size="md"
/>
```

### 2. SEO Head Component
**File:** `src/components/SEOHead.tsx`

Comprehensive meta tag management including:
- Basic meta tags (title, description, charset, viewport)
- Open Graph tags (og:title, og:description, og:image, og:url, og:type, og:locale)
- Twitter Card tags
- Language & localization meta tags
- Canonical and alternate links for all languages
- Structured Data (JSON-LD):
  - Organization schema
  - Breadcrumb schema
- RSS feed links
- Open search descriptor

Usage:
```tsx
<SEOHead
  lang="en"
  pageTitle="Research - Hyperboloid Stichting"
  pageDescription="Priority research clusters on digital rights..."
  ogTitle="Research - Hyperboloid Stichting"
  ogDescription="Multi-language research platform..."
  pagePath="/research"
/>
```

### 3. Sitemap Generation
**Files:** 
- `src/utils/sitemap.ts` - Sitemap generation logic
- `scripts/generate-sitemap.mjs` - Build-time sitemap generator

Features:
- Dynamic sitemap generation based on languages and pages
- Includes all 7 languages × 6 pages = 42 URLs
- XML with proper hreflang alternate links
- Generated automatically during `npm run build`

Generated sitemap structure:
```xml
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>https://hyperboloid.foundation/en/</loc>
    <lastmod>2026-04-20</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="ru" href="https://hyperboloid.foundation/ru/" />
    <xhtml:link rel="alternate" hreflang="nl" href="https://hyperboloid.foundation/nl/" />
    ... (all other languages)
  </url>
  ...
</urlset>
```

### 4. SEO Utilities
**File:** `src/utils/seo.ts`

Functions:
- `buildCanonical(lang, path)` - Generate canonical URLs
- `generateSEOMeta(lang, title, description, ...)` - Create complete SEO metadata
- `generateKeywords(lang)` - Language-specific keywords
- `generateOrganizationSchema(lang)` - JSON-LD organization data
- `generateBreadcrumbSchema(lang, path, title)` - Breadcrumb structured data

## Layout Enhancements

### Header
**File:** `src/components/Layout.tsx`

Enhanced header features:
- Logo and branding
- **Desktop Language Switcher:** Dropdown menu with all 7 languages
- **Mobile Language Indicator:** Shows current language with globe icon
- Navigation menu toggle button

### Burger Menu
Improved burger menu design includes:
- Full navigation with all pages
- **Desktop Column:** Contact information, language selector (all 7 languages)
- **Mobile Column:** Contact information, language switcher
- Bottom CTAs: Donate button and Contact button
- Smooth animations and transitions
- Language switching closes menu automatically

## SEO Meta Information

### Each Page Includes

1. **Title Tags**
   - Unique, descriptive titles for each page and language
   - Format: "Page Name - Hyperboloid Stichting"

2. **Meta Descriptions**
   - 120-160 characters
   - Language-specific content
   - Compelling copy for CTR improvement

3. **Open Graph Tags**
   - og:title, og:description
   - og:image (fallback to /og-image.png)
   - og:url with proper hreflang attributes
   - og:type (website)
   - og:locale with alternate locales

4. **Twitter Cards**
   - twitter:card: summary_large_image
   - twitter:title, twitter:description
   - twitter:creator: @hyperboloid_org
   - twitter:image

5. **Structured Data (JSON-LD)**
   - Organization schema with contact info, location,  social media
   - Breadcrumb navigation schema
   - Page-specific schemas

6. **Language & Localization**
   - html lang attribute
   - Proper locale codes (en_US, ru_RU, nl_NL, etc.)
   - hreflang links for all language versions

### SEO Keywords by Language

**English:** digital rights, freedom of speech, censorship, digital dignity, privacy, surveillance, internet freedom, institutional accountability

**Russian:** цифровые права, свобода слова, цензура, цифровое достоинство, приватность, надзор, интернет свобода, подотчетность

**Dutch, Spanish, French, German, Polish:** Localized keyword sets adapted for each language

## Static Files & Configuration

### robots.txt
Located: `public/robots.txt`

Features:
- Allow all crawlers
- Sitemap reference
- Crawl delay settings
- Bot-specific rules

### security.txt
Located: `public/.well-known/security.txt`

Features:
- Security contact email
- Expiration date
- Language preferences
- Canonical reference

## Build & Deployment

### Build Process

```bash
# Install dependencies
npm install

# Development
npm run dev

# Production build (includes sitemap generation)
npm run build

# Output in dist/ with:
# - index.html
# - JavaScript bundles (react.js, router.js, ui.js, vendor.js)
# - Assets
# - sitemap.xml
# - robots.txt
# - .well-known/security.txt
```

### Environment Variables

Set in `.env` file:
```
VITE_SITE_URL=https://hyperboloid.foundation  # Used for canonical URLs
GEMINI_API_KEY=your_key_here                  # For API features
```

## Mobile Optimization

### Responsive Design
- Mobile-first approach
- Burger menu with full language support
- Touch-friendly language selector
- Optimized load times

### Meta Tags for Mobile
- `viewport` tag for proper scaling
- `apple-mobile-web-app-capable`
- `apple-mobile-web-app-status-bar-style`
- `theme-color`

## SMM Integration

### Social Media Tags
All pages include:
- Open Graph title, description, image
- Twitter Card formatting
- Proper URL and locale information
- Author attribution

### Share Optimization
- Unique og:image for each page
- Platform-specific descriptions
- Proper encoding for all languages
- Rich preview support

## Analytics & Tracking Ready

The infrastructure supports:
- Google Analytics tracking (via script injection)
- Yandex.Metrica (for Russian audience)
- Facebook Pixel
- LinkedIn Insights

Add tracking codes in `Layout.tsx` Helmet component or use external services.

## Multilingual Content Management

### i18n/site-content.json Structure

```json
{
  "languages": ["en", "ru", "nl", "es", "fr", "de", "pl"],
  "labels": {
    "en": {
      "name": "English",
      "menu": { "research": "Research", ... },
      "hero": "...",
      "lead": "..."
    },
    ...
  },
  "pages": {
    "home": {
      "title": { "en": "...", "ru": "...", ... },
      "description": { ... },
      "ogTitle": { ... },
      "ogDescription": { ... }
    },
    "research": { ... },
    "publications": { ... },
    "roadmap": { ... },
    "governance": { ... },
    "contact": { ... }
  }
}
```

## Implementation Checklist

✅ Multi-language routing (/en/, /ru/, /nl/, /es/, /fr/, /de/, /pl/)
✅ Language switcher in header (dropdown)
✅ Language switcher in burger menu (vertical)
✅ Comprehensive SEO/OG meta tags
✅ Dynamic XML sitemap generation
✅ Breadcrumb navigation schema
✅ Organization structured data
✅ Canonical URLs
✅ hreflang alternate links
✅ Twitter Card support
✅ robots.txt
✅ security.txt
✅ Mobile-responsive design
✅ Automated sitemap generation in build process

## Future Enhancements

- [ ] Multi-language SMS functionality
- [ ] Content personalization based on language/region
- [ ] Automatic translations via AI
- [ ] Regional CDN optimization
- [ ] Language-specific analytics
- [ ] A/B testing per language
- [ ] Accessibility improvements (WCAG 2.1 AAA)
- [ ] AMP versions for mobile performance
- [ ] News sitemap for publications
- [ ] Schema.org NewsArticle markup

## Performance Metrics

Current optimization:
- Code splitting by feature area
- Lazy loading of components
- Optimized images with WebP
- Minified CSS/JS bundles
- Gzip compression ready
- CDN-compatible build outputs

## Support & Contact

For SEO/technical questions:
- research@hyperboloid.foundation
- https://hyperboloid.foundation/contact

---

**Last Updated:** April 20, 2026
**Version:** 1.0
**Maintained by:** Hyperboloid Stichting Technical Team
