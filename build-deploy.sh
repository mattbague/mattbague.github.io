#!/usr/bin/env bash

rm -rf ./dist/*

npm run build:prod

rm ./docs/*.js ./docs/index.html ./docs/*.png ./docs/*.txt

cp -r ./dist/* ./docs/