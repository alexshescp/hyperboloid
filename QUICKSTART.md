
# 🚀 Hyperboloid Multi-Language Website - Quick Start Guide

## Overview

Your Hyperboloid Stichting website is now a complete **multi-page, multi-language, SEO-optimized** platform supporting **7 languages** with professional language selection in both header and burger menu.

## 📋 What's New

### ✅ 7-Language Support
- English `/en/`, Russian `/ru/`, Dutch `/nl/`, Spanish `/es/`, French `/fr/`, German `/de/`, Polish `/pl/`
- All pages fully localized
- Automatic language detection
- Language persistence using browser storage

### ✅ Smart Language Switchers
1. **Header** - Dropdown menu (desktop) / Language badge (mobile)
2. **Burger Menu** - Vertical language selector with all 7 languages
3. **Auto-switching** - Menu closes when switching languages

### ✅ Complete SEO Optimization
- Unique meta titles and descriptions per page
- Open Graph tags for social media
- Twitter Card support
- Structured data (JSON-LD)
- Canonical URLs
- hreflang alternates
- XML sitemap with 42 URLs
- robots.txt
- security.txt

### ✅ Professional Design
- Enhanced header with globe icon language indicator
- Improved burger menu layout
- Responsive on all devices
- Smooth animations

## 🎯 Key Features by Section

### Header (Fixed Navigation)
```
[Logo] ← → [Desktop: Dropdown Language Selector] [Mobile: EN badge] [Menu Button]
```

### Burger Menu (Mobile/Desktop)
```
┌─────────────────────────────┐
│ Navigation     ✕ (Close)    │
├─────────────────────────────┤
│ • Home                       │
│ • Research                   │
│ • Publications               │
│ • Roadmap                    │
│ • Governance                 │
│ • Contact                    │
├─────────────────────────────┤
│ CONTACT POINT                │
│ research@hyperboloid...      │
│ [Berlin] [Amsterdam]         │
├─────────────────────────────┤
│ LANGUAGES                    │
│ [EN] [RU] [NL] [ES]          │
│ [FR] [DE] [PL]               │
├─────────────────────────────┤
│ [Donate via Stripe]          │
│ [Get in Touch]               │
└─────────────────────────────┘
```

## 🔧 Installation & Setup

### 1. Install Dependencies
```bash
cd /var/hyperboloid/hyperboloid
npm install
```

### 2. Development Server
```bash
npm run dev
```
Server runs on `http://localhost:3000`

### 3. Production Build
```bash
npm run build
```
Generates optimized production build in `dist/` folder with:
- Minified code
- Code splitting
- **sitemap.xml** (auto-generated)
- robots.txt
- .well-known/security.txt

### 4. Preview Production Build
```bash
npm run preview
```

## 📊 Sitemap Details

### Auto-Generated sitemap.xml
- **42 URLs** (7 languages × 6 pages)
- **Includes hreflang alternates** for all language versions
- **Change frequencies** optimized per page
- **Priority scores** for ranking

```xml
Example entry:
<url>
  <loc>https://hyperboloid.foundation/en/research</loc>
  <lastmod>2026-04-20</lastmod>
  <changefreq>weekly</changefreq>
  <priority>0.9</priority>
  <xhtml:link rel="alternate" hreflang="ru" 
              href="https://hyperboloid.foundation/ru/research" />
  <!-- ... 5 more language alternates -->
</url>
```

## 🌐 URL Examples

```
Homepage:
GET https://hyperboloid.foundation/en/  → English Home
GET https://hyperboloid.foundation/ru/  → Russian Home
GET https://hyperboloid.foundation/nl/  → Dutch Home

Research Page (all languages):
GET https://hyperboloid.foundation/en/research
GET https://hyperboloid.foundation/ru/research
GET https://hyperboloid.foundation/nl/research
... (es, fr, de, pl)

Contact Page:
GET https://hyperboloid.foundation/en/contact
GET https://hyperboloid.foundation/ru/contact
... (all languages)
```

## 📱 Component Usage

### Using Language Switcher
```tsx
import { LanguageSwitcher } from './components/LanguageSwitcher';

// Dropdown variant (in header)
<LanguageSwitcher
  currentLang="en"
  onChangeLanguage={(lang) => setLang(lang)}
  variant="dropdown"
  size="sm"
/>

// Vertical variant (in menu)
<LanguageSwitcher
  currentLang="en"
  onChangeLanguage={(lang) => setLang(lang)}
  variant="vertical"
  size="md"
/>
```

### Adding SEO to Pages
```tsx
import { SEOHead } from './components/SEOHead';

export function MyPage({ lang }) {
  return (
    <>
      <SEOHead
        lang={lang}
        pageTitle="My Page Title"
        pageDescription="Page description..."
        pagePath="/my-page"
      />
      {/* Page content */}
    </>
  );
}
```

## 🔍 SEO Checklist

### On-Page
- ✅ Unique title per page and language
- ✅ Meta descriptions (120-160 chars)
- ✅ H1 tags for main headings
- ✅ Alt text on images

### Technical
- ✅ XML sitemap
- ✅ robots.txt
- ✅ Canonical URLs
- ✅ hreflang tags
- ✅ Mobile responsive
- ✅ Fast load times

### Social Media
- ✅ Open Graph tags
- ✅ Twitter Cards
- ✅ Unique og:image per page
- ✅ Proper og:locale

### Structured Data
- ✅ Organization schema
- ✅ Breadcrumb schema
- ✅ JSON-LD format

## 📈 Google Search Console Setup

1. **Verify the site** - both with and without www
2. **Submit sitemap.xml**
   - URL: `https://hyperboloid.foundation/sitemap.xml`
3. **Set preferred domain** - with or without www
4. **Set language** - set for each language version if needed
   - `/en/ → English (US)`
   - `/ru/ → Russian`
   - `/nl/ → Dutch`
   - etc.
5. **Mark hreflang implementation** - let GSC know about language versions

## 📊 Analytics Setup

Add to your deployment for tracking:
```tsx
// In Layout.tsx Helmet section
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_ID', {
    'linker': {
      'domains': ['hyperboloid.foundation']
    }
  });
</script>
```

## 🚀 Deployment

### Environment Variables (Set Before Build)
```env
VITE_SITE_URL=https://hyperboloid.foundation
GEMINI_API_KEY=your_api_key_here
```

### Deployment Steps
```bash
# 1. Build
npm run build

# 2. Output will be in dist/
# 3. Deploy to your hosting:
#    - Vercel, Netlify, AWS, etc.
#    - OR your own server

# 4. Ensure .well-known/security.txt is accessible
# 5. Ensure robots.txt is accessible at root

# 6. Submit to search engines
#    - Google Search Console
#    - Bing Webmaster Tools
#    - Yandex Webmaster (for Russian audience)
```

### Vercel Deployment Example
```bash
vercel --prod
```

### Netlify Deployment Example
```bash
netlify deploy --prod --dir=dist
```

## 📁 File Structure

```
hyperboloid/
├── src/
│   ├── components/
│   │   ├── Layout.tsx          [ENHANCED - Language switcher]
│   │   ├── LanguageSwitcher.tsx [NEW - Reusable lang selector]
│   │   └── SEOHead.tsx         [NEW - SEO meta tags]
│   ├── pages/
│   │   ├── Home.tsx            [UPDATED - Using SEOHead]
│   │   ├── Research.tsx        [UPDATED - Using SEOHead]
│   │   ├── Publications.tsx    [UPDATED - Using SEOHead]
│   │   ├── Roadmap.tsx         [UPDATED - Using SEOHead]
│   │   ├── Governance.tsx      [UPDATED - Using SEOHead]
│   │   └── Contact.tsx         [UPDATED - Using SEOHead]
│   ├── utils/
│   │   ├── seo.ts             [NEW - SEO utilities]
│   │   └── sitemap.ts         [NEW - Sitemap generator]
│   ├── i18n.ts
│   ├── App.tsx
│   └── main.tsx
├── public/
│   ├── robots.txt             [NEW]
│   └── .well-known/
│       └── security.txt       [NEW]
├── scripts/
│   ├── generate-sitemap.mjs   [NEW]
│   └── init-seo.mjs           [NEW]
├── package.json               [UPDATED - Build scripts]
├── vite.config.ts            [UPDATED - Post-build hooks]
├── MULTIPAGE_SEO.md          [NEW - Full documentation]
└── IMPLEMENTATION_COMPLETE.md [NEW - Summary]
```

## 💡 Tips & Best Practices

### Language Switching
- Switching language automatically redirects to the same page in new language
- User preference is saved to localStorage
- Mobile menu closes after language switch

### SEO Best Practices
- Keep titles under 60 characters
- Descriptions between 120-160 characters
- Use primary keywords in title and H1
- Structure content with proper heading hierarchy

### Performance
- Sitemap generated at build time (not runtime)
- Languages are determined server-side
- No JavaScript errors in console
- Optimized image loading

## 🔗 Important Links

- **Sitemap:** `https://hyperboloid.foundation/sitemap.xml`
- **Robots:** `https://hyperboloid.foundation/robots.txt`
- **Security:** `https://hyperboloid.foundation/.well-known/security.txt`

## ❓ Frequently Asked Questions

**Q: How do I add a new language?**
A: Add language code to `i18n/site-content.json` > languages array, then add translations for all pages.

**Q: Can users change language on any page?**
A: Yes, language switchers are available on all pages (header and menu).

**Q: Does Google see all language versions?**
A: Yes, hreflang tags tell Google about alternate language versions.

**Q: How often is the sitemap updated?**
A: It's regenerated every time you build (`npm run build`).

**Q: Can I customize the language switcher?**
A: Yes, modify `src/components/LanguageSwitcher.tsx` and the Layout component.

## 🆘 Troubleshooting

### Sitemap not generating
```bash
# Manually regenerate
npm run generate-sitemap

# Check output
cat dist/sitemap.xml
```

### Language switcher not working
- Check browser console for errors
- Verify localStorage is enabled
- Clear browser cache and try again

### Wrong language displaying
- Check URL structure: `/en/`, `/ru/`, etc.
- Clear localStorage: `localStorage.clear()`
- Verify i18n/site-content.json has all languages

## 📞 Support

- **Technical Issues:** research@hyperboloid.foundation
- **Website:** https://hyperboloid.foundation
- **Documentation:** See MULTIPAGE_SEO.md and IMPLEMENTATION_COMPLETE.md

---

## 🎉 You're All Set!

Your website now features:
- ✅ Multi-language support (7 languages)
- ✅ Professional language selection
- ✅ Complete SEO optimization
- ✅ Auto-generated sitemap
- ✅ Social media ready
- ✅ Mobile responsive
- ✅ Production ready

**Start building and deploy with confidence!**

---

**Last Updated:** April 20, 2026  
**Version:** 1.0  
**Status:** ✅ Production Ready
