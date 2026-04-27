FROM nginx:alpine
COPY mini-site/ /usr/share/nginx/html/
EXPOSE 80
