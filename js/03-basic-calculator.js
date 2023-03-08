// IMPORT THE MODULE
import { add } from './modules/calculator.js';
import { sub } from './modules/calculator.js';
import { mul } from './modules/calculator.js';
import { div } from './modules/calculator.js';

// COLLECT FIRST NUMBER FROM USER
// COLLECT SECOND NUMBER FROM USER
// COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
let num1 = parseInt(prompt('Enter the first number : '));
let num2 = parseInt(prompt('Enter the second number : '));
let operation = prompt('Enter the operation to perform : ');

// CHECK TO SEE WHAT OPERATION THEY'RE USING
// CALL THE APPROPRIATE FUNCTION
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

//The Basic Calculator (25 points)
//4.Finally, prompt the user for the operation they would like to perform
// (add, subtract, multiply, divide) and store that in a variable.
//5.Use a switch statement to evaluate the operation parameter being passed in.
// Depending on what it is, perform that operation by calling the appropriate function from the module.
//6.Display the result of the calculation within an alert.
//7.Figure out how to make it so that if the user doesn’t enter either add, 
//subtract, multiply, or divide, they are displayed an alert message telling them that. 
//Then you’ll have to rerun the application so that the application asks the user for 
//the numbers and operation once more. You’ll have to add this functionality within 
//a do while loop similarly how the labs were done in the previous lecture.