var ipcRenderer = require('electron').ipcRenderer
var tiling_window_manager = document.getElementById('tiling-window-manager')
const nextWindow = document.getElementById('nextbutton')
const prevWindow = document.getElementById('prevbutton')

nextWindow.addEventListener('click', () => {
  data = {}
  data.tiling_window_manager = document.getElementById('tiling-window-manager').value;
  ipcRenderer.send('launcher', data);
})

prevWindow.addEventListener('click', () => {
  ipcRenderer.send('desk_env')
})

tiling_window_manager.addEventListener('change', () => {
  if (tiling_window_manager.value == 'bspwm') {
    document.getElementById('i3wm-info').style.display = "none"
    document.getElementById('bspwm-info').style.display = "block"
  } else if (tiling_window_manager.value == 'i3wm') {
    document.getElementById('bspwm-info').style.display = "none"
    document.getElementById('i3wm-info').style.display = "block"
  } else if (tiling_window_manager.value == 'none') {
    document.getElementById('bspwm-info').style.display = "none"
    document.getElementById('i3wm-info').style.display = "none"
  }
})