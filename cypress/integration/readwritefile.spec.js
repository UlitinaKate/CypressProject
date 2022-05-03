describe('read write file tests', () => {

    beforeEach(() => {
        cy.fixture('example.json').as('data')
    })

    it('read file using fixture', function () {
        cy.fixture('example.json').its('name').should('eq', 'cypress')

        cy.log(this.data.name)
        cy.log(this.data.email)
    })

    it('read file', () => {
        cy.readFile('./cypress/fixtures/example.json').its('name').should('eq', 'cypress')
    })

    it('write file', () => {
        cy.writeFile('sample.txt', 'hello cypress')
        cy.writeFile('sample.txt', '\nhello Kate', {flag: 'a+'})
        cy.readFile('sample.txt').should('contain', 'cypress')
    })
})