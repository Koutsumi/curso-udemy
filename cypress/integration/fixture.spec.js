import PaginaPage from "../../pages/PaginaPage"

describe('Fixtures', function(){
    before(function(){
        PaginaPage.go();
    })

    beforeEach(function(){
        cy.reload();
    })

    it('get data Fixture', function(){
        cy.fixture('dataUser').as('usuario').then(function($el){
            cy.get('#formNome').type(this.usuario.nome)
            cy.get('#formSobrenome').type(this.usuario.sobrenome)
            cy.get(`[name="formSexo"][value=${this.usuario.sexo}]`).click()
            cy.get(`[name="formComidaFavorita"][value=${this.usuario.comida}]`).click()
            cy.get('#formEscolaridade').select(this.usuario.escolaridade)
            cy.get('#formEsportes').select(this.usuario.esportes)
            cy.get('#formCadastrar').click()
        })
        
    })
})