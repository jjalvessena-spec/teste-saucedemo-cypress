# Automação de Testes E2E – SauceDemo com Cypress

Teste técnico de automação E2E da loja virtual [SauceDemo](https://www.saucedemo.com), desenvolvido com **Cypress + JavaScript**.

## Cenário automatizado

**Funcionalidade:** Carrinho de compras

| Etapa | Ação / Validação |
|---|---|
| Dado | o usuário faz login com `standard_user` |
| Quando | adiciona dois produtos distintos ao carrinho (Sauce Labs Backpack e Sauce Labs Bike Light) |
| Então | o badge do carrinho exibe **2** |
| E | o carrinho lista exatamente os dois produtos adicionados |

## Tecnologias

- Node.js 18+
- Cypress 13
- JavaScript

## Estrutura do projeto

```
cypress/
├── e2e/
│   └── carrinho.cy.js      # cenário de teste
├── fixtures/
│   ├── usuario.json        # credenciais de teste
│   └── produtos.json       # massa de produtos
└── support/
    ├── commands.js         # comando customizado cy.login()
    └── e2e.js
cypress.config.js           # baseUrl e configurações
```

**Boas práticas aplicadas:**
- Seletores estáveis com `data-test`
- Massa de dados separada em fixtures
- Comando customizado reutilizável para login
- `baseUrl` centralizada no `cypress.config.js`

## Como executar

```bash
git clone https://github.com/jjalvessena-spec/teste-saucedemo-cypress.git
cd teste-saucedemo-cypress
npm install

# modo headless (terminal)
npm test

# modo interativo (interface do Cypress)
npm run cy:open
```

Resultado esperado: `1 passing`.

## Autor

**Jefferson Sena** – QA
