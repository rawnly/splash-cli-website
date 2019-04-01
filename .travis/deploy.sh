#! /bin/bash;

eval "$(ssh-agent -s)"
chmod 600 .travis/id_rsa
ssh-add .travis/id_rsa

git config --global push.default matching
git remote add deploy ssh://git@rawnly.com:22$DEPLOY_DIR
git pull origin master

ssh root@$IP <<EOF
	cd $DEPLOY_DIR;
	yarn build;
	yarn start;
	pm2 reload splash-cli.app;
EOF
