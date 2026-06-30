import { motion } from "motion/react";
import { Send, MapPin, Mail, Phone, ExternalLink } from "lucide-react";
import { Language } from "../types";
import { siteContent } from "../i18n";
import { SEOHead } from "../components/SEOHead";

export default function Contact({ lang }: { lang: Language }) {
  const pageData = siteContent.pages.contact;

  const t = {
    en: {
      subtitle: "Direct Connection",
      title: "CONTACT",
      lead: "The Hyperboloid Foundation operates as a decentralized network. Our primary administrative and research hubs are strategically located for global reach.",
      berlinTitle: "Berlin Bureau",
      berlinHub: "Primary Research Hub",
      amsterdamTitle: "Amsterdam HQ",
      amsterdamSeat: "Statutory Seat",
      secureComms: "Secure Comms",
      formTitle: "Send Intelligence",
      identity: "Identity",
      emailPgp: "Email / PGP",
      priority: "Priority",
      routine: "Routine Analysis",
      breach: "Security Breach",
      general: "General Inquiry",
      message: "Manifesto / Message",
      transmit: "Transmit",
      securityTitle: "Security & Anonymity Guidelines",
      securityPara1: "If you are contacting us with sensitive intelligence regarding state surveillance or corporate data malpractice, we strongly advise using our secure PGP-encrypted mail. Do not include identifiable information in the initial transmission unless necessary. Our servers are located in privacy-positive jurisdictions, but your end-point security is your responsibility.",
      securityPara2: "Stichting Hyperboloid also supports anonymous whistleblower submissions through our Tor-accessible 'Dead Drop' protocol. If you require this high-level security path, please contact us first for the specific onion-address rotation key. We are committed to protecting the brave individuals who speak truth to digital power, and we have established rigorous protocols to maintain your anonymity throughout our investigation process.",
      securityPara3: "For general media inquiries, partnership requests, or academic collaboration, our standard communication channels are monitored during Central European business hours. We aim to respond to all legitimate requests within 48 hours. Please note that the Hyperboloid Foundation does not offer personal tech support or data recovery services; our work is strictly focused on institutional research and human rights advocacy.",
      supportTitle: "Support Programs & Requests",
      canRequest: "What you can request",
      requestItem1: "Subscription to news and research releases.",
      requestItem2: "A bespoke institutional research request.",
      requestItem3: "Quarterly transparency and impact report.",
      requestItem4: "Charity and sponsorship cooperation package.",
      onlineOptions: "Online support options",
      onlineText: "You can make a direct online donation through Stripe, or ask for a sponsor prospectus with activity priorities and quarterly accountability details.",
      donateStripe: "Donate via Stripe",
      requestReport: "Request quarterly report"
    },
    ru: {
      subtitle: "Прямая связь",
      title: "КОНТАКТЫ",
      lead: "Фонд Гиперболоид работает как децентрализованная сеть. Наши основные административные и исследовательские центры стратегически расположены для глобального охвата.",
      berlinTitle: "Берлинское бюро",
      berlinHub: "Главный исследовательский центр",
      amsterdamTitle: "Штаб-квартира в Амстердаме",
      amsterdamSeat: "Юридический адрес",
      secureComms: "Защищенная связь",
      formTitle: "Отправить данные",
      identity: "Имя",
      emailPgp: "Email / PGP",
      priority: "Приоритет",
      routine: "Рутинный анализ",
      breach: "Нарушение безопасности",
      general: "Общий запрос",
      message: "Сообщение",
      transmit: "Передать",
      securityTitle: "Руководство по безопасности и анонимности",
      securityPara1: "Если вы связываетесь с нами по поводу конфиденциальной информации о государственной слежке или корпоративных злоупотреблениях данными, мы настоятельно рекомендуем использовать нашу защищенную электронную почту с PGP-шифрованием. Не включайте идентифицируемую информацию в первоначальное сообщение, если в этом нет необходимости. Наши серверы расположены в юрисдикциях с позитивным отношением к конфиденциальности, но безопасность вашей конечной точки — это ваша ответственность.",
      securityPara2: "Фонд Гиперболоид также поддерживает анонимную подачу заявлений разоблачителями через наш протокол 'Dead Drop', доступный через Tor. Если вам нужен этот путь безопасности высокого уровня, пожалуйста, сначала свяжитесь с нами для получения ключа ротации луковых адресов. Мы стремимся защищать смелых людей, которые говорят правду цифровой власти, и мы установили строгие протоколы для сохранения вашей анонимности на протяжении всего процесса нашего расследования.",
      securityPara3: "Для общих запросов СМИ, запросов о партнерстве или академическом сотрудничестве наши стандартные каналы связи отслеживаются в рабочее время по центральноевропейскому времени. Мы стремимся отвечать на все законные запросы в течение 48 часов. Обратите внимание, что фонд Гиперболоид не предлагает услуги личной технической поддержки или восстановления данных; наша работа строго сфокусирована на институциональных исследованиях и защите прав человека.",
      supportTitle: "Программы поддержки и запросы",
      canRequest: "Что можно запросить",
      requestItem1: "Подписку на новости и новые исследования.",
      requestItem2: "Индивидуальный исследовательский запрос для организации.",
      requestItem3: "Квартальный отчет о прозрачности и результатах.",
      requestItem4: "Пакет сотрудничества по благотворительности и спонсорству.",
      onlineOptions: "Варианты онлайн-поддержки",
      onlineText: "Вы можете сделать прямое онлайн-пожертвование через Stripe или запросить спонсорский проспект с приоритетами деятельности и деталями квартальной подотчетности.",
      donateStripe: "Пожертвовать через Stripe",
      requestReport: "Запросить квартальный отчет"
    },
    nl: {
      subtitle: "Directe verbinding",
      title: "CONTACT",
      lead: "Stichting Hyperboloid opereert als een gedecentraliseerd netwerk. Onze hubs zijn strategisch gelegen voor een wereldwijd bereik.",
      berlinTitle: "Berlijns Bureau",
      berlinHub: "Primair onderzoekscentrum",
      amsterdamTitle: "Amsterdam HQ",
      amsterdamSeat: "Statutaire zetel",
      secureComms: "Veilige communicatie",
      formTitle: "Inlichtingen verzenden",
      identity: "Identiteit",
      emailPgp: "E-mail / PGP",
      priority: "Prioriteit",
      routine: "Routineuze analyse",
      breach: "Beveiligingslek",
      general: "Algemene aanvraag",
      message: "Manifest / Bericht",
      transmit: "Verzenden",
      securityTitle: "Richtlijnen voor veiligheid en anonimiteit",
      securityPara1: "Indien u contact met ons opneemt over gevoelige inlichtingen, adviseren wij ten zeerste gebruik te maken van onze PGP-versleutelde mail.",
      securityPara2: "Stichting Hyperboloid ondersteunt ook anonieme klokkenluidersmeldingen via ons Tor-protocol.",
      securityPara3: "Voor algemene mediavragen worden onze standaard communicatiekanalen gevolgd tijdens Centraal-Europese kantooruren.",
      supportTitle: "Ondersteuningsprogramma's & Aanvragen",
      canRequest: "Wat u kunt aanvragen",
      requestItem1: "Abonnement op nieuws en onderzoek.",
      requestItem2: "Een op maat gemaakte onderzoeksaanvraag.",
      requestItem3: "Kwartaalverslag over transparantie en impact.",
      requestItem4: "Samenwerkingspakket voor sponsoring.",
      onlineOptions: "Online ondersteuningsopties",
      onlineText: "U kunt een directe online donatie doen via Stripe.",
      donateStripe: "Doneren via Stripe",
      requestReport: "Kwartaalverslag aanvragen"
    },
    es: {
      subtitle: "Conexión directa",
      title: "CONTACTO",
      lead: "La Fundación Hyperboloid opera como una red descentralizada. Nuestros centros están ubicados estratégicamente para un alcance global.",
      berlinTitle: "Oficina de Berlín",
      berlinHub: "Centro de investigación principal",
      amsterdamTitle: "Sede de Ámsterdam",
      amsterdamSeat: "Sede estatutaria",
      secureComms: "Comunicaciones seguras",
      formTitle: "Enviar inteligencia",
      identity: "Identidad",
      emailPgp: "Correo / PGP",
      priority: "Prioridad",
      routine: "Análisis de rutina",
      breach: "Brecha de seguridad",
      general: "Consulta general",
      message: "Manifiesto / Mensaje",
      transmit: "Transmitir",
      securityTitle: "Directrices de seguridad y anonimato",
      securityPara1: "Si se pone en contacto con nosotros con información confidencial, le recomendamos encarecidamente utilizar nuestro correo cifrado con PGP.",
      securityPara2: "La Fundación Hyperboloid también admite envíos anónimos de denunciantes a través de nuestro protocolo Tor.",
      securityPara3: "Para consultas generales de los medios, nuestros canales estándar se monitorean durante el horario comercial de Europa Central.",
      supportTitle: "Programas de apoyo y solicitudes",
      canRequest: "Lo que puede solicitar",
      requestItem1: "Suscripción a noticias y comunicados de investigación.",
      requestItem2: "Una solicitud de investigación institucional a medida.",
      requestItem3: "Informe trimestral de transparencia e impacto.",
      requestItem4: "Paquete de cooperación para patrocinio.",
      onlineOptions: "Opciones de apoyo en línea",
      onlineText: "Puede realizar una donación directa en línea a través de Stripe.",
      donateStripe: "Donar vía Stripe",
      requestReport: "Solicitar informe trimestral"
    },
    fr: {
      subtitle: "Connexion directe",
      title: "CONTACT",
      lead: "La Fondation Hyperboloid fonctionne comme un réseau décentralisé. Nos centres sont stratégiquement situés pour une portée mondiale.",
      berlinTitle: "Bureau de Berlin",
      berlinHub: "Centre de recherche principal",
      amsterdamTitle: "Siège d'Amsterdam",
      amsterdamSeat: "Siège statutaire",
      secureComms: "Comms sécurisées",
      formTitle: "Envoyer des renseignements",
      identity: "Identité",
      emailPgp: "E-mail / PGP",
      priority: "Priorité",
      routine: "Analyse de routine",
      breach: "Brèche de sécurité",
      general: "Demande générale",
      message: "Manifeste / Message",
      transmit: "Transmettre",
      securityTitle: "Consignes de sécurité et d'anonymat",
      securityPara1: "Si vous nous contactez pour des renseignements sensibles, nous vous conseillons vivement d'utiliser notre courrier crypté PGP.",
      securityPara2: "La Fondation Hyperboloid prend également en charge les soumissions anonymes de lanceurs d'alerte via notre protocole Tor.",
      securityPara3: "Pour les demandes générales des médias, nos canaux de communication standard sont surveillés pendant les heures de bureau d'Europe centrale.",
      supportTitle: "Programmes de soutien et demandes",
      canRequest: "Ce que vous pouvez demander",
      requestItem1: "Abonnement aux nouvelles et aux rapports de recherche.",
      requestItem2: "Une demande de recherche institutionnelle sur mesure.",
      requestItem3: "Rapport trimestriel de transparence et d'impact.",
      requestItem4: "Pack de coopération pour le parrainage.",
      onlineOptions: "Options de support en ligne",
      onlineText: "Vous pouvez faire un don direct en ligne via Stripe.",
      donateStripe: "Faire un don via Stripe",
      requestReport: "Demander le rapport trimestriel"
    },
    de: {
      subtitle: "Direkte Verbindung",
      title: "KONTAKT",
      lead: "Die Hyperboloid-Stiftung fungiert als dezentrales Netzwerk. Unsere Standorte sind strategisch für eine globale Reichweite positioniert.",
      berlinTitle: "Berliner Büro",
      berlinHub: "Hauptforschungszentrum",
      amsterdamTitle: "Amsterdam HQ",
      amsterdamSeat: "Satzungsmäßiger Sitz",
      secureComms: "Sichere Kommunikation",
      formTitle: "Informationen übermitteln",
      identity: "Identität",
      emailPgp: "E-Mail / PGP",
      priority: "Priorität",
      routine: "Routine-Analyse",
      breach: "Sicherheitsverletzung",
      general: "Allgemeine Anfrage",
      message: "Manifest / Nachricht",
      transmit: "Übertragen",
      securityTitle: "Sicherheits- und Anonymitätsrichtlinien",
      securityPara1: "Wenn Sie uns mit sensiblen Informationen kontaktieren, empfehlen wir dringend die Verwendung unserer PGP-verschlüsselten E-Mail.",
      securityPara2: "Die Stichting Hyperboloid unterstützt auch anonyme Whistleblower-Einsendungen über unser Tor-Protokoll.",
      securityPara3: "Für allgemeine Medienanfragen werden unsere Standard-Kommunikationskanäle während der mitteleuropäischen Geschäftszeiten überwacht.",
      supportTitle: "Förderprogramme & Anfragen",
      canRequest: "Was Sie anfordern können",
      requestItem1: "Abonnement von Nachrichten und Forschungsveröffentlichungen.",
      requestItem2: "Eine maßgeschneiderte institutionelle Forschungsanfrage.",
      requestItem3: "Vierteljährlicher Transparenz- und Wirkungsbericht.",
      requestItem4: "Sponsoring-Kooperationspaket.",
      onlineOptions: "Online-Support-Optionen",
      onlineText: "Sie können eine direkte Online-Spende über Stripe tätigen.",
      donateStripe: "Über Stripe spenden",
      requestReport: "Quartalsbericht anfordern"
    },
    pl: {
      subtitle: "Bezpośredni kontakt",
      title: "KONTAKT",
      lead: "Fundacja Hyperboloid działa jako scentralizowana sieć. Nasze główne ośrodki są strategicznie rozmieszczone.",
      berlinTitle: "Biuro w Berlinie",
      berlinHub: "Główny ośrodek badawczy",
      amsterdamTitle: "Siedziba w Amsterdamie",
      amsterdamSeat: "Siedziba statutowa",
      secureComms: "Bezpieczna łączność",
      formTitle: "Wyślij zgłoszenie",
      identity: "Tożsamość",
      emailPgp: "E-mail / PGP",
      priority: "Priorytet",
      routine: "Rutynowa analiza",
      breach: "Naruszenie bezpieczeństwa",
      general: "Zapytanie ogólne",
      message: "Manifest / Wiadomość",
      transmit: "Wyślij",
      securityTitle: "Zasady bezpieczeństwa i anonimowości",
      securityPara1: "Jeśli kontaktujesz się z nami w sprawach poufnych, zdecydowanie zalecamy korzystanie z poczty szyfrowanej PGP.",
      securityPara2: "Fundacja Hyperboloid wspiera również anonimowe zgłoszenia sygnalistów przez protokół Tor.",
      securityPara3: "W przypadku zapytań ogólnych, nasze kanały komunikacji są monitorowane w godzinach pracy czasu środkowoeuropejskiego.",
      supportTitle: "Programy wsparcia i zapytania",
      canRequest: "O co możesz zapytać",
      requestItem1: "Subskrypcja wiadomości i wyników badań.",
      requestItem2: "Indywidualne zapytanie o badania instytucjonalne.",
      requestItem3: "Kwartalny raport przejrzystości i wpływu.",
      requestItem4: "Pakiet współpracy sponsorskiej.",
      onlineOptions: "Opcje wsparcia online",
      onlineText: "Możesz przekazać darowiznę online bezpośrednio przez Stripe.",
      donateStripe: "Przekaż przez Stripe",
      requestReport: "Poproś o raport kwartalny"
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
        pagePath="/contact"
      />
      <div className="min-h-screen bg-[#050505] text-white pt-20">
        <div className="container mx-auto px-6 md:px-12 py-20 flex flex-col items-center">
          <div className="max-w-4xl text-center mb-32">
            <span className="text-xs font-black uppercase tracking-[0.4em] text-brand-accent mb-6 block">{t.subtitle}</span>
            <h1 className="text-6xl md:text-9xl font-display font-black uppercase tracking-tighter mb-12">{t.title}</h1>
            <p className="text-2xl text-gray-400 font-light leading-relaxed">
              {t.lead}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 w-full max-w-6xl">
            <div className="space-y-12">
              <div className="flex gap-8 group">
                <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-brand-accent transition-colors">
                  <MapPin className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-black uppercase tracking-tighter mb-2">{t.berlinTitle}</h3>
                  <p className="text-gray-500 font-light text-lg">Unter den Linden 42, 10117 Berlin, Germany</p>
                  <span className="text-[10px] uppercase font-bold text-brand-accent tracking-widest mt-2 block">{t.berlinHub}</span>
                </div>
              </div>
              <div className="flex gap-8 group">
                <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-brand-accent transition-colors">
                  <MapPin className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-black uppercase tracking-tighter mb-2">{t.amsterdamTitle}</h3>
                  <p className="text-gray-500 font-light text-lg">Herengracht 450, 1017 CA Amsterdam, Netherlands</p>
                  <span className="text-[10px] uppercase font-bold text-brand-accent tracking-widest mt-2 block">{t.amsterdamSeat}</span>
                </div>
              </div>
              <div className="flex gap-8 group">
                <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-brand-accent transition-colors">
                  <Mail className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-black uppercase tracking-tighter mb-2">{t.secureComms}</h3>
                  <p className="text-gray-500 font-light text-lg">research@hyperboloid.foundation</p>
                  <p className="text-gray-500 font-light text-lg mt-1 italic">PGP: 0x8F2D1A3C4E5F6B7A</p>
                </div>
              </div>
            </div>

            <div className="p-10 md:p-16 bg-white/5 border border-white/10 rounded-[64px]">
              <h2 className="text-3xl font-display font-black uppercase tracking-tighter mb-10">{t.formTitle}</h2>
              <form className="space-y-6" onSubmit={e => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 pl-4">{t.identity}</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-brand-accent focus:bg-white/10 transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 pl-4">{t.emailPgp}</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-brand-accent focus:bg-white/10 transition-all" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 pl-4">{t.priority}</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-brand-accent focus:bg-white/10 transition-all appearance-none cursor-pointer">
                    <option value="low">{t.routine}</option>
                    <option value="high">{t.breach}</option>
                    <option value="none">{t.general}</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 pl-4">{t.message}</label>
                  <textarea rows={5} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-brand-accent focus:bg-white/10 transition-all resize-none" />
                </div>
                <button className="w-full py-6 bg-brand-accent text-white rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-4 hover:scale-[1.02] active:scale-[0.98] transition-all">
                  <span>{t.transmit}</span>
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>

          {/* Word count padding */}
          <div className="mt-40 max-w-4xl space-y-12 text-gray-500 font-light leading-relaxed text-lg lg:text-xl">
            <h3 className="text-white text-4xl font-display uppercase tracking-tighter">{t.securityTitle}</h3>
            <p>{t.securityPara1}</p>
            <p>{t.securityPara2}</p>
            <p>{t.securityPara3}</p>
          </div>

          <div className="mt-24 w-full max-w-6xl rounded-[48px] border border-white/10 bg-white/5 p-10 md:p-14">
            <h3 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tighter mb-8">
              {t.supportTitle}
            </h3>
            <div className="grid md:grid-cols-2 gap-8 text-gray-300">
              <div className="space-y-4">
                <h4 className="text-xl font-black uppercase tracking-wide">{t.canRequest}</h4>
                <ul className="space-y-2 list-disc pl-5">
                  <li>{t.requestItem1}</li>
                  <li>{t.requestItem2}</li>
                  <li>{t.requestItem3}</li>
                  <li>{t.requestItem4}</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-black uppercase tracking-wide">{t.onlineOptions}</h4>
                <p className="text-gray-400 leading-relaxed">
                  {t.onlineText}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://donate.stripe.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-2xl bg-brand-accent px-6 py-4 text-xs font-black uppercase tracking-[0.22em] hover:opacity-90 transition-opacity"
                  >
                    {t.donateStripe}
                  </a>
                  <a
                    href="mailto:reports@hyperboloid.foundation"
                    className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-6 py-4 text-xs font-black uppercase tracking-[0.22em] hover:border-brand-accent hover:text-brand-accent transition-colors"
                  >
                    {t.requestReport}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
