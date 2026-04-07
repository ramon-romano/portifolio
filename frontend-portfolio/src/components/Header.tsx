"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#sobre", label: "SOBRE" },
    { href: "#experiencia", label: "EXPERIENCIA" },
    { href: "#projetos", label: "PROJETOS" },
    { href: "#habilidades", label: "HABILIDADES" },
    { href: "#contato", label: "CONTATO" },
  ];

  return (
    <header className="fixed top-0 w-full h-20 z-50 bg-black/80 backdrop-blur-md border-b border-white/15 transition-all duration-300">
      <div className="max-w-6xl mx-auto h-full px-6 flex justify-between items-center">
        <a href="#hero" className="text-white uppercase transition-all duration-300 hover:opacity-80 hover:scale-105">
          <Image src="/img/logo.png" alt="Logo Ramon Romano" width={64} height={64} className="rounded-sm" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-12 text-white/90">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="inline-block text-lg font-light tracking-wide hover:text-white hover:scale-110 transition-all duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 top-20 bg-black/95 z-40 transition-all duration-500 md:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center pt-20 h-full gap-8 text-white">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-light tracking-[0.2em] hover:text-indigo-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

