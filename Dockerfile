FROM node:14-alpine

RUN mkdir /frontstore

COPY . /frontstore

WORKDIR /frontstore



CMD npm start
