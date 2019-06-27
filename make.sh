#!/bin/bash
node build 
gitbook build . docs/ 
git add . 
NOW=$(date)
echo "Self-Hosted Version Update -" $(date)
rm docs/build.js && rm docs/make.sh
git commit -m "Self-Hosted Version Update - $NOW"