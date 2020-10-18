## EXPLICACIÓN DETALLADA DE LAS HERRAMIENTAS

Para poder llevar a cabo el lanzamiento de nuestro microservicio debemos hacer uso de diversos servicios.
En primer lugar necesitamos un entorno en tiempo de ejecución el cual nos permita ejecutar nuestro proyecto.
Es recomendable que la instalación de dicho runtime se lleve acabo mediante un gestor de versiones, como por ejemplo **nvm**.

Por otro lado, necesitaremos una Base de Datos en la cual poder almacenar los datos que vamos a manejar. Un ejemplo de dato a manejar, en mi caso, sería una palabra que pertenezca al vocabulario que vamos a aprender.

También será necesario tener un gestor de tareas en el cual podremos definir las tareas que se van a ejecutar, para indicar las dependencias, entre otras.

Un servicio a destacar es el de testeo, ya que sólo el código que hemos testeado es aquel que sabemos que funciona y que está bien, por tanto, cada vez que nos dispongamos a generar código tendremos que testearlo para saber que todo está correcto. Debido a esto, tendremos que buscar un framework de testeo que nos ayude a realizar dicha tarea.

Otro servicio que nos resultará muy útil será el sistema de log, ya que nunca viene mal tener un archivo de texto en el cual se registren,por ejemplo, los acontecimientos que han ido teniendo lugar en nuestro proyecto, el estado actual de ciertos programas, entre otro tipo de información.

-----------------------------------------------------------------------
A continuación, después de documentarme, voy a exponer qué tipo de herramientas podría necesitar conforme a lo explicado arriba. **Aclarar** que esta elección puede variar conforme avance el proyecto ya que en el punto en el que nos encontramos aún no ha sido necesario que haga uso de ninguna de estas herramientas.

Como entorno de ejecución podemos usar **Node.js** ya que este es de código abierto y es uno de los más usados en el mercado en lo que se refiere a JavaScript, por lo que me parece interesante aprender a usarlo.
Junto con él podemos instalar también **npm** que es un gestor de paquetes el cual proporciona multitud de librerías y puede que nos agilice parte del trabajo.

Además, hemos usado como gestor de tareas **grunt**. En este punto me he encontrado con cierta dificultad a la hora de definir una tarea para realizar los tests ya que me han surgido diversos problemas relacionados con las versiones. En cuanto al último error que obtuve, no he encontrado en Internet cómo arreglarlo por lo que se me ha ocurrido una alternativa para solucionar todo esto: ésta se basa en que en vez de hacer una tarea para realizar los tests, he visto que en grunt tenemos *grunt-shell* de forma que podemos usarlo para ejecutar comandos. Por tanto, he definido una tarea con la cual ejecuto el comando *npm test* de manera que pueda testear el código.

--------------------------------------------------------------------------

En cuanto a la base de datos, seguramente me decante por **MySQL** ya que he trabajado con bases de datos SQL en otra asignatura, pero hasta que no avance un poco más en el proyecto no tendré seguro si ésta será la mejor opción.

--------------------------------------------------------------------------

Para llevar a cabo los tests vamos a usar **Jest**  ya que tiene una documentación muy extensa, lo cual me es muy útil ya que nunca he realizado pruebas de testeo, y he leído diversas opiniones en las que se menciona que es muy completo.

--------------------------------------------------------------------------------
Para el sistema de log hay varias opciones, aunque principio he visto más documentación y mejores opiniones sobre **Winston**, pero aún tengo que informarme más para saber cuál elegir.

------------------------------------------------------------------------------------------------------------------------------------------------------------

**Adicional:** en muchos sitios recomiendan que se use un *framework de web* pero aún no me queda claro cómo se usará dicho framework ni su funcionalidad en general. Como ejemplo de este framework he visto **sails.js** y éste viene preparado para trabajar con MySQL, lo que sería un punto a favor en mi caso, pero hasta que no comprenda del todo el uso de este servicio no me voy a centrar en él.
