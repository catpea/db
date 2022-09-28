#!/usr/bin/env bash

echo NOTE: publish.sh uses .submodules.txt so only whatever is in there will get updated.
echo NOTE: if you are running in test mode where you forked warrior/website/etc manually publish will not work for integrity reasons.

# Automated
./bin/upload-submodules/index.sh

# Messy
./catpea-server.sh
