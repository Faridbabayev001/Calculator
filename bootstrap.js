const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

let win;

function createWindow() {
    // Create browser window
    win = new BrowserWindow({ 
        'width': 325,
		'height': 324,
		'max-width': 325,
		'max-height': 324,
		'min-width': 325,
		'min-height': 324
    });
    // Load index.html
    win.loadURL(url.format({
        pathname: path.join(__dirname, './index.html'),
        protocol: 'file',
        slashes: true
    }));

    // win.openDevTools();


    win.on('closed', () => {
        win = null;
    });
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', () => {

    if (win === null) {
        createWindow()
    }
})