import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Layout } from "./components/Layout";
import { Language } from "./types";
import Home from "./pages/Home";
import Research from "./pages/Research";
import Roadmap from "./pages/Roadmap";
import Publications from "./pages/Publications";
import Governance from "./pages/Governance";
import Contact from "./pages/Contact";

export default function App() {
  const [lang, setLang] = useState<Language>("ru");

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
