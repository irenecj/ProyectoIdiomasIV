## EXPLICACIÓN DETALLADA DE LOS SERVICIOS NECESARIOS

En primer lugar necesitamos tener instalado **node.js** que es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor basado en el lenguaje de programación JavaScript.
Además, vamos a instalar **npm** que es un gestor de paquetes que nos facilitará el trabajo con node ya que nos proporciona las librerías que tiene disponibles haciendo uso simplemente de una línea de código.

Para ello debemos ejecutar las siguientes órdenes:
~~~
sudo apt install node.js
sudo apt install npm          #gestor de paquetes de node
~~~

--------------------------------------------------------------------------

Una vez hecho esto, debemos proceder a buscar una base de datos donde almacenaremos los datos a manejar. En mi caso he elegido **MongoDB** ya que buscando un poco en Internet he concluido que puede ser adecuada para mi proyecto.
Aquí tenemos una [guía](https://www.digitalocean.com/community/tutorials/como-instalar-mongodb-en-ubuntu-18-04-es) para llevar a cabo la instalación en Ubuntu.

También necesitaremos la librería **Mongoose** escrita en Node.js usada para trabajar con MongoDB.
[Aquí](https://www.digitalocean.com/community/tutorials/how-to-integrate-mongodb-with-your-node-application-es) se explica cómo instalar MongoDB con su libería en Node.

--------------------------------------------------------------------------
Para llevar a cabo los tests vamos a usar el framework de testing **Jest**. Me he decantado por dicho framework después de haber buscado mucho por Internet ya que tiene una documentación muy extensa, lo cual me será muy útil ya que nunca he realizado pruebas de testeo, y he leído diversas opiniones en las que se menciona que es muy completo.
Con npm podemos proceder a la instalación de Jest y en este [enlace](https://jestjs.io/docs/es-ES/getting-started) se explica cómo comenzar a trabajar con él.

--------------------------------------------------------------------------
Para el sistema de log he elegido **Winston** por los mismos motivos que Jest, he visto que podemos encontrar documentación suficiente en Internet y hay muy buenas opiniones acerca de él.
