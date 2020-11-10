import { ClassFeature } from '../ElementsFeatures/ClassFeature.js';
/**
 * Element Class @version 1.0
 *  
 * Made with ❤️ By Dibesh Raj Subedi(https://github.com/itSubeDibesh)
 * createElement(tagName: "object" | "input" | "a" | "abbr" | "address" | "applet" | "area" | "article" | "aside" | "audio" | "b" | "base" | "basefont" | "bdi" | "bdo" | "blockquote" | "body" | "br" | "button" | ... 99 more ... | "wbr", options?: ElementCreationOptions): HTMLInputElement | HTMLElement | HTMLDivElement | HTMLHeadingElement | HTMLButtonElement | ... 66 more ... | HTMLVideoElement
 * 
 * createElement(tagName: string, options?: ElementCreationOptions): HTMLElement
 * Helps to create Elements
 * @function setAttribute(object)
 * @function setInnerText(text)
 * @function setInnerHTML(text)
 * @function getInnerText()
 * @function getInnerHTML()
 * @function insertTo(parent)
 */
export class Element extends ClassFeature {
    /**
     * Creates the Element and Adds DOM Class Features
     * @param {HtmlElement} elementName 
     */
    constructor(elementName) {
        super(document.createElement(elementName));
        this.element=this.element;
    }

    /**
    * Sets the value of element's first attribute whose qualified name is qualifiedName to value.
    * 
    * @example
    * .setAttribute([
    *      { Key: 'Id',Value: 'Div' },
    *      { Name: 'Id',Value: 'Div' }
    * ]);
    * result =>
    * 
    * @param {object} object 
    * @returns {array} 
    */
    setAttribute = (object) => {
        if (typeof (object) === "object") {
            if (object.length !== 0) {
                const result = [];
                for (let index = 0; index < object.length; index++)
                    result.push(this.element.setAttribute(object[index].Key, object[index].Value));
                this.length = this.list.length;
                return result;
            } else throw (new SyntaxError('Empty Object', 'object must not be empty'));
        } else throw (new TypeError('Invalid input Type, Expected Object'));
    }

    /**
     * HTMLElement.innerText: string
     * @param {String} text 
     */
    setInnerText = (text) => this.element.innerText = text;

    /**
     * HTMLElement.innerText: string
     */
    getInnerText = () => this.element.innerText;

    /**
    * InnerHTML.innerHTML: string
    * @param {String} text 
    */
    setInnerHTML = (text) => this.element.innerHTML = text;

    /**
     * InnerHTML.innerHTML: string
     */
    getInnerHTML = () => this.element.innerHTML;

    /**
     * Inserts nodes after the last child of node, while replacing strings in nodes with equivalent Text nodes.
     * Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated.
     * @param {HTMLElement} parent 
     */
    insertTo = (parent) => {
        if (parent.element !== undefined)
            parent.element.append(this.element)
        else
            parent.append(this.element)
    };
}