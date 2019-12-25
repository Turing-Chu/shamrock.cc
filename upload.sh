#!/bin/bash

BASEPATH="root@106.14.166.29:/usr/local/apps/project/www.shamrock.cc"
yarn build
scp -P 222 dist/index.html ${BASEPATH}/index.html
scp -r -P 222 dist/src ${BASEPATH}/
scp -r -P 222 dist/static/img ${BASEPATH}/static/
