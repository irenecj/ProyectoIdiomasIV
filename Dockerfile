#node con la versión 14
FROM node:14

LABEL maintainer="Irene Cano Jerez"

#copiamos los ficheros de dependencias
COPY package.json package-lock.json ./

#instalamos las dependencias con npm
RUN npm install

#variable de entorno para gestionar node_modules
ENV PATH=/node_modules/.bin:$PATH

#añadimos un usuario
USER userIV

#creamos el directorio test
WORKDIR /test

#ejecutamos los tests con grunt
CMD ["grunt","test"]
