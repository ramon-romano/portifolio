package com.ramon_romano.portifolio_api.model;

import java.util.List;

public record ProjetoDto(
        String id,
        String titulo,
        String resumo,
        String destaque,
        List<String> stack,
        String descricaoCompleta,
        String videoUrl,
        String githubUrl
) {
}
