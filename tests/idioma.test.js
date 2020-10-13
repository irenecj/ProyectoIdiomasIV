const Idioma = require("../src/idioma.js");

describe("Testeando la clase idioma.js", () => {
  const idioma = new Idioma();

  describe("Testeando el método CompruebaString()", () => {
    test("Comprobando que lanza error si la palabra no es un string", () => {
      var palabra = "1";
      var thrown_error = () => idioma.ComprobarString(palabra);
      var expectedError = new Error('La palabra debe ser de tipo "string"');

      expect(thrown_error).toThrow(expectedError);
    });
  });

  describe("Testeando el método AniadirVocab()", () => {
   test("Comprobando que añade la palabra con su descripción correctamente", () => {
      var palabra = "silla";
      var significado = "chaise";
      expect(() => {
        idioma.AniadirVocab(palabra,significado);
      }).not.toThrow();
    });
   test("Comprobando que se inserta la palabra correctamente", () => {
      var tam_vocab_inicial = idioma.listaVocab.length;
      var palabra="mesa";
      idioma.listaVocab.push(palabra);
      var tam_vocab = idioma.listaVocab.length;

      expect(tam_vocab).toBe(tam_vocab_inicial+1);

    });
   test("Comprobando que se inserta la descripción correctamente", () => {
      var tam_descrip_inicial = idioma.descripcion.length;
      var descripcion = "table";
      idioma.descripcion.push(descripcion);
      var tam_descrip = idioma.descripcion.length;

      expect(tam_descrip).toBe(tam_descrip_inicial+1);
    });
  });

  describe("Testeando el método MostrarVocab()", () => {
    test("Comprobamos que los dos vectores son iguales", () => {
      var tam_vocab = idioma.listaVocab.length;
      var tam_descrip = idioma.descripcion.length;

      expect(tam_vocab).toEqual(tam_descrip);
    });
  });

  describe("Testeando el método MostrarPalabra()", () => {
    test("Comprobamos que los dos vectores son iguales", () => {
      var tam_vocab = idioma.listaVocab.length;
      var tam_descrip = idioma.descripcion.length;

      expect(tam_vocab).toEqual(tam_descrip);
    });

     test("Comprobando que funciona correctamente aunque la palabra no se encuentre en el listado de vocabulario", () => {
       var palabra = "gominola";
       expect(() => {
         idioma.MostrarPalabra(palabra);
       }).not.toThrow();
     });

     test("Comprobando que funciona correctamente al pasarle una palabra existente en la lista de vocabulario", () => {
       var palabra = "ordenador";
       expect(() => {
         idioma.MostrarPalabra(palabra);
       }).not.toThrow();
     });

     test("Comprobando que la palabra se corresponde con la descripción", () => {
       var palabra = "ordenador";
       var indicePalabra = idioma.listaVocab.indexOf(palabra);
       var indiceDescrip = idioma.descripcion.indexOf(indicePalabra);

       expect(indicePalabra).toEqual(indiceDescrip);
     });
  });

  describe("Testeando el método CambiarDescripcion()", () =>{
     test("Comprobando que funciona correctamente aunque la palabra no se encuentre en el listado de vocabulario", () => {
       var palabra = "piano";
       var significado = "instrumento musical";

       expect(() => {
         idioma.CambiarDescripcion(palabra,significado);
       }).not.toThrow();
     });

     test("Comprobando que funciona correctamente al pasarle una palabra existente en la lista de vocabulario", () => {
       var palabra = "libro";
       var significado = "cambio descripción del libro";

       expect(() => {
         idioma.CambiarDescripcion(palabra,significado);
       }).not.toThrow();
     });
  });

});
