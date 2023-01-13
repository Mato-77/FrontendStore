FROM node:14-alpine

RUN mkdir /frontstore

COPY . /frontstore

RUN npm install

WORKDIR /frontstore

CMD npm start
