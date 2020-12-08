//----------------------------------------------------------------------------
//          CLASE CONTROLADORA
//----------------------------------------------------------------------------

const Idioma = require("./idioma.js");
const Traduccion = require("./traduccion.js");
const Cotidiano = require("./cotidiano.js");
class Controller {

  constructor(){
    this.idioma = new Idioma("Español","Francés");
  }

  //método para añadir una traducción al listado
  nuevaTraduccion(palabra,significado){
    this.idioma.aniadirVocab(palabra,significado);
  }

  //método para obtener todo el listado de vocabulario
  todasTraducciones(){
    var traducciones = this.idioma.mostrarVocab();
    return traducciones;
  }

  //mmétodo para obtener una traducción concreta del listado a partir de la palabra
  traduccion(palabra){
    var significado = this.idioma.mostrarPalabra(palabra);
    return significado;
  }


  //método para cambiar el significado de una palabra concreta
  cambioSignificado(palabra,significadoNuevo){
    this.idioma.cambiarSignificado(palabra,significadoNuevo);
  }
}

module.exports = Controller;
