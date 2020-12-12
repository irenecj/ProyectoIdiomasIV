const Controller = require('../src/controller.js');
const Encontrada = require('../src/excepciones/Encontrada.js');
const NoEncontrada = require('../src/excepciones/NoEncontrada.js');
const NoOrden = require('../src/excepciones/NoOrden.js');

const control = new Controller();
var palabra, significado;
var thrown_error;
var expectedError;
var resultado;

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
    test("Comprobamos que se han mostrado TODAS las palabras", () => {
      var tam_vector_esperado = control.todasTraducciones().length;
      var tam_vocab = control.idioma.listado.length;
      expect(tam_vector_esperado).toBe(tam_vocab);
    });
  });
  describe("Testeando método para obetner traducción concreta (HU3)", () => {
    test("Comprobando que funciona correctamente si le pasamos una palabra existente", () => {
      palabra = "ZAPATO.";
      resultado = control.traduccion(palabra);

      for(var i in control.idioma.listado){
        if(palabra == control.idioma.listado[i].getPalabra()){
          var indicePalabra = i;
        }
      }

      significado = control.idioma.listado[indicePalabra].getSignificado();

      expect(resultado).toBe(significado);
    });
    test("Comprobando que la palabra se corresponde con el significado", () => {
      palabra = "ESTUCHE.";
      significado = "TROUSSE.SE USA NORMALMENTE PARA GUARDAR MATERIAL ESCOLAR.";

      for(var i in control.idioma.listado){
        if(palabra == control.idioma.listado[i].getPalabra()){
          var indicePalabra = i;
        }
      }

      for(var j in control.idioma.listado){
        if(significado == control.idioma.listado[j].getSignificado()){
          var indiceSignif = j;
        }
      }

      expect(indicePalabra).toEqual(indiceSignif);
    });
    test("Comprobando que devuelve un error al pasarle una palabra que no existe", () => {
      palabra = "BOLÍGRAFO.";
      significado = "STYLO. UTENSILIO QUE CONTIENE TINTA EL CUAL SE USA PARA ESCRIBIR."

      thrown_error = () => control.traduccion(palabra);
      expectedError = new NoEncontrada('La palabra que busca no se ha encontrado');

      expect(thrown_error).toThrow(expectedError);
    });
  });
  describe("Testeando método para cambiar significado (HU4)", () => {
    test("Comprobando que funciona correctamente si la palabra existe y le cambia el significado", () => {
      palabra = "ZAPATO.";
      var significadoNuevo = "CHAUSSURE.CAMBIO LA DESCRIPCIÓN DEL ZAPATO.";
      for(var i in control.idioma.listado){
        if(palabra == control.idioma.listado[i].getPalabra()){
          var indicePalabra = i;
        }
      }
      control.cambioSignificado(palabra,significadoNuevo);

      var significado_esperado = control.idioma.listado[indicePalabra].getSignificado();

      expect(significado_esperado).toBe(significadoNuevo);
    });
    test("Comprobando que devuelve un error al pasarle una palabra que no existe", () => {
      palabra = "BOLÍGRAFO.";
      significado = "STYLO. UTENSILIO QUE CONTIENE TINTA EL CUAL SE USA PARA ESCRIBIR."

      thrown_error = () => control.cambioSignificado(palabra,significado);
      expectedError = new NoEncontrada('La palabra que busca no se ha encontrado');

      expect(thrown_error).toThrow(expectedError);
    });
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
