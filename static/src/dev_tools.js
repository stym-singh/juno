var dev_tools = document.getElementById('dev-tools')
var ipcRenderer = require('electron').ipcRenderer
const nextWindow = document.getElementById('nextbutton')
const prevWindow = document.getElementById('prevbutton')

nextWindow.addEventListener('click', () => {
    data = {};
    data.vscode = document.getElementById('vscode').checked;
    data.neovim = document.getElementById('neovim').checked;
    data.geany = document.getElementById('geany').checked;
    data.sublime = document.getElementById('sublime').checked;
    ipcRenderer.send('finish', data);
})  

prevWindow.addEventListener('click', () => {
    ipcRenderer.send('package_install');
})