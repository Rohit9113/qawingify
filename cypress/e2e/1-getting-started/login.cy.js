describe('Login Page', () => {
  beforeEach(() => {
    cy.visit('https://sakshingp.github.io/assignment/login.html');
  });

  it('should be able to log in with valid credentials', () => {
    cy.get('input[name="username"]').type('validUsername');
    cy.get('input[name="password"]').type('validPassword');
    cy.get('button[type="submit"]').click();

    // Assert that the user is logged in and redirected to the Home Page
    cy.url().should('include', '/home');
  });

  it('should display an error message with invalid credentials', () => {
    cy.get('input[name="username"]').type('invalidUsername');
    cy.get('input[name="password"]').type('invalidPassword');
    cy.get('button[type="submit"]').click();

    // Assert that an error message is displayed
    cy.get('.error-message').should('be.visible');
  });
});
