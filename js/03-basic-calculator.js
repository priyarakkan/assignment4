// IMPORT THE MODULE
import calc from './modules/calculator.js'


let num1 = parseInt(prompt('Enter the first number : '));
let num2 = parseInt(prompt('Enter the second number : '));
let operation = prompt('Enter the operation to perform : (add/subtract/multiply or div)');

switch (operation) {
    case 'add':
        console.log(calc.add(num1, num2));
        break;
    case 'subtract':
        console.log(calc.subtract(num1, num2));
        break;     
    case 'multiply':
        console.log(calc.multiply(num1, num2));
        break;   
    case 'div':
        console.log(calc.div(num1, num2));
        break;
    default
        alert ('You did not enter the correct operation ');
}





