var dev_tools = document.getElementById('dev-tools')
var ipcRenderer = require('electron').ipcRenderer
const nextWindow = document.getElementById('nextbutton')
const prevWindow = document.getElementById('prevbutton')

nextWindow.addEventListener('click', () => {
    data = {};
    data.vs_code = document.getElementById('vs-code').checked;
    data.atom = document.getElementById('atom').checked;
    data.brackets = document.getElementById('brackets').checked;
    data.geany = document.getElementById('geany').checked;
    data.sublime_text = document.getElementById('sublime-text').checked;
    data.neovim = document.getElementById('neovim').checked;
    data.gnu_emacs = document.getElementById('gnu-emacs').checked;
    data.android_studio = document.getElementById('android-studio').checked;
    data.clion = document.getElementById('clion').checked;
    data.intellij_idea_community = document.getElementById('intellij-idea-community').checked;
    data.intellij_pycharm_community = document.getElementById('intellij-pycharm-community').checked;
    data.webstorm = document.getElementById('webstorm').checked;
    data.postman = document.getElementById('postman').checked;
    data.insomnia = document.getElementById('insomnia').checked;
    ipcRenderer.send('finish', data);
})

prevWindow.addEventListener('click', () => {
    ipcRenderer.send('package_install');
})