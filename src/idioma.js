/* Clase principal que contiene el vocabulario, las frases típicas y datos curiosos sobre el idioma */

const NoString = require("./excepciones/NoString");
const NoEncontrada = require("../src/excepciones/NoEncontrada.js");
const NoOrden = require("../src/excepciones/NoOrden.js");
const NoFormato = require("../src/excepciones/NoFormato.js");
const NoAcierto = require("../src/excepciones/NoAcierto.js");
const Encontrada = require("../src/excepciones/Encontrada.js");
const Traduccion = require("../src/traduccion.js");
const Expresion = require("../src/expresion.js");
const Cotidiano = require("../src/cotidiano.js");
const enumOrden = ["ASCENDENTE" , "DESCENDENTE"];
const enumTipo = ["SALUDO.", "PEDIR DISCULPAS.", "PRESENTARSE."];


class Idioma{

      constructor(idiomaBase, idiomaTraducir){
        this.idiomaBase = idiomaBase;
        this.idiomaTraducir = idiomaTraducir;
        this.listado = new Array();
        this.expresiones = new Array();
        this.frasesCot = new Array();
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
        var encontrada = 0;
        if( palabraNoString == false && significadoNoString == false && formatoValidoP == true && formatoValidoS == true){
          for(var i in this.listado){
            if(palabra.toUpperCase() == this.listado[i].getPalabra()){
              encontrada++;
            }
          }

          if(encontrada == 0){
            var palabraNueva = new Traduccion(palabra.toUpperCase(), significado.toUpperCase());
            this.listado.push(palabraNueva);
          }else{
            throw new Encontrada('La palabra introducida ya existe, por favor registre otra palabra.');
          }

        }
      }

      //FUNCIÓN PARA MOSTRAR TODAS LAS PALABRAS DEL VOCABULARIO
      mostrarVocab(){
        return this.listado;
      }

      //FUNCIÓN PARA MOSTRAR UNA PALABRA CONCRETA
      mostrarPalabra(palabra){
        var encontrada = 0;
        var significadoEncontrado;
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
          significadoEncontrado = this.listado[indice].getSignificado();
        }else{
          throw new NoEncontrada("La palabra que busca no se ha encontrado");
        }

        return significadoEncontrado;
      }

      //MODIFICAR EL SIGNIFICADO DE UNA PALABRA
      cambiarSignificado(palabra, descripcionNueva){
        var encontrada = 0;
        var indice;
        var noString = this.comprobarString(palabra);
        var formatoValidoP = this.comprobarFormato(palabra);
        var formatoValidoD = this.comprobarFormato(descripcionNueva);
        if(noString == false && formatoValidoP && formatoValidoD == true){
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

      var noString = this.comprobarString(letra);
      if(noString == false){
        for(var i in this.listado){
            var comienza = this.listado[i].getPalabra().startsWith(letra.toUpperCase());

            if(comienza == true){
                mostrar.push(this.listado[i]);
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
  var lista_palabras =new Array();
  var diccionario = {};
  var i = 0
  while (i < this.listado.length){
    lista_palabras[i] = this.listado[i].getPalabra();
    diccionario[this.listado[i].getPalabra()] = this.listado[i].getSignificado();
    i+=1;
  }
  // descendente
  if(orden == enumOrden[0]){
    ordenado = lista_palabras.sort();
  }
  else if(orden == enumOrden[1]){
    var desordenado = new Array()
    desordenado = lista_palabras.sort();
    ordenado = desordenado.reverse();
  }else{
    throw new NoOrden("El orden introducido no es válido, debe introducir 'ASCENDENTE' o 'DESCENDENTE'");
  }
  var j = 0;
  for(var pal in ordenado){
    this.listado[j].setPalabra(ordenado[pal])
    this.listado[j].setSignificado(diccionario[ordenado[pal]]);
    j+=1
  }
    return this.listado;

}


    //FUNCIÓN PARA AÑADIR EXPRESIONES
    aniadirExpresiones(expresion, explicacion){
      var formatoExpr = this.comprobarFormato(expresion);
      var formatoExpl = this.comprobarFormato(explicacion);
      if(formatoExpr == true && formatoExpl == true){
        var expresionNueva = new Expresion(expresion.toUpperCase(), explicacion.toUpperCase());
        this.expresiones.push(expresionNueva);
      }
    }

    mostrarExpresiones(){
      var resultado = new Array();
      for(var i in this.expresiones){
        resultado.push(this.expresiones[i].getExpresion() + "\n");
      }
      return resultado;
    }

    //FUNCIONES PARA FRASES COTIDIANAS
    aniadirFrase(frase, tipo){
      var formatoFrase = this.comprobarFormato(frase);
      var formatoTipo = this.comprobarFormato(tipo);

      if(formatoFrase == true && formatoTipo == true){
        var fraseC = new Cotidiano(frase.toUpperCase(), tipo.toUpperCase());
        this.frasesCot.push(fraseC);
      }
    }

    mostrarFrases(tipo){
      var resultado = new Array();
      for(var i in this.frasesCot){
        if(this.frasesCot[i].getTipo() == tipo){
          resultado.push(this.frasesCot[i].getFrase());
        }
      }
      return resultado;
    }

    //FUNCIÓN PARA GENERAR UN NÚMERO ALEATORIO
    getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    //FUNCIÓN QUE GENERARÁ UNA DEFINICIÓN ALEATORIA
    generarDefinicion(){
      var i = this.getRandomInt(0, this.listado.length);
      var definicion = this.listado[i].getSignificado();
      var defSola = definicion.substr('.');
      return defSola;
    }

    //FUNCIÓN PARA EVALUAR SI LA PALABRA SE CORRESPONDE CON LA DEFINICION
    autoevaluacion(defSola,palAsociada){
      var encontrada = false;
      var acierto = 0;
      var indice = -1;

      //si en el listado hay alguna definición que comience por la palabra introducida entonces esta palabra es válida
      for(var i in this.listado){
        var empieza = this.listado[i].getSignificado().startsWith(palAsociada);
        if(empieza == true){
          encontrada = true;
        }else{
          encontrada = false;
        }
      }

      if(encontrada == true){
        for(var i in this.listado){
          //buscamos la definición COMPLETA y nos quedamos con el índice
          if(this.listado[i].getSignificado().includes(defSola)){
            var indice = i;
          }
        }
      }else{
        throw new NoAcierto("La palabra introducida no se ha registrado aún. Pruebe con una palabra de las que ha aprendido.");
      }

      if(this.listado[indice].getSignificado().startsWith(palAsociada)){
        //sumamos un acierto
        acierto++;
      }

      return acierto;
    }

}

module.exports = Idioma;
