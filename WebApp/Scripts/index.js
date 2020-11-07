// Starting Server :  SUDO /Applications/XAMPP/xamppfiles/xampp start
// Importing App and Calculator Classes for the application
import { App } from './App/App.js';
import { Calculator } from './Calculator/Calculator.js';

addEventListener("load", function (e) {
    // Variable Initialization and object initialization
    const
        app = new App(),
        calculator = new Calculator(
            app.calcButtons, app.addToHistory, app.copyClipBoard,app.clearHistory
        );

    // Initialize app elements and display in DOM
    app.init();

    // Initialize Calculator rules
    calculator.init();

    // Clears Out All The Console Logs and Disables Console.log
    // app.clear()
    // app.disableLog();
});

