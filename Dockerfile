FROM node:14-alpine

RUN mkdir /frontend

COPY ./frontstore /frontstore

WORKDIR /frontstore


CMD npm start