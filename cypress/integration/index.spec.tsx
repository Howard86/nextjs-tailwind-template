describe('HomePage', () => {
  it('should navigate to the about page', () => {
    cy.visit('http://localhost:3000/');

    cy.get('a[href*="new-page"').click();

    cy.url().should('include', '/new-page');

    cy.get('a').contains('Home');
  });
});
