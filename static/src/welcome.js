var ipcRenderer = require('electron').ipcRenderer
const nextWindow = document.getElementById('nextbutton')

nextWindow.addEventListener('click', () => {
  ipcRenderer.send('term')
})