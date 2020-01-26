FROM node:12-alpine

WORKDIR /usr/src/app

COPY ./src/package.json ./

RUN npm install --only=production
