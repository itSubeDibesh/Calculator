import { DOM, Inherit, Select } from "../../Dom/Dom.js";
import { EquationSolver } from '../EquationSolver/EquationSolver.js';
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
 * @prop changeClearButton()
 * @function selectNumbers()
 * @function insertNumberToResultInput()
 * @prop implementDots()
 * @function clearCalculation()
 * @function implementOperators()
 * @function calculateResult()
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
        const
            l = ["N0", "N1", "N2", "N3", "N4", "N5", "N6", "N7", "N8", "N9"],
            commonFactory = (element, e) => {
                clicked = true;
                this.changeClearButton();
                this.insertNumberToResultInput(element, e);
            },
            // Sets the Factpry Fro Keyboard Operator Key Trigger
            triggerFn = (e, trigger, element) => {
                if (e.key === trigger) {
                    commonFactory(element, e);
                }
            };

        // Triggers When Button in DOM is Pressed
        this.calcButtons.numberButtons.forEach(element => {
            this.pick(element).addEventListener('click', (e) => {
                commonFactory(element, e);
            });
        });

        // Triggers Keyboard Buttons are pressed
        addEventListener('keyup', (e) => {
            for(let i=0;i<10;i++){
                triggerFn(e, `${i}`, l[i]);
            }
        });
    }

    /**
     * Insert number to result input
     * @param {HtmlElement} element 
     * @param {Event} e 
     */
    insertNumberToResultInput = (element, e) => {
        // Check If click count  is 0 and if clicked button is 0 then dont append another 0
        if (clickCount === 0 && e.target.innerHTML == 0 && result.value[0] == 0) {
            result.value = element.replace('N', '');
        }
        else {
            // Remove 0  from first if the number is not decimal or not 
            if (
                (result.value[0] == 0 && result.value[1] !== '.')
            ) {
                result.value += '';
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
        const dot = this.calcButtons.superButtons[1],
        commonFn=()=>{
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
        };
        this.pick(dot).addEventListener('click', () => {
            commonFn();
        });

         // Triggers Keyboard "." Key Press Event
         addEventListener('keyup', (e) => {
            if (e.key === ".") {
                commonFn();
            }
        });
    }

    /**
     * Clears Out The Input Div and Restes to previous state of application and clears history
     */
    clearCalculation = () => {
        const
            clear = this.calcButtons.superButtons[0],
            commonFactory = () => {
                clickCount = 0;
                result.value = ' ';
                clicked = false;
                this.changeClearButton();
            };

        // Triggers Button Click Event in DOM
        this.pick(clear).addEventListener('click', () => {
            commonFactory();
        });

        // Triggers Keyboard "Backspace" Key Press Event
        addEventListener('keyup', (e) => {
            if (e.key === "Backspace") {
                commonFactory();
            }
        });
    }

    /**
     * Selecting and appending all Operator elements
     */
    implementOperators = () => {
        // Sets The value according to event
        const
            commonFn = (element) => {
                if (result.value == 0 && element == "OSUB") {
                    result.value = this.pick(element).innerText;
                } else if (result.value == 0 && (element == "ODIV" || element == "OMUL")) {
                    result.value = 0;
                    result.value += this.pick(element).innerText;
                }
                else
                    result.value += this.pick(element).innerText;
            },
            // Sets the Factpry Fro Keyboard Operator Key Trigger
            triggerFactory = (e, trigger, element) => {
                if (e.key === trigger) {
                    commonFn(element);
                }
            };

        // Triggers Button Click Event in DOM
        this.calcButtons.operatorButtons.forEach(element => {
            this.pick(element).addEventListener('click', (e) => {
                commonFn(element);
            });
        });

        // Trigger Keyboard Event
        addEventListener('keyup', (e) => {
            triggerFactory(e, "+", "OSUM");
            triggerFactory(e, "-", "OSUB");
            triggerFactory(e, "*", "OMUL");
            triggerFactory(e, "/", "ODIV");
            triggerFactory(e, "%", "OMOD");
        });
    }

    /**
     * Calculate Result and add to history and display on dom
     */
    calculateResult = () => {
        const
            input = result.value,
            res = this.calculate(input),
            diaplay = res.show === "Input" ? input : res.result;
        if (res.status === "Success") {
            this.addToHistory(input, diaplay);
            this.copyClipBoard();
            // Display Same value as input or Result
            result.value = diaplay;
        }
        //  Logs out BasicCalculator.js:128 No operation sign like [+,-,X,/,%] exists in inputString[0]
        // else console.log(res.Message)  
    }

    /**
     * When Equals is Pressed
     */
    implementEqualsTo = () => {
        // Triggers Button "=" Key Press Event in DOM
        this.pick(this.calcButtons.superButtons[2]).addEventListener('click', (e) => {
            this.calculateResult();
        });

        // Triggers Keyboard "=" Key Press Event
        addEventListener('keyup', (e) => {
            if (e.key === "="||e.key === "Enter") {
                this.calculateResult();
            }
        });
    }
}