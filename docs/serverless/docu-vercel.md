### DESPLIEGUE DEL PROYECTO CON VERCEL
Para poder desplegar nuestro repositorio en Vercel nos hemos regido por la [documentación oficial](https://vercel.com/docs/git/vercel-for-github) del sitio.

Antes de comenzar, para comprobar que funciona correctamente, vamos a añadir el directorio **api** y dentro de este un ejemplo de función llamado **hello.js**.

Para registrarnos en **Vercel** simplemente debemos vincular nuestra cuenta de GitHub y a continuación, importamos nuestro repositorio.

![](../imagenes/registroVercel.png)

![](../imagenes/importVercel.png)

**Aclaración:** podemos pensar por un momento que seleccionar todo nuestro proyecto no es una buena opción ya que cada vez que hagamos un **deploy** se va a desplegar el proyecto entero y por tanto estaremos consumiendo mucha memoria en Vercel, sin embargo, si no hacemos esto y añadimos sólo la carpeta que incluya nuestra funciones, no estaremos teniendo en cuenta que puede que alguna de estas funciones necesiten hacer uso de otros archivos que probablemente se encuentren en otros directorios.

Lo próximo que debemos hacer es lanzar Vercel con el siguiente comando e indicarle que queremos linkarlo al repositorio que tenemos en Vercel:
~~~
vercel
~~~

![](../imagenes/comand-vercel.png)

**Aclaración:** si no tenemos instalado Vercel, simplemente debemos ejecutar el comando **npm install -g vercel**.

Con esto hecho, podemos proceder a ejecutar la siguiente orden para finalizar nuestro despliegue:
~~~
vercel --prod
~~~

![](../imagenes/prod-vercel.png)

Podemos ver que el proyecto se ha desplegado correctamente

![](../imagenes/dashboard-vercel.png)

![](../imagenes/despliegue-vercel-correcto.png)

**Despliegue continuo:** cada vez que hagamos **git push** a nuestro proyecto se nos actualizará el repositorio tanto en GitHub como en [Vercel](https://proyecto-idiomas.vercel.app/).

## COMPROBACIÓN DE FUNCIONAMIENTO CORRECTO USANDO UNA FUNCIÓN DE EJEMPLO
Como ya hemos comentado al principio, hemos creado el fichero **hello.js** que contiene la siguiente función de prueba:

![](../imagenes/helloVercel.png)

A continuación hacemos **git push** y nos dirigimos a nuestro repositorio en Vercel para ver que se muestra el mensaje deseado por pantalla.

![](../imagenes/hello-correcto.png)

**Aclaración:** el funcionamiento correcto de nuestro ejemplo podemos verlo en cualquier momento mientras dispongamos de [este enlace](https://proyecto-idiomas-5tf0id7p5.vercel.app/api/hello.js).
