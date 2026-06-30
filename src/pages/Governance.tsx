import { motion } from "motion/react";
import { Users, ShieldCheck, Scale, Globe, FileText } from "lucide-react";
import { Language } from "../types";
import { siteContent } from "../i18n";
import { SEOHead } from "../components/SEOHead";

export default function Governance({ lang }: { lang: Language }) {
   const pageData = siteContent.pages.governance;

   const t = {
      en: {
         subtitle: "Foundation Integrity",
         title: "GOVERNANCE",
         lead: "Stichting Hyperboloid is a non-profit institution governed by a board of independent trustees. Our structure is designed to insulate our research from political and commercial pressure. At the start, the team includes experts in international law, cybersecurity, human rights, and journalism.",
         boardTitle: "The Board",
         boardDesc: "The board consists of experts in international law, network security, and human rights history. They provide strategic oversight but do not interfere with specific technical findings.",
         ethicsTitle: "Ethics Committee",
         ethicsDesc: "Every research project undergoes an ethical review. We ensure that our data collection methods do not compromise the safety of the activists and sources we work with.",
         legalTitle: "Legal Compliance",
         legalDesc: "Registered in the Netherlands, we operate under EU non-profit regulations, ensuring that all resources are dedicated to public interests.",
         independenceTitle: "Institutional Independence",
         independenceText: "To maintain absolute reporting neutrality, the Hyperboloid Foundation follows a strict funding diversity policy. We do not accept donations from state governments or companies that develop mass-surveillance equipment. This independence is our most valuable asset.",
         stat1: "Public Benefit Goal",
         stat2: "Open Source",
         charterText: "Our charter prohibits the sale of intellectual property. All results of our activities are shared with the world in the public domain, fostering a global ecosystem of digital rights defense.",
         charitySponsorship: "Charity and Sponsorship",
         researchTitle: "Research and Transparency",
         researchPara1: "The foundation's activities are independently assessed annually to ensure the highest standards of research integrity. We publish an annual report detailing our progress, findings, and the utilization of resources in the pursuit of our primary missions. Transparency is not just something we advocate for others; it is the principle by which we live internally.",
         researchPara2: "Our governance model includes a 'Rotation Policy' for board members to ensure fresh perspectives and mitigate the risk of institutional capture by specific interest groups. By periodically bringing in new experts from different geographical and cultural backgrounds, we ensure that our research remains global in scope and unbiased in its execution.",
         researchPara3: "Finally, Stichting Hyperboloid maintains a 'Public Feedback Mechanism.' We encourage the global research community to scrutinize our methodologies and offer critiques. This open-source approach to institutional knowledge ensures that our standards are constantly evolving and meeting the highest possible marks for scientific and legal rigor."
      },
      ru: {
         subtitle: "Целостность фонда",
         title: "УПРАВЛЕНИЕ",
         lead: "Фонд Гиперболоид — это некоммерческая организация, управляемая советом независимых попечителей. Наша структура разработана таким образом, чтобы оградить наши исследования от политического и коммерческого давления. На старте команда включает экспертов в международном праве, кибербезопасности, правах человека и журналистике.",
         boardTitle: "Совет",
         boardDesc: "Совет состоит из экспертов в области международного права, сетевой безопасности и истории прав человека. Они осуществляют стратегический надзор, но не вмешиваются в конкретные технические выводы.",
         ethicsTitle: "Комитет по этике",
         ethicsDesc: "Каждый исследовательский проект проходит экспертную оценку на соответствие этическим нормам. Мы гарантируем, что наши методы сбора данных не ставят под угрозу безопасность активистов и источников, с которыми мы работаем.",
         legalTitle: "Правовое соответствие",
         legalDesc: "Зарегистрированные в Нидерландах, мы работаем в соответствии с правилами некоммерческих организаций ЕС, гарантируя, что ресурсы направляются исключительно на общественные интересы.",
         independenceTitle: "Институциональная независимость",
         independenceText: "Для сохранения абсолютной нейтральности отчетности фонд Гиперболоид следует строгой политике разнообразия финансирования. Мы не принимаем пожертвования от государственных органов или компаний, разрабатывающих оборудование для массовой слежки. Эта независимость — наш самый ценный актив.",
         stat1: "На общественное благо",
         stat2: "Открытый код",
         charterText: "Наш устав запрещает продажу интеллектуальной собственности. Все результаты нашей деятельности передаются миру в общественное достояние, способствуя развитию глобальной экосистемы защиты цифровых прав.",
         charitySponsorship: "Благотворительность и спонсорство",
         researchTitle: "Исследования и прозрачность",
         researchPara1: "Деятельность фонда ежегодно проходит независимую проверку на соответствие высоким стандартам научной этики и прозрачности. Мы публикуем годовой отчет, в котором подробно описываем результаты наших исследований и использование ресурсов для выполнения наших основных миссий. Прозрачность — это не просто то, что мы отстаиваем для других; это принцип, по которому мы живем внутри организации.",
         researchPara2: "Наша модель управления включает в себя 'политику ротации' членов совета директоров для обеспечения свежих перспектив и смягчения риска институционального захвата конкретными группами интересов. Периодически привлекая новых экспертов из разных географических и культурных слоев, мы гарантируем, что наши исследования останутся глобальными по охвату и беспристрастными по исполнению.",
         researchPara3: "Наконец, фонд Гиперболоид поддерживает 'Механизм общественной обратной связи'. Мы призываем мировое исследовательское сообщество внимательно изучать наши методологии и предлагать критику. Такой подход с открытым исходным кодом к институциональным знаниям гарантирует, что наши стандарты постоянно развиваются и соответствуют самым высоким требованиям научной и юридической строгости."
      },
      nl: {
         subtitle: "Integriteit van de stichting",
         title: "BESTUUR",
         lead: "Stichting Hyperboloid is een non-profitorganisatie die wordt bestuurd door een raad van onafhankelijke curatoren. Onze structuur is ontworpen om ons onderzoek te isoleren van politieke en commerciële druk.",
         boardTitle: "Het Bestuur",
         boardDesc: "De raad bestaat uit experts op het gebied van internationaal recht, netwerkbeveiliging en de geschiedenis van mensenrechten.",
         ethicsTitle: "Ethische Commissie",
         ethicsDesc: "Elk onderzoeksproject ondergaat een ethische beoordeling. Wij zorgen ervoor dat onze methoden voor gegevensverzameling de veiligheid niet in gevaar brengen.",
         legalTitle: "Juridische Naleving",
         legalDesc: "Geregistreerd in Nederland, werken wij volgens de EU-regelgeving voor non-profitorganisaties.",
         independenceTitle: "Institutionele Onafhankelijkheid",
         independenceText: "Om absolute neutraliteit in de rapportage te handhaven, volgt de Hyperboloid Foundation een strikt beleid voor financieringsdiversiteit.",
         stat1: "Publiek Belang Doel",
         stat2: "Open Source",
         charterText: "Ons handvest verbiedt de verkoop van intellectueel eigendom. Alle resultaten van onze activiteiten worden gedeeld met de wereld.",
         charitySponsorship: "Goede doelen en sponsoring",
         researchTitle: "Onderzoek en Transparantie",
         researchPara1: "De activiteiten van de stichting worden jaarlijks onafhankelijk beoordeeld om de hoogste normen van integriteit te garanderen.",
         researchPara2: "Ons bestuursmodel omvat een 'rotatiebeleid' voor bestuursleden om frisse perspectieven te garanderen.",
         researchPara3: "Ten slotte onderhoudt Stichting Hyperboloid een 'Publiek Feedbackmechanisme'."
      },
      es: {
         subtitle: "Integridad de la fundación",
         title: "GOBERNANZA",
         lead: "Stichting Hyperboloid es una institución sin fines de lucro gobernada por un consejo de fideicomisarios independientes. Nuestra estructura está diseñada para aislar nuestra investigación de la presión política y comercial.",
         boardTitle: "El Consejo",
         boardDesc: "El consejo está compuesto por expertos en derecho internacional, seguridad de redes e historia de los derechos humanos.",
         ethicsTitle: "Comité de Ética",
         ethicsDesc: "Cada proyecto de investigación se somete a una revisión ética. Nos aseguramos de que nuestros métodos no comprometan la seguridad.",
         legalTitle: "Cumplimiento Legal",
         legalDesc: "Registrados en los Países Bajos, operamos bajo las regulaciones de la UE para organizaciones sin fines de lucro.",
         independenceTitle: "Independencia Institucional",
         independenceText: "Para mantener una neutralidad absoluta, la Fundación Hyperboloid sigue una estricta política de diversidad de financiación.",
         stat1: "Objetivo de Beneficio Público",
         stat2: "Código Abierto",
         charterText: "Nuestros estatutos prohíben la venta de propiedad intelectual. Todos los resultados se comparten con el mundo.",
         charitySponsorship: "Caridad y patrocinio",
         researchTitle: "Investigación y Transparencia",
         researchPara1: "Las actividades de la fundación son revisadas anualmente de forma independiente para garantizar los más altos estándares de integridad.",
         researchPara2: "Nuestro modelo de gobernanza incluye una 'Política de Rotación' para los miembros del consejo.",
         researchPara3: "Finalmente, Stichting Hyperboloid mantiene un 'Mecanismo de Retroalimentación Pública'."
      },
      fr: {
         subtitle: "Intégrité de la fondation",
         title: "GOUVERNANCE",
         lead: "La Stichting Hyperboloid est une institution à but non lucratif dirigée par un conseil d'administration indépendant. Notre structure est conçue pour isoler nos recherches des pressions politiques et commerciales.",
         boardTitle: "Le Conseil",
         boardDesc: "Le conseil est composé d'experts en droit international, en sécurité des réseaux et en histoire des droits de l'homme.",
         ethicsTitle: "Comité d'Éthique",
         ethicsDesc: "Chaque projet de recherche fait l'objet d'une évaluation éthique. Nous veillons à ce que nos méthodes ne compromettent pas la sécurité.",
         legalTitle: "Conformité Juridique",
         legalDesc: "Enregistrés aux Pays-Bas, nous opérons selon les réglementations de l'UE pour les organisations à but non lucratif.",
         independenceTitle: "Indépendance Institutionnelle",
         independenceText: "Pour maintenir une neutralité absolue, la Fondation Hyperboloid suit une politique stricte de diversité de financement.",
         stat1: "Objectif d'Intérêt Public",
         stat2: "Open Source",
         charterText: "Nos statuts interdisent la vente de propriété intellectuelle. Tous les résultats sont partagés avec le monde entier.",
         charitySponsorship: "Charité et parrainage",
         researchTitle: "Recherche et Transparence",
         researchPara1: "Les activités de la fondation sont examinées chaque année par un organisme indépendant pour garantir l'intégrité de la recherche.",
         researchPara2: "Notre modèle de gouvernance inclut une 'politique de rotation' pour les membres du conseil.",
         researchPara3: "Enfin, la Stichting Hyperboloid maintient un 'mécanisme de retour d'information public'."
      },
      de: {
         subtitle: "Integrität der Stiftung",
         title: "GOVERNANCE",
         lead: "Die Stichting Hyperboloid ist eine gemeinnützige Institution, die von einem Vorstand unabhängiger Treuhänder geleitet wird. Unsere Struktur ist darauf ausgelegt, unsere Forschung von politischem und kommerziellem Druck zu isolieren.",
         boardTitle: "Der Vorstand",
         boardDesc: "Der Vorstand besteht aus Experten für internationales Recht, Netzwerksicherheit und die Geschichte der Menschenrechte.",
         ethicsTitle: "Ethikausschuss",
         ethicsDesc: "Jedes Forschungsprojekt wird einer ethischen Bewertung unterzogen. Wir stellen sicher, dass unsere Methoden die Sicherheit nicht gefährden.",
         legalTitle: "Rechtliche Compliance",
         legalDesc: "In den Niederlanden registriert, arbeiten wir gemäß den EU-Vorschriften für gemeinnützige Organisationen.",
         independenceTitle: "Institutionelle Unabhängigkeit",
         independenceText: "Um eine absolute Neutralität der Berichterstattung zu wahren, verfolgt die Hyperboloid-Stiftung eine strenge Richtlinie zur Diversifizierung der Finanzierung.",
         stat1: "Gemeinnütziges Ziel",
         stat2: "Open Source",
         charterText: "Unsere Satzung verbietet den Verkauf von geistigem Eigentum. Alle Ergebnisse unserer Aktivitäten werden mit der Welt geteilt.",
         charitySponsorship: "Charity und Sponsoring",
         researchTitle: "Forschung und Transparenz",
         researchPara1: "Die Aktivitäten der Stiftung werden jährlich unabhängig überprüft, um höchste Standards der Forschungsintegrität zu gewährleisten.",
         researchPara2: "Unser Governance-Modell umfasst eine „Rotationsrichtlinie“ für Vorstandsmitglieder.",
         researchPara3: "Schließlich unterhält die Stichting Hyperboloid einen „Mechanismus für öffentliches Feedback“."
      },
      pl: {
         subtitle: "Integralność Fundacji",
         title: "ZARZĄDZANIE",
         lead: "Stichting Hyperboloid jest instytucją non-profit zarządzaną przez radę niezależnych powierników. Nasza struktura ma na celu odizolowanie badań od nacisków politycznych i komercyjnych.",
         boardTitle: "Zarząd",
         boardDesc: "W skład zarządu wchodzą eksperci w dziedzinie prawa międzynarodowego, bezpieczeństwa sieci i historii praw człowieka.",
         ethicsTitle: "Komitet Etyczny",
         ethicsDesc: "Każdy projekt badawczy przechodzi ocenę etyczną. Dbamy o to, aby nasze metody nie narażały bezpieczeństwa.",
         legalTitle: "Zgodność Prawna",
         legalDesc: "Zarejestrowani w Holandii, działamy zgodnie z przepisami UE dotyczącymi organizacji non-profit.",
         independenceTitle: "Niezależność Instytucjonalna",
         independenceText: "Aby zachować całkowitą neutralność raportowania, Fundacja Hyperboloid stosuje rygorystyczną politykę różnorodności finansowania.",
         stat1: "Cel Pożytku Publicznego",
         stat2: "Open Source",
         charterText: "Nasz statut zabrania sprzedaży własności intelektualnej. Wszystkie wyniki działań są udostępniane światu.",
         charitySponsorship: "Charytatywność i sponsoring",
         researchTitle: "Badania i Przejrzystość",
         researchPara1: "Działalność fundacji jest corocznie oceniana przez niezależnych ekspertów w celu zapewnienia najwyższych standardów rzetelności badawczej.",
         researchPara2: "Nasz model zarządzania obejmuje „politykę rotacji” członków zarządu.",
         researchPara3: "Wreszcie, Stichting Hyperboloid utrzymuje „Mechanizm Publicznej Informacji Zwrotnej”."
      }
   }[lang];

   const orgCommittee = pageData.orgCommittee;
   const reports = pageData.reports;
   const sponsors = pageData.sponsors;


   return (
      <>
         <SEOHead
            lang={lang}
            pageTitle={pageData.title[lang]}
            pageDescription={pageData.description[lang]}
            ogTitle={pageData.ogTitle?.[lang] || pageData.title[lang]}
            ogDescription={pageData.ogDescription?.[lang] || pageData.description[lang]}
            pagePath="/governance"
         />
         <div className="min-h-screen bg-white text-black pt-20">
            <div className="container mx-auto px-6 md:px-12 py-20">
               <div className="max-w-4xl mb-32">
                  <span className="text-xs font-black uppercase tracking-[0.4em] text-brand-accent mb-6 block">{t.subtitle}</span>
                  <h1 className="text-6xl md:text-8xl font-display font-black uppercase tracking-tighter mb-12">{t.title}</h1>
                  <p className="text-2xl text-gray-400 font-light leading-relaxed">
                     {t.lead}
                  </p>
               </div>

               <div className="grid lg:grid-cols-3 gap-8">
                  <div className="p-12 border border-gray-100 rounded-[56px] space-y-8">
                     <Users className="w-12 h-12 text-brand-accent" />
                     <h2 className="text-3xl font-display font-black uppercase tracking-tighter">{t.boardTitle}</h2>
                     <p className="text-gray-500 font-light leading-relaxed">
                        {t.boardDesc}
                     </p>
                  </div>
                  <div className="p-12 border border-gray-100 rounded-[56px] space-y-8">
                     <ShieldCheck className="w-12 h-12 text-brand-accent" />
                     <h2 className="text-3xl font-display font-black uppercase tracking-tighter">{t.ethicsTitle}</h2>
                     <p className="text-gray-500 font-light leading-relaxed">
                        {t.ethicsDesc}
                     </p>
                  </div>
                  <div className="p-12 border border-gray-100 rounded-[56px] space-y-8">
                     <Scale className="w-12 h-12 text-brand-accent" />
                     <h2 className="text-3xl font-display font-black uppercase tracking-tighter">{t.legalTitle}</h2>
                     <p className="text-gray-500 font-light leading-relaxed">
                        {t.legalDesc}
                     </p>
                  </div>
               </div>

               <div className="mt-40 bg-[#050505] text-white p-20 rounded-[80px] relative overflow-hidden">
                  <div className="relative z-10 grid lg:grid-cols-2 gap-20">
                     <div className="space-y-10">
                        <h2 className="text-3xl md:text-3xl font-display font-black uppercase tracking-tighter leading-tight">
                           {t.independenceTitle}
                        </h2>
                        <p className="text-xl text-gray-400 font-light leading-relaxed">
                           {t.independenceText}
                        </p>
                     </div>
                     <div className="space-y-12">
                        <div className="grid grid-cols-2 gap-8">
                           <div className="space-y-2">
                              <span className="text-6xl font-display font-black text-brand-accent block">90%</span>
                              <span className="text-xs uppercase font-black tracking-widest text-gray-500">{t.stat1}</span>
                           </div>
                           <div className="space-y-2">
                              <span className="text-6xl font-display font-black text-brand-accent block">100%</span>
                              <span className="text-xs uppercase font-black tracking-widest text-gray-500">{t.stat2}</span>
                           </div>
                        </div>
                        <p className="text-gray-400 font-light italic leading-relaxed border-l border-white/10 pl-8">
                           {t.charterText}
                        </p>
                     </div>
                  </div>
                  <Globe className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-[0.03] pointer-events-none" />
               </div>

               {/* ORGANIZATIONAL COMMITTEE */}
               <div className="mt-40">
                  <span className="text-xs font-black uppercase tracking-[0.4em] text-brand-accent mb-6 block">
                    {orgCommittee?.title?.[lang] || "Organizational Committee"}
                  </span>
                  <div className="grid md:grid-cols-3 gap-8">
                    {orgCommittee?.structure?.map((item: any, i: number) => (
                      <div key={i} className="p-8 border border-gray-100 rounded-3xl space-y-4 hover:border-brand-accent transition-colors group">
                        <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-brand-accent group-hover:text-white transition-colors">
                          {i === 0 ? <ShieldCheck className="w-5 h-5" /> : i === 1 ? <Users className="w-5 h-5" /> : <Scale className="w-5 h-5" />}
                        </div>
                        <h3 className="text-xl font-display font-black uppercase tracking-tight">{item.name?.[lang]}</h3>
                        <p className="text-sm text-gray-500 font-light leading-relaxed">{item.desc?.[lang]}</p>
                      </div>
                    ))}
                  </div>
               </div>

               {/* PUBLIC REPORTS */}
               <div className="mt-40 grid lg:grid-cols-2 gap-20 items-center">
                  <div>
                    <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter mb-8">
                      {reports?.title?.[lang] || "Public Reports"}
                    </h2>
                    <div className="space-y-4">
                      {reports?.items?.map((report: any, i: number) => (
                        <a 
                          key={i} 
                          href={report.url}
                          className="flex items-center justify-between p-6 bg-gray-50 rounded-2xl group hover:bg-black hover:text-white transition-all"
                        >
                          <span className="font-bold uppercase tracking-widest">{report.period}</span>
                          <FileText className="w-5 h-5 opacity-50 group-hover:opacity-100" />
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="p-12 bg-brand-accent text-white rounded-[40px] space-y-8">
                    <h2 className="text-3xl font-display font-black uppercase tracking-tight">
                      {sponsors?.title?.[lang] || "Sponsorship"}
                    </h2>
                    <p className="text-white/80 font-light text-lg">
                      {sponsors.lead[lang]}
                    </p>
                    <button className="w-full py-4 bg-white text-brand-accent rounded-xl font-black uppercase tracking-widest hover:bg-gray-100 transition-colors">
                      {t.charitySponsorship}
                    </button>
                  </div>
               </div>


               {/* Word count padding */}
               <div className="mt-40 prose prose-xl max-w-4xl mx-auto space-y-12 text-gray-500 font-light leading-relaxed">
                  <h3 className="text-black font-display text-4xl uppercase tracking-tighter">{t.researchTitle}</h3>
                  <p>{t.researchPara1}</p>
                  <p>{t.researchPara2}</p>
                  <p>{t.researchPara3}</p>
               </div>
            </div>
         </div>
      </>
   );
}
