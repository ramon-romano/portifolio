import { Mail, Linkedin, Github, MessageCircle } from "lucide-react";

export default function Contato() {
  return (
    <section id="contato" className="scroll-mt-20 min-h-[calc(100vh-5rem)] max-w-4xl mx-auto px-6 py-12 text-center flex flex-col justify-center">
      <h2 className="text-3xl font-light tracking-wider text-white mb-8 uppercase border-b border-white/25 pb-2 inline-block">
        Vamos Conversar?
      </h2>

      <p className="text-zinc-200 font-light text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
        Atualmente estou aberto a novas oportunidades e projetos. Se você quer construir algo incrível, falar sobre tecnologia ou trocar ideias, me mande uma mensagem!
      </p>

      <div className="flex flex-wrap flex-col sm:flex-row justify-center items-center gap-6">
        <a
          href="mailto:ramontardetti14@gmail.com"
          className="flex items-center gap-3 px-8 py-4 bg-white text-black rounded-xl hover:bg-zinc-200 hover:-translate-y-1 transition-all duration-300 shadow-lg"
        >
          <Mail className="w-5 h-5" />
          <span className="font-medium tracking-wide">Me mande um E-mail</span>
        </a>

        <a
          href="https://wa.me/5541999761508"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-8 py-4 bg-white text-black rounded-xl hover:bg-zinc-200 hover:-translate-y-1 transition-all duration-300 shadow-lg"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="font-medium tracking-wide">Meu WhatsApp</span>
        </a>

        <a
          href="https://github.com/ramon-romano"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl hover:bg-white hover:text-black hover:-translate-y-1 transition-all duration-300 shadow-lg"
        >
          <Github className="w-5 h-5" />
          <span className="font-medium tracking-wide">Meu GitHub</span>
        </a>

        <a
          href="https://www.linkedin.com/in/ramon-romano-210996275"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl hover:bg-white hover:text-black hover:-translate-y-1 transition-all duration-300 shadow-lg"
        >
          <Linkedin className="w-5 h-5" />
          <span className="font-medium tracking-wide">Meu LinkedIn</span>
        </a>
      </div>
    </section>
  );
}
