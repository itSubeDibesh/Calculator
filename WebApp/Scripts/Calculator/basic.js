import { indexOfOperator, operators, operationElements as elements } from './extract.js';
/*
    This file includes only Basic Calculation for the calculator
        Parameter = (InputString)
        Result = (Calculated Value)
    Example:
            Addition ->
        let result = basicCalculator('5+9'); 
            console.log(result); Prints 14 in console

            Division ->
            result = basicCalculator('10/2');
            console.log(result); Prints 5 in console
*/

const
    // Gets the result of the operation
    basicOperation = (inputString) => {
        const
            el = elements(inputString),
            o = el.operator,
            x = el.preOperand,
            y = el.postOperand;
        switch (o) {
            case '+':
                return (x + y);
            case '-':
                return (x - y);
            case '*':
                return (x * y);
            case '/':
                return (x / y);
            case '%':
                return ((y * x) / 100);
            default:
                return 0;
        }
    };

class Basic {
    calculate(inputString) {
        // Check If the input Type is String Of Not
        if (typeof (inputString) === 'string') {

            // Check If The Index of Operator is Less than 0
            if (indexOfOperator(inputString) > 0) {
                return {
                    status: 'Success',
                    result: basicOperation(inputString)
                };
            } else {
                return {
                    status: 'Failure',
                    Message: `No operation sign like [${operators.split('')}] exists in inputString[${inputString}]`
                }
            }
        } else {
            return {
                status: 'Failure',
                Message: `Invalid inputString type of ${typeof (inputString)}, string inputString only accepeted`
            }
        }
    }

    operation(inputString) {
        return basicOperation(inputString);
    }
}

export {
    Basic
}