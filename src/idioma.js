/* Clase principal que contiene el vocabulario, las frases típicas y datos curiosos sobre el idioma */

const NoString = require("./excepciones/NoString");
class Idioma{

      constructor(listaVocab, descripcion){
        this.listaVocab = new Array();
        this.descripcion = new Array();
        this.listaVocab.push(listaVocab);
        this.descripcion.push(descripcion);

      /*  listaVocab[0] = listaVocab;
        descripcion[0] = descripcion;
        descripcion = new Array();
        listaVocab = new Array();
        listaVocab[0] = listaVocab;
        descripcion[0] = descripcion;*/
        //this.listaVocab.push(listaVocab);
      //  this.descripcion.push(descripcion);
      //  this.listaVocab = ["Formato a mostrar -->  Palabra "];
      //  this.descripcion = [" Significado "];
      }

      //FUNCIÓN PARA COMPROBAR QUE UNA PALABRA ES UN STRING
      ComprobarString(palabra){
        const numeros = /^[0-9]*$/;
        const palabraNum = numeros.test(palabra);
        if(palabraNum == true){
          throw new NoString('La palabra debe ser de tipo "string"');
        }else{
          return palabraNum;
        }
      }

      //FUNCIÓN PARA AÑADIR UNA PALABRA AL VOCABULARIO
      AniadirVocab(palabra, significado){
        var palabraNoString = this.ComprobarString(palabra);
        var significadoNoString = this.ComprobarString(significado);
        if( palabraNoString == false && significadoNoString == false){
            this.descripcion.push(significado);
            this.listaVocab.push(palabra);
        }

      }

      //FUNCIÓN PARA MOSTRAR TODAS LAS PALABRAS DEL VOCABULARIO
      MostrarVocab(){
        var mostrar = new Array();
          for(var i in this.listaVocab){
            mostrar.push(this.listaVocab[i]+" : " + this.descripcion[i]);
           }
        return mostrar;
      }

      //FUNCIÓN PARA MOSTRAR UNA PALABRA CONCRETA
      MostrarPalabra(palabra){
        var encontrada = 0;
        var palabraEncontrada;
        var indice;
        var noString = this.ComprobarString(palabra);
        if(noString == false){
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
          var NoEncontrada = "La palabra que busca no se ha encontrado";
          return NoEncontrada;
        }

        return palabraEncontrada;
      }

      CambiarDescripcion(palabra, descripcionNueva){
        var encontrada = 0;
        var indice;
        var noString = this.ComprobarString(palabra);
        if(noString == false){
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
        var NoEncontrada = "La palabra que busca no se ha encontrado";
        return NoEncontrada;
      }
    }

    //MOSTRAR LISTADO DE PALABRAS QUE COMIENZAN POR UNA LETRA
    ClasificaLetra(letra){
      var mostrar = new Array();
      var encontrada = false;
      var letraMayusc;
      var letraMinusc;

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
      if(encontrada == false){
        var NoEncontrada = "La palabra que busca no se ha encontrado" ;
        return NoEncontrada;
      }
      return mostrar;
    }

}

module.exports = Idioma;
