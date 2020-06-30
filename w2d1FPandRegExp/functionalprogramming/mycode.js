"use strict";

function myFunctionTest(expected, found) {
    if (expected === found) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + found;
    }
}

/* 4.	Define a function sum() and a function multiply() that sums and multiplies (respectively)
all the numbers in an input array of numbers.
 */
const array1 = [1, 2, 3, 4];

function sumArray(arr) {
    return arr.reduce((acc,val) => acc + val);
}
console.log("Expected output of sumArray([1, 2, 3, 4]) is 10 " + myFunctionTest(10, sumArray(array1)));


/*
let sumx = array1.reduce((acc, val) => acc + val);
console.log(sumx);
*/


function multiplyArray(arr){
    return arr.reduce((acc,val) => acc * val);
}
console.log("Expected output of multiplyArray([1, 2, 3, 4]) is 24 " + myFunctionTest(24, multiplyArray(array1)));



/* 5.	Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar")
should return the string "ratset gaj". */
const text = "jag testar";
function reverseString(str){
    return str.split("").reduce((rev, char)=> char + rev, '');
}
console.log("Expected output of reverse('jag testar') is ratset gaj " + myFunctionTest("ratset gaj", reverseString('jag testar')));



/* 7.	Write a function filterLongWords() that takes an array of words and an integer i
and returns a new array containing only those words that were longer than i characters.
 */
const words = ['Bob', 'Allan', 'Polymorphism', 'Tx']
function filterLongWords(arr, i) {
    return arr.filter(word => word.length > i);
}
console.log("Expected output of filterLongWords(['Bob', 'Allan', 'Polymorphism', 'Tx'], 3) is Allan, Polymorphism " + myFunctionTest(["Allan", "Polymorphism"].toString(), filterLongWords(words, 3).toString()));
