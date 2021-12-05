const { app, BrowserWindow } = require('electron')
const path = require('path')
const ipc = require('electron').ipcMain
var mainWindow
var userchoice
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
  userchoice = {};
  mainWindow.loadFile('static/font_theme.html')
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

ipc.on('font-theme', (e) => {
  userchoice = {}
  mainWindow.loadFile('static/defaults.html')
})

ipc.on('welcome', (e) => {
  userchoice = {}
  mainWindow.loadFile('static/welcome.html')
})

ipc.on('term', (e, arg = null) => {
  if (!(arg === null)) {
    userchoice.font_zshptheme = arg
    console.log(userchoice)
  }
  mainWindow.loadFile('static/term.html')
})

ipc.on('zshp', (e, arg = null) => {
  if (!(arg === null)) {
    userchoice.term = arg
    console.log(userchoice)
  }

})

ipc.on('desk_env', (e, arg = null) => {
  if (!(arg === null)) {
    userchoice.zshp = arg
    console.log(userchoice)
  }
  mainWindow.loadFile('static/desk_env.html')
})

ipc.on('twm', (e, arg = null) => {
  if (!(arg === null)) {
    userchoice.desk_env = arg
    console.log(userchoice)
  }
})

ipc.on('launcher', (e, arg = null) => {
  if (!(arg === null)) {
    userchoice.twm = arg
    console.log(userchoice)
  }
})

ipc.on('package_install', (e, arg = null) => {
  if (!(arg === null)) {
    userchoice.launcher = arg
    console.log(userchoice)
  }
})


ipc.on('dev_tools', (e, arg = null) => {
  if (!(arg === null)) {
    userchoice.package_install = arg
    console.log(userchoice)
  }
})

ipc.on('finish', (e, arg = null) => {
  if (!(arg === null)) {
    userchoice.dev_tools = arg
  }
})