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

- [ ] Potential CNAME problems, needs to be added on per host basis
- [ ] Run ./import.sh; eternia build catpea.com; ./publish to keep db up to date.
- [ ] Publish Simple Mirrors: dist/furkies-purrkies and dist/furkies-purrkies somewhere
- [ ] Activate website in .submodules (test but don't push)
- [ ] Activate warrior in .submodules (test but don't push)
- [ ] When ready, add catpea/website and westland-warrior/warrior to the system and actually publish to the live webstite.
- [ ] Run upstream-sync execution on warrior user
  - [ ] Setup automated upstream-sync execution on warrior user
- [ ] Switch to workstation
- [ ] Add poem via Earth Host (incl, Audacity Test, Microphone, Noise Level, etc)
- [ ] Regression: Thumbnail cover images are too zoomed in , Images are not showing all there is...
- [ ] Multihosting Review
  - [ ] https://vercel.com
  - [ ] https://surge.sh
  - [ ] https://cloudflare.com
  - [ ] https://www.netlify.com
  - [ ] https://about.gitlab.com/stages-devops-lifecycle/pages/


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
- [x] Regression: Faux description text in warrior is doubled
- [x] both website and homepage should run in parallel for testing.
- [x] configuration must contain order: "latest",
- [x] add artwork link in the views of the server (credit the image owner)
- [x] new entry creation! ... possible event interface...
- [x] optimize crawler skip files that have already been downloaded, check file-name time stamps...
- [x] Dependency Resolver, create a stack of projects that lead up to the final one
- [x] add pre and post middleware set
- [x] place strong emphasis on validating input data (use invariant)
- [x] Make .text version of content based on .print version to perserve the links.
- [x] add progress tracking to copying narrations
- [x] add progress tracking to copying images
- [x] resolve dependencies (from configuration file ex catpea has both warrior and poetry) prior to compilation
- [x] use https://www.npmjs.com/package/rc for configuration
- [x] move website configuration out of /home/meow/Universe/Development/bowel/src/compiler/plugins/create-website/index.mjs
- [x] changing description: 'Home of Furkies Purrkies and Westland Warrior', in src/compiler/plugins/create-website/index.mjs
- [x] For now both configuration and server-objects contaion links to social network titles and subtitles this needs to be fixed.
- [x] List transformation architecture with middleware support (v3)
- [x] the v1 decompiler is allowed to be hacky as v1 directory structures are still a little bit messy
- [x] Add fallback image if record is missing an image (poetry-cover.jpg)
- [x] Should record injection (add new post) be internalized? .... YEAH, it is currently shelled out
- [x] Connect the build-in server with the crawler.
- [x] Add printable version generator
- [x] BUG http://black:7468/read/furkies-purrkies/25 Has no card interface
- [x] Images mentioned in posts no longer get a sm-/xl- versions as that creates too many files, and creates ambiguity
- [x] Do not create audio/images if not needed
- [x] During import remove the prefixes in content.html <img src="..." alt="X"> rename md-poetry-0025-x.jpg to poetry-0025-x.jpg
- [x] Setup a plugin-system, plugins should be listed in server object files.
- [x] Add print field
- [x] Convert standard HTML to bootstrap formatting using cheerio. This needs cards, should this happen in the server?
- [x] Copy audio extras, and dependencies... dependencies.json?
- [x] Image credit is missing in bowel and server-objects, this only applies to poetry.
- [x] Add YouTube video thumbnail downloader to the compiler.
- [x] Create an Apache like "Index Of" for poems that will double as a website mirror.
- [x] Failure to detect links in yaml database
- [x] Warrior is missing images.
- [x] Warrior is missing the audio linked in the introduction poem
- [x] Remove unused yid-* files to force a new download and thus timestamp, to signal cover image rebuild.
- [x] There need to be two decompilers one for v1 format and the second for v2.
- [x] v1 decompiler
- [x] Tag server objects with a format: 'v1'/'v2' markers to automaticaly tell them apart.
- [x] Divide code for compiler and recompiler, they should live in separate files.
- [x] HTML: Standardize html from md and yaml, but do not create a bootstrap variant here, just well written html.
- [x] HTML: YAML Database is already standardized witht the HTML template
- [x] HTML: Existing poetry is in .section/p format and this is acceptable
- [x] HTML: Markdown format needs .section class (in md \n is ignored it makes a p in content html, but is easily readable in content.md state)
- [x] Add New, a sophisticated template system, that us used for a "Add New Post", this may need to be a commander based CLI rather than a menu.
- [x] Finish the wget --mirror repacement
- [x] Internalize the server/wget build system, use the server in a sub module mode, and then shell out the wget.
- [x] links need to be rewritten in the html being saved.
- [x] Adapt catpea/server to import the extended v2 dist folder, server uses a shell script to copy those files, easy fix.
- [x] .attachments, respect .attachments in index.json... add attachments to bowel/import, considering converting bowel to de-compiler...
- [x] rename index.json/.dependencies to index.json/data[0].attachements
- [x] put bowel in compiler mode, remove content.html in favor of html.html pattern.

### Nice To Have

- [ ] Add New Book: Developer Cookbook - Introduce the software tutorial Book (add new book)
- [ ] Add Multiple Web Theme Support
- [ ] Custom Recorder, on per stanza level that will allow text rendering into videos?
- [ ] Cache Buster - Forces Record Recalculation
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

[Eternia]: https://www.npmjs.com/package/eternia
