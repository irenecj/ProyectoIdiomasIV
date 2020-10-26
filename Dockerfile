#node con la versión 14 de Alpine
FROM node:14.0-alpine3.10

#indicamos información sobre quién es la persona encargada del contenedor
LABEL maintainer="Irene Cano Jerez"

#copiamos los ficheros de dependencias
COPY package.json package-lock.json ./

#instalamos las dependencias con npm y creamos un usuario con el parámetro -D
#para crearlo con los valores por defecto
RUN adduser -D useriv && npm install

#variable de entorno para gestionar node_modules
ENV PATH=/node_modules/.bin:$PATH

#añadimos un usuario
USER useriv

#creamos el directorio test
WORKDIR /test

#ejecutamos los tests con grunt, en concreto, con el comando 'grunt test'
CMD ["grunt","test"]
