import { DOM, Element, Select } from "../Dom/Dom.js";
import { ClassFeature } from "../Dom/DomElements/ElementsFeatures/ClassFeature.js";
import { jsonDataSet } from './appDetails.js';
/**
 * App Class @version 1.0
 *  
 * Made with ❤️ By Dibesh Raj Subedi(https://github.com/itSubeDibesh)
 * 
 * Sets up the App Elements in DOM
 * @prop setAppDetails()
 * @function init()
 * @prop setStatus()
 * @prop setOfline()
 * @prop setOnline()
 * @function copyClipBoard()
 * @prop addDomEvents()
 * @prop setCalculatorElements()
 * @prop showCopyClipboard()
 * @prop hideCopyClipboard()
 * @prop setSVG()
 * @function addToHistory()
 * @function clearHistory()
 * @prop appEnvironments()
 * @prop darkTheme()
 * @prop lightTheme()
 * @prop theme()
 * @function initTheme()
 */
export class App extends DOM {
    /**
     * Initialize Application and its Elements
     */
    constructor() {
        super(DOM);
        this.displayError();
        this.appInformation = jsonDataSet.appInformation;
        this.app = this.pick("app");
        this.calcButtons = {};
        this.calcButtons.allButtons = [];
        this.calcButtons.operatorButtons = [];
        this.calcButtons.superButtons = [];
        this.calcButtons.numberButtons = [];
        this.offlineDiv = this.pick("offline");
        this.offlineDiv.style.display = 'none';
        this.log(`|-> App ready to initialize.`);
    }

    /**
     * Populate App Details in Dom
     */
    setAppDetails = () => {
        const
            appDetails = this.pick("appDetails"), about = new Element("p");
        about.setInnerHTML(`
            <img src="./Assets/Images/favicon-32.png" class="pb-1"
            alt="Logo" height="20"> ${this.appInformation.appName} <br>
            Version : ${this.appInformation.version} <br>
            Github : <a href="${this.appInformation.github.link}">${this.appInformation.github.name}</a><br>
            Android : <a href="${this.appInformation.android.link}"> ${this.appInformation.android.name} </a><br>
            IOS : <a href="${this.appInformation.ios.link}"> ${this.appInformation.ios.name} </a><br>
            Windows : <a href="${this.appInformation.windows.link}"> ${this.appInformation.windows.name} </a><br>
            Mac : <a href="${this.appInformation.mac.link}"> ${this.appInformation.mac.name} </a><br>
            Linux : <a href="${this.appInformation.linux.link}"> ${this.appInformation.linux.name} </a><br>
            Browser Extension : <a href="${this.appInformation.extension.link}"> ${this.appInformation.extension.name} </a><br>
        `);
        about.insertTo(appDetails);
    }

    /**
     * Initialize app 
     */
    init = () => {
        this.log(`|-> Initializing App using [${app.id.toUpperCase()} ID]`);
        this.setAppDetails();
        this.addDomEvents();
        this.setCalculatorElements();
        this.log(`|-> App Initialization Completed at [${new Date().toString('HH:mm:ss.sss')}]`);
        this.log(`|-> App Ready To Use`);
    }

    /**
     * Sets the Application Status at First Load
     */
    setStatus = () => {
        this.status = this.pick("status");
        this.status.classList.add('badge');
        this.status.classList.add('badge-success');
        this.status.innerText = navigator.onLine ? "Online" : "Offline";
        this.log(`|-> Setting Application Status [${(navigator.onLine ? "Online" : "Offline").toUpperCase()}]`);
    }

    /**
     * Sets Application to Offline if no internet connection is detected
     */
    setOfline = () => {
        this.status = this.pick("status");
        this.status.classList.replace('badge-success', 'badge-danger');
        this.status.innerText = "Offline";
        this.offlineDiv.style.display = 'block';
        this.app.style.display = 'none';
        this.log(`| |-> Application Offline.`);
    }

    /**
    * Sets Application to Online if internet connection is detected
    */
    setOnline = () => {
        this.status = this.pick("status");
        this.status.classList.replace('badge-danger', 'badge-success');
        this.status.innerText = "Online";
        this.offlineDiv.style.display = 'none';
        this.app.style.display = 'block';
        this.log(`| |-> Application Online.`);
    }

    /**
     * Coppies to Clipboard and shows coppied to clipboard div
     */
    copyClipBoard = () => {
        const elements = document.querySelectorAll(".copyToMyClipBoard");
        elements.forEach(el => {
            el.addEventListener("click", (ev) => {
                this.copyToClipboard(el.previousSibling.previousSibling.children[1].innerText);
                this.showCopyClipboard();
                setTimeout(() => {
                    this.hideCopyClipboard();
                }, 1000);
            })
        });
    }

    /**
     * Sets All the Dom Events
     */
    addDomEvents = () => {

        /**
        * Triggers when the Dom is Loaded
        */
        addEventListener("load", (event) => {
            // Set The App Status When App is Loaded
            this.setStatus();
        });

        /**
         * Triggers when no internet connection is detected
         */
        addEventListener("offline", (event) => {
            this.setOfline();
        });

        /**
         * Triggers when internet connection is detected
         */
        addEventListener("online", (event) => {
            this.setOnline();
        });

        /**
         * Clears Up The History
         */
        this.pick("clearhistory").addEventListener("click", this.clearHistory);

    }

    /**
     * Sets Calculator elements in Calculator Div
     */
    setCalculatorElements = () => {
        //#region Set Variabes and Constant To Set Calculator Elements on Dom
        let
            buttonMainColumns = [],
            buttonRows = [],
            buttonElementsCol = [],
            buttons = [];

        const
            calculatorButton = jsonDataSet.calculatorButton,

            aboutSvg = new Select().pick('aboutSvg'),
            settingSvg = new Select().pick('settingSvg'),
            historySvg = new Select().pick('historySvg'),
            themeSvg = new Select().pick('themeSvg'),
            calculatorDiv = new Select().pick("calculatorDiv"),
            author = new Select().pick('author'),

            calculatorInputCol = new Element("div"),
            calculatorInputColHeight = new Element("div"),
            calculatorInput = new Element("input"),
            coppiedToClipBoardMain = new Element("div"),
            coppiedToClipBoard = new Element("div"),
            authorLink = new Element("a"),
            onlineStats = new Element("span")
            ;
        //#endregion

        //#region  Setting Calculator input
        calculatorInputCol.add("col-12 pb-5");
        calculatorInputColHeight.add("h-200");
        calculatorInput.add("w-100 h-100 text-right pr-3 bg-transparent border border-danger");
        calculatorInput.setAttribute(jsonDataSet.calculatorInputAttributes);

        calculatorInput.insertTo(calculatorInputColHeight);
        calculatorInputColHeight.insertTo(calculatorInputCol);
        calculatorInputCol.insertTo(calculatorDiv);
        //#endregion

        //#region  Setting Calculator Buttons 
        for (let index = 0; index < calculatorButton.length; index++) {
            // Create div and assign class to root div
            buttonMainColumns[index] = new Element("div");
            buttonMainColumns[index].add("col-12 pb-1");

            // Create a row and assign class to row
            buttonRows[index] = new Element("div");
            buttonRows[index].add("row");

            // Insert all the buttons on row with a div
            for (let indexJ = 0; indexJ < calculatorButton[index].length; indexJ++) {
                buttonElementsCol[indexJ] = new Element("div");
                buttonElementsCol[indexJ].add(calculatorButton[index][indexJ].buttonColSize);

                buttons[indexJ] = new Element('button');
                buttons[indexJ].add(calculatorButton[index][indexJ].class);
                buttons[indexJ].setAttribute([
                    { "Key": 'id', "Value": calculatorButton[index][indexJ].identity },
                    { "Key": 'name', "Value": calculatorButton[index][indexJ].identity },
                ]);
                this.calcButtons.allButtons.push(calculatorButton[index][indexJ].identity)
                buttons[indexJ].setInnerText(calculatorButton[index][indexJ].value)

                buttons[indexJ].insertTo(buttonElementsCol[indexJ]);
                buttonElementsCol[indexJ].insertTo(buttonRows[index]);
            }
            // Append row and column to root div
            buttonRows[index].insertTo(buttonMainColumns[index]);

            // Append root div calculator div
            buttonMainColumns[index].insertTo(calculatorDiv);
        }
        buttonMainColumns = null; buttonRows = null;
        buttonElementsCol = null; buttons = null;
        //#endregion

        //#region  Copy To Clipboard added
        coppiedToClipBoardMain.add("col-12 pb-1 text-center");
        coppiedToClipBoardMain.setAttribute([{ "Key": "id", "Value": "copiedToClipboard" }]);
        coppiedToClipBoardMain.element.style.display = "none";

        coppiedToClipBoard.add("badge-success rounded-pill");
        coppiedToClipBoard.setInnerText("Copied To Clipboard");

        coppiedToClipBoard.insertTo(coppiedToClipBoardMain);
        coppiedToClipBoardMain.insertTo(calculatorDiv);
        //#endregion

        //#region Setting author Info
        onlineStats.add("badge badge-success");
        onlineStats.setAttribute([{ Key: 'Id', Value: 'status' }]);
        onlineStats.setInnerText("Online");

        authorLink.setAttribute(jsonDataSet.authorDetails.attributes);
        authorLink.setInnerHTML(jsonDataSet.authorDetails.authorName);

        author.innerHTML += "Made with ❤️ by "
        author.append(authorLink.element);
        author.innerHTML += " "
        author.append(onlineStats.element);
        //#endregion

        //#region Setting SVG to Elements
        this.setSVG(aboutSvg, "aboutSvg");
        this.setSVG(settingSvg, "settingSvg");
        this.setSVG(historySvg, "historySvg");
        this.setSVG(themeSvg, "themeSvg");
        //#endregion

        //#region Seperate Buttons By Category
        this.calcButtons.allButtons.forEach(el => {
            if (el[0].includes("O")) {
                this.calcButtons.operatorButtons.push(el)
            }
            if (el[0].includes("S")) {
                this.calcButtons.superButtons.push(el)
            }
            if (el[0].includes("N")) {
                this.calcButtons.numberButtons.push(el)
            }
        });
        //#endregion

        this.log(`| |-> Initialized Calculator Elements using [${calculatorDiv.id.toUpperCase()} ID]`);
    }

    /**
     * Shows Copied to clipboard
     */
    showCopyClipboard = () => {
        this.pick("copiedToClipboard").style.display = "block";
    }

    /**
    * Hide Copied to clipboard
    */
    hideCopyClipboard = () => {
        this.pick("copiedToClipboard").style.display = "none";
    }

    /**
     * Sets the Svg to element array from json Data Set Svg Name
     * @param {HTMLElement} elementArray 
     * @param {String} jsonDataSetSvgName 
     */
    setSVG = (elementArray, jsonDataSetSvgName) => {
        for (let index = 0; index < elementArray.length; index++) {
            elementArray[index].prepend(this.parseSvgStringToSVG(jsonDataSet.svg[jsonDataSetSvgName]));
        }
    }

    /**
     * Appends the Equation and result to History
     * @param {String} equation 
     * @param {String} result 
     */
    addToHistory = (equation, result) => {
        const
            history = new Select().pick("historyDataSet");
        if (typeof (history) === "object") {
            const li = `<li class="mb-2">
               <code class="eqation bg-dark text-light p-1">
                    <span class="operation">${equation}</span> = <span class="operationResult">${result}</span>
                </code>
            &nbsp; &nbsp;
            <a class="badge badge-pill badge-primary  copyToMyClipBoard" href="#">Copy Result</a>
            </li>`;
            history.append(this.parseStringToHTML(li));
        } else {
            throw `Element Not Found of Type Error`;
        }
        // this.log(`| |-> Added [${equation} = ${result}] to History.`);
    }

    /**
     * Clears Out The history
     */
    clearHistory = () => {
        this.pick("historyDataSet").innerHTML = "";
    }

    /**
     * Returns AppEnvironments object
     */
    appEnvironments = {
        "Production": true,
        "Development": false
    }

    /**
     * Sets App Environment to Production or Development.
     * @param {bool} environment 
     */

    setEnvironments = (environment) => {
        const
            oldLog = this.log,
            oldError = this.logError;
        if (environment) {
            // Clears Out All The Console Logs and Disables Console.log
            this.clear()
            this.log("|-> Production Mode Enabled");
            this.disableLog();
            this.disableError();
            this.log = null;
            this.logError = null;
        } else {
            this.log = oldLog;
            this.logError = oldError;
            this.log("|-> Development Mode Enabled");
            this.enableLog();
            this.enableError();
        }
    }

    /**
    * Sets Dark Theme
    */
    darkTheme = () => {
        // Change Border and Bg color 
        for (let index = 0; index < this.pick("themeChanger").length; index++) {
            new ClassFeature(this.pick("themeChanger")[index]).add("bg-dark border-light");
        }
        // CHange Ol Bg Color To Secondary
        this.pick("ol")[0].classList.add("bg-secondary");
        // Change Text color To Light
        this.pick("result").classList.add("text-light");
        // Change Card Color
        for (let index = 0; index < this.pick("card").length; index++) {
            new ClassFeature(this.pick("card")[index]).add("bg-dark text-light border-light")
        }
    }

    /**
     * Sets Light Theme
     */
    lightTheme = () => {
        // Change Border and Bg color 
        for (let index = 0; index < this.pick("themeChanger").length; index++) {
            new ClassFeature(this.pick("themeChanger")[index]).remove("bg-dark border-light");
        }
        // CHange Ol Bg Color To Secondary
        this.pick("ol")[0].classList.remove("bg-secondary");
        // Change Text color To Light
        this.pick("result").classList.remove("text-light");
        // Change Card Color
        for (let index = 0; index < this.pick("card").length; index++) {
            new ClassFeature(this.pick("card")[index]).remove("bg-dark text-light border-light")
        }
    }

    /**
     * Sets The color
     * @param {bool} color 
     */
    theme = (color = "light") => {
        // Set To Local Storage
        localStorage.setItem("theme", color);
        // Check and Trigger Correct Color
        localStorage.getItem("theme") === "light" ? this.lightTheme() : this.darkTheme();
    }

    /**
     * Init Theme
     * @param {bool} color 
     */
    initTheme = () => {
        const myThis = this;
        // Set Trigger
        this.pick("themeLight").addEventListener('click', function () { myThis.theme("light"); });
        this.pick("themeDark").addEventListener('click', function () { myThis.theme("dark"); });
        // Validate Local Storage
        localStorage.getItem("theme") === "dark" ? this.theme("dark") : this.theme();
    }
}