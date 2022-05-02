import PaginaPage from "../../pages/PaginaPage"

describe('Comands', function(){
    before(function(){
        PaginaPage.go();
    })

    beforeEach(function(){
        cy.reload();
    })

    const food = ['Carne', 'Frango', 'Pizza', 'Vegetariano']

    it('cadastro com comida variada', function(){

            cy.wrap(food).each(function($el){
                it(`variação ${food}`, function(){
                    cy.get('#formNome').type(this.usuario.nome)
                    cy.get('#formSobrenome').type(this.usuario.sobrenome)
                    cy.get(`[name="formSexo"][value=${this.usuario.sexo}]`).click()
                    cy.xpath(`//label[contains(.,${$el})]/preceding-sibling::input`).click()
                    cy.get('#formEscolaridade').select(this.usuario.escolaridade)
                    cy.get('#formEsportes').select(this.usuario.esportes)
                    cy.get('#formCadastrar').click()

                })
                
            })
        
    })
})