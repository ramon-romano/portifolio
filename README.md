# Portifolio Monorepo

Portifolio full-stack de **Ramon Romano**, com frontend em **Next.js** e backend em **Spring Boot**.

Este repositório centraliza dois projetos:
- `frontend-portfolio` (site/landing do portifolio)
- `portifolio-api/portifolio-api` (API REST com dados mockados)

## Visao Geral

O frontend consome dados da API para renderizar:
- Projetos
- Experiencias
- Habilidades/Skills

Se a API nao estiver rodando, o frontend possui fallback local com dados mockados para manter o site funcional.

## Arquitetura

- Frontend: Next.js 16 + React 19 + TypeScript + Tailwind CSS 4
- Backend: Spring Boot 4 (Web MVC) + Java 17+
- Comunicacao: HTTP REST (`/api/...`)

## Estrutura de Pastas

```txt
C:\portifolio
|- frontend-portfolio
|  |- public
|  |- src
|  |  |- app
|  |  |- components
|  |  |- lib
|  |  `- types
|  `- package.json
`- portifolio-api
   `- portifolio-api
      |- src/main/java/com/ramon_romano/portifolio_api
      |  |- controller
      |  |- model
      |  `- service
      `- pom.xml
```

## Pre-requisitos

### Frontend
- Node.js 20+
- npm

### Backend
- JDK 17+ (recomendado 17 ou 21)
- `JAVA_HOME` configurado

## Como Rodar o Projeto

## 1) Backend (Spring Boot)

Abra um terminal:

```powershell
cd C:\portifolio\portifolio-api\portifolio-api
.\mvnw.cmd spring-boot:run
```

API local esperada:
- `http://localhost:8080`

## 2) Frontend (Next.js)

Abra outro terminal:

```powershell
cd C:\portifolio\frontend-portfolio
npm install
npm run dev
```

Frontend local:
- `http://localhost:3000`

## Variavel de Ambiente (Frontend)

Crie um arquivo `.env.local` em `frontend-portfolio`:

```env
NEXT_PUBLIC_API_URL=http://localhost:8080
```

Se nao definir, o frontend ja usa `http://localhost:8080` por padrao.

## Endpoints da API

Base URL: `http://localhost:8080/api`

- `GET /projetos`
- `GET /experiencias`
- `GET /skills`

Controller:
- `portifolio-api/portifolio-api/src/main/java/com/ramon_romano/portifolio_api/controller/PortfolioController.java`

## Scripts Uteis

### Frontend

```powershell
npm run dev
npm run lint
npm run build
npm run start
```

### Backend

```powershell
.\mvnw.cmd spring-boot:run
.\mvnw.cmd test
```

## Docker

O projeto esta preparado para subir frontend + API com Docker Compose.

Arquivos criados:
- `docker-compose.yml` (raiz do projeto)
- `frontend-portfolio/Dockerfile`
- `portifolio-api/portifolio-api/Dockerfile`

### Subir com Docker

Na raiz do monorepo (`C:\\portifolio`):

```powershell
docker compose up -d --build
```

### Derrubar containers

```powershell
docker compose down
```

### Ver logs

```powershell
docker compose logs -f
```

### Acesso

- Frontend: `http://localhost:3000`
- API: `http://localhost:8080/api/projetos`

## Troubleshooting

### Erro: `JAVA_HOME environment variable is not defined correctly`

1. Verifique se o JDK esta instalado.
2. Configure no terminal atual:

```powershell
$env:JAVA_HOME="C:\Program Files\Java\jdk-17"
$env:Path="$env:JAVA_HOME\bin;$env:Path"
java -version
```

3. Rode novamente:

```powershell
.\mvnw.cmd spring-boot:run
```

### Frontend sem dados da API

- Confirme que o backend esta em `localhost:8080`.
- Teste no navegador: `http://localhost:8080/api/projetos`.
- Verifique o `.env.local` (`NEXT_PUBLIC_API_URL`).

## Estado Atual

- UI em tema preto/branco com animacoes
- Intro animada na entrada
- Secoes: Hero, Sobre, Experiencia, Projetos, Habilidades, Contato
- Modal de projeto com video e link para GitHub
- Header com logo e navegacao suave entre secoes

## Proximos Passos Sugeridos

- Trocar dados mockados por banco de dados (MySQL/PostgreSQL)
- Adicionar painel admin para editar conteudo
- Publicar frontend (Vercel) e backend (Render/Railway/Fly.io)
- Adicionar testes de API e testes de interface

## Autor

Desenvolvido por **Ramon Romano**.
