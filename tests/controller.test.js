const Controller = require('../src/controller.js');
const Encontrada = require('../src/excepciones/Encontrada.js');
const NoEncontrada = require('../src/excepciones/NoEncontrada.js');
const NoOrden = require('../src/excepciones/NoOrden.js');

const control = new Controller();
var palabra, significado;
var thrown_error;
var expectedError;

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
    test("Comprobando que la palabra se corresponde al significado al añadirse", () => {
      palabra = "ZAPATO.";
      significado = "CHAUSSURE.CALZADO QUE CUBRE TOTAL O PARCIALMENTE EL PIE SIN SOBREPASAR EL TOBILLO, CON UNA SUELA DE UN MATERIAL CASI SEIMPRE MÁS DURO QUE EL RESTO.";

      control.nuevaTraduccion(palabra,significado);

      var tam_listado = control.idioma.listado.length;
      var ultimaPalabra = control.idioma.listado[tam_listado-1].getPalabra();
      var ultimoSign = control.idioma.listado[tam_listado-1].getSignificado();

      expect(ultimaPalabra).toBe("ZAPATO.");
      expect(ultimoSign).toBe("CHAUSSURE.CALZADO QUE CUBRE TOTAL O PARCIALMENTE EL PIE SIN SOBREPASAR EL TOBILLO, CON UNA SUELA DE UN MATERIAL CASI SEIMPRE MÁS DURO QUE EL RESTO.");
    });
    test("Comprobando que no se pueden añadir palabras ya existentes", () => {
      palabra = "ESTUCHE.";
      significado = "TROUSSE.SE USA NORMALMENTE PARA GUARDAR MATERIAL ESCOLAR.";

      thrown_error = () => control.nuevaTraduccion(palabra,significado);
      expectedError = new Encontrada('La palabra introducida ya existe, por favor registre otra palabra.');

      expect(thrown_error).toThrow(expectedError);
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
