/// <reference types='cypress'/>

import { S_Users } from "../../fixtures/S_Users"


describe('Login Scenarios', () => {
    beforeEach(()=>{
        cy.visit()
    })

    it('Verify Login for Standard User', () => {
  cy.log(S_Users.standard.username)
    })
})