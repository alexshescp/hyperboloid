import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const data = JSON.parse(fs.readFileSync(path.join(root, 'i18n/site-content.json'), 'utf8'));
const langs = data.languages;
const pages = ['research', 'publications', 'roadmap', 'governance', 'contact'];
const homeLabels = { en: 'Home', ru: 'Главная', nl: 'Home', es: 'Inicio', fr: 'Accueil', de: 'Start', pl: 'Strona główna' };

const escapeHtml = (s) => s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');

function ensureDir(filePath) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
}

function langNav(currentLang, labels) {
  return langs.map((code) => `<a href="/${code}/">${code.toUpperCase()}</a>`).join('');
}

function internalNav(lang, menu) {
  return `<section class="card"><h2>Internal navigation</h2><div class="grid">${pages
    .map((p) => `<div><a class="btn" href="/${lang}/${p}/">${escapeHtml(menu[p])}</a></div>`)
    .join('')}</div></section>`;
}

function writeRootGateway() {
  const links = langs.map((code) => `<a href="/${code}/">${code.toUpperCase()}</a>`).join(' · ');
  const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/><title>Hyperboloid Language Gateway</title><link rel="stylesheet" href="/site.css"/></head><body><main class="container"><h1>Choose language / Выберите язык</h1><p>${links}</p></main><script>const map={${langs.map((l)=>`${l}:'${l}'`).join(',')}};const s=localStorage.getItem('hyperboloid-lang');const n=(navigator.language||'en').slice(0,2).toLowerCase();const t=map[s]||map[n]||'en';if(location.pathname==='/'||location.pathname==='/index.html'){location.replace('/'+t+'/');}</script></body></html>`;
  fs.writeFileSync(path.join(root, 'index.html'), html);
}

function writeLanguageHomes() {
  langs.forEach((lang) => {
    const t = data.labels[lang];
    const html = `<!doctype html>
<html lang="${lang}">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Hyperboloid Foundation / ${lang.toUpperCase()}</title>
  <meta name="description" content="${escapeHtml(t.lead)}" />
  <meta property="og:title" content="Hyperboloid Foundation / ${lang.toUpperCase()}" />
  <meta property="og:description" content="${escapeHtml(t.lead)}" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://hyperboloid.org/${lang}/" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Hyperboloid Foundation / ${lang.toUpperCase()}" />
  <meta name="twitter:description" content="${escapeHtml(t.lead)}" />
  <link rel="canonical" href="https://hyperboloid.org/${lang}/" />
  <link rel="stylesheet" href="/site.css" />
</head>
<body>
<header><div class="container nav"><strong>Hyperboloid</strong><div class="lang">${langNav(lang, t.menu)}</div></div></header>
<main class="container">
<section class="hero"><p class="small">${escapeHtml(t.name)}</p><h1>${escapeHtml(t.hero)}</h1><p>${escapeHtml(t.lead)}</p></section>
${internalNav(lang, t.menu)}
<section class="card"><h2>${escapeHtml(t.programs)}</h2><div class="grid">${t.programItems.map((p) => `<div><h3>${escapeHtml(p)}</h3><p>${escapeHtml(t.lead)}</p></div>`).join('')}</div><p><a class="btn" href="/api/donations/stripe-checkout-session" target="_blank" rel="noreferrer">${escapeHtml(t.cta)}</a></p></section>
<section class="card"><h2>Editorial</h2>${t.editorial.map((p) => `<p>${escapeHtml(p)}</p>`).join('')}</section>
</main>
<footer><div class="container small">© 2026 Hyperboloid. Contact: research@hyperboloid.foundation · reports@hyperboloid.foundation</div></footer>
</body>
</html>`;
    const out = path.join(root, lang, 'index.html');
    ensureDir(out);
    fs.writeFileSync(out, html);
  });
}

function writeInternalPages() {
  langs.forEach((lang) => {
    const t = data.labels[lang];
    pages.forEach((p) => {
      const title = data.internalPages[p][lang];
      const html = `<!doctype html>
<html lang="${lang}">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Hyperboloid / ${escapeHtml(title)} / ${lang.toUpperCase()}</title>
  <meta name="description" content="${escapeHtml(t.lead)}" />
  <meta property="og:title" content="Hyperboloid / ${escapeHtml(title)} / ${lang.toUpperCase()}" />
  <meta property="og:description" content="${escapeHtml(t.lead)}" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://hyperboloid.org/${lang}/${p}/" />
  <link rel="canonical" href="https://hyperboloid.org/${lang}/${p}/" />
  <link rel="stylesheet" href="/site.css" />
</head>
<body>
<header><div class="container nav"><strong>Hyperboloid</strong><div class="lang"><a href="/${lang}/">${escapeHtml(homeLabels[lang])}</a> ${pages.map((q) => `<a href="/${lang}/${q}/">${escapeHtml(t.menu[q])}</a>`).join(' ')}</div></div></header>
<main class="container">
<section class="hero"><p class="small">${escapeHtml(t.name)}</p><h1>${escapeHtml(title)}</h1><p>${escapeHtml(t.lead)}</p></section>
<section class="card"><p>${escapeHtml(t.editorial[0])}</p><p>${escapeHtml(t.editorial[1])}</p><p>${escapeHtml(t.editorial[2])}</p></section>
<section class="card"><h2>API</h2><p>POST /api/subscriptions · POST /api/research-requests · POST /api/sponsorship-requests · POST /api/quarterly-reports/requests · POST /api/donations/stripe-checkout-session</p></section>
</main>
<footer><div class="container small">© 2026 Hyperboloid</div></footer>
</body>
</html>`;
      const out = path.join(root, 'public', lang, p, 'index.html');
      ensureDir(out);
      fs.writeFileSync(out, html);
    });
  });
}

writeRootGateway();
writeLanguageHomes();
writeInternalPages();
console.log('Static multilingual pages regenerated from i18n/site-content.json');
