import { useState, ReactNode } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowRight, ExternalLink, Send, HandHeart, FileText, Sparkles } from "lucide-react";
import { Helmet } from "react-helmet";
import { siteContent, languages, buildRoute } from "../i18n";
import { Language } from "../types";

function HyperboloidLogo({ className }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 bg-brand-accent/20 blur-xl rounded-full scale-75 animate-pulse" />
      <svg viewBox="0 0 200 240" className="w-full h-full relative z-10 drop-shadow-[0_0_20px_rgba(34,211,238,0.5)]">
        <defs>
          <linearGradient id="hyperGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E879F9" />
            <stop offset="50%" stopColor="#60A5FA" />
            <stop offset="100%" stopColor="#22D3EE" />
          </linearGradient>
        </defs>
        <g fill="none" stroke="url(#hyperGradient)" strokeWidth="0.6" opacity="0.7">
          {Array.from({ length: 18 }).map((_, i) => {
            const y = 30 + i * 8.5;
            const t = Math.abs((y - 105) / 75);
            const rx = 40 + t * 40;
            const ry = 10 + t * 10;
            return <ellipse key={`e-${i}`} cx="100" cy={y} rx={rx} ry={ry} />;
          })}
        </g>
        <g fill="none" stroke="url(#hyperGradient)" strokeWidth="1.2" opacity="0.9">
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
      </svg>
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

export function Layout({ children, lang, setLang }: { children: ReactNode; lang: Language; setLang: (l: Language) => void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isEn = lang === "en";
  const navItems = getNavItems(lang);
  const languageRegex = new RegExp(`^/(${languages.join("|")})`);

  const switchLanguage = (newLang: Language) => {
    const nextPath = location.pathname.replace(languageRegex, `/${newLang}`);
    setLang(newLang);
    navigate(nextPath);
  };

  const buildPath = (path: string) => buildRoute(lang, path);

  return (
    <div className="relative bg-[#050505] text-white min-h-screen font-sans selection:bg-brand-accent selection:text-white">
      <Helmet>
        <title>Hyperboloid Stichting | Human Rights and Freedom of Speech</title>
        <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
        <meta property="og:site_name" content="Hyperboloid Stichting" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={isEn ? "en_US" : "ru_RU"} />
        <meta property="og:locale:alternate" content={isEn ? "ru_RU" : "en_US"} />
        <meta name="twitter:site" content="@hyperboloid_org" />
        <meta name="twitter:title" content="Hyperboloid Stichting | Human Rights and Freedom of Speech" />
        <meta
          name="twitter:description"
          content={
            isEn
              ? "Independent research, civic monitoring, and digital-rights literacy for Europe and beyond."
              : "Независимые исследования, гражданский мониторинг и цифровая грамотность в сфере прав человека."
          }
        />
      </Helmet>

      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-accent/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-500/5 blur-[150px] rounded-full" />
      </div>

      <header className="fixed top-0 left-0 right-0 p-4 md:p-8 flex justify-between items-center z-[200] backdrop-blur-3xl bg-black/10 border-b border-white/5">
        <Link to={buildPath("/")} className="flex items-center gap-5 cursor-pointer group">
          <HyperboloidLogo className="w-14 h-16 group-hover:scale-105 transition-transform duration-500" />
          <div className="flex flex-col">
            <span className="font-display font-black text-2xl md:text-3xl tracking-[-0.05em] uppercase leading-tight text-white">
              {isEn ? "Hyperboloid" : "Гиперболоид"}
            </span>
            <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-[0.4em] text-cyan-400 mt-1 whitespace-nowrap">
              {isEn ? "HUMAN RIGHTS & FREEDOM OF SPEECH" : "ПРАВА ЧЕЛОВЕКА И СВОБОДА СЛОВА"}
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-4 md:gap-8">
          <button
            onClick={() => switchLanguage(isEn ? "ru" : "en")}
            className="hidden md:flex px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-black tracking-widest hover:bg-white/10 transition-all uppercase"
          >
            {isEn ? "RU" : "EN"}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-12 h-12 md:w-14 md:h-14 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full flex items-center justify-center hover:bg-white/10 transition-all hover:scale-105 active:scale-95"
          >
            {menuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-[#050505] z-[190] p-10 md:p-20 flex flex-col justify-center"
          >
            <div className="container mx-auto grid lg:grid-cols-2 gap-20">
              <div className="flex flex-col gap-4">
                {navItems.map((item, i) => (
                  <motion.div key={item.path} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}>
                    <Link
                      to={buildPath(item.path)}
                      onClick={() => setMenuOpen(false)}
                      className={`text-5xl md:text-8xl font-display font-black uppercase text-left tracking-tighter hover:text-brand-accent transition-colors hover:italic ${location.pathname === buildPath(item.path) ? "text-brand-accent italic" : ""}`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
              <div className="flex flex-col justify-end gap-10 border-l border-white/10 pl-10 hidden lg:flex">
                <div className="space-y-6">
                  <span className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-500">Contact Point</span>
                  <p className="text-2xl font-light text-gray-400">research@hyperboloid.foundation</p>
                  <div className="flex gap-4">
                    <div className="px-4 py-2 bg-white/5 rounded-full text-xs font-bold uppercase tracking-widest">Berlin</div>
                    <div className="px-4 py-2 bg-white/5 rounded-full text-xs font-bold uppercase tracking-widest">Amsterdam</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  {languages.map((language) => (
                    <button
                      key={language}
                      onClick={() => switchLanguage(language)}
                      className={`text-xl font-bold ${lang === language ? "text-brand-accent" : "text-gray-600"}`}
                    >
                      {language.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-24 md:pt-32">{children}</main>

      <footer className="mt-20 w-full border-t border-white/10 bg-black/40 backdrop-blur-2xl">
        <div className="container mx-auto px-6 md:px-12 py-16 grid xl:grid-cols-4 md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <div className="text-[10px] uppercase tracking-[0.35em] text-brand-accent font-black">Foundation</div>
            <p className="text-xl font-display font-bold">Stichting Hyperboloid</p>
            <p className="text-sm text-gray-400 leading-relaxed">
              {isEn
                ? "Independent research and civic response platform focused on censorship risks, institutional accountability, and digital dignity."
                : "Независимая исследовательская и общественная платформа о рисках цензуры, подотчетности институтов и цифровом достоинстве человека."}
            </p>
            <a href="#" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] hover:text-brand-accent transition-colors">
              <ExternalLink className="w-3 h-3" /> {isEn ? "Statutes" : "Устав"}
            </a>
            <div className="text-[11px] text-gray-500">KvK 88992211 | RSIN 865223120 | Netherlands</div>
          </div>

          <div className="space-y-4">
            <div className="text-[10px] uppercase tracking-[0.35em] text-brand-accent font-black">{isEn ? "Activities" : "Активности"}</div>
            <div className="space-y-3 text-sm text-gray-300">
              <a className="flex items-center gap-3 hover:text-brand-accent" href={buildPath('/research')}><Sparkles className="w-4 h-4" />{isEn ? "Research requests" : "Запросы на исследования"}</a>
              <a className="flex items-center gap-3 hover:text-brand-accent" href={buildPath('/contact')}><Send className="w-4 h-4" />{isEn ? "News & reports subscription" : "Подписка на новости и отчеты"}</a>
              <a className="flex items-center gap-3 hover:text-brand-accent" href={buildPath('/governance')}><FileText className="w-4 h-4" />{isEn ? "Quarterly report request" : "Запрос квартального отчета"}</a>
              <a className="flex items-center gap-3 hover:text-brand-accent" href={buildPath('/contact')}><HandHeart className="w-4 h-4" />{isEn ? "Charity and sponsorship" : "Благотворительность и спонсорство"}</a>
            </div>
          </div>

          <div className="space-y-4">
            <div className="text-[10px] uppercase tracking-[0.35em] text-brand-accent font-black">{isEn ? "Stay informed" : "Будьте в курсе"}</div>
            <form className="space-y-3" onSubmit={(event) => event.preventDefault()}>
              <input
                type="email"
                required
                placeholder={isEn ? "Email for news and research" : "Email для новостей и исследований"}
                className="w-full rounded-2xl bg-white/5 border border-white/10 px-5 py-3 text-sm outline-none focus:border-brand-accent"
              />
              <button className="w-full rounded-2xl bg-brand-accent py-3 text-xs font-black uppercase tracking-[0.2em] hover:opacity-90 transition-opacity">
                {isEn ? "Subscribe" : "Подписаться"}
              </button>
            </form>
            <p className="text-xs text-gray-500">{isEn ? "Monthly digest, alerts, and publication announcements." : "Ежемесячный дайджест, срочные уведомления и анонсы публикаций."}</p>
          </div>

          <div className="space-y-4">
            <div className="text-[10px] uppercase tracking-[0.35em] text-brand-accent font-black">{isEn ? "Support" : "Поддержка"}</div>
            <p className="text-sm text-gray-300 leading-relaxed">
              {isEn
                ? "Support independent monitoring. You can donate online via Stripe or request a sponsorship package with impact metrics and quarterly transparency reports."
                : "Поддержите независимый мониторинг. Вы можете сделать онлайн-пожертвование через Stripe или запросить спонсорский пакет с метриками и квартальной прозрачной отчетностью."}
            </p>
            <a
              href={stripeDonationLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-3 rounded-2xl border border-brand-accent px-5 py-3 text-xs font-black uppercase tracking-[0.25em] text-brand-accent hover:bg-brand-accent hover:text-white transition-colors"
            >
              {isEn ? "Donate via Stripe" : "Пожертвовать через Stripe"}
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="mailto:reports@hyperboloid.foundation" className="text-xs uppercase tracking-[0.2em] text-gray-300 hover:text-brand-accent">
              {isEn ? "Request quarterly report" : "Запросить квартальный отчет"}
            </a>
          </div>
        </div>
        <div className="border-t border-white/10 py-5 px-6 md:px-12 text-[10px] uppercase tracking-[0.22em] text-gray-500 flex flex-col md:flex-row gap-3 justify-between">
          <span>© 2026 Hyperboloid Stichting</span>
          <span>{isEn ? "Human rights, open inquiry, accountable systems." : "Права человека, открытое знание, подотчетные системы."}</span>
        </div>
      </footer>
    </div>
  );
}
