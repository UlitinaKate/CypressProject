it('learning assertions', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('get').click()
    cy.get('#query-btn').should('contain', 'Button').and('have.class', 'query-btn')
        .and('be.visible').and('be.enabled')
    cy.get('#query-btn').invoke('attr','id').should('equal','query-btn')

    expect(true).to.be.true

    assert.equal(4,4,'Not equal')
    assert.strictEqual(4,4,'Not strictly equal')
})