#! /bin/ksh

pid=$(docker ps | grep nginx | awk '{ print $1 }')
if [ "$pid" = "" ]
then
    echo "nginx not running..." 1>&2
    exit 1
else 
    docker kill $pid
fi
