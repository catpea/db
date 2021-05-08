#!/usr/bin/env bash

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

git pull;
git add .;
git commit -m 'New Database Revision';
git push;
