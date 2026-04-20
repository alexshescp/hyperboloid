import { motion } from "motion/react";
import { Helmet } from 'react-helmet';
import { Language } from "../types";

export default function Roadmap({ lang }: { lang: Language }) {
  const isEn = lang === "en";

  const phases = [
    {
      quarter: isEn ? "Months 1-12" : "Месяцы 1-12",
      title: isEn ? "Research 1 in Project 1: Supranational Databases (I24/7 + FATF) — 12 articles, 2 researches" : "Исследование 1 в рамках проекта 1: Наднациональные базы данных (I24/7 + FATF) — 12 статей, 2 исследования",
      desc: isEn 
        ? "Comprehensive audit of supranational databases used by Interpol and FATF to expose abuses and advocate for reforms."
        : "Комплексный аудит наднациональных баз данных, используемых Интерполом и FATF, для разоблачения злоупотреблений и продвижения реформ.",
      details: isEn
        ? "This research focuses on auditing supranational databases used by Interpol and FATF, producing 12 articles and 2 in-depth researches to highlight abuses and push for reforms."
        : "Это исследование сосредоточено на аудите наднациональных баз данных, используемых Интерполом и FATF, с производством 12 статей и 2 глубоких исследований для выделения злоупотреблений и продвижения реформ."
    },
    {
      quarter: isEn ? "Months 1-2" : "Месяцы 1-2",
      title: isEn ? "Research 3: Internet Censorship — 2 articles" : "Исследование 3: Цензура в сети Интернет — 2 статьи",
      desc: isEn 
        ? "Analysis of global internet censorship trends to inform advocacy and policy recommendations."
        : "Анализ глобальных трендов цензуры в интернете для информирования защиты интересов и рекомендаций по политике.",
      details: isEn
        ? "Analysis of global internet censorship trends, providing a foundation for broader advocacy efforts."
        : "Анализ глобальных трендов цензуры в интернете, предоставляющий основу для более широких усилий по защите интересов."
    },
    {
      quarter: isEn ? "Months 2-4" : "Месяцы 2-4",
      title: isEn ? "Research 5: Political Risks of Unverified VPNs — 3 articles" : "Исследование 5: Политические риски не проверенных VPN — 3 статьи",
      desc: isEn 
        ? "Examination of risks associated with unverified VPN services in authoritarian contexts."
        : "Изучение рисков, связанных с непроверенными VPN-сервисами в авторитарных контекстах.",
      details: isEn
        ? "Examining the risks associated with VPN services and their potential for surveillance or compromise."
        : "Изучение рисков, связанных с VPN-сервисами, и их потенциала для слежки или компрометации."
    },
    {
      quarter: isEn ? "Months 3-5" : "Месяцы 3-5",
      title: isEn ? "Research 3: Collective Responsibility as Propaganda Core — 1 mini-research, 2 articles" : "Исследование 3: Коллективная ответственность как ядро пропаганды — 1 мини-исследование, 2 статьи",
      desc: isEn 
        ? "Budget: 7000 EUR. Medium-high effectiveness (7/10) — direct hit on opponents' narratives. Potential funding: 15000 (NED, European Endowment for Democracy)."
        : "Бюджет: 7000 евро. Средняя-высокая эффективность (7/10) — прямой удар по нарративам оппонентов. Возможное финансирование: 15000 (NED, European Endowment for Democracy).",
      details: isEn
        ? "Analyzing how collective responsibility narratives are used in propaganda and their impact on public discourse."
        : "Анализ того, как нарративы коллективной ответственности используются в пропаганде и их влияние на общественный дискурс."
    },
    {
      quarter: isEn ? "Months 4-8" : "Месяцы 4-8",
      title: isEn ? "Research 10: Personal Data Protection and Liability for Leaks — 4 articles" : "Исследование 10: Защита персональных данных и ответственность за утечки — 4 статьи",
      desc: isEn 
        ? "Budget: 8000 EUR. High effectiveness (9/10) — legally significant material for lawsuits. Potential funding: 10000 (NOYB, Privacy International, EU GDPR grants)."
        : "Бюджет: 8000 евро. Высокая эффективность (9/10) — юридически значимый материал для исков. Возможное финансирование: 10000 (NOYB, Privacy International, гранты ЕС GDPR).",
      details: isEn
        ? "Research into data protection laws and accountability for data breaches, supporting legal actions."
        : "Исследование законов о защите данных и подотчетности за утечки данных, поддержка судебных действий."
    },
    {
      quarter: isEn ? "Months 1-12" : "Месяцы 1-12",
      title: isEn ? "Research 6: Deprivation of Freedom for Freedom of Speech (Reposts and Comments Review) — 1 research, 2 articles" : "Исследование 6: Лишение свободы за свободу слова (обзор репостов и комментариев) — 1 исследование, 2 статьи",
      desc: isEn 
        ? "Budget: 4000 EUR. High effectiveness (8/10) — powerful human rights case. Potential funding: 12000–13000 (Amnesty, Article 19, HRW small grants)."
        : "Бюджет: 4000 евро. Высокая эффективность (8/10) — мощный правозащитный кейс. Возможное финансирование: 12000–13000 (Amnesty, Article 19, HRW small grants).",
      details: isEn
        ? "Documenting cases of repression for online speech, including reposts and comments."
        : "Документирование случаев репрессий за онлайн-речь, включая репосты и комментарии."
    },
    {
      quarter: isEn ? "Months 6-8" : "Месяцы 6-8",
      title: isEn ? "Research 7: Censorship's Influence on Political Choice — 1 research, 2 articles" : "Исследование 7: Влияние цензуры на политический выбор — 1 исследование, 2 статьи",
      desc: isEn 
        ? "Budget: 5000 EUR. High effectiveness (8/10) — evidentiary base for parliamentary hearings. Potential funding: 13000 (Freedom House, OSF)."
        : "Бюджет: 5000 евро. Высокая эффективность (8/10) — доказательная база для парламентских слушаний. Возможное финансирование: 13000 (Freedom House, OSF).",
      details: isEn
        ? "Studying how censorship affects voter behavior and political outcomes."
        : "Изучение того, как цензура влияет на поведение избирателей и политические результаты."
    },
    {
      quarter: isEn ? "Months 7-9" : "Месяцы 7-9",
      title: isEn ? "Research 2 in Project 1: Use of International Organizations by Autocracies' Intelligence — 6 articles + parliamentary hearing" : "Исследование 2 в рамках проекта 1: Использование международных организаций разведками автократий — 6 статей + парламентское слушание",
      desc: isEn 
        ? "Budget: 25000 EUR. Very high effectiveness (9/10) — direct political effect. Potential funding: 25000 (NED + thematic grants for Interpol/FATF reform)."
        : "Бюджет: 25000 евро. Очень высокая эффективность (9/10) — прямой политический эффект. Возможное финансирование: 25000 (NED + тематические гранты по реформе Интерпола/ФАТФ).",
      details: isEn
        ? "Investigating how authoritarian regimes exploit international bodies for intelligence purposes."
        : "Расследование того, как авторитарные режимы эксплуатируют международные органы для целей разведки."
    },
    {
      quarter: isEn ? "Months 8-11" : "Месяцы 8-11",
      title: isEn ? "Researches 8 + 9: Mini-book '100 Methods of Control and 100 Methods of Safe Censorship Bypass' + joint research, 8 articles" : "Исследования 8 + 9: Мини-книга «100 методов контроля и 100 методов безопасного обхода цензуры» + совместное исследование, 8 статей",
      desc: isEn 
        ? "Budget: 10000 EUR. Very high effectiveness (9/10) — long-term practical tool (downloads 50k+). Potential funding: 35000 (Anti-Censorship grants: Open Technology Fund, Internet Freedom Fund)."
        : "Бюджет: 10000 евро. Очень высокая эффективность (9/10) — долгосрочный практический инструмент (скачивания 50k+). Возможное финансирование: 35000 (Anti-Censorship grants: Open Technology Fund, Internet Freedom Fund).",
      details: isEn
        ? "Creating a comprehensive guide to censorship methods and circumvention techniques."
        : "Создание всеобъемлющего руководства по методам цензуры и техникам обхода."
    },
    {
      quarter: isEn ? "Months 1-12" : "Месяцы 1-12",
      title: isEn ? "Project 1: Interpol Reform (preparation + hearings in EU and US parliamentary groups)" : "Проект 1: Реформирование Интерпола (подготовка + слушания в парламентских группах ЕС и США)",
      desc: isEn 
        ? "Budget: 45000 EUR. Very high effectiveness (9/10) — real institutional reform. Potential funding: 45000–75000 (Fair Trials, OSF, US State Dept DRL)."
        : "Бюджет: 45000 евро. Очень высокая эффективность (9/10) — реальная институциональная реформа. Возможное финансирование: 45000–75000 (Fair Trials, OSF, US State Dept DRL).",
      details: isEn
        ? "Advocating for reforms in Interpol to prevent abuse and ensure transparency."
        : "Защита реформ в Интерполе для предотвращения злоупотреблений и обеспечения прозрачности."
    },
    {
      quarter: isEn ? "Months 6-12" : "Месяцы 6-12",
      title: isEn ? "Project 2: Class Actions Against Corporations for Data Leaks" : "Проект 2: Коллективные иски против корпораций за утечки персональных данных",
      desc: isEn 
        ? "Budget: 8000 EUR. High effectiveness (8/10) — precedent-setting pressure on Big Tech. Potential funding: 10000 (NOYB-style funding + consumer rights foundations)."
        : "Бюджет: 8000 евро. Высокая эффективность (8/10) — прецедентное давление на Big Tech. Возможное финансирование: 10000 (NOYB-style funding + consumer rights foundations).",
      details: isEn
        ? "Supporting legal actions against companies responsible for data breaches."
        : "Поддержка судебных действий против компаний, ответственных за утечки данных."
    },
    {
      quarter: isEn ? "Months 8-10" : "Месяцы 8-10",
      title: isEn ? "Project 3: Reducing the Level of Citizens' Collective Responsibility for State Actions" : "Проект 3: Снижение уровня коллективной ответственности граждан за действия стран",
      desc: isEn 
        ? "Budget: 7000 EUR. Medium-high effectiveness (7/10) — changing public discourse. Potential funding: 15000 (grants for countering propaganda, NED)."
        : "Бюджет: 7000 евро. Средняя-высокая эффективность (7/10) — изменение общественного дискурса. Возможное финансирование: 15000 (гранты на борьбу с пропагандой, NED).",
      details: isEn
        ? "Campaigning against narratives that hold citizens collectively responsible for government actions."
        : "Кампания против нарративов, которые держат граждан коллективно ответственными за действия правительства."
    }
  ];

  return (
    <div>
      <Helmet>
        <title>Roadmap - Hyperboloid Stichting</title>
        <meta name="description" content="Project lifespan and key activities for digital rights advocacy." />
        <meta property="og:title" content="Roadmap - Hyperboloid Stichting" />
        <meta property="og:description" content="Project lifespan and key activities for digital rights advocacy." />
        <meta property="og:image" content="https://hyperboloid.org/og-roadmap.jpg" />
        <meta property="og:url" content="https://hyperboloid.org/roadmap" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hyperboloid Stichting" />
        <meta name="twitter:description" content="Digital rights research, monitoring, and civic accountability reports." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://hyperboloid.org/roadmap" />
      </Helmet>
      <div className="min-h-screen bg-white text-black pt-20">
      <div className="container mx-auto px-6 md:px-12 py-20 text-center max-w-5xl">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
        >
          <span className="text-[10px] font-black uppercase tracking-[0.6em] text-brand-accent mb-8 block">Project Lifespan</span>
          <h1 className="text-6xl md:text-9xl font-display font-black uppercase tracking-tighter mb-12">ROADMAP</h1>
          <p className="text-xl md:text-3xl text-gray-400 font-light leading-snug mb-32 max-w-3xl mx-auto italic">
            "The path to digital liberation is paved with precise technical steps."
          </p>
        </motion.div>

        <div className="relative border-l-2 border-gray-100 pl-8 md:pl-20 text-left space-y-40">
           {phases.map((phase, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="relative"
             >
               <div className="absolute left-[-42px] md:left-[-102px] top-0 w-8 h-8 rounded-full bg-brand-accent border-4 border-white shadow-xl" />
               <span className="text-sm font-black text-brand-accent uppercase tracking-widest mb-4 block">{phase.quarter}</span>
               <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter leading-none mb-8">{phase.title}</h2>
               <p className="text-2xl font-light text-gray-600 mb-8 max-w-2xl">{phase.desc}</p>
               <div className="p-10 bg-gray-50 rounded-[40px] border border-gray-100 max-w-3xl">
                  <p className="text-lg text-gray-500 font-light leading-relaxed">
                    {phase.details}
                  </p>
               </div>
             </motion.div>
           ))}
        </div>

        {/* Longer text to reach word count */}
        <div className="mt-40 text-left space-y-12 text-gray-400 font-light leading-relaxed text-lg md:text-xl">
           <h3 className="text-black font-display text-4xl uppercase tracking-tighter">{isEn ? "Long-Term Vision 2027-2030" : "Долгосрочное видение 2027-2030"}</h3>
           <p>
             {isEn
               ? "Beyond 2026, the Hyperboloid Foundation aims to decentralize its own methodology. We plan to develop open-source toolkits that allow local human rights organizations to perform their own protocol-level audits. By democratizing the tools of digital investigation, we create a global network of observers that no single state can suppress."
               : "После 2026 года фонд Гиперболоид стремится децентрализовать собственную методологию. Мы планируем разработать наборы инструментов с открытым исходным кодом, которые позволят местным правозащитным организациям проводить собственный аудит на уровне протоколов. Демократизируя инструменты цифрового расследования, мы создаем глобальную сеть наблюдателей, которую не сможет подавить ни одно государство."}
           </p>
           <p>
             {isEn
               ? "We also foresee a significant shift towards the regulation of AI-driven surveillance. As machine learning models become the primary arbiters of digital speech, our focus will expand to 'Algorithmic Transparency Laws.' This involves lobbying for the right of every citizen to know why a specific automated decision was made about their digital life."
               : "Мы также предвидим значительный сдвиг в сторону регулирования слежки на основе ИИ. Поскольку модели машинного обучения становятся основными арбитрами цифровой речи, наш фокус расширится на 'Законы об алгоритмической прозрачности'. Это включает лоббирование права каждого гражданина знать, почему было принято то или иное автоматизированное решение в отношении его цифровой жизни."}
           </p>
           <p>
             {isEn
               ? "Strategic partnerships with decentralized web (Web3) initiatives and hardware-level privacy providers will be crucial. We believe that software-level solutions are only part of the puzzle; the hardware itself—the routers, servers, and cables—must be protected from state-level interception. The 'Hyperboloid Infrastructure Project' will research hardened, tamper-proof hardware standards for the next generation of activists."
               : "Стратегическое партнерство с децентрализованными веб-инициативами (Web3) и провайдерами конфиденциальности на уровне оборудования будет иметь решающее значение. Мы считаем, что программные решения — это лишь часть головоломки; само оборудование — маршрутизаторы, серверы и кабели — должно быть защищено от государственного перехвата. 'Инфраструктурный проект Гиперболоида' будет исследовать стандарты защищенного от несанкционированного доступа оборудования для следующего поколения активистов."}
           </p>
        </div>
      </div>
    </div>
    </div>
  );
}
