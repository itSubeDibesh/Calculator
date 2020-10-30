import { DOM } from '../Dom/Dom.js';
import { Inherit } from '../Dom/Inherit.js';
import { ExtractElements } from './ExtractElements.js';

/**
 * BasicCalculation Class @version 1.0
 *  
 * Made with ❤️ By Dibesh Raj Subedi(https://github.com/itSubeDibesh)
 * 
 * Implements basic operation for the calculator.
 * @function calculate(inputString) 
 * @function operation(inputString) 
 */
export class BasicCalculation extends Inherit(ExtractElements, DOM) {
    /**
     * Implements basic operation for the calculator.
     * @param {} inputString 
     * @returns {number} calculatedNumber
     * @returns {array} errorMessage
     */
    calculate(inputString) {
        // Check If the input Type is String Of Not
        if (typeof (inputString) === 'string') {

            // Check If The Index of Operator is Less than 0
            if (this.indexOfOperator(inputString) > 0) {
                return {
                    status: 'Success',
                    result: this.basicCalculation(inputString)
                };
            } else {
                this.error.push({
                    inputString,
                    timeStamp: new Date().toString(),
                    error: 'Operator Not Found',
                    message: `No operation sign like [${this.operators().split('')}] exists in inputString[${inputString}]`,
                    errorPriority: this.errorPriority[2],
                });
                return {
                    status: 'Failure',
                    Message: `No operation sign like [${this.operators().split('')}] exists in inputString[${inputString}]`
                }
            }
        } else {
            this.error.push({
                inputString,
                timeStamp: new Date().toString(),
                error: 'Invalid Input',
                message: `Invalid inputString type of ${typeof (inputString)}, string inputString only accepeted`,
                errorPriority: this.errorPriority[2],
            });
            return {
                status: 'Failure',
                Message: `Invalid inputString type of ${typeof (inputString)}, string inputString only accepeted`
            }
        }
    }

    /**
     * Gets the result of the operation
     * @param {String} inputString 
     * @returns{number} calculatedNumber
     * 
     *  @example
     *   let result;
     * 
     *   Addition:
     *          console.log(basicCalculator('5+9')); Prints 14
     * 
     *   Division:
     *          console.log(basicCalculator('10/2')); Prints 5
     */
    basicCalculation(inputString) {
        const
            el = this.operationElements(inputString),
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
}