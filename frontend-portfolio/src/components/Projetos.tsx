"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Github, ArrowUpRight } from "lucide-react";
import { FaReact, FaLaravel, FaJava } from "react-icons/fa";
import { SiSpringboot, SiNextdotjs, SiMysql } from "react-icons/si";
import { fetchPortfolioData } from "@/src/lib/portfolioApi";
import { type Projeto } from "@/src/types/portfolio";

const fallbackProjetos: Projeto[] = [
  {
    id: "pix-analyser",
    titulo: "Pix Analyser",
    resumo: "IA para identificar risco em transferencias Pix com foco em prevencao de fraude.",
    destaque: "Projeto Academico",
    stack: ["Java", "Spring Boot", "React", "MySQL"],
    descricaoCompleta:
      "O Pix Analyser foi desenvolvido em Spring Boot no backend com foco em processamento de regras de negocio para analise de risco em transacoes financeiras.\n\nNo frontend, usamos React para reproduzir uma jornada de transacao inspirada no ambiente bancario, conectando cada etapa com o resultado da analise.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    githubUrl: "https://github.com/ramon-romano/PixAnalyser",
  },
  {
    id: "omega",
    titulo: "Omega",
    resumo: "Plataforma para visualizacao de dados, metricas e acompanhamento operacional.",
    destaque: "Cliente JML",
    stack: ["Laravel", "Next.js", "MySQL"],
    descricaoCompleta:
      "Omega e uma plataforma voltada para acompanhamento operacional com paineis de indicadores, leitura de metricas e apoio a tomada de decisao.\n\nNo frontend em Next.js, o foco foi entregar navegacao rapida e interface limpa para consulta de dados em tempo real.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    githubUrl: "https://github.com/ramon-romano/omega-jml",
  },
  {
    id: "jml-flow",
    titulo: "JML Flow",
    resumo: "Fluxo de diagnostico com formularios e consolidacao de dados para tomada de decisao.",
    destaque: "Cliente JML",
    stack: ["Laravel", "Next.js", "MySQL"],
    descricaoCompleta:
      "JML Flow foi projetado para conduzir diagnosticos estruturados com formularios inteligentes, controle de respostas e consolidacao de resultados.\n\nCom Laravel no backend, implementamos validacoes para evitar duplicidade e garantir integridade das respostas.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    githubUrl: "https://github.com/ramon-romano/sistema-diagnostico-jml",
  },
];

const iconMap: Record<string, JSX.Element> = {
  Java: <FaJava title="Java" />,
  "Spring Boot": <SiSpringboot title="Spring Boot" />,
  React: <FaReact title="React" />,
  Laravel: <FaLaravel title="Laravel" />,
  "Next.js": <SiNextdotjs title="Next.js" />,
  MySQL: <SiMysql title="MySQL" />,
};

export default function Projetos() {
  const [projetos, setProjetos] = useState<Projeto[]>(fallbackProjetos);
  const [projetoAberto, setProjetoAberto] = useState<Projeto | null>(null);
  const portalTarget = typeof document !== "undefined" ? document.body : null;

  useEffect(() => {
    fetchPortfolioData<Projeto[]>("/api/projetos", fallbackProjetos).then(setProjetos);
  }, []);

  useEffect(() => {
    if (!projetoAberto) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow || "auto";
    };
  }, [projetoAberto]);

  return (
    <section id="projetos" className="scroll-mt-20 min-h-[calc(100vh-5rem)] max-w-6xl mx-auto px-6 py-12 flex flex-col justify-center">
      <h2 className="text-3xl font-light tracking-wider text-white mb-12 uppercase border-b border-white/25 pb-2 inline-block">
        Meus Projetos
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {projetos.map((projeto) => (
          <article
            key={projeto.id}
            onClick={() => setProjetoAberto(projeto)}
            className="group cursor-pointer rounded-2xl border border-white/20 bg-zinc-950/60 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/50 hover:shadow-[0_18px_40px_rgba(255,255,255,0.06)]"
          >
            <p className="inline-flex rounded-full border border-white/25 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-zinc-300">
              {projeto.destaque}
            </p>

            <h3 className="mt-4 text-2xl font-light uppercase tracking-wide text-white">{projeto.titulo}</h3>

            <p className="mt-3 min-h-[70px] text-zinc-300 leading-relaxed">{projeto.resumo}</p>

            <div className="mt-5 flex items-center gap-4 text-2xl text-zinc-300">
              {projeto.stack.map((item) => (
                <span key={`${projeto.id}-${item}`} className="transition-colors group-hover:text-white">
                  {iconMap[item]}
                </span>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-sm uppercase tracking-wider text-zinc-300">
              <span>Ver detalhes</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </div>
          </article>
        ))}
      </div>

      {portalTarget &&
        projetoAberto &&
        createPortal(
          <div
            className="fixed inset-0 z-[120] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
            onMouseDown={() => setProjetoAberto(null)}
          >
            <div
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-white/25 bg-zinc-950 p-7 shadow-2xl"
              onMouseDown={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setProjetoAberto(null)}
                className="absolute right-5 top-4 cursor-pointer text-xl font-bold text-white/90 transition-colors hover:text-white"
              >
                X
              </button>

              <p className="inline-flex rounded-full border border-white/25 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-zinc-300">
                {projetoAberto.destaque}
              </p>

              <h3 className="mt-4 text-3xl font-light uppercase tracking-wide text-white">{projetoAberto.titulo}</h3>

              <iframe
                className="mt-5 w-full aspect-video rounded-lg border border-white/20 shadow-sm"
                src={projetoAberto.videoUrl}
                title={`Video do projeto ${projetoAberto.titulo}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />

              <p className="mt-5 whitespace-pre-line text-zinc-200 leading-relaxed">{projetoAberto.descricaoCompleta}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {projetoAberto.stack.map((item) => (
                  <span key={`tag-${projetoAberto.id}-${item}`} className="rounded-md border border-white/20 px-3 py-1 text-xs text-zinc-300">
                    {item}
                  </span>
                ))}
              </div>

              <a
                href={projetoAberto.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex cursor-pointer items-center gap-2 rounded-lg border border-white/25 px-4 py-2 text-sm uppercase tracking-wide text-white transition-colors hover:border-white hover:bg-white hover:text-black"
              >
                <Github className="h-4 w-4" />
                Ver repositorio
              </a>
            </div>
          </div>,
          portalTarget
        )}
    </section>
  );
}
