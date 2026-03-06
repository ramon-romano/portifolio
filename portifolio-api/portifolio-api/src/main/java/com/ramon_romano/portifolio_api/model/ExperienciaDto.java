package com.ramon_romano.portifolio_api.model;

import java.util.List;

public record ExperienciaDto(
        String empresa,
        String cargo,
        String periodo,
        String jornada,
        List<String> tecnologias
) {
}
