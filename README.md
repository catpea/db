# db
Content Database Root

## Usage

Creating new records:

- eternia create furkies-purrkies [md] # to create markdown record.
- eternia create --name "The Philosopher" westland-warrior # to create a new yaml record.

## Adding A New Chapter To Westland Warrior

```shell

eternia create --name "The Philosopher" westland-warrior # add chapter
eternia build westland-warrior # build just the warrior
hs --port 7467 -o -c-1 ./warrior/docs # npm -g i http-server
blc http://127.0.0.1:7467/ -roe # npm -g i broken-link-checker

```

## Adding A New Chapter To Furkies Purrkies

```shell

eternia create furkies-purrkies # add poem in the new markdown format
eternia build catpea.com # build the catpea website
hs --port 7467 -o -c-1 ./website/docs # npm -g i http-server
blc http://127.0.0.1:7467/ -roe # npm -g i broken-link-checker

```

Optionally, to create HTML heavy content in furkies-purrkies ```eternia create furkies-purrkies html``` to create html record.


## Publishing:

1. ./import.sh # warning wipes indexes
2. eternia build catpea.com
3. ./system-publish.sh # publish changes to system
4. ./publish.sh # publish content

## Testing

During upgrade to v3 a temporary import.sh script is placed in ./db/ use it to sync v2 and v3.
It is based on bowel and performs several content translations along the way.

## Scripts

./status.sh will inform you on the status of your clone and present solutions.


[Eternia]: https://www.npmjs.com/package/eternia
