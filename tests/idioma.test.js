const Idioma = require("../src/idioma.js");

describe("Testeando la clase idioma.js", () => {
  const idioma = new Idioma();

  describe("Testeando el método AniadirVocab()", () => {
   test("Comprobando que lanza error cuando no añadimos un string", () => {
      var palabra = "1";
      var significado = "2";
      var thrown_error = () => idioma.AniadirVocab(palabra, significado);
      var expectedError = new Error('Las variables deben ser de tipo "string"');

      expect(thrown_error).toThrow(expectedError);
    });
   test("Comprobando que añade la palabra con su descripción correctamente", () => {
      var palabra = "silla";
      var significado = "chaise";
      var thrown_error = () => idioma.AniadirVocab(palabra, significado);
      var expectedError = new Error('Las variables deben ser de tipo "string"');

      expect(thrown_error).not.toThrow(expectedError);
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


});
