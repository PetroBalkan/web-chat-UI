FROM node:8.11.2-alpine as node

COPY package*.json ./

RUN npm install

COPY ./dist .

RUN npm run build
