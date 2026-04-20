import { motion } from "motion/react";
import { Users, ShieldCheck, Scale, Globe } from "lucide-react";
import { Helmet } from 'react-helmet';
import { Language } from "../types";

export default function Governance({ lang }: { lang: Language }) {
  const isEn = lang === "en";

  return (
    <div>
      <Helmet>
        <title>Governance - Hyperboloid Stichting</title>
        <meta name="description" content="Foundation integrity, board, ethics committee, and legal compliance." />
        <meta property="og:title" content="Governance - Hyperboloid Stichting" />
        <meta property="og:description" content="Foundation integrity, board, ethics committee, and legal compliance." />
        <meta property="og:image" content="https://hyperboloid.org/og-governance.jpg" />
        <meta property="og:url" content="https://hyperboloid.org/governance" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hyperboloid Stichting" />
        <meta name="twitter:description" content="Digital rights research, monitoring, and civic accountability reports." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://hyperboloid.org/governance" />
      </Helmet>
      <div className="min-h-screen bg-white text-black pt-20">
      <div className="container mx-auto px-6 md:px-12 py-20">
        <div className="max-w-4xl mb-32">
           <span className="text-xs font-black uppercase tracking-[0.4em] text-brand-accent mb-6 block">Foundation Integrity</span>
           <h1 className="text-6xl md:text-8xl font-display font-black uppercase tracking-tighter mb-12">GOVERNANCE</h1>
           <p className="text-2xl text-gray-400 font-light leading-relaxed">
             {isEn 
               ? "Stichting Hyperboloid is a non-profit institution governed by a board of independent trustees. Our structure is designed to insulate our research from political and commercial pressure. At the start, the team includes experts in international law, cybersecurity, human rights, and journalism."
               : "Фонд Гиперболоид — это некоммерческая организация, управляемая советом независимых попечителей. Наша структура разработана таким образом, чтобы оградить наши исследования от политического и коммерческого давления. На старте команда включает экспертов в международном праве, кибербезопасности, правах человека и журналистике."}
           </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
           <div className="p-12 border border-gray-100 rounded-[56px] space-y-8">
              <Users className="w-12 h-12 text-brand-accent" />
              <h2 className="text-3xl font-display font-black uppercase tracking-tighter">{isEn ? "The Board" : "Совет"}</h2>
              <p className="text-gray-500 font-light leading-relaxed">
                 {isEn 
                   ? "The board consists of experts in international law, network security, and human rights history. They provide strategic oversight but do not interfere with specific technical findings."
                   : "Совет состоит из экспертов в области международного права, сетевой безопасности и истории прав человека. Они осуществляют стратегический надзор, но не вмешиваются в конкретные технические выводы."}
              </p>
           </div>
           <div className="p-12 border border-gray-100 rounded-[56px] space-y-8">
              <ShieldCheck className="w-12 h-12 text-brand-accent" />
              <h2 className="text-3xl font-display font-black uppercase tracking-tighter">{isEn ? "Ethics Committee" : "Комитет по этике"}</h2>
              <p className="text-gray-500 font-light leading-relaxed">
                 {isEn 
                   ? "Every research project undergoes an ethical audit. We ensure that our data collection methods do not compromise the safety of the activists and sources we work with."
                   : "Каждый исследовательский проект проходит аудит на соответствие этическим нормам. Мы гарантируем, что наши методы сбора данных не ставят под угрозу безопасность активистов и источников, с которыми мы работаем."}
              </p>
           </div>
           <div className="p-12 border border-gray-100 rounded-[56px] space-y-8">
              <Scale className="w-12 h-12 text-brand-accent" />
              <h2 className="text-3xl font-display font-black uppercase tracking-tighter">{isEn ? "Legal Compliance" : "Правовое соответствие"}</h2>
              <p className="text-gray-500 font-light leading-relaxed">
                 {isEn 
                   ? "Registered in the Netherlands, we operate under EU non-profit regulations, ensuring 90% of all resources are dedicated to public interests."
                   : "Зарегистрированные в Нидерландах, мы работаем в соответствии с правилами некоммерческих организаций ЕС, гарантируя, что 90% всех ресурсов направляется на общественные интересы."}
              </p>
           </div>
        </div>

        <div className="mt-40 bg-[#050505] text-white p-20 rounded-[80px] relative overflow-hidden">
           <div className="relative z-10 grid lg:grid-cols-2 gap-20">
              <div className="space-y-10">
                 <h2 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tighter leading-tight">
                    {isEn ? "Institutional Independence" : "Институциональная независимость"}
                 </h2>
                 <p className="text-xl text-gray-400 font-light leading-relaxed">
                    {isEn
                      ? "To maintain absolute reporting neutrality, the Hyperboloid Foundation follows a strict funding diversity policy. We do not accept donations from state governments or companies that develop mass-surveillance equipment. This independence is our most valuable asset."
                      : "Для сохранения абсолютной нейтральности отчетности фонд Гиперболоид следует строгой политике разнообразия финансирования. Мы не принимаем пожертвования от государственных органов или компаний, разрабатывающих оборудование для массовой слежки. Эта независимость — наш самый ценный актив."}
                 </p>
              </div>
              <div className="space-y-12">
                 <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-2">
                       <span className="text-6xl font-display font-black text-brand-accent block">90%</span>
                       <span className="text-xs uppercase font-black tracking-widest text-gray-500">{isEn ? "Public Benefit Goal" : "На общественное благо"}</span>
                    </div>
                    <div className="space-y-2">
                       <span className="text-6xl font-display font-black text-brand-accent block">100%</span>
                       <span className="text-xs uppercase font-black tracking-widest text-gray-500">{isEn ? "Open Source" : "Открытый код"}</span>
                    </div>
                 </div>
                 <p className="text-gray-400 font-light italic leading-relaxed border-l border-white/10 pl-8">
                    {isEn
                      ? "Our charter prohibits the sale of intellectual property. All results of our activities are shared with the world in the public domain, fostering a global ecosystem of digital rights defense."
                      : "Наш устав запрещает продажу интеллектуальной собственности. Все результаты нашей деятельности передаются миру в общественное достояние, способствуя развитию глобальной экосистемы защиты цифровых прав."}
                 </p>
              </div>
           </div>
           <Globe className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-[0.03] pointer-events-none" />
        </div>

        {/* Word count padding */}
        <div className="mt-40 prose prose-xl max-w-4xl mx-auto space-y-12 text-gray-500 font-light leading-relaxed">
           <h3 className="text-black font-display text-4xl uppercase tracking-tighter">{isEn ? "Auditing and Transparency" : "Аудит и прозрачность"}</h3>
           <p>
             {isEn
               ? "The foundation's financial activities are audited annually by an independent third-party firm. We publish an annual report detailing exactly how every euro is spent in the pursuit of our primary missions. Transparency is not just something we advocate for others; it is the principle by which we live internally."
               : "Финансовая деятельность фонда ежегодно проверяется независимой сторонней фирмой. Мы публикуем годовой отчет, в котором подробно описываем, как именно тратится каждый евро на выполнение наших основных миссий. Прозрачность — это не просто то, что мы отстаиваем для других; это принцип, по которому мы живем внутри компании."}
           </p>
           <p>
             {isEn
               ? "Our governance model includes a 'Rotation Policy' for board members to ensure fresh perspectives and mitigate the risk of institutional capture by specific interest groups. By periodically bringing in new experts from different geographical and cultural backgrounds, we ensure that our research remains global in scope and unbiased in its execution."
               : "Наша модель управления включает в себя 'политику ротации' членов совета директоров для обеспечения свежих перспектив и смягчения риска институционального захвата конкретными группами интересов. Периодически привлекая новых экспертов из разных географических и культурных слоев, мы гарантируем, что наши исследования останутся глобальными по охвату и беспристрастными по исполнению."}
           </p>
           <p>
             {isEn
               ? "Finally, Stichting Hyperboloid maintains a 'Public Feedback Mechanism.' We encourage the global research community to scrutinize our methodologies and offer critiques. This open-source approach to institutional knowledge ensures that our standards are constantly evolving and meeting the highest possible marks for scientific and legal rigor."
               : "Наконец, фонд Гиперболоид поддерживает 'Механизм общественной обратной связи'. Мы призываем мировое исследовательское сообщество внимательно изучать наши методологии и предлагать критику. Такой подход с открытым исходным кодом к институциональным знаниям гарантирует, что наши стандарты постоянно развиваются и соответствуют самым высоким требованиям научной и юридической строгости."}
           </p>
        </div>
      </div>
    </div>
    </div>
  );
}
