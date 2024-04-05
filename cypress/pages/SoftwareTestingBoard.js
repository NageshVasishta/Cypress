export class SoftwareTestingBoard {

    getMainMenuItem() {
        return cy.get('.ui-menu-icon~span')
    }
    getItems() {
        return cy.get('.items a')
    }

    getSize() {
        return cy.get('.swatch-option.text')
    }
    getColor() {
        return cy.get('.swatch-option.color')
    }
    getQuantity() {
        return cy.get('#qty')
    }

    navigate_to_product(mainMenu,subMenu) {
        this.getMainMenuItem().contains(mainMenu).click()
        this.getItems().contains(subMenu).click()

    }

    addToCard() {
        cy.get('.product-item-link').each((el) => {

            if (el.text().includes('Beaumont Summit Kit')
            ) {
                cy.wrap(el).click()
            }
        })

        //Select first size
            this.getSize().eq(2).click()

        //Select last color
        this.getColor().last().click()

        //Select Quanitity
        this.getQuantity().clear().type(3)
        let price
        cy.get('.price-wrapper').children('span').then((el) => {
            price = el.eq(0).text().replace('$', '')
            cy.log(price)
        })
        cy.then(() => {
            cy.log(price)
        })

        cy.wait(5000, { log: false })
        cy.get('#product-addtocart-button').click()
        cy.wait(5000, { log: false })

        cy.get('span.text').contains('My Cart').click({ force: true })
        cy.get('.item-qty.cart-item-qty').should('have.value', '3')
        cy.get('.counter-number').should('have.text', '3')
        let TPrice
        cy.get('.amount.price-container').children('span').children('span.price').then((el) => {
            TPrice = el.eq(0).text().replace('$', '')
            cy.log(TPrice)

            expect(Number(price) * 3).to.equals(Number(TPrice))
        })

        cy.get("button[title='Proceed to Checkout']").click({force: true})
        // cy.get("button[title='Add to Cart']").eq(index).children('span').click({ force: true })

        // cy.get('.product-item-link').contains('Montana Wind Jacket').parentsUntil('div')
        // .children('div').contains('Add to Cart').click()

        //button[title='Add to Cart']
    }
}