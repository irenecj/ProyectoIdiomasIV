const Idioma = require("../src/idioma.js");
const NoString = require("../src/excepciones/NoString.js");
const NoEncontrada = require("../src/excepciones/NoEncontrada.js");
const NoOrden = require("../src/excepciones/NoOrden.js");
const NoFormato = require("../src/excepciones/NoFormato.js");
const Traduccion = require("../src/traduccion.js")


//VARIABLES A UTILIZAR
var palabra, significado;
var tam_vocab, tam_descrip;
var thrown_error;
var expectedError;
var letra;
var expresion, explicacion;
var resultado;
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
  });

  describe("Testeando el método mostrarVocab()", () => {
    test("Comprobamos que se han mostrado TODAS las palabras", () => {
      //el vector que mostramos debe ser igual que el vector de palabras, sino no se habrán mostrado todas
      var tam_vector_esperado = idioma.mostrarVocab().length;
      var tam_vocab = idioma.listado.length;
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

       expect(resultado).toBe("\nPALABRA --> "  + palabra + "\nSIGNIFICADO --> " + significado + " \n");
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
       significadoNuevo = "CAMBIO DESCRIPCIÓN DE LA MESA.";
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

});
