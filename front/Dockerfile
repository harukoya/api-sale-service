FROM node:18-alpine
RUN apk update && \
    apk upgrade && \
    apk add --no-cache vim bash

WORKDIR /app

RUN npm install
