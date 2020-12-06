import { Debug} from '../Dom/Dom.js';
import { BasicCalculator } from './BasicCalculator/BasicCalculator.js';
/**
 * Calculator Class @version 1.0
 *  
 * Made with ❤️ By Dibesh Raj Subedi(https://github.com/itSubeDibesh)
 * 
 * Implements the Calculator Rules and Functionalities.
 * @function init()
 */
export class Calculator extends Debug {
    /**
     * Calculator Constructor used to initialize application
     * @param {Object} calcButtons 
     * @param {Function} addToHistory
     * @param {Function} copyClipBoard 
     */
    constructor(calcButtons, addToHistory, copyClipBoard, clearHistory) {
        super(Debug);
        this.calcButtons = calcButtons;
        this.addToHistory = addToHistory;
        this.copyClipBoard = copyClipBoard;
        this.clearHistory = clearHistory;
        this.log(`|-> Calculator ready to initialize`);
    }

    init = () => {
        const { calcButtons, addToHistory, copyClipBoard, clearHistory } = this;
        this.basicCalc = new BasicCalculator(
            calcButtons, addToHistory, copyClipBoard, clearHistory
        );
        this.basicCalc.selectNumbers();
        this.basicCalc.implementDots();
        this.basicCalc.clearCalculation();
        this.basicCalc.implementOperators();
        this.basicCalc.implementEqualsTo();
    }
}