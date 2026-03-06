"use client";

import { useEffect, useState } from "react";
import { fetchPortfolioData } from "@/src/lib/portfolioApi";
import { type ExperienciaItem } from "@/src/types/portfolio";

const fallbackExperiencias: ExperienciaItem[] = [
  {
    empresa: "Elis",
    cargo: "Estagiario de TI",
    periodo: "jun 2024 - jun 2025",
    jornada:
      "Suporte tecnico a usuarios e maquinas, resolucao de problemas de hardware e software e manutencao preventiva/corretiva da infraestrutura.",
    tecnologias: ["PostgreSQL", "Linux", "Windows", "Redes"],
  },
  {
    empresa: "GPA Tech",
    cargo: "Frellancer Desenvolvedor Full-Stack",
    periodo: "ago 2025 - set 2025",
    jornada:
      "Freelancer fazendo manutencao full-stack em sistemas de clientes, atuando em frontend e backend com foco em entregas rapidas.",
    tecnologias: ["Node.js", "Next.js"],
  },
  {
    empresa: "Grupo JML",
    cargo: "Desenvolvedor Full-Stack Junior",
    periodo: "set 2025 - Atual",
    jornada:
      "Responsavel por manutencao e evolucao de sistemas de clientes, alem do desenvolvimento de novas solucoes para a empresa.",
    tecnologias: ["Spring Boot", "Laravel", "Next.js", "MySQL"],
  },
];

export default function Experiencia() {
  const [experiencias, setExperiencias] = useState<ExperienciaItem[]>(fallbackExperiencias);

  useEffect(() => {
    fetchPortfolioData<ExperienciaItem[]>("/api/experiencias", fallbackExperiencias).then(setExperiencias);
  }, []);

  return (
    <section
      id="experiencia"
      className="scroll-mt-20 min-h-[calc(100vh-5rem)] max-w-6xl mx-auto px-6 py-12 flex flex-col justify-center"
    >
      <h2 className="text-3xl font-light tracking-wider text-white mb-10 uppercase border-b border-white/25 pb-2 inline-block">
        Experiencia
      </h2>

      <div className="space-y-6">
        {experiencias.map((item) => (
          <article
            key={`${item.empresa}-${item.periodo}`}
            className="rounded-2xl border border-white/20 bg-zinc-950/60 p-6 backdrop-blur-sm"
          >
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-2xl font-light text-white uppercase tracking-wide">{item.empresa}</h3>
                <p className="text-zinc-300">{item.cargo}</p>
              </div>
              <span className="text-sm uppercase tracking-[0.22em] text-zinc-400">{item.periodo}</span>
            </div>

            <p className="mt-4 text-zinc-200 leading-relaxed">{item.jornada}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {item.tecnologias.map((tech) => (
                <span
                  key={`${item.empresa}-${tech}`}
                  className="rounded-md border border-white/20 px-3 py-1 text-xs uppercase tracking-wider text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
