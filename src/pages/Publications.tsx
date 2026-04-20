import { motion } from "motion/react";
import { BookOpen, FileText, BarChart3, Newspaper, Search } from "lucide-react";
import { Helmet } from 'react-helmet';
import { Language } from "../types";

export default function Publications({ lang }: { lang: Language }) {
  const isEn = lang === "en";

  const categories = [
    {
      title: isEn ? "Scientific Research" : "Научные исследования",
      count: isEn ? "4 / Year" : "4 / Год",
      icon: BookOpen,
      desc: isEn 
        ? "Deep-dive peer-reviewed academic papers focusing on network protocols and legal sovereignty." 
        : "Глубокие рецензируемые академические работы, посвященные сетевым протоколам и правовому суверенитету.",
      details: isEn
        ? "Our whitepapers are written by PhD-level researchers and technical architects. They provide the theoretical backbone for our advocacy work, covering topics such as the mathematical proofs of privacy-preserving protocols and the constitutional implications of digital borders."
        : "Наши белые книги пишутся исследователями уровня PhD и техническими архитекторами. Они обеспечивают теоретическую основу для нашей правозащитной работы, охватывая такие темы, как математические доказательства протоколов сохранения конфиденциальности и конституционные последствия цифровых границ."
    },
    {
      title: isEn ? "Mini-Investigations" : "Мини-расследования",
      count: isEn ? "6 / Year" : "6 / Год",
      icon: Search,
      desc: isEn 
        ? "Journalistic deep-dives and whistleblower insider reports on database security and cyber-risks." 
        : "Журналистские расследования и инсайдерские отчеты об уязвимостях баз данных и киберрисках.",
      details: isEn
        ? "These are fast-strike reports that respond to current events. When a major data leak occurs or a new censorship tool is deployed, our investigation team works to uncover the actors involved and the technical mechanics used. We often partner with major investigative journalism hubs for maximum impact."
        : "Это оперативные отчеты, реагирующие на текущие события. При крупной утечке данных или развертывании нового инструмента цензуры наша группа расследований работает над выявлением участников и используемых технических механизмов. Мы часто сотрудничаем с крупными центрами журналистских расследований."
    },
    {
      title: isEn ? "Analytical Longreads" : "Аналитические лонгриды",
      count: isEn ? "54 / Year" : "54 / Год",
      icon: Newspaper,
      desc: isEn 
        ? "Weekly deep-dives integrating data reports, parliamentary hearings, and current censorship trends." 
        : "Еженедельные глубокие обзоры, объединяющие отчеты о данных, парламентские слушания и тренды цензуры.",
      details: isEn
        ? "Every Monday, we release a comprehensive analysis of the previous week's digital sovereignty events. This series is designed for policymakers, activists, and tech-literate citizens who need a curated, expert view of the shifting digital landscape."
        : "Каждый понедельник мы выпускаем всесторонний анализ событий цифрового суверенитета за предыдущую неделю. Эта серия предназначена для политиков, активистов и технически грамотных граждан, которым нужен экспертный взгляд на меняющийся цифровой ландшафт."
    },
    {
      title: isEn ? "Global Sovereignty Index" : "Глобальный индекс суверенитета",
      count: isEn ? "1 / Year" : "1 / Год",
      icon: BarChart3,
      desc: isEn 
        ? "The definitive flagship ranking of nation-state respect for digital human rights." 
        : "Определяющий флагманский рейтинг государств по уровню уважения к цифровым правам человека.",
      details: isEn
        ? "Our flagship publication. The Index uses 42 distinct metrics to score every UN member state. It assesses the presence of DPI hardware, the robustness of local encryption laws, and the independence of national data authorities. It is widely cited as the gold standard for digital liberty metrics."
        : "Наша флагманская публикация. Индекс использует 42 различных показателя для оценки каждого государства-члена ООН. Он оценивает наличие оборудования DPI, надежность местных законов о шифровании и независимость национальных органов по контролю за данными."
    }
  ];

  return (
    <div>
      <Helmet>
        <title>Publications - Hyperboloid Stichting</title>
        <meta name="description" content="Scientific research, mini-investigations, analytical longreads, and global sovereignty index." />
        <meta property="og:title" content="Publications - Hyperboloid Stichting" />
        <meta property="og:description" content="Scientific research, mini-investigations, analytical longreads, and global sovereignty index." />
        <meta property="og:image" content="https://hyperboloid.org/og-publications.jpg" />
        <meta property="og:url" content="https://hyperboloid.org/publications" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://hyperboloid.org/publications" />
      </Helmet>
      <div className="min-h-screen bg-[#050505] text-white pt-20">
      <div className="container mx-auto px-6 md:px-12 py-20">
        <div className="max-w-4xl mb-32">
           <span className="text-xs font-black uppercase tracking-[0.4em] text-brand-accent mb-6 block">Intellectual Output</span>
           <h1 className="text-6xl md:text-8xl font-display font-black uppercase tracking-tighter mb-12">PUBLICATIONS</h1>
           <p className="text-2xl text-gray-400 font-light leading-relaxed">
             {isEn 
               ? "The Hyperboloid Foundation is primarily a knowledge-generating institution. Our publications serve as the primary source of truth for the digital rights movement."
               : "Фонд Гиперболоид — это прежде всего институт, генерирующий знания. Наши публикации служат основным источником истины для движения за цифровые права."}
           </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
           {categories.map((cat, i) => (
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
           <h3 className="text-white text-4xl font-display uppercase tracking-tighter">{isEn ? "The Hyperboloid Review Process" : "Процесс рецензирования Hyperboloid"}</h3>
           <p>
             {isEn
               ? "Every publication before release undergoes a rigorous three-stage verification process. First, our technical lab performs a data-integrity check to ensure all network measurements are accurate. Second, our legal team reviews the findings for compliance with international jurisdiction norms. Finally, a peer-review panel comprised of independent experts in cryptography and human rights provides a final critique."
               : "Каждая публикация перед выпуском проходит строгий трехэтапный процесс проверки. Во-первых, наша техническая лаборатория проводит проверку целостности данных, чтобы убедиться в точности всех сетевых измерений. Во-вторых, наша юридическая группа проверяет выводы на соответствие нормам международной юрисдикции. Наконец, группа рецензентов, состоящая из независимых экспертов в области криптографии и прав человека, дает окончательную оценку."}
           </p>
           <p>
             {isEn
               ? "This commitment to absolute accuracy is what makes the Hyperboloid Foundation a trusted advisor to national parliaments and international human rights bodies. We understand that in the era of misinformation, a single factual error can compromise an entire movement's credibility. Therefore, we prioritize quality and empirical truth over speed or political convenience."
               : "Такая приверженность абсолютной точности — это то, что делает фонд Гиперболоид доверенным консультантом национальных парламентов и международных органов по правам человека. Мы понимаем, что в эпоху дезинформации одна фактическая ошибка может подорвать доверие ко всему движению. Поэтому мы отдаем приоритет качеству и эмпирической истине, а не скорости или политическому удобству."}
           </p>
           <p>
             {isEn
               ? "Our report archive is open-access. We believe that critical information about digital rights should not be locked behind paywalls. While our research is expensive to produce, we rely on the support of far-sighted donors who understand that a free index is a cornerstone of a free society. By making our findings available to the global public, we empower journalists and local activists with the evidence they need to challenge authoritarian laws."
               : "Архив наших отчетов открыт. Мы считаем, что критически важная информация о цифровых правах не должна быть скрыта за платным доступом. Хотя наше исследование дорого в производстве, мы полагаемся на поддержку дальновидных доноров, которые понимают, что бесплатный индекс является краеугольным камнем свободного общества. Делая результаты наших исследований доступными для мировой общественности, мы расширяем возможности журналистов и местных активистов, предоставляя им доказательства, необходимые для оспаривания авторитарных законов."}
           </p>
        </div>
      </div>
    </div>
    </div>
  );
}
