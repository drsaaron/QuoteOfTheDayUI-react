#! /bin/ksh

version=$(perl -MJSON -ne 'BEGIN { $/ = undef; } my $json = from_json($_); print $json->{version} . "\n";' package.json)

docker run -p 80:80 drsaaron/quoteofthedayui-react:$version

