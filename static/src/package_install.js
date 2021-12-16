var ipcRenderer = require('electron').ipcRenderer
var package_install = document.getElementById('package-install')
const nextWindow = document.getElementById('nextbutton')
const prevWindow = document.getElementById('prevbutton')

nextWindow.addEventListener('click', () => {
    data = {};
    data.chromium = document.getElementById('chromium').checked;
    data.firefox = document.getElementById('firefox').checked;
    data.spotify = document.getElementById('spotify').checked;
    data.vlc = document.getElementById('vlc').checked;
    data.steam = document.getElementById('steam').checked;
    data.discord = document.getElementById('discord').checked;
    data.gimp = document.getElementById('gimp').checked;
    data.obs_studio = document.getElementById('obs-studio').checked;
    data.zoom = document.getElementById('zoom').checked;
    data.microsoft_teams = document.getElementById('microsoft-teams').checked;
    data.telegram = document.getElementById('telegram').checked;
    data.libreoffice = document.getElementById('libreoffice').checked;
    ipcRenderer.send('dev_tools', data);
})

prevWindow.addEventListener('click', () => {
    ipcRenderer.send('launcher');
})