import { DOM, Inherit, Select } from "../../Dom/Dom.js";
import { EquationSolver } from '../EquationSolver/EquationSolver.js';
import { ClassFeature } from "../../Dom/Dom Elements/Elements Features/ClassFeature.js";
/**
 * Variables to Make Application CLEAR
 */
let
    clicked = false,
    clickCount = 0,
    result;
/**
 * BasicCalculator Class @version 1.0
 *  
 * Made with ❤️ By Dibesh Raj Subedi(https://github.com/itSubeDibesh)
 * 
 * Implements the Basic Calculator.
 * 
 */
export class BasicCalculator extends Inherit(DOM, EquationSolver) {
    /**
     * Implements Calculator Operations
     * @param {Object} calcButtons 
     */
    constructor(calcButtons, addToHistory, copyClipBoard, clearHistory) {
        super(Select);
        this.calcButtons = calcButtons;
        this.addToHistory = addToHistory;
        this.copyClipBoard = copyClipBoard;
        this.clearHistory = clearHistory;
        result = new Select().pick("result");
    }

    /**
     * Changes If the AC button is triggered
     */
    changeClearButton = () => {
        clicked ? this.pick('SAC').innerText = 'C' : this.pick('SAC').innerText = 'AC';
    }

    /**
     * Selecting and appending all the number to result input
     */
    selectNumbers = () => {
        this.calcButtons.numberButtons.forEach(element => {
            this.pick(element).addEventListener('click', (e) => {
                clicked = true;
                this.changeClearButton();
                this.insertNumberToResultInput(element, e);
            });
        });
    }

    /**
     * Insert number to result input
     * @param {HtmlElement} element 
     * @param {Event} e 
     */
    insertNumberToResultInput = (element, e) => {
        // Check if the preOperandAdded is True, If True then clear the result div and add the new number to result div. 
        if (this.calculatorOperationElements.preOperandAdded) {
            // Compare the length of the result div elements and preOperand elements
            if (result.value.length === this.calculatorOperationElements.preOperand.length) {
                result.value = '';
            }
        }

        // Check If click count  is 0 and if clicked button is 0 then dont append another 0
        if (clickCount === 0 && e.target.innerHTML == 0 && result.value[0] == 0) {
            result.value = element.replace('N', '');
        }
        else {
            // Remove 0  from first if the number is not decimal 
            if (result.value[0] == 0 && result.value[1] !== '.') {
                result.value = '';
            }
            // Increase Clicked Count 
            clickCount++;
            result.value += element.replace('N', '');
        }
    }

    /**
     * Implement Dot before and after number and appending as well
     */
    implementDots = () => {
        const dot = this.calcButtons.superButtons[1];
        this.pick(dot).addEventListener('click', () => {
            clickCount++;
            clicked = true;
            this.changeClearButton();
            if (result.value.length <= 0) {
                result.value += 0;
                result.value += this.pick(dot).innerText;
            } else {
                if (!result.value.includes('.'))
                    result.value += this.pick(dot).innerText;
            }
        });
    }

    /**
     * Clears Out The Input Div and Restes to previous state of application and clears history
     */
    clearCalculation = () => {
        const clear = this.calcButtons.superButtons[0];
        this.pick(clear).addEventListener('click', () => {
            clickCount = 0;
            result.value = 0;
            clicked = false;
            this.changeClearButton();
        });
    }

    /**
     * Returns the Claculator Operation Elements
     */
    calculatorOperationElements = {
        currentOperation: null,
        preOperand: null,
        postOperand: null,
        preOperandAdded: false,
        postOperandAdded: false,
        previousResult: null,
    };

    /**
     * Selecting and appending all Operator elements
     */
    implementOperators = () => {
        this.calcButtons.operatorButtons.forEach(element => {
            this.pick(element).addEventListener('click', (e) => {
                // Setting currentOperation value
                this.calculatorOperationElements.currentOperation = {
                    botton: this.pick(element),
                    operation: this.pick(element).innerText
                };
                this.calculatorOperationElements.preOperand = result.value;
                this.calculatorOperationElements.preOperandAdded = true;
            });
        });
    }

    /**
     * Set value to post postOperand and make postOperandAdded as True before calculating the result
     */
    setPostOperandValue = () => {
        this.calculatorOperationElements.postOperand = result.value;
        this.calculatorOperationElements.postOperandAdded = true;
    }

    /**
     * Calculate result and store it on result variable of calculatorOperationElements and set preOperand as result
     * and preOperandAdded = True and postOperand to null and postOperandAdded to False, show result to result div and Result to null
     */
    calculateResult = () => {
        this.setPostOperandValue();
        const
            eqn = `${this.calculatorOperationElements.preOperand}${this.calculatorOperationElements.currentOperation.operation}${this.calculatorOperationElements.postOperand}`,
            res = this.calculate(eqn);
        this.calculatorOperationElements.previousResult = res;
        if (this.calculatorOperationElements.previousResult.status !== "Success")
            console.log(this.calculatorOperationElements.previousResult.Message)
        else {
            this.addToHistory(eqn, res.result);
            this.copyClipBoard();
            this.calculatorOperationElements.preOperand = this.calculatorOperationElements.previousResult.result;
            this.calculatorOperationElements.postOperand = null;
            this.calculatorOperationElements.postOperandAdded = false;
            result.value = res.result;
            this.calculatorOperationElements.previousResult = null;
        }
    }
  

    /**
     * When Equals is Pressed
     */
    implementEqualsTo = () => {
        this.pick(this.calcButtons.superButtons[2]).addEventListener('click', (e) => {
            // Calculate result and store in app.calculatorOperationElements
            this.calculateResult();
            console.log(this.calculatorOperationElements)
        });
    }
}