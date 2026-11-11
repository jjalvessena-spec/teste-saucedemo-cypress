describe('Carrinho de compras - SauceDemo', () => {
  beforeEach(function () {
    cy.fixture('usuario').as('usuario');
    cy.fixture('produtos').as('produtos');
  });

  it('deve adicionar dois produtos distintos ao carrinho e validar badge e itens', function () {
    const { username, password } = this.usuario;
    const produtos = this.produtos;

    // Dado que o usuário está logado
    cy.login(username, password);

    // Quando adiciona dois produtos distintos ao carrinho
    produtos.forEach((produto) => {
      cy.get(`[data-test="add-to-cart-${produto.id}"]`).click();
      cy.get(`[data-test="remove-${produto.id}"]`).should('be.visible');
    });

    // Então o badge do carrinho deve exibir "2"
    cy.get('.shopping_cart_badge').should('have.text', String(produtos.length));

    // E o carrinho deve listar exatamente os produtos adicionados
    cy.get('.shopping_cart_link').click();
    cy.url().should('include', '/cart.html');
    cy.get('.cart_item').should('have.length', produtos.length);

    produtos.forEach((produto) => {
      cy.contains('.inventory_item_name', produto.nome).should('be.visible');
    });
  });
});
