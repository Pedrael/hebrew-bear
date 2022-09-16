const path = require('path');

const { app, BrowserWindow, ipcMain, Menu, MenuItem, screen } = require('electron');
const isDev = require('electron-is-dev');

const sqlite3 = require('sqlite3');

const template = require('./menu').menuTemplate;

const database = new sqlite3.Database('./public/words.sqlite3', (err) => {
    if (err) console.error('Database opening error: ', err);
});

ipcMain.on('asynchronous-message', (event, arg) => {
    const sql = arg;
    database.all(sql, (err, rows) => {
        event.reply('asynchronous-reply', (err && err.message) || rows);
    });
});

function createWindow() {

  // Create a window that fills the screen's available work area.
  const primaryDisplay = screen.getPrimaryDisplay()
  const { width, height } = primaryDisplay.workAreaSize

  // Create the browser window.
  const win = new BrowserWindow({
    width: width,
    height: height,
    icon: __dirname + '/favicon.ico',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    },
  });

  // and load the index.html of the app.
  // win.loadFile("index.html");
  win.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`
  );
  // Open the DevTools.
  if (isDev) {
    win.webContents.openDevTools({ mode: 'detach' });
  }
}
// Create Menu from template
const menu = Menu.buildFromTemplate([]);
Menu.setApplicationMenu(menu);

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }

  ipcMain.on("mainWindowLoaded", function () {
		let result = knex.select("FirstName").from("User")
		result.then(function(rows){
			mainWindow.webContents.send("resultSent", rows);
		})
	});
});