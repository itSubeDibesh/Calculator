/**
 * ExtractElements Class @version 1.0
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
 */

export class ExtractElements {
    /**
     * Gets All Operation Elements
     * @param {String} inputString
     * @returns {object} operationElements
     */
    operationElements(inputString) {
        return {
            preOperand: parseFloat(this.preOperand(inputString)),
            postOperand: parseFloat(this.postOperand(inputString)),
            operator: this.operator(inputString),
        }
    }

    /**
     * Gets The Operator
     * @param {String} inputString 
     * @returns {String} operator
     */
    operator(inputString) {
        return inputString[this.indexOfOperator(inputString)]
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
     * Distinguished operators String
     */
    operators() {
        return `+-*/%`;
    }
}