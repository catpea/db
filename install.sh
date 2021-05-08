#!/usr/bin/env bash

if test -f .INSTALLED; then
  echo "System Nominal (Already installed, .INSTALLED exists)";
fi

echo "Cloning Bin Directory"
git clone git@github.com:catpea/bin.git

echo "Downloading External Submodules"
./bin/download-submodules/index.sh

echo "Installing Templates"
git clone git@github.com:catpea/templates.git
cd templates;
npm i;
cd -;

if ! command -v eternia &> /dev/null
then
  echo "Installing Eternia"
  npm -g i eternia;
fi


touch .INSTALLED
