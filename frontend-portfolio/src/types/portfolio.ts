export type Projeto = {
  id: string;
  titulo: string;
  resumo: string;
  destaque: string;
  stack: string[];
  descricaoCompleta: string;
  videoUrl: string;
  githubUrl: string;
};

export type ExperienciaItem = {
  empresa: string;
  cargo: string;
  periodo: string;
  jornada: string;
  tecnologias: string[];
};

export type SkillItem = {
  nome: string;
  experiencia: string;
};
