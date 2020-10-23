const Idioma = require("../src/idioma.js");
const NoString = require("../src/excepciones/NoString.js");
const NoEncontrada = require("../src/excepciones/NoEncontrada.js");
const NoOrden = require("../src/excepciones/NoOrden.js");
const NoFormato = require("../src/excepciones/NoFormato.js");


//VARIABLES A UTILIZAR
var palabra, significado;
var tam_vocab, tam_descrip;
var thrown_error;
var expectedError;
var letra;
var expresion, explicacion;
var resultado;
const idioma = new Idioma("ORDENADOR.", "ORDINATEUR. SINÓNIMO DE OCMPUTADOR O COMPUTADOR. SE REFIERE A LA MÁQUINA ELECTRÓNICA CAPAZ DE ALMACENAR INFORMACIÓN Y TRATARLA AUTOMÁTICAMENTE");

describe("Testeando la clase idioma.js", () => {

  describe("Testeando el constructor", () =>{
    test("Comprobando que funciona correctamente", () => {
      expect(idioma.listaVocab[0]).toBe("ORDENADOR.");
      expect(idioma.descripcion[0]).toBe("ORDINATEUR. SINÓNIMO DE OCMPUTADOR O COMPUTADOR. SE REFIERE A LA MÁQUINA ELECTRÓNICA CAPAZ DE ALMACENAR INFORMACIÓN Y TRATARLA AUTOMÁTICAMENTE");
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
   test("Comprobando que no se lanza el error al pasarle un 'string'", () => {
      palabra = "SILLA.";
      significado = "CHAISE.ASIENTO INDIVIDUAL CON PATAS Y RESPALDO.";
      thrown_error = () => idioma.aniadirVocab(palabra, significado);
      expectedError = new NoString('La palabra debe ser de tipo "string"');

      expect(thrown_error).not.toThrow(expectedError);
    });

   test("Comprobando que se insertan la palabra y la descripción correctamente", () => {
     //al insertar la palabra el tamaño del vector 'listaVocab' debe incrementar en 1
      var tam_vocab_inicial = idioma.listaVocab.length;
      var tam_descrip_inicial = idioma.descripcion.length;
      palabra="MESA.";
      descripcion = "TABLE.MUEBLE FORMADO POR UN TABLERO HORIZONTAL, SOSTENIDO POR UNO O VARIOS PIES, CON LA ALTURA CONVENIENTE PARA PODER REALIZAR ALGUNA ACTIVIDAD SOBRE ELLA O DEJAR COSAS ENCIMA.";

      idioma.aniadirVocab(palabra, descripcion);

      tam_vocab = idioma.listaVocab.length;
      tam_descrip = idioma.descripcion.length;

      expect(tam_vocab).toBe(tam_vocab_inicial+1);
      expect(tam_descrip).toBe(tam_descrip_inicial+1);

    });
    test("Comprobando que la palabra y su significando se añaden correctamente", () => {
      //el último elemento de cada vector, debe ser la palabra y el significado que acabamos de añadir
      palabra = "INFORMÁTICA.";
      significado = "INFORMATIQUE.CONJUNTO DE CONOCIMIENTOS TÉCNICOS QUE SE OCUPAN DEL TRATAMIENTO AUTOMÁTICO DE LA INFORMACIÓN POR MEDIO DE COMPUTADORAS.";

      idioma.aniadirVocab(palabra, significado);

      tam_vocab = idioma.listaVocab.length;
      tam_descrip = idioma.descripcion.length;
      var ultimoLista = idioma.listaVocab[tam_vocab-1];
      var ultimoDescrip = idioma.descripcion[tam_descrip-1];

      expect(ultimoLista).toBe("INFORMÁTICA.");
      expect(ultimoDescrip).toBe("INFORMATIQUE.CONJUNTO DE CONOCIMIENTOS TÉCNICOS QUE SE OCUPAN DEL TRATAMIENTO AUTOMÁTICO DE LA INFORMACIÓN POR MEDIO DE COMPUTADORAS.");
    });
  });

  describe("Testeando el método mostrarVocab()", () => {
    test("Comprobamos que los dos vectores son iguales", () => {
      //para que cada palabra coincida con su significado, los dos vectores deben tener el mismo tamaño
      tam_vocab = idioma.listaVocab.length;
      tam_descrip = idioma.descripcion.length;

      expect(tam_vocab).toEqual(tam_descrip);
    });

    test("Comprobamos que se han mostrado TODAS las palabras", () => {
      //el vector que mostramos debe ser igual que el vector de palabras, sino no se habrán mostrado todas
      var tam_vector_esperado = idioma.mostrarVocab().length;
      var tam_vocab = idioma.listaVocab.length;
      expect(tam_vector_esperado).toEqual(tam_vocab);
    });
  });

  describe("Testeando el método mostrarPalabra()", () => {
    //para que la palabra coincida con su significado, los dos vectores deben tener el mismo tamaño
    test("Comprobamos que los dos vectores son iguales", () => {
      tam_vocab = idioma.listaVocab.length;
      tam_descrip = idioma.descripcion.length;

      expect(tam_vocab).toEqual(tam_descrip);
    });
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
       var indicePalabra = idioma.listaVocab.indexOf(palabra);
       significado = idioma.descripcion[indicePalabra];

       expect(resultado).toBe(palabra + " : " + significado + " \n");
     });
     test("Comprobando que la palabra se corresponde con la descripción", () => {
       //comprobamos que el significado es el de dicha palabra y no otro
       palabra = "MESA.";
       significado = "TABLE.MUEBLE FORMADO POR UN TABLERO HORIZONTAL, SOSTENIDO POR UNO O VARIOS PIES, CON LA ALTURA CONVENIENTE PARA PODER REALIZAR ALGUNA ACTIVIDAD SOBRE ELLA O DEJAR COSAS ENCIMA.";
       var indicePalabra = idioma.listaVocab.indexOf(palabra);
       var indiceDescrip = idioma.descripcion.indexOf(significado);

       expect(indicePalabra).toEqual(indiceDescrip);
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
       significadoNuevo = "CAMBIO DESCRIPCIÓN DE LA MESA.";
       idioma.cambiarSignificado(palabra, significadoNuevo);
       var indicePalabra = idioma.listaVocab.indexOf(palabra);
       significado = idioma.descripcion[indicePalabra];
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

    test("Comprobando que muestra el listado de palabras correctamente si la letra es mayúscula", () => {
      //debe ser indiferente si le pasamos una letra mayúscula o minúscula.
      letra = "M";
      resultado = idioma.clasificaLetra(letra);

      expect(resultado.length).toBe(1);
    });

    test("Comprobando que muestra el listado de palabras correctamente si la letra es minúscula", () => {
      //debe ser indiferente si le pasamos una letra mayúscula o minúscula.
      letra = "m";
      resultado = idioma.clasificaLetra(letra);

      expect(resultado.length).toBe(1);
    });
  });

  describe("Testeando el método ordenarAlfabeto()", () => {
    test("Comprobando que se lanza una excepción si no se encuentra ninguna palabra", () => {
      thrown_error = () => idioma.ordenarAlfabeto("OrdenNoValido");
      expectedError = new NoOrden("El orden introducido no es válido, debe introducir 'ascendente' o 'desscendente'");

      expect(thrown_error).toThrow(expectedError);

    });
    test("Comprobando que ordena ascendentemente de forma correcta", () => {
      var idio_nuevo = new Idioma("VINO.","VIN.");
      idio_nuevo.aniadirVocab("BONITO.", "JOLIE.");
      idio_nuevo.ordenarAlfabeto("Ascendente");

      expect(idio_nuevo.listaVocab[0]).toBe("BONITO.");
      expect(idio_nuevo.listaVocab[1]).toBe("VINO.");

    });
    test("Comprobando que ordena descendentemente de forma correcta", () => {
      var idio_nuevo = new Idioma("VINO.", "VIN.");
      idio_nuevo.aniadirVocab("BONITO.", "JOLIE.");
      idio_nuevo.ordenarAlfabeto("Descendente");

      expect(idio_nuevo.listaVocab[0]).toBe("VINO.");
      expect(idio_nuevo.listaVocab[1]).toBe("BONITO.");
    });
  });
  describe("Testeando el método aniadirExpresiones()", () => {
    test("Comprobando que se incrementa el tamaño del vector al añadir", () => {
      expresion = "MONTAR UN POLLO.";
      explicacion = "TE HAS VENIDO ARRIBA. HAS MONTADO UNA BRONCA SIN VENIR A CUENTO. UN ESCÁNDALO."
      var tamañoOriginal = idioma.expresiones.length;
      idioma.aniadirExpresiones(expresion, explicacion);
      var tamañoActual = idioma.expresiones.length;

      expect(tamañoActual).toEqual(tamañoOriginal + 1);
    });
    test("Comprobamos que la expresión se ha añadido correctamente", () => {
      expresion = "HABLAR POR LOS CODOS.";
      significado = "CUANDO UNA PERSONA HABLA MUCHO O ESTÁ HABLANDO EN TODO MOMENTO, NO SE CALLA NUNCA.";

      idioma.aniadirExpresiones(expresion, significado);

      var tamaño = idioma.expresiones.length;
      var ultimo = idioma.expresiones[tamaño - 1];
      var expresionEsperada = "HABLAR POR LOS CODOS. --> CUANDO UNA PERSONA HABLA MUCHO O ESTÁ HABLANDO EN TODO MOMENTO, NO SE CALLA NUNCA.";

      expect(ultimo).toBe(expresionEsperada);
    });
  });
  describe("Testeando el método mostrarExpresiones()", () => {
    test("Comprobando que se muestran TODAS las expresiones", () => {
      //el tamaño del vector devuelto tiene que ser el mismo que el del vector de expresiones
      var tam_vector_expresiones = idioma.mostrarVocab().length;
      var tam_vocab = idioma.listaVocab.length;
      expect(tam_vector_expresiones).toEqual(tam_vocab);
    });
  });


});
