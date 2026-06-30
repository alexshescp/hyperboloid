import { useState, ReactNode, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowRight, ExternalLink, Send, HandHeart, FileText, Sparkles, Globe, AlertCircle, HelpCircle, UserPlus, ShieldAlert, Heart, LifeBuoy, Youtube, Newspaper, Linkedin } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { siteContent, languages, buildRoute } from "../i18n";
import { Language } from "../types";
import { LanguageSwitcher } from "./LanguageSwitcher";

// --- Вспомогательный компонент Логотипа ---
function HyperboloidLogo({ className }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <motion.div
        className="absolute inset-0 blur-xl rounded-full scale-75 animate-pulse"
        animate={{ backgroundColor: ["rgba(30, 58, 138, 0.4)", "rgba(153, 27, 27, 0.4)", "rgba(30, 58, 138, 0.4)"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
      <motion.svg
        viewBox="0 0 200 240"
        className="w-full h-full relative z-10"
        animate={{ filter: "drop-shadow(0 0 35px rgba(255, 255, 255, 0.8))" }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
        <defs>
          <linearGradient id="hyperGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <motion.stop
              offset="0%"
              animate={{ stopColor: ["#1e3a8a", "#991b1b", "#1e3a8a"] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
            <motion.stop
              offset="50%"
              animate={{ stopColor: ["#1d4ed8", "#450a0a", "#1d4ed8"] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
            <motion.stop
              offset="100%"
              animate={{ stopColor: ["#3b82f6", "#dc2626", "#3b82f6"] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
          </linearGradient>
        </defs>
        <g fill="none" stroke="url(#hyperGradient)" strokeWidth="1.2" opacity="0.9">
          {Array.from({ length: 18 }).map((_, i) => {
            const y = 30 + i * 8.5;
            const t = Math.abs((y - 105) / 75);
            const rx = 40 + t * 40;
            const ry = 10 + t * 10;
            return <ellipse key={`e-${i}`} cx="100" cy={y} rx={rx} ry={ry} />;
          })}
        </g>
        <g fill="none" stroke="url(#hyperGradient)" strokeWidth="1.8" opacity="1">
          {Array.from({ length: 36 }).map((_, i) => {
            const angle = (i / 36) * Math.PI * 2;
            const x1 = 100 + Math.cos(angle) * 80;
            const y1 = 30;
            const x2 = 100 + Math.cos(angle + Math.PI / 1.5) * 80;
            const y2 = 180;
            return (
              <motion.line
                key={`l-${i}`}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.9 }}
                transition={{ duration: 4, delay: i * 0.05, repeat: Infinity, repeatType: "reverse" }}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
              />
            );
          })}
        </g>
      </motion.svg>
    </div>
  );
}

const navPaths = ["/", "/research", "/roadmap", "/publications", "/governance", "/contact"];

function getNavItems(lang: Language) {
  const menu = siteContent.labels[lang].menu;
  return navPaths.map((path) => ({
    path,
    label: path === "/" ? siteContent.ui.homeLabel[lang] : menu[path.slice(1)],
  }));
}

const stripeDonationLink = "https://donate.stripe.com";

// --- Основной компонент Layout ---
export function Layout({ children, lang }: { children: ReactNode; lang: Language }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageModalOpen, setLanguageModalOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [typeKey, setTypeKey] = useState(0);
  const [activeModal, setActiveModal] = useState<"subscribe" | "feedback" | "sos" | null>(null);

  const labels = siteContent.labels[lang];
  const uiLabels = labels.modals || {
    subscribe: { title: "Subscription", message: "Follow us on LinkedIn", cta: "LinkedIn" },
    feedback: { title: "Feedback", submit: "Submit" },
    sos: { title: "Urgent Incident", desc: "For Interpol, FATF, Egmont, PNR" }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTypeKey(prev => prev + 1);
    }, 35000);
    return () => clearInterval(interval);
  }, []);

  const navItems = getNavItems(lang);

  const t = {
    en: {
      siteTitle: "Hyperboloid Stichting | Human Rights and Freedom of Speech",
      brandName: "Hyperboloid",
      brandSubtitle: "DIGITAL HUMAN RIGHTS",
      navigation: "Navigation",
      contactPoint: "Contact Point",
      berlin: "Berlin",
      amsterdam: "Amsterdam",
      donateStripe: "Donate Online",
      getInTouch: "Get in Touch",
      footerDesc: "Independent research and civic response platform focused on censorship risks, institutional accountability, and digital dignity.",
      statutes: "Statutes",
      activities: "Activities",
      stayInformed: "Stay informed",
      support: "Support",
      researchRequests: "Research requests",
      newsSubscription: "News subscription",
      quarterlyReport: "Quarterly report request",
      charitySponsorship: "Charity and sponsorship",
      emailPlaceholder: "Email for news",
      subscribe: "Subscribe",
      digestText: "Monthly digest and alerts.",
      supportText: "Support independent monitoring via Stripe.",
      bottomText: "Human rights, open inquiry, accountable systems.",
      whistleblower: "Whistleblower Portal",
      volunteer: "Become a Volunteer",
      sponsor: "For Sponsors",
      cities: "Amsterdam · Berlin · Lyon · Riga",
      email: "research@hyperboloid.eu"
    },
    ru: {
      siteTitle: "Фонд Гиперболоид | Права человека и свобода слова",
      brandName: "Гиперболоид",
      brandSubtitle: "ЦИФРОВЫЕ ПРАВА ЧЕЛОВЕКА",
      navigation: "Навигация",
      contactPoint: "Контакт",
      berlin: "Берлин",
      amsterdam: "Амстердам",
      donateStripe: "Пожертвовать онлайн",
      getInTouch: "Свяжитесь с нами",
      footerDesc: "Независимая исследовательская и общественная платформа о рисках цензуры, подотчетности институтов и цифровом достоинстве человека.",
      statutes: "Устав",
      activities: "Активности",
      stayInformed: "Будьте в курсе",
      support: "Поддержка",
      researchRequests: "Запросы на исследования",
      newsSubscription: "Подписка на новости",
      quarterlyReport: "Запрос отчета",
      charitySponsorship: "Благотворительность",
      emailPlaceholder: "Email для новостей",
      subscribe: "Подписаться",
      digestText: "Ежемесячный дайджест.",
      supportText: "Поддержите независимый мониторинг через Stripe.",
      bottomText: "Права человека, открытое знание, подотчетные системы.",
      whistleblower: "Осведомителям",
      volunteer: "Стать волонтером",
      sponsor: "Для спонсоров",
      cities: "Амстердам · Берлин · Лион · Рига",
      email: "research@hyperboloid.eu"
    },
    nl: {
      siteTitle: "Stichting Hyperboloid | Mensenrechten en vrijheid van meningsuiting",
      brandName: "Hyperboloid",
      brandSubtitle: "Digitale mensenrechten",
      navigation: "Navigatie",
      contactPoint: "Contactpunt",
      berlin: "Berlijn",
      amsterdam: "Amsterdam",
      donateStripe: "Online doneren",
      getInTouch: "Neem contact op",
      footerDesc: "Onafhankelijk onderzoeksplatform gericht op censuurrisico's en digitale waardigheid.",
      statutes: "Statuten",
      activities: "Activiteiten",
      stayInformed: "Blijf op de hoogte",
      support: "Ondersteuning",
      researchRequests: "Onderzoeksaanvragen",
      newsSubscription: "Abonnement op nieuws",
      quarterlyReport: "Kwartaalverslag aanvragen",
      charitySponsorship: "Charity en sponsoring",
      emailPlaceholder: "E-mail voor nieuws",
      subscribe: "Inschrijven",
      digestText: "Maandelijkse digest.",
      supportText: "Steun onafhankelijke monitoring via Stripe.",
      bottomText: "Mensenrechten, open onderzoek, verantwoorde systemen.",
      whistleblower: "Klokkenluidersportaal",
      volunteer: "Vrijwilliger worden",
      sponsor: "Voor sponsoren",
      cities: "Amsterdam · Berlijn · Lyon · Riga",
      email: "research@hyperboloid.eu"
    },
    es: {
      siteTitle: "Stichting Hyperboloid | Derechos humanos y libertad de expresión",
      brandName: "Hyperboloid",
      brandSubtitle: "Derechos digitales humanos",
      navigation: "Navegación",
      contactPoint: "Punto de contacto",
      berlin: "Berlín",
      amsterdam: "Ámsterdam",
      donateStripe: "Donar online",
      getInTouch: "Ponerse en contacto",
      footerDesc: "Plataforma de investigación independiente centrada en los riesgos de censura y la dignidad digital.",
      statutes: "Estatutos",
      activities: "Actividades",
      stayInformed: "Manténgase informado",
      support: "Soporte",
      researchRequests: "Solicitudes de investigación",
      newsSubscription: "Suscripción a noticias",
      quarterlyReport: "Solicitud de informe",
      charitySponsorship: "Caridad y patrocinio",
      emailPlaceholder: "Correo para noticias",
      subscribe: "Suscribirse",
      digestText: "Resumen mensual.",
      supportText: "Apoye el monitoreo independiente vía Stripe.",
      bottomText: "Derechos humanos, investigación abierta, sistemas responsables.",
      whistleblower: "Para denunciantes",
      volunteer: "Convertirse en voluntario",
      sponsor: "Para patrocinadores",
      cities: "Amsterdam · Berlín · Lyon · Riga",
      email: "research@hyperboloid.eu"
    },
    fr: {
      siteTitle: "Stichting Hyperboloid | Droits de l'homme et liberté d'expression",
      brandName: "Hyperboloid",
      brandSubtitle: "Droits numériques humains",
      navigation: "Navigation",
      contactPoint: "Point de contact",
      berlin: "Berlin",
      amsterdam: "Amsterdam",
      donateStripe: "Donner en ligne",
      getInTouch: "Contactez-nous",
      footerDesc: "Plateforme de recherche indépendante axée sur les risques de censure et la dignité numérique.",
      statutes: "Statuts",
      activities: "Activités",
      stayInformed: "Restez informé",
      support: "Support",
      researchRequests: "Demandes de recherche",
      newsSubscription: "Abonnement",
      quarterlyReport: "Demande de rapport",
      charitySponsorship: "Charité et parrainage",
      emailPlaceholder: "E-mail pour les nouvelles",
      subscribe: "S'abonner",
      digestText: "Synthèse mensuelle.",
      supportText: "Soutenez le suivi indépendant via Stripe.",
      bottomText: "Droits de l'homme, enquête ouverte, systèmes responsables.",
      whistleblower: "Pour les lanceurs",
      volunteer: "Devenir bénévole",
      sponsor: "Pour les sponsors",
      cities: "Amsterdam · Berlin · Lyon · Riga",
      email: "research@hyperboloid.eu"
    },
    de: {
      siteTitle: "Stichting Hyperboloid | Menschenrechte und Meinungsfreiheit",
      brandName: "Hyperboloid",
      brandSubtitle: "Digitale Menschenrechte",
      navigation: "Navigation",
      contactPoint: "Kontaktstelle",
      berlin: "Berlin",
      amsterdam: "Amsterdam",
      donateStripe: "Online spenden",
      getInTouch: "Kontakt aufnehmen",
      footerDesc: "Unabhängige Forschungsplattform mit Fokus auf Zensurrisiken und digitale Würde.",
      statutes: "Satzung",
      activities: "Aktivitäten",
      stayInformed: "Bleiben Sie informiert",
      support: "Unterstützung",
      researchRequests: "Forschungsanfragen",
      newsSubscription: "News-Abonnement",
      quarterlyReport: "Bericht anfordern",
      charitySponsorship: "Charity und Sponsoring",
      emailPlaceholder: "E-Mail für News",
      subscribe: "Abonnieren",
      digestText: "Monatlicher Digest.",
      supportText: "Unterstützen Sie unabhängiges Monitoring via Stripe.",
      bottomText: "Menschenrechte, offene Forschung, verantwortungsvolle Systeme.",
      whistleblower: "Whistleblower-Portal",
      volunteer: "Freiwilliger werden",
      sponsor: "Für Sponsoren",
      cities: "Amsterdam · Berlin · Lyon · Riga",
      email: "research@hyperboloid.eu"
    },
    pl: {
      siteTitle: "Stichting Hyperboloid | Prawa człowieka i wolność słowa",
      brandName: "Hyperboloid",
      brandSubtitle: "Cyfrowe prawa człowieka",
      navigation: "Nawigacja",
      contactPoint: "Punkt kontaktu",
      berlin: "Berlin",
      amsterdam: "Amsterdam",
      donateStripe: "Przekaż online",
      getInTouch: "Skontaktuj się",
      footerDesc: "Niezależna platforma badawcza skupiona na ryzyku cenzury i cyfrowej godności.",
      statutes: "Statut",
      activities: "Aktywności",
      stayInformed: "Bądź na bieżąco",
      support: "Wsparcie",
      researchRequests: "Zapytania badawcze",
      newsSubscription: "Subskrypcja",
      quarterlyReport: "Zapytanie o raport",
      charitySponsorship: "Charytatywność i sponsoring",
      emailPlaceholder: "Email dla wiadomości",
      subscribe: "Subskrybuj",
      digestText: "Miesięczny przegląd.",
      supportText: "Wspieraj niezależny monitoring przez Stripe.",
      bottomText: "Prawa człowieka, otwarte badania, odpowiedzialne systemy.",
      whistleblower: "Portal dla sygnalistów",
      volunteer: "Zostań wolontariuszem",
      sponsor: "Dla sponsorów",
      cities: "Amsterdam · Berlin · Lyon · Ryga",
      email: "research@hyperboloid.eu"
    }
  }[lang];

  // Функция переключения: меняет только языковой сегмент в URL
  const switchLanguage = (newLang: Language) => {
    if (newLang === lang) return;

    const pathSegments = location.pathname.split('/').filter(Boolean);

    // Если в URL первым идет текущий язык, заменяем его
    if (languages.includes(pathSegments[0] as Language)) {
      pathSegments[0] = newLang;
    } else {
      pathSegments.unshift(newLang);
    }

    const nextPath = '/' + pathSegments.join('/') + location.search;
    navigate(nextPath);
  };

  const buildPath = (path: string) => buildRoute(lang, path);

  return (
    <div className="relative bg-[#050505] text-white min-h-screen font-sans selection:bg-brand-accent selection:text-white">
      <Helmet>
        <title>{t.siteTitle}</title>
        <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
        <meta property="og:site_name" content="Hyperboloid Stichting" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={lang === "ru" ? "ru_RU" : "en_US"} />
        <meta name="twitter:site" content="@hyperboloid_org" />
      </Helmet>

      {/* Задний план: эффект свечения */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-accent/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-500/5 blur-[150px] rounded-full" />
      </div>

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 p-4 md:p-8 flex justify-between items-center z-[200] backdrop-blur-3xl bg-black/40 border-b border-white/20">
        <Link
          to={buildPath("/")}
          className="flex items-center gap-3 md:gap-5 cursor-pointer group relative z-[220]"
          onClick={(e) => {
            e.stopPropagation();
            setMenuOpen(false);
            setLanguageModalOpen(false);
          }}
        >
          <HyperboloidLogo className="w-10 h-12 md:w-14 md:h-16 group-hover:scale-105 transition-transform duration-500" />
          <div className="flex flex-col max-w-[150px] md:max-w-none">
            <span className="font-display font-black text-lg md:text-3xl tracking-tight uppercase leading-tight text-white truncate">
              {t.brandName}
            </span>
            <motion.span
              key={typeKey}
              className="text-[4px] md:text-[6px] font-bold uppercase tracking-[0.4em] mt-1 whitespace-nowrap overflow-hidden flex"
              animate={{ color: ["#3b82f6", "#991b1b", "#3b82f6"] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              {t.brandSubtitle.split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.1,
                    delay: i * (5 / t.brandSubtitle.length)
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.span>
          </div>
        </Link>

        <div className="flex items-center gap-1 md:gap-6 relative z-[220]">
          <div className="hidden md:block">
            <LanguageSwitcher
              currentLang={lang}
              onChangeLanguage={switchLanguage}
              variant="dropdown"
              size="sm"
            />
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); setLanguageModalOpen(true); }}
            className="md:hidden flex items-center gap-1.5 px-3 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-black tracking-widest uppercase hover:bg-white/10 transition-colors"
          >
            <Globe className="w-3 h-3 text-brand-accent" />
            {lang}
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); setMenuOpen(!menuOpen); }}
            className="w-10 h-10 md:w-14 md:h-14 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full flex items-center justify-center hover:bg-white/10 transition-all hover:scale-105 active:scale-95"
          >
            {menuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
          </button>
        </div>
      </header>

      {/* FULLSCREEN NAVIGATION MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-[#050505] z-[190] p-6 md:p-12 flex flex-col justify-between overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-12">
              <div className="flex items-center gap-4">
                <div className="text-[10px] uppercase tracking-[0.35em] text-brand-accent font-black">
                  {t.navigation}
                </div>
                <div className="h-[1px] w-12 bg-white/10" />
                <button
                  onClick={() => { setMenuOpen(false); setActiveModal("sos"); }}
                  className="px-3 py-1 bg-red-600/20 border border-red-600/40 text-red-500 rounded text-[9px] font-black uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all"
                >
                  SOS
                </button>
              </div>
              <button onClick={() => setMenuOpen(false)} className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 transition-all">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="container mx-auto grid lg:grid-cols-2 gap-12 md:gap-24 flex-grow py-12">
              {/* COLUMN 1: Main Menu */}
              <div className="flex flex-col gap-6">
                <div className="text-[10px] uppercase tracking-[0.35em] text-brand-accent font-black mb-4">
                  {t.navigation}
                </div>
                {navItems.map((item, i) => (
                  <motion.div key={item.path} initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}>
                    <Link
                      to={buildPath(item.path)}
                      onClick={() => setMenuOpen(false)}
                      className={`text-5xl md:text-6xl font-display font-black uppercase text-left tracking-tighter hover:text-brand-accent transition-colors hover:italic ${location.pathname === buildPath(item.path) ? "text-brand-accent italic" : ""}`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* COLUMN 2: Contact, Socials, Modals, Languages */}
              <div className="flex flex-col justify-between gap-12 border-l border-white/10 pl-8 lg:pl-16">
                {/* Contact & Socials */}
                <div className="space-y-10">
                  <div className="space-y-4">
                    <span className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-500">
                      {t.contactPoint}
                    </span>
                    <p className="text-2xl font-light text-gray-300 break-all">{t.email}</p>
                    <p className="text-sm font-bold text-brand-accent tracking-[0.2em] uppercase">{t.cities}</p>
                  </div>

                  <div className="flex gap-6 items-center">
                    <a href="https://linkedin.com/company/hyperboloid-eu/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-brand-accent transition-colors">
                      <Linkedin className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-brand-accent transition-colors">
                      <Youtube className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-brand-accent transition-colors">
                      <Newspaper className="w-6 h-6" />
                    </a>
                  </div>
                </div>

                {/* Modal Links */}
                <div className="space-y-6">
                  <button
                    onClick={() => { setMenuOpen(false); setActiveModal("subscribe"); }}
                    className="flex items-center gap-3 text-lg font-bold text-gray-400 hover:text-brand-accent transition-colors uppercase tracking-widest"
                  >
                    <AlertCircle className="w-5 h-5" /> {t.newsSubscription}
                  </button>
                  <button
                    onClick={() => { setMenuOpen(false); setActiveModal("feedback"); }}
                    className="flex items-center gap-3 text-lg font-bold text-gray-400 hover:text-brand-accent transition-colors uppercase tracking-widest"
                  >
                    <HelpCircle className="w-5 h-5" /> {t.getInTouch}
                  </button>
                  <button
                    onClick={() => { setMenuOpen(false); setActiveModal("sos"); }}
                    className="flex items-center gap-3 text-lg font-bold text-gray-400 hover:text-brand-accent transition-colors uppercase tracking-widest"
                  >
                    <ShieldAlert className="w-5 h-5" /> {t.whistleblower}
                  </button>
                  <button
                    onClick={() => { setMenuOpen(false); setActiveModal("sos"); }} // Use a dedicated sponsor modal if available, or SOS for now
                    className="flex items-center gap-3 text-lg font-bold text-gray-400 hover:text-brand-accent transition-colors uppercase tracking-widest"
                  >
                    <Heart className="w-5 h-5" /> {t.sponsor}
                  </button>
                </div>

                {/* Languages List */}
                <div className="pt-10 border-t border-white/10">
                  <span className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-500 mb-6 block">
                    Languages
                  </span>
                  <div className="flex flex-wrap gap-x-8 gap-y-4">
                    {languages.map((l) => (
                      <button
                        key={l}
                        onClick={() => { switchLanguage(l); setMenuOpen(false); }}
                        className={`text-xl font-black uppercase tracking-tighter transition-colors ${lang === l ? "text-brand-accent" : "text-gray-500 hover:text-white"}`}
                      >
                        {l}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-12 border-t border-white/10 flex flex-col md:flex-row gap-6">
              <a href={stripeDonationLink} target="_blank" rel="noreferrer" className="flex-1 inline-flex items-center justify-center gap-3 rounded-2xl border border-brand-accent px-5 py-3 text-xs font-black uppercase tracking-[0.25em] text-brand-accent hover:bg-brand-accent hover:text-white transition-colors" onClick={() => setMenuOpen(false)}>
                {t.donateStripe}
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link to={buildPath("/contact")} onClick={() => setMenuOpen(false)} className="flex-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-white/5 border border-white/10 px-5 py-3 text-xs font-black uppercase tracking-[0.25em] hover:bg-white/10 transition-colors">
                {t.getInTouch}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* LANGUAGE SELECTION MODAL (MOBILE) */}
      <AnimatePresence>
        {languageModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[250] flex items-center justify-center p-6 backdrop-blur-xl bg-black/80 md:hidden"
            onClick={() => setLanguageModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 w-full max-w-sm relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-[10px] uppercase tracking-[0.35em] text-brand-accent font-black mb-8 text-center">
                Select Language
              </div>
              <div className="grid grid-cols-2 gap-4">
                {languages.map((l) => (
                  <button
                    key={l}
                    onClick={() => { switchLanguage(l); setLanguageModalOpen(false); }}
                    className={`py-4 rounded-xl border font-bold uppercase tracking-widest transition-all ${lang === l
                      ? "bg-brand-accent border-brand-accent text-black shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                      : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10"
                      }`}
                  >
                    {l}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setLanguageModalOpen(false)}
                className="mt-8 w-full py-3 bg-white/5 text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-white/10 transition-colors"
              >
                {t.close || "Close"}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setActiveModal("sos")}
        className="fixed bottom-8 left-8 z-[150] w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(220,38,38,0.6)] hover:scale-110 active:scale-95 transition-all group overflow-hidden animate-pulse hover:animate-none"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <path id="circlePathTop" d="M 15, 50 a 35,35 0 1,1 70,0" />
            <path id="circlePathBottom" d="M 85, 50 a 35,35 0 1,1 -70,0" />
          </defs>
          <text className="text-[9px] font-black fill-white uppercase tracking-[0.2em]">
            <textPath href="#circlePathTop" startOffset="50%" textAnchor="middle">Interpol</textPath>
          </text>
          <text className="text-[9px] font-black fill-white uppercase tracking-[0.2em]">
            <textPath href="#circlePathBottom" startOffset="50%" textAnchor="middle">FATF</textPath>
          </text>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl font-black text-white uppercase tracking-tighter">SOS</span>
        </div>
        <span className="absolute left-full ml-4 px-3 py-1 bg-red-600 text-white text-[10px] font-black uppercase tracking-widest rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          Incident Report
        </span>
      </button>

      {/* MODALS */}
      <AnimatePresence>
        {activeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] flex items-center justify-center p-6 backdrop-blur-md bg-black/60"
            onClick={() => setActiveModal(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 md:p-12 max-w-xl w-full relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {activeModal === "subscribe" && (
                <div className="space-y-6">
                  <div className="w-12 h-12 bg-brand-accent/20 rounded-2xl flex items-center justify-center text-brand-accent">
                    <AlertCircle className="w-6 h-6" />
                  </div>
                  <h3 className="text-3xl font-display font-black uppercase tracking-tight">
                    {uiLabels.subscribe.title[lang] || "Subscription"}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {uiLabels.subscribe.message[lang] || "Check LinkedIn."}
                  </p>
                  <a
                    href="https://linkedin.com/company/hyperboloid-eu/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center w-full gap-3 bg-[#0077B5] text-white rounded-2xl py-4 font-black uppercase tracking-widest hover:opacity-90 transition-opacity"
                  >
                    LinkedIn
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              )}

              {activeModal === "feedback" && (
                <div className="space-y-6">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-2xl flex items-center justify-center text-purple-400">
                    <HandHeart className="w-6 h-6" />
                  </div>
                  <h3 className="text-3xl font-display font-black uppercase tracking-tight">
                    {uiLabels.feedback.title[lang] || "Feedback"}
                  </h3>
                  <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setActiveModal(null); }}>
                    <input type="text" placeholder="Identity" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 outline-none focus:border-brand-accent" />
                    <textarea rows={4} placeholder="Message" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 outline-none focus:border-brand-accent resize-none" />
                    <button className="w-full bg-brand-accent py-4 rounded-xl font-black uppercase tracking-widest hover:opacity-90 transition-opacity">
                      {uiLabels.feedback.submit[lang] || "Submit"}
                    </button>
                  </form>
                </div>
              )}

              {activeModal === "sos" && (
                <div className="space-y-6">
                  <div className="w-12 h-12 bg-red-600/20 rounded-2xl flex items-center justify-center text-red-500">
                    <ShieldAlert className="w-6 h-6" />
                  </div>
                  <h3 className="text-3xl font-display font-black uppercase tracking-tight">
                    {uiLabels.sos.title[lang] || "Urgent Report"}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {uiLabels.sos.desc[lang]}
                  </p>
                  <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setActiveModal(null); }}>
                    <div className="grid grid-cols-2 gap-4">
                      {["Interpol", "FATF", "Egmont", "PNR"].map(org => (
                        <label key={org} className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-xl cursor-pointer hover:bg-white/10 transition-colors">
                          <input type="checkbox" className="w-4 h-4 accent-red-600" />
                          <span className="text-xs font-bold uppercase tracking-widest">{org}</span>
                        </label>
                      ))}
                    </div>
                    <textarea rows={3} placeholder="Incident details" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 outline-none focus:border-red-600 resize-none" />
                    <button className="w-full bg-red-600 py-4 rounded-xl font-black uppercase tracking-widest hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(220,38,38,0.3)]">
                      {uiLabels.feedback.submit[lang]}
                    </button>
                  </form>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MAIN CONTENT AREA */}
      <main className="relative z-10">{children}</main>

      {/* FOOTER */}
      <footer className="mt-20 w-full border-t border-white/10 bg-black/40 backdrop-blur-2xl relative z-20">
        <div className="container mx-auto px-6 md:px-12 py-16 grid xl:grid-cols-4 md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <div className="text-[10px] uppercase tracking-[0.35em] text-brand-accent font-black">Foundation</div>
            <p className="text-xl font-display font-bold">Stichting Hyperboloid</p>
            <p className="text-sm text-gray-400 leading-relaxed">
              {t.footerDesc}
            </p>
            <a href="#" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] hover:text-brand-accent transition-colors">
              <ExternalLink className="w-3 h-3" /> {t.statutes}
            </a>
            <div className="text-[11px] text-gray-500">KvK 88992211 | RSIN 865223120 | Netherlands · {t.cities}</div>
          </div>

          <div className="space-y-4">
            <div className="text-[10px] uppercase tracking-[0.35em] text-brand-accent font-black">{t.activities}</div>
            <div className="space-y-3 text-sm text-gray-300">
              <button className="flex items-center gap-3 hover:text-brand-accent text-left" onClick={() => setActiveModal("sos")}><LifeBuoy className="w-4 h-4" />{t.whistleblower}</button>
              <button className="flex items-center gap-3 hover:text-brand-accent text-left" onClick={() => setActiveModal("subscribe")}><AlertCircle className="w-4 h-4" />{t.newsSubscription}</button>
              <Link className="flex items-center gap-3 hover:text-brand-accent" to={buildPath('/governance')}><FileText className="w-4 h-4" />{t.quarterlyReport}</Link>
              <button className="flex items-center gap-3 hover:text-brand-accent text-left" onClick={() => setActiveModal("feedback")}><HandHeart className="w-4 h-4" />{t.charitySponsorship}</button>
            </div>
          </div>

          <div className="space-y-4">
            <div className="text-[10px] uppercase tracking-[0.35em] text-brand-accent font-black">{t.stayInformed}</div>
            <form className="space-y-3" onSubmit={(e) => { e.preventDefault(); setActiveModal("subscribe"); }}>
              <input type="email" required placeholder={t.emailPlaceholder} className="w-full rounded-2xl bg-white/5 border border-white/10 px-5 py-3 text-sm outline-none focus:border-brand-accent" />
              <button className="w-full rounded-2xl bg-brand-accent py-3 text-xs font-black uppercase tracking-[0.2em] hover:opacity-90 transition-opacity">
                {t.subscribe}
              </button>
            </form>
            <p className="text-xs text-gray-500">{t.digestText}</p>
          </div>

          <div className="space-y-4">
            <div className="text-[10px] uppercase tracking-[0.35em] text-brand-accent font-black">{t.support}</div>
            <p className="text-sm text-gray-300 leading-relaxed">
              {t.supportText}
            </p>
            <a href={stripeDonationLink} target="_blank" rel="noreferrer" className="inline-flex w-full items-center justify-center gap-3 rounded-2xl border border-brand-accent px-5 py-3 text-xs font-black uppercase tracking-[0.25em] text-brand-accent hover:bg-brand-accent hover:text-white transition-colors">
              {t.donateStripe}
              <ArrowRight className="w-4 h-4" />
            </a>
            <button onClick={() => setActiveModal("sos")} className="text-xs uppercase tracking-[0.2em] text-gray-300 hover:text-brand-accent text-left">
              {t.quarterlyReport}
            </button>
          </div>
        </div>
        <div className="border-t border-white/10 py-5 px-6 md:px-12 text-[10px] uppercase tracking-[0.22em] text-gray-500 flex flex-col md:flex-row justify-between gap-3">
          <span>© 2026 Hyperboloid Stichting</span>
          <span>{t.bottomText}</span>
        </div>
      </footer>
    </div>
  );
}