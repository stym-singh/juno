#!/bin/bash

TERMINAL_EMULATOR="$(cat "$1" | jq -r '.term.terminal_emulator')"
DESKTOP_ENV="$(cat "$1" | jq -r '.desk_env.desk_env')"
TIL_WIN="$(cat "$1" | jq -r '.twm.tiling_window_manager')"
LAUNCHER="$(cat "$1" | jq -r '.launcher.program_launcher')"

###########################################################

SPOTIFY="$(cat "$1" | jq -r '.package_install.spotify')"
FIREFOX="$(cat "$1" | jq -r '.package_install.firefox')"
DISCORD="$(cat "$1" | jq -r '.package_install.discord')"
GIMP="$(cat "$1" | jq -r '.package_install.gimp')"
OBS_STUDIO="$(cat "$1" | jq -r '.package_install.obs_studio')"
ZOOM="$(cat "$1" | jq -r '.package_install.zoom')"
MICRO_TEAM="$(cat "$1" | jq -r '.package_install.microsoft_teams')"
TELEGRAM="$(cat "$1" | jq -r '.package_install.telegram')"
LIBREOFFICE="$(cat "$1" | jq -r '.package_install.libreoffice')"
CHROMIUM="$(cat "$1" | jq -r '.package_install.chromium')"
VLC="$(cat "$1" | jq -r '.package_install.vlc')"
STEAM="$(cat "$1" | jq -r 'package_install.steam')"

##########################################################

VSCODE="$(cat "$1" | jq -r '.dev_tools.vscode')"
BRACKETS="$(cat "$1" | jq -r '.dev_tools.atom')"
NEOVIM="$(cat "$1" | jq -r '.dev_tools.neovim')"
GEANY="$(cat "$1" | jq -r '.dev_tools.geany')"
SUBLIME="$(cat "$1" | jq -r '.dev_tools.sublime_text')"
EMACS="$(cat "$1" | jq -r '.dev_tools.gnu_emacs')"
AND_STUDIO="$(cat "$1" | jq -r '.dev_tools.android_studio')"
CLION="$(cat "$1" | jq -r '.dev_tools.clion')"
IDC="$(cat "$1" | jq -r '.dev_tools.intellij_idea_community')"
IPC="$(cat "$1" | jq -r '.dev_tools.intellij_pycharm_community')"
WEBSTORM="$(cat "$1" | jq -r '.dev_tools.webstorm')"
POSTMAN="$(cat "$1" | jq -r '.dev_tools.webstorm')"
INSOMNIA="$(cat "$1" | jq -r '.dev_tools.insomnia')"

git clone https://aur.archlinux.org/yay.git $HOME
cd yay
makepkg -si

cd $HOME && rm -rf yay
sudo pacman -S --noconfirm --needed flatpak

if [[ "$TERMINAL_EMULATOR" != "none" ]]; then
    sudo pacman -S --noconfirm --needed $TERMINAL_EMULATOR
fi

if [[ "$DESKTOP_ENV" != "none" ]]; then
    sudo pacman -S --noconfirm --needed $DESKTOP_ENV
fi

if [[ "$TIL_WIN" != "none" ]]; then
    sudo pacman -S --noconfirm --needed $TIL_WIN
fi

if [[ "$LAUNCHER" != "none" ]]; then
    sudo pacman -S --noconfirm --needed $LAUNCHER
fi

#### PACKAGE

if  $CHROMIUM;then
    flatpak install flathub org.chromium.Chromium
fi

if  $SPOTIFY;then
    flatpak install flathub com.spotify.Client
fi

if $FIREFOX;then
    flatpak install flathub org.mozilla.firefox
fi

if $VLC;then
    flatpak install flathub org.videolan.VLC
fi

if $STEAM;then
    flatpak install flathub com.valvesoftware.Steam
fi

if $DISCORD;then
    flatpak install flathub com.discordapp.Discord
fi

if $GIMP;then
    flatpak install flathub org.gimp.GIMP
fi

if $OBS_STUDIO;then
    flatpak install flathub com.obsproject.Studio
fi

if $ZOOM;then
    flatpak install flathub us.zoom.Zoom
fi

if $MICRO_TEAM;then
    flatpak install flathub com.microsoft.Teams
fi

if $LIBREOFFICE;then
    flatpak install flathub org.libreoffice.LibreOffice
fi

if $TELEGRAM;then
    flatpak install flathub org.telegram.desktop
fi

#### DEV TOOLS

if $VSCODE;then
    flatpak install flathub com.visualstudio.code
fi

if $ATOM;then
    flatpak install flathub io.atom.Atom
fi

if $NEOVIM;then
    sudo pacman -S --noconfirm --needed neovim
fi

if $BRACKETS;then
    flatpak install flathub io.brackets.Brackets
fi

if $GEANY;then
    flatpak install flathub org.geany.Geany
fi

if $SUBLIME;then
    flatpak install flathub com.sublimetext.three
fi

if $AND_STUDIO;then
    flatpak install flathub com.google.AndroidStudio
fi

if $EMACS;then
    flatpak install flathub org.gnu.emacs
fi

if $CLION;then
    flatpak install flathub com.jetbrains.CLion
fi

if $IDC; then
    flatpak install flathub com.jetbrains.IntelliJ-IDEA-Community
fi

if $IPC; then
    flatpak install flathub com.jetbrains.PyCharm-Community
fi

if $WEBSTORM; then
    flatpak install flathub com.jetbrains.WebStorm
fi

if $POSTMAN; then
    flatpak install flathub com.getpostman.Postman
fi

if $INSOMNIA; then
    flatpak install flathub rest.insomnia.Insomnia
fi
