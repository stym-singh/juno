var package_install = document.getElementById('package-install')
var ipcRenderer = require('electron').ipcRenderer
const nextWindow = document.getElementById('nextbutton')
const prevWindow = document.getElementById('prevbutton')

nextWindow.addEventListener('click', () => {
    data = {};
    data.spotify = document.getElementById('spotify').checked;
    data.firefox = document.getElementById('firefox').checked;
    data.discord = document.getElementById('discord').checked;
    ipcRenderer.send('dev_tools' , data);
})

prevWindow.addEventListener('click', () => {
    ipcRenderer.send('launcher');
})