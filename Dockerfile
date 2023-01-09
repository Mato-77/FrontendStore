FROM node:14-alpine

RUN mkdir /frontend

COPY . /frontstore

WORKDIR /frontstore


CMD npm start
