#!/usr/bin/env bash

# Automated
./bin/upload-submodules/index.sh

# Manual (System Level)

if test -d ./bin; then
  cd bin;
  git pull;
  git add .;
  git commit -m 'New Bin Revisions';
  git push;
  cd -
fi

if test -d ./templates; then
  cd templates;
  git pull;
  git add .;
  git commit -m 'New Template Revisions';
  git push;
  cd -
fi

if test -d ./homepage; then
  cd homepage;
  git pull;
  git add .;
  git commit -m 'New Homepage Revision';
  git push;
  cd -
fi

git pull;
git add .;
git commit -m 'New Database Revision';
git push;
