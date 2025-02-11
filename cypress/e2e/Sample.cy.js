// Login to a webpage,
//  click on the Add button ,
//   that should open a popup window ,
//    in that enter some urls,
//     choose some due and assignee from the dropdown 
//     and Upon choosing the assignee the 
//     verification window appears , verify the success message


///<reference types='cypress'/>

describe('Verify Success Message',()=>{


    it('Test 1',()=>{
        cy.visit('https://website.com')

        cy.get('.add').click()
        
        cy.get('popup').find('.url').type('Type somehting')
        cy.get('popup').find('dropdown').select('Value')
        cy.get('popup').find('today').click()
        cy.get('popup').find('submit').click()
        cy.get('successMessage').should('have.text',"Expected")
        
    })
})