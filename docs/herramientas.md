## EXPLICACIÓN DETALLADA DE LAS HERRAMIENTAS

Antes de nada, tener claro que todo esto son elecciones que puede que conforme vayan apareciendo funcionalidades y necesidades, y vayamos avanzando en él proyecto puede ocurrir que algunas de ellas cambien.

------------------------------------------------------------------------
En primer lugar necesitamos tener instalado **node.js** que es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor basado en el lenguaje de programación JavaScript. Podemos instalarlo haciendo uso del gestor de versiones **nvm**.
Además, necesitamos instalar **npm** que es un gestor de paquetes que nos facilitará el trabajo con node ya que nos proporciona las librerías que tiene disponibles haciendo uso simplemente de una línea de código.

--------------------------------------------------------------------------

Una vez hecho esto, debemos proceder a buscar una base de datos donde almacenaremos los datos a manejar. En mi caso he elegido **MySQL** ya que buscando un poco en Internet he visto que hay numerosos tutoriales para aprender a conectar MySQL desde Node y además, ya he trabajado con bases de datos SQL en otra asignatura.
Aquí tenemos una [guía](https://linuxhint.com/connect_mysql_nodejs/) para cuando sea necesario conectar MySQL con Node.

--------------------------------------------------------------------------
Para llevar a cabo los tests vamos a usar el framework de testing **Jest**. Me he decantado por dicho framework después de haber buscado mucho por Internet ya que tiene una documentación muy extensa, lo cual me será muy útil ya que nunca he realizado pruebas de testeo, y he leído diversas opiniones en las que se menciona que es muy completo.
Con npm podemos proceder a la instalación de Jest y en este [enlace](https://jestjs.io/docs/es-ES/getting-started) se explica cómo comenzar a trabajar con él, aunque en el punto en el que nos encontramos aún no es necesario hacer uso de dicho framework.

--------------------------------------------------------------------------------
Para el sistema de log he elegido **Winston** por los mismos motivos que Jest, he visto que podemos encontrar documentación suficiente en Internet y hay muy buenas opiniones acerca de él. Además aparece como la mejor librería de logging para Node en esta [página](https://openbase.io/packages/top-nodejs-logging-libraries). De todas formas, cuando avancemos con el proyecto, decidiré si esta opción es la más adecuada.

------------------------------------------------------------------------------------------------------------------------------------------------------------
Finalmente voy a usar **Sails.js** como framework de web. Éste está realizado bajo el framework Express, que es uno de los más usado, y además su última versión viene preparada para trabajar con MySQL, entre otras bases de datos, por lo que es un punto a favor en mi caso.
Cuando avance el proyecto y sea necesario hacer uso de dicho framework, hay algunas páginas que podemos consultar, como [esta.](https://openwebinars.net/blog/tutorial-sailsjs-instalacion/)
