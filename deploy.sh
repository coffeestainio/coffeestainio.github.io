# run only on master
cd dist
git init
git config --global user.email "pc@coffeestain.io"
git config --global user.name "Pablo Calvo"
git remote add origin git@github.com:coffeestainio/coffeestainio.github.io.git
git add .
git commit -m 'new deploy'
git push --set-upstream origin master -f