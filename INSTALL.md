# Installation
A custom installation script has been provided, you will need to have node installed.


## Installer

Run the installation script: ./install.sh

## Github Integration
Remember to add your SSH key to your github account with each new hardware device.

```shell

$ ssh-keygen -t ed25519 -C "your_email@example.com"
$ eval "$(ssh-agent -s)"
$ ssh-add ~/.ssh/id_ed25519
$ xclip -selection clipboard < ~/.ssh/id_ed25519.pub # or just cat ~/.ssh/id_ed25519.pub (as it is short)

```
Add the key Under Settings > SSH and GPG keys.
