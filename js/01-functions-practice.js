//STEP 1

//Write a function called halfNumber() that accepts one argument (a number), 
//divide it by 2, and return the result. It should log a string like "Half of 5 is 2.5.".
function halfNumber(num) {
    let x = num / 2; 
    console.log (`Half of ${num} is ${x}.`);
    return;
} halfNumber(5)

//STEP 2

//Write a function called squareNumber() that accepts one argument (a number), 
//square that number, and return the result. It should also log a string like 
//"The result of squaring the number 3 is 9."
function squareNumber(num1) {
    let square = num1 * num1;
    console.log (`The result of squaring the number ${num1} is ${square}.`);
    return;
} squareNumber(11)

//STEP 3

//Write a function called percentOf() that accepts two numbers,
// figure out what percent the first number represents of the second number,
// and return the result. It should log a string like "2 is 50% of 4."
function percentOf(a, b) {
    let result = ((a / b) * 100);
    console.log(`${a} is ${result}% of ${b}.`);
    return;
} percentOf(3, 6)

//STEP 4

//Write a function called findModulus() that accepts two numbers. 
//Within the function write a statement that returns the modulus of the first and second parameters.
// It should log a string like "2 is the modulus of 4 and 10."

function findModulus(a1, b1) {
    modulus = a1 % b1;
    console.log(`${modulus} is the modulus of ${a1} and ${b1}`);
    return;
} findModulus(4, 10)
//STEP 5