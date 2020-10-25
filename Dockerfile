#node con la versión 15
FROM node:15.0-alpine3.10

LABEL maintainer="Irene Cano Jerez"

#creamos directorio de trabajo en el que tendremos todos los archivos
#necesarios para que funcione la aplicación 
WORKDIR /test

COPY Gruntfile.js ./
#usamos el asterisco para copiar directamente package.json y package-lock.json
COPY package*.json ./

#ejecutamos npm install para instalar las dependencias
RUN npm install -g grunt && npm install

#para ejecutar los tests
CMD ["grunt","run:tests"]
