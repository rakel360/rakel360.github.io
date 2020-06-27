/*USE STRICT*/
/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, found) {
    if (expected === found) {
        return "TEST SUCCEEDED";
    } else if (arraysEqual(expected, found)) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + found;
    }
}


/* Checks if two arrays are the same based o their content */
function arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;
    for (var i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}



/* 1. Define a function max() that takes two numbers as arguments and 
returns the largest of them.Use the if-then -else construct available in Javascript.*/
function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    };
}
console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10)));
console.assert(max(20, 10) === 20, "TEST FAILED");


/* 2.	Define a function maxOfThree() that takes 
three numbers as arguments and returns the largest of them.
 */
function maxOfThree(a, b, c) {
    let max = a;
    if (b > max) {
        max = b;
    }
    if (c > max) {
        max = c;
    }
    return max;
}
console.log("Expected output of maxOfThree(2,4,6) is 6  " + myFunctionTest(6, maxOfThree(2, 4, 6)));
console.assert(maxOfThree(2, 4, 6) === 6, "TEST FAILED");


/* 3.	Write a function isVowel() that takes a character 
(i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
 */
function isVowel(c) {
    c = c.toLowerCase();
    let vowel = false;
    switch (c) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            vowel = true;
            break;
    }
    return vowel;
}
console.log("Expected output of isVowel('e') is true  " + myFunctionTest(true, isVowel('e')));
console.assert(isVowel('e') === true, "TEST FAILED");


/* 4.	Define a function sum() and a function multiply() that sums and multiplies (respectively) 
all the numbers in an input array of numbers. For example, sum([1,2,3,4]) should return 10, and 
multiply([1,2,3,4]) should return 24. Note/Hint: Do these using Imperative programming approach 
(i.e. for…loop or while…loop)
 */
function sum(array) {
    let total = 0;

    let i = 0;
    while (i < array.length) {
        total += array[i];
        i++;
    }

    return total;
}

function multiply(array) {
    let product = 1;
    for (let index = 0; index < array.length; index++) {
        product *= array[index];

    }
    return product;
}
const arr = [1, 2, 3, 4];
console.log("Expected output of sum([1, 2, 3, 4]) is 10 " + myFunctionTest(10, sum(arr)));
console.log("Expected output of multiply([1, 2, 3, 4]) is 24 " + myFunctionTest(24, multiply(arr)));
console.assert(sum(arr) === 10, "TEST FAILED");
console.assert(multiply(arr) === 24, "TEST FAILED");



/* 5.	Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") 
should return the string "ratset gaj". */

function reverse(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
const text = "jag testar";
console.log("Expected output of reverse('jag testar') is ratset gaj " + myFunctionTest("ratset gaj", reverse('jag testar')));
console.assert(reverse(text) === "ratset gaj", "TEST FAILED");



/* 6.	Write a function findLongestWord() that takes an array of words and 
returns the length of the longest one.
 */
function findLongestWord(arr) {
    return arr.reduce((a, b) => a.length > b.length ? a : b);
}
const words = ['Bob', 'Allan', 'Polymorphism', 'Tx']
console.log("Expected output of findLongestWord(['Bob', 'Allan', 'Polymorphism', 'Tx']) is Polymorphism " + myFunctionTest("Polymorphism", findLongestWord(words)));
console.assert(findLongestWord(words) === "Polymorphism", "TEST FAILED");



/* 7.	Write a function filterLongWords() that takes an array of words and an integer i 
and returns a new array containing only those words that were longer than i characters.
 */
function filterLongWords(arr, i) {
    return arr.filter(word => word.length > i);
}
console.log("Expected output of filterLongWords(['Bob', 'Allan', 'Polymorphism', 'Tx'], 3) is Allan, Polymorphism " + myFunctionTest(["Allan", "Polymorphism"], filterLongWords(words, 3)));
console.assert(arraysEqual(filterLongWords(words, 3), ["Allan", "Polymorphism"]), "Fail Message")



/* 8.Modify the jsfiddle on the map/filter/reduce slide as follows:*/
const a = [1, 3, 5, 3, 3];

/* a) multiply each element by 10;  */
function multiplyBy10(arr) {
    return arr.map(elem => elem * 10);
}
console.log("Expected output of multiplyBy10([1, 3, 5, 3, 3])returns is 10, 30, 50, 30, 30 " + myFunctionTest([10, 30, 50, 30, 30], multiplyBy10(a)));
console.assert(arraysEqual(multiplyBy10(a), [10, 30, 50, 30, 30]), "Fail Message");


/*b) return array with all elements equal to 3; */
function equalTo3(arr) {
    return arr.filter(elem => elem === 3);
}
console.log("Expected output of equalTo3([1, 3, 5, 3, 3]) is  3, 3, 3 " + myFunctionTest([3, 3, 3], equalTo3(a)));
console.assert(arraysEqual(equalTo3(a), [3, 3, 3]), "Fail Message");


/*c) return the product of all elements; */
function product(arr) {
    return arr.reduce((x, y) => x * y);
}
console.log("Expected output of product([1, 3, 5, 3, 3]) is 135 " + myFunctionTest(135, product(a)));
console.assert(product(a) === 135, "Test failed");