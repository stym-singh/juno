var ipcRenderer = require('electron').ipcRenderer
var desktop_environment = document.getElementById('desktop-environment')
const nextWindow = document.getElementById('nextbutton')
const prevWindow = document.getElementById('prevbutton')

nextWindow.addEventListener('click', () => {
  data = {}
  data.desk_env = document.getElementById('desktop-environment').value;
  ipcRenderer.send('twm', data);
})

prevWindow.addEventListener('click', () => {
  ipcRenderer.send('term')
})

desktop_environment.addEventListener('change', () => {
  if (desktop_environment.value == 'gnome') {
    document.getElementById('kde-info').style.display = "none"
    document.getElementById('xfce-info').style.display = "none"
    document.getElementById('gnome-info').style.display = "block"
  } else if (desktop_environment.value == 'kde') {
    document.getElementById('gnome-info').style.display = "none"
    document.getElementById('xfce-info').style.display = "none"
    document.getElementById('kde-info').style.display = "block"
  } else if (desktop_environment.value == 'xfce') {
    document.getElementById('gnome-info').style.display = "none"
    document.getElementById('kde-info').style.display = "none"
    document.getElementById('xfce-info').style.display = "block"
  }
})