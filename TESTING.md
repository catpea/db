# Testing

NOTE: since things are not in .submodules, they will not get published.

## Build Phase

### Testing Warrior

- this is not a large operation, but use a local copy for testing
- Avoid running git clone git@github.com:catpea/warrior.git
- know that this will be synchronized via upstream sync

### Testing Furkies Purrkies

- avoid running git clone git@github.com:catpea/website.git try using cp -R /home/*/U*/D*/website if possible

### Build Pahase Results/Questions

- LOW PRIORITY TODO: publishing to mirrors, where are the mirrors now?
- Testing passed, no anomalies, high consistency
- NOTE: image on warrior is catpea but that requires the dark template so it is OK for now.

## Content Injection Phase

1. create new content for warrior analyze the yaml data
2. create new content for furkies
3. run a build test.

## Conclusion

- use npm install broken-link-checker -g if worried about broken links
- Remember to update submodules.txt
- use local copies whenever possible to be nice to github
- Pending content injection system appears stable

## Future
Bash needs to be replaced with https://github.com/catpea/bashscript
