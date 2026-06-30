import { Language } from '../types';

const SITE_URL = process.env.VITE_SITE_URL || 'https://hyperboloid.eu';

export interface SitemapEntry {
  url: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
  alternates?: Array<{ lang: string; url: string }>;
}

const pages = [
  { path: '/', priority: 1.0, changefreq: 'weekly' },
  { path: '/research', priority: 0.9, changefreq: 'weekly' },
  { path: '/publications', priority: 0.9, changefreq: 'daily' },
  { path: '/roadmap', priority: 0.8, changefreq: 'monthly' },
  { path: '/governance', priority: 0.7, changefreq: 'monthly' },
  { path: '/contact', priority: 0.8, changefreq: 'weekly' },
];

const languages: Language[] = ['en', 'ru', 'nl', 'es', 'fr', 'de', 'pl'];

export function generateSitemapEntries(): SitemapEntry[] {
  const entries: SitemapEntry[] = [];

  pages.forEach(({ path, priority, changefreq }) => {
    languages.forEach((lang) => {
      const urlPath = path === '/' ? `/${lang}/` : `/${lang}${path}`;
      const url = `${SITE_URL}${urlPath}`;

      const alternates = languages
        .filter((l) => l !== lang)
        .map((l) => ({
          lang: l,
          url: `${SITE_URL}${l === 'en' ? path === '/' ? `/${l}/` : `/${l}${path}` : path === '/' ? `/${l}/` : `/${l}${path}`}`,
        }));

      entries.push({
        url,
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: changefreq as any,
        priority,
        alternates,
      });
    });
  });

  return entries;
}

export function generateSitemapXML(entries: SitemapEntry[]): string {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n';
  xml += '         xmlns:xhtml="http://www.w3.org/1999/xhtml">\n';

  entries.forEach((entry) => {
    xml += '  <url>\n';
    xml += `    <loc>${escapeXml(entry.url)}</loc>\n`;

    if (entry.lastmod) {
      xml += `    <lastmod>${entry.lastmod}</lastmod>\n`;
    }

    if (entry.changefreq) {
      xml += `    <changefreq>${entry.changefreq}</changefreq>\n`;
    }

    if (entry.priority) {
      xml += `    <priority>${entry.priority}</priority>\n`;
    }

    if (entry.alternates && entry.alternates.length > 0) {
      entry.alternates.forEach((alt) => {
        xml += `    <xhtml:link rel="alternate" hreflang="${alt.lang}" href="${escapeXml(alt.url)}" />\n`;
      });
    }

    xml += '  </url>\n';
  });

  xml += '</urlset>';
  return xml;
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export function generateSitemapIndex(sitemaps: string[]): string {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  sitemaps.forEach((url) => {
    xml += '  <sitemap>\n';
    xml += `    <loc>${escapeXml(url)}</loc>\n`;
    xml += `    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>\n`;
    xml += '  </sitemap>\n';
  });

  xml += '</sitemapindex>';
  return xml;
}
