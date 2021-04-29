#! /bin/sh

version=$(getPackageJsonAttribute.sh version)

docker push drsaaron/quoteofthedayui-react:$version
