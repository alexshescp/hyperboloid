import { BrowserRouter as Router, Routes, Route, Navigate, Outlet, useNavigate, useParams, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";
import { Layout } from "./components/Layout";
import { isLanguage, resolveInitialLanguage } from "./i18n";
import { Language } from "./types";

// Импорт страниц
import Home from "./pages/Home";
import Research from "./pages/Research";
import Roadmap from "./pages/Roadmap";
import Publications from "./pages/Publications";
import Governance from "./pages/Governance";
import Contact from "./pages/Contact";

const LANG_STORAGE_KEY = "hyperboloid-lang";

function LanguageLayout() {
  const { lang } = useParams<{ lang: string }>();
  const navigate = useNavigate();
  const location = useLocation();

  // Определяем, какой язык использовать
  const currentLang: Language = isLanguage(lang) ? lang : resolveInitialLanguage();

  useEffect(() => {
    // 1. Если язык в URL отсутствует или неверный, редиректим на валидный
    if (!lang || !isLanguage(lang)) {
      const remainingPath = location.pathname.split('/').slice(2).join('/');
      navigate(`/${currentLang}/${remainingPath}`, { replace: true });
      return;
    }

    // 2. Синхронизируем атрибуты документа и localStorage
    document.documentElement.lang = currentLang;
    localStorage.setItem(LANG_STORAGE_KEY, currentLang);
  }, [lang, currentLang, navigate, location.pathname]);

  // Если язык в URL еще не валиден, не рендерим контент (ждем редиректа)
  if (!isLanguage(lang)) return null;

  return (
    <Layout lang={currentLang}>
      <Outlet />
    </Layout>
  );
}

export default function App() {
  const defaultLang = resolveInitialLanguage();

  return (
    <HelmetProvider>
      <Router>
        <Routes>
          {/* Редирект с корня на дефолтный язык */}
          <Route path="/" element={<Navigate to={`/${defaultLang}/`} replace />} />

          {/* Группа маршрутов с параметром :lang */}
          <Route path="/:lang" element={<LanguageLayout />}>
            <Route index element={<HomeWrapper />} />
            <Route path="research" element={<ResearchWrapper />} />
            <Route path="roadmap" element={<RoadmapWrapper />} />
            <Route path="publications" element={<PublicationsWrapper />} />
            <Route path="governance" element={<GovernanceWrapper />} />
            <Route path="contact" element={<ContactWrapper />} />
          </Route>

          {/* Все остальные пути редиректят на главную с текущим языком */}
          <Route path="*" element={<Navigate to={`/${defaultLang}/`} replace />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

// Вспомогательные обертки для передачи lang в компоненты страниц
function HomeWrapper() {
  const { lang } = useParams<{ lang: string }>();
  return <Home lang={(lang as Language) || "en"} />;
}

function ResearchWrapper() {
  const { lang } = useParams<{ lang: string }>();
  return <Research lang={(lang as Language) || "en"} />;
}

function RoadmapWrapper() {
  const { lang } = useParams<{ lang: string }>();
  return <Roadmap lang={(lang as Language) || "en"} />;
}

function PublicationsWrapper() {
  const { lang } = useParams<{ lang: string }>();
  return <Publications lang={(lang as Language) || "en"} />;
}

function GovernanceWrapper() {
  const { lang } = useParams<{ lang: string }>();
  return <Governance lang={(lang as Language) || "en"} />;
}

function ContactWrapper() {
  const { lang } = useParams<{ lang: string }>();
  return <Contact lang={(lang as Language) || "en"} />;
}