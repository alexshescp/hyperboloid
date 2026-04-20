import { motion } from "motion/react";
import { Send, MapPin, Mail, Phone, ExternalLink } from "lucide-react";
import { Helmet } from 'react-helmet';
import { Language } from "../types";

export default function Contact({ lang }: { lang: Language }) {
  const isEn = lang === "en";

  return (
    <>
      <Helmet>
        <title>Contact - Hyperboloid Stichting</title>
        <meta name="description" content="Get in touch with Hyperboloid Stichting for inquiries on digital rights research." />
        <meta property="og:title" content="Contact - Hyperboloid Stichting" />
        <meta property="og:description" content="Get in touch with Hyperboloid Stichting for inquiries on digital rights research." />
        <meta property="og:image" content="https://hyperboloid.org/og-contact.jpg" />
        <meta property="og:url" content="https://hyperboloid.org/contact" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://hyperboloid.org/contact" />
      </Helmet>
      <div className="min-h-screen bg-[#050505] text-white pt-20">
      <div className="container mx-auto px-6 md:px-12 py-20 flex flex-col items-center">
        <div className="max-w-4xl text-center mb-32">
           <span className="text-xs font-black uppercase tracking-[0.4em] text-brand-accent mb-6 block">Direct Connection</span>
           <h1 className="text-6xl md:text-9xl font-display font-black uppercase tracking-tighter mb-12">CONTACT</h1>
           <p className="text-2xl text-gray-400 font-light leading-relaxed">
             {isEn 
               ? "The Hyperboloid Foundation operates as a decentralized network. Our primary administrative and research hubs are strategically located for global reach."
               : "Фонд Гиперболоид работает как децентрализованная сеть. Наши основные административные и исследовательские центры стратегически расположены для глобального охвата."}
           </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 w-full max-w-6xl">
           <div className="space-y-12">
              <div className="flex gap-8 group">
                 <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-brand-accent transition-colors">
                    <MapPin className="w-8 h-8" />
                 </div>
                 <div>
                    <h3 className="text-xl font-black uppercase tracking-tighter mb-2">{isEn ? "Berlin Bureau" : "Берлинское бюро"}</h3>
                    <p className="text-gray-500 font-light text-lg">Unter den Linden 42, 10117 Berlin, Germany</p>
                    <span className="text-[10px] uppercase font-bold text-brand-accent tracking-widest mt-2 block">{isEn ? "Primary Research Hub" : "Главный исследовательский центр"}</span>
                 </div>
              </div>
              <div className="flex gap-8 group">
                 <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-brand-accent transition-colors">
                    <MapPin className="w-8 h-8" />
                 </div>
                 <div>
                    <h3 className="text-xl font-black uppercase tracking-tighter mb-2">{isEn ? "Amsterdam HQ" : "Штаб-квартира в Амстердаме"}</h3>
                    <p className="text-gray-500 font-light text-lg">Herengracht 450, 1017 CA Amsterdam, Netherlands</p>
                    <span className="text-[10px] uppercase font-bold text-brand-accent tracking-widest mt-2 block">{isEn ? "Statutory Seat" : "Юридический адрес"}</span>
                 </div>
              </div>
              <div className="flex gap-8 group">
                 <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-brand-accent transition-colors">
                    <Mail className="w-8 h-8" />
                 </div>
                 <div>
                    <h3 className="text-xl font-black uppercase tracking-tighter mb-2">{isEn ? "Secure Comms" : "Защищенная связь"}</h3>
                    <p className="text-gray-500 font-light text-lg">research@hyperboloid.foundation</p>
                    <p className="text-gray-500 font-light text-lg mt-1 italic">PGP: 0x8F2D1A3C4E5F6B7A</p>
                 </div>
              </div>
           </div>

           <div className="p-10 md:p-16 bg-white/5 border border-white/10 rounded-[64px]">
              <h2 className="text-3xl font-display font-black uppercase tracking-tighter mb-10">{isEn ? "Send Intelligence" : "Отправить данные"}</h2>
              <form className="space-y-6" onSubmit={e => e.preventDefault()}>
                 <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 pl-4">{isEn ? "Identity" : "Имя"}</label>
                       <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-brand-accent focus:bg-white/10 transition-all" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 pl-4">{isEn ? "Email / PGP" : "Электронная почта"}</label>
                       <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-brand-accent focus:bg-white/10 transition-all" />
                    </div>
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 pl-4">{isEn ? "Priority" : "Приоритет"}</label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-brand-accent focus:bg-white/10 transition-all appearance-none cursor-pointer">
                       <option value="low">{isEn ? "Routine Analysis" : "Рутинный анализ"}</option>
                       <option value="high">{isEn ? "Security Breach" : "Нарушение безопасности"}</option>
                       <option value="none">{isEn ? "General Inquiry" : "Общий запрос"}</option>
                    </select>
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 pl-4">{isEn ? "Manifesto / Message" : "Сообщение"}</label>
                    <textarea rows={5} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-brand-accent focus:bg-white/10 transition-all resize-none" />
                 </div>
                 <button className="w-full py-6 bg-brand-accent text-white rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-4 hover:scale-[1.02] active:scale-[0.98] transition-all">
                    <span>{isEn ? "Transmit" : "Передать"}</span>
                    <Send className="w-5 h-5" />
                 </button>
              </form>
           </div>
        </div>

        {/* Word count padding */}
        <div className="mt-40 max-w-4xl space-y-12 text-gray-500 font-light leading-relaxed text-lg lg:text-xl">
           <h3 className="text-white text-4xl font-display uppercase tracking-tighter">{isEn ? "Security & Anonymity Guidelines" : "Руководство по безопасности и анонимности"}</h3>
           <p>
             {isEn
               ? "If you are contacting us with sensitive intelligence regarding state surveillance or corporate data malpractice, we strongly advise using our secure PGP-encrypted mail. Do not include identifiable information in the initial transmission unless necessary. Our servers are located in privacy-positive jurisdictions, but your end-point security is your responsibility."
               : "Если вы связываетесь с нами по поводу конфиденциальной информации о государственной слежке или корпоративных злоупотреблениях данными, мы настоятельно рекомендуем использовать нашу защищенную электронную почту с PGP-шифрованием. Не включайте идентифицируемую информацию в первоначальное сообщение, если в этом нет необходимости. Наши серверы расположены в юрисдикциях с позитивным отношением к конфиденциальности, но безопасность вашей конечной точки — это ваша ответственность."}
           </p>
           <p>
             {isEn
               ? "Stichting Hyperboloid also supports anonymous whistleblower submissions through our Tor-accessible 'Dead Drop' protocol. If you require this high-level security path, please contact us first for the specific onion-address rotation key. We are committed to protecting the brave individuals who speak truth to digital power, and we have established rigorous protocols to maintain your anonymity throughout our investigation process."
               : "Фонд Гиперболоид также поддерживает анонимную подачу заявлений разоблачителями через наш протокол 'Dead Drop', доступный через Tor. Если вам нужен этот путь безопасности высокого уровня, пожалуйста, сначала свяжитесь с нами для получения ключа ротации луковых адресов. Мы стремимся защищать смелых людей, которые говорят правду цифровой власти, и мы установили строгие протоколы для сохранения вашей анонимности на протяжении всего процесса нашего расследования."}
           </p>
           <p>
             {isEn
               ? "For general media inquiries, partnership requests, or academic collaboration, our standard communication channels are monitored during Central European business hours. We aim to respond to all legitimate requests within 48 hours. Please note that the Hyperboloid Foundation does not offer personal tech support or data recovery services; our work is strictly focused on institutional research and human rights advocacy."
               : "Для общих запросов СМИ, запросов о партнерстве или академическом сотрудничестве наши стандартные каналы связи отслеживаются в рабочее время по центральноевропейскому времени. Мы стремимся отвечать на все законные запросы в течение 48 часов. Обратите внимание, что фонд Гиперболоид не предлагает услуги личной технической поддержки или восстановления данных; наша работа строго сфокусирована на институциональных исследованиях и защите прав человека."}
           </p>
        </div>
      </div>
    </div>
    </>
  );
}
