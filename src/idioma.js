/* Clase principal que contiene el vocabulario, las frases típicas y datos curiosos sobre el idioma */


class Idioma{

      constructor(descripcion, listaVocab){
        descripcion = new Array();
        listaVocab = new Array();
        this.listaVocab = ["Formato a mostrar -->  Palabra "]
        this.descripcion = [" Significado "]
      }

      //FUNCIÓN PARA COMPROBAR QUE UNA PALABRA ES UN STRING
      ComprobarString(palabra){
        const numeros = /^[0-9]*$/;
        const palabraNum = numeros.test(palabra);
        if(palabraNum == true){
          throw new Error('La palabra debe ser de tipo "string"');
        }else{
          return palabraNum;
        }
      }

      //FUNCIÓN PARA AÑADIR UNA PALABRA AL VOCABULARIO
      AniadirVocab(palabra, significado){
        var palabraIsString = this.ComprobarString(palabra);
        var significadoIsString = this.ComprobarString(significado);
        if( palabraIsString == false && significadoIsString == false){
          try{
            this.descripcion.push(significado);
            this.listaVocab.push(palabra);
          } catch (exception) {
			         throw exception;
          }
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
        var esString = this.ComprobarString(palabra);
        if(esString == false){
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
          console.log("La palabra que busca aún no está añadida");
        }
      }

      CambiarDescripcion(palabra, descripcionNueva){
        var encontrada = 0;
        var indice;
        var esString = this.ComprobarString(palabra);
        if(esString == false){
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
        console.log("La palabra que busca no se ha encontrado.");
      }
    }

}

module.exports = Idioma;
