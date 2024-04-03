/// <reference types='cypress'/>

import { SoftwareTestingBoard } from "../../pages/SoftwareTestingBoard"

const STB = new SoftwareTestingBoard()

describe('Software testing board - Order Jacket',()=>{
    before(()=>{
        cy.visit('https://magento.softwaretestingboard.com/')
    })

    it('Order Jacket',()=>{
        STB.navigateToJackets()
        STB.addToCard()
    })
})