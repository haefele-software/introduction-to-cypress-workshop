Cypress.Commands.add("home", () => {
  cy.visit('');
});

Cypress.Commands.add("login", (email, password) => {
  // No
  //cy.get('#login-email-input').type(email);
  // cy.get('#login-password-input').type(password);
  // cy.get('#login-login-btn').click();

  // Yes
  cy.get('[data-cy=email-input]').type(email);
  cy.get('[data-cy=password-input]').type(password);
  cy.get('[data-cy=submit-button]').click();
});
