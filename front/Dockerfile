FROM node:18-alpine
RUN apk update && \
    apk upgrade && \
    apk add --no-cache vim bash

WORKDIR /front

COPY package*.json ./

RUN chown -R node:node .
USER node

RUN npm install
