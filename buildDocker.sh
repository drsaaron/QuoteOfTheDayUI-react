#! /bin/sh

version=$(getPackageJsonAttribute.sh version)

imageName=quoteofthedayui-react

docker build -t $imageName  .
docker tag $imageName $imageName:$version

docker tag quoteofthedayui-react:$version drsaaron/quoteofthedayui-react:latest
docker tag quoteofthedayui-react:$version drsaaron/quoteofthedayui-react:$version
