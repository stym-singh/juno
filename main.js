const { app, BrowserWindow } = require('electron')
const path = require('path')
const { spawn } = require('child_process');
const ipc = require('electron').ipcMain
var mainWindow
var userchoice
var fs = require('fs');

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    },
    minHeight: 800,
    minWidth: 800,
  })
  mainWindow.setMenuBarVisibility(false)
  // mainWindow.webContents.openDevTools();
  userchoice = {};
  mainWindow.loadFile('static/welcome.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

ipc.on('welcome', (e) => {
  userchoice = {}
  mainWindow.loadFile('static/welcome.html')
})

ipc.on('font_theme', (e) => {
  userchoice = {}
  mainWindow.loadFile('static/font_theme.html')
})

ipc.on('term', (e, arg = null) => {
  if (!(arg === null)) {
    userchoice.font_theme = arg
  }
  mainWindow.loadFile('static/term.html')
})

ipc.on('desk_env', (e, arg = null) => {
  if (!(arg === null)) {
    userchoice.term = arg
  }
  mainWindow.loadFile('static/desk_env.html')
})

ipc.on('twm', (e, arg = null) => {
  if (!(arg === null)) {
    userchoice.desk_env = arg
  }
  mainWindow.loadFile('static/twm.html')
})

ipc.on('launcher', (e, arg = null) => {
  if (!(arg === null)) {
    userchoice.twm = arg
  }
  mainWindow.loadFile('static/launcher.html')
})

ipc.on('package_install', (e, arg = null) => {
  if (!(arg === null)) {
    userchoice.launcher = arg
  }
  mainWindow.loadFile('static/package_install.html')
})


ipc.on('dev_tools', (e, arg = null) => {
  if (!(arg === null)) {
    userchoice.package_install = arg
  }
  mainWindow.loadFile('static/dev_tools.html')
})

ipc.on('finish', (e, arg = null) => {
  if (!(arg === null)) {
    userchoice.dev_tools = arg
  }
  console.log(userchoice);
  mainWindow.loadFile('static/finish.html')
  var json = JSON.stringify(userchoice);
  fs.writeFile('config.json', json, 'utf8',()=>{});
  // const ls = spawn('gnome-terminal', ['--', 'bash' , './script.sh']);
  
})