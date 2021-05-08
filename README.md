# db
Content Database Root

This is a sample deployment system used in the development of [Eternia]

## Scripts

install.sh build.sh publish.sh and test.sh are the primary control scripts for this system, a bin directory contains some flexible sub-programs.
bin directory is not part of .submodules it is installed separately via install.

## Github Integration

Remember to add your SSH key to your github account.

```shell

$ ssh-keygen -t ed25519 -C "your_email@example.com"
$ eval "$(ssh-agent -s)"
$ ssh-add ~/.ssh/id_ed25519
$ xclip -selection clipboard < ~/.ssh/id_ed25519.pub # or just cat ~/.ssh/id_ed25519.pub (as it is short)

```
Add the key Under Settings > SSH and GPG keys. 

## Note

Test Version Publishes to: https://catpea.github.io/homepage/

## Todo

- [x] Add Bin
- [x] use bowel to dump the latest format of westland warrior and furkies purkies
- [x] fill catpea/westland-warrior and catpea/furkies-purrkies with real content
- [x] run install.sh and update it so that it works, consider testing for nodejs in the installer and exit, same for imagemagick.
- [x] Install catpea/db on raspberry pi

- [ ] Once the installer and build work, run publish to catpea/homepage (homepage is staging)

- [] re-run bowel to keep homepage updated with latest posts.
- [ ] Change template slightly, simplify it.
- [ ] When ready, add catpea/website to the system and actually publish to the live webstite.
- [ ] Delete server, poetry, warrior, and homepage (staging) as not to upset guthub.

[Eternia]: https://www.npmjs.com/package/eternia
