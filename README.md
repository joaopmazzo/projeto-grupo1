<h1 align="center">🔐 API de Autenticação JWT</h1>

<p align="center">
  <img alt="node" src="https://img.shields.io/badge/node-22-brightgreen">
  <img alt="Package Manager" src="https://img.shields.io/badge/pnpm-10-orange">
  <img alt="Nest.js" src="https://img.shields.io/badge/nest.js-11-blue">
  <img alt="Top language" src="https://img.shields.io/github/languages/top/joaopmazzo/projeto-grupo1?color=56BEB8">
  <img alt="Languages count" src="https://img.shields.io/github/languages/count/joaopmazzo/projeto-grupo1?color=56BEB8">
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/joaopmazzo/projeto-grupo1?color=56BEB8">
</p>

<p align="center">
  <a href="#-sobre-o-projeto">📌 Sobre o Projeto</a> &#xa0; | &#xa0;
  <a href="#-objetivos">🎯 Objetivos</a> &#xa0; | &#xa0;
  <a href="#-estrutura-do-projeto">📂 Estrutura do Projeto</a> &#xa0; | &#xa0;
  <a href="#%EF%B8%8F-tecnologias-utilizadas">🛠️ Tecnologias Utilizadas</a> &#xa0; | &#xa0;
  <a href="#-como-executar-o-projeto">🚀 Como Executar o Projeto</a> &#xa0; | &#xa0;
  <a href="#-autores">👨‍💻 Autores</a>
</p>

<br>

## 📌 Sobre o Projeto

Este projeto foi desenvolvido como parte do Bootcamp 2025 para demonstrar a implementação de autenticação usando JSON Web Tokens (JWT) em uma API REST.
O objetivo é criar uma API segura que permite autenticação de usuários e proteção de rotas usando JWT, e demonstrar maneiras erroneas de como proteger uma API.

Use este `README` como referência rápida para entender a arquitetura, rodar o projeto localmente e contribuir.

## 🎯 Objetivos

- Implementar um sistema de autenticação robusto usando JWT
- Criar endpoints protegidos com guards de autenticação
- Demonstrar boas e más práticas de segurança em APIs REST

## 📂 Estrutura do Projeto

```
projeto-grupo1/
├── src/
│   ├── auth/
│   │   ├── controllers/     # Controladores de autenticação
│   │   ├── services/        # Serviços de autenticação
│   │   ├── guards/          # Guard JWT e outros guards
│   │   └── dto/             # DTOs de autenticação
│   ├── users/
│   │   ├── controllers/     # Controladores de usuários
│   │   ├── services/        # Serviços de usuários
│   │   └── entities/        # Entidades de usuários
│   ├── tasks/
│   │   ├── controllers/     # Controladores de tarefas
│   │   ├── services/        # Serviços de tarefas
│   │   └── entities/        # Entidades de tarefas
│   └── common/
│       ├── constants/       # Constantes compartilhadas
│       └── config/          # Configurações gerais
├── prisma/
│   ├── migrations/          # Migrações do banco de dados
│   └── schema.prisma        # Schema do Prisma
│
└── package.json             # Dependências e scripts
```

## 🛠️ Tecnologias Utilizadas

- NestJS
- TypeScript
- Prisma
- JWT (JSON Web Tokens)
- SQLite
- PNPM

## 🚀 Como Executar o Projeto

#### 1. Antes de executar é necessário verificar se você possui as seguintes dependencias:

- [Node.js 22](https://nodejs.org/pt)
- [pnpm](https://pnpm.io/pt/)

#### 2. Clone o repositório:

```bash
git clone git@github.com:joaopmazzo/projeto-grupo1.git
```

#### 3. Instale as dependências:

```bash
pnpm install
```

#### 4. Execute as migrações do banco de dados:

```bash
npx prisma generate
```

```bash
npx prisma migrate dev
```

#### 5. Inicie o servidor:

```bash
pnpm start:dev
```

## 👨‍💻 Autores

Grupo 1:

- João Paulo Mazzo
- Stephane Flaviana Marques
- Eduardo Valencio Santos
- Giovanna Takamori
- Vitor Augusto Pereira Fernandes
