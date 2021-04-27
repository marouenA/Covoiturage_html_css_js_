FROM ubuntu
MAINTAINER marouen abdennadher <marouen.abdennadher@iit.ens.tn>
RUN apt-get update\
    && apt-get install -y\
	nginx
COPY index.html /var/www/html
COPY default /etc/nginx/sites-enabled
COPY service_start.sh /home/docker/script/service_start.sh

RUN chmod 744 /home/docker/script/service_start.sh

ENTRYPOINT /home/docker/script/service_start.sh
WORKDIR /home/docker 
