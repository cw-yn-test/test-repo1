# mkdir ./work
# cd ./work
# cat > Dockerfile <<EOF
FROM centos:7
RUN yum install -y httpd
CMD ["/usr/sbin/httpd", "-DFOREGROUND"]
EOF
# docker build -t my-app:latest .
# docker images