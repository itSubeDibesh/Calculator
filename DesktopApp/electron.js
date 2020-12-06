// Requiring Electron Elements
const { app, BrowserWindow } = require('electron');

// Set App Information
app.setAboutPanelOptions({
    applicationName:'Calculator',
    applicationVersion:'v1.0',
    version:'',
    iconPath: __dirname +'/Assets/Images/favicon.icns',
    copyright:'Copyright © CodeMoker 2020',
    website:'https://www.codemoker.com',
    authors:['Dibesh Raj Subedi'],
})

// Creates a Window
function createWindow() {
    const win = new BrowserWindow({
        width: 400,
        minWidth: 400,
        maxWidth: 400,
        height: 500,
        minHeight: 500,
        transparent: true, 
        titleBarStyle: 'hiddenInset',
        backgroundColor:"rgb(235, 154, 5)",
        icon: __dirname +  '/Assets/Images/favicon.icns',
        webPreferences: {
            nodeIntegration: false
        }
    })
    win.loadFile('index.html');
    win.setFullScreenable(false);
    win.setFullScreen(false);
    win.setMenuBarVisibility(false);
}

app.whenReady().then(createWindow)
app.disableHardwareAcceleration();

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})


