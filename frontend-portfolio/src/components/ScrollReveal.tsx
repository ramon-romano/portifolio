"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  direction?: "left" | "right";
  distance?: number;
};

export default function ScrollReveal({
  children,
  className = "",
  delayMs = 0,
  direction = "right",
  distance = 80,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        setIsVisible(Boolean(entries[0]?.isIntersecting));
      },
      { threshold: 0.2 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  const hiddenTransform = direction === "left" ? `translateX(-${distance}px)` : `translateX(${distance}px)`;

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out will-change-transform ${className}`}
      style={{
        transitionDelay: `${delayMs}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateX(0)" : hiddenTransform,
      }}
    >
      {children}
    </div>
  );
}
