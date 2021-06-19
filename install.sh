#!/usr/bin/env bash

if test -f .INSTALLED; then
  echo "System Nominal (Already installed, .INSTALLED exists)";
  exit;
fi

echo "Cloning Bin Directory"
git clone git@github.com:catpea/bin.git

echo "Downloading External Submodules"
./bin/download-submodules/index.sh

echo "Installing Themes"
git clone git@github.com:catpea/themes.git

echo "Installing Templates"
git clone git@github.com:catpea/templates.git
cd templates;
npm install;
cd -;

if ! command -v eternia &> /dev/null
then
  echo "Installing Eternia"
  cd /tmp
  npm -g i eternia;
  cd -
fi

touch .INSTALLED
