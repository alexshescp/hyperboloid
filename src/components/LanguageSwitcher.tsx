import { motion } from "motion/react";
import { Check } from "lucide-react";
import { Language } from "../types";
import { siteContent } from "../i18n";

interface LanguageSwitcherProps {
  currentLang: Language;
  onChangeLanguage: (lang: Language) => void;
  variant?: "horizontal" | "vertical" | "dropdown";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function LanguageSwitcher({
  currentLang,
  onChangeLanguage,
  variant = "horizontal",
  size = "md",
  className = "",
}: LanguageSwitcherProps) {
  const languages = siteContent.languages as Language[];

  const sizeClasses = {
    sm: {
      button: "px-2 py-1 text-xs",
      text: "text-xs",
    },
    md: {
      button: "px-3 py-2 text-sm",
      text: "text-sm",
    },
    lg: {
      button: "px-4 py-3 text-base",
      text: "text-base",
    },
  };

  if (variant === "dropdown") {
    return (
      <div className={`relative group ${className}`}>
        <button className={`flex items-center gap-2 bg-white/5 border border-white/10 rounded-full font-black tracking-widest hover:bg-white/10 transition-all uppercase ${sizeClasses[size].button}`}>
          {currentLang.toUpperCase()}
          <svg className="w-3 h-3 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>

        {/* Dropdown Menu Wrapper with padding to bridge the gap */}
        <div className="absolute top-full left-0 -mt-2 pt-4 hidden group-hover:block z-50">
          <div className="bg-black/95 border border-white/10 rounded-lg overflow-hidden shadow-xl min-w-32">
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => onChangeLanguage(lang as Language)}
                className={`w-full px-4 py-2 text-left text-sm font-bold uppercase tracking-wider transition-colors flex items-center justify-between ${
                  currentLang === lang
                    ? "bg-brand-accent/20 text-brand-accent"
                    : "text-gray-300 hover:bg-white/5"
                }`}
              >
                {lang.toUpperCase()}
                {currentLang === lang && <Check className="w-4 h-4" />}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (variant === "vertical") {
    return (
      <div className={`flex flex-col gap-3 ${className}`}>
        <div className="text-[10px] uppercase tracking-[0.35em] text-brand-accent font-black">
          {currentLang === "en" ? "Languages" : "Языки"}
        </div>
        <div className="flex flex-wrap gap-2">
          {languages.map((lang) => (
            <motion.button
              key={lang}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onChangeLanguage(lang as Language)}
              className={`px-4 py-2 rounded-full font-bold uppercase tracking-wider transition-all ${
                currentLang === lang
                  ? "bg-brand-accent text-black"
                  : "bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10"
              } ${sizeClasses[size].button}`}
            >
              {lang.toUpperCase()}
            </motion.button>
          ))}
        </div>
      </div>
    );
  }

  // horizontal variant
  return (
    <div className={`flex gap-2 items-center ${className}`}>
      {languages.map((lang) => (
        <motion.button
          key={lang}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onChangeLanguage(lang as Language)}
          className={`font-bold uppercase tracking-wider transition-all rounded-lg ${
            currentLang === lang
              ? "text-brand-accent font-black"
              : "text-gray-400 hover:text-gray-200"
          } ${sizeClasses[size].text}`}
        >
          {lang.toUpperCase()}
        </motion.button>
      ))}
    </div>
  );
}
