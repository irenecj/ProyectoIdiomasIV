#usamos como sistema operativo alpine con la versión 3.10.5
FROM alpine:3.10.5

#indicamos información sobre quién es la persona encargada del contenedor
LABEL maintainer="Irene Cano Jerez"


#creamos un usuario y una carpeta sobre la que tendrá permisos
RUN adduser -S usuario

#permisos necesarios para el usuario e instalación de node, npm y grunt
RUN mkdir node_modules \
    && chown -R usuario node_modules \
    && apk add --update nodejs npm make \
    && npm i -g grunt-cli grunt-run

#usuario sin privilegios
USER usuario

#copiamos el fichero de dependencias
COPY package.json ./

RUN chmod a+w /home/usuario

#instalamos las dependencias y borramos la caché de información de los paquetes
RUN npm install && rm -rf /var/lib/apt/lists/*

#necesitamos el usuario root para poder eliminar el fichero de dependencias
USER root

#eliminamos el fichero de dependencias una vez éstas se han instalado
RUN rm package.json

RUN chmod 775 /test

#volvemos al usuario sin privilegios
USER usuario

#variable de entorno para gestionar node_modules
ENV PATH=/node_modules/.bin:$PATH

#creamos el directorio de trabajo /test
WORKDIR /test


#ejecutamos los tests con grunt, en concreto, con el comando 'grunt test'
CMD ["grunt","test"]
