import { sizes } from '../support/e2e';

describe('Trend list tests', () => {
  sizes.forEach((size) => {
    it(`should display trends for viewport ${size}`, () => {
      cy.viewport(size[0], size[1]);
      cy.visit('/');
      cy.get('article').should('have.length', 6);
    });

    it(`should filter trends for viewport ${size}`, () => {
      cy.viewport(size[0], size[1]);
      cy.visit('/');
      cy.get('.menu__option').eq(0).click(); // El Pais
      cy.get('article').should('have.length', 3);
      cy.get('.menu__option').eq(1).click(); // El Mundo
      cy.get('article').should('have.length', 3);
      cy.get('.app-logo').click();
      cy.get('article').should('have.length', 6);
    });
  });
});
