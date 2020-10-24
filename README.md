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
grunt run:tests
~~~

La explicación de por qué usamos este comando la podemos encontrar en el siguiente [fichero](https://github.com/irenecj/ProyectoIdiomasIV/blob/master/docs/herramientas.md).

## :computer: CLASES IMPLEMENTADAS
En mi caso, a parte de las clases para gestionar las excepciones, tengo una clase, llamada **idioma.js**, la cual posee todas las funciones relacionadas con las operaciones que se pueden llevar a cabo con un listado de palabras, y las expresiones populares junto con una explicación de éstas. Esta clase es la principal de nuestro proyecto.
Por otro lado, tenemos otra clase, llamada **traduccion.js** la cual nos permite crear una palabra junto con su significado. Dentro de esta clase tenemos los métodos *get* y *set* necesarios para poder usar los objetos en la clase principal.
Podemos encontrar una explicación más detallada en [esta documentación](https://github.com/irenecj/ProyectoIdiomasIV/blob/master/docs/pasos.md) y este es el [código fuente](https://github.com/irenecj/ProyectoIdiomasIV/tree/master/src) del proyecto.

### DOCKERFILE
Para crear nuestro [Dockerfile](https://github.com/irenecj/ProyectoIdiomasIV/blob/master/Dockerfile) hemos seguido una serie de [buenas prácticas.]()

## :wrench: HERRAMIENTA DE CONSTRUCCIÓN
He utilizado el gestor de tareas **Grunt** con su correspondiente [Gruntfile.js](https://github.com/irenecj/ProyectoIdiomasIV/blob/master/Gruntfile.js).

## :whale2: DOCKER
Para la creación de un contenedor de pruebas, en primer lugar necesitamos elegir un contenedor base.
En la documentación correspondiente a este apartado tenemos un documento donde [introducimos Docker y las distintas imágenes oficiales](https://github.com/irenecj/ProyectoIdiomasIV/blob/master/docs/intro-Docker.md) que podemos encontrar y otro donde quedan reflejadas las [pruebas realizadas y la decisión tomada](https://github.com/irenecj/ProyectoIdiomasIV/blob/master/docs/pruebas-docker.md) en la elección del contenedor base.

## :closed_book: RECOPILACIÓN DE ENLACES ÚTILES
1.  [Configuración de git y creación de par de claves y subida de clave pública a GitHub.](https://github.com/irenecj/ProyectoIdiomasIV/blob/master/docs/config.md)
2. [Elección y justificación de las herramientas y servicios utilizados.](https://github.com/irenecj/ProyectoIdiomasIV/blob/master/docs/herramientas.md)
3. [Pasos a seguir para la realización del proyecto.](https://github.com/irenecj/ProyectoIdiomasIV/blob/master/docs/pasos.md)
4. [Acceso al código fuente del proyecto](https://github.com/irenecj/ProyectoIdiomasIV/tree/master/src).
5. [Acceso a los tests del proyecto.](https://github.com/irenecj/ProyectoIdiomasIV/tree/master/tests)
6. [¿Por qué elegir Jest para testear?.](https://github.com/irenecj/ProyectoIdiomasIV/blob/master/docs/test-jest.md)
7. [Introducción a Docker y las imágenes base oficiales para Node.](https://github.com/irenecj/ProyectoIdiomasIV/blob/master/docs/intro-Docker.md)
8. [Elección del contenedor base.](https://github.com/irenecj/ProyectoIdiomasIV/blob/master/docs/pruebas-docker.md)
9. [Buenas prácticas para diseñar un Dockerfile.](https://github.com/irenecj/ProyectoIdiomasIV/blob/master/docs/buenas-practicas-docker.md)

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


## :pencil2: AUTORA
Irene Cano Jerez
