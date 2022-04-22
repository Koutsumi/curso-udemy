import PaginaPage from "../../pages/PaginaPage"

describe('work with alerts', function(){
    before(function(){
        PaginaPage.go();
    })

    beforeEach(function(){
        cy.reload();
    })

    it('',function(){
        cy.get('#alert')
            .click()

        cy.on('window:alert', function(msg){
            console.log(msg)
            expect(msg).to.be.equal('Alert Simples')
        })
    })

    it('alert with mock', function(){
        const stub = cy.stub().as('alerta')

        cy.on('window:alert', stub)
        cy.get('#alert').click()

        cy.get('#alert')
        .click()
        .then(function(){
            expect(stub.getCall(0)).to.be.calledWith('Alert Simples')
        })
    })
})