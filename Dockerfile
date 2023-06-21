FROM drsaaron/blazarnodebase:1.33

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

# get the packages
RUN npm install 

# health check
HEALTHCHECK CMD curl --fail localhost:$SERVER_PORT || exit 1

# build the app. See https://github.com/webpack/webpack/issues/14532 for the NODE_OPTIONS
ENV NODE_OPTIONS --openssl-legacy-provider
RUN npm run build

# start the server
CMD [ "npm", "run", "serve" ]

