class PaginaPage {
    go(){
        cy.visit('https://wcaquino.me/cypress/componentes.html');
    }

    assertTitle(expectedTitle, expectedMessege ){
        cy.title()
            .should('be.equal', expectedTitle)
            .and('contain', expectedMessege)
        
        // TODO imprimir título no console
        cy.title().then(function(title){
            console.log(title)
        })
    }

    clickSimpleButton(){
        cy.get('#buttonSimple')
            .click()
            .should('have.value', 'Obrigado!')
            .debug();

    }

    assertPageText(expectedMessege){
        cy.get('.facilAchar')
            .should('have.text', expectedMessege)
    }

    clickLink(expectedMessege){
        cy.contains('a', 'Voltar')
            .click()
        cy.get('#resultado').should('have.text', expectedMessege);
    }

    fillForm(){
        cy.get('#formNome')
            .type('input text')
            .should('have.value', 'input text')

        cy.get('#elementosForm\\:sugestoes')
            .type('textarea')
            .should('have.value', 'textarea')

        cy.get('#elementosForm\\:sugestoes')
            .clear()
            .type('textarea2')
            .should('have.value', 'textarea2')

         cy.get('[data-cy="dataSobrenome"]')
            .type('sobrenome')
            .should('have.value', 'sobrenome')

        cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input')
            .type('12345{backspace}{backspace}', {delay: 500})
            .should('have.value', '123')
    }

    radioButton(){
        cy.get('[name="formSexo"]')
            .should('have.length', 2)

        cy.get('#formSexoFem')
            .click()
            .should('be.checked')

        cy.get('#formSexoMasc')
            .should('not.to.be.checked')
    }

    checkBox(){
        cy.get('[name="formComidaFavorita"]')
            .click({multiple: true});
        cy.get('#formComidaPizza')
            .click()
            .should('not.to.be.checked');

        cy.get('#formComidaCarne')
            .should('be.checked')

        cy.get('#formComidaFrango')
            .should('be.checked')

        cy.get('#formComidaVegetariana')
            .should('be.checked')
    }

    combo(){
        cy.get('[data-test="dataEscolaridade"]')
            .select('2graucomp')
            .should('have.value', '2graucomp')
            // * pega pelo value do elemento

        // TODO verificar opções
    }

    multipleCombo(){
        cy.get('[data-testid="dataEsportes"]')
            .select(['natacao', 'Corrida'])
        // * através do value
        // TODO fazer o assert para verificar os selecionados
    }

    waitElementAvalible(){
        cy.get('#novoCampo')
            .should('not.exist')

        cy.get('#buttonDelay')
            .click()

        cy.get('#novoCampo')
            .should('not.exist')
        
        cy.get('#novoCampo')
            .should('exist').type('Funciona')
    }

    listSearch(){
        cy.get('#buttonList').click()

        cy.get('#lista li')
            .find('span')
            .should('contain', 'Item 1')

        cy.get('#lista li span')
            .should('contain', 'Item 2')
    }

    timeout(){
        cy.get('#buttonList').click()

        // cy.get('#lista li')
        //     .find('span')
        //     .should('have.length', 1)
        // cy.get('#lista li span')
        //     // * por padrão o cypress segue um timeout de 4s
        //     .should('have.length', 2)

        cy.get('#lista li span', {timeout: 6500})
            // * por padrão o cypress segue um timeout de 4s
            .should('contain', 'Item 2')
    }

    shouldThen(){
        cy.get('#buttonListDOM')
            .then(function($el){
                expect($el).to.have.length(1)
            })
            .and('have.id', 'buttonListDOM')

        // * o should ignora o RETURN de uma função
    }

    its(){
        
    }

}

export default new PaginaPage