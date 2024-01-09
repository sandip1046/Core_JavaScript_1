// Q5. You're creating a basic login system. Make a login function with two things: a username and a password. 
// Check if the username is "admin" and the password is "12375".
//  If they're both correct, show "Login
// successful"; if not, show "Invalid credentials"

const prompt = require('prompt-sync')();
let name = prompt("Enter a UserName:  ")

const prompt1 = require('prompt-sync')();
let password = prompt("Enter a Password:  ")


if(name == "admin" && password=="12345"){
    console.log("Login succesfull")  
}
else{
    console.log("Invalid credential!!!!!1")
}