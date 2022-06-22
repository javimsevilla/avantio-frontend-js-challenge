import { sizes } from '../support/e2e';

describe('Tests for trend details', () => {
  sizes.forEach((size) => {
    it(`should navigate to trend detail for viewport ${size}`, () => {
      cy.viewport(size[0], size[1]);
      cy.visit('/');
      cy.get('article:first').click();
      cy.get('.trend__detail').should('be.visible');
      cy.get('.trend__action').should('have.length', 2);
    });
  });
});
