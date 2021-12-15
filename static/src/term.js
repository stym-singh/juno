var ipcRenderer = require('electron').ipcRenderer
var terminal_emulator = document.getElementById('terminal-emulator')
const nextWindow = document.getElementById('nextbutton')
const prevWindow = document.getElementById('prevbutton')

nextWindow.addEventListener('click', () => {
  data = {};
  data.terminal_emulator = document.getElementById("terminal-emulator").value;
  ipcRenderer.send('desk_env', data)
})

prevWindow.addEventListener('click', () => {
  ipcRenderer.send('font_theme')
})

terminal_emulator.addEventListener('change', () => {
  if (terminal_emulator.value == 'alacritty') {
    document.getElementById('kitty-info').style.display = "none"
    document.getElementById('alacritty-info').style.display = "block"
  } else if (terminal_emulator.value == 'kitty') {
    document.getElementById('alacritty-info').style.display = "none"
    document.getElementById('kitty-info').style.display = "block"
  } else if (terminal_emulator.value == 'none') {
    document.getElementById('alacritty-info').style.display = "none"
    document.getElementById('kitty-info').style.display = "none"
  }
})