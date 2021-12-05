var ipcRenderer = require('electron').ipcRenderer
const nextWindow = document.getElementById('nextbutton')
const prevWindow = document.getElementById('prevbutton')

prevWindow.addEventListener('click', () => {
    ipcRenderer.send('welcome');
})

nextWindow.addEventListener('click', () => {
    data = {};
    data.font_name = document.getElementById("font-name").value;
    data.theme = document.getElementById("theme").value;
    data.font_size = Number.parseInt(document.getElementById("font-size").value);
    console.log(data);
    ipcRenderer.send('term', data);
})
