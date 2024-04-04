export class SoftwareTestingCheckout {
    getCustomerEmail() {
        return cy.get('input#customer-email')
        
    }
        getFirstName() {
            return cy.get("input[name='firstname']")
        }
    getLastName(){
        return cy.get("input[name='lastname']")
    }


    checkout(email,firstName, lastName, street, city, region,postcode,telephone){

        cy.wait(5000,{log : false})
        this.getCustomerEmail().should('be.visible')
        this.getCustomerEmail().eq(0).type(email,{force : true})
        this.getFirstName().type(firstName)
        this.getLastName().type(lastName)
        cy.get('ul.opc-progress-bar li').eq(0).
        should('have.class','opc-progress-bar-item _active').
        children('span').should('have.text','Shipping')
        
        cy.get('span').contains('Street Address').parent().siblings('div').children('div').children('div').children('input').eq(0).type(street)
        cy.get('input[name="city"]').type(city)
        cy.get('select[name="region_id"]').select(region)
        cy.get('input[name="postcode"]').type(postcode)
        cy.get('input[name="telephone"]').type(telephone)

        cy.get('table.table-checkout-shipping-method tr td').
        contains('Flat Rate').
        parent('tr').children('td').children('input').check()
        
        cy.get('span').contains('Next').click()

        cy.get('ul.opc-progress-bar li').eq(0).
        should('have.class','opc-progress-bar-item _complete').
        children('span').should('have.text','Shipping')

        cy.get('ul.opc-progress-bar li').eq(1).
        should('have.class','opc-progress-bar-item _active').
        children('span').should('have.text','Review & Payments')
    
        cy.get('span').contains('Place Order').click()

        cy.get('h1').children('span').should('have.text','Thank you for your purchase!')

        cy.get('div.checkout-success').children('p').children('span').should('not.be.empty')
        cy.get('div.checkout-success').children('p').children('span').then((el)=>{
            cy.log(el.text())
        })
    }
}