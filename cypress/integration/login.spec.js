/// <reference types="cypress" />

describe('Login Page', () => {
  describe('On application launch', () => {
    before(() => {
      cy.home();
    });

    it('should redirect the user to the login page', () => {
      cy.contains('Login');
    });
  });

  describe('On successful login', () => {
    before(() => {
        cy.home();
    });

    it('should direct the user to the Dasboard page', () => {
      cy.login('admin@admin.com', 'admin');
      cy.contains('The Dashboard');
    });
  })

  describe('On unsuccessful login', () => {
    before(() => {
        cy.home();
    });

    it('should display a failure notification', () => {
      cy.login('admin@admin.com', 'notAdmin');
      cy.contains('Failed to login. Please try again.');
    });
  });
});
