FROM node:14-alpine

RUN npm run build

RUN mkdir /frontstore

COPY . /frontstore

WORKDIR /frontstore

CMD npm start
