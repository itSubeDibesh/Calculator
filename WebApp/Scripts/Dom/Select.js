import { Debug } from "./Debug.js";
/**
 * Storing The selected Elements
 */
let selectedElements = [];

/**
 * Select Class @version 1.0
 * 
 * Made with ❤️ By Dibesh Raj Subedi(https://github.com/itSubeDibesh)
 * @function check
 * @function checkFactory(selectorType)
 * @function elementType(elementName)
 * @property isClassElement
 * @property isIdElement
 * @property isNameElement
 * @property isTagElement
 */
export class Select extends Debug {
    /**
     * Checks the whether the selected
     * @returns {Function} function to check the selected element type
     */
    check = {
        class: (el) => (document.getElementsByClassName(el)[0].attributes[0].name === 'class'),
        id: (el) => (document.getElementById(el).attributes[1].name === 'id'),
        name: (el) => (document.getElementsByName(el)[0].attributes[2].name === 'name'),
        tag: (el) => (Boolean(document.getElementsByTagName(el)[0].localName === el))
    }

    /**
     * Creates a factory to check whether the type of element exists
     * @param {Function} selectorType 
     * @returns {Function} function to create factory for checking different element types
     */
    checkFactory(selectorType) {
        return (el) => {
            try {
                return selectorType(el);
            } catch (error) {
                return false;
            }
        }
    }

    /**
     * Checkes if it's Class Element
     * @returns {Function}
     */
    isClassElement = this.checkFactory(this.check.class);

    /**
     * Checkes if it's Id Element
     * @returns {Function}
     */
    isIdElement = this.checkFactory(this.check.id);

    /**
     * Checkes if it's Named Element
     * @returns {Function}
     */
    isNameElement = this.checkFactory(this.check.name);

    /**
     * Checkes if it's Tag Name Match
     * @returns {Function}
     */
    isTagElement = this.checkFactory(this.check.tag);

    /**
     * Returns the Element Type using Element Name
     * @param {String} elementName 
     * @returns {String} Element Type [ Id | Class |Name | Tag | Unknown]
     */
    elementType = (elementName) => {
        return this.isIdElement(elementName) ? 'Id' :
            this.isClassElement(elementName) ? 'Class' :
                this.isNameElement(elementName) ? 'Name' :
                    this.isTagElement(elementName) ? 'Tag' : 'Unknown';
    }

    /**
     * Returns Selected Elements Array
     */
    selectedElements = selectedElements;

    /**
     * A Factory For Pick Function to select Element
     * @param {String} element 
     * @returns {HTMLElement} Element
     */
    pickFactory(element) {
        /**
         * A factory Function to Implement Select Elements
         * @param {Function} selectorType 
         * @returns {HTMLCollection} Object
         */
        const factory = (selectorType) => {
            this.selectedElements.push(selectorType);
            return selectorType;
        }

        /**
         * Switching Between Element Types and returning Selected Element
         */
        switch (this.elementType(element)) {
            case 'Id':
                return factory(document.getElementById(element));
            case 'Class':
                return factory(document.getElementsByClassName(element));
            case 'Name':
                return factory(document.getElementsByName(element));
            case 'Tag':
                return factory(document.getElementsByTagName(element));
            default:
                this.error.push({
                    selectorType: this.elementType(element),
                    element,
                    timeStamp: Date(),
                    error: `Not Found`,
                    message: `Element [${element}] Not Found in DOM`,
                    errorPriority: this.errorPriority[2]
                });
                return {
                    status: 'Failure',
                    message: `Element [${element}] Not Found in DOM`
                }
        }
    }

    /**
     * Picks Up the Element From Dom 
     */
    pick = this.pickFactory

}