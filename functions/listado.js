const data = require("./data/data.json")
const Idioma = require("../src/idioma.js")

exports.handler = async event => {
  var palRecibida = event.queryStringParameters.palRecibida
  var idioma = new Idioma("español","frances");
  var palabra;
  var significado;

  for(var i = 0; i < data.traducciones.length; i++){
        palabra = data.traducciones[i].palabra;
        significado = data.traducciones[i].significado;
        idioma.aniadirVocab(palabra,significado)
  }

  var resultado = palRecibida;
  var formatoValido = idioma.comprobarFormato(palRecibida);

  if(formatoValido == true){
    var pos = -1
    for(var j  = 0 ; j < idioma.listado.length ; j++){
      if(palRecibida == idioma.listado[j].getPalabra()){
        pos = j;
      }
    }
    if(pos == -1){
      resultado = "Esa palabra no está en nuestro diccionario ";
    }
    else{
      resultado = idioma.listado[pos].getTraduccion();
    }

  }else{
    resultado = "La palabra debe introducirse en mayúsculas y debe acabar con un punto final.";
  }

  return{
    statusCode:200,
    body: resultado.toString()
  }
}
