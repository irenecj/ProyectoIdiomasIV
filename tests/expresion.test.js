const Expresion = require("../src/expresion.js")

const expresion = new Expresion("HABLAR POR LOS CODOS.", "CUANDO UNA PERSONA HABLA MUCHO O ESTÁ HABLANDO EN TODO MOMENTO, NO SE CALLA NUNCA.");
describe("Testeando la clase expresion.js", () => {
  describe("Testeando el constructor", () => {
    test("Comprobando el constructor", () => {
      expect(expresion.exprPopular).toBe("HABLAR POR LOS CODOS.");
      expect(expresion.explicacion).toBe("CUANDO UNA PERSONA HABLA MUCHO O ESTÁ HABLANDO EN TODO MOMENTO, NO SE CALLA NUNCA.");
    });
  });
  describe("Testeando métodos get", () => {
    test("Testeando getExpresion()", () => {
      var exp = expresion.getExpresion();
      var expEsperada =  "\nEXPRESIÓN --> " + expresion.exprPopular + "\nESTA EXPRESIÓN QUIERE DECIR --> " + expresion.explicacion;

      expect(exp).toBe(expEsperada);
    });
    test("Testeando getExprPopular()", () => {
      var ep = expresion.getExprPopular();
      var epEsperada = expresion.exprPopular;

      expect(ep).toBe(epEsperada);
    });
    test("Testeando getExplicacion()", () => {
      var expl = expresion.getExplicacion();
      var explEsperada = expresion.explicacion;

      expect(expl).toBe(explEsperada);
    });
  });
  describe("Testeando métodos set", () => {
    test("Testeando setExprPopular()", () => {
      var epNueva = "CAMBIO LA EXPRESIÓN POPULAR.";
      expresion.setExprPopular(epNueva);

      expect(expresion.exprPopular).toBe(epNueva);
    });
    test("Testeando setExplicacion()", () => {
      var explNueva = "CAMBIO LA EXPLICACIÓN DE LA EXPRESIÓN.";
      expresion.setExplicacion(explNueva);

      expect(expresion.explicacion).toBe(explNueva);
    });
  });
});
