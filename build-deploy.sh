#!/usr/bin/env bash

rm ./dist/*
rm ./docs/*

npm run build:prod

cp ./dist/* ./docs/