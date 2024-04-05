//Spec file for reading data for JS Fixture file

/// <reference types='cypress'/>

import { SoftwareTestingBoard } from "../../pages/SoftwareTestingBoard"

import { SoftwareTestingCheckout } from "../../pages/SoftwareTestingCheckout"

import { JS_SoftwareTestingBoard } from "../../fixtures/JS_SoftwareTestingBoard"

const STB = new SoftwareTestingBoard()
const STC = new SoftwareTestingCheckout()

describe('Software testing board - Order Jacket',()=>{
    before(()=>{        
        cy.visit('https://magento.softwaretestingboard.com/')
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
            })
        })

    it('Order Jacket',()=>{
        STB.navigate_to_product(JS_SoftwareTestingBoard.MainMenu,JS_SoftwareTestingBoard.SubMenu)
        STB.addToCard()

        STC.checkout(JS_SoftwareTestingBoard.email,JS_SoftwareTestingBoard.firstName, JS_SoftwareTestingBoard.lastName, JS_SoftwareTestingBoard.street, JS_SoftwareTestingBoard.city, JS_SoftwareTestingBoard.region,JS_SoftwareTestingBoard.postcode,JS_SoftwareTestingBoard.telephone)
    })
})