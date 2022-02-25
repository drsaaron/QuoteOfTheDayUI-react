#! /bin/ksh

containerName=$(grep ^containerName startDocker.sh | awk -F= '{ print $2 }')
docker stop $containerName
