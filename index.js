const Idioma = require("../src/idioma.js");

var diccionario = new Idioma();
//leemos los datos que meta el usuario
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


palabra = "ordenador";
significado = "Ordinateur. Sinónimo de computador o computadora y se refiere a la máquina electrónica capaz de almacenar información y tratarla automáticamente";
diccionario.AniadirVocab(palabra,significado);
palabra = "libro";
significado = "livre";
diccionario.AniadirVocab(palabra, significado);

var readlineRecursivo = function() {
  rl.question("¿Qué desea hacer? Pulse: \n 1 para añadir vocabulario. \n 2 para mostrar el vocabulario existente. \n 3 para salir. \n", function(tecla){
    switch(tecla){
      case "1":
      rl.question("¿Qué palabra has aprendido? ", function(palabra){
        rl.question("¿Cuál es el significado o traducción de la palabra? ", function(significado){
          diccionario.AniadirVocab(`${palabra}`,`${significado}`);
          readlineRecursivo();
        });
      });
      break;


      case "2":
      diccionario.MostrarVocab();
      readlineRecursivo();
      break;

      case "3":
      rl.close();
      break;
    }
  });
};

readlineRecursivo();
