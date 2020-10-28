// Reads the inputs and Seperates all the elements like PreOperand, Post Operand and Operator
const

    // Distinguished operators String
    operators = `+-*/%`,

    // Gets the Index of Operator
    indexOfOperator = (inputString) => {
        let operatorsIndex = -1;
        operators.split('').forEach(element => {
            if (inputString.includes(element)) {
                operatorsIndex = inputString.indexOf(element);
            }
        });
        return operatorsIndex;
    },

    // Gets the Pre Operand
    preOperand = (inputString) => (inputString.slice(0, indexOfOperator(inputString))),

    // Gets The Post Operand
    postOperand = (inputString) => (inputString.slice(indexOfOperator(inputString) + 1, (inputString.length))),

    // Gets The Operator
    operator = (inputString) => (inputString[indexOfOperator(inputString)]),

    // Gets All Operation Elements
    operationElements = (inputString) => {
        return {
            preOperand: parseFloat(preOperand(inputString)),
            postOperand: parseFloat(postOperand(inputString)),
            operator: operator(inputString),
        }
    };

export {
    operationElements,
    indexOfOperator,
    operators
} 