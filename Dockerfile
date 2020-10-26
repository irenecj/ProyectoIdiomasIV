#node con la versión 15
FROM node:15.0-alpine3.10

LABEL maintainer="Irene Cano Jerez"

#Añadimos un usuario
RUN adduser -D userIV

#creamos directorio de trabajo en el que tendremos todos los archivos necesarios para que funcione la aplicación
WORKDIR /test

#usamos el asterisco para copiar directamente package.json y package-lock.json
COPY package*.json /test/

COPY Gruntfile.js /test/

#ejecutamos npm install para instalar las dependencias y  además borramos los archivos de dependencias
RUN npm install && npm cache clean --force &&  npm install -g grunt && rm package*.json

ENV PATH=/node_modules/.bin:$PATH

USER userIV

#para ejecutar los tests
CMD ["grunt","test"]
