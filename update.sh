#!/usr/bin/env bash

# Automated
./bin/download-submodules/index.sh

# Manual (System Level)

if test -d ./bin; then
  cd bin;
  git pull;
  cd -
fi

if test -d ./templates; then
  cd templates;
  git pull;
  cd -
fi

if test -d ./homepage; then
  cd homepage;
  git pull;
  cd -
fi

git pull;

npm -g update eternia;
