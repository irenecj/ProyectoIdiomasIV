/* Clase principal que contiene el vocabulario, las frases típicas y datos curiosos sobre el idioma */

const NoString = require("./excepciones/NoString");
const NoEncontrada = require("../src/excepciones/NoEncontrada.js");
const NoOrden = require("../src/excepciones/NoOrden.js");
const NoFormato = require("../src/excepciones/NoFormato.js");
const Traduccion = require("../src/traduccion.js");

class Idioma{

      constructor(idiomaBase, idiomaTraducir, palabra, significado){
        idiomaBase = "Español";
        idiomaTraducir = "Francés";
        var palabra = new Traduccion(palabra, significado);
        this.listado = new Array();
        this.expresiones = new Array();
      }

      //FUNCIÓN PARA COMPROBAR QUE UNA CADENA ES UN STRING
      comprobarString(cadena){
        const numeros = /^[0-9]*$/;
        const cadenaNum = numeros.test(cadena);
        if(cadenaNum == true){
          throw new NoString('La palabra debe ser de tipo "string"');
        }else{
          return cadenaNum;
        }
      }

      //LA CADENA DEBE ACABAR EN PUNTO FINAL
      comprobarFormato(cadena){
        var puntoFinal = cadena.endsWith('.');
        if(puntoFinal == false){
          throw new NoFormato('El formato introducido no es válido, debe poner punto final.');
        }else{
          return true;
        }
      }

      //FUNCIÓN PARA AÑADIR UNA PALABRA AL VOCABULARIO
      aniadirVocab(palabra, significado){
        var palabraNoString = this.comprobarString(palabra);
        var significadoNoString = this.comprobarString(significado);
        var formatoValidoP = this.comprobarFormato(palabra);
        var formatoValidoS = this.comprobarFormato(significado);
        if( palabraNoString == false && significadoNoString == false && formatoValidoP == true && formatoValidoS == true){
            var palabraNueva = new Traduccion(palabra.toUpperCase(), significado.toUpperCase());
            this.listado.push(palabraNueva);

        }

      }

}

module.exports = Idioma;
