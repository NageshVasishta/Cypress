/// <reference types='cypress'/>

import { SoftwareTestingBoard } from "../../pages/SoftwareTestingBoard"

import { SoftwareTestingCheckout } from "../../pages/SoftwareTestingCheckout"

const STB = new SoftwareTestingBoard()
const STC = new SoftwareTestingCheckout()


describe('Software testing board - Order Jacket',()=>{
    before(()=>{
        cy.visit('https://magento.softwaretestingboard.com/')
    })

    it('Order Jacket',()=>{
        STB.navigateToJackets()
        STB.addToCard()

        STC.checkout()
    })
})