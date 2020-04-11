# run only on master
cd dist
git init
git remote add origin git@github.com:coffeestainio/coffeestainio.github.io.git
git add .
git commit -m 'new deploy'
git push --set-upstream origin master -f