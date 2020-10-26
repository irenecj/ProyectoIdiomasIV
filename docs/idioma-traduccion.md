# EXPLICACIÓN DETALLADA DE LAS CLASES IMPLEMENTADAS
Para el desarrollo de nuestro proyecto hemos implementado dos clases: *idioma* y *traduccion*.

## CLASE TRADUCCION
En esta clase tenemos objetos que contienen una *palabra* junto a su *significado*, y dichos objetos serán los que guardemos en un listado en nuestra clase principal.
La clase es muy sencilla y sólo contiene métodos *get* y *set*:
- **getTraduccion():** nos devuelve un string que contiene la palabra junto con su significado.
- **getPalabra():** nos devuelve la palabra de dicha traducción.
- **getSignificado():** nos devuelve el significado de dicha traducción.
- **setPalabra(nuevaPalabra):** nos permite modificar una palabra de una traducción.
- **setSignificado(nuevoSignificado):** nos permite modificar una palabra de una traducción.

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
- **ordenarAlfabeto(orden):**

- **aniadirExpresiones(expresion, explicacion):** la implementación de este método reside en la [HU6](https://github.com/irenecj/proyecto-idiomas/issues/21) y lo que pretendemos es permitir que un usuario registre las expresiones populares que va aprendiendo junto con la explicación de dicha frase.
- **mostrarExpresiones():** este último método se relaciona con la [HU7](https://github.com/irenecj/proyecto-idiomas/issues/22) y simplemente muestra una lista con todas las expresiones registradas y su explicación.
