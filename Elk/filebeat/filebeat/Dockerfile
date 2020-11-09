FROM 00c5b17745d1
#FROM docker pull 192.168.253.10:8082/store/elastic/filebeat:7.5.1
#FROM docker.elastic.co/beats/filebeat:7.1.1

# Copy our custom configuration file
COPY filebeat.yml /usr/share/filebeat/filebeat.yml

USER root
# Create a directory to map volume with all docker log files
RUN mkdir /usr/share/filebeat/dockerlogs
RUN chown -R root /usr/share/filebeat/
RUN chmod -R go-w /usr/share/filebeat/
