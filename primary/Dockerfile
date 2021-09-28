FROM mongo:4.4.9
RUN mkdir /config
WORKDIR /config
COPY setup.js .
COPY setup.sh .
RUN chmod +x /config/setup.sh

 