@echo off

cd C:\inetpub\wwwroot\semex\fxnew

REM fetch updates from github

git fetch

REM pull updates from github

git pull

REM build updates

npm run build

REM restart fxnew application

pm2 restart fxnew