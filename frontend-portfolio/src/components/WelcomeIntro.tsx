"use client";

import { useEffect, useMemo, useState } from "react";

const DURATION_MS = 5000;
const TICK_MS = 50;
const FADE_OUT_MS = 650;

type WelcomeIntroProps = {
  onFinish: () => void;
};

export default function WelcomeIntro({ onFinish }: WelcomeIntroProps) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const start = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const nextProgress = Math.min((elapsed / DURATION_MS) * 100, 100);
      setProgress(nextProgress);

      if (elapsed >= DURATION_MS) {
        clearInterval(interval);
        setDone(true);
        setTimeout(onFinish, FADE_OUT_MS);
      }
    }, TICK_MS);

    return () => clearInterval(interval);
  }, [onFinish]);

  const welcomeLetters = useMemo(() => "BEM-VINDO".split(""), []);
  const stars = useMemo(
    () =>
      Array.from({ length: 44 }, (_, i) => ({
        id: i,
        left: `${(i * 37) % 100}%`,
        top: `${(i * 19) % 100}%`,
        delay: `${(i * 83) % 2200}ms`,
        duration: `${1800 + ((i * 47) % 1800)}ms`,
        size: `${1 + ((i * 13) % 3)}px`,
      })),
    []
  );

  return (
    <div
      className={`fixed inset-0 z-[100] overflow-hidden bg-black text-white transition-opacity duration-700 ${done ? "opacity-0" : "opacity-100"}`}
    >
      <div className="absolute -top-36 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-white/15 blur-3xl animate-pulse" />
      <div className="absolute bottom-[-8rem] right-[-4rem] h-80 w-80 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute left-[-4rem] top-1/3 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="absolute inset-0">
        {stars.map((star) => (
          <span
            key={star.id}
            className="star-dot absolute rounded-full bg-white"
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

      <div className="intro-stage relative flex h-full items-center justify-center px-6 text-center">
        <div>
          <p className="mb-8 text-xs uppercase tracking-[0.45em] text-white/70 sm:mb-10">
            Ramon Romano
          </p>

          <h1 className="welcome-word mb-8 text-3xl font-light uppercase tracking-[0.2em] sm:text-6xl">
            {welcomeLetters.map((letter, index) => (
              <span
                key={`${letter}-${index}`}
                className="inline-block welcome-letter"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                {letter === " " ? "\u00A0" : letter}
              </span>
            ))}
          </h1>

          <div className="mx-auto mt-10 h-[2px] w-56 overflow-hidden rounded-full bg-white/20 sm:w-72">
            <div
              className="h-full rounded-full bg-gradient-to-r from-white/90 via-white to-white/80 transition-all duration-150"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .intro-stage {
          perspective: 1200px;
        }

        .welcome-word {
          transform-style: preserve-3d;
        }

        .welcome-letter {
          opacity: 0;
          transform: translate3d(0, 14px, 0) scale(0.98);
          animation: welcomeHold 4.9s ease forwards;
        }

        @keyframes welcomeHold {
          0% {
            opacity: 0;
            transform: translate3d(0, 14px, 0) scale(0.98);
          }
          18% {
            opacity: 1;
            transform: translate3d(0, 0, 0) scale(1);
          }
          92% {
            opacity: 1;
            filter: blur(0);
            transform: translate3d(0, 0, 0) scale(1);
          }
          100% {
            opacity: 0;
            filter: blur(2px);
            transform: translate3d(0, -4px, 0) scale(0.98);
          }
        }

        .star-dot {
          opacity: 0.2;
          animation: twinkle ease-in-out infinite alternate;
        }

        @keyframes twinkle {
          0% {
            opacity: 0.15;
            transform: translateY(0) scale(1);
          }
          100% {
            opacity: 1;
            transform: translateY(-6px) scale(1.35);
          }
        }
      `}</style>
    </div>
  );
}
