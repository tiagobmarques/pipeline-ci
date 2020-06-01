FROM openjdk:latest

MAINTAINER Tiago Marques

ADD build/libs/gov-tables-0.0.1-SNAPSHOT.jar app.jar

ENTRYPOINT ["java", "-jar", "app.jar"]

EXPOSE 8080