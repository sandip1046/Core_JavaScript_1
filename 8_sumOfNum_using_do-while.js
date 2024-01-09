// Q8.You are creating a program to calculate the sum of numbers.
//  Write a JavaScript program that takes a positive integer as input and
//  uses a do-while loop to calculate and print the sum of all numbers from 1 to the given integer.
const prompt = require('prompt-sync')();
let num = prompt("Enter any positive number:-  ")
num=Number.parseInt(num);
let i =0;
let sum = 0;
do{
     sum=sum+i;
    i++
}while(i<=num)
console.log(sum)