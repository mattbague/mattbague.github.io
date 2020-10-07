#!/usr/bin/env bash

rm ./dist/*

npm run build:prod

rm ./docs/*.js ./docs/index.html

cp ./dist/* ./docs/