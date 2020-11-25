const data = require('./data/data.json');

function formato(cad){
  if(cad == cad.toUpperCase() && cad.endsWith('.')){
    return true;
  }else{
    return false;
  }
}

function listadoVocab(){
  var palabra;
  var significado;
  var cadena = "";
  var resultado=" ";
  for(var i = 0; i < data.traducciones.length; i++){
    palabra = data.traducciones[i].palabra ;
    significado = data.traducciones[i].significado + "\n" ;
    cadena = palabra.concat('->',significado);
    resultado += cadena + "\n";
  }
  return resultado;
}



module.exports = { formato, listadoVocab };
