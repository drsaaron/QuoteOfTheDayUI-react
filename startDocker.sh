#! /bin/sh

version=$(perl -MJSON -ne 'BEGIN { $/ = undef; } my $json = from_json($_); print $json->{version} . "\n";' package.json)

containerName=quoteofthedayui

docker stop $containerName
docker rm $containerName

docker run --name $containerName -d -p 8080:8080 --user $(id -u):$(id -g) drsaaron/quoteofthedayui-react:$version

