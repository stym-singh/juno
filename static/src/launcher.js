var program_launcher = document.getElementById('program-launcher')
var ipcRenderer = require('electron').ipcRenderer
const nextWindow = document.getElementById('nextbutton')
const prevWindow = document.getElementById('prevbutton')

nextWindow.addEventListener('click', () => {
  data = {}
  data.program_launcher = document.getElementById('program-launcher').value
  ipcRenderer.send('package_install' , data);
})

prevWindow.addEventListener('click', () => {
  ipcRenderer.send('launcher');
})

program_launcher.addEventListener('change', () => {
  if (program_launcher.value == 'rofi') {
    document.getElementById('ulauncher-info').classList.add('d-none')
    document.getElementById('rofi-info').classList.remove('d-none')
  } else if (program_launcher.value == 'ulauncher') {
    document.getElementById('rofi-info').classList.add('d-none')
    document.getElementById('ulauncher-info').classList.remove('d-none')
  }
})