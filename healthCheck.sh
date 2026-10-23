#! /bin/sh

tmpFile=/tmp/health.out

curl --silent --fail http://localhost:$SERVER_PORT/health > $tmpFile || exit 1
status=$(jq -r '.status' $tmpFile)
[ "$status" = "UP" ] || exit 1
