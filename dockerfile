FROM mysql:latest

ENV character-set-server utf8mb4
ENV collation-server utf8mb4_general_ci
ENV default-character-set utf8mb4
ENV default-collation utf8mb4_general_ci

ENV MYSQL_DATABASE test
ENV MYSQL_ROOT_PASSWORD password

EXPOSE 3306

# docker build -t architecture:latest .
# docker run  -d -p 3306:3306 --name architecture architecture:latest