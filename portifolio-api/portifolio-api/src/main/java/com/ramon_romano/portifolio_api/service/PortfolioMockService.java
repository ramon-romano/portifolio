package com.ramon_romano.portifolio_api.service;

import com.ramon_romano.portifolio_api.model.ExperienciaDto;
import com.ramon_romano.portifolio_api.model.ProjetoDto;
import com.ramon_romano.portifolio_api.model.SkillDto;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PortfolioMockService {

    public List<ProjetoDto> getProjetos(String lang) {
        boolean isEn = "en".equalsIgnoreCase(lang);

        if (isEn) {
            return List.of(
                    new ProjetoDto(
                            "pix-analyser",
                            "Pix Analyser",
                            "AI to identify risk in Pix transfers with focus on fraud prevention.",
                            "Academic Project",
                            List.of("Java", "Spring Boot", "React", "MySQL"),
                            "Pix Analyser's backend was developed in Spring Boot, with its AI built in Python and individually trained to verify bank transactions, identifying patterns and reading transaction history, the frontend was inspired by the Bradesco bank app, being an almost perfect React replica. For more details, please check the video above or the github repository. This project was made by a group of 4 people, 2 for backend and 2 for frontend.",
                            "https://www.youtube.com/embed/JqL-D5D3pHw",
                            "https://github.com/ramon-romano/PixAnalyser"
                    ),
                    new ProjetoDto(
                            "omega",
                            "Omega",
                            "Platform for data visualization, metrics and operational monitoring.",
                            "JML Client",
                            List.of("Laravel", "Next.js", "MySQL"),
                            "Ômega is a system developed for operational monitoring, with the main goal of visualizing values, bringing goals and sales, also containing dimensions for each sector and each Brazilian region, plus historical values, with restricted access and TV modes for the headquarters.\n\nIn the Next.js frontend, the focus was to deliver fast navigation and a clean interface for real-time data consultation, while the backend was developed in Laravel using the MVC model, featuring a complete CRUD for users, courses and others. It was a very fun project to make, always seeking to improve the user experience.",
                            "https://www.youtube.com/embed/I64NZFvRcGs",
                            "https://github.com/ramon-romano/omega-jml"
                    ),
                    new ProjetoDto(
                            "jml-flow",
                            "JML Flow",
                            "Diagnostic flow with forms and data consolidation for decision making.",
                            "JML Client",
                            List.of("Laravel", "Next.js", "MySQL"),
                            "JML Flow was designed to conduct structured diagnostics with intelligent forms, response control and results consolidation, focused uniquely on evaluating perfectly based on a specific theme.\n\nWith Laravel in the backend, we implemented validations to avoid duplication and ensure response integrity, always passing through an evaluation methodology, after which each user's metric is calculated, containing graphs, responses from everyone, and export options for both the dashboard and individual responses in PDF.",
                            "https://www.youtube.com/embed/MLC2SqxEGys",
                            "https://github.com/ramon-romano/sistema-diagnostico-jml"
                    ),
                    new ProjetoDto(
                            "jml-insight",
                            "JML Insight",
                            "An AI that analyzes documents and generates compatibility levels.",
                            "JML Client",
                            List.of("Python", "Next.js"),
                            "The JML Insight AI is an Artificial Intelligence that analyzes documents included by the user, one being the company course, and the other being the organizational chart. The AI reads the documents and, based on keyword logic and training, it knows which sectors are most compatible with that course, being very useful for the company's commercial team.\n\nThe system was developed in Python as the backend language ensuring a better flow of information for the AI to consume and analyze, while the frontend used Next.js to deliver a clean and intuitive interface for the user.",
                            "https://www.youtube.com/embed/rtCnfFMhgfE",
                            "https://github.com/ramon-romano/jml-insight"
                    )
            );
        }

        return List.of(
                new ProjetoDto(
                        "pix-analyser",
                        "Pix Analyser",
                        "IA para identificar risco em transferencias Pix com foco em prevencao de fraude.",
                        "Projeto Academico",
                        List.of("Java", "Spring Boot", "React", "MySQL"),
                        "O Pix Analyser teve seu backend desenvolvido em Spring Boot, sendo feita sua IA em Python e treinada unitariamente para a verificação de transações bancárias, identificando padrões e lendo histório de transações de valores, o frontend foi inspirado no frontend do app do banco do Bradesco, sendo feita uma réplica em React quase perfeita, para mais detalhes, peço que acessem o video acima ou o github para detalhes do frontend. Esse projeto foi feito em um grupo de 4 pessoas, 2 para o backend e 2 para o frontend.",
                        "https://www.youtube.com/embed/JqL-D5D3pHw",
                        "https://github.com/ramon-romano/PixAnalyser"
                ),
                new ProjetoDto(
                        "omega",
                        "Omega",
                        "Plataforma para visualizacao de dados, metricas e acompanhamento operacional.",
                        "Cliente JML",
                        List.of("Laravel", "Next.js", "MySQL"),
                        "Ômega é um sistema desenvolvido para acompanhamento operacional, com o intuito principal em visualização de valores, trazendo além de metas e vendas, contendo também dimensão de cada setor e cad região brasileira, além de valores de históricos, com acessos restritos e modos para a TV da sede.\n\nNo frontend em Next.js, o foco foi entregar navegacao rapida e interface limpa para consulta de dados em tempo real, já no backend teve seu desenvolvimento em Laravel, sendo utilizado o modelo MVC, tendo um CRUD completo de usuários, cursos e demais, foi um projeto muito divertido de se fazer, buscando sempre melhorar a experiência do usuário.",
                        "https://www.youtube.com/embed/I64NZFvRcGs",
                        "https://github.com/ramon-romano/omega-jml"
                ),
                new ProjetoDto(
                        "jml-flow",
                        "JML Flow",
                        "Fluxo de diagnostico com formularios e consolidacao de dados para tomada de decisao.",
                        "Cliente JML",
                        List.of("Laravel", "Next.js", "MySQL"),
                        "JML Flow foi projetado para conduzir diagnosticos estruturados com formularios inteligentes, controle de respostas e consolidacao de resultados, focados unicamente em avaliar perfeitamente com base em um tema em especifico.\n\nCom Laravel no backend, implementamos validacoes para evitar duplicidade e garantir integridade das respostas, passando sempre por uma metodologia de avaliação, e após isso calculado a métrica de cada usuário que respondeu, contendo gráficos, as respostas de cada um, e tendo como exportar, tanto o dashboard quanto as repostas unitáriamente em PDF.",
                        "https://www.youtube.com/embed/MLC2SqxEGys",
                        "https://github.com/ramon-romano/sistema-diagnostico-jml"
                ),
                new ProjetoDto(
                        "jml-insight",
                        "JML Insight",
                        "Uma IA que faz analise de documentos gerando níveis de compatibilidade.",
                        "Cliente JML",
                        List.of("Python", "Next.js"),
                        "A IA do JML Insight é uma Inteligência Artificial que faz análise de documentos incluidos pelo próprio usuário, uma sendo o curso da empresa, e o outro sendo do organograma da entidade, a IA faz a leitura dos documentos e com base em uma lógica de palavras chaves e treinamento, ela sabe quais são os setores mais compativeis com aquele curso, sendo muito útil para a equipe comercial da empresa.\n\nO sistema foi desenvolvido em Python como linguagem de backend garantindo um melhor fluxo de informações para a IA consumir e analisar, já para o frontend foi utilizado o Next.js para entregar uma interface limpa e intuitiva para o usuário.",
                        "https://www.youtube.com/embed/rtCnfFMhgfE",
                        "https://github.com/ramon-romano/jml-insight"
                )
        );
    }

    public List<ExperienciaDto> getExperiencias(String lang) {
        boolean isEn = "en".equalsIgnoreCase(lang);

        if (isEn) {
            return List.of(
                    new ExperienciaDto(
                            "Elis",
                            "IT Intern",
                            "Jun 2024 - Jun 2025",
                            "Technical support for users and machines, hardware and software troubleshooting, and preventive/corrective maintenance of the IT infrastructure.",
                            List.of("PostgreSQL", "Linux", "Windows", "Networking")
                    ),
                    new ExperienciaDto(
                            "GPA Tech",
                            "Full-Stack Developer",
                            "Aug 2025 - Sep 2025",
                            "Freelancer providing full-stack maintenance for client systems, working in both frontend and backend with a focus on quick turnarounds.",
                            List.of("Node.js", "Next.js")
                    ),
                    new ExperienciaDto(
                            "Grupo JML",
                            "Full-Stack Developer",
                            "Sep 2025 - Present",
                            "Responsible for maintenance and evolution of client systems, besides the development of new solutions for the company.",
                            List.of("Spring Boot", "Laravel", "Next.js", "MySQL")
                    )
            );
        }

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

    public List<SkillDto> getSkills(String lang) {
        boolean isEn = "en".equalsIgnoreCase(lang);

        if (isEn) {
            return List.of(
                    new SkillDto("Laravel", "Main backend language, focusing on RESTful APIs, authentication and integration with relational databases."),
                    new SkillDto("Spring Boot", "Experience with scalable APIs, MVC architecture and personal projects oriented towards best practices."),
                    new SkillDto("Next.js", "Core frontend technology for modern, high-performance interfaces with great user experience."),
                    new SkillDto("MySQL", "Relational database used in personal and professional projects, including modeling and advanced queries."),
                    new SkillDto("Python", "Used in automation, data analysis and AI with libraries like Pandas, NumPy and TensorFlow."),
                    new SkillDto("C++", "Contacted at the start of my journey, building logic foundations and game development.")
            );
        }

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
