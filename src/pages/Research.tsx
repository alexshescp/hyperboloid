import { motion } from "motion/react";
import { Search, Database, Fingerprint, ShieldAlert, Cpu, Network } from "lucide-react";
import { Language } from "../types";
import { siteContent } from "../i18n";
import { SEOHead } from "../components/SEOHead";

export default function Research({ lang }: { lang: Language }) {
  const pageData = siteContent.pages.research;

  const t = {
    en: {
      methodology: "Research Methodology",
      priorityClusters: "Priority Research Clusters",
      description: "The Hyperboloid Foundation operates as a multi-disciplinary intelligence hub. We cross-reference technical network telemetry with legal analysis and human rights field reports to provide the world's most accurate map of modern censorship.",
      viewDataset: "View Dataset",
      reports: "Reports",
      scientificStandard: "Scientific Standard & Integrity",
      scientificText1: "All research produced by Stichting Hyperboloid adheres to the highest academic standards of reproducibility and evidence-based analysis. We do not rely on conjecture; our findings are rooted in verified data streams, legal documents, and verified testimonials.",
      scientificText2: "Our technical methodology includes advanced packet analysis to detect localized internet shutdowns and the deployment of Deep Packet Inspection (DPI) hardware. We map these technical events against political timelines to demonstrate correlations between state interests and digital restrictions. This multi-layered approach allows us to see beyond simple network outages, revealing the strategic intent of censorship.",
      scientificText3: "Furthermore, our legal research involve meticulous dissection of 'emergency' legislation and anti-extremism laws. We track how vague terminology in these statutes is weaponized to silence dissent. By cataloging these legal maneuvers across different authoritarian regimes, we have identified a 'universal manual' for digital repression that is increasingly being exported globally.",
      scientificText4: "The Hyperboloid Index, our flagship annual metric, provides a quantitative score for digital sovereignty. It measures not just access to information, but the independence of the underlying infrastructure, the strength of regional encryption rights, and the transparency of the local data-collecting bodies. This index has become a critical benchmark for human rights organizations worldwide."
    },
    ru: {
      methodology: "Методология исследований",
      priorityClusters: "Приоритетные направления",
      description: "Фонд Гиперболоид работает как междисциплинарный разведывательный центр. Мы сопоставляем телеметрию технических сетей с правовым анализом и полевыми отчетами по правам человека, чтобы предоставить самую точную в мире карту современной цензуры.",
      viewDataset: "Данные",
      reports: "Отчеты",
      scientificStandard: "Научный стандарт и целостность",
      scientificText1: "Все исследования, проводимые фондом Гиперболоид, соответствуют самым высоким академическим стандартам воспроизводимости и доказательного анализа. Мы не полагаемся на догадки; наши выводы основаны на проверенных потоках данных, юридических документах и заверенных показаниях.",
      scientificText2: "Наша техническая методология включает в себя расширенный анализ пакетов для обнаружения локальных отключений интернета и развертывания оборудования Deep Packet Inspection (DPI). Мы сопоставляем эти технические события с политическими графиками, чтобы продемонстрировать корреляцию между государственными интересами и цифровыми ограничениями. Этот многоуровневый подход позволяет нам видеть дальше простых сбоев в сети, раскрывая стратегический замысел цензуры.",
      scientificText3: "Кроме того, наши правовые исследования включают в себя тщательный анализ 'чрезвычайного' законодательства и законов о противодействии экстремизму. Мы отслеживаем, как расплывчатая терминология в этих статутах используется в качестве оружия для подавления инакомыслия. Каталогизируя эти юридические маневры в различных авторитарных режимах, мы выявили 'универсальное руководство' по цифровым репрессиям, которое все чаще экспортируется по всему миру.",
      scientificText4: "Индекс Гиперболоида, наш флагманский годовой показатель, дает количественную оценку цифрового суверенитета. Он измеряет не только доступ к информации, но и независимость базовой инфраструктуры, силу региональных прав на шифрование и прозрачность местных органов сбора данных. Этот индекс стал критически важным ориентиром для правозащитных организаций по всему миру."
    },
    nl: {
      methodology: "Onderzoeksmethodologie",
      priorityClusters: "Prioritaire Onderzoeksclusters",
      description: "De Hyperboloid Foundation functioneert als een multidisciplinair inlichtingenknooppunt. We kruisen technische netwerktelemetrie met juridische analyses en veldrapporten over mensenrechten om 's werelds meest nauwkeurige kaart van moderne censuur te bieden.",
      viewDataset: "Dataset Bekijken",
      reports: "Rapporten",
      scientificStandard: "Wetenschappelijke Standaard & Integriteit",
      scientificText1: "Al het onderzoek geproduceerd door Stichting Hyperboloid voldoet aan de hoogste academische normen van reproduceerbaarheid en op bewijs gebaseerde analyse. We vertrouwen niet op vermoedens; onze bevindingen zijn geworteld in gecontroleerde datastromen, juridische documenten en geverifieerde getuigenissen.",
      scientificText2: "Onze technische methodologie omvat geavanceerde pakketanalye om gelokaliseerde internet shutdowns en de inzet van Deep Packet Inspection (DPI) hardware te detecteren. We brengen deze technische gebeurtenissen in kaart tegen politieke tijdlijnen om correlaties aan te tonen tussen staatsbelangen en digitale beperkingen.",
      scientificText3: "Bovendien omvatten onze juridische onderzoekingen een nauwgezette ontleding van 'noodwetgeving' en anti-extremismewetten. We volgen hoe vage terminologie in deze statuten als wapen wordt gebruikt om afwijkende meningen het zwijgen op te leggen.",
      scientificText4: "De Hyperboloid Index, onze jaarlijkse vlaggenschipmeting, biedt een kwantitatieve score voor digitale soevereiniteit. Het meet niet alleen de toegang tot informatie, maar ook de onafhankelijkheid van de onderliggende infrastructuur."
    },
    fr: {
      methodology: "Méthodologie de Recherche",
      priorityClusters: "Clusters de Recherche Prioritaires",
      description: "La Fondation Hyperboloid fonctionne comme un centre de renseignement multidisciplinaire. Nous croisons la télémétrie technique des réseaux avec des analyses juridiques et des rapports de terrain sur les droits de l'homme pour fournir la carte de la censure moderne la plus précise au monde.",
      viewDataset: "Voir le Jeu de Données",
      reports: "Rapports",
      scientificStandard: "Norme Scientifique et Intégrité",
      scientificText1: "Toutes les recherches produites par la Fondation Hyperboloid respectent les normes académiques les plus élevées en matière de reproductibilité et d'analyse factuelle. Nous ne nous basons pas sur des conjectures ; nos conclusions sont ancrées dans des flux de données vérifiés, des documents juridiques et des témoignages vérifiés.",
      scientificText2: "Notre méthodologie technique comprend une analyse avancée des paquets pour détecter les coupures d'Internet localisées et le déploiement de matériel d'inspection profonde des paquets (DPI). Nous cartographions ces événements techniques par rapport aux chronologies politiques pour démontrer les corrélations entre les intérêts de l'État et les restrictions numériques.",
      scientificText3: "De plus, nos recherches juridiques impliquent une dissection méticuleuse de la législation « d'urgence » et des lois anti-extrémisme. Nous suivons la manière dont la terminologie vague de ces statuts est utilisée comme arme pour faire taire la dissidence.",
      scientificText4: "L'indice Hyperboloid, notre métrique annuelle phare, fournit un score quantitatif pour la souveraineté numérique. Il mesure non seulement l'accès à l'information, mais aussi l'indépendance de l'infrastructure sous-jacente."
    },
    de: {
      methodology: "Forschungsmethodik",
      priorityClusters: "Prioritäre Forschungscluster",
      description: "Die Hyperboloid Foundation fungiert als multidisziplinäres Geheimdienstzentrum. Wir gleichen technische Netzwerktelemetrie mit rechtlichen Analysen und Menschenrechtsberichten ab, um die weltweit genaueste Karte moderner Zensur zu erstellen.",
      viewDataset: "Datensatz anzeigen",
      reports: "Berichte",
      scientificStandard: "Wissenschaftlicher Standard & Integrität",
      scientificText1: "Alle von der Stichting Hyperboloid erstellten Forschungsarbeiten entsprechen den höchsten akademischen Standards der Reproduzierbarkeit und evidenzbasierten Analyse. Wir verlassen uns nicht auf Vermutungen; unsere Erkenntnisse wurzeln in geprüften Datenströmen, rechtlichen Dokumenten und verifizierten Zeugenaussagen.",
      scientificText2: "Unsere technische Methodik umfasst eine fortschrittliche Paket-Analyse zur Erkennung lokalisierter Internet-Abschaltungen und den Einsatz von Deep Packet Inspection (DPI)-Hardware. Wir setzen diese technischen Ereignisse in Beziehung zu politischen Zeitplänen.",
      scientificText3: "Darüber hinaus umfassen unsere rechtlichen Untersuchungen eine akribische Analyse von „Notstandsgesetzen“ und Anti-Extremismus-Gesetzen. Wir verfolgen, wie vage Terminologie in diesen Gesetzen instrumentalisiert wird, um abweichende Meinungen zum Schweigen zu bringen.",
      scientificText4: "Der Hyperboloid-Index, unsere wichtigste jährliche Kennzahl, liefert einen quantitativen Wert für die digitale Souveränität. Er misst nicht nur den Zugang zu Informationen, sondern auch die Unabhängigkeit der zugrunde liegenden Infrastruktur."
    },
    es: {
      methodology: "Metodología de Investigación",
      priorityClusters: "Clústeres de Investigación Prioritarios",
      description: "La Fundación Hyperboloid funciona como un centro de inteligencia multidisciplinario. Cruzamos la telemetría de redes técnicas con análisis legales e informes de campo sobre derechos humanos para proporcionar el mapa más preciso del mundo sobre la censura moderna.",
      viewDataset: "Ver Conjunto de Datos",
      reports: "Informes",
      scientificStandard: "Estándar Científico e Integridad",
      scientificText1: "Toda la investigación producida por la Fundación Hyperboloid se adhiere a los más altos estándares académicos de reproducibilidad y análisis basado en evidencia. No nos basamos en conjeturas; nuestros hallazgos están arraigados en flujos de datos verificados, documentos legales y testimonios verificados.",
      scientificText2: "Nuestra metodología técnica incluye un análisis avanzado de paquetes para detectar cortes de Internet localizados y el despliegue de hardware de inspección profunda de paquetes (DPI). Mapeamos estos eventos técnicos frente a cronogramas políticos.",
      scientificText3: "Además, nuestras investigaciones legales implican una disección meticulosa de la legislación de «emergencia» y las leyes contra el extremismo. Rastreamos cómo la terminología vaga en estos estatutos se utiliza como arma para silenciar la disidencia.",
      scientificText4: "El Índice Hyperboloid, nuestra métrica anual insignia, proporciona una puntuación cuantitativa para la soberanía digital. Mide no solo el acceso a la información, sino también la independencia de la infraestructura subyacente."
    },
    pl: {
      methodology: "Metodologia Badań",
      priorityClusters: "Priorytetowe Grupy Badawcze",
      description: "Fundacja Hyperboloid działa jako multidyscyplinarne centrum wywiadowcze. Porównujemy techniczną telemetrię sieci z analizami prawnymi i raportami terenowymi dotyczącymi praw człowieka, aby zapewnić najdokładniejszą na świecie mapę nowoczesnej cenzury.",
      viewDataset: "Zobacz Zbiór Danych",
      reports: "Raporty",
      scientificStandard: "Standard Naukowy i Integralność",
      scientificText1: "Wszystkie badania prowadzone przez Stichting Hyperboloid spełniają najwyższe standardy akademickie w zakresie powtarzalności i analizy opartej na dowodach. Nie polegamy na domysłach; nasze wnioski są zakorzenione w zweryfikowanych strumieniach danych, dokumentach prawnych i zweryfikowanych zeznaniach.",
      scientificText2: "Nasza metodologia techniczna obejmuje zaawansowaną analizę pakietów w celu wykrywania lokalnych blokad Internetu oraz wdrażania sprzętu do głębokiej inspekcji pakietów (DPI). Mapujemy te techniczne zdarzenia w odniesieniu do harmonogramów politycznych.",
      scientificText3: "Ponadto nasze badania prawne obejmują skrupulatną analizę przepisów „nadzwyczajnych” i ustaw antyekstremistycznych. Śledzimy, w jaki sposób niejasna terminologia w tych przepisach jest wykorzystywana do uciszania opozycji.",
      scientificText4: "Indeks Hyperboloid, nasz flagowy roczny wskaźnik, zapewnia ilościową ocenę suwerenności cyfrowej. Mierzy on nie tylko dostęp do informacji, ale także niezależność infrastruktury bazowej."
    }
  }[lang];

  const items = [
    {
      icon: Search,
      title: {
        en: "Rights Monitoring & Freedom of Conscience",
        ru: "Мониторинг прав и свобода совести",
        nl: "Rechtenmonitoring & Vrijheid van Geweten",
        fr: "Surveillance des Droits et Liberté de Conscience",
        de: "Rechte-Monitoring & Gewissensfreiheit",
        es: "Monitoreo de Derechos y Libertad de Conciencia",
        pl: "Monitorowanie Praw i Wolność Sumienia"
      }[lang],
      desc: {
        en: "Monitoring the systemic suppression of high-risk groups, including religious minorities and political dissenters in Russia and neighboring authoritarian spheres.",
        ru: "Мониторинг системного подавления групп риска, включая религиозные меньшинства и политических диссидентов в России и соседних авторитарных сферах.",
        nl: "Monitoring van de systemische onderdrukking van risicogroepen, waaronder religieuze minderheden en politieke dissidenten in Rusland en naburige autoritaire sferen.",
        fr: "Surveillance de la suppression systémique des groupes à haut risque, y compris les minorités religieuses et les dissidents politiques en Russie et dans les sphères autoritaires voisines.",
        de: "Überwachung der systemischen Unterdrückung von Risikogruppen, einschließlich religiöser Minderheiten und politischer Dissidenten in Russland und benachbarten autoritären Sphären.",
        es: "Monitoreo de la supresión sistémica de grupos de alto riesgo, incluidas las minorías religiosas y los disidentes políticos en Rusia y las esferas autoritarias vecinas.",
        pl: "Monitorowanie systematycznego tłumienia grup wysokiego ryzyka, w tym mniejszości religijnych i dysydentów politycznych w Rosji i sąsiednich sferach autorytarnych."
      }[lang],
      long: {
        en: "This project is the foundation's primary humanitarian wing. We track the use of recognition technology in the suppression of peaceful protests.",
        ru: "Этот проект является основным гуманитарным крылом фонда. Мы отслеживаем использование технологий распознавания при подавлении мирных протестов.",
        nl: "Dit project is de primaire humanitaire tak van de stichting. We volgen het gebruik van herkenningstechnologie bij het onderdrukken van vreedzame protesten.",
        fr: "Ce projet est la principale aile humanitaire de la fondation. Nous suivons l'utilisation des technologies de reconnaissance dans la répression des manifestations pacifiques.",
        de: "Dieses Projekt ist der primäre humanitäre Arm der Stiftung. Wir verfolgen den Einsatz von Erkennungstechnologie bei der Unterdrückung friedlicher Proteste.",
        es: "Este proyecto es el ala humanitaria principal de la fundación. Rastreamos el uso de tecnología de reconocimiento en la supresión de protestas pacíficas.",
        pl: "Ten projekt jest głównym skrzydłem humanitarnym fundacji. Śledzimy wykorzystanie technologii rozpoznawania w tłumieniu pokojowych protestów."
      }[lang]
    },
    {
      icon: Network,
      title: {
        en: "Comparative Censorship & Constitutional Drift",
        ru: "Сравнительный анализ цензуры и правовой дрейф",
        nl: "Vergelijkende Censuur & Constitutionele Drift",
        fr: "Censure Comparative et Dérive Constitutionnelle",
        de: "Vergleichende Zensur & Verfassungsdrift",
        es: "Censura Comparativa y Deriva Constitucional",
        pl: "Cenzura Porównawcza i Dryf Konstytucyjny"
      }[lang],
      desc: {
        en: "Analyzing RF-style censorship architectures to prevent their adoption within the European Union.",
        ru: "Анализ архитектуры цензуры в РФ для предотвращения ее внедрения в Европейском Союзе.",
        nl: "Analyseren van censuurarchitecturen in Russische stijl om hun adoptie binnen de Europese Unie te voorkomen.",
        fr: "Analyser les architectures de censure de style russe pour empêcher leur adoption au sein de l'Union européenne.",
        de: "Analyse von Zensurarchitekturen nach russischem Vorbild, um deren Übernahme in der Europäischen Union zu verhindern.",
        es: "Analizar las arquitecturas de censura al estilo de la RF para evitar su adopción dentro de la Unión Europea.",
        pl: "Analiza architektur cenzury w stylu rosyjskim w celu zapobieżenia ich przyjęciu w Unii Europejskiej."
      }[lang],
      long: {
        en: "Authoritarian scripts for internet control are highly portable. We study how technical measures like DPI are mirrored in proposed Western regulations.",
        ru: "Авторитарные сценарии интернет-контроля очень мобильны. Мы изучаем, как технические меры, такие как DPI, зеркально отражаются в предлагаемых западных нормах.",
        nl: "Autoritaire scripts voor internetcontrole zijn zeer overdraagbaar. We bestuderen hoe technische maatregelen zoals DPI worden weerspiegeld in voorgestelde westerse regelgeving.",
        fr: "Les scripts autoritaires de contrôle de l'Internet sont très portables. Nous étudions comment des mesures techniques telles que le DPI se reflètent dans les réglementations occidentales proposées.",
        de: "Autoritäre Skripte zur Internetkontrolle sind hochgradig portabel. Wir untersuchen, wie technische Maßnahmen wie DPI in vorgeschlagenen westlichen Regulierungen gespiegelt werden.",
        es: "Los guiones autoritarios para el control de Internet son altamente portátiles. Estudiamos cómo las medidas técnicas como el DPI se reflejan en las regulaciones occidentales propuestas.",
        pl: "Autorytarne skrypty kontroli Internetu są bardzo przenośne. Badamy, w jaki sposób środki techniczne, takie как DPI, znajdują odzwierciedlenie w proponowanych zachodnich regulacjach."
      }[lang]
    },
    {
      icon: Cpu,
      title: {
        en: "Algorithmic Repression & Tech Ethics",
        ru: "Алгоритмические репрессии и техно-этика",
        nl: "Algoritmische Repressie & Tech-ethiek",
        fr: "Répression Algorithmique et Éthique Technologique",
        de: "Algorithmische Repression & Tech-Ethik",
        es: "Represión Algorítmica y Ética Tecnológica",
        pl: "Represje Algorytmiczne i Etyka Technologiczna"
      }[lang],
      desc: {
        en: "Studying the automation of political persecution through automated flagging and shadow-banning.",
        ru: "Изучение автоматизации политических преследований через автоматическую пометку контента и теневой бан.",
        nl: "Studie naar de automatisering van politieke vervolging via automatische markering en shadow-banning.",
        fr: "Étudier l'automatisation de la persécution politique par le marquage automatique et le shadow-banning.",
        de: "Untersuchung der Automatisierung politischer Verfolgung durch automatisierte Kennzeichnung und Shadow-Banning.",
        es: "Estudiar la automatización de la persecución política mediante el marcado automático y el shadow-banning.",
        pl: "Badanie automatyzacji prześladowań politycznych poprzez automatyczne flagowanie i shadow-banning."
      }[lang],
      long: {
        en: "Modern censorship is no longer human-driven; it is machine-scale. We investigate how AI models are trained to detect and suppress dissent.",
        ru: "Современная цензура больше не управляется людьми; она имеет машинный масштаб. Мы исследуем, как модели ИИ обучаются обнаруживать и подавлять инакомыслие.",
        nl: "Moderne censuur wordt niet langer door mensen aangestuurd; het is op machineschaal. We onderzoeken hoe AI-modellen worden getraind om dissidentie te detecteren en te onderdrukken.",
        fr: "La censure moderne n'est plus pilotée par l'homme ; elle est à l'échelle de la machine. Nous enquêtons sur la manière dont les modèles d'IA sont formés pour détecter et supprimer la dissidence.",
        de: "Moderne Zensur wird nicht mehr von Menschen gesteuert; sie erfolgt im Maschinenmaßstab. Wir untersuchen, wie KI-Modelle darauf trainiert werden, Dissens zu erkennen und zu unterdrücken.",
        es: "La censura moderna ya no está impulsada por humanos; es a escala de máquina. Investigamos cómo se entrenan los modelos de IA para detectar y suprimir la disidencia.",
        pl: "Nowoczesna cenzura nie jest już sterowana przez ludzi; ma skalę maszynową. Badamy, w jaki sposób modele sztucznej inteligencji są trenowane do wykrywania i tłumienia sprzeciwu."
      }[lang]
    },
    {
      icon: Database,
      title: {
        en: "Economic Degradation & State Oligarchy",
        ru: "Экономическая деградация и государственная олигархия",
        nl: "Economische Degradatie & Staatsoligarchie",
        fr: "Dégradation Économique et Oligarchie d'État",
        de: "Wirtschaftlicher Niedergang & Staatsoligarchie",
        es: "Degradación Económica y Oligarquía Estatal",
        pl: "Degradacja Ekonomiczna i Oligarchia Państwowa"
      }[lang],
      desc: {
        en: "Researching the link between the growth of a surveillance economy and the decay of small business.",
        ru: "Исследование связи между ростом экономики слежки и упадком малого бизнеса.",
        nl: "Onderzoek naar het verband tussen de groei van een surveillance-economie en het verval van het midden- en kleinbedrijf.",
        fr: "Recherche sur le lien entre la croissance d'une économie de surveillance et le déclin des petites entreprises.",
        de: "Untersuchung des Zusammenhangs zwischen dem Wachstum einer Überwachungswirtschaft und dem Niedergang kleiner Unternehmen.",
        es: "Investigar el vínculo entre el crecimiento de una economía de vigilancia y el declive de las pequeñas empresas.",
        pl: "Badanie związku między rozwojem gospodarki opartej na inwigilacji a upadkiem małych firm."
      }[lang],
      long: {
        en: "When the state controls the data layer, it eventually controls the market layer. We analyze how centralized surveillance stifles innovation.",
        ru: "Когда государство контролирует слой данных, оно в конечном итоге контролирует рыночный слой. Мы анализируем, как централизованная слежка душит инновации.",
        nl: "Wanneer de staat de datalaag controleert, controleert deze uiteindelijk de marktlaag. We analyseren hoe gecentraliseerde surveillance innovatie verstikt.",
        fr: "Lorsque l'État contrôle la couche de données, il finit par contrôler la couche du marché. Nous analysons comment la surveillance centralisée étouffe l'innovation.",
        de: "Wenn der Staat die Datenebene kontrolliert, kontrolliert er schließlich auch die Marktebene. Wir analyseren, wie zentralisierte Überwachung Innovationen erstickt.",
        es: "Cuando el estado controla la capa de datos, eventualmente controla la capa del mercado. Analizamos cómo la vigilancia centralizada sofoca la innovación.",
        pl: "Gdy państwo kontroluje warstwę danych, w końcu kontroluje warstwę rynkową. Analizujemy, jak scentralizowana inwigilacja dławi innowacje."
      }[lang]
    },
    {
      icon: ShieldAlert,
      title: {
        en: "Supranational Database Integrity",
        ru: "Целостность наднациональных баз данных",
        nl: "Integriteit van Supranationale Databanken",
        fr: "Intégrité des Bases de Données Supranationales",
        de: "Integrität supranationaler Datenbanken",
        es: "Integridad de las Bases de Datos Supranacionales",
        pl: "Integralność Ponadnarodowych Baz Danych"
      }[lang],
      desc: {
        en: "Investigating international data-sharing protocols to expose their weaponization for political persecution.",
        ru: "Исследование протоколов обмена данными для выявления их использования в целях политического преследования.",
        nl: "Onderzoeken van internationale protocollen voor gegevensuitwisseling om hun inzet als wapen voor politieke vervolging bloot te leggen.",
        fr: "Étudier les protocoles internationaux de partage de données pour exposer leur utilisation comme arme à des fins de persécution politique.",
        de: "Prüfung internationaler Datenaustauschprotokolle, um deren Instrumentalisierung für politische Verfolgung aufzudecken.",
        es: "Investigar los protocolos internacionales de intercambio de datos para exponer su uso como arma para la persecución política.",
        pl: "Badanie międzynarodowych protokołów udostępniania danych w celu ujawnienia ich wykorzystania do prześladowań politycznych."
      }[lang],
      long: {
        en: "International systems are increasingly hacked by authoritarian states to track political refugees. We perform deep analysis of data flows.",
        ru: "Международные системы все чаще эксплуатируются авторитарными государствами для отслеживания политических беженцев. Мы проводим глубокое исследование потоков данных.",
        nl: "Internationale systemen worden steeds vaker gehackt door autoritaire staten om politieke vluchtelingen te volgen. We voeren diepgaand onderzoek uit op datastromen.",
        fr: "Les systèmes internationaux sont de plus en plus piratés par des États autoritaires pour suivre les réfugiés politiques. Nous effectuons des recherches approfondies des flux de données.",
        de: "Internationale Systeme werden zunehmend von autoritären Staaten gehackt, um politische Flüchtlinge zu verfolgen. Wir führen tiefgehende Untersuchungen der Datenströme durch.",
        es: "Los sistemas internacionales son cada vez más hackeados por estados autoritarios para rastrear a refugiados políticos. Realizamos investigaciones profundas de los flujos de datos.",
        pl: "Systemy międzynarodowe są coraz częściej hakowane przez państwa autorytarne w celu śledzenia uchodźców politycznych. Przeprowadzamy pogłębione badania przepływu danych."
      }[lang]
    },
    {
      icon: Fingerprint,
      title: {
        en: "Digital Identity & Personal Sovereignty",
        ru: "Цифровая идентичность и личный суверенитет",
        nl: "Digitale Identiteit & Persoonlijke Soevereiniteit",
        fr: "Identité Numérique et Souveraineté Personnelle",
        de: "Digitale Identität & persönliche Souveränität",
        es: "Identidad Digital y Soberanía Personal",
        pl: "Cyfrowa Tożsamość i Suwerenność Osobista"
      }[lang],
      desc: {
        en: "Developing frameworks for self-sovereign identity to decouple personal data from state oversight.",
        ru: "Разработка основ самодостаточной идентичности (SSI) для отделения личных данных от государственного надзора.",
        nl: "Ontwikkelen van kaders voor zelf-soevereine identiteit om persoonlijke gegevens los te koppelen van staatstoezicht.",
        fr: "Développer des cadres pour l'identité auto-souveraine afin de découpler les données personnelles de la surveillance de l'État.",
        de: "Entwicklung von Rahmenbedingungen für selbstbestimmte Identität, um persönliche Daten von staatlicher Aufsicht zu entkoppeln.",
        es: "Desarrollar marcos para la identidad soberana propia para desacoplar los datos personales de la supervisión estatal.",
        pl: "Opracowywanie ram dla tożsamości suwerennej (SSI) w celu oddzielenia danych osobowych od nadzoru państwowego."
      }[lang],
      long: {
        en: "The final frontier of freedom is identity. We research decentralized identity protocols and encryption standards.",
        ru: "Последний рубеж свободы — это идентичность. Мы исследуем децентрализованные протоколы идентификации и стандарты шифрования.",
        nl: "De laatste grens van vrijheid is identiteit. We doen onderzoek naar gedecentraliseerde identiteitsprotocollen en encryptiestandaarden.",
        fr: "La dernière frontière de la liberté est l'identité. Nous recherchons des protocoles d'identité décentralisés et des normes de cryptage.",
        de: "Die letzte Grenze der Freiheit ist die Identität. Wir erforschen dezentrale Identitätsprotokolle und Verschlüsselungsstandards.",
        es: "La frontera final de la libertad es la identidad. Investigamos protocolos de identidad descentralizados y estándares de cifrado.",
        pl: "Ostatnią granicą wolności jest tożsamość. Badamy zdecentralizowane protokoły tożsamości i standardy szyfrowania."
      }[lang]
    }
  ];

  return (
    <>
      <SEOHead
        lang={lang}
        pageTitle={pageData.title[lang]}
        pageDescription={pageData.description[lang]}
        ogTitle={pageData.ogTitle?.[lang] || pageData.title[lang]}
        ogDescription={pageData.ogDescription?.[lang] || pageData.description[lang]}
        pagePath="/research"
      />
      <div className="min-h-screen bg-[#050505] pt-20">
      <div className="container mx-auto px-6 md:px-12 py-20">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="max-w-4xl"
        >
          <span className="text-xs font-black uppercase tracking-[0.4em] text-brand-accent mb-6 block">
            {t.methodology}
          </span>
          <h1 className="text-6xl md:text-8xl font-display font-black uppercase tracking-tight mb-12">
            {t.priorityClusters}
          </h1>
          <p className="text-2xl text-gray-400 font-light leading-relaxed mb-20">
            {t.description}
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
                           {t.viewDataset}
                        </button>
                        <button className="px-6 py-2 border border-white/20 group-hover:border-black/20 rounded-full text-xs font-black uppercase tracking-widest hover:bg-brand-accent hover:text-white transition-all">
                           {t.reports}
                        </button>
                     </div>
                   </div>
                 </div>
               </div>
               <div className="absolute right-[-10%] bottom-[-20%] w-[30vw] h-[30vw] opacity-[0.05] group-hover:opacity-[0.1] transition-opacity pointer-events-none">
                  <item.icon className="w-full h-full" />
               </div>
             </motion.div>
           ))}
        </div>

        <div className="mt-40 prose prose-invert prose-xl max-w-4xl mx-auto space-y-12 text-gray-400 font-light leadng-relaxed">
          <h2 className="text-white font-display uppercase tracking-tight">{t.scientificStandard}</h2>
          <p>{t.scientificText1}</p>
          <p>{t.scientificText2}</p>
          <p>{t.scientificText3}</p>
          <p>{t.scientificText4}</p>
        </div>
      </div>
    </div>
    </>
  );
}

