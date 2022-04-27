import PaginaPage from "../../pages/PaginaPage"

describe('work with alerts', function(){
    before(function(){
        PaginaPage.go();
    })

    beforeEach(function(){
        cy.reload();
    })

    it('alert',function(){
        cy.get('#alert')
            .click()

        cy.on('window:alert', function(msg){
            console.log(msg)
            expect(msg).to.be.equal('Alert Simples')
        })
    })

    it('alert with mock', function(){
        const stub = cy.stub().as('alerta')
        // * stub = mock

        cy.on('window:alert', stub)

        cy.get('#alert')
        .click()
        .then(function(){
            expect(stub.getCall(0)).to.be.calledWith('Alert Simples')
        })
    })

    it.only('confirm', function(){
        cy.get('#confirm') 
            .click()
        
        cy.on('window:confirm', function (msg){
            expect(msg).to.be.equal('Confirm Simples')
        })
        cy.on('window:alert', function (msg){
            expect(msg).to.be.equal('Confirmado')
        })
    })

    it('deny', function(){
        cy.get('#confirm') 
            .click()
        
        cy.on('window:confirm', function (msg){
            expect(msg).to.be.equal('Confirm Simples')
            return false
        })
        cy.on('window:alert', function (msg){
            expect(msg).to.be.equal('Negado')
        })
    })

    it('prompt', function(){
        cy.window().then(function(win){
            cy.stub(win, 'prompt').returns('42')
        })

        cy.on('window:confirm', function(msg){
            expect(msg).to.be.equal('Era 42?')
        })

        cy.on('window:alert', function (msg){
            expect(msg).to.be.equal(':D')
        })

        cy.get('#prompt').click()
    })

    it('desafio', function(){
        const stub = cy.stub().as('alerta')
        // * stub = mock

        cy.on('window:alert', stub)

        cy.get('#formCadastrar')
        .click()
        .then(function(){
            expect(stub.getCall(0)).to.be.calledWith('Nome eh obrigatorio')
        })

        cy.get('#formNome').type('Fernanda');
        cy.get('#formCadastrar')
        .click()
        .then(function(){
            expect(stub.getCall(1)).to.be.calledWith('Sobrenome eh obrigatorio')
        })

        cy.get('#formSobrenome').type('Matuda');
        cy.get('#formCadastrar')
        .click()
        .then(function(){
            expect(stub.getCall(2)).to.be.calledWith('Sexo eh obrigatorio')
        })

        cy.get('#formSexoFem').click()
        cy.get('#formCadastrar')
        .click()
        cy.get('#resultado > :nth-child(1)')
            .should('contain', 'Cadastrado!')
        
    })

    it('iframe',function(){
        // * iFrame é uma página dentro da página
        cy.get('#frame1').then(function(iframe){
            const body = iframe.contents().find('body')
            cy.wrap(body)
                .find('#tfield')
                    .type('Funciona!')
                        .should('have.value', 'Funciona!')

            cy.wrap(body)
                .find('[id="otherButton"]')
                    .click()
        })
    })

    it('iframe abrindo a página',function(){
        cy.visit('https://wcaquino.me/cypress/frame.html')
        cy.get('#otherButton').click()
        cy.on('window:alert', function (msg){
            expect(msg).to.be.equal('Click OK!')
        })
    })

    it.only('popups', function (){
        cy.window()
            .then(function(win){
                cy.stub(win, 'open').as('winOpen')
            })
        cy.get('#buttonPopUp').click()
        cy.get('@winOpen')
            .should('be.called')
    })
})

describe.only('PopUps with links', function(){

    beforeEach(function(){
        PaginaPage.go();
        cy.reload();
    })

    it('check popUp url', function(){
        cy.contains('Popup2')
            .should('have.prop', 'href')
                .and('equal', 'https://wcaquino.me/cypress/frame.html')
    })

    it('should acesses popUp', function(){
        cy.contains('Popup2')
            .then(function($a){
                const href = $a.prop('href')
                cy.visit(href)
            })
    })

    it('force link on same page', function(){
        cy.contains('Popup2')
            .invoke('removeAttr', 'target')
                .click()
    })
})