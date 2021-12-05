var desktop_environment = document.getElementById('desktop-environment')
var ipcRenderer = require('electron').ipcRenderer
const nextWindow = document.getElementById('nextbutton')
const prevWindow = document.getElementById('prevbutton')

nextWindow.addEventListener('click', () => {
  ipcRenderer.send('')
})

prevWindow.addEventListener('click', () => {
  ipcRenderer.send('term')
})

desktop_environment.addEventListener('change', () => {
  if (desktop_environment.value == 'gnome') {
    document.getElementById('kde-info').classList.add('d-none')
    document.getElementById('xfce-info').classList.add('d-none')
    document.getElementById('gnome-info').classList.remove('d-none')
  } else if (desktop_environment.value == 'kde') {
    document.getElementById('gnome-info').classList.add('d-none')
    document.getElementById('xfce-info').classList.add('d-none')
    document.getElementById('kde-info').classList.remove('d-none')
  } else if (desktop_environment.value == 'xfce') {
    document.getElementById('gnome-info').classList.add('d-none')
    document.getElementById('kde-info').classList.add('d-none')
    document.getElementById('xfce-info').classList.remove('d-none')
  }
})