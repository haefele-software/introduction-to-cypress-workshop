/// <reference types="cypress" />

describe('Dashboard Page', () => {
  describe('On successful logout', () => {
    before(() => {
        cy.home();
    });

    it('should direct the user to the Dasboard page', () => {
      cy.login('admin@admin.com', 'admin');
      cy.contains('The Dashboard');      
    });

    it('should contain the logout button', () => {
      cy.contains('Logout');
    });

    it('should log the user out when the button is clicked', () => {
      cy.get('[data-cy=logout-button]').click();
      cy.contains('Login');
    })
  })
});
