#!/usr/bin/env node
/**
 * Generate sitemap.xml for the Hyperboloid website
 * Run this after building with: node scripts/generate-sitemap.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = process.env.VITE_SITE_URL || 'https://hyperboloid.eu';
const languages = ['en', 'ru', 'nl', 'es', 'fr', 'de', 'pl'];
const pages = [
  { path: '/', priority: 1.0, changefreq: 'weekly' },
  { path: '/research', priority: 0.9, changefreq: 'weekly' },
  { path: '/publications', priority: 0.9, changefreq: 'daily' },
  { path: '/roadmap', priority: 0.8, changefreq: 'monthly' },
  { path: '/governance', priority: 0.7, changefreq: 'monthly' },
  { path: '/contact', priority: 0.8, changefreq: 'weekly' },
];

function escapeXml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function generateSitemap() {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n';
  xml += '         xmlns:xhtml="http://www.w3.org/1999/xhtml">\n';

  pages.forEach(({ path: pagePath, priority, changefreq }) => {
    languages.forEach((lang) => {
      const urlPath = pagePath === '/' ? `/${lang}/` : `/${lang}${pagePath}`;
      const url = `${SITE_URL}${urlPath}`;

      xml += '  <url>\n';
      xml += `    <loc>${escapeXml(url)}</loc>\n`;
      xml += `    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>\n`;
      xml += `    <changefreq>${changefreq}</changefreq>\n`;
      xml += `    <priority>${priority}</priority>\n`;

      // Add hreflang alternates
      languages.forEach((altLang) => {
        if (altLang !== lang) {
          const altPath = pagePath === '/' ? `/${altLang}/` : `/${altLang}${pagePath}`;
          const altUrl = `${SITE_URL}${altPath}`;
          xml += `    <xhtml:link rel="alternate" hreflang="${altLang}" href="${escapeXml(altUrl)}" />\n`;
        }
      });

      xml += '  </url>\n';
    });
  });

  xml += '</urlset>';
  return xml;
}

const distDir = path.join(__dirname, '..', 'dist');
const sitemapPath = path.join(distDir, 'sitemap.xml');

// Ensure dist directory exists
if (!fs.existsSync(distDir)) {
  console.error(
    'Error: dist directory not found. Please run "npm run build" first.'
  );
  process.exit(1);
}

// Generate and write sitemap
try {
  const sitemapXml = generateSitemap();
  fs.writeFileSync(sitemapPath, sitemapXml, 'utf-8');
  
  console.log(`✓ Sitemap generated: ${sitemapPath}`);
  console.log(`✓ Total URLs: ${languages.length * pages.length}`);
  console.log(`✓ Languages: ${languages.length} (${languages.join(', ')})`);
  console.log(`✓ Pages: ${pages.length} per language`);
} catch (error) {
  console.error('Error generating sitemap:', error);
  process.exit(1);
}

