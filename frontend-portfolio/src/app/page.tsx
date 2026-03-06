"use client";

import { useEffect, useMemo, useState } from "react";
import Header from "@/src/components/Header";
import Hero from "@/src/components/Hero";
import HabilidadesSkills from "@/src/components/HabilidadesSkills";
import ScrollReveal from "@/src/components/ScrollReveal";
import Sobre from "@/src/components/Sobre";
import Experiencia from "@/src/components/Experiencia";
import Projetos from "@/src/components/Projetos";
import Contato from "../components/Contato";
import WelcomeIntro from "@/src/components/WelcomeIntro";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const stars = useMemo(
    () =>
      Array.from({ length: 90 }, (_, i) => ({
        id: i,
        left: `${(i * 29) % 100}%`,
        top: `${(i * 17) % 100}%`,
        delay: `${(i * 63) % 2600}ms`,
        duration: `${2000 + ((i * 41) % 2200)}ms`,
        size: `${1 + ((i * 11) % 3)}px`,
      })),
    []
  );

  useEffect(() => {
    document.body.style.overflow = showIntro ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showIntro]);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black text-white">
      {showIntro && <WelcomeIntro onFinish={() => setShowIntro(false)} />}

      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-44 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-[-8rem] right-[-6rem] h-96 w-96 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute left-[-8rem] top-1/3 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
        {stars.map((star) => (
          <span
            key={star.id}
            className="star-point absolute rounded-full bg-white"
            style={{
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
              animationDelay: star.delay,
              animationDuration: star.duration,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <Header />

        <main>
          <Hero />
          <ScrollReveal direction="right">
            <Sobre />
          </ScrollReveal>
          <ScrollReveal direction="left" delayMs={80}>
            <Experiencia />
          </ScrollReveal>
          <ScrollReveal direction="right" delayMs={120}>
            <Projetos />
          </ScrollReveal>
          <ScrollReveal direction="left" delayMs={160}>
            <HabilidadesSkills />
          </ScrollReveal>
          <ScrollReveal direction="right" delayMs={200}>
            <Contato />
          </ScrollReveal>
        </main>

        <footer className="border-t border-white/15 py-6 text-center text-sm tracking-wide text-zinc-300">
          Desenvolvido por Ramon Romano
        </footer>
      </div>

      <style jsx>{`
        .star-point {
          opacity: 0.2;
          animation: starTwinkle ease-in-out infinite alternate;
        }

        @keyframes starTwinkle {
          0% {
            opacity: 0.15;
            transform: translateY(0) scale(1);
          }
          100% {
            opacity: 1;
            transform: translateY(-5px) scale(1.25);
          }
        }
      `}</style>
    </div>
  );
}
