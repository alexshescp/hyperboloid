import { BrowserRouter as Router, Routes, Route, Navigate, Outlet, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Layout } from "./components/Layout";
import { siteContent, isLanguage } from "./i18n";
import { Language } from "./types";
import Home from "./pages/Home";
import Research from "./pages/Research";
import Roadmap from "./pages/Roadmap";
import Publications from "./pages/Publications";
import Governance from "./pages/Governance";
import Contact from "./pages/Contact";

const LANG_STORAGE_KEY = "hyperboloid-lang";

function resolveInitialLanguage(): Language {
  if (typeof window === "undefined") {
    return "en";
  }

  const storedLanguage = window.localStorage.getItem(LANG_STORAGE_KEY);
  if (storedLanguage && isLanguage(storedLanguage)) {
    return storedLanguage;
  }

  const browserLanguage = window.navigator.language.toLowerCase();
  if (browserLanguage.startsWith("ru")) return "ru";
  if (browserLanguage.startsWith("nl")) return "nl";
  if (browserLanguage.startsWith("es")) return "es";
  if (browserLanguage.startsWith("fr")) return "fr";
  if (browserLanguage.startsWith("de")) return "de";
  if (browserLanguage.startsWith("pl")) return "pl";
  return "en";
}

function LanguageLayout({ setLang }: { setLang: (lang: Language) => void }) {
  const params = useParams();
  const navigate = useNavigate();
  const currentLang = params.lang && isLanguage(params.lang) ? params.lang : resolveInitialLanguage();

  useEffect(() => {
    if (!params.lang || params.lang !== currentLang) {
      navigate(`/${currentLang}/`, { replace: true });
    }
  }, [params.lang, currentLang, navigate]);

  useEffect(() => {
    setLang(currentLang);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(LANG_STORAGE_KEY, currentLang);
      document.documentElement.lang = currentLang;
    }
  }, [currentLang, setLang]);

  return (
    <Layout lang={currentLang} setLang={setLang}>
      <Outlet />
    </Layout>
  );
}

export default function App() {
  const [lang, setLang] = useState<Language>(() => resolveInitialLanguage());

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={`/${lang}/`} replace />} />
        <Route path="/:lang/*" element={<LanguageLayout setLang={setLang} />}>
          <Route index element={<Home lang={lang} />} />
          <Route path="research" element={<Research lang={lang} />} />
          <Route path="roadmap" element={<Roadmap lang={lang} />} />
          <Route path="publications" element={<Publications lang={lang} />} />
          <Route path="governance" element={<Governance lang={lang} />} />
          <Route path="contact" element={<Contact lang={lang} />} />
        </Route>
        <Route path="*" element={<Navigate to={`/${lang}/`} replace />} />
      </Routes>
    </Router>
  );
}
