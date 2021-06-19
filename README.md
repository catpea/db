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

Optionally, to create HTML heavy content in furkies-purrkies:

- eternia create furkies-purrkies html # to create html record.

Publishing:

1. ./import.sh
2. eternia build catpea.com
3. ./system-publish.sh
4. ./publish.sh

## Testing

During upgrade to v3 a temporary import.sh script is placed in ./db/ use it to sync v2 and v3.
It is based on bowel and performs several content translations along the way.

## Scripts

./status.sh will inform you on the status of your clone and present solutions.


[Eternia]: https://www.npmjs.com/package/eternia
