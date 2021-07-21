#! /bin/sh

version=$(getPackageJsonAttribute.sh version)
imageName=$(getPackageJsonAttribute.sh name | tr '[:upper:]' '[:lower:]')

containerName=quoteofthedayui

docker stop $containerName
docker rm $containerName

docker run --name $containerName -d -p 8080:8080 --user $(id -u):$(id -g) drsaaron/$imageName:$version

