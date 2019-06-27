#!/bin/bash
node build 
gitbook build . docs/ 
git add . 
NOW=$(date)
echo "Self-Hosted Version Update -" $(date)
git commit -m "Self-Hosted Version Update - $NOW"