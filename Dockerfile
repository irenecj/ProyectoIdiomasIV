#node con la versión 15
FROM node:15.0-alpine3.10

LABEL maintainer="Irene Cano Jerez"

WORKDIR /proyectoIdiomas
#Añadimos un usuario
RUN adduser -D userIV

#usamos el asterisco para copiar directamente package.json y package-lock.json
COPY package.json package-lock.json ./

#ejecutamos npm install para instalar las dependencias y  además borramos los archivos de dependencias
RUN npm install && npm install -g grunt-cli

ENV PATH=/node_modules/.bin:$PATH

WORKDIR /test

USER userIV

#para ejecutar los tests
CMD ["grunt","test"]
