import PaginaPage from "../../pages/PaginaPage"

describe('locators', function(){
    before(function(){
        PaginaPage.go();
    })

    beforeEach(function(){
        cy.reload();
    })
    
    it('using jquery selectors', function(){
        cy.get('table#tabelaUsuarios tbody > tr:eq(0) td:nth-child(3) > input').click()
        // * filho direto >
        // * :eq(0) pega o primeiro (pode alterar o num para pegar outro elemento)
        // * :nth-child(3) pega o terceiro filho (pode alterar o num para pegar outro elemento)
        cy.get('[onclick*="Francisco"]')
        cy.get('#tabelaUsuarios tr:contains("Doutorado"):eq(0) td:eq(6) input')
        // * :constains procura o elemento que contenha
    })

    it('using xpath', function(){
        cy.xpath('//input[contains(@onclick, "Francisco")]')
        cy.xpath('//table[@id="tabelaUsuarios"]//td[contains(.,"Francisco")]/..//input')
        cy.xpath('//td[contains(.,"Usuario A")]/following-sibling::td[contains(., "Mestrado")]/..//input[@type="text"]').type('Funciona')
    })
})