// Comando customizado de login, reutilizável em qualquer teste.
Cypress.Commands.add('login', (username, password) => {
  cy.visit('/');
  cy.get('[data-test="username"]').type(username);
  cy.get('[data-test="password"]').type(password, { log: false });
  cy.get('[data-test="login-button"]').click();
  cy.url().should('include', '/inventory.html');
});
