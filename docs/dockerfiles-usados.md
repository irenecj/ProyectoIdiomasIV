# DOCKERFILES QUE HAN SIDO USADOS PARA LAS PRUEBAS

## NODE VERSIÓN 14 Y 15
Para hacer las pruebas con las diferentes imágenes tanto de node en la versión 15 como en la 14 nos hemos basado en el siguiente fichero:
![](imagenes/dockerfileInicial.png)

El único cambio que hemos tenido que realizar es cambiar la primera línea de nuestro Dockerfile, donde tendremos que indicar que imagen de node estamos usando, por ejemplo, *node14*, *node15-alpine3.10*, entre otras.

Vemos que hacemos uso del usuario *node* que viene ya con la imagen y creamos una carpeta sobre la cual este usuario tendrá permisos, una vez hecho esto establecemos el directorio de trabajo.

Tras hacer esto debemos crearnos el directorio de *node_modules* en nuestro directorio de trabajo y darle permisos sobre dicho directorio a nuestro usuario.

Establecemos node como nuestro usuario sin privilegios y copiamos los ficheros de dependencias. A continuación, debemos instalar las dependencias y una vez instaladas borramos dicho fichero.

El siguiente paso es crear una variable de entorno con la ruta para node_modules y cambiamos el directorio de trabajo a *test*.

Finalmente ejecutamos los tests con *grunt test*.

## ALPINE COMO SISTEMA OPERATIVO
![](imagenes/dockerfile-alpine.png)

En este caso lo único que cambia respecto al anterior es que la imagen no trae un usuario, por tanto debemos crearlo nosotros y además, tenemos que instalar *npm* y *node*. Para ello, creamos un usuario y una carpeta sobre la cual tendrá permisos. Hecho esto debemos crear un directorio para *node_modules*, le damos permisos al usuario e instalamos npm y node.

El resto del dockerfile es similar al anterior.

## UBUNTU COMO SISTEMA OPERATIVO
![](imagenes/dockerfile-ubu.png)

Aquí ocurre igual que con *Alpine*, debemos añadir un usuario y tenemos que instalar *npm* y *node*.

Una vez hecho esto, el resto del dockerfile se queda igual que en los anteriores.
