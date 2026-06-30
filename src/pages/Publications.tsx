import { motion } from "motion/react";
import { BookOpen, FileText, BarChart3, Newspaper, Search } from "lucide-react";
import { Language } from "../types";
import { siteContent } from "../i18n";
import { SEOHead } from "../components/SEOHead";

export default function Publications({ lang }: { lang: Language }) {
  const pageData = siteContent.pages.publications;

  const t = {
    en: {
      subtitle: "Intellectual Output",
      title: "PUBLICATIONS",
      lead: "The Hyperboloid Foundation is primarily a knowledge-generating institution. Our publications serve as the primary source of truth for the digital rights movement.",
      reviewTitle: "The Hyperboloid Review Process",
      reviewPara1: "Every publication before release undergoes a rigorous three-stage verification process. First, our technical lab performs a data-integrity check to ensure all network measurements are accurate. Second, our legal team reviews the findings for compliance with international jurisdiction norms. Finally, a peer-review panel comprised of independent experts in cryptography and human rights provides a final critique.",
      reviewPara2: "This commitment to absolute accuracy is what makes the Hyperboloid Foundation a trusted advisor to national parliaments and international human rights bodies. We understand that in the era of misinformation, a single factual error can compromise an entire movement's credibility. Therefore, we prioritize quality and empirical truth over speed or political convenience.",
      reviewPara3: "Our report archive is open-access. We believe that critical information about digital rights should not be locked behind paywalls. While our research is expensive to produce, we rely on the support of far-sighted donors who understand that a free index is a cornerstone of a free society. By making our findings available to the global public, we empower journalists and local activists with the evidence they need to challenge authoritarian laws.",
      categories: [
        {
          title: "Scientific Research",
          count: "4 / Year",
          icon: BookOpen,
          desc: "Deep-dive peer-reviewed academic papers focusing on network protocols and legal sovereignty.",
          details: "Our whitepapers are written by PhD-level researchers and technical architects. They provide the theoretical backbone for our advocacy work, covering topics such as the mathematical proofs of privacy-preserving protocols and the constitutional implications of digital borders."
        },
        {
          title: "Mini-Investigations",
          count: "6 / Year",
          icon: Search,
          desc: "Journalistic deep-dives and whistleblower insider reports on database security and cyber-risks.",
          details: "These are fast-strike reports that respond to current events. When a major data leak occurs or a new censorship tool is deployed, our investigation team works to uncover the actors involved and the technical mechanics used. We often partner with major investigative journalism hubs for maximum impact."
        },
        {
          title: "Analytical Longreads",
          count: "54 / Year",
          icon: Newspaper,
          desc: "Weekly deep-dives integrating data reports, parliamentary hearings, and current censorship trends.",
          details: "Every Monday, we release a comprehensive analysis of the previous week's digital sovereignty events. This series is designed for policymakers, activists, and tech-literate citizens who need a curated, expert view of the shifting digital landscape."
        },
        {
          title: "Global Sovereignty Index",
          count: "1 / Year",
          icon: BarChart3,
          desc: "The definitive flagship ranking of nation-state respect for digital human rights.",
          details: "Our flagship publication. The Index uses 42 distinct metrics to score every UN member state. It assesses the presence of DPI hardware, the robustness of local encryption laws, and the independence of national data authorities. It is widely cited as the gold standard for digital liberty metrics."
        }
      ]
    },
    ru: {
      subtitle: "Интеллектуальный продукт",
      title: "ПУБЛИКАЦИИ",
      lead: "Фонд Гиперболоид — это прежде всего институт, генерирующий знания. Наши публикации служат основным источником истины для движения за цифровые права.",
      reviewTitle: "Процесс рецензирования Hyperboloid",
      reviewPara1: "Каждая публикация перед выпуском проходит строгий трехэтапный процесс проверки. Во-первых, наша техническая лаборатория проводит проверку целостности данных, чтобы убедиться в точности всех сетевых измерений. Во-вторых, наша юридическая группа проверяет выводы на соответствие нормам международной юрисдикции. Наконец, группа рецензентов, состоящая из независимых экспертов в области криптографии и прав человека, дает окончательную оценку.",
      reviewPara2: "Такая приверженность абсолютной точности — это то, что делает фонд Гиперболоид доверенным консультантом национальных парламентов и международных органов по правам человека. Мы понимаем, что в эпоху дезинформации одна фактическая ошибка может подорвать доверие ко всему движению. Поэтому мы отдаем приоритет качеству и эмпирической истине, а не скорости или политическому удобству.",
      reviewPara3: "Архив наших отчетов открыт. Мы считаем, что критически важная информация о цифровых правах не должна быть скрыта за платным доступом. Хотя наше исследование дорого в производстве, мы полагаемся на поддержку дальновидных доноров, которые понимают, что бесплатный индекс является краеугольным камнем свободного общества.",
      categories: [
        {
          title: "Научные исследования",
          count: "4 / Год",
          icon: BookOpen,
          desc: "Глубокие рецензируемые академические работы, посвященные сетевым протоколам и правовому суверенитету.",
          details: "Наши белые книги пишутся исследователями уровня PhD и техническими архитекторами. Они обеспечивают теоретическую основу для нашей правозащитной работы."
        },
        {
          title: "Мини-расследования",
          count: "6 / Год",
          icon: Search,
          desc: "Журналистские расследования и инсайдерские отчеты об уязвимостях баз данных и киберрисках.",
          details: "Это оперативные отчеты, реагирующие на текущие события. При крупной утечке данных наша группа расследований работает над выявлением участников."
        },
        {
          title: "Аналитические лонгриды",
          count: "54 / Год",
          icon: Newspaper,
          desc: "Еженедельные глубокие обзоры, объединяющие отчеты о данных, парламентские слушания и тренды цензуры.",
          details: "Каждый понедельник мы выпускаем всесторонний анализ событий цифрового суверенитета за предыдущую неделю."
        },
        {
          title: "Глобальный индекс суверенитета",
          count: "1 / Год",
          icon: BarChart3,
          desc: "Определяющий флагманский рейтинг государств по уровню уважения к цифровым правам человека.",
          details: "Наша флагманская публикация. Индекс использует 42 различных показателя для оценки каждого государства-члена ООН."
        }
      ]
    },
    nl: {
      subtitle: "Intellectuele output",
      title: "PUBLICATIES",
      lead: "Stichting Hyperboloid is in de eerste plaats een kennisgenererend instituut. Onze publicaties dienen als de primaire bron van waarheid.",
      reviewTitle: "Het Hyperboloid Reviewproces",
      reviewPara1: "Elke publicatie ondergaat voor release een rigoureus verificatieproces in drie fasen.",
      reviewPara2: "Deze toewijding aan absolute nauwkeurigheid maakt Stichting Hyperboloid tot een vertrouwde adviseur.",
      reviewPara3: "Ons archief is open-access. Wij geloven dat kritieke informatie over digitale rechten niet achter betaalmuren mag staan.",
      categories: [
        {
          title: "Wetenschappelijk Onderzoek",
          count: "4 / Jaar",
          icon: BookOpen,
          desc: "Diepgaande academische papers over netwerkprotocollen en juridische soevereiniteit.",
          details: "Onze whitepapers zijn geschreven door onderzoekers op PhD-niveau en technische architecten."
        },
        {
          title: "Mini-Onderzoeken",
          count: "6 / Jaar",
          icon: Search,
          desc: "Journalistieke deep-dives en insider-rapporten over databasebeveiliging.",
          details: "Dit zijn snelle rapporten die reageren op de actualiteit."
        },
        {
          title: "Analytische Longreads",
          count: "54 / Jaar",
          icon: Newspaper,
          desc: "Wekelijkse analyses van gegevensrapporten, parlementaire hoorzittingen en censuurtrends.",
          details: "Elke maandag publiceren we een uitgebreide analyse van de gebeurtenissen van de afgelopen week."
        },
        {
          title: "Global Sovereignty Index",
          count: "1 / Jaar",
          icon: BarChart3,
          desc: "De definitieve vlaggenschipranglijst van staten op het gebied van digitale mensenrechten.",
          details: "Onze vlaggenschippublicatie. De Index gebruikt 42 verschillende statistieken."
        }
      ]
    },
    es: {
      subtitle: "Producción intelectual",
      title: "PUBLICACIONES",
      lead: "La Fundación Hyperboloid es principalmente una institución generadora de conocimiento. Nuestras publicaciones sirven como la principal fuente de verdad.",
      reviewTitle: "El Proceso de Revisión de Hyperboloid",
      reviewPara1: "Cada publicación antes de su lanzamiento se somete a un riguroso proceso de verificación en tres etapas.",
      reviewPara2: "Este compromiso con la precisión absoluta es lo que convierte a la Fundación Hyperboloid en un asesor de confianza.",
      reviewPara3: "Nuestro archivo de informes es de acceso abierto. Creemos que la información crítica no debe estar bloqueada.",
      categories: [
        {
          title: "Investigación Científica",
          count: "4 / Año",
          icon: BookOpen,
          desc: "Artículos académicos revisados por pares que se centran en protocolos de red y soberanía legal.",
          details: "Nuestros whitepapers están escritos por investigadores de nivel de doctorado y arquitectos técnicos."
        },
        {
          title: "Mini-Investigaciones",
          count: "6 / Año",
          icon: Search,
          desc: "Inmersiones periodísticas e informes de denunciantes sobre seguridad de bases de datos.",
          details: "Son informes de respuesta rápida ante eventos actuales."
        },
        {
          title: "Longreads Analíticos",
          count: "54 / Año",
          icon: Newspaper,
          desc: "Análisis semanales que integran informes de datos, audiencias parlamentarias y tendencias de censura.",
          details: "Cada lunes, publicamos un análisis exhaustivo de los eventos de la semana anterior."
        },
        {
          title: "Índice Global de Soberanía",
          count: "1 / Año",
          icon: BarChart3,
          desc: "La clasificación insignia definitiva del respeto de los estados-nación por los derechos humanos digitales.",
          details: "Nuestra publicación insignia. El Índice utiliza 42 métricas distintas."
        }
      ]
    },
    fr: {
      subtitle: "Production intellectuelle",
      title: "PUBLICATIONS",
      lead: "La Fondation Hyperboloid est avant tout une institution génératrice de connaissances. Nos publications servent de source primaire de vérité.",
      reviewTitle: "Le processus de révision Hyperboloid",
      reviewPara1: "Chaque publication avant sa diffusion est soumise à un processus de vérification rigoureux en trois étapes.",
      reviewPara2: "Cet engagement envers une exactitude absolue fait de la Fondation Hyperboloid un conseiller de confiance.",
      reviewPara3: "Nos archives sont en accès libre. Nous pensons que les informations critiques ne doivent pas être verrouillées.",
      categories: [
        {
          title: "Recherche Scientifique",
          count: "4 / An",
          icon: BookOpen,
          desc: "Articles académiques évalués par des pairs sur les protocoles réseau et la souveraineté juridique.",
          details: "Nos livres blancs sont rédigés par des chercheurs de niveau doctorat et des architectes techniques."
        },
        {
          title: "Mini-Enquêtes",
          count: "6 / An",
          icon: Search,
          desc: "Enquêtes journalistiques approfondies et rapports d'initiés sur la sécurité des bases de données.",
          details: "Il s'agit de rapports d'intervention rapide réagissant à l'actualité."
        },
        {
          title: "Longreads Analytiques",
          count: "54 / An",
          icon: Newspaper,
          desc: "Analyses hebdomadaires intégrant rapports de données, auditions parlementaires et tendances de la censure.",
          details: "Chaque lundi, nous publions une analyse complète des événements de la semaine précédente."
        },
        {
          title: "Indice Mondial de Souveraineté",
          count: "1 / An",
          icon: BarChart3,
          desc: "Le classement phare du respect des droits humains numériques par les États-nations.",
          details: "Notre publication phare. L'Indice utilise 42 mesures distinctes."
        }
      ]
    },
    de: {
      subtitle: "Intellektuelle Leistung",
      title: "PUBLIKATIONEN",
      lead: "Die Hyperboloid-Stiftung ist in erster Linie eine wissensgenerierende Institution. Unsere Publikationen dienen als primäre Quelle der Wahrheit.",
      reviewTitle: "Der Hyperboloid-Prüfprozess",
      reviewPara1: "Jede Publikation durchläuft vor der Veröffentlichung einen strengen dreistufigen Verifizierungsprozess.",
      reviewPara2: "Diese Verpflichtung zu absoluter Genauigkeit macht die Hyperboloid-Stiftung zu einem vertrauenswürdigen Berater.",
      reviewPara3: "Unser Berichtsarchiv ist frei zugänglich. Wir glauben, dass kritische Informationen nicht hinter Bezahlschranken stehen sollten.",
      categories: [
        {
          title: "Wissenschaftliche Forschung",
          count: "4 / Jahr",
          icon: BookOpen,
          desc: "Tiefgehende, begutachtete akademische Arbeiten über Netzwerkprotokolle und rechtliche Souveränität.",
          details: "Unsere Whitepaper werden von Forschern mit Doktortitel und technischen Architekten verfasst."
        },
        {
          title: "Mini-Untersuchungen",
          count: "6 / Jahr",
          icon: Search,
          desc: "Journalistische Deep-Dives und Insider-Berichte zur Datenbanksicherheit.",
          details: "Dies sind Schnellanalyse-Berichte, die auf aktuelle Ereignisse reagieren."
        },
        {
          title: "Analytische Longreads",
          count: "54 / Jahr",
          icon: Newspaper,
          desc: "Wöchentliche Deep-Dives, die Datenberichte, Anhörungen und Zensurtrends integrieren.",
          details: "Jeden Montag veröffentlichen wir eine umfassende Analyse der Ereignisse der Vorwoche."
        },
        {
          title: "Globaler Souveränitätsindex",
          count: "1 / Jahr",
          icon: BarChart3,
          desc: "Das definitive Flaggschiff-Ranking zum staatlichen Respekt für digitale Menschenrechte.",
          details: "Unsere Flaggschiff-Publikation. Der Index verwendet 42 verschiedene Kennzahlen."
        }
      ]
    },
    pl: {
      subtitle: "Dorobek intelektualny",
      title: "PUBLIKACJE",
      lead: "Fundacja Hyperboloid jest przede wszystkim instytucją generującą wiedzę. Nasze publikacje służą jako główne źródło prawdy.",
      reviewTitle: "Proces recenzji Hyperboloid",
      reviewPara1: "Każda publikacja przed wydaniem przechodzi rygorystyczny, trzystopniowy proces weryfikacji.",
      reviewPara2: "To dążenie do absolutnej dokładności czyni Fundację Hyperboloid zaufanym doradcą.",
      reviewPara3: "Nasze archiwum raportów jest ogólnodostępne. Uważamy, że kluczowe informacje nie powinny być płatne.",
      categories: [
        {
          title: "Badania Naukowe",
          count: "4 / Rok",
          icon: BookOpen,
          desc: "Dogłębne recenzowane prace akademickie skupiające się na protokołach sieciowych i suwerenności prawnej.",
          details: "Nasze białe księgi są pisane przez naukowców ze stopniem doktora i architektów technicznych."
        },
        {
          title: "Mini-Śledztwa",
          count: "6 / Rok",
          icon: Search,
          desc: "Dziennikarskie śledztwa i raporty sygnalistów na temat bezpieczeństwa baz danych.",
          details: "Są to raporty szybkiego reagowania na bieżące wydarzenia."
        },
        {
          title: "Analizy Długiego Formatu",
          count: "54 / Rok",
          icon: Newspaper,
          desc: "Cotygodniowe dogłębne analizy łączące raporty danych, przesłuchania i trendy cenzury.",
          details: "W każdy poniedziałek publikujemy kompleksową analizę wydarzeń z poprzedniego tygodnia."
        },
        {
          title: "Globalny Indeks Suwerenności",
          count: "1 / Rok",
          icon: BarChart3,
          desc: "Ostateczny ranking poszanowania cyfrowych praw człowieka przez państwa narodowe.",
          details: "Nasza flagowa publikacja. Indeks wykorzystuje 42 odrębne wskaźniki."
        }
      ]
    }
  }[lang];

  return (
    <>
      <SEOHead
        lang={lang}
        pageTitle={pageData.title[lang]}
        pageDescription={pageData.description[lang]}
        ogTitle={pageData.ogTitle?.[lang] || pageData.title[lang]}
        ogDescription={pageData.ogDescription?.[lang] || pageData.description[lang]}
        pagePath="/publications"
      />
      <div className="min-h-screen bg-[#050505] text-white pt-20">
      <div className="container mx-auto px-6 md:px-12 py-20">
        <div className="max-w-4xl mb-32">
           <span className="text-xs font-black uppercase tracking-[0.4em] text-brand-accent mb-6 block">{t.subtitle}</span>
           <h1 className="text-6xl md:text-8xl font-display font-black uppercase tracking-tight mb-12">{t.title}</h1>
           <p className="text-2xl text-gray-400 font-light leading-relaxed">
             {t.lead}
           </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
           {t.categories.map((cat, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="p-12 bg-white/5 border border-white/10 rounded-[64px] hover:bg-brand-accent hover:border-brand-accent transition-all duration-500 group"
             >
               <div className="flex justify-between items-start mb-12">
                  <cat.icon className="w-16 h-16 text-brand-accent group-hover:text-white transition-colors" />
                  <span className="px-4 py-2 bg-white/5 rounded-full text-xs font-black uppercase tracking-widest">{cat.count}</span>
               </div>
               <h2 className="text-4xl font-display font-black uppercase tracking-tighter mb-6">{cat.title}</h2>
               <p className="text-xl font-light text-gray-400 group-hover:text-white/80 transition-colors mb-10">{cat.desc}</p>
               <div className="text-sm font-light text-gray-500 group-hover:text-white/60 transition-colors leading-relaxed">
                  {cat.details}
               </div>
             </motion.div>
           ))}
        </div>

        {/* Longer text to reach word count */}
        <div className="mt-40 max-w-4xl mx-auto space-y-12 text-gray-400 font-light leading-relaxed">
           <h3 className="text-white text-4xl font-display uppercase tracking-tighter">{t.reviewTitle}</h3>
           <p>{t.reviewPara1}</p>
           <p>{t.reviewPara2}</p>
           <p>{t.reviewPara3}</p>
        </div>
      </div>
    </div>
    </>
  );
}
