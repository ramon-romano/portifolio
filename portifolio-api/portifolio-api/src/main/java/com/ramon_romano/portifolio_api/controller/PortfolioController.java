package com.ramon_romano.portifolio_api.controller;

import com.ramon_romano.portifolio_api.model.ExperienciaDto;
import com.ramon_romano.portifolio_api.model.ProjetoDto;
import com.ramon_romano.portifolio_api.model.SkillDto;
import com.ramon_romano.portifolio_api.service.PortfolioMockService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class PortfolioController {

    private final PortfolioMockService portfolioMockService;

    public PortfolioController(PortfolioMockService portfolioMockService) {
        this.portfolioMockService = portfolioMockService;
    }

    @GetMapping("/projetos")
    public List<ProjetoDto> projetos() {
        return portfolioMockService.getProjetos();
    }

    @GetMapping("/experiencias")
    public List<ExperienciaDto> experiencias() {
        return portfolioMockService.getExperiencias();
    }

    @GetMapping("/skills")
    public List<SkillDto> skills() {
        return portfolioMockService.getSkills();
    }
}
