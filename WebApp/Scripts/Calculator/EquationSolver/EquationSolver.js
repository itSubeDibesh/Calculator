import { DOM, Inherit } from '../../Dom/Dom.js';
import { ExtractCalculationElements } from '../ExtractCalculationElements.js';
/**
 * EquationSolver Class @version 1.0
 *  
 * Made with ❤️ By Dibesh Raj Subedi(https://github.com/itSubeDibesh)
 * 
 * Implements basic operation for the calculator.
 * @function calculate(inputString) 
 * @function equationSolver(inputString) 
 */
export class EquationSolver extends DOM {
    constructor() {
        super(DOM);
        this.elementsExtract = new ExtractCalculationElements();
    }
    /**
     * Implements basic operation for the calculator.
     * @param {} inputString 
     * @returns {number} calculatedNumber
     * @returns {array} errorMessage
     */
    calculate(inputString) {
        // Check If the input Type is String Of Not
        if (typeof (inputString) === 'string') {
            const result = this.equationSolver(inputString);
            // Check if the result is NaN or Number
            let show;
            if (result !== NaN) {
                const c = result + "";
                if (c.includes("NaN")) {
                    show = "Input";
                }
                else {
                    show = "Result";
                }
            }

            // Check If result is number, Always true unless exception
            if (typeof (result) === "number") {
                return {
                    status: 'Success',
                    result,
                    show
                };
            } else {
                this.error.push({
                    inputString,
                    timeStamp: new Date().toString(),
                    error: 'Operator Not Found',
                    message: `No operation sign like [${this.elementsExtract.operators().split('')}] exists in inputString[${inputString}]`,
                    errorPriority: this.errorPriority[2],
                });
                return {
                    status: 'Failure',
                    Message: `No operation sign like [${this.elementsExtract.operators().split('')}] exists in inputString[${inputString}]`
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
     *          console.log(equationSolver('5+9')); Prints 14
     * 
     *   Division:
     *          console.log(equationSolver('10/2')); Prints 5
     */
    equationSolver(inputString) {
        const
            el = this.elementsExtract.operationElements(inputString),
            o = el.operator,
            x = el.preOperand,
            y = el.postOperand,
            count = el.operatorCount;
        if (count === 1) {
            switch (o[0]) {
                case '+':
                    return parseFloat(x + y);
                case '-':
                    return parseFloat(x - y);
                case '*':
                    return parseFloat(x * y);
                case '/':
                    return parseFloat(x / y);
                case '%':
                    return parseFloat((y * x) / 100);
                default:
                    return 0;
            }
        } else {
            return eval(inputString);
        }
    };
}