import {LoginPage} from "../pages/login_page";

beforeEach(() => {
    cy.log('I am running from the outside describe block')
})

describe('page object model', () => {

    const loginPage = new LoginPage()

    beforeEach(() => {
        loginPage.navigate('https://trytestingthis.netlify.app')
    })

    it('login with valid credentials', () => {
        loginPage.enterLogin('test')
        loginPage.enterPassword('test')
        loginPage.clickLogin()
        cy.contains('Login Successful')
        cy.contains('here').click()
    })

    it.skip('login with invalid username', () => {
        loginPage.enterLogin('test123')
        loginPage.enterPassword('test')
        loginPage.clickLogin()
        cy.on('window:alert', (txt) => {
            expect(txt).to.be.equal('Wrong Credentials! Try again!')
        })
    })

    it('login with invalid password', () => {
        loginPage.enterLogin('test')
        loginPage.enterPassword('test123')
        loginPage.clickLogin()
        cy.on('window:alert', (txt) => {
            expect(txt).to.be.equal('Wrong Credentials! Try again!')
        })
    })
})