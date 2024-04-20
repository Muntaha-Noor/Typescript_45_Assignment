"use strict";
// Test for quality and inquality with string
const string1 = "hello";
const string2 = "world";
console.log(string1 === string2);
console.log(string1 !== string2);
// Test using the lower Case function
const upperCaseString = "HELLO";
console.log(upperCaseString.toLowerCase() === "hello");
// Numerical tests
const num1 = 5;
const num2 = 10;
console.log(num1 === num2);
console.log(num1 !== num2);
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);
// Tests using the "and" and "or" operators
const condition1 = true;
const condition2 = false;
console.log(condition1 && condition2);
console.log(condition1 || condition2);
// Test whether an item is in an array
const array = [1, 2, 3, 4, 5];
const itemToCheck = 3;
console.log(array.includes(itemToCheck));
// Test whether an item is not in an array
const itemNotInArray = 6;
console.log(!array.includes(itemNotInArray));
