const Idioma = require("../src/idioma.js");
const NoEncontrada = require("../src/excepciones/NoEncontrada.js");
const NoString = require("../src/excepciones/NoString.js");

//VARIABLES A UTILIZAR
var palabra;
var significado;
var thrown_error;
var expectedError;
var letra;
const idioma = new Idioma("Hola", "Salut");

describe("Testeando la clase idioma.js", () => {

  describe("Testeando el constructor", () =>{
    test("Comprobando que funciona correctamente", () => {
      expect(idioma.listaVocab[0]).toBe("Hola");
      expect(idioma.descripcion[0]).toBe("Salut");
    });
  });
  describe("Testeando el método CompruebaString()", () => {
    test("Comprobando que lanza error si la palabra no es un string", () => {
      palabra = "1";
      thrown_error = () => idioma.ComprobarString(palabra);
      expectedError = new NoString('La palabra debe ser de tipo "string"');

      expect(thrown_error).toThrow(expectedError);
    });
  });

  describe("Testeando el método AniadirVocab()", () => {
   test("Comprobando que añade la palabra con su descripción correctamente", () => {
      palabra = "Silla";
      significado = "Chaise";
      thrown_error = () => idioma.AniadirVocab(palabra, significado);
      expectedError = new NoString('La palabra debe ser de tipo "string"');

      expect(thrown_error).not.toThrow(expectedError);
    });

   test("Comprobando que se inserta la palabra correctamente", () => {
      tam_vocab_inicial = idioma.listaVocab.length;
      palabra="Mesa";
      idioma.listaVocab.push(palabra);
      tam_vocab = idioma.listaVocab.length;

      expect(tam_vocab).toBe(tam_vocab_inicial+1);

    });
   test("Comprobando que se inserta la descripción correctamente", () => {
      tam_descrip_inicial = idioma.descripcion.length;
      descripcion = "Table";
      idioma.descripcion.push(descripcion);
      tam_descrip = idioma.descripcion.length;

      expect(tam_descrip).toBe(tam_descrip_inicial+1);
    });
  });

  describe("Testeando el método MostrarVocab()", () => {
    test("Comprobamos que los dos vectores son iguales", () => {
      tam_vocab = idioma.listaVocab.length;
      tam_descrip = idioma.descripcion.length;

      expect(tam_vocab).toEqual(tam_descrip);
    });

    test("Comprobamos que se han mostrado TODAS las palabras", () => {
      var tam_vector_esperado = idioma.MostrarVocab().length;
      var tam_vocab = idioma.listaVocab.length;
      expect(tam_vector_esperado).toEqual(tam_vocab);
    })
  });

  describe("Testeando el método MostrarPalabra()", () => {
    test("Comprobamos que los dos vectores son iguales", () => {
      tam_vocab = idioma.listaVocab.length;
      tam_descrip = idioma.descripcion.length;

      expect(tam_vocab).toEqual(tam_descrip);
    });
     test("Comprobando que notifica correctamente que la palabra no se encuentra en el listado de vocabulario", () => {
       palabra = "Gominola";
       thrown_error = () => idioma.MostrarPalabra(palabra);
       expectedError = new NoEncontrada("La palabra que busca aún no está añadida");

       expect(thrown_error).toThrow(expectedError);
     });
     test("Comprobando que funciona correctamente al pasarle una palabra existente en la lista de vocabulario", () => {
       palabra = "Mesa";
       var resultado = idioma.MostrarPalabra(palabra);
       var indicePalabra = idioma.listaVocab.indexOf(palabra);
       significado = idioma.descripcion[indicePalabra];

       expect(resultado).toBe(palabra + " : " + significado + " \n");
     });
     test("Comprobando que la palabra se corresponde con la descripción", () => {
       palabra = "Mesa";
       significado = "Table";
       var indicePalabra = idioma.listaVocab.indexOf(palabra);
       var indiceDescrip = idioma.descripcion.indexOf(significado);

       expect(indicePalabra).toEqual(indiceDescrip);
     });
  });

  describe("Testeando el método CambiarDescripcion()", () =>{
    test("Comprobando que notifica correctamente que la palabra no se encuentra en el listado de vocabulario", () => {
       palabra = "Piano";
       significado = "Piano. Instrumento musical.";
       thrown_error = () => idioma.CambiarDescripcion(palabra, significado);
       expectedError = new NoEncontrada('La palabra que busca no se ha encontrado');

       expect(thrown_error).toThrow(expectedError);
     });
     test("Comprobando que funciona correctamente al pasarle una palabra existente en la lista de vocabulario", () => {
       palabra = "Mesa";
       significadoNuevo = "Cambio descripción de la mesa";
       idioma.CambiarDescripcion(palabra, significadoNuevo);
       var indicePalabra = idioma.listaVocab.indexOf(palabra);
       significado = idioma.descripcion[indicePalabra];
       expect(significado).toBe(significadoNuevo);
     });
  });

  describe("Testeando el método ClasificaLetra()", () => {
    test("Comprobando que notifica correctamente si no hay ninguna palabra que comience por dicha letra", () => {
      letra = "W";
      thrown_error = () => idioma.ClasificaLetra(letra);
      expectedError = new NoEncontrada("No hay ninguna palabra que comience por esa letra");

      expect(thrown_error).toThrow(expectedError);
    });

    test("Comprobando que muestra el listado de palabras correctamente si la letra es mayúscula", () => {
      letra = "M";
      var resultado = idioma.ClasificaLetra(letra);

      expect(resultado.length).toBe(1);
    });

    test("Comprobando que muestra el listado de palabras correctamente si la letra es minúscula", () => {
      letra = "m";
      var resultado = idioma.ClasificaLetra(letra);

      expect(resultado.length).toBe(1);
    });
  });

});
