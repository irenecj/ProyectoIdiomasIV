/* Clase principal que contiene el vocabulario, las frases típicas y datos curiosos sobre el idioma */


class Idioma{

      constructor(descripcion, listaVocab, cuentaPalabras){
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



}

module.exports = Idioma;
