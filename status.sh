#!/usr/bin/env bash


if test -f .INSTALLED; then
  echo "$(tput setaf 2)[OK]$(tput sgr 0) system installed";
else
  echo "$(tput setaf 1)[NO]$(tput sgr 0) db does not appear to be installed. SOLUTION: ./install.sh";
fi

if command -v node &> /dev/null; then
  echo "$(tput setaf 2)[OK]$(tput sgr 0) node is installed"
else
  echo "$(tput setaf 1)[NO]$(tput sgr 0) node is not installed. SOLUTION: curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash; nvm install node";
fi

if command -v montage &> /dev/null; then
  echo "$(tput setaf 2)[OK]$(tput sgr 0) ImageMagick found"
else
  echo "$(tput setaf 1)[NO]$(tput sgr 0) ImageMagick not found. SOLUTION: install imagemagick"
fi

if command -v ffmpeg &> /dev/null; then
  echo "$(tput setaf 2)[OK]$(tput sgr 0) FFMPEG found"
else
  echo "$(tput setaf 1)[NO]$(tput sgr 0) FFMPEG not found. SOLUTION: install ffmpeg"
fi

if command -v eternia &> /dev/null; then
  echo "$(tput setaf 2)[OK]$(tput sgr 0) eternia is installed"
else
  echo "$(tput setaf 1)[NO]$(tput sgr 0) eternia not found. SOLUTION: npm -g i eternia"
fi
if command -v http-server &> /dev/null; then
  echo "$(tput setaf 2)[OK]$(tput sgr 0) hs (http-server) is installed"
else
  echo "$(tput setaf 1)[NO]$(tput sgr 0) http-server not found. SOLUTION: npm -g i http-server"
fi

if [[ -z $(cd bin; git status -s) ]]; then
    echo "$(tput setaf 2)[OK]$(tput sgr 0) bin is in sync"
else
    echo "$(tput setaf 1)[NO]$(tput sgr 0) bin has uncommited changes. SOLUTION: ./system-publish.sh"
fi

if [[ -z $(git status -s) ]]; then
    echo "$(tput setaf 2)[OK]$(tput sgr 0) db is in sync"
else
    echo "$(tput setaf 1)[NO]$(tput sgr 0) db has uncommited changes. SOLUTION: ./system-publish.sh"
fi

if [[ -z $(cd themes; git status -s) ]]; then
    echo "$(tput setaf 2)[OK]$(tput sgr 0) record themes are in sync"
else
    echo "$(tput setaf 1)[NO]$(tput sgr 0) record themes have uncommited changes. SOLUTION: ./system-publish.sh"
fi

if [[ -z $(cd templates; git status -s) ]]; then
    echo "$(tput setaf 2)[OK]$(tput sgr 0) record templates are in sync"
else
    echo "$(tput setaf 1)[NO]$(tput sgr 0) record templates have uncommited changes. SOLUTION: ./system-publish.sh"
fi

./bin/test-submodules/index.sh

echo "$(tput setaf 2)[OK]$(tput sgr 0) test completed";
