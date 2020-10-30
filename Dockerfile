#usamos como sistema operativo alpine con la versión 3.10.5
FROM alpine:3.10.5

#indicamos información sobre quién es la persona encargada del contenedor
LABEL maintainer="Irene Cano Jerez"

#creamos un usuario y una carpeta sobre la que tendrá permisos
RUN adduser -S usuario && mkdir /idiomas && chown -R usuario /idiomas

#establecemos el directorio de trabajo
WORKDIR /idiomas

#permisos necesarios para el usuario e instalación de curl para poder descarganos después NVM y así instalar la versión de node que queramos, en este caso la 14.12.0
RUN mkdir /idiomas/node_modules \
    && chown -R usuario /idiomas/node_modules \
    && apk add --update nodejs npm

#usuario sin privilegios
USER usuario

#copiamos el fichero de dependencias
COPY package.json ./

#instalamos las dependencias y borramos el fichero de dependencias una vez éstas han sido instaladas
#y la caché de información de los paquetes
RUN npm install && rm package.json && rm -rf /var/lib/apt/lists/*

#variable de entorno para gestionar node_modules
ENV PATH=./node_modules/.bin:$PATH

#creamos el directorio de trabajo /test
WORKDIR /test

#ejecutamos los tests con grunt, en concreto, con el comando 'grunt test'
CMD ["grunt","test"]
