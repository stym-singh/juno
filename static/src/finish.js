var ipcRenderer = require('electron').ipcRenderer
const nextWindow = document.getElementById('nextbutton')
const prevWindow = document.getElementById('prevbutton')

nextWindow.addEventListener('click', () => {
    ipcRenderer.send('finish');
})

prevWindow.addEventListener('click', () => {
    ipcRenderer.send('dev_tools');
})