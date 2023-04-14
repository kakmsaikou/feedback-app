rm -rf dist &&
pnpm build
cd dist &&
git init &&
git checkout -b gh-pages &&
git add . &&
git commit -m 'deploy' &&
git remote add origin git@github.com:kakmsaikou/feedback-app.git &&
git push -f -u origin gh-pages &&
cd -