"use strict";
//1....Filter function

console.log(" 1. Filter function")
String.prototype.filter = function (banned) {
    let splitted = this.split(" ");
    return splitted.filter(s => s !== banned
    ).join(" ");
};
console.log("The house is not nice".filter("not"));

//2.....BuubleSort Algorithm
console.log(" \n 2. BubbleSort Algorithm")
Array.prototype.bubbleSort = function () {
    let length = this.length;
    for (let i = (length - 1); i >= 0; i--) {
        for (let j = (length - i); j > 0; j--) {
            if (this[j] < this[j - 1]) {
                let tmp = this[j];
                this[j] = this[j - 1];
                this[j - 1] = tmp;
            }
        }
    }
    return this;
};
console.log([6, 4, 0, 3, -2, 1].bubbleSort());


//3...Prototype Attribute
console.log(" \n 3. Prototype Attribute");

var Person = function () { };

Person.prototype.initialize = function (name,age) {
    this.name = name;
    this.age=age;
};

var Teacher = function () { };
Teacher.prototype = new Person();

Teacher.prototype.teach = function (subject) {
    return (this.name + " is now teaching " + subject);
};

var me = new Teacher();

me.initialize("Prof. Michael",45);
console.log(me.teach("TDD"));