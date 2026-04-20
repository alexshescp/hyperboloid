import { motion } from "motion/react";
import { ArrowRight, Shield, Globe, Lock } from "lucide-react";
import { Helmet } from 'react-helmet';
import { Language } from "../types";

export default function Home({ lang }: { lang: Language }) {
  const isEn = lang === "en";

  return (
    <>
      <Helmet>
        <title>Hyperboloid Stichting - Digital Human Rights Protection</title>
        <meta name="description" content="Independent research into the intersection of technology, individual liberty, and the institutional monitoring of dissent." />
        <meta property="og:title" content="Hyperboloid Stichting - Digital Human Rights Protection" />
        <meta property="og:description" content="Independent research into the intersection of technology, individual liberty, and the institutional monitoring of dissent." />
        <meta property="og:image" content="https://hyperboloid.org/og-image.jpg" />
        <meta property="og:url" content="https://hyperboloid.org" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hyperboloid Stichting" />
        <meta name="twitter:description" content="Digital rights research, monitoring, and civic accountability reports." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://hyperboloid.org" />
      </Helmet>
      <div className="flex flex-col">
      {/* Hero Section */}
      <section className="min-h-[80vh] w-full relative flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
           <motion.img 
             initial={{ scale: 1.2, opacity: 0 }}
             animate={{ scale: 1, opacity: 0.4 }}
             transition={{ duration: 2 }}
             src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070"
             className="w-full h-full object-cover grayscale brightness-50"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10 pt-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="w-12 h-[1px] bg-brand-accent" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-accent">
                {isEn ? "Censorship Under the Microscope" : "Цензура под микроскопом"}
              </span>
            </div>
            <h1 className="text-[12vw] md:text-[8vw] lg:text-[7vw] font-display font-black leading-[0.85] tracking-[-0.05em] uppercase whitespace-pre-line text-balance mb-10 max-w-[90vw]">
              {isEn ? "Digital Human Rights\nProtection" : "Защита цифровых\nправ человека"}
            </h1>
            <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-end">
              <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-xl">
                {isEn 
                  ? "Independent research into the intersection of technology, individual liberty, and the institutional monitoring of dissent." 
                  : "Независимый аналитический центр, исследующий пересечение технологий, личной свободы и институционального мониторинга инакомыслия."}
              </p>
              <div className="flex justify-start lg:justify-end">
                 <button className="group flex items-center gap-6 md:gap-8 px-8 md:px-10 py-5 md:py-6 bg-white text-black rounded-full hover:bg-brand-accent transition-all hover:scale-105 active:scale-95">
                    <span className="text-xs md:text-sm font-black uppercase tracking-widest">
                      {isEn ? "Our Strategy" : "Наша стратегия"}
                    </span>
                    <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform" />
                 </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Expanded Content Section */}
      <section className="py-20 md:py-40 bg-white text-black">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-20">
            <div className="lg:col-span-8 space-y-12">
              <h2 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tighter leading-tight">
                {isEn ? "The Digital Sovereignty Crisis" : "Кризис цифрового суверенитета"}
              </h2>
              
              <div className="prose prose-xl prose-slate max-w-none space-y-8 text-lg md:text-xl font-light text-gray-600 leading-relaxed">
                <h3 className="text-3xl font-black uppercase tracking-tighter mb-6">{isEn ? "Mission and Goals" : "Миссия и цели"}</h3>
                <p>
                  {isEn 
                    ? "The Foundation is created as an independent analytical center, whose mission is to protect the interests of pan-European civilization and ensure personal freedom through investments in social capital, technological progress, and monitoring institutions that suppress dissent."
                    : "Фонд создан как независимый аналитический центр, миссией которого является защита интересов общеевропейской цивилизации и обеспечение свободы личности через инвестиции в социальный капитал, технологический прогресс и мониторинг институтов подавления инакомыслия."}
                </p>
                
                <p>
                  {isEn
                    ? "To achieve this mission, the Foundation sets the following statutory goals:"
                    : "Для достижения этой миссии Фонд ставит перед собой следующие уставные цели:"}
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{isEn ? "Research on censorship mechanisms: Analysis of global trends in restricting freedom of speech and developing methods to counter supranational control." : "Исследование механизмов цензуры: Анализ глобальных трендов ограничения свободы слова и разработка методов противодействия наднациональному контролю."}</li>
                  <li>{isEn ? "Monitoring databases: Auditing the transparency and accountability of international structures (Interpol, FATF, etc.) to prevent their use for political repression." : "Мониторинг баз данных: Аудит прозрачности и подотчетности международных структур (Interpol, FATF и др.) для предотвращения их использования в целях политических репрессий."}</li>
                  <li>{isEn ? "Technological education: Research on digital environment risks (VPN, data leaks) and training citizens in methods of protecting privacy and bypassing censorship." : "Технологическое просвещение: Исследование рисков цифровой среды (VPN, утечки данных) и обучение граждан методам защиты частной жизни и обхода цензуры."}</li>
                </ul>

                <h3 className="text-3xl font-black uppercase tracking-tighter mb-6">{isEn ? "Content Funnel Model" : "Модель контентной воронки"}</h3>
                <p>
                  {isEn
                    ? "To implement the mission, Hyperboloid implements a 'content funnel' model, where each large-scale research is converted into a series of regular publications to maintain public outreach."
                    : "Для реализации миссии Hyperboloid внедряет модель «контентной воронки», где каждое масштабное исследование конвертируется в серию регулярных публикаций для поддержания публичного охвата."}
                </p>

                <h3 className="text-3xl font-black uppercase tracking-tighter mb-6">{isEn ? "Key Research Projects" : "Ключевые исследовательские проекты"}</h3>
                <p>
                  {isEn
                    ? "The program for the first 12 months includes 6 priority areas (reports), each of which forms the basis of scientific and journalistic activities:"
                    : "Программа на первые 12 месяцев включает 6 приоритетных направлений (докладов), каждое из которых ложится в основу научной и публицистической деятельности:"}
                </p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>{isEn ? "Human rights monitoring: Report on the persecution of Christians and dissenters in Russia. Focus on freedom of conscience and protection of persecuted groups." : "Правозащитный мониторинг: Доклад о притеснении христиан и инакомыслящих в России. Фокус на свободе совести и защите преследуемых групп."}</li>
                  <li>{isEn ? "Comparative analysis of censorship: Freedom of speech and censorship in the Russian Federation: lessons and examples for the EU. Research on restrictions under the pretext of 'protecting the constitutional order'." : "Сравнительный анализ цензуры: Свобода слова и цензура в РФ: уроки и примеры для ЕС. Исследование ограничений под предлогом «защиты конституционного строя»."}</li>
                  <li>{isEn ? "Economic degradation: Analysis of the connection between the growth of the state sector/oligarchy and the decline of business (on the example of the Russian Federation)." : "Экономическая деградация: Анализ связи между ростом госсектора/олигархии и упадком бизнеса (на примере РФ)."}</li>
                  <li>{isEn ? "Political repression from the right: Persecution of conservatives and right-wingers in Russia. Thesis for dialogue with European politicians: risks of sympathy for authoritarian regimes." : "Политические репрессии справа: Преследование консерваторов и правых в России. Тезис для диалога с европейскими политиками: риски симпатий к авторитарным режимам."}</li>
                  <li>{isEn ? "Geopolitical security: The danger of anti-American resentment for the EU. Analysis of the influence of propaganda on Europe's strategic stability." : "Геополитическая безопасность: Опасность антиамериканского ресентимента для ЕС. Анализ влияния пропаганды на стратегическую устойчивость Европы."}</li>
                  <li>{isEn ? "External influence: Research on Chinese and Arab influence in the EU. Analysis of threats from left-radical movements and the growth of anti-Semitic sentiments." : "Внешнее влияние: Исследование китайского и арабского влияния в ЕС. Анализ угроз со стороны леворадикальных движений и роста антисемитских настроений."}</li>
                </ol>

                <h3 className="text-3xl font-black uppercase tracking-tighter mb-6">{isEn ? "Production Cycle (KPIs)" : "Производственный цикл (KPI)"}</h3>
                <p>
                  {isEn
                    ? "In a year, the Foundation undertakes to implement:"
                    : "В год Фонд обязуется реализовать:"}
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{isEn ? "4 scientific researches: Publications in peer-reviewed academic journals (1 per quarter)." : "4 научных исследования: Публикации в рецензируемых академических изданиях (по 1 в квартал)."}</li>
                  <li>{isEn ? "6 mini-researches: Journalistic investigations (insights) on database and cybersecurity issues." : "6 мини-исследований: Журналистские расследования (инсайды) по проблемам баз данных и кибербезопасности."}</li>
                  <li>{isEn ? "54 analytical longreads: Weekly articles of about 2000 words, integrating data from reports and hearings." : "54 аналитических лонгрида: Еженедельные статьи объемом около 2000 слов, интегрирующие данные докладов и слушаний."}</li>
                  <li>{isEn ? "2–4 hearings: Participation in the work of EU parliamentary groups (at least once every six months)." : "2–4 слушания: Участие в работе парламентских групп ЕС (минимум раз в полгода)."}</li>
                </ul>

                <h3 className="text-3xl font-black uppercase tracking-tighter mb-6">{isEn ? "Stichting Activity" : "Деятельность Stichting"}</h3>
                <p>
                  {isEn
                    ? "Stichting Hyperboloid is currently in the process of opening and launching. We are an independent non-profit organization registered in the Netherlands, focused on protecting digital human rights and monitoring supranational institutions."
                    : "Stichting Hyperboloid сейчас находится в процессе открытия и запуска. Мы — независимая некоммерческая организация, зарегистрированная в Нидерландах, сосредоточенная на защите цифровых прав человека и мониторинге наднациональных институтов."}
                </p>

                <h3 className="text-3xl font-black uppercase tracking-tighter mb-6">{isEn ? "Plans and Approach" : "Планы и подход"}</h3>
                <p>
                  {isEn
                    ? "Our approach includes projects under Stichting, such as transparency-first.org — a project for researching the reform of databases not controlled by society, including Interpol, FATF, Egmont Group, etc. We implement a content funnel model to convert research into publications and maintain public engagement."
                    : "Наш подход включает проекты при Stichting, такие как transparency-first.org — проект исследований реформирования неподконтрольных обществу баз данных Interpol, FATF, Egmont Group и т.д. Мы внедряем модель контентной воронки для конвертации исследований в публикации и поддержания общественного вовлечения."}
                </p>

                <h3 className="text-3xl font-black uppercase tracking-tighter mb-6">{isEn ? "Initial Composition" : "Состав на старте"}</h3>
                <p>
                  {isEn
                    ? "At the start, the team includes experts in international law, cybersecurity, human rights, and journalism. The board consists of independent trustees ensuring insulation from political and commercial pressures."
                    : "На старте команда включает экспертов в международном праве, кибербезопасности, правах человека и журналистике. Совет состоит из независимых попечителей, обеспечивающих изоляцию от политического и коммерческого давления."}
                </p>

                <h3 className="text-3xl font-black uppercase tracking-tighter mb-6">{isEn ? "Donations and Contributions" : "Пожертвования и взносы"}</h3>
                <p>
                  {isEn
                    ? "We accept donations and contributions in various forms to support our mission. Budgets are not disclosed, but we ensure transparency in reporting."
                    : "Мы принимаем пожертвования и взносы в различных формах для поддержки нашей миссии. Бюджеты не разглашаем, но обеспечиваем прозрачность в отчетности."}
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>{isEn ? "For Mass Media:" : "Для масс-медиа:"}</strong> {isEn ? "Support for media coverage and dissemination of our research." : "Поддержка медиа-покрытия и распространения наших исследований."}</li>
                  <li><strong>{isEn ? "Press Center:" : "Пресс-центр:"}</strong> {isEn ? "Resources for press releases and media relations." : "Ресурсы для пресс-релизов и связей с СМИ."}</li>
                  <li><strong>{isEn ? "For Volunteers:" : "Для волонтеров:"}</strong> {isEn ? "Opportunities for volunteers to contribute to research and outreach." : "Возможности для волонтеров внести вклад в исследования и outreach."}</li>
                  <li><strong>{isEn ? "For Lawyers:" : "Для юристов:"}</strong> {isEn ? "Support for legal experts in human rights and digital rights cases." : "Поддержка для юристов-экспертов в делах прав человека и цифровых прав."}</li>
                  <li><strong>{isEn ? "For Business:" : "Для бизнеса:"}</strong> {isEn ? "Partnerships and sponsorships from businesses aligned with our values." : "Партнерства и спонсорство от бизнеса, разделяющего наши ценности."}</li>
                  <li><strong>{isEn ? "Grants:" : "Гранты:"}</strong> {isEn ? "Applications for grants from foundations and international organizations." : "Заявки на гранты от фондов и международных организаций."}</li>
                  <li><strong>{isEn ? "Reporting:" : "Отчетность:"}</strong> {isEn ? "We produce annual reports on expenditures and achievements, ensuring accountability." : "Мы производим ежегодные отчеты по затратам и достижениям, обеспечивая подотчетность."}</li>
                  <li><strong>{isEn ? "Achievements:" : "Достижения:"}</strong> {isEn ? "Track record of published research, hearings, and impact on policy." : "История опубликованных исследований, слушаний и влияния на политику."}</li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-8">
              <div className="sticky top-40 space-y-8">
                 <div className="p-10 bg-gray-50 rounded-[40px] border border-gray-100">
                    <Lock className="w-10 h-10 text-brand-accent mb-6" />
                    <h4 className="text-xl font-black uppercase tracking-tighter mb-4">{isEn ? "The Hyperboloid Philosophy" : "Философия Гиперболоида"}</h4>
                    <p className="text-gray-500 font-light leading-relaxed italic">
                      {isEn 
                        ? "We view the internet not as a service, but as the primary jurisdiction of contemporary human existence. Its rules must be as fair and transparent as our constitutions."
                        : "Мы рассматриваем интернет не как услугу, а как первичную юрисдикцию современного человеческого существования. Его правила должны быть такими же справедливыми и прозрачными, как и наши конституции."}
                    </p>
                 </div>
                 <div className="p-10 bg-[#050505] text-white rounded-[40px]">
                    <h4 className="text-xl font-black uppercase tracking-tighter mb-6">{isEn ? "Core Directives" : "Основные директивы"}</h4>
                    <ul className="space-y-4 text-sm font-bold uppercase tracking-widest text-gray-400">
                      <li className="flex items-center gap-3"><span className="w-1 h-1 bg-brand-accent rounded-full" /> {isEn ? "Protocol Neutrality" : "Нейтралитет протоколов"}</li>
                      <li className="flex items-center gap-3"><span className="w-1 h-1 bg-brand-accent rounded-full" /> {isEn ? "Encryption Sovereignty" : "Суверенитет шифрования"}</li>
                      <li className="flex items-center gap-3"><span className="w-1 h-1 bg-brand-accent rounded-full" /> {isEn ? "Data Dignity" : "Достоинство данных"}</li>
                      <li className="flex items-center gap-3"><span className="w-1 h-1 bg-brand-accent rounded-full" /> {isEn ? "Institutional Transparency" : "Прозрачность институтов"}</li>
                    </ul>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
