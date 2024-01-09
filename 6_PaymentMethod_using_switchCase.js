// Q6. You are working on an e-commerce platform. 
// Write a JavaScript program that take' the payment method ("credit", "debit", or "PayPal") as input and
//  uses a switch statement to determine and print the processing fee associated with each payment method. 
//  For example, "credit" may have a processing fee of 2%, "debit" 1.5%, and "PayPal" 3%.
const prompt = require('prompt-sync')();
let method = prompt("Enter payment method:  ")
switch(method){
    case "credit":
        console.log("The processing fee of credit  is 2%")
        break
    case "debit":
        console.log("The processing fee of debit is 1.5%")
        break
    case "PayPal":
        console.log("The processing fee of PayPal is 3%")
        break
}