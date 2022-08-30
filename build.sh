#!/usr/bin/env bash

# Dist is the primary folder!!!!
# we copy from dist to satisfy other needs

eternia build catpea.com
./bin/portfolio-image/index.sh

# if test -d ./website; then
#   mkdir -p ./website/docs
#   echo "Copying data into ./website/docs"
#   rsync -qav --progress ./dist/furkies-purrkies/wwwroot/ ./website/docs
#   echo catpea.com > ./website/docs/CNAME
# fi

if test -d ./potato; then
  mkdir -p ./potato/docs
  echo "Copying NON AUDIO data into ./potato/docs"
  rsync -qav --progress --exclude 'audio/poetry-????.mp3' ./dist/furkies-purrkies/wwwroot/ ./potato/docs
  echo catpea.com > ./potato/docs/CNAME
fi

eternia build westland-warrior
if test -d ./warrior; then
  mkdir -p ./warrior/docs
  echo "Copying data into ./warrior/docs"
  rsync -qav --progress ./dist/westland-warrior/wwwroot/ ./warrior/docs
fi

# echo "JUST DELETED 100 MP3 FILES FROM ls website/docs/audio/poetry-00*.mp3 might want to fix that";
# rm website/docs/audio/poetry-00*.mp3


echo "Copying data into catpea-org"
rsync -qav --progress ./dist/furkies-purrkies/wwwroot/ ./catpea-org/public


# echo "Review website: hs -o -c-1 ./dist/furkies-purrkies/wwwroot/"
# echo "Review website: hs -o -c-1 ./dist/westland-warrior/wwwroot/"
echo "Review website: hs -o -c-1 ./warrior/docs"
echo "Review website: hs -o -c-1 ./website/docs"
echo "Test for broken links: blc http://127.0.0.1:8081/ -roe #(NOTE: requires npm install broken-link-checker -g)"
echo "Publish website: ./publish.sh #(NOTE: this only publishes what is in sub modules)"
echo "INFO: run ssh westland-valhalla@black and cd Development/warrior/ and ./sync-upstream.sh confirm until westland-valhalla is handed off."
