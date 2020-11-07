/**
 * Inherit Function @version 1.0
 *  
 * Made with ❤️ By Dibesh Raj Subedi(https://github.com/itSubeDibesh)
 * 
 * Inherit Function Helps to Inherit Multiple Class 
 * @param {*} BaseClass 
 * @param  {...any} OtherClass 
 * @returns {Base} Base
 */
export var Inherit = (BaseClass, ...OtherClass) => {
    /**
     * Creating an Base class that extends Base class and includes all the properties of other
     */
    class Base extends BaseClass {
        /**
         * Setting the constructor arguments of Base class
         * @param  {...any} args 
         */
        constructor(...args) {
            /**
             * Setting Super arguments of Base class
             */
            super(...args);
            
            /**
             * Copying the property of Other Classes to Base class
             */
            OtherClass.forEach((mixin) => {
                copyProps(this, (new mixin));
            });
        }
    }

    /**
     * This function copies all properties and symbols, filtering out some special ones
     * @param {*} target 
     * @param {*} source 
     */
    let copyProps = (target, source) => {
        Object.getOwnPropertyNames(source)
            .concat(Object.getOwnPropertySymbols(source))
            .forEach((prop) => {
                if (!prop.match(/^(?:constructor|prototype|arguments|caller|name|bind|call|apply|toString|length)$/))
                    Object.defineProperty(target, prop, Object.getOwnPropertyDescriptor(source, prop));
            })
    }

    /**
     * Outside contructor() to allow Inherit(A,B,C).staticFunction() to be called etc.
     */
    OtherClass.forEach((mixin) => {
        copyProps(Base.prototype, mixin.prototype);
        copyProps(Base, mixin);
    });
    return Base;
}