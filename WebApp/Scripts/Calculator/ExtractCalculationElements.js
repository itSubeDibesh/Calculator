/**
 * ExtractCalculationElements Class @version 1.0
 * 
 * Made with ❤️ By Dibesh Raj Subedi(https://github.com/itSubeDibesh)
 * 
 * Reads the inputs and Seperates all the elements like PreOperand, Post Operand and Operator
 * 
 * @function operationElements(inputString) 
 * @function operator(inputString) 
 * @function operators() 
 * @function indexOfOperator(inputString) 
 * @function preOperand(inputString) 
 * @function postOperand(inputString) 
 * @function operatorCount(inputString) 
 */

export class ExtractCalculationElements {
    /**
     * Gets All Operation Elements
     * @param {String} inputString
     * @returns {object} operationElements
     */
    operationElements(inputString) {
        this.operatorCount(inputString);
        return {
            preOperand: parseFloat(this.preOperand(inputString)),
            postOperand: parseFloat(this.postOperand(inputString)),
            operator: this.operator(inputString),
            operatorCount: this.operatorCount(inputString)
        }
    }

    /**
     * Gets The Operator
     * @param {String} inputString 
     * @returns {String} operator
     */
    operator(inputString) {
        const ops = [];
        inputString.split('').forEach(element => {
            if (this.operators().includes(element)) {
                ops.push(element)
            }
        });
        return ops;
    }

    /**
     * Gets the Index of Operator
     * @param {String} inputString 
     * @returns {number} index
     */
    indexOfOperator(inputString) {
        let operatorsIndex = -1;
        this.operators().split('').forEach(element => {
            if (inputString.includes(element)) {
                operatorsIndex = inputString.indexOf(element);
            }
        });
        return operatorsIndex;
    }

    /**
     * Gets the Pre Operand
     * @param {String} inputString 
     * @returns {number} preOperand
     */
    preOperand(inputString) {
        return inputString.slice(0, this.indexOfOperator(inputString))
    }

    /**
     *  Gets The Post Operand
     * @param {String} inputString 
     * @returns {number} postOperand
     */
    postOperand(inputString) {
        return inputString.slice(this.indexOfOperator(inputString) + 1, (inputString.length))
    }

    /**
     * Returns Number of operators used in calculation
     * @param {String} inputString 
     */
    operatorCount(inputString) {
        let count = 0;
        this.operators().split('').forEach(symbol => {
            if (inputString.includes(symbol)) {
                count++;
            }
        });
        return count;
    }

    /**
     * Distinguished operators String
     */
    operators() {
        return `+-*/%`;
    }
}