# INTRODUCCIÓN A DOCKER Y REPOSITORIOS OFICIALES
Docker se basa en la creación de contenedores que sean ligeros y portables para que las aplicaciones software contenidas en dicho contenedor puedan ejecutarse en cualquier máquina que tenga Docker instalado, todo esto independientemente del sistema operativo que tenga la máquina.

Entre los principales beneficios de Docker nos encontramos con los siguientes:
- **Sólo se tiene que programar la aplicación una vez:** como ya hemos comentado el contenedor que contenga nuestra aplicación se puede ejecutar en cualquier sistema operativo, sólo nos encontramos como requisito que la máquina donde la ejecutamos tenga instalado Docker. De esta manera no se tiene que programar y configurar el software para diferentes sistemas operativos.
- **Se obtiene una mayor consistencia entre entornos de prueba y entornos de producción:** esto se debe a que las pruebas de la aplicación se hacen dentro de un contenedor y dicha aplicación también se despliega dentro del contenedor, por tanto, el entorno de pruebas es idéntico al entorno en el que se va a ejecutar el software.
- **Se obtiene mayor modularidad:** el desarrollo de un contenedor nos permite dividir aplicaciones complejas en unidades más discretas y pequeñas. Esto favorece a la modularidad ya que si tenemos que mantener o actualizar la aplicación podemos dirigirnos a la unidad concreta que necesitemos, sin tener que revisar la aplicación completa.

## REPOSITORIOS OFICIALES
Si buscamos en [Docker Hub](https://hub.docker.com/_/node) los repositorios pertenecientes a Node vemos que nos aparece un listado de éstos y además, nos aparecen los 3 tipos de imágenes básicos que nos podemos encontrar:
- **node:<version>:** esta es la imagen por defecto de Node y si no estamos seguros de cuáles son las necesidades de nuestro proyecto esta es la imagen más adecuada. Está diseñada para ser utilizada tanto como un contenedor desechable, es decir, para montar el código fuente e iniciar el contenedor, como para ser la base para construir otras imágenes. A veces encontramos etiquetas como *buster* o *strech* para indicar la versión de Debian, y además, la imagen posee una gran cantidad de paquetes comunes en Debian, por lo que a la hora de descargarla tiene un mayor peso.
- **node:<version>-alpine:** esta imagen se basa en Alpine Linux y es mucho más pequeña que las otras. Esta variante es muy recomendable cuando se desea que el tamaño de la imagen final sea lo más pequeño posible.
- **node:<version>-slim:** esta imagen sólo contiene los paquetes mínimos necesarios para ejecutar Node, por tanto, sólo se recomienda su uso en el caso de trabajar en un entorno en el que sólo se despliegue la imagen de Node y tenga limitaciones de espacio.

Para profundizar más en toda está información expuesta dejo dos enlaces:
- [¿Qué es Docker?.](https://www.javiergarzas.com/2015/07/que-es-docker-sencillo.html)
- [Beneficios del uso de Docker.](https://www.campusmvp.es/recursos/post/los-beneficios-de-utilizar-docker-y-contenedores-a-la-hora-de-programar.aspx)
