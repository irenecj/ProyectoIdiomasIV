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

      //FUNCIÓN PARA MOSTRAR TODAS LAS PALABRAS DEL VOCABULARIO
      mostrarVocab(){
        var mostrar = new Array();
          for(var i in this.listado){
            mostrar.push(this.listado[i].getTraduccion() + "\n");
           }
        return mostrar;
      }

      //FUNCIÓN PARA MOSTRAR UNA PALABRA CONCRETA
      mostrarPalabra(palabra){
        var encontrada = 0;
        var palabraEncontrada;
        var indice;
        var noString = this.comprobarString(palabra);
        var formatoValidoP = this.comprobarFormato(palabra);
        if(noString == false && formatoValidoP == true){
          for(var i in this.listado){
            if(palabra.toUpperCase() == this.listado[i].getPalabra()){
              encontrada++;
              indice = i;
            }
          }
        }

        if(encontrada > 0){
          palabraEncontrada = this.listado[indice].getTraduccion()+ " \n";
        }else{
          throw new NoEncontrada("La palabra que busca no se ha encontrado");
        }

        return palabraEncontrada;
      }

      //MODIFICAR EL SIGNIFICADO DE UNA PALABRA
      cambiarSignificado(palabra, descripcionNueva){
        var encontrada = 0;
        var indice;
        var noString = this.comprobarString(palabra);
        var formatoValidoP = this.comprobarFormato(palabra);
        var formatoValidoD = this.comprobarFormato(descripcionNueva);
        if(noString == false && formatoValidoD == true){
          for(var i in this.listado){
            if(palabra.toUpperCase() == this.listado[i].getPalabra()){
            //  var descripcionActual = this.descripcion[i];
              indice = i;
              encontrada++;
            }
          }
      }

      if(encontrada > 0){
        this.listado[indice].setSignificado(descripcionNueva.toUpperCase());
      }else{
        throw new NoEncontrada("La palabra que busca no se ha encontrado");
      }
    }

    //MOSTRAR LISTADO DE PALABRAS QUE COMIENZAN POR UNA LETRA
    clasificaLetra(letra){
      var mostrar = new Array();
      var encontrada = false;
      var letraMayusc;
      var letraMinusc;

      var noString = this.comprobarString(letra);
      if(noString == false){
        for(var i in this.listado){
            var comienza = this.listado[i].getPalabra().startsWith(letra.toUpperCase());

            if(comienza == true){
                mostrar.push(this.listado[i].getPalabra() + " : " + this.listado[i].getSignificado() + " \n");
                encontrada = true;
            }
        }
      }

      if(encontrada == false){
        throw new NoEncontrada("La palabra que busca no se ha encontrado");
      }
      return mostrar;
    }

    //FUNCIÓN QUE ORDENA ALFABETICAMENTE DE MANERA ASCENDENTE O DESCENDENTE
    ordenarAlfabeto(orden){
      var orden = orden;
      var mostrar = new Array();
      var ordenado = new Array();
      var ordenadoA = new Array();

      if(orden == "Descendente" || orden == "descendente"){
        ordenado = this.listado.sort();
        for(var i in ordenado){
          mostrar.push(this.listado[i].getTraduccion() + " \n");
        }
        return ordenado;
      }else if(orden == "Ascendente" || orden == "ascendente"){
        ordenadoA = this.listado.sort();
        ordenado = ordenadoA.reverse();
        for(var i in ordenado){
          mostrar.push(this.listado[i].getTraduccion() + " \n");
        }
        return ordenado;
      }else{
        throw new NoOrden("El orden introducido no es válido, debe introducir 'ascendente' o 'desscendente'");
      }
    }


}

module.exports = Idioma;
