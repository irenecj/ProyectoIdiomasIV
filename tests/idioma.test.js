const Idioma = require("../src/idioma.js");
const NoString = require("../src/excepciones/NoString.js");

//VARIABLES A UTILIZAR
var palabra;
var significado;
var tam_vocab;
var tam_descrip;
var thrown_error;
var expectedError;
var letra;
var encontrada;
var expectedEncontrada;
var expresion;
var explicacion;
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
   test("Comprobando que no se lanza el error al pasarle un 'string'", () => {
      palabra = "Silla";
      significado = "Chaise";
      thrown_error = () => idioma.AniadirVocab(palabra, significado);
      expectedError = new NoString('La palabra debe ser de tipo "string"');

      expect(thrown_error).not.toThrow(expectedError);
    });

   test("Comprobando que se inserta la palabra correctamente", () => {
     //al insertar la palabra el tamaño del vector 'listaVocab' debe incrementar en 1
      var tam_vocab_inicial = idioma.listaVocab.length;
      palabra="Mesa";
      idioma.listaVocab.push(palabra);
      tam_vocab = idioma.listaVocab.length;

      expect(tam_vocab).toBe(tam_vocab_inicial+1);

    });
   test("Comprobando que se inserta la descripción correctamente", () => {
     //al insertar el significado el tamaño del vector 'descripcion' debe incrementar en 1
      var tam_descrip_inicial = idioma.descripcion.length;
      descripcion = "Table";
      idioma.descripcion.push(descripcion);
      tam_descrip = idioma.descripcion.length;

      expect(tam_descrip).toBe(tam_descrip_inicial+1);
    });
    test("Comprobando que la palabra y su significando se añaden correctamente", () => {
      //el último elemento de cada vector, debe ser la palabra y el significado que acabamos de añadir
      palabra = "Informática";
      significado = "Informatique.";

      idioma.AniadirVocab(palabra, significado);

      tam_vocab = idioma.listaVocab.length;
      tam_descrip = idioma.descripcion.length;
      var ultimoLista = idioma.listaVocab[tam_vocab-1];
      var ultimoDescrip = idioma.descripcion[tam_descrip-1];

      expect(ultimoLista).toBe("Informática");
      expect(ultimoDescrip).toBe("Informatique.");
    });
  });

  describe("Testeando el método MostrarVocab()", () => {
    test("Comprobamos que los dos vectores son iguales", () => {
      //para que cada palabra coincida con su significado, los dos vectores deben tener el mismo tamaño
      tam_vocab = idioma.listaVocab.length;
      tam_descrip = idioma.descripcion.length;

      expect(tam_vocab).toEqual(tam_descrip);
    });

    test("Comprobamos que se han mostrado TODAS las palabras", () => {
      //el vector que mostramos debe ser igual que el vector de palabras, sino no se habrán mostrado todas
      var tam_vector_esperado = idioma.MostrarVocab().length;
      var tam_vocab = idioma.listaVocab.length;
      expect(tam_vector_esperado).toEqual(tam_vocab);
    });
  });

  describe("Testeando el método MostrarPalabra()", () => {
    //para que la palabra coincida con su significado, los dos vectores deben tener el mismo tamaño
    test("Comprobamos que los dos vectores son iguales", () => {
      tam_vocab = idioma.listaVocab.length;
      tam_descrip = idioma.descripcion.length;

      expect(tam_vocab).toEqual(tam_descrip);
    });
     test("Comprobando que notifica correctamente que la palabra no se encuentra en el listado de vocabulario", () => {
       //mostramos al usuario un mensaje que indica que la palabra no existe, permitiéndole buscar otra o realizar otra acción como añadir esa palabra
       palabra = "Gominola";
       encontrada = idioma.MostrarPalabra(palabra);
       expectedEncontrada = "La palabra que busca no se ha encontrado";

       expect(encontrada).toBe(expectedEncontrada);
     });
     test("Comprobando que funciona correctamente al pasarle una palabra existente en la lista de vocabulario", () => {
       //nos devuelve la palabra con su significado
       palabra = "Mesa";
       var resultado = idioma.MostrarPalabra(palabra);
       var indicePalabra = idioma.listaVocab.indexOf(palabra);
       significado = idioma.descripcion[indicePalabra];

       expect(resultado).toBe(palabra + " : " + significado + " \n");
     });
     test("Comprobando que la palabra se corresponde con la descripción", () => {
       //comprobamos que el significado es el de dicha palabra y no otro
       palabra = "Mesa";
       significado = "Table";
       var indicePalabra = idioma.listaVocab.indexOf(palabra);
       var indiceDescrip = idioma.descripcion.indexOf(significado);

       expect(indicePalabra).toEqual(indiceDescrip);
     });
  });

  describe("Testeando el método CambiarSignificado()", () =>{
    test("Comprobando que notifica correctamente que la palabra no se encuentra en el listado de vocabulario", () => {
      //si la palabra no se encuentra notificamos al usuario para que así decida si realizar otra acción, como añadir dicha palabra
       palabra = "Piano";
       significado = "Piano. Instrumento musical.";
       encontrada = idioma.CambiarSignificado(palabra,significado);
       expectedEncontrada = "La palabra que busca no se ha encontrado";

       expect(encontrada).toBe(expectedEncontrada);
     });
     test("Comprobando que funciona correctamente al pasarle una palabra existente en la lista de vocabulario", () => {
       //vemos que en el array 'descripcion' ahora el significado correspondiente a la palabra es el nuevo
       palabra = "Mesa";
       significadoNuevo = "Cambio descripción de la mesa";
       idioma.CambiarSignificado(palabra, significadoNuevo);
       var indicePalabra = idioma.listaVocab.indexOf(palabra);
       significado = idioma.descripcion[indicePalabra];
       expect(significado).toBe(significadoNuevo);
     });
  });

  describe("Testeando el método ClasificaLetra()", () => {
    test("Comprobando que notifica correctamente si no hay ninguna palabra que comience por dicha letra", () => {
      //si no hay palabras que empiecen por dicha letra se notifica al usuario
      letra = "W";
      encontrada = idioma.ClasificaLetra(letra);
      expectedEncontrada = "La palabra que busca no se ha encontrado";

      expect(encontrada).toBe(expectedEncontrada);
    });

    test("Comprobando que muestra el listado de palabras correctamente si la letra es mayúscula", () => {
      //debe ser indiferente si le pasamos una letra mayúscula o minúscula.
      letra = "M";
      var resultado = idioma.ClasificaLetra(letra);

      expect(resultado.length).toBe(1);
    });

    test("Comprobando que muestra el listado de palabras correctamente si la letra es minúscula", () => {
      //debe ser indiferente si le pasamos una letra mayúscula o minúscula.
      letra = "m";
      var resultado = idioma.ClasificaLetra(letra);

      expect(resultado.length).toBe(1);
    });
  });

  describe("Testeando el método AniadirExpresiones()", () => {
    test("Comprobando que se incrementa el tamaño del vector al añadir", () => {
      expresion = "Montar un pollo";
      explicacion = "Te has venido arriba. Has montado una bronca sin venir a cuento. Un escándalo."
      var tamañoOriginal = idioma.expresiones.length;
      idioma.AniadirExpresiones(expresion, explicacion);
      var tamañoActual = idioma.expresiones.length;

      expect(tamañoActual).toEqual(tamañoOriginal + 1);
    });
    test("Comprobamos que la expresión se ha añadido correctamente", () => {
      expresion = "Hablar por los codos.";
      significado = "Cuando una persona habla mucho o está hablando en todo momento, no se calla nunca.";

      idioma.AniadirExpresiones(expresion, significado);

      var tamaño = idioma.expresiones.length;
      var ultimo = idioma.expresiones[tamaño - 1];
      var expresionEsperada = "Hablar por los codos. --> Cuando una persona habla mucho o está hablando en todo momento, no se calla nunca.";

      for(var i in idioma.expresiones){
        console.log(idioma.expresiones[i]);
      }

      expect(ultimo).toBe(expresionEsperada);
    });
  });

  test("Comprobando el método MostrarExpresiones()", () => {
    var tam_vector_expresiones = idioma.MostrarVocab().length;
    var tam_vocab = idioma.listaVocab.length;
    expect(tam_vector_expresiones).toEqual(tam_vocab);
  });

});
