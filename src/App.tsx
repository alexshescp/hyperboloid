import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { Layout } from "./components/Layout";
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
  if (storedLanguage === "en" || storedLanguage === "ru") {
    return storedLanguage;
  }

  const browserLanguage = window.navigator.language.toLowerCase();
  return browserLanguage.startsWith("ru") ? "ru" : "en";
}

export default function App() {
  const [lang, setLang] = useState<Language>(() => resolveInitialLanguage());

  useEffect(() => {
    window.localStorage.setItem(LANG_STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <Router>
      <Layout lang={lang} setLang={setLang}>
        <Routes>
          <Route path="/" element={<Home lang={lang} />} />
          <Route path="/research" element={<Research lang={lang} />} />
          <Route path="/roadmap" element={<Roadmap lang={lang} />} />
          <Route path="/publications" element={<Publications lang={lang} />} />
          <Route path="/governance" element={<Governance lang={lang} />} />
          <Route path="/contact" element={<Contact lang={lang} />} />
        </Routes>
      </Layout>
    </Router>
  );
}
