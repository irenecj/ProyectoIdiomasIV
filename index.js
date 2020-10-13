const Idioma = require("./src/idioma.js");

var idioma = new Idioma();
//leemos los datos que meta el usuario
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


palabra = "ordenador";
significado = "Ordinateur. Sinónimo de computador o computadora. Se refiere a la máquina electrónica capaz de almacenar información y tratarla automáticamente";
idioma.AniadirVocab(palabra,significado);
palabra = "libro";
significado = "livre";
idioma.AniadirVocab(palabra, significado);

var readlineRecursivo = function() {
  rl.question("¿Qué desea hacer? Pulse: \n 1 para añadir vocabulario. \n 2 para mostrar el vocabulario existente. \n 3 para buscar una palabra concreta. \n 4 para modificar la descripción de una palabra.\n 5 para salir. \n", function(tecla){
    switch(tecla){
      case "1":
      rl.question("¿Qué palabra has aprendido? ", function(palabra){
        rl.question("¿Cuál es el significado o traducción de la palabra? ", function(significado){
          idioma.AniadirVocab(`${palabra}`,`${significado}`);
          readlineRecursivo();
        });
      });
      break;

      case "2":
      idioma.MostrarVocab();
      readlineRecursivo();
      break;

      case "3":
      rl.question("¿Qué palabra desea buscar?", function(palabra){
        idioma.MostrarPalabra(`${palabra}`);
        readlineRecursivo();
      });
      break;

      case "4":
      rl.question("¿Cuál es la palabra cuya descripción quieres modificar? ", function(palabra){
        rl.question("¿Cuál es el significado o traducción nuevo de la palabra? ", function(significado){
          idioma.CambiarDescripcion(`${palabra}`,`${significado}`);
          readlineRecursivo();
        });
      });
      break;

      case "5":
      rl.close();
      break;

    }
  });
};

readlineRecursivo();
