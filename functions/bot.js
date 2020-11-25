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

function palabraConcreta(pal){
  var palabraEncontrada;
  var significado;
  var resultado=" ";
  var pos = -1;
  var palValida = formato(pal);
  if(palValida){
    for(var i = 0; i < data.traducciones.length; i++){
      if(pal == data.traducciones[i].palabra){
        pos = i;
      }
    }

    if(pos == -1){
      resultado = "La palabra que busca no se encuentra registrada"
    }
    else{
      palabraEncontrada = pal;
      significado = data.traducciones[pos].significado;
      resultado = palabraEncontrada;
      resultado = palabraEncontrada.concat('->',significado);
    }
  }else{
    resultado = "El formato introducido no es correcto: la palabra debe introducirse en mayúsculas y acabando en punto final."
  }

  return resultado;
}

module.exports = { formato, listadoVocab, palabraConcreta };
