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


    checkout(){
        cy.wait(3000)
        this.getCustomerEmail().eq(0).type('prabhakar@gmail.com',{force : true})
        this.getFirstName().type('Prabha')
        this.getLastName().type('Prabhakar')
        cy.get('ul.opc-progress-bar li').eq(0).
        should('have.class','opc-progress-bar-item _active').
        children('span').should('have.text','Shipping')
        
        cy.get('span').contains('Street Address').parent().siblings('div').children('div').children('div').children('input').eq(0).type("Street 1")
        cy.get('input[name="city"]').type('Texas')
        cy.get('select[name="region_id"]').select('Texas')
        cy.get('input[name="postcode"]').type('12314')
        cy.get('input[name="telephone"]').type('234563454')

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