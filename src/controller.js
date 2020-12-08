//----------------------------------------------------------------------------
//          CLASE CONTROLADORA
//----------------------------------------------------------------------------

const Idioma = require("./idioma.js");
const Traduccion = require("./traduccion.js");
const Cotidiano = require("./cotidiano.js");
class Controller {

  constructor(){
    this.idioma = new Idioma("Español","Francés");
    this.traduc = new Traduccion('MESA.','TABLE.MUEBLE FORMADO POR UN TABLERO HORIZONTAL, SOSTENIDO POR UNO O VARIOS PIES, CON LA ALTURA CONVENIENTE PARA PODER REALIZAR ALGUNA ACTIVIDAD SOBRE ELLA O DEJAR COSAS ENCIMA.');
  }

  //método para añadir una traducción al listado --> HU2
  nuevaTraduccion(palabra,significado){
  this.idioma.aniadirVocab(palabra,significado);
  var traduc_json = [];
  traduc_json.push({
    palabra: palabra,
    significado: significado
  });

  return traduc_json;
  }

  //método para obtener todo el listado de vocabulario -> HU1
  todasTraducciones(){
    var traducciones = this.idioma.mostrarVocab();
    var lista_traducciones = [];
    var datos = [];
    traducciones.forEach(elemento => {
      datos = {
        palabra: elemento.getPalabra(),
        significado: elemento.getSignificado()
      };
      lista_traducciones.push(datos);
    });

    return lista_traducciones;
  }
}

module.exports = Controller;
