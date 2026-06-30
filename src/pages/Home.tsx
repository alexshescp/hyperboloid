import { motion } from "motion/react";
import { ArrowRight, Shield, Globe, Lock } from "lucide-react";
import { siteContent } from "../i18n";
import { Language } from "../types";
import { SEOHead } from "../components/SEOHead";

export default function Home({ lang }: { lang: Language }) {
  const data = siteContent.labels[lang];
  const pageData = siteContent.pages.home;

  const t = {
    en: {
      subtitle: "Censorship Under the Microscope",
      title: "Digital Human Rights\nProtection",
      missionTitle: "Mission and Goals",
      mission1: "The Foundation is created as an independent analytical center, whose mission is to protect the interests of pan-European civilization and ensure personal freedom through investments in social capital, technological progress, and monitoring institutions that suppress dissent.",
      mission2: "To achieve this mission, the Foundation sets the following statutory goals:",
      goal1: "Research on censorship mechanisms: Analysis of global trends in restricting freedom of speech and developing methods to counter supranational control.",
      goal2: "Monitoring databases: Researching the transparency and accountability of international structures (Interpol, FATF, etc.) to prevent their use for political repression.",
      goal3: "Technological education: Research on digital environment risks (VPN, data leaks) and training citizens in methods of protecting privacy and bypassing censorship.",
      funnelTitle: "Content Funnel Model",
      funnelText: "To implement the mission, Hyperboloid implements a 'content funnel' model, where each large-scale research is converted into a series of regular publications to maintain public outreach.",
      researchTitle: "Key Research Projects",
      researchIntro: "The program for the first 12 months includes 6 priority areas (reports), each of which forms the basis of scientific and journalistic activities:",
      project1: "Human rights monitoring: Report on the persecution of Christians and dissenters in Russia. Focus on freedom of conscience and protection of persecuted groups.",
      project2: "Comparative analysis of censorship: Freedom of speech and censorship in the Russian Federation: lessons and examples for the EU. Research on restrictions under the pretext of 'protecting the constitutional order'.",
      project3: "Economic degradation: Analysis of the connection between the growth of the state sector/oligarchy and the decline of business (on the example of the Russian Federation).",
      project4: "Political repression from the right: Persecution of conservatives and right-wingers in Russia. Thesis for dialogue with European politicians: risks of sympathy for authoritarian regimes.",
      project5: "Geopolitical security: The danger of anti-American resentment for the EU. Analysis of the influence of propaganda on Europe's strategic stability.",
      project6: "External influence: Research on Chinese and Arab influence in the EU. Analysis of threats from left-radical movements and the growth of anti-Semitic sentiments.",
      kpiTitle: "Production Cycle (KPIs)",
      kpiIntro: "In a year, the Foundation undertakes to implement:",
      kpi1: "4 scientific researches: Publications in peer-reviewed academic journals (1 per quarter).",
      kpi2: "6 mini-researches: Journalistic investigations (insights) on database and cybersecurity issues.",
      kpi3: "54 analytical longreads: Weekly articles of about 2000 words, integrating data from reports and hearings.",
      kpi4: "2–4 hearings: Participation in the work of EU parliamentary groups (at least once every six months).",
      activityTitle: "Stichting Activity",
      activityText: "Stichting Hyperboloid is currently in the process of opening and launching. We are an independent non-profit organization registered in the Netherlands, focused on protecting digital human rights and monitoring supranational institutions.",
      approachTitle: "Plans and Approach",
      approachText: "Our approach includes projects under Stichting, such as transparency-first.org — a project for researching the reform of databases not controlled by society, including Interpol, FATF, Egmont Group, etc.",
      compositionTitle: "Initial Composition",
      compositionText: "At the start, the team includes experts in international law, cybersecurity, human rights, and journalism. The board consists of independent trustees ensuring insulation from political and commercial pressures.",
      donationsTitle: "Donations and Contributions",
      donationsIntro: "We accept donations and contributions in various forms to support our mission. Budgets are not disclosed, but we ensure transparency in reporting.",
      donations1Title: "For Mass Media:",
      donations1Text: "Support for media coverage and dissemination of our research.",
      donations2Title: "Press Center:",
      donations2Text: "Resources for press releases and media relations.",
      donations3Title: "For Volunteers:",
      donations3Text: "Opportunities for volunteers to contribute to research and outreach.",
      donations4Title: "For Lawyers:",
      donations4Text: "Support for legal experts in human rights and digital rights cases.",
      donations5Title: "For Business:",
      donations5Text: "Partnerships and sponsorships from businesses aligned with our values.",
      donations6Title: "Grants:",
      donations6Text: "Applications for grants from foundations and international organizations.",
      donations7Title: "Reporting:",
      donations7Text: "We produce annual reports on expenditures and achievements, ensuring accountability.",
      donations8Title: "Achievements:",
      donations8Text: "Track record of published research, hearings, and impact on policy.",
      philosophyTitle: "The Hyperboloid Philosophy",
      philosophyText: "We view the internet not as a service, but as the primary jurisdiction of contemporary human existence. Its rules must be as fair and transparent as our constitutions.",
      directivesTitle: "Core Directives",
      directive1: "Protocol Neutrality",
      directive2: "Encryption Sovereignty",
      directive3: "Data Dignity",
      directive4: "Institutional Transparency"
    },
    ru: {
      subtitle: "Цензура под микроскопом",
      title: "Защита цифровых\nправ человека",
      missionTitle: "Миссия и цели",
      mission1: "Фонд создан как независимый аналитический центр, миссией которого является защита интересов общеевропейской цивилизации и обеспечение свободы личности через инвестиции в социальный капитал, технологический прогресс и мониторинг институтов подавления инакомыслия.",
      mission2: "Для достижения этой миссии Фонд ставит перед собой следующие уставные цели:",
      goal1: "Исследование механизмов цензуры: Анализ глобальных трендов ограничения свободы слова и разработка методов противодействия наднациональному контролю.",
      goal2: "Мониторинг баз данных: Исследование прозрачности и подотчетности международных структур (Interpol, FATF и др.) для предотвращения их использования в целях политических репрессий.",
      goal3: "Технологическое просвещение: Исследование рисков цифровой среды (VPN, утечки данных) и обучение граждан методам защиты частной жизни и обхода цензуры.",
      funnelTitle: "Модель контентной воронки",
      funnelText: "Для реализации миссии Hyperboloid внедряет модель «контентной воронки», где каждое масштабное исследование конвертируется в серию регулярных публикаций для поддержания публичного охвата.",
      researchTitle: "Ключевые исследовательские проекты",
      researchIntro: "Программа на первые 12 месяцев включает 6 приоритетных направлений (докладов), каждое из которых ложится в основу научной и публицистической деятельности:",
      project1: "Правозащитный мониторинг: Доклад о притеснении христиан и инакомыслящих в России. Фокус на свободе совести и защите преследуемых групп.",
      project2: "Сравнительный анализ цензуры: Свобода слова и цензура в РФ: уроки и примеры для ЕС. Исследование ограничений под предлогом «защиты конституционного строя».",
      project3: "Экономическая деградация: Анализ связи между ростом госсектора/олигархии и упадком бизнеса (на примере РФ).",
      project4: "Политические репрессии справа: Преследование консерваторов и правых в России. Тезис для диалога с европейскими политиками: риски симпатий к авторитарным режимам.",
      project5: "Геополитическая безопасность: Опасность антиамериканского ресентимента для ЕС. Анализ влияния пропаганды на стратегическую устойчивость Европы.",
      project6: "Внешнее влияние: Исследование китайского и арабского влияния в ЕС. Анализ угроз со стороны леворадикальных движений и роста антисемитских настроений.",
      kpiTitle: "Производственный цикл (KPI)",
      kpiIntro: "В год Фонд обязуется реализовать:",
      kpi1: "4 научных исследования: Публикации в рецензируемых академических изданиях (по 1 в квартал).",
      kpi2: "6 мини-исследований: Журналистские расследования (инсайды) по проблемам баз данных и кибербезопасности.",
      kpi3: "54 аналитических лонгрида: Еженедельные статьи объемом около 2000 слов, интегрирующие данные докладов и слушаний.",
      kpi4: "2–4 слушания: Участие в работе парламентских групп ЕС (минимум раз в полгода).",
      activityTitle: "Деятельность Stichting",
      activityText: "Stichting Hyperboloid сейчас находится в процессе открытия и запуска. Мы — независимая некоммерческая организация, зарегистрированная в Нидерландах, сосредоточенная на защите цифровых прав человека и мониторинге наднациональных институтов.",
      approachTitle: "Планы и подход",
      approachText: "Наш подход включает проекты при Stichting, такие как transparency-first.org — проект исследований реформирования неподконтрольных обществу баз данных Interpol, FATF, Egmont Group и т.д.",
      compositionTitle: "Состав на старте",
      compositionText: "На старте команда включает экспертов в международном праве, кибербезопасности, правах человека и журналистике. Совет состоит из независимых попечителей, обеспечивающих изоляцию от политического и коммерческого давления.",
      donationsTitle: "Пожертвования и взносы",
      donationsIntro: "Мы принимаем пожертвования и взносы в различных формах для поддержки нашей миссии. Бюджеты не разглашаем, но обеспечиваем прозрачность в отчетности.",
      donations1Title: "Для масс-медиа:",
      donations1Text: "Поддержка медиа-покрытия и распространения наших исследований.",
      donations2Title: "Пресс-центр:",
      donations2Text: "Ресурсы для пресс-релизов и связей с СМИ.",
      donations3Title: "Для волонтеров:",
      donations3Text: "Возможности для волонтеров внести вклад в исследования и outreach.",
      donations4Title: "Для юристов:",
      donations4Text: "Поддержка для юристов-экспертов в делах прав человека и цифровых прав.",
      donations5Title: "Для бизнеса:",
      donations5Text: "Партнерства и спонсорство от бизнеса, разделяющего наши ценности.",
      donations6Title: "Гранты:",
      donations6Text: "Заявки на гранты от фондов и международных организаций.",
      donations7Title: "Отчетность:",
      donations7Text: "Мы производим ежегодные отчеты по затратам и достижениям, обеспечивая подотчетность.",
      donations8Title: "Достижения:",
      donations8Text: "История опубликованных исследований, слушаний и влияния на политику.",
      philosophyTitle: "Философия Гиперболоида",
      philosophyText: "Мы рассматриваем интернет не как услугу, а как первичную юрисдикцию современного человеческого существования. Его правила должны быть такими же справедливыми и прозрачными, как и наши конституции.",
      directivesTitle: "Основные директивы",
      directive1: "Нейтралитет протоколов",
      directive2: "Суверенитет шифрования",
      directive3: "Достоинство данных",
      directive4: "Прозрачность институтов"
    },
    nl: {
      subtitle: "Censuur onder de microscoop",
      title: "Digitale Mensenrechten\nBescherming",
      missionTitle: "Missie en Doelen",
      mission1: "De Stichting is opgericht als een onafhankelijk analytisch centrum, met als missie het beschermen van de belangen van de pan-Europese beschaving en het waarborgen van persoonlijke vrijheid door investeringen in sociaal kapitaal, technologische vooruitgang en het monitoren van instellingen die afwijkende meningen onderdrukken.",
      mission2: "Om deze missie te volbrengen, stelt de Stichting de volgende statutaire doelen:",
      goal1: "Onderzoek naar censuurmechanismen: Analyse van wereldwijde trends in het beperken van de vrijheid van meningsuiting en het ontwikkelen van methoden om supranationale controle tegen te gaan.",
      goal2: "Monitoring van databanken: Onderzoek naar de transparantie en verantwoording van internationale structuren (Interpol, FATF, enz.) om te voorkomen dat ze worden gebruikt voor politieke repressie.",
      goal3: "Technologische educatie: Onderzoek naar risico's in de digitale omgeving (VPN, datalekken) en burgers trainen in methoden om privacy te beschermen en censuur te omzeilen.",
      funnelTitle: "Content Funnel Model",
      funnelText: "Om de missie uit te voeren, implementeert Hyperboloid een 'content funnel'-model, waarbij elk grootschalig onderzoek wordt omgezet in een reeks regelmatige publicaties om de publieke reikwijdte te behouden.",
      researchTitle: "Belangrijkste Onderzoeksprojecten",
      researchIntro: "Het programma voor de eerste 12 maanden omvat 6 prioritaire gebieden (rapporten), die elk de basis vormen voor wetenschappelijke en journalistieke activiteiten:",
      project1: "Mensenrechtenmonitoring: Rapport over de vervolging van christenen en dissidenten in Rusland. Focus op gewetensvrijheid en bescherming van vervolgde groepen.",
      project2: "Vergelijkende analyse van censuur: Vrijheid van meningsuiting en censuur in de Russische Federatie: lessen en voorbeelden voor de EU.",
      project3: "Economische degradatie: Analyse van het verband tussen de groei van de staatssector/oligarchie en de achteruitgang van het bedrijfsleven.",
      project4: "Politieke repressie van rechts: Vervolging van conservatieven en rechtsen in Rusland. Thesis voor dialoog met Europese politici: risico's van sympathie voor autoritaire regimes.",
      project5: "Geopolitieke veiligheid: Het gevaar van anti-Amerikaans ressentiment voor de EU. Analyse van de invloed van propaganda op de strategische stabiliteit van Europa.",
      project6: "Externe invloed: Onderzoek naar Chinese en Arabische invloed in de EU. Analyse van dreigingen van links-radicale bewegingen.",
      kpiTitle: "Productiecyclus (KPI's)",
      kpiIntro: "In een jaar verbindt de Stichting zich tot het realiseren van:",
      kpi1: "4 wetenschappelijke onderzoeken: Publicaties in peer-reviewed academische tijdschriften (1 per kwartaal).",
      kpi2: "6 mini-onderzoeken: Journalistieke onderzoeken (insights) over databank- en cybersecurity-kwesties.",
      kpi3: "54 analytische longreads: Wekelijkse artikelen van ongeveer 2000 woorden.",
      kpi4: "2–4 hoorzittingen: Deelname aan het werk van EU-parlementaire fracties.",
      activityTitle: "Stichting Activiteit",
      activityText: "Stichting Hyperboloid bevindt zich momenteel in het proces van opening en lancering. Wij zijn een onafhankelijke non-profitorganisatie geregistreerd in Nederland.",
      approachTitle: "Plannen en Aanpak",
      approachText: "Onze aanpak omvat projecten onder de Stichting, zoals transparency-first.org — een project voor onderzoek naar de hervorming van databanken.",
      compositionTitle: "Initiële Samenstelling",
      compositionText: "Bij de start omvat het team experts in internationaal recht, cybersecurity, mensenrechten en journalistiek.",
      donationsTitle: "Donaties en Bijdragen",
      donationsIntro: "Wij accepteren donaties en bijdragen in verschillende vormen om onze missie te ondersteunen.",
      donations1Title: "Voor Massamedia:",
      donations1Text: "Ondersteuning voor mediaverslaggeving en verspreiding van ons onderzoek.",
      donations2Title: "Perscentrum:",
      donations2Text: "Middelen voor persberichten en mediarelaties.",
      donations3Title: "Voor Vrijwilligers:",
      donations3Text: "Mogelijkheden voor vrijwilligers om bij te dragen aan onderzoek en outreach.",
      donations4Title: "Voor Juristen:",
      donations4Text: "Ondersteuning voor juridische experts in mensenrechtenzaken.",
      donations5Title: "Voor Bedrijven:",
      donations5Text: "Partnerschappen en sponsoring van bedrijven die onze waarden delen.",
      donations6Title: "Subsidies:",
      donations6Text: "Aanvragen voor subsidies van stichtingen en internationale organisaties.",
      donations7Title: "Rapportage:",
      donations7Text: "Wij produceren jaarverslagen over uitgaven en prestaties.",
      donations8Title: "Prestaties:",
      donations8Text: "Track record van gepubliceerde onderzoeken en hoorzittingen.",
      philosophyTitle: "De Hyperboloid Filosofie",
      philosophyText: "Wij beschouwen het internet niet als een dienst, maar als de primaire jurisdictie van het hedendaagse menselijke bestaan.",
      directivesTitle: "Kernrichtlijnen",
      directive1: "Protocolneutraliteit",
      directive2: "Encryptiesoevereiniteit",
      directive3: "Datawaardigheid",
      directive4: "Institutionele Transparantie"
    },
    fr: {
      subtitle: "La censure sous le microscope",
      title: "Protection des Droits\nHumains Numériques",
      missionTitle: "Mission et Objectifs",
      mission1: "La Fondation est créée en tant que centre d'analyse indépendant, dont la mission est de protéger les intérêts de la civilisation paneuropéenne et d'assurer la liberté individuelle par des investissements dans le capital social, le progrès technologique et le suivi des institutions qui répriment la dissidence.",
      mission2: "Pour accomplir cette mission, la Fondation se fixe les objectifs statutaires suivants :",
      goal1: "Recherche sur les mécanismes de censure : Analyse des tendances mondiales de restriction de la liberté d'expression et développement de méthodes pour contrer le contrôle supranational.",
      goal2: "Suivi des bases de données : Étude de la transparence et de la redevabilité des structures internationales (Interpol, GAFI, etc.) pour empêcher leur utilisation à des fins de répression politique.",
      goal3: "Éducation technologique : Recherche sur les risques de l'environnement numérique (VPN, fuites de données) et formation des citoyens aux méthodes de protection de la vie privée.",
      funnelTitle: "Modèle de tunnel de contenu",
      funnelText: "Pour mettre en œuvre sa mission, Hyperboloid applique un modèle de « tunnel de contenu », où chaque recherche à grande échelle est convertie en une série de publications régulières.",
      researchTitle: "Principaux projets de recherche",
      researchIntro: "Le programme des 12 premiers mois comprend 6 domaines prioritaires (rapports), dont chacun constitue la base d'activités scientifiques et journalistiques :",
      project1: "Suivi des droits de l'homme : Rapport sur la persécution des chrétiens et des dissidents en Russie. Focus sur la liberté de conscience.",
      project2: "Analyse comparative de la censure : Liberté d'expression et censure en Fédération de Russie : leçons et exemples pour l'UE.",
      project3: "Dégradation économique : Analyse du lien entre la croissance du secteur public/de l'oligarchie et le déclin des entreprises.",
      project4: "Répression politique de droite : Persécution des conservateurs et des militants de droite en Russie. Dialogue avec les politiciens européens.",
      project5: "Sécurité géopolitique : Le danger du ressentiment anti-américain pour l'UE. Analyse de l'influence de la propagande.",
      project6: "Influence extérieure : Recherche sur l'influence chinoise et arabe dans l'UE. Analyse des menaces des mouvements de gauche radicale.",
      kpiTitle: "Cycle de production (KPI)",
      kpiIntro: "En un an, la Fondation s'engage à réaliser :",
      kpi1: "4 recherches scientifiques : Publications dans des revues académiques à comité de lecture (1 par trimestre).",
      kpi2: "6 mini-recherches : Enquêtes journalistiques (insights) sur les bases de données et la cybersécurité.",
      kpi3: "54 longreads analytiques : Articles hebdomadaires d'environ 2000 mots.",
      kpi4: "2 à 4 auditions : Participation aux travaux des groupes parlementaires de l'UE.",
      activityTitle: "Activité de la Stichting",
      activityText: "La Stichting Hyperboloid est actuellement en cours d'ouverture et de lancement. Nous sommes une organisation indépendante à but non lucratif enregistrée aux Pays-Bas.",
      approachTitle: "Plans et approche",
      approachText: "Notre approche inclut des projets sous l'égide de la Stichting, tels que transparency-first.org — un projet de recherche sur la réforme des bases de données.",
      compositionTitle: "Composition initiale",
      compositionText: "Au départ, l'équipe comprend des experts en droit international, en cybersécurité, en droits de l'homme et en journalisme.",
      donationsTitle: "Dons et contributions",
      donationsIntro: "Nous acceptons les dons et contributions sous diverses formes pour soutenir notre mission.",
      donations1Title: "Pour les médias :",
      donations1Text: "Soutien à la couverture médiatique et à la diffusion de nos recherches.",
      donations2Title: "Centre de presse :",
      donations2Text: "Ressources pour les communiqués de presse et les relations avec les médias.",
      donations3Title: "Pour les bénévoles :",
      donations3Text: "Possibilités pour les bénévoles de contribuer à la recherche et à la sensibilisation.",
      donations4Title: "Pour les juristes :",
      donations4Text: "Soutien aux experts juridiques dans les affaires de droits de l'homme.",
      donations5Title: "Pour les entreprises :",
      donations5Text: "Partenariats et parrainages d'entreprises alignées sur nos valeurs.",
      donations6Title: "Subventions :",
      donations6Text: "Demandes de subventions auprès de fondations et d'organisations internationales.",
      donations7Title: "Rapports :",
      donations7Text: "Nous produisons des rapports annuels sur les dépenses et les réalisations.",
      donations8Title: "Réalisations :",
      donations8Text: "Historique des recherches publiées, des auditions et de l'impact sur les politiques.",
      philosophyTitle: "La philosophie Hyperboloid",
      philosophyText: "Nous considérons l'internet non pas comme un service, mais comme la juridiction primaire de l'existence humaine contemporaine.",
      directivesTitle: "Directives fondamentales",
      directive1: "Neutralité du protocole",
      directive2: "Souveraineté du cryptage",
      directive3: "Dignité des données",
      directive4: "Transparence institutionnelle"
    },
    de: {
      subtitle: "Zensur unter dem Mikroskop",
      title: "Schutz digitaler\nMenschenrechte",
      missionTitle: "Mission und Ziele",
      mission1: "Die Stiftung wurde als unabhängiges Analysezentrum gegründet, dessen Mission es ist, die Interessen der paneuropäischen Zivilisation zu schützen und die persönliche Freiheit durch Investitionen in Sozialkapital, technologischen Fortschritt und die Überwachung von Institutionen, die Dissens unterdrücken, zu gewährleisten.",
      mission2: "Um diese Mission zu erfüllen, setzt sich die Stiftung die folgenden satzungsgemäßen Ziele:",
      goal1: "Forschung zu Zensurmechanismen: Analyse globaler Trends bei der Einschränkung der Meinungsfreiheit und Entwicklung von Methoden zur Bekämpfung supranationaler Kontrolle.",
      goal2: "Überwachung von Datenbanken: Untersuchung der Transparenz und Rechenschaftspflicht internationaler Strukturen (Interpol, FATF usw.), um deren Missbrauch für politische Repressionen zu verhindern.",
      goal3: "Technologische Aufklärung: Erforschung von Risiken im digitalen Umfeld (VPN, Datenlecks) und Schulung von Bürgern in Methoden zum Schutz der Privatsphäre.",
      funnelTitle: "Content-Funnel-Modell",
      funnelText: "Zur Umsetzung der Mission implementiert Hyperboloid ein „Content-Funnel“-Modell, bei dem jede groß angelegte Forschungsarbeit in eine Serie regelmäßiger Publikationen umgewandelt wird.",
      researchTitle: "Wichtige Forschungsprojekte",
      researchIntro: "Das Programm für die ersten 12 Monate umfasst 6 Schwerpunktbereiche (Berichte), die jeweils die Grundlage für wissenschaftliche und journalistische Aktivitäten bilden:",
      project1: "Menschenrechtsmonitoring: Bericht über die Verfolgung von Christen und Andersdenkenden in Russland. Fokus auf Gewissensfreiheit.",
      project2: "Vergleichende Zensuranalyse: Meinungsfreiheit und Zensur in der Russischen Föderation: Lehren und Beispiele für die EU.",
      project3: "Wirtschaftlicher Niedergang: Analyse des Zusammenhangs zwischen dem Wachstum des Staatssektors/der Oligarchie und dem Niedergang der Wirtschaft.",
      project4: "Politische Repression von rechts: Verfolgung von Konservativen und Rechten in Russland. Dialog mit europäischen Politikern.",
      project5: "Geopolitische Sicherheit: Die Gefahr antiamerikanischer Ressentiments für die EU. Analyse des Einflusses von Propaganda.",
      project6: "Externer Einfluss: Untersuchung des chinesischen und arabischen Einflusses in der EU. Analyse von Bedrohungen durch linksradikale Bewegungen.",
      kpiTitle: "Produktionszyklus (KPIs)",
      kpiIntro: "In einem Jahr verpflichtet sich die Stiftung zur Umsetzung von:",
      kpi1: "4 wissenschaftlichen Forschungen: Publikationen in begutachteten akademischen Fachzeitschriften (1 pro Quartal).",
      kpi2: "6 Mini-Forschungen: Journalistische Untersuchungen (Insights) zu Datenbank- und Cybersicherheitsthemen.",
      kpi3: "54 analytischen Longreads: Wöchentliche Artikel mit einem Umfang von ca. 2000 Wörtern.",
      kpi4: "2–4 Anhörungen: Teilnahme an der Arbeit von EU-Parlamentsfraktionen.",
      activityTitle: "Aktivität der Stichting",
      activityText: "Die Stichting Hyperboloid befindet sich derzeit im Prozess der Eröffnung und des Starts. Wir sind eine unabhängige gemeinnützige Organisation mit Sitz in de Niederlanden.",
      approachTitle: "Pläne und Ansatz",
      approachText: "Unser Ansatz umfasst Projekte unter der Stichting, wie transparency-first.org – ein Projekt zur Erforschung der Reform von Datenbanken.",
      compositionTitle: "Ursprüngliche Zusammensetzung",
      compositionText: "Zu Beginn besteht das Team aus Experten für internationales Recht, Cybersicherheit, Menschenrechte und Journalismus.",
      donationsTitle: "Spenden und Beiträge",
      donationsIntro: "Wir akzeptieren Spenden und Beiträge in verschiedenen Formen, um unsere Mission zu unterstützen.",
      donations1Title: "Für Massenmedien:",
      donations1Text: "Unterstützung der Medienberichterstattung und Verbreitung unserer Forschung.",
      donations2Title: "Pressezentrum:",
      donations2Text: "Ressourcen für Pressemitteilungen und Medienarbeit.",
      donations3Title: "Für Freiwillige:",
      donations3Text: "Möglichkeiten für Freiwillige, zu Forschung und Öffentlichkeitsarbeit beizutragen.",
      donations4Title: "Für Juristen:",
      donations4Text: "Unterstützung für Rechtsexperten in Menschenrechtsfällen.",
      donations5Title: "Für Unternehmen:",
      donations5Text: "Partnerschaften und Sponsoring von Unternehmen, die unsere Werte teilen.",
      donations6Title: "Fördergelder:",
      donations6Text: "Beantragung von Fördermitteln bei Stiftungen und internationalen Organisationen.",
      donations7Title: "Berichterstattung:",
      donations7Text: "Wir erstellen Jahresberichte über Ausgaben und Erfolge.",
      donations8Title: "Erfolge:",
      donations8Text: "Erfolgsbilanz veröffentlichter Forschungsergebnisse, Anhörungen und Einfluss op die Politik.",
      philosophyTitle: "Die Hyperboloid-Philosophie",
      philosophyText: "Wir betrachten das Internet nicht als Dienstleistung, sondern als die primäre Jurisdiktion der zeitgenössischen menschlichen Existenz.",
      directivesTitle: "Kerndirektiven",
      directive1: "Protokollneutralität",
      directive2: "Souveränität der Verschlüsselung",
      directive3: "Datenwürde",
      directive4: "Institutionelle Transparenz"
    },
    es: {
      subtitle: "La censura bajo el microscopio",
      title: "Protección de los Derechos\nHumanos Digitales",
      missionTitle: "Misión y Objetivos",
      mission1: "La Fundación se crea como un centro analítico independiente, cuya misión es proteger los intereses de la civilización paneuropea y garantizar la libertad personal a través de inversiones en capital social, progreso tecnológico y el monitoreo de instituciones que reprimen la disidencia.",
      mission2: "Para lograr esta misión, la Fundación establece los siguientes objetivos estatutarios:",
      goal1: "Investigación sobre mecanismos de censura: Análisis de las tendencias mundiales en la restricción de la libertad de expresión y desarrollo de métodos para contrarrestar el control supranacional.",
      goal2: "Monitoreo de bases de datos: Investigación de la transparencia y rendición de cuentas de estructuras internacionales (Interpol, GAFI, etc.) para evitar su uso con fines de represión política.",
      goal3: "Educación tecnológica: Investigación sobre los riesgos del entorno digital (VPN, filtraciones de datos) y capacitación de los ciudadanos en métodos de protección de la privacidad.",
      funnelTitle: "Modelo de embudo de contenido",
      funnelText: "Para implementar la misión, Hyperboloid implementa un modelo de 'embudo de contenido', donde cada investigación a gran escala se convierte en una serie de publicaciones periódicas.",
      researchTitle: "Proyectos de investigación clave",
      researchIntro: "El programa para los primeros 12 meses incluye 6 áreas prioritarias (informes), cada una de las cuales forma la base de actividades científicas y periodísticas:",
      project1: "Monitoreo de derechos humanos: Informe sobre la persecución de cristianos y disidentes en Rusia. Enfoque en la libertad de conciencia.",
      project2: "Análisis comparativo de la censura: Libertad de expresión y censura en la Federación de Rusia: lecciones y ejemplos para la UE.",
      project3: "Degradación económica: Análisis de la conexión entre el crecimiento del sector estatal/oligarquía y el declive de los negocios.",
      project4: "Represión política de derecha: Persecución de conservadores y derechistas en Rusia. Diálogo con políticos europeos.",
      project5: "Seguridad geopolítica: El peligro del resentimiento antiamericano para la UE. Análisis de la influencia de la propaganda.",
      project6: "Influencia externa: Investigación sobre la influencia china y árabe en la UE. Análisis de amenazas de movimientos de izquierda radical.",
      kpiTitle: "Ciclo de producción (KPI)",
      kpiIntro: "En un año, la Fundación se compromete a implementar:",
      kpi1: "4 investigaciones científicas: Publicaciones en revistas académicas revisadas por pares (1 por trimestre).",
      kpi2: "6 mini-investigaciones: Investigaciones periodísticas (insights) sobre temas de bases de datos y ciberseguridad.",
      kpi3: "54 longreads analíticos: Artículos semanales de unas 2000 palabras.",
      kpi4: "2–4 audiencias: Participación en el trabajo de los grupos parlamentarios de la UE.",
      activityTitle: "Actividad de la Stichting",
      activityText: "Stichting Hyperboloid se encuentra actualmente en proceso de apertura y lanzamiento. Somos una organización independiente sin fines de lucro registrada en los Países Bajos.",
      approachTitle: "Planes y enfoque",
      approachText: "Nuestro enfoque incluye proyectos bajo la Stichting, como transparency-first.org — un proyecto para investigar la reforma de las bases de datos.",
      compositionTitle: "Composición inicial",
      compositionText: "Al inicio, el equipo incluye expertos en derecho internacional, ciberseguridad, derechos humanos y periodismo.",
      donationsTitle: "Donaciones y contribuciones",
      donationsIntro: "Aceptamos donaciones y contribuciones en diversas formas para apoyar nuestra misión.",
      donations1Title: "Para los medios de comunicación:",
      donations1Text: "Apoyo a la cobertura mediática y difusión de nuestras investigaciones.",
      donations2Title: "Centro de prensa:",
      donations2Text: "Recursos para notas de prensa y relaciones con los medios.",
      donations3Title: "Para voluntarios:",
      donations3Text: "Oportunidades para que los voluntarios contribuyan a la investigación y divulgación.",
      donations4Title: "Para abogados:",
      donations4Text: "Apoyo a expertos legales en casos de derechos humanos y derechos digitales.",
      donations5Title: "Para empresas:",
      donations5Text: "Asociaciones y patrocinios de empresas alineadas con nuestros valores.",
      donations6Title: "Subvenciones:",
      donations6Text: "Solicitudes de subvenciones de fundaciones y organizaciones internacionales.",
      donations7Title: "Informes:",
      donations7Text: "Producimos informes anuales sobre gastos y logros, garantizando la rendición de cuentas.",
      donations8Title: "Logros:",
      donations8Text: "Trayectoria de investigaciones publicadas, audiencias e impacto en las políticas.",
      philosophyTitle: "La filosofía Hyperboloid",
      philosophyText: "Vemos el internet no como un servicio, sino como la jurisdicción primaria de la existencia humana contemporánea.",
      directivesTitle: "Directivas principales",
      directive1: "Neutralidad del protocolo",
      directive2: "Soberanía del cifrado",
      directive3: "Dignidad de los datos",
      directive4: "Transparencia institucional"
    },
    pl: {
      subtitle: "Cenzura pod mikroskopem",
      title: "Ochrona Cyfrowych\nPraw Człowieka",
      missionTitle: "Misja i Cele",
      mission1: "Fundacja została utworzona jako niezależne centrum analityczne, którego misją jest ochrona interesów cywilizacji ogólnoeuropejskiej i zapewnienie wolności osobistej poprzez inwestycje w kapitał społeczny, postęp technologiczny oraz monitorowanie instytucji tłumiących sprzeciw.",
      mission2: "Aby zrealizować tę misję, Fundacja stawia sobie następujące cele statutowe:",
      goal1: "Badania nad mechanizmami cenzury: Analiza globalnych trendów w ograniczaniu wolności słowa i opracowywanie metod przeciwdziałania kontroli ponadnarodowej.",
      goal2: "Monitorowanie baz danych: Badanie przejrzystości i odpowiedzialności struktur międzynarodowych (Interpol, FATF itp.) w celu zapobiegania ich wykorzystywaniu do represji politycznych.",
      goal3: "Edukacja technologiczna: Badanie zagrożeń w środowisku cyfrowym (VPN, wycieki danych) oraz szkolenie obywateli w zakresie metod ochrony prywatności i omijania cenzury.",
      funnelTitle: "Model lejka treści",
      funnelText: "W celu realizacji misji Hyperboloid wdraża model „lejka treści”, w którym każde badanie na dużą skalę jest przekształcane w serię regularnych publikacji.",
      researchTitle: "Kluczowe projekty badawcze",
      researchIntro: "Program na pierwsze 12 miesięcy obejmuje 6 obszarów priorytetowych (raportów), z których każdy stanowi podstawę działalności naukowej i publicystycznej:",
      project1: "Monitorowanie praw człowieka: Raport o prześladowaniach chrześcijan i dysydentów w Rosji. Skupienie na wolności sumienia.",
      project2: "Analiza porównawcza cenzury: Wolność słowa i cenzura w Federacji Rosyjskiej: lekcje i przykłady dla UE.",
      project3: "Degradacja ekonomiczna: Analiza związku między wzrostem sektora państwowego/oligarchii a upadkiem biznesu.",
      project4: "Represje polityczne z prawej strony: Prześladowania konserwatystów i prawicowców w Rosji. Dialog z politykami europejskimi.",
      project5: "Bezpieczeństwo geopolityczne: Niebezpieczeństwo antyamerykańskiego resentymentu dla UE. Analiza wpływu propagandy.",
      project6: "Wpływy zewnętrzne: Badania nad wpływami chińskimi i arabskimi w UE. Analiza zagrożeń ze strony ruchów lewicowo-radykalnych.",
      kpiTitle: "Cykl produkcyjny (KPI)",
      kpiIntro: "W ciągu roku Fundacja zobowiązuje się do zrealizowania:",
      kpi1: "4 badań naukowych: Publikacje w recenzowanych czasopismach akademickich (1 na kwartał).",
      kpi2: "6 mini-badań: Śledztwa dziennikarskie (insajdy) dotyczące baz danych i cyberbezpieczeństwa.",
      kpi3: "54 analizy typu longread: Cotygodniowe artykuły o objętości około 2000 słów.",
      kpi4: "2–4 przesłuchania: Udział w pracach grup parlamentarnych UE.",
      activityTitle: "Działalność Stichting",
      activityText: "Stichting Hyperboloid jest obecnie w trakcie otwierania i uruchamiania. Jesteśmy niezależną organizacją non-profit zarejestrowaną w Holandii.",
      approachTitle: "Plany i podejście",
      approachText: "Nasze podejście obejmuje projekty pod egidą Stichting, takie jak transparency-first.org — projekt badania reformy baz danych.",
      compositionTitle: "Skład początkowy",
      compositionText: "Na starcie zespół składa się z ekspertów w dziedzinie prawa międzynarodowego, cyberbezpieczeństwa, praw człowieka i dziennikarstwa.",
      donationsTitle: "Darowizny i składki",
      donationsIntro: "Przyjmujemy darowizny i składki w różnych formach, aby wspierać naszą misję.",
      donations1Title: "Dla mediów:",
      donations1Text: "Wsparcie dla relacji medialnych i rozpowszechniania naszych badań.",
      donations2Title: "Centrum prasowe:",
      donations2Text: "Zasoby na komunikaty prasowe i relacje z mediami.",
      donations3Title: "Для волонтерів:",
      donations3Text: "Możliwości dla wolontariuszy do wniesienia wkładu w badania i outreach.",
      donations4Title: "Dla prawników:",
      donations4Text: "Wsparcie dla ekspertów prawnych w sprawach dotyczących praw człowieka.",
      donations5Title: "Dla biznesu:",
      donations5Text: "Partnerstwa i sponsoring ze strony firm podzielających nasze wartości.",
      donations6Title: "Granty:",
      donations6Text: "Wnioski o dotacje od fundacji i organizacji międzynarodowych.",
      donations7Title: "Sprawozdawczość:",
      donations7Text: "Sporządzamy roczne raporty z wydatków i osiągnięć.",
      donations8Title: "Osiągnięcia:",
      donations8Text: "Historia opublikowanych badań, przesłuchań i wpływu na politykę.",
      philosophyTitle: "Filozofia Hyperboloid",
      philosophyText: "Postrzegamy internet nie jako usługę, ale jako podstawową jurysdykcję współczesnego bytu ludzkiego.",
      directivesTitle: "Główne dyrektywy",
      directive1: "Neutralność protokołu",
      directive2: "Suwerenność szyfrowania",
      directive3: "Godność danych",
      directive4: "Przejrzystość instytucjonalna"
    }
  }[lang];

  return (
    <>
      <SEOHead
        lang={lang}
        pageTitle={pageData.title[lang]}
        pageDescription={pageData.description[lang]}
        ogTitle={pageData.ogTitle[lang]}
        ogDescription={pageData.ogDescription[lang]}
        pagePath="/"
      />
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
                  {t.subtitle}
                </span>
              </div>
              <h1 className="text-[12vw] md:text-[8vw] lg:text-[7vw] font-display font-black leading-[0.85] tracking-[-0.05em] uppercase whitespace-pre-line text-balance mb-10 max-w-[90vw]">
                {t.title}
              </h1>
              <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-end">
                <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-xl">
                  {data.lead}
                </p>
                <div className="flex justify-start lg:justify-end">
                  <button className="group flex items-center gap-6 md:gap-8 px-8 md:px-10 py-5 md:py-6 bg-white text-black rounded-full hover:bg-brand-accent transition-all hover:scale-105 active:scale-95">
                    <span className="text-xs md:text-sm font-black uppercase tracking-widest">
                      {data.cta}
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
                  {data.hero}
                </h2>
                <h3 className="text-3xl font-black uppercase tracking-tighter mb-6">{t.missionTitle}</h3>
                <p>{t.mission1}</p>
                <p>{t.mission2}</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{t.goal1}</li>
                  <li>{t.goal2}</li>
                  <li>{t.goal3}</li>
                </ul>

                <h3 className="text-3xl font-black uppercase tracking-tighter mb-6">{t.funnelTitle}</h3>
                <p>{t.funnelText}</p>

                <h3 className="text-3xl font-black uppercase tracking-tighter mb-6">{t.researchTitle}</h3>
                <p>{t.researchIntro}</p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>{t.project1}</li>
                  <li>{t.project2}</li>
                  <li>{t.project3}</li>
                  <li>{t.project4}</li>
                  <li>{t.project5}</li>
                  <li>{t.project6}</li>
                </ol>

                <h3 className="text-3xl font-black uppercase tracking-tighter mb-6">{t.kpiTitle}</h3>
                <p>{t.kpiIntro}</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{t.kpi1}</li>
                  <li>{t.kpi2}</li>
                  <li>{t.kpi3}</li>
                  <li>{t.kpi4}</li>
                </ul>

                <h3 className="text-3xl font-black uppercase tracking-tighter mb-6">{t.activityTitle}</h3>
                <p>{t.activityText}</p>

                <h3 className="text-3xl font-black uppercase tracking-tighter mb-6">{t.approachTitle}</h3>
                <p>{t.approachText}</p>

                <h3 className="text-3xl font-black uppercase tracking-tighter mb-6">{t.compositionTitle}</h3>
                <p>{t.compositionText}</p>

                <h3 className="text-3xl font-black uppercase tracking-tighter mb-6">{t.donationsTitle}</h3>
                <p>{t.donationsIntro}</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>{t.donations1Title}</strong> {t.donations1Text}</li>
                  <li><strong>{t.donations2Title}</strong> {t.donations2Text}</li>
                  <li><strong>{t.donations3Title}</strong> {t.donations3Text}</li>
                  <li><strong>{t.donations4Title}</strong> {t.donations4Text}</li>
                  <li><strong>{t.donations5Title}</strong> {t.donations5Text}</li>
                  <li><strong>{t.donations6Title}</strong> {t.donations6Text}</li>
                  <li><strong>{t.donations7Title}</strong> {t.donations7Text}</li>
                  <li><strong>{t.donations8Title}</strong> {t.donations8Text}</li>
                </ul>
              </div>

              <div className="lg:col-span-4 space-y-8">
                <div className="sticky top-40 space-y-8">
                  <div className="p-10 bg-gray-50 rounded-[40px] border border-gray-100">
                    <Lock className="w-10 h-10 text-brand-accent mb-6" />
                    <h4 className="text-xl font-black uppercase tracking-tighter mb-4">{t.philosophyTitle}</h4>
                    <p className="text-gray-500 font-light leading-relaxed italic">
                      {t.philosophyText}
                    </p>
                  </div>
                  <div className="p-10 bg-[#050505] text-white rounded-[40px]">
                    <h4 className="text-xl font-black uppercase tracking-tighter mb-6">{t.directivesTitle}</h4>
                    <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-gray-400">
                      <li className="flex items-center gap-3"><span className="w-1 h-1 bg-brand-accent rounded-full" /> {t.directive1}</li>
                      <li className="flex items-center gap-3"><span className="w-1 h-1 bg-brand-accent rounded-full" /> {t.directive2}</li>
                      <li className="flex items-center gap-3"><span className="w-1 h-1 bg-brand-accent rounded-full" /> {t.directive3}</li>
                      <li className="flex items-center gap-3"><span className="w-1 h-1 bg-brand-accent rounded-full" /> {t.directive4}</li>
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

