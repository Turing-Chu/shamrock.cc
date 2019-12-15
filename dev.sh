#!/bin/bash


cd /Users/Turing/Desktop/project/www.shamrock.cc
echo -n > dev.log
yarn start >> dev.log 2>&1 &
