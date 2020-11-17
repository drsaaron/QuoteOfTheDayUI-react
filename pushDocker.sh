#! /bin/sh

version=$(perl -MJSON -ne 'BEGIN { $/ = undef; } my $json = from_json($_); print $json->{version} . "\n";' package.json)

docker tag quoteofthedayui-react:$version drsaaron/quoteofthedayui-react:latest
docker tag quoteofthedayui-react:$version drsaaron/quoteofthedayui-react:$version

docker push drsaaron/quoteofthedayui-react:$version
