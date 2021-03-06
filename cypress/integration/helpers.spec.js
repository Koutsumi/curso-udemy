import pagina from '../../pages/PaginaPage'

describe('Helpers', function(){
    before(function (){
        pagina.go();
        pagina.assertTitle('Campo de Treinamento', 'Campo');
    })

    beforeEach(function(){
        cy.reload();
    })

    it('wrap', function(){

        const obj = {
            name: 'User',
            age: '26'
        }

        expect(obj)
        .to.have.property('name');

        cy.wrap(obj)
        .should('have.property', 'name')

        cy.get('#formNome')
        .then(function($el){

            cy.wrap($el)
            .type('Funciona via cypress!')
            
        })

        const promise = new Promise(function(resolve, reject){
            setTimeout(function(){
                resolve(10)
            }, 500)
        });

        cy.get('#buttonSimple')
        .then(function(){
            console.log('Entrei o primeiro botão')
        })

        cy.wrap(promise)
        .then(function(ret){
            console.log(ret)
        })

        cy.get('#buttonList')
        .then(function(){
            console.log('Entrei o segundo botão')
        })
    })

    it('ITS', function(){
        const obj = {
            name: 'User',
            age: '26',
            endereco: {
                rua: 'bobos'
            }
        }
        cy.wrap(obj)
        .should('have.property', 'name', 'User')

        cy.wrap(obj)
        .its('name').should('be.equal', 'User')

        cy.wrap(obj)
        .its('endereco')
        .its('rua')
        .should('contains', 'bobos')

        cy.title()
        .its('length')
        .should('be.equal', 20)

    })

    it('invoke', function (){
        
        const getValue = function (){
            return 1
        }
        const soma = function (a, b){
            return a + b
        }

        cy.wrap({ fn: getValue})
            .invoke('fn')
            .should('be.equal', 1)

        cy.wrap({fn : soma})
            .invoke('fn', 2, 5)
            .should('be.equal', 7)

        cy.get('#formNome')
            .invoke('val', 'texto via invoke')

        cy.window()
            .invoke('alert', 'funciona')

        cy.get('#resultado')
            .invoke('html', '<input type="button" value="hached" />')
    })
   
})