/*mocha tests*/
(function() {

    describe("Tests with mocha and chai ", function() {

        it("sumArray([1,2,3,4]) is 10", function() {
            assert.equal(sumArray([1, 2, 3,4]), 10);
        })

        it("multiplyArray([1,2,3,4]) is 24", function() {
            assert.equal(multiplyArray([1,2,3,4]), 24);
        })

        it("reverseString('jag testar') is ratset gaj", function() {
            assert.equal(reverseString('jag testar'), 'ratset gaj');
        })

        it("filterLongWords(['Bob', 'Allan', 'Polymorphism', 'Tx'], 3) is ['Allan', 'Polymorphism']", function() {
            assert.equal(filterLongWords(['Bob', 'Allan', 'Polymorphism', 'Tx'], 3).toString(), ['Allan', 'Polymorphism',].toString())
        })

    })

}());
