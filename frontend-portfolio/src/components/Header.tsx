import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 w-full h-20 z-50 bg-black/70 backdrop-blur-md border-b border-white/15 transition-all duration-300">
      <div className="max-w-6xl mx-auto h-full px-6 flex justify-between items-center">
        <a href="#hero" className="text-white uppercase transition-all duration-300 hover:opacity-80 hover:scale-105">
          <Image src="/img/logo.png" alt="Logo Ramon Romano" width={64} height={64} className="rounded-sm" />
        </a>

        <nav className="flex gap-12 text-white/90">
          <a href="#sobre" className="inline-block text-lg font-light tracking-wide hover:text-white hover:scale-110 transition-all duration-300">
            SOBRE
          </a>
          <a href="#experiencia" className="inline-block text-lg font-light tracking-wide hover:text-white hover:scale-110 transition-all duration-300">
            EXPERIENCIA
          </a>
          <a href="#projetos" className="inline-block text-lg font-light tracking-wide hover:text-white hover:scale-110 transition-all duration-300">
            PROJETOS
          </a>
          <a href="#habilidades" className="inline-block text-lg font-light tracking-wide hover:text-white hover:scale-110 transition-all duration-300">
            HABILIDADES
          </a>
          <a href="#contato" className="inline-block text-lg font-light tracking-wide hover:text-white hover:scale-110 transition-all duration-300">
            CONTATO
          </a>
        </nav>
      </div>
    </header>
  );
}
