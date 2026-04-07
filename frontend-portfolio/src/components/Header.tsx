"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { href: "#sobre", label: t.nav.about },
    { href: "#experiencia", label: t.nav.experience },
    { href: "#projetos", label: t.nav.projects },
    { href: "#habilidades", label: t.nav.skills },
    { href: "#contato", label: t.nav.contact },
  ];

  return (
    <header className="fixed top-0 w-full h-20 z-50 bg-zinc-950 border-b border-white/15 transition-all duration-300">
      <div className="max-w-6xl mx-auto h-full px-6 flex justify-between items-center">
        <a href="#hero" className="text-white uppercase transition-all duration-300 hover:opacity-80 hover:scale-105">
          <Image src="/img/logo.png" alt="Logo Ramon Romano" width={64} height={64} className="rounded-sm" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10 text-white/90">
          <div className="flex gap-8 border-r border-white/10 pr-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="inline-block text-sm font-light tracking-widest hover:text-white transition-all duration-300 uppercase"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Language Switcher */}
          <div className="flex gap-3 text-xs font-bold tracking-widest transition-all">
            <button
              onClick={() => setLanguage("pt")}
              className={`hover:text-white transition-colors cursor-pointer ${language === "pt" ? "text-white border-b border-white" : "text-white/40"}`}
            >
              PT
            </button>
            <span className="text-white/20">/</span>
            <button
              onClick={() => setLanguage("en")}
              className={`hover:text-white transition-colors cursor-pointer ${language === "en" ? "text-white border-b border-white" : "text-white/40"}`}
            >
              EN
            </button>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-6 md:hidden">
          <div className="flex gap-3 text-xs font-bold tracking-widest">
            <button
              onClick={() => setLanguage("pt")}
              className={`transition-colors ${language === "pt" ? "text-white" : "text-white/40"}`}
            >
              PT
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`transition-colors ${language === "en" ? "text-white" : "text-white/40"}`}
            >
              EN
            </button>
          </div>

          <button
            className="text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 top-20 bg-zinc-950 z-40 transition-all duration-500 md:hidden ${
          isOpen ? "opacity-100 pointer-events-auto translate-x-0" : "opacity-0 pointer-events-none translate-x-full"
        }`}
      >
        <nav className="flex flex-col items-center pt-20 h-full gap-8 text-white uppercase">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-light tracking-[0.2em] hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

