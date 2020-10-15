# PROYECTO PARA INFRAESTRUCTURA VIRTUAL
Repositorio para el proyecto de la asignatura Infraestructura Virtual de la UGR. 20/21.


## :clipboard: DESCRIPCIÓN
 El microservicio escogido va a consistir en facilitar el aprendizaje de un idioma que no conocemos. Para ello podrá proporcionarnos frases populares, vocabulario junto con su traducción y significado, e incluso podremos añadir el vocabulario nuevo que estamos aprendiendo.

 ## :question: ¿POR QUÉ UN PROYECTO ENFOCADO A IDIOMAS? ¿DÓNDE RESIDE SU UTILIDAD?
 Hoy en día saber idiomas es algo muy importante ya que nos sirven tanto si buscamos trabajo, como si decidimos mudarnos a un país extranjero por el motivo que sea o simplemente porque nos guste poder tener la capacidad de comunicarnos con otras personas que no hablen nuestro idioma.

 Muchas veces, incluso en nuestra lengua natal, queremos decir una palabra pero no conseguimos dar con ella aunque sea una palabra que usas todos los días, entonces, se me ocurrió que sería muy práctico poder tener a mano un servicio que nos proporcione un listado de vocabulario y de frases típicas de un determinado idioma ya sea para consultar cómo se dice una palabra que conocemos en otro idioma, para saber el significado de una palabra o frase que sabemos o simplemente para anotar una palabra que acabamos de aprender.

 Por todo esto, considero que es de gran utilidad tener un microservicio de este tipo ya que nos facilita la tarea de aprender un idioma y nos permite tener organizado todo aquello que vamos aprendiendo para así poderlo consultar cuando nos haga falta.

## :computer: INSTALACIÓN Y EJECUCIÓN DE TESTS
En primer lugar, si queremos lanzar el proyecto debemos tener instalados **node, npm y grunt**. Una vez hecho esto, debemos acceder al directorio raíz del proyecto y ahí ejecutamos la siguiente orden para que se instalen las dependencias:
~~~
npm install .
~~~

A continuación, para ejecutar los tests debemos ejecutar:
~~~
grunt shell
~~~

La explicación de por qué usamos este comando la podemos encontrar en el siguiente [fichero](https://github.com/irenecj/ProyectoIdiomasIV/blob/master/docs/herramientas.md).

## :wrench: HERRAMIENTA DE CONSTRUCCIÓN
He utilizado el gestor de tareas **Grunt** con su correspondiente [Gruntfile.js](https://github.com/irenecj/ProyectoIdiomasIV/blob/master/Gruntfile.js).

## :closed_book: DOCUMENTACIÓN Y ENLACES ÚTILES
1.  [Configuración de git y creación de par de claves y subida de clave pública a GitHub.](https://github.com/irenecj/ProyectoIdiomasIV/blob/master/docs/config.md)
2. [Elección y justificación de las herramientas.](https://github.com/irenecj/ProyectoIdiomasIV/blob/master/docs/herramientas.md)
3. [Pasos a seguir para la realización del proyecto.](https://github.com/irenecj/ProyectoIdiomasIV/blob/master/docs/pasos.md)
4. [Acceso al código fuente del proyecto](https://github.com/irenecj/ProyectoIdiomasIV/tree/master/src).
5. [Acceso a los tests del proyecto.](https://github.com/irenecj/ProyectoIdiomasIV/tree/master/tests)

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
