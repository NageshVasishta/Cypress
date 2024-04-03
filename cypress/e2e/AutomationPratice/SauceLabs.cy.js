/// <reference types='cypress'/>

import { S_Users } from "../../fixtures/S_Users"
import { SauceHomePage } from "../../pages/SauceHomePage"
import { SauceLoginPage } from "../../pages/SauceLoginPage"

const SHP = new SauceHomePage()
const SLP = new SauceLoginPage()
let url = 'https://www.saucedemo.com/'

describe('Login Scenarios', () => {
  it('Verify Login for Standard User', () => {
    cy.visit(url)
    SLP.enter_login_details(S_Users.standard.username, S_Users.standard.password)
    cy.url().should('include', 'inventory.html')
    SHP.verifyPagetitle()
  })

  it.only('Verify Login for Locked User', () => {
    cy.visit(url)
    SLP.enter_login_details(S_Users.locked.username, S_Users.locked.password)
    SLP.verifyLockedUserErrorMessage()
  })

})