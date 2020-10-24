const Traduccion = require("../src/traduccion.js")

const traduccion = new Traduccion("SEMÁFORO.", "SÉMAPHORE.DISPOSITIVO DE SEÑALIZACIÓN LUMINOSA QUE REGULA EL TRÁFICO EN LAS VÍAS PÚBLICAS Y QUE CONSTA GENERALMENTE DE TRES LUCES (ROJA, AMARILLA Y VERDE).");
describe("Testeando la clase traduccion.js", () => {
  describe("Testeando el constructor", () => {
    test("Comprobando el constructor", () => {
      expect(traduccion.palabra).toBe("SEMÁFORO.")
      expect(traduccion.significado).toBe("SÉMAPHORE.DISPOSITIVO DE SEÑALIZACIÓN LUMINOSA QUE REGULA EL TRÁFICO EN LAS VÍAS PÚBLICAS Y QUE CONSTA GENERALMENTE DE TRES LUCES (ROJA, AMARILLA Y VERDE).")
    });
  });
  describe("Testeando métodos get", () => {
    test("Testeando getTraduccion()", () => {
      var traduc = traduccion.getTraduccion();
      var traducEsperada = "\nPALABRA --> " + traduccion.palabra +"\nSIGNIFICADO --> " + traduccion.significado;

      expect(traduc).toBe(traducEsperada);
    });
    test("Testeando getPalabra()", () => {
      var pal = traduccion.getPalabra();
      var palEsperada = traduccion.palabra;

      expect(pal).toBe(palEsperada);
    });
    test("Testeando getSignificado()", () => {
      var signif = traduccion.getSignificado();
      var signifEsperado = traduccion.significado;

      expect(signif).toBe(signifEsperado);
    });
  });
  describe("Testeando métodos set", () => {
    test("Testeando setPalabra()", () => {
      var palabraNueva = "CARRETERA.";
      traduccion.setPalabra(palabraNueva);

      expect(traduccion.palabra).toBe(palabraNueva);
    });
    test("Testeando setSignificado()", () => {
      var signifNuevo = "CAMBIO EL SIGNIFICADO DE LA PALABRA SEMÁFORO";
      traduccion.setSignificado(signifNuevo);

      expect(traduccion.significado).toBe(signifNuevo);
    });
  });
});
