#! /bin/sh

version=$(getPackageJsonAttribute.sh version)
imageName=$(dockerImageName.sh)

docker push drsaaron/$imageName:$version
