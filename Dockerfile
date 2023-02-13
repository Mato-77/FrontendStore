FROM node:14-alpine

RUN mkdir /frontstore

COPY . /frontstore

WORKDIR /frontstore

RUN npm install

<<<<<<< HEAD
CMD npm start
=======

CMD npm start
>>>>>>> 70644ac460094ae5d2e14e9716a3fd72f7736880
