"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaLaravel } from "react-icons/fa";
import { SiNextdotjs, SiSpringboot } from "react-icons/si";

import { useLanguage } from "@/src/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      index += 1;
      setTypedText(t.hero.role.slice(0, index));

      if (index >= t.hero.role.length) {
        clearInterval(timer);
      }
    }, 90);

    return () => clearInterval(timer);
  }, [t.hero.role]);

  return (
    <section
      id="hero"
      className="scroll-mt-20 min-h-[calc(100vh-5rem)] max-w-6xl mx-auto px-6 pt-28 sm:pt-20 pb-12 flex flex-col items-center justify-center text-center"
    >
      <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-8">
        <Image
          src="/img/logo.png"
          alt="Logo Ramon Romano"
          width={64}
          height={64}
          className="sm:w-[86px] sm:h-[86px] rounded-md [animation:spin_10s_linear_infinite]"
        />
        <h1 className="text-2xl sm:text-5xl md:text-7xl font-light tracking-[0.1em] sm:tracking-[0.2em] uppercase text-white">RAMON ROMANO</h1>
      </div>

      <div className="mt-8 w-full max-w-2xl border border-white/20 bg-black/50 rounded-xl px-5 py-4 text-left shadow-lg">
        <p className="font-mono text-base sm:text-xl md:text-2xl text-zinc-100">
          <span className="text-zinc-500">{">"}</span> {typedText}
          <span className="inline-block w-[8px] sm:w-[10px] h-[1.1em] ml-1 align-middle bg-white animate-pulse" />
        </p>
      </div>

      <div className="mt-10 flex flex-wrap justify-center items-center gap-8 sm:gap-14 text-white/90">
        <div className="flex flex-col items-center gap-2">
          <FaLaravel className="text-3xl sm:text-5xl" />
          <span className="text-[10px] sm:text-xs tracking-[0.2em] uppercase text-zinc-300">Laravel</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <SiSpringboot className="text-3xl sm:text-5xl" />
          <span className="text-[10px] sm:text-xs tracking-[0.2em] uppercase text-zinc-300">Spring Boot</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <SiNextdotjs className="text-3xl sm:text-5xl" />
          <span className="text-[10px] sm:text-xs tracking-[0.2em] uppercase text-zinc-300">Next.js</span>
        </div>
      </div>
    </section>
  );
}
