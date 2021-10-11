FROM drsaaron/blazarnodebase:1.0

# expose port 5000
EXPOSE 5000

# add the source
ADD package.json .
ADD package-lock.json .
ADD src ./src
ADD public ./public

# get the packages
RUN npm install

# health checvk
HEALTHCHECK CMD curl --fail localhost:5000 || exit 1

# build the app
RUN npm run build

# start the server
CMD [ "npm", "run", "serve" ]

