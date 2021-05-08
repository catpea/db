#!/usr/bin/env bash

if test -f .INSTALLED; then
  echo "[OK] system installed";
else
  echo "[NO] db does not appear to be installed";
  echo "SOLUTION:";
  echo "./install.sh";
  exit;
fi

if command -v node &> /dev/null; then
  echo "[OK] node is installed"
else
  echo "[NO] node is not installed, "
  echo "SOLUTION:";
  echo "curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash"
  echo "nvm install node";
  exit;
fi

if command -v montage &> /dev/null; then
  echo "[OK] ImageMagick found"
else
  echo "[NO] ImageMagick not found"
  echo "SOLUTION:";
  echo "apt get imagemagick"
  echo "dnf install imagemagick"
  exit;
fi

if command -v ffmpeg &> /dev/null; then
  echo "[OK] FFMPEG found"
else
  echo "[NO] FFMPEG not found"
  echo "SOLUTION:";
  echo "apt get ffmpeg"
  echo "dnf install ffmpeg"
  exit;
fi

if command -v eternia &> /dev/null; then
  echo "[OK] eternia is installed"
else
  echo "[NO] eternia not found"
  echo "SOLUTION:";
  echo "npm -g i eternia"
  exit;
fi

if [[ -z $(cd bin; git status -s) ]]; then
    echo "[OK] bin is in sync"
else
    echo "[NO] bin has uncommited changes"
    echo "SOLUTION:";
    echo "./system-publish.sh"
    exit;
fi

if [[ -z $(git status -s) ]]; then
    echo "[OK] db is in sync"
else
    echo "[NO] db has uncommited changes"
    echo "SOLUTION:";
    echo "./system-publish.sh"
    exit;
fi

if [[ -z $(git status -s) ]]; then
    echo "[OK] record templates are in sync"
else
    echo "[NO] record templates have uncommited changes"
    echo "SOLUTION:";
    echo "./system-publish.sh"
    exit;
fi

./bin/test-submodules/index.sh
