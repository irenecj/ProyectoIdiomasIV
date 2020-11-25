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

function cambiarSignificado(pal, sig){
  var palabraEncontrada;
  var significado;
  var resultado=" ";
  var pos = -1;
  var palValida = formato(pal);
  var sigValido = formato(sig);
  if(palValida && sigValido){
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
      data.traducciones[pos].significado = sig;
      significado = data.traducciones[pos].significado;
      resultado = "El significado se ha cambiado con éxito."
    }
  }else{
    resultado = "El formato introducido no es correcto: la palabra debe introducirse en mayúsculas y acabando en punto final. Además, la palabra y el significado deben estar separados por un guión, con un espacio a ambos lados."
  }

  return resultado;
}

function clasifLetra(letra){
  var resultado=" ";
  if(letra == letra.toUpperCase()){
    for(var i = 0; i < data.traducciones.length; i++){
       var palabra = data.traducciones[i].palabra;
      if(palabra.startsWith(letra)){
        resultado += palabra + "\n"
      }
    }
  }else{
    resultado = "La letra debe introducirse en mayúsculas."
  }

  if(resultado == " "){
    resultado = "No hay ninguna palabra que comience por dicha letra."
  }

  return resultado;
}

function listadoExpresiones(){
  var expresion;
  var significado;
  var cadena = "";
  var resultado=" ";
  for(var i = 0; i < data.expresiones_populares.length; i++){
    expresion = data.expresiones_populares[i].expresion ;
    significado = data.expresiones_populares[i].significado + "\n" ;
    cadena = expresion.concat('\n',significado);
    resultado += cadena + "\n";
  }
  return resultado;
}

function listadoFrases(){
  var frase;
  var tipo;
  var cadena = "";
  var resultado=" ";
  for(var i = 0; i<data.frases.length; i++){
    frase = data.frases[i].frase;
    tipo = data.frases[i].tipo + "\n";
    cadena = frase.concat('\n',tipo);
    resultado += cadena + "\n";
  }
  return resultado;
}

module.exports = { formato, listadoVocab, palabraConcreta, cambiarSignificado, clasifLetra, listadoExpresiones, listadoFrases };
