"use client";

import React, { useEffect, useState } from "react";
import { FaLaravel, FaPython } from "react-icons/fa";
import { SiCplusplus, SiMysql, SiNextdotjs, SiSpringboot } from "react-icons/si";
import { fetchPortfolioData } from "@/src/lib/portfolioApi";
import { type SkillItem } from "@/src/types/portfolio";

const fallbackSkills: SkillItem[] = [
  {
    nome: "Laravel",
    experiencia:
      "Linguagem principal no backend, com foco em APIs RESTful, autenticacao e integracao com banco relacional.",
  },
  {
    nome: "Spring Boot",
    experiencia:
      "Experiencia com APIs escalaveis, arquitetura MVC e projetos pessoais orientados a boas praticas.",
  },
  {
    nome: "Next.js",
    experiencia:
      "Tecnologia principal no frontend para interfaces modernas, performaticas e com boa experiencia de usuario.",
  },
  {
    nome: "MySQL",
    experiencia:
      "Banco relacional mais usado em projetos pessoais e profissionais, incluindo modelagem e consultas avancadas.",
  },
  {
    nome: "Python",
    experiencia:
      "Uso em automacao, analise de dados e IA com bibliotecas como Pandas, NumPy e TensorFlow.",
  },
  {
    nome: "C++",
    experiencia:
      "Contato no inicio da jornada, com base para logica e desenvolvimento de jogos.",
  },
];

const iconMap: Record<string, React.JSX.Element> = {
  Laravel: <FaLaravel className="text-2xl" />,
  "Spring Boot": <SiSpringboot className="text-2xl" />,
  "Next.js": <SiNextdotjs className="text-2xl" />,
  MySQL: <SiMysql className="text-2xl" />,
  Python: <FaPython className="text-2xl" />,
  "C++": <SiCplusplus className="text-2xl" />,
};

export default function HabilidadesSkills() {
  const [habilidades, setHabilidades] = useState<SkillItem[]>(fallbackSkills);

  useEffect(() => {
    fetchPortfolioData<SkillItem[]>("/api/skills", fallbackSkills).then(setHabilidades);
  }, []);

  return (
    <section id="habilidades" className="scroll-mt-20 min-h-[calc(100vh-5rem)] max-w-6xl mx-auto px-6 py-12 flex flex-col justify-center">
      <h2 className="text-3xl font-light tracking-wider text-white mb-12 uppercase border-b border-white/25 pb-2 inline-block">
        Habilidades e Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {habilidades.map((habilidade) => (
          <article
            key={habilidade.nome}
            className="rounded-2xl border border-white/20 bg-zinc-950/60 p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/40"
          >
            <div className="flex items-center gap-3 text-white">
              {iconMap[habilidade.nome] ?? <SiNextdotjs className="text-2xl" />}
              <h3 className="text-xl font-light uppercase tracking-wide">{habilidade.nome}</h3>
            </div>
            <p className="mt-4 text-zinc-300 leading-relaxed">{habilidade.experiencia}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
