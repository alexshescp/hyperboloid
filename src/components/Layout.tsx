import { useState, ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowRight, ExternalLink } from "lucide-react";

type Language = "en" | "ru";

function HyperboloidLogo({ className }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      {/* Vibrant Background Glow */}
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
                x1={x1} y1={y1} x2={x2} y2={y2} 
              />
            );
          })}
        </g>
      </svg>
    </div>
  );
}

const navItems = [
  { path: "/", labelEn: "Home", labelRu: "Главная" },
  { path: "/research", labelEn: "Research", labelRu: "Исследования" },
  { path: "/roadmap", labelEn: "Roadmap", labelRu: "План" },
  { path: "/publications", labelEn: "Publications", labelRu: "Публикации" },
  { path: "/governance", labelEn: "Governance", labelRu: "Управление" },
  { path: "/contact", labelEn: "Contact", labelRu: "Контакт" },
];

export function Layout({ children, lang, setLang }: { children: ReactNode; lang: Language; setLang: (l: Language) => void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="relative bg-[#050505] text-white min-h-screen font-sans selection:bg-brand-accent selection:text-white">
      {/* Background Artifacts */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-accent/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-500/5 blur-[150px] rounded-full" />
      </div>

      <header className="fixed top-0 left-0 right-0 p-4 md:p-8 flex justify-between items-center z-[200] backdrop-blur-3xl bg-black/10 border-b border-white/5">
        <Link to="/" className="flex items-center gap-5 cursor-pointer group">
          <HyperboloidLogo className="w-14 h-16 group-hover:scale-105 transition-transform duration-500" />
          <div className="flex flex-col">
            <span className="font-display font-black text-2xl md:text-3xl tracking-[-0.05em] uppercase leading-tight text-white">
              {lang === 'ru' ? 'Гиперболоид' : 'Hyperboloid'}
            </span>
            <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-[0.4em] text-cyan-400 mt-1 whitespace-nowrap">
              {lang === 'ru' ? 'ПРАВА ЧЕЛОВЕКА И СВОБОДА СЛОВА' : 'HUMAN RIGHTS & FREEDOM OF SPEECH'}
            </span>
          </div>
        </Link>
        
        <div className="flex items-center gap-4 md:gap-8">
           <button 
             onClick={() => setLang(lang === 'en' ? 'ru' : 'en')}
             className="hidden md:flex px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-black tracking-widest hover:bg-white/10 transition-all uppercase"
           >
             {lang === 'en' ? 'RU' : 'EN'}
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
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setMenuOpen(false)}
                      className={`text-5xl md:text-8xl font-display font-black uppercase text-left tracking-tighter hover:text-brand-accent transition-colors hover:italic ${location.pathname === item.path ? 'text-brand-accent italic' : ''}`}
                    >
                      {lang === 'ru' ? item.labelRu : item.labelEn}
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
                    <button onClick={() => setLang("en")} className={`text-xl font-bold ${lang === 'en' ? 'text-brand-accent' : 'text-gray-600'}`}>EN</button>
                    <button onClick={() => setLang("ru")} className={`text-xl font-bold ${lang === 'ru' ? 'text-brand-accent' : 'text-gray-600'}`}>RU</button>
                 </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-24 md:pt-32">
        {children}
      </main>

      <footer className="mt-20 w-full border-t border-white/5 p-10 flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex flex-col gap-2">
          <div className="flex gap-10 items-center text-[10px] font-black uppercase tracking-[0.2em] text-gray-300">
            <span className="text-brand-primary">Stichting Hyperboloid</span>
            <a href="#" className="hover:text-brand-accent flex items-center gap-2"><ExternalLink className="w-3 h-3" /> {lang === 'ru' ? 'Устав' : 'Statuten'}</a>
          </div>
          <div className="text-[9px] text-gray-400 font-medium">KvK 88992211 | RSIN 865223120 | Netherlands</div>
        </div>
        <div className="flex gap-10 items-center">
           <div className="flex gap-6">
             {["X", "Twitter", "Telegram", "Secure Mail"].map(l => (
               <a key={l} href="#" className="text-[10px] font-black uppercase tracking-widest hover:text-brand-accent">{l}</a>
             ))}
           </div>
           <span className="text-[9px] text-gray-300 font-bold uppercase tracking-widest">Est. 2026</span>
        </div>
      </footer>
    </div>
  );
}
