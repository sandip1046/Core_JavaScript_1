let x = 1;
x = (x++, x); // here comma operator evaluate from left to right and gave x=2 as a output
console.log(x);
x = (2, 3); // here value of x assigned as the right value
console.log(x);