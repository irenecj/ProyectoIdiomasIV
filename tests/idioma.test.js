const Idioma = require("../src/idioma.js");
const NoString = require("../src/excepciones/NoString.js");
const NoEncontrada = require("../src/excepciones/NoEncontrada.js");
const NoOrden = require("../src/excepciones/NoOrden.js");
const NoFormato = require("../src/excepciones/NoFormato.js");
const NoAcierto = require("../src/excepciones/NoAcierto.js");
const Encontrada = require("../src/excepciones/Encontrada.js");
const Traduccion = require("../src/traduccion.js");
const Expresion = require("../src/expresion.js");
const Cotidiano = require("../src/cotidiano.js");
const enumOrden = ["ASCENDENTE" , "DESCENDENTE"];

//VARIABLES A UTILIZAR
var palabra, significado;
var tam_vocab;
var thrown_error;
var expectedError;
var letra;
var expresion, explicacion;
var resultado;
var frase;
var tipo;
const idioma = new Idioma("Español", "Francés");

describe("Testeando la clase idioma.js", () => {
  describe("Testeando el constructor", () =>{
    test("Comprobando que funciona correctamente", () => {
      expect(idioma.idiomaBase).toBe("Español");
      expect(idioma.idiomaTraducir).toBe("Francés");
    });
  });
  describe("Testeando el método compruebaString()", () => {
    test("Comprobando que lanza error si la palabra no es un string", () => {
      palabra = "1";
      thrown_error = () => idioma.comprobarString(palabra);
      expectedError = new NoString('La palabra debe ser de tipo "string"');

      expect(thrown_error).toThrow(expectedError);
    });
  });
  describe("Testeando el método comprobarFormato()", () => {
    test("Comprobando que lanza error si la cadena no cumple el formato", () => {
      cadena = "ESTUCHE";
      thrown_error = () => idioma.comprobarFormato(cadena);
      expectedError = new NoFormato('El formato introducido no es válido, debe poner punto final.');

      expect(thrown_error).toThrow(expectedError);
    });
  });
  describe("Testeando el método aniadirVocab()", () => {
   test("Comprobando que se insertan la palabra y la descripción correctamente", () => {
     //al insertar la palabra el tamaño del vector 'listaVocab' debe incrementar en 1
      var tamInicial = idioma.listado.length;

      palabra="MESA.";
      descripcion = "TABLE.MUEBLE FORMADO POR UN TABLERO HORIZONTAL, SOSTENIDO POR UNO O VARIOS PIES, CON LA ALTURA CONVENIENTE PARA PODER REALIZAR ALGUNA ACTIVIDAD SOBRE ELLA O DEJAR COSAS ENCIMA.";
      idioma.aniadirVocab(palabra, descripcion);

      var tamFinal = idioma.listado.length;

      expect(tamFinal).toBe(tamInicial+1);
    });
    test("Comprobando que la palabra y su significando se añaden correctamente", () => {
      //el último elemento de cada vector, debe ser la palabra y el significado que acabamos de añadir
      palabra = "INFORMÁTICA.";
      significado = "INFORMATIQUE.CONJUNTO DE CONOCIMIENTOS TÉCNICOS QUE SE OCUPAN DEL TRATAMIENTO AUTOMÁTICO DE LA INFORMACIÓN POR MEDIO DE COMPUTADORAS.";

      idioma.aniadirVocab(palabra, significado);

      tam_listado = idioma.listado.length;
      var ultimaPalabra = idioma.listado[tam_listado-1].getPalabra();
      var ultimaDescrip = idioma.listado[tam_listado-1].getSignificado();

      expect(ultimaPalabra).toBe("INFORMÁTICA.");
      expect(ultimaDescrip).toBe("INFORMATIQUE.CONJUNTO DE CONOCIMIENTOS TÉCNICOS QUE SE OCUPAN DEL TRATAMIENTO AUTOMÁTICO DE LA INFORMACIÓN POR MEDIO DE COMPUTADORAS.");
    });
    test("Comprobando que no nos permite añadir palabras ya existentes.", () => {
      palabra = "INFORMÁTICA.";
      significado = "INFORMATIQUE. ESTE ES OTRO SIGNIFICADO DE INFORMÁTICA.";

      thrown_error = () => idioma.aniadirVocab(palabra,significado);
      expectedError = new Encontrada('La palabra introducida ya existe, por favor registre otra palabra.');
      expect(thrown_error).toThrow(expectedError);
    });
  });

  describe("Testeando el método mostrarVocab()", () => {
    test("Comprobamos que se han mostrado TODAS las palabras", () => {
      //el vector que mostramos debe ser igual que el vector de palabras, sino no se habrán mostrado todas
      var tam_vector_esperado = idioma.mostrarVocab().length;
      tam_vocab = idioma.listado.length;
      expect(tam_vector_esperado).toEqual(tam_vocab);
    });
  });

  describe("Testeando el método mostrarPalabra()", () => {
     test("Comprobando que se lanza una excepción si no se encuentra ninguna palabra", () => {
       //mostramos al usuario un mensaje que indica que la palabra no existe, permitiéndole buscar otra o realizar otra acción como añadir esa palabra
       palabra = "OSO.";
       significado = "OURS.ANIMAL.";
       thrown_error = () => idioma.mostrarPalabra(palabra, significado);
       expectedError = new NoEncontrada('La palabra que busca no se ha encontrado');

       expect(thrown_error).toThrow(expectedError);
     });
     test("Comprobando que funciona correctamente al pasarle una palabra existente en la lista de vocabulario", () => {
       //nos devuelve la palabra con su significado
       palabra = "MESA.";
       resultado = idioma.mostrarPalabra(palabra);
       for(var i in idioma.listado){
         if(palabra == idioma.listado[i].getPalabra()){
           var indicePalabra = i;
         }
       }
       significado = idioma.listado[indicePalabra].getSignificado();

       expect(resultado).toBe(significado);
     });
     test("Comprobando que la palabra se corresponde con la descripción", () => {
       //comprobamos que el significado es el de dicha palabra y no otro
       palabra = "MESA.";
       significado = "TABLE.MUEBLE FORMADO POR UN TABLERO HORIZONTAL, SOSTENIDO POR UNO O VARIOS PIES, CON LA ALTURA CONVENIENTE PARA PODER REALIZAR ALGUNA ACTIVIDAD SOBRE ELLA O DEJAR COSAS ENCIMA.";
       for(var i in idioma.listado){
         if(palabra == idioma.listado[i].getPalabra()){
           var indicePalabra = i;
         }
       }

      for(var j in idioma.listado){
         if(significado == idioma.listado[j].getSignificado()){
            var indiceSignif = j;
          }
       }

       expect(indicePalabra).toEqual(indiceSignif);
     });
  });

  describe("Testeando el método cambiarSignificado()", () =>{
    test("Comprobando que se lanza una excepción si no se encuentra ninguna palabra", () => {
      //si la palabra no se encuentra notificamos al usuario para que así decida si realizar otra acción, como añadir dicha palabra
       palabra = "PIANO.";
       significado = "PIANO.INSTRUMENTO MUSICAL.";
       thrown_error = () => idioma.cambiarSignificado(palabra,significado);
       expectedError = new NoEncontrada('La palabra que busca no se ha encontrado');

       expect(thrown_error).toThrow(expectedError);
     });
     test("Comprobando que funciona correctamente al pasarle una palabra existente en la lista de vocabulario", () => {
       //vemos que en el array 'descripcion' ahora el significado correspondiente a la palabra es el nuevo
       palabra = "MESA.";
       significadoNuevo = "TABLE.CAMBIO DESCRIPCIÓN DE LA MESA.";
       for(var i in idioma.listado){
         if(palabra == idioma.listado[i].getPalabra()){
           var indicePalabra = i;
         }
       }
       idioma.cambiarSignificado(palabra, significadoNuevo);

       significado = idioma.listado[indicePalabra].getSignificado();

       expect(significado).toBe(significadoNuevo);
     });
  });

  describe("Testeando el método clasificaLetra()", () => {
    test("Comprobando que se lanza una excepción si no se encuentra ninguna palabra", () => {
      //si no hay palabras que empiecen por dicha letra se notifica al usuario
      letra = "W";
      thrown_error = () => idioma.clasificaLetra(letra);
      expectedError = new NoEncontrada('La palabra que busca no se ha encontrado');

      expect(thrown_error).toThrow(expectedError);
    });

    test("Comprobando que muestra el listado de palabras correctamente", () => {
      //debe ser indiferente si le pasamos una letra mayúscula o minúscula.
      letra = "M";
      resultado = idioma.clasificaLetra(letra);

      expect(resultado.length).toBe(1);
    });
  });
  describe("Testeando el método ordenarAlfabeto()", () => {
    test("Comprobando que se lanza una excepción si no se encuentra ninguna palabra", () => {
      thrown_error = () => idioma.ordenarAlfabeto("OrdenNoValido");
      expectedError = new NoOrden("El orden introducido no es válido, debe introducir 'ASCENDENTE' o 'DESCENDENTE'");

      expect(thrown_error).toThrow(expectedError);

    });
    test("Comprobando que ordena ascendentemente de forma correcta", () => {
      var idio_nuevo = new Idioma("Español", "Francés");
      idio_nuevo.aniadirVocab("VINO.", "VIN.");
      idio_nuevo.aniadirVocab("BONITO.", "JOLIE.");
      idio_nuevo.ordenarAlfabeto(enumOrden[0]);

      expect(idio_nuevo.listado[0].getPalabra()).toBe("BONITO.");
      expect(idio_nuevo.listado[1].getPalabra()).toBe("VINO.");

    });
    test("Comprobando que ordena descendentemente de forma correcta", () => {
      var idio_nuevo = new Idioma("Español", "Francés");
      idio_nuevo.aniadirVocab("VINO.", "VIN.");
      idio_nuevo.aniadirVocab("BONITO.", "JOLIE.");
      idio_nuevo.ordenarAlfabeto(enumOrden[1]);

      expect(idio_nuevo.listado[0].getPalabra()).toBe("VINO.");
      expect(idio_nuevo.listado[1].getPalabra()).toBe("BONITO.");
    });
  });

  describe("Testeando el método aniadirExpresiones()", () => {
    test("Comprobando que se incrementa el tamaño del vector al añadir", () => {
      expresion = "C'EST SIMPLE COMME BONJOUR.";
      explicacion = "SE USA CUANDO ALGO ES TAN FÁCIL COMO DECIR HOLA, ES DECIR, CUANDO ALGO ES FACILÍSIMO."
      var tamañoOriginal = idioma.expresiones.length;
      idioma.aniadirExpresiones(expresion, explicacion);
      var tamañoActual = idioma.expresiones.length;

      expect(tamañoActual).toEqual(tamañoOriginal + 1);
    });
    test("Comprobamos que la expresión se ha añadido correctamente", () => {
      expresion = "IL NE FAUT PAS POUSSER MÉMÉ DANS LES ORTIES.";
      significado = "LITERALMENTE SIGNIFICA QUE NO DEBEMOS TIRAR A LA ABUELA A LAS ORTIGAS, Y SE USA PARA DECIR QUE NO DEBEMOS EXAGERAR. SU SIGNIFICADO SE DEBE A QUE NUNCA DEBERÍAMOS TIRAR A NUESTRA ABUELA A LAS ORTIGAS, Y SI LO HACEMOS SERÁ UNA EXAGERACIÓN.";

      idioma.aniadirExpresiones(expresion, significado);

      var tamaño = idioma.expresiones.length;
      var ultimaExprPopu = idioma.expresiones[tamaño - 1].getExprPopular();
      var ultimaExplicacion = idioma.expresiones[tamaño - 1].getExplicacion();

      expect(ultimaExprPopu).toBe("IL NE FAUT PAS POUSSER MÉMÉ DANS LES ORTIES.");
      expect(ultimaExplicacion).toBe("LITERALMENTE SIGNIFICA QUE NO DEBEMOS TIRAR A LA ABUELA A LAS ORTIGAS, Y SE USA PARA DECIR QUE NO DEBEMOS EXAGERAR. SU SIGNIFICADO SE DEBE A QUE NUNCA DEBERÍAMOS TIRAR A NUESTRA ABUELA A LAS ORTIGAS, Y SI LO HACEMOS SERÁ UNA EXAGERACIÓN.")

    });
    test("Comprobamos que no se permite añadir una expresión que ya existe", () => {
      expresion = "IL NE FAUT PAS POUSSER MÉMÉ DANS LES ORTIES.";
      significado = "ESTA ES OTRA EXPLICACIÓN DE LA EXPRESIÓN PROPORCIONADA ANTERIORMENTE.";

      thrown_error = () => idioma.aniadirExpresiones(expresion,significado);
      expectedError = new Encontrada('La expresión introducida ya existe, por favor registre otra expresión.');

      expect(thrown_error).toThrow(expectedError);

    });
  });
  describe("Testeando el método mostrarExpresiones()", () => {
    test("Comprobando que se muestran TODAS las expresiones", () => {
      //el tamaño del vector devuelto tiene que ser el mismo que el del vector de expresiones
      var tam_vector_expresiones = idioma.mostrarExpresiones().length;
      tam_vocab = idioma.listado.length;
      expect(tam_vector_expresiones).toEqual(tam_vocab);
    });
    test("Comprobando que funciona correctamente", () => {
      var expresion1 = "EXPRESIÓN --> " + "C'EST SIMPLE COMME BONJOUR." + "\nESTA EXPRESIÓN QUIERE DECIR --> " + "SE USA CUANDO ALGO ES TAN FÁCIL COMO DECIR HOLA, ES DECIR, CUANDO ALGO ES FACILÍSIMO.\n";
      var expresion2 = "EXPRESIÓN --> " + "IL NE FAUT PAS POUSSER MÉMÉ DANS LES ORTIES." + "\nESTA EXPRESIÓN QUIERE DECIR --> " + "LITERALMENTE SIGNIFICA QUE NO DEBEMOS TIRAR A LA ABUELA A LAS ORTIGAS, Y SE USA PARA DECIR QUE NO DEBEMOS EXAGERAR. SU SIGNIFICADO SE DEBE A QUE NUNCA DEBERÍAMOS TIRAR A NUESTRA ABUELA A LAS ORTIGAS, Y SI LO HACEMOS SERÁ UNA EXAGERACIÓN.\n";
      var vectorEsperado = [];
      vectorEsperado.push(expresion1);
      vectorEsperado.push(expresion2);
      var vectorObtenido = [];
      vectorObtenido = idioma.mostrarExpresiones();

      expect(vectorObtenido).toStrictEqual(vectorEsperado)
      
    
    });
  });
  describe("Testeando el método aniadirFrase()", () => {
    test("Comprobando que se incrementa el tamaño del vector al añadir", () => {
      frase = "BONJOUR, COMMENT ÇA VA?. -> BUENOS DÍAS, ¿QUÉ TAL?.";
      tipo = "SALUDO.";
      var tamañoOriginal = idioma.frasesCot.length;
      idioma.aniadirFrase(frase,tipo);
      var tamañoActual = idioma.frasesCot.length;

      expect(tamañoActual).toEqual(tamañoOriginal + 1);
    });
    test("Comprobamos que la expresión se ha añadido correctamente", () => {
      frase = "DÉSOLÉ, JE NE VOULAIS PAS. -> PERDÓN, FUE SIN QUERER.";
      tipo = "PEDIR DISCULPAS.";

      idioma.aniadirFrase(frase,tipo);

      var tamaño = idioma.frasesCot.length;
      var ultimaFrase = idioma.frasesCot[tamaño - 1].getFrase();
      var ultimoTipo = idioma.frasesCot[tamaño -1].getTipo();

      expect(ultimaFrase).toBe("DÉSOLÉ, JE NE VOULAIS PAS. -> PERDÓN, FUE SIN QUERER.");
      expect(ultimoTipo).toBe("PEDIR DISCULPAS.");
    });
  });
  describe("Testeando el método mostrarFrases()", () => {
    test("Comprobando que se muestra TODAS las expresiones del tipo indicado", () => {
      //añadimos otra frase que sea un saludo
      frase = "À BIENTÔT. -> HASTA PRONTO.";
      tipo = "SALUDO."
      idioma.aniadirFrase(frase,tipo);
      //ahora tenemos 2 frases de este tipo
      var tipo_saludo = 2;
      var devueltas = idioma.mostrarFrases(tipo).length;

      expect(devueltas).toBe(tipo_saludo);

    });
  });
  describe("Testeando el método generarDefinicion()", () => {
    test("Comprobando que la definición generada existe sin contar la traducción", () => {
      //creamos un vector de definiciones
      var definiciones = ["CAMBIO DESCRIPCIÓN DE LA MESA.", "CONJUNTO DE CONOCIMIENTOS TÉCNICOS QUE SE OCUPAN DEL TRATAMIENTO AUTOMÁTICO DE LA INFORMACIÓN POR MEDIO DE COMPUTADORAS." ];
      var defAleatoria = idioma.generarDefinicion();
      var defEsperada = definiciones[defAleatoria];

      //miramos que la definición esté en el array
      expect.arrayContaining(defEsperada);
    });
  });
  describe("Testeando el método autoevaluacion()", () => {
    // test("Comprobando que la palabra introducida se corresponde con la definición proporcionada", () => {
    //   var definicion = "CONJUNTO DE CONOCIMIENTOS TÉCNICOS QUE SE OCUPAN DEL TRATAMIENTO AUTOMÁTICO DE LA INFORMACIÓN POR MEDIO DE COMPUTADORAS.";
    //   var palabra = "INFORMATIQUE.";
    //
    //   var aciertos = idioma.autoevaluacion(definicion, palabra);
    //
    //   expect(aciertos).toBe(1);
    // });
    // test("Comprobando que la palabra introducida no se corresponde con la definición proporcionada", () => {
    //   var definicion = "CONJUNTO DE CONOCIMIENTOS TÉCNICOS QUE SE OCUPAN DEL TRATAMIENTO AUTOMÁTICO DE LA INFORMACIÓN POR MEDIO DE COMPUTADORAS.";
    //   var palabra = "TABLE.";
    //
    //
    //   var aciertos = idioma.autoevaluacion(definicion, palabra);
    //
    //   expect(aciertos).toBe(0);
    // });
    test("Comprobando que lanza un error si se introduce una palabra que no está registrada", () => {
      var definicion = "CAMBIO DESCRIPCIÓN DE LA MESA.";
      var palabra = "TELÉFONO.";

      thrown_error = () => idioma.autoevaluacion(definicion, palabra);
      expectedError = new NoAcierto('La palabra introducida no se ha registrado aún. Pruebe con una palabra de las que ha aprendido.');

      expect(thrown_error).toThrow(expectedError);
    });
  });
});
