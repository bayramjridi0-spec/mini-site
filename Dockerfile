FROM nginx:alpine
COPY mini-site/html/ /usr/share/nginx/html/
COPY mini-site/css/ /usr/share/nginx/html/css/
COPY mini-site/js/ /usr/share/nginx/html/js/
EXPOSE 80
