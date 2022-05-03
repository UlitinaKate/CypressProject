/// <reference types = "cypress" />

it ("google test", () => {
    cy.visit('https://google.com')
    cy.get('#L2AGLb > .QS5gu').click()
    cy.get('.gLFyf').type('Ulitin Keks{enter}')
    cy.contains('Videos').click()
})

it.only('login test', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/login')
    cy.get('#txtUsername').type('Admin')
    cy.get('#txtPassword').type('admin123')
    cy.get('#btnLogin').click()
    cy.get('#menu_admin_viewAdminModule > b').click()
    cy.get('#menu_admin_UserManagement').click({force: true})
    cy.get('#btnAdd').click()
    cy.get('#btnSave').click()
})