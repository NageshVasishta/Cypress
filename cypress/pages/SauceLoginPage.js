export class SauceLoginPage {

    getUserName() {
        return cy.get('#user-name')
    }
    getPassword() {
        return cy.get('#password')
    }
    getSubmit() {
        return cy.get('#login-button')
    }
    getErrorMessage() {
        return cy.get("h3[data-test='error']")
    }
    getDivError() {
        return cy.get('.error-message-container.error')
    }
    enter_login_details(user, password) {
        this.getUserName().type(user)
        this.getPassword().type(password)
        this.getSubmit().click()
    }
    
    verifyLockedUserErrorMessage() {
        this.getErrorMessage().should('have.text', "Epic sadface: Sorry, this user has been locked out.")
        this.getErrorMessage().should('contain', "Epic sadface: Sorry, this user has been locked out.")
        this.getDivError().should('have.css','background-color','rgb(226, 35, 26)')
        this.getDivError().should('have.css','position','relative')
        
    }
  

}