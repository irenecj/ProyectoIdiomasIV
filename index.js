const Idioma = require("./src/idioma.js");

var idioma = new Idioma("Informática", "Informatique");
//leemos los datos que meta el usuario
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


palabra = "Ordenador";
significado = "Ordinateur. Sinónimo de computador o computadora. Se refiere a la máquina electrónica capaz de almacenar información y tratarla automáticamente";
idioma.AniadirVocab(palabra,significado);
palabra = "Libro";
significado = "Livre";
idioma.AniadirVocab(palabra, significado);
palabra = "Lápiz"
significado = "Crayon. Utensilio para escribir, dibujar o pintar que consiste en una barra delgada y larga generalmente de madera, con una mina cilíndrica fina de grafito "
idioma.AniadirVocab(palabra,significado);
palabra = "Amigo";
significado = "Amie";
idioma.AniadirVocab(palabra, significado);

var readlineRecursivo = function() {
  var mostrar = new Array();
  rl.question("¿Qué desea hacer? Pulse: \n 1 para añadir vocabulario. \n 2 para mostrar el vocabulario existente. \n 3 para buscar una palabra concreta. \n 4 para modificar la descripción de una palabra.\n 5 para buscar por una letra. \n 6 para salir. \n", function(tecla){
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
      mostrar = idioma.MostrarVocab();
      for(i in mostrar){
        console.log(mostrar[i]);
      }
      readlineRecursivo();
      break;

      case "3":
      rl.question("¿Qué palabra desea buscar?", function(palabra){
        var encontrada = idioma.MostrarPalabra(`${palabra}`);
        console.log(encontrada);
        readlineRecursivo();
      });
      break;

      case "4":
      rl.question("¿Cuál es la palabra cuya descripción quieres modificar? ", function(palabra){
        rl.question("¿Cuál es la traducción o el significado nuevo de la palabra? ", function(significado){
          idioma.CambiarDescripcion(`${palabra}`,`${significado}`);
          readlineRecursivo();
        });
      });
      break;

      case "5":
      rl.question("Clasificación según letra indicada: ", function(letra){
        mostrar = idioma.ClasificaLetra(letra);
        for(var i in mostrar){
          console.log(mostrar[i]);
        }
        readlineRecursivo();
      });
      break;

      case "6":
      rl.close();
      break;

    }
  });
};

readlineRecursivo();
