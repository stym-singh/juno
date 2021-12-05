#!/bin/bash

TERMINAL_EMULATOR="$(cat "$1" | jq -r '.term.terminal_emulator')"
DESKTOP_ENV="$(cat "$1" | jq -r '.desk_env.desk_env')"
TIL_WIN="$(cat "$1" | jq -r '.twm.tiling_window_manager')"
LAUNCHER="$(cat "$1" | jq -r '.launcher.program_launcher')"
SPOTIFY="$(cat "$1" | jq -r '.package_install.spotify')"
FIREFOX="$(cat "$1" | jq -r '.package_install.firefox')"
DISCORD="$(cat "$1" | jq -r '.package_install.discord')"
VSCODE="$(cat "$1" | jq -r '.dev_tools.vscode')"
NEOVIM="$(cat "$1" | jq -r '.dev_tools.neovim')"
GEANY="$(cat "$1" | jq -r '.dev_tools.geany')"
SUBLIME="$(cat "$1" | jq -r '.dev_tools.sublime')"

git clone https://aur.archlinux.org/yay.git $HOME
cd yay
makepkg -si

cd $HOME && rm -rf yay

sudo pacman -S --noconfirm --needed flatpak $TERMINAL_EMULATOR $DESKTOP_ENV $TIL_WIN

if [[ $SPOTIFY = "true" ]];then
    flatpak install flathub com.spotify.Client
fi

if [[ $FIREFOX = "true" ]];then
    sudo pacman -S --noconfirm $FIREFOX
fi

if [[ $DISCORD = "true" ]];then
    flatpak install flathub com.discordapp.Discord
fi

if [[ $VSCODE == "true" ]];then
    sudo pacman -S --noconfirm --needed $VSCODE
fi

if [[ $NEOVIM == "true" ]];then
    sudo pacman -S --noconfirm --needed neovim
fi

if [[ $GEANY == "true" ]];then
    sudo pacman -S --noconfirm --needed geany
fi

if [[ $SUBLIME == "true" ]];then
    flatpak install flathub com.sublimetext.three
fi
