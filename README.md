# technical-tests-cypress-api

Este projeto é um teste técnico utilizando o Cypress para realizar testes em uma API pública. O projeto cobre operações básicas de API, incluindo GET, PUT, POST e DELETE, e utiliza o plugin `cy.api` para facilitar as requisições.

## Tabela de Conteúdos

- [Requisitos](#requisitos)
- [Instalação](#instalação)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Execução dos Testes](#execução-dos-testes)
- [Operações de Teste](#operações-de-teste)
- [Contribuição](#contribuição)

## Requisitos

- Node.js (versão 12 ou superior)
- npm (geralmente incluído com o Node.js)

## Instalação

Siga os passos abaixo para instalar o projeto:

1. **Clone o repositório:**

   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd <NOME_DO_REPOSITORIO>

2. **Execute o comando de instalação das dependências:**

   ```bash
   npm install

3. **Inicie o cypress para executar os testes de forma manual:**

   ```bash
   npm run cy:open

4. **Caso queira rodar a suite em modo headless, execute:**

   ```bash
   npm run cy:run

