export class LoginPage{

    loginPage_username = '#uname'
    loginPage_password = '#pwd'
    loginPage_loginButton = '[type="submit"]'

    navigate(url){
        cy.visit(url)
    }

    enterLogin(username){
        cy.get(this.loginPage_username).type(username)
    }

    enterPassword(password){
        cy.get(this.loginPage_password).type(password)
    }

    clickLogin(){
        cy.get(this.loginPage_loginButton).click()
    }
}