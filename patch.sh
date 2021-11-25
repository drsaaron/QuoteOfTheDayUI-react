#! /bin/sh

npm update

# if the lock file is updated, update the version
if gitFileChanged.sh -f package-lock.json
then
    echo "lock file upgraded, so update version"
    npm version patch
else
    echo "lock file unchanged so no version update"
    exit 1
fi


