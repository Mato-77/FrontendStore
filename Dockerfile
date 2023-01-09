FROM node:14-alpine

RUN mkdir /frontstore

COPY -r . /frontstore

WORKDIR /frontstore



CMD npm start
