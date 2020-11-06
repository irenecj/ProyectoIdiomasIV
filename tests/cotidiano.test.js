const Cotidiano = require("../src/cotidiano.js")

const cotidiano = new Cotidiano("LO SIENTO, FUE CULPA MÍA.", "PEDIR DISCULPAS.");
describe("Testeando la clase cotidiano.js", () => {
  describe("Testeando el constructor", () => {
    test("Comprobando el constructor", () => {
      expect(cotidiano.frase).toBe("LO SIENTO, FUE CULPA MÍA.");
      expect(cotidiano.tipo).toBe("PEDIR DISCULPAS.");
    });
  });
  describe("Testeando métodos get", () => {
    test("Testeando getFrase()", () => {
      var frase = cotidiano.getFrase();
      var fraseEsperada = cotidiano.frase;

      expect(frase).toBe(fraseEsperada);
    });
    test("Testeando getTipo()", () => {
      var tipo = cotidiano.getTipo();
      var tipoEsperada = cotidiano.tipo;
    });
  });
  describe("Testeando métodos set", () => {
    test("Testeando setFrase()", () => {
      var fraseNueva = "ESTA ES UNA FRASE NUEVA.";
      cotidiano.setFrase(fraseNueva);

      expect(cotidiano.frase).toBe(fraseNueva);
    });
    test("Testeando setTipo()", () => {
      var tipoNuevo = "CAMBIAMOS EL TIPO DE LA FRASE.";
      cotidiano.setTipo(tipoNuevo);

      expect(cotidiano.tipo).toBe(tipoNuevo);
    });
  });
});
