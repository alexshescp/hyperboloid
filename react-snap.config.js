const languages = ['en', 'ru', 'nl', 'es', 'fr', 'de', 'pl'];
const pages = ['', 'research', 'roadmap', 'publications', 'governance', 'contact'];

const routes = [];
for (const lang of languages) {
  for (const page of pages) {
    routes.push(page === '' ? `/${lang}/` : `/${lang}/${page}`);
  }
}

module.exports = {
  routes,
  source: 'dist',
  destination: 'dist',
  concurrency: 4,
  renderer: 'jsdom',
};
