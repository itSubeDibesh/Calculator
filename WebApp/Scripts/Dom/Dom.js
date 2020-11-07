import { Element } from "./Dom Elements/DomElements.js";
import { Debug } from "./Dom Features/Debug.js";
import { Inherit } from './Dom Features/Inherit.js'
import { Select } from "./Dom Features/Select.js";
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
     * Enables Console.Log
     */
    enableLog = () => {
        this.warn("|-> Console Log Enabled.")
        console.log = this.log;
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