describe('Can navigate around pages', () => {
  it('can visit and load all page content', () => {
    cy.visit('http://localhost:3000');

    cy.get('[data-cy="header-shop-link"]').click();
    cy.get('[data-cy="shop-page-product-2"]').click();

    cy.get('[data-cy="product-page-h1"]').should('be.visible');
    cy.get('[data-cy="product-page-button-+"]').click();
    cy.get('[data-cy="product-page-input-field-value-2"]').should(
      'have.value',
      '2',
    );
    cy.get('[data-cy="product-page-addToCart-button"]').click();
    cy.get('[data-cy="nav-menu-shoppingCart"]').click();

    cy.get('[data-cy="basket-page-h1"]').should('be.visible');
    cy.get('[data-cy="basket-page-increase-quantity-by-1"]').click();
    cy.get('[data-cy="basket-page-input-field-value-3"]').should(
      'have.value',
      '3',
    );
    cy.get('[data-cy="basket-page-button-delete"]').click();

    cy.get('[data-cy="nav-menu-toys"]').click();
    cy.get('[data-cy="toys-page-h1"]').should('be.visible');
    cy.get('[data-cy="toys-page-product-14"]').click();
    cy.get('[data-cy="product-page-h1"]').should('be.visible');
    cy.get('[data-cy="product-page-addToCart-button"]').click();
    cy.get('[data-cy="nav-menu-shoppingCart"]').click();
    cy.get('[data-cy="basket-page-h1"]').should('be.visible');
    cy.get('[data-cy="basket-page-button-checkout"]').click();

    cy.get('[data-cy="checkout-page-h1"]').should('be.visible');
    cy.get('[data-cy="checkout-page-product-14"]').should('be.visible');
    cy.get('[data-cy="checkout-page-h3"]').should('be.visible');
    cy.get('[data-cy="checkout-page-label"]').should('be.visible');
    cy.get('[data-cy="checkout-page-input"]').should('be.visible');
    cy.get('[data-cy="checkout-page-purchase-button"]').click();

    cy.get('[data-cy="thank-you-page-h1"]').should('be.visible');
  });
});
