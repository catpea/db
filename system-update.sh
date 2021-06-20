#!/usr/bin/env bash

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
if test -d ./themes; then
  cd themes;
  git pull;
  cd -
fi

# Main DB
git pull;

# And Management Module
npm -g update eternia;
