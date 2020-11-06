# PROYECTO PARA INFRAESTRUCTURA VIRTUAL - ProyectoIdiomasIV
Repositorio para el proyecto de la asignatura Infraestructura Virtual de la UGR. 20/21.

## :clipboard: DESCRIPCIÓN
 El microservicio escogido va a consistir en facilitar el aprendizaje de un idioma que no conocemos. Para ello podrá proporcionarnos frases populares, vocabulario junto con su traducción y significado, e incluso podremos añadir el vocabulario nuevo que estamos aprendiendo.

 ## :question: ¿POR QUÉ UN PROYECTO ENFOCADO A IDIOMAS? ¿DÓNDE RESIDE SU UTILIDAD?
 Hoy en día saber idiomas es algo muy importante ya que nos sirven tanto si buscamos trabajo, como si decidimos mudarnos a un país extranjero por el motivo que sea o simplemente porque nos guste poder tener la capacidad de comunicarnos con otras personas que no hablen nuestro idioma.

 Muchas veces, incluso en nuestra lengua natal, queremos decir una palabra pero no conseguimos dar con ella aunque sea una palabra que usas todos los días, entonces, se me ocurrió que sería muy práctico poder tener a mano un servicio que nos proporcione un listado de vocabulario y de frases típicas de un determinado idioma ya sea para consultar cómo se dice una palabra que conocemos en otro idioma, para saber el significado de una palabra o frase que sabemos o simplemente para anotar una palabra que acabamos de aprender.

 Por todo esto, considero que es de gran utilidad tener un microservicio de este tipo ya que nos facilita la tarea de aprender un idioma y nos permite tener organizado todo aquello que vamos aprendiendo para así poderlo consultar cuando nos haga falta.

## :mag_right: INSTALACIÓN Y EJECUCIÓN DE TESTS
En primer lugar, si queremos lanzar el proyecto debemos tener instalados **node, npm y grunt**. Una vez hecho esto, debemos acceder al directorio raíz del proyecto y ahí ejecutamos la siguiente orden para que se instalen las dependencias:
~~~
npm install .
~~~

A continuación, para llevar a cabo los tests vamos a usar Jest debido a varios motivos que expongo en este [documento.](https://github.com/irenecj/ProyectoIdiomasIV/blob/master/docs/test-jest.md)
Como hemos instalado el gestor de tareas Grunt, para lanzar los test simplemente debemos ejecutar el siguiente comando:
~~~
grunt test
~~~

## :eyes: RELEVANTE AL HITO A ENTREGAR: HITO 4 - INTEGRACIÓN CONTINUA :eyes:
Este hito ha consistido en añadir integración continua a nuestro proyecto con diferentes plataformas. Para poder usar las diferentes plataformas que vamos a utilizar, siempre debemos realizar un primer paso y es registrarse. Por ello, he adjuntado una [explicación](https://github.com/irenecj/proyecto-idiomas/blob/master/docs/integracion-continua/registros-CI.md) de cómo registrarse en dichas plataformas.

#### INTEGRACIÓN CONTINUA CON TRAVIS CI
En el siguiente [fichero](https://github.com/irenecj/proyecto-idiomas/blob/master/docs/integracion-continua/travis/CI-travis.md) podemos encontrar como ha sido el proceso de usar Travis para nuestro proyecto, y además, he redactado otro [documento](https://github.com/irenecj/proyecto-idiomas/blob/master/docs/integracion-continua/travis/pruebas-travis.md) en el que explico cómo funciona el fichero de configuración que utiliza Travis para trabajar.

#### INTEGRACIÓN CONTINUA CON CIRCLE CI
En este apartado, tenemos un [fichero](https://github.com/irenecj/proyecto-idiomas/blob/master/docs/integracion-continua/circle/Circe-CI.md) en el que explico el por qué elegir Cricle-CI y cómo he trabajado con dicha plataforma.

#### USO DEL GESTOR DE TAREAS
[Aquí](https://github.com/irenecj/proyecto-idiomas/blob/master/docs/integracion-continua/gestor-tareas.md) podemos ver como se ha hecho uso del gestor de tareas para añadir la integración continua al proyecto con las diferentes plataformas.

#### APROVECHAMIENTO DEL CONTENEDOR DE DOCKER HUB
En el siguiente [directorio](https://github.com/irenecj/proyecto-idiomas/tree/master/docs/integracion-continua/travis) tenemos tanto el [uso de Travis](https://github.com/irenecj/proyecto-idiomas/blob/master/docs/integracion-continua/travis/CI-travis.md) aprovechando y sin aprovechar el contenedor junto con la explicación de los [diferentes ficheros de configuración diseñados](https://github.com/irenecj/proyecto-idiomas/blob/master/docs/integracion-continua/travis/pruebas-travis.md), y en este [documento](https://github.com/irenecj/proyecto-idiomas/blob/master/docs/integracion-continua/travis/CI-travis.md) se encuentra el desarrollo de cómo hemos trabajado con Circle CI con y sin usar el contenedor.

#### AVANCE DE CÓDIGO
Para este hito he decidido añadir tres Historias de Usuario y he implementado todo aquello que necesitan para llevarse a cabo.
- [HU9.](https://github.com/irenecj/proyecto-idiomas/issues/41) Añadir frases cotidianas.
- [HU10.](https://github.com/irenecj/proyecto-idiomas/issues/42) Mostrar frases cotidianas en función del tipo.
- [HU11.](https://github.com/irenecj/proyecto-idiomas/issues/43) Autoevaluación de palabras aprendidas.
Esto ha conllevado a la creación de la clase *cotidiano.js* junto con sus respectivos tests, la implementación de la clase *NoAcierto.js* para gestionar excepciones, y la ampliación de código en la clase *idioma.js*.

La explicación de todas las clases implementadas se encuentra en este [fichero](https://github.com/irenecj/proyecto-idiomas/blob/master/docs/clases-implementadas/clases-implementadas.md). Y el código fuente está en este [directorio.](https://github.com/irenecj/proyecto-idiomas/tree/master/src)


## :wrench: HERRAMIENTA DE CONSTRUCCIÓN
He utilizado el gestor de tareas **Grunt** con su correspondiente [Gruntfile.js](https://github.com/irenecj/ProyectoIdiomasIV/blob/master/Gruntfile.js).

Podemos acceder a la explicación de cómo lo hemos [diseñado.](https://github.com/irenecj/proyecto-idiomas/blob/master/docs/gruntfile-docu.md)

## :whale2: DOCKER
Para la creación de un contenedor de pruebas, en primer lugar necesitamos elegir un contenedor base.
En la documentación correspondiente a este apartado tenemos un [documento](https://github.com/irenecj/ProyectoIdiomasIV/blob/master/docs/pruebas-docker.md) donde comparamos las distintas imágenes oficiales junto con imágenes base con sistemas operativos y finalmente tomamos una decisión. Además, explicamos cómo hemos [optimizado](https://github.com/irenecj/proyecto-idiomas/blob/master/docs/optimizacion.md) la imagen obtenida.

### DOCKERFILE
Para crear nuestro [Dockerfile](https://github.com/irenecj/ProyectoIdiomasIV/blob/master/Dockerfile) hemos seguido una serie de [buenas prácticas.](https://github.com/irenecj/ProyectoIdiomasIV/blob/master/docs/buenas-practicas-docker.md), además, el Dockerfile tiene comentarios acerca de la función de cada línea que añadimos.

### DOCKER HUB
En este [fichero](https://github.com/irenecj/ProyectoIdiomasIV/blob/master/docs/docker-hub.md) están explicados los pasos necesarios para subir correctamente nuestro [contenedor](https://hub.docker.com/r/irenecj/proyectoidiomasiv) a Docker Hub.

### GITHUB CONTAINER REGISTRY
En un principio pensé en probar a subir mi contenedor a [Azure](https://azure.microsoft.com/es-es/) lo que ocurre es que sólo tienen una prueba gratuita de 30 días por lo que prefiero dejarlo para más adelante. Por este motivo, he subido mi contenedor a **GitHub Container Registry** y en este [fichero](https://github.com/irenecj/ProyectoIdiomasIV/blob/master/docs/github-container-registry.md) podemos ver los pasos seguidos.

### EJECUCIÓN DE LOS TESTS A PARTIR DE LOS CONTENEDORES
En primer lugar debemos descargarnos el repositorio de GitHub.
Una vez hecho esto, debemos descargarnos la imagen y ejecutamos los test. Si usamos el contenedor de Docker Hub, ejecutamos el siguiente comando:
~~~
docker pull irenecj/proyecto-idiomas

docker run -t -v `pwd`:/test irenecj/proyecto-idiomas
~~~
Si usamos el contenedor de **GitHub Container Registry**, ejecutamos:
~~~
docker pull ghcr.io/irenecj/proyectoidiomas:latest

docker run -t -v `pwd`:/test ghcr.io/irenecj/proyectoidiomas:latest
~~~

## :closed_book: RECOPILACIÓN DE ENLACES ÚTILES
1.  [Configuración de git y creación de par de claves y subida de clave pública a GitHub.](https://github.com/irenecj/ProyectoIdiomasIV/blob/master/docs/config.md)
2. [Elección y justificación de las herramientas y servicios utilizados.](https://github.com/irenecj/ProyectoIdiomasIV/blob/master/docs/herramientas.md)
3. [Pasos a seguir para la realización del proyecto.](https://github.com/irenecj/ProyectoIdiomasIV/blob/master/docs/pasos.md)
4. [Acceso al código fuente del proyecto](https://github.com/irenecj/ProyectoIdiomasIV/tree/master/src).
5. [Explicación detallada de las clases implementadas.](https://github.com/irenecj/ProyectoIdiomasIV/blob/master/docs/idioma-traduccion.md)
6. [Acceso a los tests del proyecto.](https://github.com/irenecj/ProyectoIdiomasIV/tree/master/tests)
7. [¿Por qué elegir Jest para testear?.](https://github.com/irenecj/ProyectoIdiomasIV/blob/master/docs/test-jest.md)
8. [Documentación sobre el Gruntfile.](https://github.com/irenecj/proyecto-idiomas/blob/master/docs/gruntfile-docu.md)
9. [Optimización de la imagen usada en Docker.](https://github.com/irenecj/proyecto-idiomas/blob/master/docs/optimizacion.md)
10. [Elección del contenedor base.](https://github.com/irenecj/ProyectoIdiomasIV/blob/master/docs/pruebas-docker.md)
11. [Buenas prácticas para diseñar un Dockerfile.](https://github.com/irenecj/ProyectoIdiomasIV/blob/master/docs/buenas-practicas-docker.md)
12. [Subir contenedor a Docker Hub.](https://github.com/irenecj/ProyectoIdiomasIV/blob/master/docs/docker-hub.md)
13. [Subir contenedor a GitHub Docker Registry.](https://github.com/irenecj/ProyectoIdiomasIV/blob/master/docs/github-container-registry.md)
14. [Integración continua con Travis CI.](https://github.com/irenecj/proyecto-idiomas/tree/master/docs/integracion-continua/travis)
15. [Integración continua con Circle CI.](https://github.com/irenecj/proyecto-idiomas/blob/master/docs/integracion-continua/circle/Circe-CI.md)

## :heavy_check_mark: ISSUES Y MILESTONES
- [Listado](https://github.com/irenecj/ProyectoIdiomasIV/issues?q=is%3Aissue+is%3Aclosed) de issues cerrados.
- [Listado](https://github.com/irenecj/ProyectoIdiomasIV/milestones) de milestones cubiertos y próximos a completar.

## :page_facing_up: HISTORIAS DE USUARIO
En este punto del proyecto sólo tengo dos historias de usuario, pero en próximas prácticas se pueden añadir más issues de este tipo.
- [HU1.](https://github.com/irenecj/ProyectoIdiomasIV/issues/6) Consultar listado de vocabulario.
  * Como usuario debo poder consultar todo el listado de vocabulario junto con su traducción y significado. El formato que se mostrará será la palabra aprendida y al lado su traducción y significado.
- [HU2.](https://github.com/irenecj/ProyectoIdiomasIV/issues/7) Añadir vocabulario.
  * Como usuario debo poder añadir aquellas palabras nuevas que estoy aprendiendo junto con su traducción y significado.
- [HU3.](https://github.com/irenecj/ProyectoIdiomasIV/issues/17) Consultar una palabra correcta.
  * Como usuario debo poder consultar una palabra concreta junto con su traducción y/o significado. El formato que se mostrará será la palabra buscada y al lado su traducción y/o significado.
- [HU4.](https://github.com/irenecj/ProyectoIdiomasIV/issues/18) Modificar la descripción de una palabra.
  * Como usuario debo poder modificar la descripción de una palabra concreta.
- [HU5.](https://github.com/irenecj/ProyectoIdiomasIV/issues/20) Mostrar palabras que comiencen por una determinada letra.
  * Como usuario debo poder indicar por que letra quiero que empiecen las palabras que se van a mostrar.
- [HU6.](https://github.com/irenecj/ProyectoIdiomasIV/issues/21) Añadir expresiones populares.
  * Como usuario debo poder añadir expresiones populares de dicho idioma junto con la explicación de qué quieren decir.
- [HU7.](https://github.com/irenecj/ProyectoIdiomasIV/issues/22) Mostrar expresiones populares.
  * Como usuario debo poder ver un listado de todas las expresiones populares que hay registradas.
- [HU8.](https://github.com/irenecj/ProyectoIdiomasIV/issues/25) Mostrar palabras ordenadas alfabéticamente.
  * Como usuario debo poder ver un listado de todas las palabras que hay registradas indicando si quiero que éstas se muestren en orden alfabético ascendente o descendente.
- [HU9.](https://github.com/irenecj/proyecto-idiomas/issues/41) Añadir frases cotidianas.
  * Como usuario debo poder añadir aquellas frases cotidianas que aprendo junto con el tipo de éstas.
- [HU10.](https://github.com/irenecj/proyecto-idiomas/issues/42) Mostrar frases cotidianas en función del tipo.
  * Como usuario debo poder mostrar un listado de frases cotidianas de un tipo concreto.
- [HU11.](https://github.com/irenecj/proyecto-idiomas/issues/43) Autoevaluación de palabras aprendidas.
  * Como usuario debo poder realizar una autoevaluación que consistirá en indicar qué palabra corresponde, en el idioma que estamos aprendiendo, a la definición proporcionada.

## :pencil2: AUTORA
Irene Cano Jerez
