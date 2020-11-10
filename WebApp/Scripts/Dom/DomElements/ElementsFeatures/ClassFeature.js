/**
 * ClassFeature Class @version 1.0
 *  
 * Made with ❤️ By Dibesh Raj Subedi(https://github.com/itSubeDibesh)
 * 
 * Helps to implement class functionalities in elements
 * @proto list
 * @proto length
 * @function coreFactory(classString, type)
 * @function add(classString)
 * @function contains(className)
 * @proto forEach(value, key, parent)
 * @function item(index)
 * @proto entries(number, string)
 * @proto keys(number)
 * @function remove(classString)
 * @function replace(oldToken, newToken)
 * @function supports(token)
 * @function toString()
 * @function toggle(token)
 * @function value()
 * @proto values()

 */
export class ClassFeature {
    /**
     * Inputs the HTMLElement as parameter
     * @param {HTMLElement} element 
     */
    constructor(element) {
        // Sets the constructor to selected element
        this.element = element;
        // Returns classList
        this.list = element.classList;
        // Returns the number of tokens.
        this.length = element.classList.length;
    }

    /**
     * Set The Type of operation for Core Factory
     */
    coreType = {
        add: 0,
        remove: 1,
        tooggle: 2
    }

    /**
     * Creates A Factory to perform core operations
     * @param {String} classString 
     * @param {number} type 
     */
    coreFactory = (classString, type) => {
        if (typeof (classString) === "string") {
            if (classString.length !== 0) {
                return classString.split(' ').forEach(item => {
                    if (type === this.coreType.add) return this.list.add(item)
                    else if (type === this.coreType.remove) return this.list.remove(item);
                    this.length = this.list.length;
                });
            } else throw (new SyntaxError('Empty String', 'classString must not be empty'));
        } else if (typeof (classString) === "object") {
            if (classString.length !== 0) {
                if (type === this.coreType.tooggle) {
                    const result = [];
                    for (let index = 0; index < classString.length; index++) {
                        result.push(this.list.toggle(classString[index].token, classString[index].force));
                    }
                    this.length = this.list.length;
                    return result;
                }
            } else throw (new SyntaxError('Empty Object', 'classString must not be empty'));
        } else throw (new TypeError('Invalid input Type, Expected Object'));
    }

    /**
     * Adds all arguments passed, except those already present. 
     * Throws a "SyntaxError" DOMException if one of the arguments is the empty string.
     * 
     * @example
     * button.add('btn btn-success');
     * @param {String} classString 
     */
    add = (classString) => this.coreFactory(classString, this.coreType.add);

    /**
     * Returns true if token is present, and false otherwise.
     * @param {String} className 
     * @returns {Boolean} True | False
     */
    contains = (className) => this.list.contains(className);

    /**
     * Loops down the class of elements
     * @param  { string } value
     * @param  { number } key
     * @param  { DOMTokenList } parent 
     */
    forEach = (value, key, parent) => this.list.forEach(value, key, parent);

    /**
     * Returns the token with index.
     * @param {number} index 
     */
    item = (index) => this.list.item(index);

    /**
     * IterableIterator<[number, string]>
     */
    entries = (number, string) => this.list.entries(number, string);

    /**
     * IterableIterator<number>
     */
    keys = (number) => this.list.keys(number);

    /**
     * Removes arguments passed, if they are present.
     * Throws a "SyntaxError" DOMException if one of the arguments is the empty string.
     * 
     * @example
     * button.remove('btn btn-success');
     * @param {String} classString 
     */
    remove = (classString) => this.coreFactory(classString, this.coreType.remove);

    /**
     * Replaces token with newToken.
     * Returns true if token was replaced with newToken, and false otherwise.
     * Throws a "SyntaxError" DOMException if one of the arguments is the empty string.
     * Throws an "InvalidCharacterError" DOMException if one of the arguments contains any ASCII whitespace.
     * 
     * @param {String} oldToken 
     * @param String*} newToken 
     */
    replace = (oldToken, newToken) => this.list.replace(oldToken, newToken)

    /**
     * Returns true if token is in the associated attribute's supported tokens. Returns false otherwise.
     * Throws a TypeError if the associated attribute has no supported tokens defined.
     * 
     * @param {String} token 
     */
    supports = (token) => this.list.supports(token);

    /**
     * Returns elements in string
     */
    toString = () => this.list.toString();

    /**
     * If force is not given, "toggles" token, removing it if it's present and adding it if it's not present. 
     * If force is true, adds token (same as add()). If force is false, removes token (same as remove()).
     * Returns true if token is now present, and false otherwise.
     * Throws a "SyntaxError" DOMException if token is empty.
     * Throws an "InvalidCharacterError" DOMException if token contains any spaces.
     * 
     * @example
     * classE.toggle([
     *      { token: 'btn-danger',force: true },
     *      { token: 'btn-success',force: true },
     *      { token: 'm-2',force: false }
     * ]);
     * result =>[true,true,false]
     * 
     * @param {object} token
     * @returns {Array} true|false
     */
    toggle = (token) => this.coreFactory(token, this.coreType.tooggle);

    /**
     * Returns the associated set as string.
     * Can be set, to change the associated attribute.
     */
    value = () => this.list.value;

    /**
     * IterableIterator<string>
     */
    values = () => this.list.values();
}