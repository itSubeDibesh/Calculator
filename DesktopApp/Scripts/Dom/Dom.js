import { Element } from "./DomElements/DomElements.js";
import { Debug } from "./DomFeatures/Debug.js";
import { Inherit } from './DomFeatures/Inherit.js'
import { Select } from "./DomFeatures/Select.js";
/**
 * DOM Class @version 1.0
 * 
 * Made with ❤️ By Dibesh Raj Subedi(https://github.com/itSubeDibesh)
 * 
 * Initialize Dom Elements. 
 * @function parseSvgStringToSVG(svgString)
 * @function parseStringToHTML(htmlString)
 * @function disableLog()
 * @function enableLog()
 * @function disableError()
 * @function enableError()
 * @function clear()
 * @function copyToClipboard(str)
 */
class DOM extends Inherit(Select, Debug, Element) {
    constructor() {
        super(Select, Debug, Element)
        this.pick = new Select().pick;
    }

    /**
     * Returns the DOM SVG element out of Svg String 
     * @param {String} svgString 
     */
    parseSvgStringToSVG = (svgString) => {
        return this.parseStringToHTML(svgString);
    }

    /**
     * Returns HTML Element out of HTML String
     * @param {String} htmlString 
     */
    parseStringToHTML = (htmlString) => {
        return new DOMParser().parseFromString(htmlString, "text/html").body.children[0];
    }

    /**
    * Disables Console.Log
    */
    disableLog = () => {
        this.warn("|-> Console Log Disabled.")
        console.log = () => (null);
    }

    /**
    * Disables Console.Error
    */
    disableError = () => {
        this.warn("|-> Console Error Disabled.")
        console.error = () => (null);
    }

    /**
     * Enables Console.Log
     */
    enableLog = () => {
        this.warn("|-> Console Log Enabled.")
        console.log = this.log;
    }

    /**
     * Enables Console.Error
     */
    enableError = () => {
        this.warn("|-> Console Error Enabled.")
        console.error = this.logError;
    }

    /**
     * Clears Out The console
     */
    clear = this.clear;

    /**
     * Coppies Element To ClipBoard
     * @param {String} str 
     */
    copyToClipboard = str => {
        const el = document.createElement('textarea');
        el.value = str;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    };
}

export {
    DOM,
    Element,
    Inherit,
    Select,
    Debug
}