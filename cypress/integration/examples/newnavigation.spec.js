describe('Can navigate around pages', () => {
  it('can visit and load all page content', () => {
    cy.visit('http://localhost:3000');
    cy.get('[data-cy="header-blog-link"]').click();
  });
});
