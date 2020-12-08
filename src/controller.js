//----------------------------------------------------------------------------
//          CLASE CONTROLADORA
//----------------------------------------------------------------------------

const Idioma = require("./idioma.js");
class Controller {

  constructor(){
    this.idioma = new Idioma("Español","Francés");
  }

  //método para añadir una traducción al listado -> HU2
  nuevaTraduccion(palabra,significado){
    this.idioma.aniadirVocab(palabra,significado);
  }

  //método para obtener todo el listado de vocabulario -> HU1
  todasTraducciones(){
    var traducciones = this.idioma.mostrarVocab();
    return traducciones;
  }

  //método para obtener una traducción concreta del listado a partir de la palabra -> HU3
  traduccion(palabra){
    var significado = this.idioma.mostrarPalabra(palabra);
    return significado;
  }

  //método para cambiar el significado de una palabra concreta -> HU4
  cambioSignificado(palabra,significadoNuevo){
    this.idioma.cambiarSignificado(palabra,significadoNuevo);
  }

  //mostrar traducciones que empiezan por una determinada letra -> HU5
  filtrarLetra(letra){
    var traducciones = this.idioma.clasificaLetra(letra);
    return traducciones;
  }

  //mostrar palabras ordenadas alfabéticamente -> HU8
  ordenarVocab(orden){
  var ordenadas = this.idioma.ordenarAlfabeto(orden);
    return ordenadas;
  }

  //añadir expresiones populares -> HU6
  nuevaExpresion(expresion, explicacion){
    this.idioma.aniadirExpresiones(expresion, explicacion);
  }

  //mostrar las expresiones populares -> HU7
  todasExpresiones(){
    var expresiones = this.idioma.mostrarExpresiones();
    return expresiones;
  }
}

module.exports = Controller;
