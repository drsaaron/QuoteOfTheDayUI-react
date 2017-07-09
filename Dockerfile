# build based on nginx
FROM nginx:latest

# add the dist directory
ADD ./dist /usr/share/nginx/html

