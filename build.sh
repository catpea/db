#!/usr/bin/env bash

eternia build furkies-purrkies

# Real Server
if test -d ./website; then
  mkdir -p ./website/docs
  rsync -qav --progress ./dist/furkies-purrkies/wwwroot/ ./website/docs
  echo catpea.com > ./website/docs/CNAME
fi

echo "execute ./publish.sh"
