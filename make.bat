del /q "docs*"
FOR /D %%p IN ("docs*.*") DO rmdir "%%p" /s /q
node build 
gitbook build . docs/ 
git add . 
git commit -m "Self-Hosted Version Update"