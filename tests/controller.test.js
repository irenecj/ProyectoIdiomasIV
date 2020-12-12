const Controller = require('../src/controller.js');

const control = new Controller();
var palabra, significado;

describe("Testeando la clase controladora", () => {
  describe("Testeando el constructor", () => {
    test("Comprobando que funciona correctamente", () => {
      expect(control.idioma.idiomaBase).toBe("Español");
      expect(control.idioma.idiomaTraducir).toBe("Francés");
    });
  });
  describe("Testeando método para añadir traducción (HU2)", () => {
    test("Comprobando que se añade correctamente la traducción", () => {
      var tamInicial = control.idioma.listado.length;
      palabra = "ESTUCHE.";
      significado = "TROUSSE.SE USA NORMALMENTE PARA GUARDAR MATERIAL ESCOLAR.";
      control.nuevaTraduccion(palabra,significado);

      var tamFinal = control.idioma.listado.length;

      expect(tamFinal).toBe(tamInicial+1);
    });

  });
  describe("Testeando método para mostrar vocabulario (HU1)", () => {

  });
  describe("Testeando método para obetner traducción concreta (HU3)", () => {

  });
  describe("Testeando método para cambiar significado (HU4)", () => {

  });
  describe("Testeando método para filtrar por letra (HU5)", () => {

  });
  describe("Testeando método para ordenar listado de vocabulario (HU8)", () => {

  });
  describe("Testeando método para añadir expresiones populares (HU6)", () => {

  });
  describe("Testeando método para mostrar expresiones populares (HU7)", () => {

  });
  describe("Testeando método para añadir frases cotidianas (HU9)", () => {

  });
  describe("Testeando método para mostrar frases cotidianas (HU10)", () => {

  });
});
