/// <reference types="cypress"/>
 

describe('Test Contact us via Automation Test Store', () => {
    it('Successful', () => {
        cy.visit('https://automationteststore.com/')
        // cy.get('ul.info_links_footer').contains('a','Contact Us').click()
        cy.get('a[href="https://automationteststore.com/index.php?rt=content/contact"]').click()
        cy.get('#ContactUsFrm_first_name').type('Mayuresh Rawal')
        cy.get('#ContactUsFrm_email').type('mayuresh@gmail.com')
        cy.get('#ContactUsFrm_enquiry').type('How to order Products?')
        cy.get('#ContactUsFrm  div.form-group button[type="submit"]').click()
    });
}); 