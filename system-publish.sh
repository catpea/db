#!/usr/bin/env bash

# Manual (System Level)

if test -d ./bin; then
  cd bin;
  git pull;
  git add .;
  git commit -m 'New Bin Scripts Revisions';
  git push;
  cd -
fi

if test -d ./templates; then
  cd templates;
  git pull;
  git add .;
  git commit -m 'New Data Template Revisions';
  git push;
  cd -
fi

if test -d ./themes; then
  cd themes;
  git pull;
  git add .;
  git commit -m 'New Visual Theme Revisions';
  git push;
  cd -
fi

git pull;
git add .;
git commit -m 'New Root Database Revision';
git push;
