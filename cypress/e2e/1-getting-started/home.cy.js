describe('Home Page', () => {
  beforeEach(() => {
    // Log in before each test
    cy.visit('https://sakshingp.github.io/assignment/login.html');
    cy.get('input[name="username"]').type('validUsername');
    cy.get('input[name="password"]').type('validPassword');
    cy.get('button[type="submit"]').click();
  });

  it('should sort the transaction table when clicking on the AMOUNT header', () => {
    // Click on the AMOUNT header
    cy.get('.transaction-table thead th').contains('AMOUNT').click();

    // Get the transaction amounts and assert that they are sorted in ascending order
    cy.get('.transaction-table tbody td[data-label="Amount"]')
      .invoke('text')
      .then((amounts) => {
        const sortedAmounts = [...amounts].sort();
        expect(amounts).to.deep.equal(sortedAmounts);
      });
  });
});
