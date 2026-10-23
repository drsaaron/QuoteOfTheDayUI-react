FROM drsaaron/blazarnodebase:1.67

# install JQ, needed for the health check
RUN apt update && apt install -y jq

# expose port 8001
ENV SERVER_PORT=8001
EXPOSE $SERVER_PORT

ENV NODE_ENV=production

# add the source
ADD package.json .
ADD package-lock.json .
ADD src ./src
ADD public ./public
ADD config ./config
ADD server ./server
ADD ./healthCheck.sh ./healthCheck.sh

# get the packages
RUN npm install 

# build the app. See https://github.com/webpack/webpack/issues/14532 for the NODE_OPTIONS
ENV NODE_OPTIONS=--openssl-legacy-provider
RUN npm run build

# start the server
CMD [ "npm", "run", "serve" ]

