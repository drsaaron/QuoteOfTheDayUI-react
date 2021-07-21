#! /bin/sh

version=$(getPackageJsonAttribute.sh version)
imageName=$(dockerImageName.sh)

docker build -t drsaaron/$imageName  .
docker tag drsaaron/$imageName drsaaron/$imageName:$version

