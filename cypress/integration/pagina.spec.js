/// <reference types="cypress" />

describe('Visit test page', function(){
    it('should visit the page and assert title', function(){
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.title().should('be.equal', 'Campo de Treinamento')
    })
})