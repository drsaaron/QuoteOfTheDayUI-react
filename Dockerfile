# build based on node
FROM node:slim

# install curl which will be used for healthcheck
RUN apt update && apt install -y curl

# install make
RUN apt install -y make

# install g++
RUN apt install -y g++
ENV CXXFLAGS "$CXXFLAGS -std=c++14"

# install python
ENV PYTHONUNBUFFERED=1
RUN apt install -y python2 && ln -sf python2 /usr/bin/python

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

