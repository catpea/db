#! /bin/bash

for fullfile in furkies-purrkies/furkies-purrkies-poetry-*/files/poetry-*-illustration.jpg
do

if (( $(identify -format "%[fx:w]" "$fullfile") > 5000 )); then

  #if test -f "$fullfile"; then

    fulldir=$(dirname -- "$fullfile")
    fullname=$(basename -- "$fullfile")
    extension="${fullname##*.}"
    filename="${fullname%.*}"
    echo
    echo mv "$fullfile" "${fulldir}/big-${filename}.jpg"

    echo convert "${fulldir}/big-${filename}.jpg" -resize 1234x1234 "${fulldir}/${filename}.jpg";
    if [ $? -eq 0 ]; then
      echo rm "${fulldir}/big-${filename}.jpg"
    else
      # put it back on failure
      echo mv "${fulldir}/big-${filename}.jpg" "$fullfile"
    fi


  #fi;

fi

done

#
# for fullfile in furkies-purrkies/furkies-purrkies-poetry-*/files/poetry-*-illustration.png
# do
#
#   if test -f "$fullfile"; then
#
#   fulldir=$(dirname -- "$fullfile")
#   fullname=$(basename -- "$fullfile")
#   extension="${fullname##*.}"
#   filename="${fullname%.*}"
#   echo magick "$fullfile" "${fulldir}/${filename}.png"
#
#   fi;
#
# done
