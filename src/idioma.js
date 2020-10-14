/* Clase principal que contiene el vocabulario, las frases típicas y datos curiosos sobre el idioma */

const NoString = require("./excepciones/NoString");
const NoEncontrada = require("./excepciones/NoEncontrada");
class Idioma{

      constructor(descripcion, listaVocab){
        descripcion = new Array();
        listaVocab = new Array();
        this.listaVocab = ["Formato a mostrar -->  Palabra "];
        this.descripcion = [" Significado "];
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

      //FUNCIÓN PARA AÑADIR UNA EXPRESIÓN

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
            for(var i in this.listaVocab){
              console.log(this.listaVocab[i]+" : " + this.descripcion[i]);
             }
         }

      //FUNCIÓN PARA MOSTRAR UNA PALABRA CONCRETA
      MostrarPalabra(palabra){
        var encontrada = 0;
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
          console.log(this.listaVocab[indice]+" : " + this.descripcion[indice]);
        }else{
          throw new NoEncontrada("La palabra que busca aún no está añadida");
        }

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
        throw new NoEncontrada("La palabra que busca no se ha encontrado");
      }
    }

    //MOSTRAR LISTADO DE PALABRAS QUE COMIENZAN POR UNA LETRA
    ClasificaLetra(letra){
      for(var i in this.listaVocab){
        var comienza = this.listaVocab[i].startsWith(`${letra}`);
        if(comienza == true){
          console.log(this.listaVocab[i]+" : " + this.descripcion[i]);
        }else{
          throw new NoEncontrada("No hay ninguna palabra que comience por esa letra");
        }
      }
    }

}

module.exports = Idioma;
