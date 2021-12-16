var ipcRenderer = require('electron').ipcRenderer
var program_launcher = document.getElementById('program-launcher')
const nextWindow = document.getElementById('nextbutton')
const prevWindow = document.getElementById('prevbutton')

nextWindow.addEventListener('click', () => {
  data = {}
  data.program_launcher = document.getElementById('program-launcher').value
  ipcRenderer.send('package_install', data);
})

prevWindow.addEventListener('click', () => {
  ipcRenderer.send('launcher');
})

program_launcher.addEventListener('change', () => {
  if (program_launcher.value == 'rofi') {
    document.getElementById('ulauncher-info').style.display = "none"
    document.getElementById('rofi-info').style.display = "block"
  } else if (program_launcher.value == 'ulauncher') {
    document.getElementById('rofi-info').style.display = "none"
    document.getElementById('ulauncher-info').style.display = "block"
  } else if (program_launcher.value == 'none') {
    document.getElementById('rofi-info').style.display = "none"
    document.getElementById('ulauncher-info').style.display = "none"
  }
})