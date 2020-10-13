/* Clase principal que contiene el vocabulario, las frases típicas y datos curiosos sobre el idioma */


class Idioma{

      constructor(descripcion, listaVocab){
        descripcion = new Array();
        listaVocab = new Array();
        this.listaVocab = ["Formato a mostrar -->  Palabra "]
        this.descripcion = [" Significado "]
      }

      //FUNCIÓN PARA AÑADIR UNA PALABRA AL VOCABULARIO
      AniadirVocab(palabra, significado){
        const numeros = /^[0-9]*$/;
        const palabraNum = numeros.test(palabra);
        const significadoNum = numeros.test(significado);
          if( palabraNum == true || significadoNum == true){
            throw new Error('Las variables deben ser de tipo "string"');
          }else{
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
        const numeros = /^[0-9]*$/;
        const palabraNum = numeros.test(palabra);
        if(palabraNum == true){
          throw new Error('La palabra debe ser de tipo "string"');
        }else{
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
        const numeros = /^[0-9]*$/;
        const palabraNum = numeros.test(palabra);
        if(palabraNum == true){
          throw new Error('La palabra debe ser de tipo "string"');
        }else{
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
