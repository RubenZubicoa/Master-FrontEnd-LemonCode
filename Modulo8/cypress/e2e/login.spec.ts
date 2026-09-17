describe('Login', () => {
  it('visit the login page', () => {
    cy.visit('/login');
    cy.url().should('include', '/login');
  });

  it('visit the login page and focus on the user input', () => {
    cy.visit('/login');
    cy.get('input[name="user"]').focus();
    cy.get('input[name="user"]').should('have.focus');
  });

  it('visit the login page and focus on the password input', () => {
    cy.visit('/login');
    cy.get('input[name="password"]').focus();
    cy.get('input[name="password"]').should('have.focus');
  });

  it('visit the login page and focus on the user input and password input and show the error message when are empty when click on the login button', () => {
    cy.visit('/login');
    cy.get('input[name="user"]').focus();
    cy.get('input[name="user"]').should('have.focus');
    cy.get('input[name="password"]').focus();
    cy.get('input[name="password"]').should('have.focus');
    cy.get('button[type="submit"]').click();
    cy.get('input[name="user"]').should('have.attr', 'aria-invalid', 'true');
    cy.get('input[name="password"]').should('have.attr', 'aria-invalid', 'true');
  });

  it('visit the login page and focus on the user input and show the error message when type invalid credentials when click on the login button', () => {
    const user = 'admin';
    const password = 'invalid';

    cy.visit('/login');
    cy.get('input[name="user"]').focus();
    cy.get('input[name="user"]').should('have.focus');
    cy.get('input[name="user"]').type(user);
    cy.get('input[name="password"]').type(password);
    cy.get('button[type="submit"]').click();
    cy.get('.MuiSnackbarContent-message').should(
      'have.text',
      'Usuario y/o password no válidos'
    );
  });

  it('visit the login page and focus on the user input and login successfully when type valid credentials', () => {
    const user = 'admin';
    const password = 'test';

    cy.visit('/login');
    cy.get('input[name="user"]').focus();
    cy.get('input[name="user"]').should('have.focus');
    cy.get('input[name="user"]').type(user);
    cy.get('input[name="password"]').type(password);
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/');
  });
  
});