import { Mail, Linkedin, Github, MessageCircle } from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";

export default function Contato() {
  const { t } = useLanguage();
  return (
    <section id="contato" className="scroll-mt-20 min-h-[calc(100vh-5rem)] max-w-4xl mx-auto px-6 py-12 text-center flex flex-col justify-center">
      <h2 className="text-3xl font-light tracking-wider text-white mb-8 uppercase border-b border-white/25 pb-2 inline-block">
        {t.contact.title}
      </h2>

      <p className="text-zinc-200 font-light text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
        {t.contact.sub}
      </p>

      <div className="flex flex-wrap flex-col sm:flex-row justify-center items-center gap-6">
        <a
          href="mailto:ramontardetti14@gmail.com"
          className="flex items-center gap-3 px-8 py-4 bg-white text-black rounded-xl hover:bg-zinc-200 hover:-translate-y-1 transition-all duration-300 shadow-lg min-w-[240px] justify-center"
        >
          <Mail className="w-5 h-5" />
          <span className="font-medium tracking-wide uppercase text-xs">{t.contact.email}</span>
        </a>

        <a
          href="https://wa.me/5541999761508?text=Olá%20Ramon,%20encontrei%20seu%20portifólio,%20gostaria%20de%20conversar%20com%20você"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-8 py-4 bg-white text-black rounded-xl hover:bg-zinc-200 hover:-translate-y-1 transition-all duration-300 shadow-lg min-w-[240px] justify-center"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="font-medium tracking-wide uppercase text-xs">{t.contact.whatsapp}</span>
        </a>

        <a
          href="https://github.com/ramon-romano"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl hover:bg-white hover:text-black hover:-translate-y-1 transition-all duration-300 shadow-lg min-w-[240px] justify-center"
        >
          <Github className="w-5 h-5" />
          <span className="font-medium tracking-wide uppercase text-xs">{t.contact.github}</span>
        </a>

        <a
          href="https://www.linkedin.com/in/ramon-romano-210996275"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl hover:bg-white hover:text-black hover:-translate-y-1 transition-all duration-300 shadow-lg min-w-[240px] justify-center"
        >
          <Linkedin className="w-5 h-5" />
          <span className="font-medium tracking-wide uppercase text-xs">{t.contact.linkedin}</span>
        </a>
      </div>
    </section>
  );
}
