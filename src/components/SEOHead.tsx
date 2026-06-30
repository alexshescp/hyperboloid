import React from "react";
import { Helmet } from "react-helmet-async";
import { Language } from "../types";
import {
  generateSEOMeta,
  generateOrganizationSchema,
  generateBreadcrumbSchema,
  SEOMeta,
} from "../utils/seo";

interface SEOHeadProps {
  lang: Language;
  pageTitle: string;
  pageDescription: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  pagePath?: string;
  keywords?: string;
  schema?: any;
  children?: React.ReactNode;
}

export function SEOHead({
  lang,
  pageTitle,
  pageDescription,
  ogTitle,
  ogDescription,
  ogImage,
  pagePath = "/",
  keywords,
  schema,
  children,
}: SEOHeadProps) {
  const seoMeta = generateSEOMeta(
    lang,
    pageTitle,
    pageDescription,
    ogTitle,
    ogDescription,
    pagePath
  );

  const organizationSchema = generateOrganizationSchema(lang);
  const breadcrumbSchema = generateBreadcrumbSchema(lang, pagePath, pageTitle);

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="charset" content="UTF-8" />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content="Hyperboloid Stichting" />
      <meta name="robots" content={seoMeta.robots} />

      {/* Language & Localization */}
      <meta httpEquiv="Content-Language" content={lang} />
      <meta property="og:locale" content={seoMeta.locale} />
      {seoMeta.altLocales &&
        seoMeta.altLocales.map((locale) => (
          <meta key={locale} property="og:locale:alternate" content={locale} />
        ))}

      {/* Open Graph / Social Media */}
      <meta property="og:title" content={ogTitle || pageTitle} />
      <meta property="og:description" content={ogDescription || pageDescription} />
      <meta property="og:type" content={seoMeta.ogType} />
      <meta property="og:url" content={seoMeta.canonical} />
      <meta property="og:image" content={ogImage || seoMeta.ogImage} />
      <meta property="og:image:alt" content={pageTitle} />

      {/* Twitter Card */}
      <meta name="twitter:card" content={seoMeta.twitterCard} />
      <meta name="twitter:title" content={ogTitle || pageTitle} />
      <meta name="twitter:description" content={ogDescription || pageDescription} />
      {seoMeta.twitterCreator && <meta name="twitter:creator" content={seoMeta.twitterCreator} />}
      <meta name="twitter:image" content={ogImage || seoMeta.ogImage} />

      {/* Canonical & Alternate Links */}
      <link rel="canonical" href={seoMeta.canonical} />
      <link rel="alternate" hrefLang={lang} href={seoMeta.canonical} />

      {/* Alternate language links for all languages */}
      {["en", "ru", "nl", "es", "fr", "de", "pl"].map((altLang) => {
        const basePath = pagePath === "/" ? "" : pagePath;
        const url = `https://hyperboloid.eu/${altLang}${basePath || "/"}`;
        return (
          <link
            key={altLang}
            rel="alternate"
            hrefLang={altLang}
            href={url}
          />
        );
      })}

      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#0f0f0f" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

      {/* Open Search */}
      {/* Preload DNS for hyperboloid.eu */}
      <link rel="dns-prefetch" href="https://hyperboloid.eu" />

      {children}
    </Helmet>
  );
}
