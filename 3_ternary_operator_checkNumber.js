// Q3. Use a nested ternary operator to check that a number is positive, negative or zero.
//  You have to print “positive” if the number is positive and 'similarly for negative and zero also.
const prompt = require('prompt-sync')();
let num = prompt("Enter any number:  ")
num=Number.parseInt(num);
console.log(num>0?"Positive":"Negative");