package com.ramon_romano.portifolio_api.service;

import com.ramon_romano.portifolio_api.model.ExperienciaDto;
import com.ramon_romano.portifolio_api.model.ProjetoDto;
import com.ramon_romano.portifolio_api.model.SkillDto;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PortfolioMockService {

    public List<ProjetoDto> getProjetos() {
        return List.of(
                new ProjetoDto(
                        "pix-analyser",
                        "Pix Analyser",
                        "IA para identificar risco em transferencias Pix com foco em prevencao de fraude.",
                        "Projeto Academico",
                        List.of("Java", "Spring Boot", "React", "MySQL"),
                        "O Pix Analyser foi desenvolvido em Spring Boot no backend com foco em processamento de regras de negocio para analise de risco em transacoes financeiras.\n\nNo frontend, usamos React para reproduzir uma jornada de transacao inspirada no ambiente bancario, conectando cada etapa com o resultado da analise.",
                        "https://www.youtube.com/embed/dQw4w9WgXcQ",
                        "https://github.com/ramon-romano/PixAnalyser"
                ),
                new ProjetoDto(
                        "omega",
                        "Omega",
                        "Plataforma para visualizacao de dados, metricas e acompanhamento operacional.",
                        "Cliente JML",
                        List.of("Laravel", "Next.js", "MySQL"),
                        "Omega e uma plataforma voltada para acompanhamento operacional com paineis de indicadores, leitura de metricas e apoio a tomada de decisao.\n\nNo frontend em Next.js, o foco foi entregar navegacao rapida e interface limpa para consulta de dados em tempo real.",
                        "https://www.youtube.com/embed/dQw4w9WgXcQ",
                        "https://github.com/ramon-romano/omega-jml"
                ),
                new ProjetoDto(
                        "jml-flow",
                        "JML Flow",
                        "Fluxo de diagnostico com formularios e consolidacao de dados para tomada de decisao.",
                        "Cliente JML",
                        List.of("Laravel", "Next.js", "MySQL"),
                        "JML Flow foi projetado para conduzir diagnosticos estruturados com formularios inteligentes, controle de respostas e consolidacao de resultados.\n\nCom Laravel no backend, implementamos validacoes para evitar duplicidade e garantir integridade das respostas.",
                        "https://www.youtube.com/embed/dQw4w9WgXcQ",
                        "https://github.com/ramon-romano/sistema-diagnostico-jml"
                )
        );
    }

    public List<ExperienciaDto> getExperiencias() {
        return List.of(
                new ExperienciaDto(
                        "Elis",
                        "Estagiario de TI",
                        "jun 2024 - jun 2025",
                        "Suporte tecnico a usuarios e maquinas, resolucao de problemas de hardware e software e manutencao preventiva/corretiva da infraestrutura.",
                        List.of("PostgreSQL", "Linux", "Windows", "Redes")
                ),
                new ExperienciaDto(
                        "GPA Tech",
                        "Desenvolvedor Full-Stack",
                        "ago 2025 - set 2025",
                        "Freelancer fazendo manutencao full-stack em sistemas de clientes, atuando em frontend e backend com foco em entregas rapidas.",
                        List.of("Node.js", "Next.js")
                ),
                new ExperienciaDto(
                        "Grupo JML",
                        "Desenvolvedor Full-Stack",
                        "set 2025 - Atual",
                        "Responsavel por manutencao e evolucao de sistemas de clientes, alem do desenvolvimento de novas solucoes para a empresa.",
                        List.of("Spring Boot", "Laravel", "Next.js", "MySQL")
                )
        );
    }

    public List<SkillDto> getSkills() {
        return List.of(
                new SkillDto("Laravel", "Linguagem principal no backend, com foco em APIs RESTful, autenticacao e integracao com banco relacional."),
                new SkillDto("Spring Boot", "Experiencia com APIs escalaveis, arquitetura MVC e projetos pessoais orientados a boas praticas."),
                new SkillDto("Next.js", "Tecnologia principal no frontend para interfaces modernas, performaticas e com boa experiencia de usuario."),
                new SkillDto("MySQL", "Banco relacional mais usado em projetos pessoais e profissionais, incluindo modelagem e consultas avancadas."),
                new SkillDto("Python", "Uso em automacao, analise de dados e IA com bibliotecas como Pandas, NumPy e TensorFlow."),
                new SkillDto("C++", "Contato no inicio da jornada, com base para logica e desenvolvimento de jogos.")
        );
    }
}
