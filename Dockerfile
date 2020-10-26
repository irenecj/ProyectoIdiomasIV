#node con la versión 14
FROM node:14.0-alpine

LABEL maintainer="Irene Cano Jerez"

COPY package.json package-lock.json ./
RUN npm install
ENV PATH=/node_modules/.bin:$PATH

RUN adduser -D userIV

USER userIV

WORKDIR /test

CMD ["grunt","test"]
