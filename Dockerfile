# build based on node
FROM node:alpine

# install curl which will be used for healthcheck
RUN apk add curl

# install make
RUN apk add --update make

# install g++
RUN apk add g++

# install python
ENV PYTHONUNBUFFERED=1
RUN apk add --update --no-cache python2 && ln -sf python2 /usr/bin/python

# working directory
WORKDIR /app

# expose port 8080
EXPOSE 8080

# add the source
ADD package.json .
ADD package-lock.json .
ADD webpack.config.js .
ADD src ./src
ADD .babelrc .

# get the packages
RUN npm install

# health checvk
HEALTHCHECK CMD curl --fail localhost:8080 || exit 1

# start the server
CMD [ "npm", "run", "start-docker" ]

