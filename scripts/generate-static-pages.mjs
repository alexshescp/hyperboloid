import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const data = JSON.parse(fs.readFileSync(path.join(root, 'i18n/site-content.json'), 'utf8'));
const langs = data.languages;
const pages = Object.keys(data.internalPages);

const escapeHtml = (s) => String(s)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;');

function ensureDir(filePath) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
}

function translate(section, key, lang) {
  return section[key][lang];
}

function langSwitcher(currentLang) {
  return langs.map((code) => {
    const current = code === currentLang ? ' aria-current="page"' : '';
    return `<a${current} href="/${code}/">${code.toUpperCase()}</a>`;
  }).join('');
}

function siteHeader(navContent) {
  return `<header><div class="container nav"><strong>${escapeHtml(data.ui.brand)}</strong><div class="lang">${navContent}</div></div></header>`;
}

function siteFooter(lang, withContacts = true) {
  const copyright = escapeHtml(translate(data.ui.footer, 'copyright', lang));
  const contacts = withContacts ? ` · ${escapeHtml(translate(data.ui.footer, 'contacts', lang))}` : '';
  return `<footer><div class="container small">${copyright}${contacts}</div></footer>`;
}

function renderDocument({ lang, title, description, url, body, twitterDescription, footerWithContacts = true }) {
  return `<!doctype html>
<html lang="${lang}">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(description)}" />
  <meta property="og:title" content="${escapeHtml(title)}" />
  <meta property="og:description" content="${escapeHtml(description)}" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="${escapeHtml(url)}" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${escapeHtml(title)}" />
  <meta name="twitter:description" content="${escapeHtml(twitterDescription ?? description)}" />
  <link rel="canonical" href="${escapeHtml(url)}" />
  <link rel="stylesheet" href="/site.css" />
</head>
<body>
${body}
${siteFooter(lang, footerWithContacts)}
</body>
</html>`;
}

function internalNavigation(lang, menu) {
  const heading = translate(data.ui.home, 'internalNavigation', lang);
  return `<section class="card"><h2>${escapeHtml(heading)}</h2><div class="grid">${pages
    .map((p) => `<div><a class="btn" href="/${lang}/${p}/">${escapeHtml(menu[p])}</a></div>`)
    .join('')}</div></section>`;
}

function writeRootGateway() {
  const links = langs.map((code) => `<a href="/${code}/">${code.toUpperCase()}</a>`).join(' · ');
  const title = langs.map((lang) => translate(data.ui.gateway, 'title', lang)).join(' / ');
  const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/><title>${escapeHtml(data.ui.gateway.pageTitle)}</title><link rel="stylesheet" href="/site.css"/></head><body><main class="container"><h1>${escapeHtml(title)}</h1><p>${links}</p></main><script>const map={${langs.map((l)=>`${l}:'${l}'`).join(',')}};const s=localStorage.getItem('hyperboloid-lang');const n=(navigator.language||'en').slice(0,2).toLowerCase();const t=map[s]||map[n]||'en';if(location.pathname==='/'||location.pathname==='/index.html'){location.replace('/'+t+'/');}</script></body></html>`;
  fs.writeFileSync(path.join(root, 'index.html'), html);
}

function writeLanguageHomes() {
  langs.forEach((lang) => {
    const t = data.labels[lang];
    const pageTitle = `${translate(data.ui.home, 'siteTitle', lang)} / ${lang.toUpperCase()}`;
    const body = `${siteHeader(langSwitcher(lang))}
<main class="container">
<section class="hero"><p class="small">${escapeHtml(t.name)}</p><h1>${escapeHtml(t.hero)}</h1><p>${escapeHtml(t.lead)}</p></section>
${internalNavigation(lang, t.menu)}
<section class="card"><h2>${escapeHtml(t.programs)}</h2><div class="grid">${t.programItems.map((p) => `<div><h3>${escapeHtml(p)}</h3><p>${escapeHtml(t.lead)}</p></div>`).join('')}</div><p><a class="btn" href="/api/donations/stripe-checkout-session" target="_blank" rel="noreferrer">${escapeHtml(t.cta)}</a></p></section>
<section class="card"><h2>${escapeHtml(translate(data.ui.home, 'editorialHeading', lang))}</h2>${t.editorial.map((p) => `<p>${escapeHtml(p)}</p>`).join('')}</section>
</main>`;

    const html = renderDocument({
      lang,
      title: pageTitle,
      description: t.lead,
      twitterDescription: t.lead,
      url: `https://hyperboloid.org/${lang}/`,
      body,
    });

    const out = path.join(root, lang, 'index.html');
    ensureDir(out);
    fs.writeFileSync(out, html);
  });
}

function writeInternalPages() {
  langs.forEach((lang) => {
    const t = data.labels[lang];
    pages.forEach((pageKey) => {
      const title = data.internalPages[pageKey][lang];
      const nav = `<a href="/${lang}/">${escapeHtml(translate(data.ui, 'homeLabel', lang))}</a> ${pages.map((key) => `<a href="/${lang}/${key}/">${escapeHtml(t.menu[key])}</a>`).join(' ')}`;
      const body = `${siteHeader(nav)}
<main class="container">
<section class="hero"><p class="small">${escapeHtml(t.name)}</p><h1>${escapeHtml(title)}</h1><p>${escapeHtml(t.lead)}</p></section>
<section class="card"><p>${escapeHtml(t.editorial[0])}</p><p>${escapeHtml(t.editorial[1])}</p><p>${escapeHtml(t.editorial[2])}</p></section>
<section class="card"><h2>${escapeHtml(translate(data.ui.internal, 'apiHeading', lang))}</h2><p>${escapeHtml(translate(data.ui.internal, 'apiDescription', lang))}</p></section>
</main>`;

      const html = renderDocument({
        lang,
        title: `${escapeHtml(data.ui.brand)} / ${title} / ${lang.toUpperCase()}`,
        description: t.lead,
        twitterDescription: t.lead,
        url: `https://hyperboloid.org/${lang}/${pageKey}/`,
        body,
        footerWithContacts: false,
      });

      const out = path.join(root, lang, pageKey, 'index.html');
      ensureDir(out);
      fs.writeFileSync(out, html);
    });
  });
}

writeRootGateway();
writeLanguageHomes();
writeInternalPages();
console.log('Static multilingual pages regenerated from i18n/site-content.json');
