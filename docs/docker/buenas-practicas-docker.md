# BUENAS PRÁCTICAS SEGUIDAS PARA DESARROLLAR NUESTRO DOCKERFILE
A la hora de crear el **[Dockerfile](https://github.com/irenecj/ProyectoIdiomasIV/blob/master/Dockerfile)** es muy recomendable que sigamos unas buenas prácticas. En mi caso, he consultado esta [página](https://blog.arima.eu/es/2020/04/21/buenas-practicas-para-escribir-un-dockerfile.html) para ver cuáles eran dichas prácticas y además, he consultado otra [página](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/) para aprender a desarrollar nuestro fichero.
1. **Escribir [.dockerignore](https://github.com/irenecj/ProyectoIdiomasIV/blob/master/.dockerignore):** este archivo es equivalente al *.gitignore* y en él incluiremos aquellos ficheros que queremos que sean ignorados.
2. **Fusionar varios comandos RUN en uno solo:** como podemos ver en nuestro Dockerfile, tenemos un único comando RUN que ejecuta *npm install* para instalar las dependencias y *adduser -D useriv* para añadir un usuario ya que los tests no necesitan privilegios de super usuario.
  ~~~
  RUN adduser -D useriv && npm install
  ~~~
3. **No utilizar la etiqueta de imagen base 'latest':** esta etiqueta se utiliza por defecto cuando no se especifica ninguna otra y apuntará a una imagen diferente cuando se publique una nueva versión, por lo que nuestro *build* podría romperse. Por tanto, es recomendable usar una etiqueta específica.
  ~~~
  FROM node:14.0-alpine3.10
  ~~~
4. **Usar una imagen base adecuada:** en nuestro caso es mucho mejor utilizar una imagen especializada con *Node.js* ya instalado a usar una imagen base de propósito general como *ubuntu*. En nuestro caso, por los motivos que ya hemos comentado en este [fichero](https://github.com/irenecj/ProyectoIdiomasIV/blob/master/docs/pruebas-docker.md) hemos decidido usar **node:14.0-alpine3.10** como imagen base.
  ~~~
  FROM node:14.0-alpine3.10
  ~~~
5. **Configurar WORKDIR y CMD:** debemos configurar *WORKDIR* para cambiar el directorio por defecto, en el que ejecutaremos nuestros comandos *RUN* y *CMD*. Para añadir *CMD* la forma más recomendada es poner el comando dentro de una matriz, poniendo una palabra por elemento, como podemos ver en nuestro caso:
  ~~~
  CMD ["grunt","run:tests"]
  ~~~
6. **Mejor COPY que ADD:** por la simple razón de que *COPY* es más sencillo.
7. **Optimizar COPY y RUN:** deberíamos poner los cambios que se producen con menor frecuencia en la parte superior de nuestros Dockerfiles para aprovechar el almacenamiento en caché. Por este motivo, en nuestro *Dockerfile* primero copiamos el *package.json* y *package-lock.json*, instalamos las dependencias y luego añadimos el resto de archivos, de manera que cada vez que cambiemos nuestro código no tengamos que reinstalar los paquetes.
8. **Especificar variables de entorno:** es recomendable usar variables de entorno para establecer valores predeterminados en nuestro fichero. Nosotros hemos utilizado una variable de entorno para solucionar el error relacionado con que nuestro contenedor no encontraba grunt en el local y que contiene el path de nuestra carpeta 'node_modules'. Dicha solución explicada con más detalle se puede encontrar en la siguiente [página.](https://www.docker.com/blog/keep-nodejs-rockin-in-docker/)
  ~~~
  ENV PATH=/node_modules/.bin:$PATH
  ~~~
9. **Añadir metadatos a la imagen usando LABEL:** con *LABEL* podemos, por ejemplo, proporcionar información sobre quién es el encargado de mantener la imagen. Antes se usaba la opción *MAINTAINER* pero ahora está obsoleta.
  ~~~
  LABEL maintainer Irene Cano Jerez
  ~~~
10. **Eliminar aquello que no necesitemos:** en nuestro Dockerfile podemos ver como eliminamos el fichero de dependencias, *package.json*, una vez hemos instalado las dependencias, y la caché de información sobre los paquetes. *Cuidado:* para borrar el fichero de dependencias debemos hacerlo con un usuario con privilegios.
  ~~~
  RUN npm install && rm -rf /var/lib/apt/lists/*

  RUN rm package.json
  ~~~
11. **Usuario sin privilegios:** no es recomendable que ejecutemos el contenedor como root, debemos usar un usuario sin privilegios. Nosotros hemos tenido que crear un usuario y darle permiso sobre la carpeta *node_modules*.
  ~~~
  RUN adduser -S usuario

  RUN mkdir node_modules && chown -R usuario node_modules
  ~~~
