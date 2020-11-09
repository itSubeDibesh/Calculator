/**
 * Calculator Web App @version 1.0
 * 
 * Made with ❤️ By Dibesh Raj Subedi(https://github.com/itSubeDibesh)
 */

// Importing App and Calculator Classes for the application
import { App } from './App/App.js';
import { Calculator } from './Calculator/Calculator.js';

addEventListener("load", function (e) {
    // Variable Initialization and object initialization
    const
        app = new App(),
        calculator = new Calculator(
            app.calcButtons, app.addToHistory, app.copyClipBoard, app.clearHistory
        );

    // Initialize app elements and display in DOM
    app.init();

    // Initializes App theme
    app.initTheme();

    // Initialize Calculator rules
    calculator.init();

    // Set Application Environment Mode [ Development or Production ]
    app.setEnvironments(app.appEnvironments.Production);
});