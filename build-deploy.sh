#!/usr/bin/env bash

rm ./dist/*

npm run build:prod

cp ./dist/* .