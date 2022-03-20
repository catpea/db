#!/usr/bin/env bash

eternia build catpea.com
./bin/portfolio-image/index.sh

if test -d ./website; then
  mkdir -p ./website/docs
  echo "Copying data into ./website/docs"
  rsync -qav --progress ./dist/furkies-purrkies/wwwroot/ ./website/docs
  echo catpea.com > ./website/docs/CNAME
fi

eternia build westland-warrior
if test -d ./warrior; then
  mkdir -p ./warrior/docs
  echo "Copying data into ./warrior/docs"
  rsync -qav --progress ./dist/westland-warrior/wwwroot/ ./warrior/docs
fi

# echo "Review website: hs -o -c-1 ./dist/furkies-purrkies/wwwroot/"
# echo "Review website: hs -o -c-1 ./dist/westland-warrior/wwwroot/"
echo "Review website: hs -o -c-1 ./warrior/docs"
echo "Review website: hs -o -c-1 ./website/docs"
echo "Test for broken links: blc http://127.0.0.1:8081/ -roe #(NOTE: requires npm install broken-link-checker -g)"
echo "Publish website: ./publish.sh #(NOTE: this only publishes what is in sub modules)"
echo "INFO: run ssh westland-valhalla@black and cd Development/warrior/ and ./sync-upstream.sh confirm until westland-valhalla is handed off."
