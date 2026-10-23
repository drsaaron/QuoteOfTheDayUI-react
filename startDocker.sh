#! /bin/sh

version=$(getPackageJsonAttribute.sh version)
imageName=$(dockerImageName.sh)
port=$(grep '^ENV SERVER_PORT' Dockerfile | awk -F= '{ print $2 }')

containerName=quoteofthedayui

docker stop $containerName
docker rm $containerName

PODMAN_USERNS=

docker run \
       --network qotd \
       --health-cmd="CMD ./healthCheck.sh || exit 1" \
       --health-interval=60s \
       --name $containerName \
       -d -p 8080:$port $imageName:$version

