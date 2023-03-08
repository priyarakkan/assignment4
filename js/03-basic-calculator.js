// IMPORT THE MODULE
import { add } from './modules/calculator.js';
import { sub } from './modules/calculator.js';
import { mul } from './modules/calculator.js';
import { div } from './modules/calculator.js';


let num1 = parseInt(prompt('Enter the first number : '));
let num2 = parseInt(prompt('Enter the second number : '));
let operation = prompt('Enter the operation to perform : ');


do {
    if (operation == '+') {
        add();
    } else if (operation == '-') {
        sub();
    } else if (operation == '*') {
        mul();
    } else if (operation == '/') {
        div();
    } else {
        alert('Enter valid operator.')
    }
    again = prompt('Calculate again? (y/n)','y');
} while (again === 'y');

