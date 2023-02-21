export class DashboardPage{
    link_sauceLabsBackpack = 'Sauce Labs Backpack'

    sauceLabsBackpack(){
        cy.contains(this.link_sauceLabsBackpack).click()
        cy.contains('Sauce Labs Backpack').should('be.visible') 
    }

    //Tambahan dari uswatun khasanah

    checkoutgagal(){ 
        cy.get('.shopping_cart_link').click() 
        cy.get('#checkout').click() 
        cy.get('#continue').click()
    }

    checkoutberhasil(){ 
        cy.get('.shopping_cart_link').click() 
        cy.get('#checkout').click() 
        cy.get('#first-name').type('Uswatun') 
        cy.get('#last-name').type('Khasanah')
        cy.get('#postal-code').type('7983989')
        cy.get('#continue').click() 
        cy.get('#finish').click()
    }
}