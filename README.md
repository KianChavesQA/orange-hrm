# Projeto de Testes Lumestack - Orange HRM

Este projeto é um estudo realizado pela equipe Lumestack, focado em automação de testes na aplicação Orange HRM utilizando Cypress e Git.

## Estrutura do Projeto

A estrutura do projeto foi organizada para facilitar a manutenção, escalabilidade e colaboração entre os membros da equipe. Abaixo estão os principais diretórios e arquivos:

- `.github/`: Contém configurações de workflows do GitHub Actions para integração contínua, como automação de testes e validação de pull requests.
- `cypress/`: Scripts de testes automatizados.
  - `fixtures/`: Arquivos de dados simulados (mock data) utilizados nos testes, como usuários, respostas de API, etc.
  - `e2e/`: Testes end-to-end escritos em Cypress.
  - `support/`: Utilitários, comandos customizados e configuração global dos testes.
  - `pageObjects/`: Implementação do padrão Page Objects Model, encapsulando elementos e ações das páginas testadas.
- `docs/`: Documentação dos testes e do projeto.
- `reports/`: Relatórios de execução dos testes, gerados automaticamente após as execuções.
- `package.json`: Gerenciamento de dependências e scripts do projeto.
- `cypress.json` ou `cypress.config.js`: Configurações do Cypress, como baseUrl, timeouts e paths.

Além das tecnologias principais, este projeto utiliza o padrão **Page Objects Model (POM)** para organizar e estruturar os testes automatizados. O POM facilita a manutenção e reutilização dos scripts, separando a lógica de interação com elementos da interface das validações dos testes.

- **Cypress**: Framework de automação de testes end-to-end. (https://www.cypress.io/)
- **Git**: Controle de versão.
- **Page Objects Model**: Estrutura para encapsular elementos e ações das páginas testadas.

## Como Executar os Testes

1. Instale as dependências:
   ```bash
   npm install cypress --save-dev
   ```
2. Execute os testes:
   ```bash
   npx cypress open
   ```
   ou
   ```bash
   npx cypress run
   ```

## Contato

Kian Chaves Oliveira - Email: kianchaves@live.com
