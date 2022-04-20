import pagina from '../../pages/PaginaPage'

describe('Visit test page', function(){
    before(function(){
        pagina.go();
    })

    beforeEach(function (){
        cy.reload();
    })

    it('should visit the page and assert title', function(){ 
        
        pagina.assertTitle('Campo de Treinamento', 'Campo');
        cy.pause();
    })

    it('should find an element and click', function(){
       
        pagina.clickSimpleButton();
    })

    it('should find an element and assert the text', function(){
        
        pagina.assertPageText('Cuidado onde clica, muitas armadilhas...');
    })

    it('should find an link and click', function(){
        
        pagina.clickLink('Voltou!')
    })

    it('should fill input text', function (){

        pagina.fillForm();
    })

    it('should find radioButton and click', function(){

        pagina.radioButton();
    })

    it('should find a checkbox and click', function(){

        pagina.checkBox();
    })

    it('should find a combo element and select item', function(){

        pagina.combo();
    })

    it('should find a multiple combo element and select item', function(){

        pagina.multipleCombo();
    })

    it('should wait element be avalible', function (){

        pagina.waitElementAvalible();
    })

    it('should search elements of a list', function(){

        pagina.listSearch();
    })

    it('using timeout', function(){

        pagina.timeout();
    })

    it.only('should vs then', function(){

        pagina.shouldThen();
    })
})