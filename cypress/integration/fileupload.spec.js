describe('file upload test', () => {

    it('file upload demo', () => {
        cy.visit('https://filebin.net')
        cy.get('#fileField').attachFile('example.json')
    })
})