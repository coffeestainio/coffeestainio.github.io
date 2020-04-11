# run only on master
cd dist
git init
git config --global user.email "pjcalvov@gmail.com"
git config --global user.name "Pablo Calvo"
git remote set-url origin https://pjcalvo:"$ACCESS_TOKEN"@github.com/coffeestainio.github.io.git
git add .
git commit -m 'new deploy'
git push --set-upstream origin master -f