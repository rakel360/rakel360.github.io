
(function() {

    describe("Mocha / Chai test cases", function () {
    //mapper
        it("Expected output of 'The house is not nice'.filter('not') is 'The house is nice'  ", function () {
            assert.equal('The house is not nice'.filter('not'), 'The house is nice');
        })

        it("Expected output of [6, 4, 0, 3, -2, 1].bubbleSort() is [-2, 0, 1, 3, 4, 6]  ", function () {
            assert.equal([6, 4, 0, 3, -2, 1].bubbleSort().toString(), '-2,0,1,3,4,6');
        })
/*
        it("Expected output of new Teacher().teach('Inheritance') is 'Prof. Peter is now teaching Inheritance' ", function () {
            assert.equal(me.teach("WAP"), 'Prof. Peter is now teaching Inheritance');
        })*/

        it("Expected output of new Teacher().teach('TDD') is 'Prof. Michael is now teaching WAP'", function () {
            assert.equal(me.teach("TDD"), 'Prof. Michael is now teaching TDD')
        });


    })

}());