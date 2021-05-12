# db
Content Database Root

This is a sample deployment system used in the development of [Eternia]

## IMPORTANT!

During upgrade to v3 a temporary import.sh script is placed in ./db/ use it to sync v2 and v3.

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

##

## Note

Test Version Publishes to: https://catpea.github.io/homepage/

## TODO

- [ ] Run bowel to synchronize data

- [ ] Activate website in .submodules (test but don't push)
- [ ] Activate warrior in .submodules (test but don't push)

- [ ] Multihosting Review
  - [ ] https://vercel.com
  - [ ] https://surge.sh
  - [ ] https://cloudflare.com
  - [ ] https://www.netlify.com
  - [ ] https://about.gitlab.com/stages-devops-lifecycle/pages/

- [ ] When ready, add catpea/website and westland-warrior/warrior to the system and actually publish to the live webstite.

- [ ] Run upstream-sync execution on warrior user

- [ ] Setup automated upstream-sync execution on warrior user

- [ ] Switch to workstation

### Nice To Have

- [ ] Add Multiple Web Theme Support
- [ ] Add poem via Earth Host (incl, Audacity Test, Microphone, Noise Level, etc)
- [ ] Custom Recorder, on per stanza level that will allow text rendering into videos?
- [ ] Cache Buster - Forces Record Recalculation
- [ ] Regression: Faux description text in warrior is doubled
- [ ] Regression: Images are not showing all there is... but it looks better!
- [ ] Add New Book: Developer Cookbook - Introduce the software tutorial Book (add new book)
- [ ] Archive poetry as it has been replaced by db&furkies-purrkies once everything is operational
- [ ] Delete server as it is no longer used db publishes directly to website

### Items To Consider

- [ ] compiler/convert-audio-to-video is just touching files, it is not creating the videos, fix it when this program goes live
- [ ] check for indexes that point to removed record-directories and remove them (put use the trash bin, not rimraf)
- [ ] add a file checker to weed out strange files
- [ ] Add link to youtube video? or should thic be only youtube -> website?

### Bonus Challenges

- [ ] Setup Audio Book With Amazon, Gutenberg, or Librivox, add Cover Image to mp4 files as cover image.
- [ ] Fast Audiobook Compiler, upload to google docs via node google api.
- [ ] AUtomate YouTube uploads via API

## DONE

- [x] Add Bin
- [x] WEBSITE WORK ADD UPGRADE ALERT MESSAGE, simplify the Bootstrap Template, please remember that Flex layout has problems.
- [x] use bowel to dump the latest format of westland warrior and furkies purkies
- [x] fill catpea/westland-warrior and catpea/furkies-purrkies with real content
- [x] run install.sh and update it so that it works, consider testing for nodejs in the installer and exit, same for imagemagick.
- [x] Install catpea/db on raspberry pi
- [x] Once the installer and build work, run publish to catpea/homepage (homepage is staging)
- [x] re-run bowel to keep homepage updated with latest posts, make sure bowel chugs-along.
- [x] give the website proper title, currently the dominant book is showing
- [x] Create a build and publishing system for warrior too -  Make a build of WARRIOR using catpea template, this will replace the existing site.
- [x] setup westland-warrior


[Eternia]: https://www.npmjs.com/package/eternia
