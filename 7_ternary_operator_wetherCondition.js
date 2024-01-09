// Q7. You are building a weather application.
//  Write a JavaScript program that takes the current temperature as input and 
//  uses the conditional (ternary) operator to determine and print the weather condition.
//  If the temperature is above 30°C, the condition is "Hot"; otherwise, it is "Moderate".

const prompt = require('prompt-sync')();
let temp = prompt("Enter Temperature of the Building:-  ")
temp=Number.parseInt(temp);

console.log(temp>30?"Hot":"Moderate")