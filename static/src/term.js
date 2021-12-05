var terminal_emulator = document.getElementById('terminal-emulator')
var ipcRenderer = require('electron').ipcRenderer
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
    document.getElementById('kitty-info').classList.add('d-none')
    document.getElementById('alacritty-info').classList.remove('d-none')
  } else if (terminal_emulator.value == 'kitty') {
    document.getElementById('alacritty-info').classList.add('d-none')
    document.getElementById('kitty-info').classList.remove('d-none')
  }
})