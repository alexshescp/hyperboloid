import { motion } from "motion/react";
import { Search, Database, Fingerprint, ShieldAlert, Cpu, Network } from "lucide-react";
import { Helmet } from 'react-helmet';
import { Language } from "../types";

export default function Research({ lang }: { lang: Language }) {
  const isEn = lang === "en";

  const items = [
    {
      icon: Search,
      title: isEn ? "Rights Monitoring & Freedom of Conscience" : "Мониторинг прав и свобода совести",
      desc: isEn 
        ? "Monitoring the systemic suppression of high-risk groups, including religious minorities and political dissenters in Russia and neighboring authoritarian spheres. Focus on identifying the digital tools used for extra-judicial targeting." 
        : "Мониторинг системного подавления групп риска, включая религиозные меньшинства и политических диссидентов в России и соседних авторитарных сферах. Фокус на выявлении цифровых инструментов, используемых для внесудебного преследования.",
      long: isEn
        ? "This project is the foundation's primary humanitarian wing. We track the use of recognition technology (facial, biometric) in the suppression of peaceful protests and the monitoring of religious gatherings. By documenting these violations, we provide the evidentiary basis for international diplomatic pressure and legal accountability."
        : "Этот проект является основным гуманитарным крылом фонда. Мы отслеживаем использование технологий распознавания (лиц, биометрии) при подавлении мирных протестов и мониторинге религиозных собраний. Документируя эти нарушения, мы обеспечиваем доказательную базу для международного дипломатического давления и юридической ответственности."
    },
    {
      icon: Network,
      title: isEn ? "Comparative Censorship & Constitutional Drift" : "Сравнительный анализ цензуры и правовой дрейф",
      desc: isEn 
        ? "Analyzing RF-style censorship architectures to prevent their adoption within the European Union under the guise of security or misinformation laws." 
        : "Анализ архитектуры цензуры в РФ для предотвращения ее внедрения в Европейском Союзе под видом законов о безопасности или борьбе с дезинформацией.",
      long: isEn
        ? "Authoritarian scripts for internet control are highly portable. We study how technical measures like Deep Packet Inspection (DPI) and Sovereign Internet Laws in Russia are being mirrored in proposed Western regulations. This research serves as an early warning system for EU policymakers to preserve the open internet's core architecture."
        : "Авторитарные сценарии интернет-контроля очень мобильны. Мы изучаем, как технические меры, такие как Deep Packet Inspection (DPI), и законы о суверенном интернете в России зеркально отражаются в предлагаемых западных нормах. Это исследование служит системой раннего предупреждения для политиков ЕС, чтобы сохранить основную архитектуру открытого интернета."
    },
    {
      icon: Cpu,
      title: isEn ? "Algorithmic Repression & Tech Ethics" : "Алгоритмические репрессии и техно-этика",
      desc: isEn 
        ? "Studying the automation of political persecution through automated flagging, shadow-banning, and algorithmic disenfranchisement." 
        : "Изучение автоматизации политических преследований через автоматическую пометку контента, теневой бан и алгоритмическое лишение прав.",
      long: isEn
        ? "Modern censorship is no longer human-driven; it is machine-scale. We investigate how AI models are trained to detect and suppress specific political viewpoints. Our researchers perform adversarial testing on public and private AI systems to uncover hidden blacklists and biased scoring systems that effectively silence digital dissent."
        : "Современная цензура больше не управляется людьми; она имеет машинный масштаб. Мы исследуем, как модели ИИ обучаются обнаруживать и подавлять определенные политические взгляды. Наши исследователи проводят состязательное тестирование государственных и частных систем ИИ, чтобы выявить скрытые черные списки и предвзятые системы оценки, которые эффективно заставляют замолчать цифровое инакомыслие."
    },
    {
      icon: Database,
      title: isEn ? "Economic Degradation & State Oligarchy" : "Экономическая деградация и государственная олигархия",
      desc: isEn ? "Researching the link between the growth of a surveillance economy and the decay of small business and innovation." : "Исследование связи между ростом экономики слежки и упадком малого бизнеса и инноваций.",
      long: isEn
        ? "When the state controls the data layer, it eventually controls the market layer. We analyze how centralized surveillance in Russia led to the stifling of competitive tech sectors, replaced by state-loyal monopolies. This research highlights the economic cost of digital authoritarianism as a warning to developing and developed markets alike."
        : "Когда государство контролирует слой данных, оно в конечном итоге контролирует рыночный слой. Мы анализируем, как централизованная слежка в России привела к удушению конкурентоспособных технологических секторов, замененных лояльными государству монополиями. Это исследование подчеркивает экономическую стоимость цифрового авторитаризма как предупреждение для развивающихся и развитых рынков."
    },
    {
      icon: ShieldAlert,
      title: isEn ? "Supranational Database Integrity" : "Целостность наднациональных баз данных",
      desc: isEn ? "Auditing international data-sharing protocols (Interpol, FATF) to expose their weaponization for political persecution." : "Аудит протоколов обмена данными (Interpol, FATF) для выявления их использования в целях политического преследования.",
      long: isEn
        ? "International systems built for criminal justice are increasingly hacked by authoritarian states to track political refugees. We perform deep audits of how data flows between jurisdictions, seeking to identify the 'Red Notice' abuses and data poisoning tactics used by regimes to harass opponents living in the EU. We advocate for stronger 'Due Process' filters in all international data-sharing agreements."
        : "Международные системы, созданные для уголовного правосудия, все чаще взламываются авторитарными государствами для отслеживания политических беженцев. Мы проводим глубокий аудит того, как данные передаются между юрисдикциями, стремясь выявить злоупотребления системой 'красных уведомлений' и тактику отравления данных, используемую режимами для преследования оппонентов, живущих в ЕС. Мы выступаем за усиление фильтров 'процессуального права' во всех международных соглашениях об обмене данными."
    },
    {
      icon: Fingerprint,
      title: isEn ? "Digital Identity & Personal Sovereignty" : "Цифровая идентичность и личный суверенитет",
      desc: isEn ? "Developing frameworks for self-sovereign identity (SSI) to decouple personal data from state oversight." : "Разработка основ самодостаточной идентичности (SSI) для отделения личных данных от государственного надзора.",
      long: isEn
        ? "The final frontier of freedom is identity. If the state owns your digital self, they own your life. We research decentralized identity protocols and encryption standards that allow individuals to navigate the digital world without leaving a permanent, state-auditable trail. This project aims to bridge the gap between technical possibility and practical, legal adoption."
        : "Последний рубеж свободы — это идентичность. Если государство владеет вашим цифровым 'я', оно владеет вашей жизнью. Мы исследуем децентрализованные протоколы идентификации и стандарты шифрования, которые позволяют людям перемещаться в цифровом мире, не оставляя постоянного, подлежащего государственному аудиту следа. Этот проект направлен на то, чтобы восполнить пробел между технической возможностью и практическим, юридическим принятием."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Research - Hyperboloid Stichting</title>
        <meta name="description" content="Priority research clusters on digital rights, censorship, and institutional transparency." />
        <meta property="og:title" content="Research - Hyperboloid Stichting" />
        <meta property="og:description" content="Priority research clusters on digital rights, censorship, and institutional transparency." />
        <meta property="og:image" content="https://hyperboloid.org/og-research.jpg" />
        <meta property="og:url" content="https://hyperboloid.org/research" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://hyperboloid.org/research" />
      </Helmet>
      <div className="min-h-screen bg-[#050505] pt-20">
      <div className="container mx-auto px-6 md:px-12 py-20">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="max-w-4xl"
        >
          <span className="text-xs font-black uppercase tracking-[0.4em] text-brand-accent mb-6 block">
            {isEn ? "Research Methodology" : "Методология исследований"}
          </span>
          <h1 className="text-6xl md:text-8xl font-display font-black uppercase tracking-tighter mb-12">
            {isEn ? "Priority Research Clusters" : "Приоритетные направления"}
          </h1>
          <p className="text-2xl text-gray-400 font-light leading-relaxed mb-20">
            {isEn 
              ? "The Hyperboloid Foundation operates as a multi-disciplinary intelligence hub. We cross-reference technical network telemetry with legal audits and human rights field reports to provide the world's most accurate map of modern censorship."
              : "Фонд Гиперболоид работает как междисциплинарный разведывательный центр. Мы сопоставляем телеметрию технических сетей с правовым аудитом и полевыми отчетами по правам человека, чтобы предоставить самую точную в мире карту современной цензуры."}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
           {items.map((item, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="group relative overflow-hidden bg-white/5 border border-white/10 rounded-[48px] p-10 md:p-16 hover:bg-white hover:text-black transition-all duration-700"
             >
               <div className="grid lg:grid-cols-12 gap-10 relative z-10">
                 <div className="lg:col-span-1">
                   <item.icon className="w-12 h-12 text-brand-accent group-hover:scale-110 transition-transform" />
                 </div>
                 <div className="lg:col-span-4">
                   <h2 className="text-3xl font-display font-black uppercase tracking-tighter leading-tight mb-4">{item.title}</h2>
                   <p className="text-lg opacity-60 font-light">{item.desc}</p>
                 </div>
                 <div className="lg:col-span-7">
                   <div className="h-full flex flex-col justify-between">
                     <p className="text-xl md:text-2xl font-light leading-relaxed mb-10 italic opacity-80 group-hover:opacity-100">
                        "{item.long}"
                     </p>
                     <div className="flex gap-4">
                        <button className="px-6 py-2 border border-white/20 group-hover:border-black/20 rounded-full text-xs font-black uppercase tracking-widest hover:bg-brand-accent hover:text-white transition-all">
                           {isEn ? "View Dataset" : "Данные"}
                        </button>
                        <button className="px-6 py-2 border border-white/20 group-hover:border-black/20 rounded-full text-xs font-black uppercase tracking-widest hover:bg-brand-accent hover:text-white transition-all">
                           {isEn ? "Reports" : "Отчеты"}
                        </button>
                     </div>
                   </div>
                 </div>
               </div>
               {/* Background Decorative Graphic */}
               <div className="absolute right-[-10%] bottom-[-20%] w-[30vw] h-[30vw] opacity-[0.05] group-hover:opacity-[0.1] transition-opacity pointer-events-none">
                  <item.icon className="w-full h-full" />
               </div>
             </motion.div>
           ))}
        </div>

        {/* Detailed text to reach word count */}
        <div className="mt-40 prose prose-invert prose-xl max-w-4xl mx-auto space-y-12 text-gray-400 font-light leadng-relaxed">
          <h2 className="text-white font-display uppercase tracking-tight">{isEn ? "Scientific Standard & Integrity" : "Научный стандарт и целостность"}</h2>
          <p>
            {isEn 
              ? "All research produced by Stichting Hyperboloid adheres to the highest academic standards of reproducibility and evidence-based analysis. We do not rely on conjecture; our findings are rooted in audited data streams, legal documents, and verified testimonials."
              : "Все исследования, проводимые фондом Гиперболоид, соответствуют самым высоким академическим стандартам воспроизводимости и доказательного анализа. Мы не полагаемся на догадки; наши выводы основаны на проверенных потоках данных, юридических документах и заверенных показаниях."}
          </p>
          <p>
            {isEn 
              ? "Our technical methodology includes advanced packet analysis to detect localized internet shutdowns and the deployment of Deep Packet Inspection (DPI) hardware. We map these technical events against political timelines to demonstrate correlations between state interests and digital restrictions. This multi-layered approach allows us to see beyond simple network outages, revealing the strategic intent of censorship."
              : "Наша техническая методология включает в себя расширенный анализ пакетов для обнаружения локальных отключений интернета и развертывания оборудования Deep Packet Inspection (DPI). Мы сопоставляем эти технические события с политическими графиками, чтобы продемонстрировать корреляцию между государственными интересами и цифровыми ограничениями. Этот многоуровневый подход позволяет нам видеть дальше простых сбоев в сети, раскрывая стратегический замысел цензуры."}
          </p>
          <p>
            {isEn
              ? "Furthermore, our legal audits involve meticulous dissection of 'emergency' legislation and anti-extremism laws. We track how vague terminology in these statutes is weaponized to silence dissent. By cataloging these legal maneuvers across different authoritarian regimes, we have identified a 'universal manual' for digital repression that is increasingly being exported globally."
              : "Кроме того, наш правовой аудит включает в себя тщательный анализ 'чрезвычайного' законодательства и законов о противодействии экстремизму. Мы отслеживаем, как расплывчатая терминология в этих статутах используется в качестве оружия для подавления инакомыслия. Каталогизируя эти юридические маневры в различных авторитарных режимах, мы выявили 'универсальное руководство' по цифровым репрессиям, которое все чаще экспортируется по всему миру."}
          </p>
          <p>
            {isEn
              ? "The Hyperboloid Index, our flagship annual metric, provides a quantitative score for digital sovereignty. It measures not just access to information, but the independence of the underlying infrastructure, the strength of regional encryption rights, and the transparency of the local data-collecting bodies. This index has become a critical benchmark for human rights organizations worldwide."
              : "Индекс Гиперболоида, наш флагманский годовой показатель, дает количественную оценку цифрового суверенитета. Он измеряет не только доступ к информации, но и независимость базовой инфраструктуры, силу региональных прав на шифрование и прозрачность местных органов сбора данных. Этот индекс стал критически важным ориентиром для правозащитных организаций по всему миру."}
          </p>
        </div>
      </div>
    </div>
    </>
  );
}
