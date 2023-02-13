FROM node:14-alpine

RUN mkdir /frontstore

COPY . /frontstore

WORKDIR /frontstore

RUN npm install

CMD npm start