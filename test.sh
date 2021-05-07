#!/usr/bin/env bash

if ! command -v node &> /dev/null
then
    echo "node could not be found"
    exit
fi

if ! command -v montage &> /dev/null
then
    echo "ImageMagick could not be found"
    exit
fi

if ! command -v eternia &> /dev/null
then
    echo "eternia could not be found"
    exit
fi
