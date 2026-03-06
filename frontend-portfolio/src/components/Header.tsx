import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 w-full h-20 z-50 bg-black/70 backdrop-blur-md border-b border-white/15 transition-all duration-300">
      <div className="max-w-6xl mx-auto h-full px-6 flex justify-between items-center">
        <Link href="#hero" className="text-3xl font-light tracking-widest text-white uppercase hover:opacity-70 transition-opacity">
          RAMON ROMANO
        </Link>

        <nav className="flex gap-12 text-white/90">
          <a href="#sobre" className="text-lg font-light tracking-wide hover:text-white transition-colors duration-300">
            SOBRE
          </a>
          <a href="#experiencia" className="text-lg font-light tracking-wide hover:text-white transition-colors duration-300">
            EXPERIÊNCIA
          </a>
          <a href="#projetos" className="text-lg font-light tracking-wide hover:text-white transition-colors duration-300">
            PROJETOS
          </a>
            <a href="#habilidades" className="text-lg font-light tracking-wide hover:text-white transition-colors duration-300">
            HABILIDADES
          </a>
          <a href="#contato" className="text-lg font-light tracking-wide hover:text-white transition-colors duration-300">
            CONTATO
          </a>
        </nav>
      </div>
    </header>
  );
}
