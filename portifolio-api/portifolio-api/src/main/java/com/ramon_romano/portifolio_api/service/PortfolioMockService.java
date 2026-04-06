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
                        "O Pix Analyser teve seu backend desenvolvido em Spring Boot, sendo feita sua IA em Python e treinada unitariamente para a verificação de transações bancárias, identificando padrões e lendo histório de transações de valores, o frontend foi inspirado no frontend do app do banco do Bradesco, sendo feito uma réplica em React quase perfeita, para mais detalhes, peço que acessem o video acima ou o github para detalhes do frontend. Esse projeto foi feito em um grupo de 4 pessoas, 2 para o backend e 2 para o frontend.",
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
