describe('Login to gall & gall', () => {
    before(() => {
        cy.visit('https://www.rituals.com/en-nl')
    })

    it('Click Inloggen', () => {
        cy.contains('Inloggen').click({force: true})
    })
})