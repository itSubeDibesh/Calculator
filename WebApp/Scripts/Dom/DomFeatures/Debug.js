/**
 * Setting An Error array to store the generated errors
 */
let error = [];

/**
 * Setting Error priority for debugging purpose
 */
const errorPriority = ['Normal', 'Ignorable', 'Danger'];

/**
 * Debug Class @version 1.0
 * 
 * Made with ❤️ By Dibesh Raj Subedi(https://github.com/itSubeDibesh)
 * 
 * Helps to Debug the application
 * @function debugFactory(type)
 * @property debugType
 * @property error()
 * @function displayError()
 * @function errorPriority()
 * @property log
 * @property warn
 * @property logError
 * @property dir
 * @property alert
 */
export class Debug {
    /**
     * Helps to create new debug using debug type
     * @param {Function} type 
     * @returns {Function} function
     */
    debugFactory(type) {
        return function (...args) {
            return type(...args);
        }
    }

    /**
     * Returns debug type
     * @returns {Function} functionString
     */
    debugType = {
        alert: alert,
        assert: console.assert,
        clear: console.clear,
        confirm: confirm,
        count: console.count,
        countReset: console.countReset,
        debug: console.debug,
        dir: console.dir,
        dirxml: console.dirxml,
        error: console.error,
        exception: console.exception,
        group: console.group,
        groupCollapsed: console.groupCollapsed,
        groupEnd: console.groupEnd,
        info: console.info,
        log: console.log,
        memory: console.memory,
        table: console.table,
        time: console.time,
        timeEnd: console.timeEnd,
        timeLog: console.timeLog,
        timeStamp: console.timeStamp,
        trace: console.trace,
        warn: console.warn,
    }

    /**
     * Returns error array
     * @returns {array} error 
     * 
     * Pushing into Error array:
     * @example this.error().push({
                    element: el,
                    timeStamp: new Date().toString(),
                    error: error.name,
                    message: error.message,
                    stack: error.stack,
                    errorPriority: this.errorPriority()[0],// Required
                    selector: selectorType.name
                });
     */
    error = error;

    /**
     * Console logs error array
     */
    displayError() {
        const p0 = [], p1 = [], p2 = [];
        this.error.forEach((el) => {
            if (el.errorPriority === this.errorPriority[0]) p0.push(el);
            else if (el.errorPriority === this.errorPriority[1]) p1.push(el);
            else p2.push(el);
        });
        if (p0.length != 0) p0.forEach(el => {
            this.log(el);
        });
        else if (p1.length != 0) p1.forEach(el => {
            this.warn(el);
        });
        else p2.forEach(el => {
            this.logError(el);
        });
    }

    /**
     * Returns errorPriority array
     * @returns {array} errorPriority 
     */
    errorPriority = errorPriority;

    /**
     * Setting the Log 
     * @returns {Function} Console.log(args)
     */
    log = this.debugType.log;

    /**
     * Setting the Clear 
     * @returns {Function} Console.clear()
     */
    clear = this.debugType.clear;

    /**
     * Setting the Warn 
     * @returns {Function} Console.warn(args)
     */
    warn = this.debugType.warn;

    /**
     * Setting the Error 
     * @returns {Function} Console.error(args)
     */
    logError = this.debugType.error;

    /**
     * Setting the Dir 
     * @returns {Function} Console.dir(args)
     */
    dir = this.debugType.dir;

    /**
    * Setting the Alert 
    * @returns {Function} alert(args)
    */
    alert = this.debugType.alert;

    /**
     * Setting the trace 
     * @returns {Function} Console.trace(args)
     */
    trace = this.debugType.trace;
}