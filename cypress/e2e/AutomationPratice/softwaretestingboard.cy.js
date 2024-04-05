/// <reference types='cypress'/>

import { SoftwareTestingBoard } from "../../pages/SoftwareTestingBoard"

import { SoftwareTestingCheckout } from "../../pages/SoftwareTestingCheckout"

const STB = new SoftwareTestingBoard()
const STC = new SoftwareTestingCheckout()
let data;


describe('Software testing board - Order Jacket',()=>{
    before(()=>{        
        cy.visit('https://magento.softwaretestingboard.com/')
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
          })

          cy.fixture('SoftwareTestingBoard').then((Data)=>{
            data = Data
          })
    })

    it('Order Jacket',()=>{
        STB.navigate_to_product(data.MainMenu,data.SubMenu)
        STB.addToCard()

        STC.checkout(data.email,data.firstName, data.lastName, data.street, data.city, data.region,data.postcode,data.telephone)
    })
})