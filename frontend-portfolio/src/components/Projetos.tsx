"use client";

import React, { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import { Github, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { FaReact, FaLaravel, FaJava, FaPython } from "react-icons/fa";
import { SiSpringboot, SiNextdotjs, SiMysql } from "react-icons/si";
import { fetchPortfolioData } from "@/src/lib/portfolioApi";
import { type Projeto } from "@/src/types/portfolio";
import { useLanguage } from "@/src/context/LanguageContext";

const fallbackProjetos: Projeto[] = [
  {
    id: "pix-analyser",
    titulo: "Pix Analyser",
    resumo: "IA para identificar risco em transferencias Pix com foco em prevencao de fraude.",
    destaque: "Projeto Academico",
    stack: ["Java", "Spring Boot", "React", "MySQL"],
    descricaoCompleta:
      "O Pix Analyser teve seu backend desenvolvido em Spring Boot, sendo feita sua IA em Python e treinada unitariamente para a verificação de transações bancárias, identificando padrões e lendo histório de transações de valores, o frontend foi inspirado no frontend do app do banco do Bradesco, sendo feito uma réplica em React quase perfeita, para mais detalhes, peço que acessem o video acima ou o github para detalhes do frontend. Esse projeto foi feito em um grupo de 4 pessoas, 2 para o backend e 2 para o frontend.",
    videoUrl: "https://www.youtube.com/embed/JqL-D5D3pHw",
    githubUrl: "https://github.com/ramon-romano/PixAnalyser",
  },
  {
    id: "omega",
    titulo: "Omega",
    resumo: "Plataforma para visualizacao de dados, metricas e acompanhamento operacional.",
    destaque: "Cliente JML",
    stack: ["Laravel", "Next.js", "MySQL"],
    descricaoCompleta:
      "Ômega é um sistema desenvolvido para acompanhamento operacional, com o intuito principal em visualização de valores, trazendo além de metas e vendas, contendo também dimensão de cada setor e cad região brasileira, além de valores de históricos, com acessos restritos e modos para a TV da sede.\n\nNo frontend em Next.js, o foco foi entregar navegacao rapida e interface limpa para consulta de dados em tempo real, já no backend teve seu desenvolvimento em Laravel, sendo utilizado o modelo MVC, tendo um CRUD completo de usuários, cursos e demais, foi um projeto muito divertido de se fazer, buscando sempre melhorar a experiência do usuário.",
    videoUrl: "https://www.youtube.com/embed/I64NZFvRcGs",
    githubUrl: "https://github.com/ramon-romano/omega-jml",
  },
  {
    id: "jml-flow",
    titulo: "JML Flow",
    resumo: "Fluxo de diagnostico com formularios e consolidacao de dados para tomada de decisao.",
    destaque: "Cliente JML",
    stack: ["Laravel", "Next.js", "MySQL"],
    descricaoCompleta:
      "JML Flow foi projetado para conduzir diagnosticos estruturados com formularios inteligentes, controle de respostas e consolidacao de resultados, focados unicamente em avaliar perfeitamente com base em um tema em especifico.\n\nCom Laravel no backend, implementamos validacoes para evitar duplicidade e garantir integridade das respostas, passando sempre por uma metodologia de avaliação, e após isso calculado a métrica de cada usuário que respondeu, contendo gráficos, as respostas de cada um, e tendo como exportar, tanto o dashboard quanto as repostas unitáriamente em PDF.",
    videoUrl: "https://www.youtube.com/embed/MLC2SqxEGys",
    githubUrl: "https://github.com/ramon-romano/sistema-diagnostico-jml",
  },
  {
    id: "jml-insight",
    titulo: "JML Insight",
    resumo: "Uma IA que faz analise de documentos gerando níveis de compatibilidade.",
    destaque: "Cliente JML",
    stack: ["Python", "Next.js"],
    descricaoCompleta:
      "A IA do JML Insight é uma Inteligência Artificial que faz análise de documentos incluidos pelo próprio usuário, uma sendo o curso da empresa, e o outro sendo do organograma da entidade, a IA faz a leitura dos documentos e com base em uma lógica de palavras chaves e treinamento, ela sabe quais são os setores mais compativeis com aquele curso, sendo muito útil para a equipe comercial da empresa.\n\nO sistema foi desenvolvido em Python como linguagem de backend garantindo um melhor fluxo de informações para a IA consumir e analisar, já para o frontend foi utilizado o Next.js para entregar uma interface limpa e intuitiva para o usuário.",
    videoUrl: "https://www.youtube.com/embed/rtCnfFMhgfE",
    githubUrl: "https://github.com/ramon-romano/jml-insight",
  },
];



export default function Projetos() {
  const iconMap: Record<string, React.JSX.Element> = {
    Java: <FaJava title="Java" />,
    "Spring Boot": <SiSpringboot title="Spring Boot" />,
    React: <FaReact title="React" />,
    Laravel: <FaLaravel title="Laravel" />,
    "Next.js": <SiNextdotjs title="Next.js" />,
    MySQL: <SiMysql title="MySQL" />,
    Python: <FaPython title="Python" />,
  };

  const { language, t } = useLanguage();
  const [projetos, setProjetos] = useState<Projeto[]>(fallbackProjetos);
  const [projetoAberto, setProjetoAberto] = useState<Projeto | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = window.innerWidth > 768 ? 424 : 320;
      carouselRef.current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
    }
  };
  const portalTarget = typeof document !== "undefined" ? document.body : null;

  useEffect(() => {
    fetchPortfolioData<Projeto[]>("/api/projetos", fallbackProjetos, language).then(setProjetos);
  }, [language]);

  useEffect(() => {
    if (!projetoAberto) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow || "auto";
    };
  }, [projetoAberto]);

  return (
    <section id="projetos" className="scroll-mt-20 min-h-[calc(100vh-5rem)] max-w-6xl mx-auto px-6 py-12 flex flex-col justify-center overflow-x-hidden">
      <div className="mb-12 flex items-end justify-between gap-4">
        <h2 className="text-3xl font-light tracking-wider text-white uppercase border-b border-white/25 pb-2 inline-block">
          {t.projects.title}
        </h2>

        <div className="flex gap-5 mb-1 shrink-0 items-center">
          <button
            onClick={() => scroll("left")}
            className="text-4xl font-extralight text-white/30 hover:text-white transition-all duration-300 select-none pb-1"
            aria-label="Rolar para esquerda"
          >
            &lt;
          </button>
          <button
            onClick={() => scroll("right")}
            className="text-4xl font-extralight text-white/30 hover:text-white transition-all duration-300 select-none pb-1"
            aria-label="Rolar para direita"
          >
            &gt;
          </button>
        </div>
      </div>

      <div
        ref={carouselRef}
        className="flex overflow-x-auto gap-6 pb-12 pt-4 w-full snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {projetos.map((projeto) => (
          <article
            key={projeto.id}
            onClick={() => setProjetoAberto(projeto)}
            className="w-[85vw] sm:w-[400px] shrink-0 snap-center flex flex-col group cursor-pointer rounded-2xl border border-white/20 bg-zinc-950/60 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/50 hover:shadow-[0_18px_40px_rgba(255,255,255,0.06)]"
          >
            <p className="inline-flex rounded-full border border-white/25 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-zinc-300">
              {projeto.destaque}
            </p>

            <h3 className="mt-4 text-2xl font-light uppercase tracking-wide text-white">{projeto.titulo}</h3>

            <p className="mt-3 min-h-[70px] flex-grow text-zinc-300 leading-relaxed">{projeto.resumo}</p>

            <div className="mt-5 flex items-center gap-4 text-2xl text-zinc-300">
              {projeto.stack.map((item) => (
                <span key={`${projeto.id}-${item}`} className="transition-colors group-hover:text-white">
                  {iconMap[item] || <span className="text-xs">{item}</span>}
                </span>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-sm uppercase tracking-wider text-zinc-300">
              <span>{t.projects.details}</span>
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
                {t.projects.back}
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
                {t.projects.repository}
              </a>
            </div>
          </div>,
          portalTarget
        )}
    </section>
  );
}
