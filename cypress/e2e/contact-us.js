///<reference types="cypress" />

describe("Test Contact Us from via WebdriverUni",()=>{
    
    it("Should be able to submit a successful submission via contact us form",()=>{
            // cyp code
            cy.visit({
                url: "https://www.webdriveruniversity.com",
                method: "GET"
            })
                //   1  cy.get('#contact-us').click()
                //   1  cy.get('input[name="first_name"]').type('Mayuresh')

            // Force same-tab navigation
            cy.get('#contact-us').invoke('removeAttr', 'target').click();

            // Now the input exists
            cy.get('input[name="first_name"]', { timeout: 10000 }) //constantly checking for 10 secs if the form is slow to load 
            .should('be.visible') //Element must not be display: none, Not hidden, behind another element, Not detached from DOM, Has non-zero width & height
            .type('Mayuresh');

            cy.get('input[name="last_name"]',{timeout: 10000}).should('be.visible').type('Rawal')

            cy.get('input[name="email"]', {timeout: 10000}).should('be.visible').type('mayuresh.rawal@outlook.com')

            cy.get('textarea[name="message"]' , {timeout:10000}).should('be.visible').type('Nice one cypress.')

            cy.get('input[type="submit"].contact_button').click()
        
      })

    it("Should not be able to submit a successful submission via contact us form as all fields are required" ,()=>{
            // cyp code
             cy.visit({
                url: "https://www.webdriveruniversity.com",
                method: "GET"
            })
                //   1  cy.get('#contact-us').click()
                //   1  cy.get('input[name="first_name"]').type('Mayuresh')

            // Force same-tab navigation
            cy.get('#contact-us').invoke('removeAttr', 'target').click();

            // Now the input exists
            cy.get('input[name="first_name"]', { timeout: 10000 }) //constantly checking for 10 secs if the form is slow to load 
            .should('be.visible') //Element must not be display: none, Not hidden, behind another element, Not detached from DOM, Has non-zero width & height
            .type('Mayuresh');

            cy.get('input[name="last_name"]',{timeout: 10000}).should('be.visible').type('Rawal')

            // cy.get('input[name="email"]', {timeout: 10000}).should('be.visible').type('mayuresh.rawal@outlook.com') // removing the email to check if the forms submits without it 
            cy.get('textarea[name="message"]' , {timeout:10000}).should('be.visible').type('Nice one cypress.')

            cy.get('input[type="submit"].contact_button').click()
    })
})

