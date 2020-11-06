# EXPLICACIÓN DETALLADA DE LAS CLASES IMPLEMENTADAS
Para el desarrollo de nuestro proyecto hemos implementado dos clases: *idioma* y *traduccion*.

## CLASE TRADUCCION
En esta clase tenemos objetos que contienen una *palabra* junto a su *significado*, y dichos objetos serán los que guardemos en un listado en nuestra clase principal.
La clase es muy sencilla y sólo contiene métodos *get* y *set*:
- **getTraduccion():** nos devuelve un string que contiene la palabra junto con su significado.
- **getPalabra():** devuelve la palabra de dicha traducción.
- **getSignificado():** devuelve el significado de dicha traducción.
- **setPalabra(nuevaPalabra):** nos permite modificar una palabra de una traducción.
- **setSignificado(nuevoSignificado):** nos permite modificar una palabra de una traducción.

## CLASE EXPRESION
En esta clase tenemos objetos formados por una expresión popular y su explicación.
La clase es bastante simple y sólo contiene métodos *get* y *set*:
- **getExpresion():** devuelve el conjunto de la expresión popular y su explicación.
- **getExprPopular():** devuelve la expresión popular.
- **getExplicacion():** devuelve la explicación de una expresión popular.
- **setExprPopular(nuevaExpr):** nos permite modificar la expresión popular.
- **setExplicacion(nuevaExplicacion):** nos permite modificar la explicación proporcionada.


## CLASE CONDICION
Esta clase crea objetos formados por una frase y el tipo de dicha frase para poder clasificarla.
Al igual que las clases anteriores, sólo tiene implementados métodos *get* y *set*:
- **getTipo():** devuelve el tipo de frase que tenemos.
- **getFrase():** devuelve la frase.
- **setTipo(tipoNuevo):** nos permite cambiar el tipo de la frase.
- **setFrase(fraseNueva):** nos permite cambiar la frase en cuestión.

## CLASE IDIOMA
Es nuestra clase principal y en la que tenemos un listado formado por palabras junto su traducción, y una serie de expresiones populares. Además, añadimos información como el *idiomaBase*, que es el idioma que sabemos, y el *idiomaTraducir*, que es el idioma al que vamos a traducir, es decir, el idioma que estamos aprendiendo.
Dentro de esta clase tenemos una serie de funciones relacionadas con las historias de usuario y dos funciones que se encargan de hacer comprobaciones.
- **comprobarString(cadena):** comprueba que la cadena que pasamos es de tipo string, ya que no tendría sentido guardar símbolos o enteros.
- **comprobarFormato(cadena):** comprobamos que el usuario nos introduce la/las palabra/s que quiere registrar y cuando acaba pone un punto final.
- **aniadirVocab(palabra,significado):** este método está relacionado con la [HU2](https://github.com/irenecj/proyecto-idiomas/issues/7) y simplemente añade objetos de tipo *Traduccion*, es decir, palabras junto con su significado, a un listado.
- **mostrarVocab():** se encarga de mostrarnos un listado con todas las palabras que hemos añadido hasta el momento y está relacionado con la [HU1.](https://github.com/irenecj/proyecto-idiomas/issues/6)
- **mostrarPalabra(palabra):** con este método permitimos que el usuario pueda buscar una palabra concreta junto con su traducción, para así evitar que le aparezca todo el listado y ahí tenga que ir palabra por palabra hasta que encuentre la que desee. Se piensa en la facilidad de uso y comodidad para el usuario y está relacionada con la [HU3.](). Su funcionamiento se basa en buscar si la palabra que nos proporciona el usuario se encuentra dentro de nuestro listado y una vez la encontramos nos quedamos con el índice en el que se sitúa, para así poder obtener la traducción completa. En caso de que la palabra no exista se lanzará una excepción.
- **cambiarSignificado(palabra, descripcionNueva):** como todos somos humanos puede pasar que nos equivoquemos y una vez guardada una palabra nos demos cuenta de que su significado no es el que le corresponde o simplemente se nos ha ocurrido una forma más adecuada de explicar que significa dicha palabra. Sobre esto trata la [HU4](https://github.com/irenecj/proyecto-idiomas/issues/18) y para solucionarlo hemos implementado dicho método, que busca la palabra en nuestro listado de palabras, obtiene la posición donde se sitúa y a partir de ahí, con el método *setSignificado(significadoNuevo)* cambiamos el significado que tenía por el nuevo.
- **clasificaLetra(letra):** la finalidad de este método reside en la [HU5](https://github.com/irenecj/proyecto-idiomas/issues/20) y consiste en poder mostrar sólo las palabras, junto con su traducción, que empiecen por una determinada letra. De nuevo pretendemos facilitar el trabajo al usuario. En esta ocasión tenemos un bucle en el que mediante una variable, llamada *comienza*, comprobamos si una palabra empieza por la letra proporcionada, en caso de que sea *true* añadimos la traducción a un vector. Si no se encuentra ninguna palabra que empiece por la letra se lanzará una excepción.
- **ordenarAlfabeto(orden):** este método permite que el usuario decida si quiere que se le muestre el listado de palabras en orden *ascendente* o *descendente*, como se indica en la [HU8.](https://github.com/irenecj/proyecto-idiomas/issues/25) Para su implementación hemos hecho uso de un enumerador en el que indicamos si el orden será 'ASCENDENTE' o 'DESCENDENTE', y en función de lo indicado se ordena el vector con las traduciones de una forma o de otra. En el caso de introducir un orden que no sea válido, por ejemplo 'NUMÉRICO' se lanzará una excepción.
- **aniadirExpresiones(expresion, explicacion):** la implementación de este método reside en la [HU6](https://github.com/irenecj/proyecto-idiomas/issues/21) y lo que pretendemos es permitir que un usuario registre las expresiones populares que va aprendiendo junto con la explicación de dicha frase.
- **mostrarExpresiones():** este método se relaciona con la [HU7](https://github.com/irenecj/proyecto-idiomas/issues/22) y simplemente muestra una lista con todas las expresiones registradas y su explicación.
- **añadirFrase(frase,tipo):** en este caso nos hemos centrado en la [HU9](https://github.com/irenecj/proyecto-idiomas/issues/41) y básicamente lo que hacemos es añadir frases junto con el tipo de éstas, el cual tiene que pertenecer a un enumerador que contiene 'SALUDO', 'PEDIR DISCULPAS' y 'PRESENTARSE'.
- **mostrarFrases(tipo):** este método sirve para poder mostrar las frases pertenecientes a un tipo concreto, es decir, si en un momento concreto queremos presentarnos y no nos acordamos de ninguna frase para ello, podremos buscar todas aquellas frases relacionadas con presentarse. Está relacionado con la [HU10](https://github.com/irenecj/proyecto-idiomas/issues/42).
- **autoevaluacion(definicion,palAsociada):** este método se corresponde con la última Historia de Usuario, la [HU11](), cuya descripción nos dice que un usuario debe poder autoevaluar su conocimiento sobre las palabras aprendidas. Para poder implementar dicha función hemos recurrido a funciones auxiliares:
  - **getRandomInt:** esta función genera un número aleatorio.
  - **generarDefinicion():** esta función hace uso de la anterior y se basa en generar una definición aleatoria de aquellas que se encuentran en el listado de traducciones.
El funcionamiento de este método consiste en ver si la palabra que ha introducido el usuario coincide con la definición generada. Si coincide, sumaremos un acierto, en caso contrario no sumaremos nada.
Además, si la palabra introducida no existe en el listado de traducciones, se mostrará un error.
