#node con la versión 15
FROM node:15.0-alpine3.10

LABEL maintainer Irene Cano Jerez

#variables de entorno
ENV PROJECT_DIR=/home/irene/proyectoIdiomas

#creamos directorio de trabajo en el que tendremos todos los archivos
#necesarios para que funcione la aplicación
WORKDIR $PROJECT_DIR

#usamos el asterisco para copiar directamente package.json y package-lock.json
COPY package*.json ./

#ejecutamos npm install para instalar las dependencias
RUN npm install && npm install -g grunt-cli

#pasamos todo lo que necesitamos al directorio de trabajo
COPY src ./src
COPY Gruntfile.js ./
COPY tests ./test

#para ejecutar los tests
CMD ["grunt","run:tests"]
