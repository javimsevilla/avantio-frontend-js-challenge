describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/');
    cy.contains('Welcome');
    cy.contains('avantio-frontend-js-challenge app is running!');
  });
});
