#! /bin/ksh

docker run -p 80:80 -v `pwd`/dist:/usr/share/nginx/html  nginx
