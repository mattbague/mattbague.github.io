#!/usr/bin/env bash

rm ./dist/*

npm run build:prod

rm ./docs/*.js ./docs/index.html ./docs/*.png ./docs/*.txt

cp ./dist/* ./docs/