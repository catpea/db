#!/usr/bin/env bash

eternia build catpea.com
if test -d ./website; then
  mkdir -p ./website/docs
  rsync -qav --progress ./dist/furkies-purrkies/wwwroot/ ./website/docs
  echo catpea.com > ./website/docs/CNAME
fi

eternia build westland-warrior
if test -d ./warrior; then
  mkdir -p ./warrior/docs
  rsync -qav --progress ./dist/westland-warrior/wwwroot/ ./warrior/docs
fi

echo "Review website: hs -o -c-1 ./dist/furkies-purrkies/wwwroot/"
echo "Review website: hs -o -c-1 ./dist/westland-warrior/wwwroot/"
echo "Publish website: ./publish.sh"
