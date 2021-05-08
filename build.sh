#!/usr/bin/env bash

echo build is disabled while testing, decompile a fresh version, and fill furkies-purrkies and westland-warrior repos with proper content.
eternia build furkies-purrkies

# Multiple Servers Can Be Configured Here

# Staging Server
if test -d ./homepage; then

  mkdir -p ./homepage/docs
  rsync -qav --progress ./dist/furkies-purrkies/wwwroot/ ./homepage/docs
  echo catpea.com > ./homepage/docs/CNAME

fi

# Real Server
if test -d ./website; then

  mkdir -p ./website/docs
  rsync -qav --progress ./dist/furkies-purrkies/wwwroot/ ./website/docs
  echo catpea.com > ./website/docs/CNAME

fi
