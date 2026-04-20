import siteData from '../i18n/site-content.json' assert { type: 'json' };
import { Language } from './types';

export const siteContent = siteData as {
  languages: Language[];
  labels: Record<Language, {
    name: string;
    menu: Record<string, string>;
    cta: string;
    programs: string;
    hero: string;
    lead: string;
    programItems: string[];
    editorial: string[];
  }>;
  pages: Record<string, Record<Language, any>>;
  internalPages: Record<string, Record<Language, string>>;
  ui: {
    brand: string;
    homeLabel: Record<Language, string>;
    gateway: {
      title: Record<Language, string>;
      pageTitle: string;
    };
    home: {
      siteTitle: Record<Language, string>;
    };
    footer: {
      contacts: Record<Language, string>;
      copyright: Record<Language, string>;
    };
  };
};

export const languages = siteContent.languages;

export function isLanguage(value: string | undefined): value is Language {
  return Boolean(value && siteContent.languages.includes(value as Language));
}

export function getLangFromPath(path: string) {
  const match = path.match(/^\/(en|ru|nl|es|fr|de|pl)(?:\/|$)/);
  return match?.[1] as Language | undefined;
}

export function buildRoute(lang: Language, path: string) {
  return path === '/' ? `/${lang}/` : `/${lang}${path}`;
}

export function getPageContent(page: string, lang: Language) {
  return siteContent.pages[page]?.[lang] ?? {};
}
