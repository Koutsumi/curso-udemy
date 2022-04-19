describe('should', function(){
    it('expect', function(){
        expect(2, 'deve ser igual:' ).to.be.equal(2)
    })

    it('boolean', function(){
        let c;

        expect(true).to.be.true
        expect(false).to.be.false
        expect(null).to.be.null
        expect(true).not.to.be.null
        expect(c).to.be.undefined
    })

    it('equal', function(){
        const obj = {
            a: 1,
            b: 2
        }

        expect(obj).equal(obj)
        expect(obj).equals(obj)
        expect(obj).eql(obj)
        expect(obj).to.be.equal(obj)
        expect(obj).to.be.deep.equal({a:1, b:2})
        expect(obj).eql({a:1, b:2})
        expect(obj).include({a:1})
        // * que contenha o elemento
        expect(obj).to.have.property('b', 2)
        expect(obj).not.to.be.empty
    })

    it('arrays', function(){
        const arr = [1, 2, 3];

        expect(arr).to.have.members([1,2,3])
        expect(arr).to.include.members([1,2,3])
        expect(arr).not.to.be.empty
        expect([]).to.be.empty
    })

    it('type', function(){
        expect(1).to.be.a('number')
        expect('string').to.be.a('string')
        expect({}).to.be.a('object')

        // ! strings
        expect('teste').to.have.length(5);
        expect('teste do teste').to.contains('do');
        expect('teste do teste').to.match(/do/);
        expect('teste do teste').to.match(/^teste/);
        expect('teste do testeFinal').to.match(/testeFinal$/);
        expect('teste do teste').to.match(/\w+/);
        expect(65846524).to.match(/\d+/);
        // * \w+ teste se contém apenas letras
        // * \d+ teste se contém apenas núemros

        // ! numbers
        const number = 4;
        const floatNumber = 5.4894

        expect(number).to.be.equal(4)
        expect(number).to.be.above(3)
        expect(number).to.be.below(5)
        expect(floatNumber).to.be.closeTo(5.5, 0.1)
        // * o segundo número é o quanto deve se aproximar 




    })
})