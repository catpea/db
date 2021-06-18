#!/usr/bin/env bash

# This is an old script, and once this sytem is operational can be removed.

bowel dump ../warrior/dist/server-object/westland-warrior.json --root-dir ../warrior --dist-dir ../warrior/dist/ --web-dir ../warrior/docs/ --yaml-db ../warrior/db/
bowel dump ../poetry/dist/server-object/furkies-purrkies.json --root-dir ../poetry --image-dir ../poetry/src/image/ --cover-images ../poetry/src/image/ --audio-dir ../poetry/src/audio/ --web-dir ../poetry/docs/ --dist-dir ../poetry/dist/

echo you should run: eternia build catpea.com
