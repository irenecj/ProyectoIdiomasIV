/* Clase principal que contiene el vocabulario, las frases típicas y datos curiosos sobre el idioma */

const NoString = require("./excepciones/NoString");
const NoEncontrada = require("../src/excepciones/NoEncontrada.js");
const NoOrden = require("../src/excepciones/NoOrden.js");
const NoFormato = require("../src/excepciones/NoFormato.js");

class Idioma{

      constructor(listaVocab, descripcion){
        this.listaVocab = new Array();
        this.descripcion = new Array();
        this.expresiones = new Array();
        this.listaVocab.push(listaVocab);
        this.descripcion.push(descripcion);
      }

      //FUNCIÓN PARA COMPROBAR QUE UNA PALABRA ES UN STRING
      comprobarString(palabra){
        const numeros = /^[0-9]*$/;
        const palabraNum = numeros.test(palabra);
        if(palabraNum == true){
          throw new NoString('La palabra debe ser de tipo "string"');
        }else{
          return palabraNum;
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
            this.descripcion.push(significado.toUpperCase());
            this.listaVocab.push(palabra.toUpperCase());
        }

      }

      //FUNCIÓN PARA MOSTRAR TODAS LAS PALABRAS DEL VOCABULARIO
      mostrarVocab(){
        var mostrar = new Array();
          for(var i in this.listaVocab){
            mostrar.push(this.listaVocab[i]+" : " + this.descripcion[i] + "\n");
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
          for(var i in this.listaVocab){
            if(palabra == this.listaVocab[i]){
              encontrada++;
              indice = i;
            }
          }
        }

        if(encontrada > 0){
          palabraEncontrada = this.listaVocab[indice] + " : " + this.descripcion[indice] + " \n";
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
          for(var i in this.listaVocab){
            if(palabra == this.listaVocab[i]){
              var descripcionActual = this.descripcion[i];
              indice = i;
              encontrada++;
            }
          }
      }

      if(encontrada > 0){
        this.descripcion[indice] = descripcionNueva;
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
        for(var i in this.listaVocab){
          if(letra = letra.toUpperCase()){
            letraMayusc = letra;
            letraMinusc = letra.toLowerCase();
          }else{
            letraMayusc = letra.toUpperCase();
            letraMinusc = letra;
          }

          var comienzaMinusc = this.listaVocab[i].startsWith(letraMinusc);
          var comienzaMayusc = this.listaVocab[i].startsWith(letraMayusc);
          if(comienzaMinusc == true || comienzaMayusc == true){
            mostrar.push(this.listaVocab[i] + " : " + this.descripcion[i] + " \n");
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
      var ordenado = new Array();
      var ordenadoA = new Array();

      // for(var i in this.listaVocab){
      //   this.listaVocab[i].toUpperCase();
      // }

      if(orden == "Ascendente" || orden == "ascendente"){
        ordenado = this.listaVocab.sort();
        return ordenado;
      }else if(orden == "Descendente" || orden == "descendente"){
        ordenadoA = this.listaVocab.sort();
        ordenado = ordenadoA.reverse();
        return ordenado;
      }else{
        throw new NoOrden("El orden introducido no es válido, debe introducir 'ascendente' o 'desscendente'");
      }
    }

    //FUNCIÓN PARA AÑADIR EXPRESIONES
    aniadirExpresiones(expresion, explicacion){
      var expr = expresion + " --> " + explicacion;
      var formatoExpr = this.comprobarFormato(expresion);
      var formatoExpl = this.comprobarFormato(explicacion);
      if(formatoExpr == true && formatoExpl == true){
        this.expresiones.push(expr.toUpperCase());
      }
    }

    mostrarExpresiones(){
      var resultado = new Array();
      for(var i in this.expresiones){
        resultado.push(this.expresiones[i] + "\n");
      }

      return resultado;
    }

}

module.exports = Idioma;
