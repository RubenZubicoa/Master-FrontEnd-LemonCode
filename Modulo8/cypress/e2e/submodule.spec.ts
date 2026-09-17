describe('Submodule', () => {
    describe('Projects', () => {
        before(() => {
            cy.visit('/login');
            cy.get('input[name="user"]').type('admin');
            cy.get('input[name="password"]').type('test');
            cy.get('button[type="submit"]').click();
            cy.visit('/submodule');
            cy.url().should('include', '/submodule');
        });

        it('visit the submodule page and clic on projects button, show the projects list', () => {
            cy.contains('a', 'Proyectos').click();
            cy.url().should('include', '/projects');
        });
    });

    describe('Employees', () => {
        before(() => {
            cy.visit('/login');
            cy.get('input[name="user"]').type('admin');
            cy.get('input[name="password"]').type('test');
            cy.get('button[type="submit"]').click();
            cy.visit('/submodule');
            cy.url().should('include', '/submodule');
        });
        it('visit the submodule page and clic on employees button, show the employees list', () => {
            cy.contains('a', 'Empleados').click();
            cy.url().should('include', '/employees');
        });
    });

    describe('menu', () => {
        before(() => {
            cy.visit('/login');
            cy.get('input[name="user"]').type('admin');
            cy.get('input[name="password"]').type('test');
            cy.get('button[type="submit"]').click();
            cy.visit('/submodule');
            cy.url().should('include', '/submodule');
        });
        it('visit the submodule page and clic on menu button, show the menu list', () => {
            cy.get('button[aria-label="menu"]').first().click();
            cy.get('.MuiDrawer-paper').should('be.visible');
            cy.get('.MuiDrawer-paper').within(() => {
              cy.contains('Calendario').should('be.visible');
              cy.contains('Proyectos').should('be.visible');
              cy.contains('Vacaciones').should('be.visible');
            });
          });
    });

    describe('user', () => {
        before(() => {
            cy.visit('/login');
            cy.get('input[name="user"]').type('admin');
            cy.get('input[name="password"]').type('test');
            cy.get('button[type="submit"]').click();
            cy.visit('/submodule');
            cy.url().should('include', '/submodule');
        });
        it('visit the submodule page and clic on user button, show the user menu', () => {
            cy.get('button[aria-label="menu"]').last().click();
            cy.get('.MuiMenu-paper').should('be.visible');
            cy.get('.MuiMenu-paper').within(() => {
              cy.contains('Mi Perfil').should('be.visible');
              cy.contains('Cerrar sesión').should('be.visible');
            });
          });
    });
});