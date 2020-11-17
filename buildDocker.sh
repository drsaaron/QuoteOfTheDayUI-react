#! /bin/sh

version=$(perl -MJSON -ne 'BEGIN { $/ = undef; } my $json = from_json($_); print $json->{version} . "\n";' package.json)

imageName=quoteofthedayui-react

docker build -t $imageName  .
docker tag $imageName $imageName:$version

docker tag quoteofthedayui-react:$version drsaaron/quoteofthedayui-react:latest
docker tag quoteofthedayui-react:$version drsaaron/quoteofthedayui-react:$version
