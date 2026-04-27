FROM nginx:alpine
 feature-docker
COPY mini-site/ /usr/share/nginx/html/
EXPOSE 80


COPY . /usr/share/nginx/html

EXPOSE 80
 main
