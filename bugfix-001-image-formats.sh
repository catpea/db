#! /bin/bash

PATTERN="PNG image data";

for fullfile in furkies-purrkies/furkies-purrkies-poetry-*/files/poetry-*-illustration.jpg
do

if [[ $(file "$fullfile") == *"$PATTERN"* ]]; then

  if test -f "$fullfile"; then

  fulldir=$(dirname -- "$fullfile")
  fullname=$(basename -- "$fullfile")
  extension="${fullname##*.}"
  filename="${fullname%.*}"
  echo mv "$fullfile" "${fulldir}/${filename}.png"

  fi;

fi

done


for fullfile in furkies-purrkies/furkies-purrkies-poetry-*/files/poetry-*-illustration.png
do

  if test -f "$fullfile"; then

  fulldir=$(dirname -- "$fullfile")
  fullname=$(basename -- "$fullfile")
  extension="${fullname##*.}"
  filename="${fullname%.*}"
  echo magick "$fullfile" "${fulldir}/${filename}.jpg"

  fi;

done
