// ADD A PRIVATE FUNCTION CALLED CALCULATE
const calculate = (num1, num2, method) => {
    switch (method) {
     case 'add':
         return num1 + num2;
         break;
     case 'subtract':
         return num1 - num2;
         break;
     case 'multiply':
         return num1 * num2;
         break;
     case 'div':
         return num1 / num2;
         break;
     default:
         return 0;
    }
 };

// ADD FOUR PUBLIC FUNCTIONS BELOW
//////////////////////////////////
// ADD FUNCTION
const add = (num1, num2) => {
    total = calculate(num1, num2, 'add');
    return total;
};

// SUBTRACT FUNCTION
const subtract = (num1, num2) => {
    total = calculate(num1, num2, 'subtract');
    return total;
};

// MULTIPLY FUNCTION
const multiply = (num1, num2) => {
    total = calculate(num1, num2, 'multiply');
    return total;
};

// DIVIDE FUNCTION
const div = (num1, num2) => {
    total = calculate(num1, num2, 'div');
    return total;
};

// EXPORT THE FOUR PUBLIC FUNCTIONS
export {add};
export {subtract};
export {multiply};
export {div}; 