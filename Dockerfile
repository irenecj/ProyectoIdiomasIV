#node con la versión 15
FROM node:15.0-alpine3.10

LABEL maintainer="Irene Cano Jerez"

#Añadimos un usuario
RUN adduser -D userIV

#usamos el asterisco para copiar directamente package.json y package-lock.json
COPY package*.json ./

COPY Gruntfile.js ./

#ejecutamos npm install para instalar las dependencias
RUN npm install

WORKDIR /test

ENV PATH=/node_modules/.bin:$PATH

USER userIV

#para ejecutar los tests
CMD ["grunt","test"]
