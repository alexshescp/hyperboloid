import { Language } from '../types';

export interface SEOMeta {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  ogImage?: string;
  ogType?: string;
  canonical?: string;
  keywords?: string;
  author?: string;
  twitterCard?: string;
  twitterCreator?: string;
  robots?: string;
  locale?: string;
  altLocales?: string[];
}

const siteUrl = process.env.VITE_SITE_URL || 'https://hyperboloid.eu';
const twitterHandle = '@hyperboloid_org';

export const defaultSEOMeta: Record<Language, Partial<SEOMeta>> = {
  en: {
    locale: 'en_US',
    altLocales: ['ru_RU', 'nl_NL', 'es_ES', 'fr_FR', 'de_DE', 'pl_PL'],
    twitterCreator: twitterHandle,
    twitterCard: 'summary_large_image',
    robots: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1',
  },
  ru: {
    locale: 'ru_RU',
    altLocales: ['en_US', 'nl_NL', 'es_ES', 'fr_FR', 'de_DE', 'pl_PL'],
    twitterCreator: twitterHandle,
    twitterCard: 'summary_large_image',
    robots: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1',
  },
  nl: {
    locale: 'nl_NL',
    altLocales: ['en_US', 'ru_RU', 'es_ES', 'fr_FR', 'de_DE', 'pl_PL'],
    twitterCreator: twitterHandle,
    twitterCard: 'summary_large_image',
    robots: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1',
  },
  es: {
    locale: 'es_ES',
    altLocales: ['en_US', 'ru_RU', 'nl_NL', 'fr_FR', 'de_DE', 'pl_PL'],
    twitterCreator: twitterHandle,
    twitterCard: 'summary_large_image',
    robots: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1',
  },
  fr: {
    locale: 'fr_FR',
    altLocales: ['en_US', 'ru_RU', 'nl_NL', 'es_ES', 'de_DE', 'pl_PL'],
    twitterCreator: twitterHandle,
    twitterCard: 'summary_large_image',
    robots: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1',
  },
  de: {
    locale: 'de_DE',
    altLocales: ['en_US', 'ru_RU', 'nl_NL', 'es_ES', 'fr_FR', 'pl_PL'],
    twitterCreator: twitterHandle,
    twitterCard: 'summary_large_image',
    robots: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1',
  },
  pl: {
    locale: 'pl_PL',
    altLocales: ['en_US', 'ru_RU', 'nl_NL', 'es_ES', 'fr_FR', 'de_DE'],
    twitterCreator: twitterHandle,
    twitterCard: 'summary_large_image',
    robots: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1',
  },
};

/**
 * Build canonical URL for a given language and path
 */
export function buildCanonical(lang: Language, path: string = '/'): string {
  const pathWithoutSlash = path === '/' ? '' : path;
  return `${siteUrl}/${lang}${pathWithoutSlash}`;
}

/**
 * Generate complete SEO metadata for a page
 */
export function generateSEOMeta(
  lang: Language,
  pageTitle: string,
  pageDescription: string,
  ogTitle?: string,
  ogDescription?: string,
  path: string = '/',
  overrides: Partial<SEOMeta> = {}
): SEOMeta {
  const defaults = defaultSEOMeta[lang];

  return {
    title: pageTitle,
    description: pageDescription,
    ogTitle: ogTitle || pageTitle,
    ogDescription: ogDescription || pageDescription,
    ogType: 'website',
    canonical: buildCanonical(lang, path),
    keywords: generateKeywords(lang),
    author: 'Hyperboloid Stichting',
    ogImage: `${siteUrl}/hyperboloid_og.png`,
    ...defaults,
    ...overrides,
  };
}

/**
 * Generate language-specific keywords
 */
function generateKeywords(lang: Language): string {
  const keywordSets: Record<Language, string> = {
    en: 'digital human rights, freedom of expression, digital observatory, censorship monitoring, privacy protection, internet freedom, institutional accountability, interpol monitor, fatf research',
    ru: 'цифровые права человека, свобода выражения мнений, цифровая обсерватория, мониторинг цензуры, защита приватности, свобода интернета, подотчетность институтов, мониторинг интерпола, исследования fatf',
    nl: 'digitale mensenrechten, vrijheid van meningsuiting, digitaal observatorium, censuurmonitoring, privacybescherming, internetvrijheid, institutionele verantwoording',
    es: 'derechos humanos digitales, libertad de expresión, observatorio digital, monitoreo de censura, protección de la privacidad, libertad en internet, rendición de cuentas institucional',
    fr: 'droits de l\'homme numériques, liberté d\'expression, observatoire numérique, surveillance de la censure, protection de la vie privée, liberté sur internet, responsabilité institutionnelle',
    de: 'digitale Menschenrechte, Meinungsfreiheit, digitales Observatorium, Zensurüberwachung, Datenschutz, Internetfreiheit, institutionelle Verantwortung',
    pl: 'cyfrowe prawa człowieka, wolność słowa, obserwatorium cyfrowe, monitorowanie cenzury, ochrona prywatności, wolność internetu, odpowiedzialność instytucjonalna',
  };

  return keywordSets[lang];
}

/**
 * Generate structured data (JSON-LD) for organization
 */
export function generateOrganizationSchema(lang: Language) {
  const descriptions: Record<Language, string> = {
    en: 'Hyperboloid Stichting is an independent research foundation focused on protecting digital human rights and monitoring supranational institutions.',
    ru: 'Stichting Hyperboloid — это независимый исследовательский фонд, занимающийся защитой цифровых прав человека и мониторингом наднациональных институтов.',
    nl: 'Stichting Hyperboloid is een onafhankelijke onderzoeksstichting die zich richt op de bescherming van digitale mensenrechten.',
    es: 'La Fundación Hyperboloid es una fundación de investigación independiente centrada en la protección de los derechos humanos digitales.',
    fr: 'La Fondation Hyperboloid est une fondation de recherche indépendante axée sur la protection des droits de l\'homme numériques.',
    de: 'Die Hyperboloid Stiftung ist eine unabhängige Forschungsstiftung, die sich auf den Schutz digitaler Menschenrechte konzentriert.',
    pl: 'Fundacja Hyperboloid jest niezależną fundacją badawczą skupiającą się na ochronie cyfrowych praw człowieka.',
  };

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Hyperboloid Stichting',
    alternateName: lang === 'ru' ? 'Цифровые права человека' : 'Digital Human Rights',
    url: siteUrl,
    logo: `${siteUrl}/favicon-96x96.png`,
    image: `${siteUrl}/hyperboloid_og.png`,
    description: descriptions[lang] || descriptions.en,
    sameAs: [
      'https://twitter.com/hyperboloid_org',
      'https://linkedin.com/company/hyperboloid-eu/',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Research & Support',
      email: 'research@hyperboloid.eu',
      areaServed: ['EU', 'Global'],
    },
    foundingDate: '2024',
    location: {
      '@type': 'Place',
      name: 'Amsterdam, Netherlands',
    },
  };
}

/**
 * Generate breadcrumb schema for navigation
 */
export function generateBreadcrumbSchema(
  lang: Language,
  pagePath: string,
  pageTitle: string
) {
  const pathSegments = pagePath
    .split('/')
    .filter(Boolean)
    .map((seg, idx, arr) => ({
      name: seg.charAt(0).toUpperCase() + seg.slice(1),
      url: `${siteUrl}/${lang}/${arr.slice(0, idx + 1).join('/')}`,
    }));

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${siteUrl}/${lang}/`,
      },
      ...pathSegments.map((segment, idx) => ({
        '@type': 'ListItem',
        position: idx + 2,
        name: segment.name,
        item: segment.url,
      })),
    ],
  };
}
