// Q1. Write a program that grade student' based on their mark's
// a)	 If greater than 90 then A Grade
// b)	 If between 70 and 90 then a B grade
// c)	 If between 50 and 70 then a C grade
// d)	 Below 50 than an F grade

const prompt = require('prompt-sync')();
let marks = prompt("Enter student's marks:")
if (marks>90){
    console.log("A Grade")
}
else if(marks>70 && marks<=90){console.log("B Grade")}
else if(marks>50 && marks<=70){console.log("C Grade")}
else{
    console.log("F Grade")}