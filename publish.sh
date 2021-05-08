#!/usr/bin/env bash

# Automated
./bin/upload-submodules/index.sh

# Manual (System Level)

cd bin;
git pull;
git add .;
git commit -m 'New Bin Revisions';
git push;
cd -

cd templates;
git pull;
git add .;
git commit -m 'New Template Revisions';
git push;
cd -

cd homepage;
git pull;
git add .;
git commit -m 'New Homepage Revision';
git push;
cd -
