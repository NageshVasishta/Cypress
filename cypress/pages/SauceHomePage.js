export class SauceHomePage {
    getTitle() {
        return cy.get('.title')
    }
    verifyPagetitle () {
        cy.title().should('eq','Swag Labs')
        this.getTitle().should('have.text','Products')
    }
}