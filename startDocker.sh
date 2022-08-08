#! /bin/sh

version=$(getPackageJsonAttribute.sh version)
imageName=$(dockerImageName.sh)
port=$(grep '^ENV SERVER_PORT' Dockerfile | awk -F= '{ print $2 }')

containerName=quoteofthedayui

docker stop $containerName
docker rm $containerName

docker run --user $(id -u):$(id -g) --network qotd --name $containerName -d -p 8080:$port $imageName:$version

