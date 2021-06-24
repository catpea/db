# Usage

## Creating new records:

- eternia create furkies-purrkies [md] # to create markdown record.
- eternia create --name "The Philosopher" westland-warrior yaml # to create a new yaml record.

## Adding A New Chapter To Westland Warrior

```shell

eternia create --name "The Inventor" westland-warrior yaml # add chapter
#TEST: eternia build westland-warrior # build just the warrior
#TEST: hs --port 7467 -o -c-1 ./warrior/docs # npm -g i http-server
#TEST: blc http://127.0.0.1:7467/ -roe # npm -g i broken-link-checker

```

## Adding A New Chapter To Furkies Purrkies

```shell

eternia create furkies-purrkies # add poem in the new markdown format for html say: eternia create furkies-purrkies html
#TEST: eternia build catpea.com # build the catpea website
#TEST: hs --port 7467 -o -c-1 ./website/docs # npm -g i http-server
#TEST: blc http://127.0.0.1:7467/ -roe # npm -g i broken-link-checker

```

Optionally, to create HTML heavy content in furkies-purrkies ```eternia create furkies-purrkies html``` to create html record.


## Publishing:

```shell

#./import.sh # warning wipes indexes
./build.sh
./status.sh
./system-publish.sh # publish changes to system
./publish.sh # publish content
./bin/audio-to-video/index.sh

```

## Testing

During upgrade to v3 a temporary import.sh script is placed in ./db/ use it to sync v2 and v3.
It is based on bowel and performs several content translations along the way.

## Scripts

./status.sh will inform you on the status of your clone and present solutions.

# IMPORTANT TODO

- Permalinks

# TLDR;

eternia create furkies-purrkies;
./build.sh
hs -o -c-1 ./website/docs
./status.sh

[Eternia]: https://www.npmjs.com/package/eternia
