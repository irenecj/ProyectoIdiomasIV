/* Clase principal que contiene el vocabulario, las frases típicas y datos curiosos sobre el idioma */


class Idioma{

      constructor(descripcion, listaVocab){
        descripcion = new Array();
        listaVocab = new Array();
        this.listaVocab = ["Formato a mostrar -->  Palabra "]
        this.descripcion = [" Significado "]
      }


      //FUNCIÓN PARA MOSTRAR PALABRAS DEL VOCABULARIO
      MostrarVocab(){
            for(var i in this.listaVocab){
              console.log(this.listaVocab[i]+" : " + this.descripcion[i]);
             }
         }

      //FUNCIÓN PARA AÑADIR UNA PALABRA AL VOCABULARIO
         AniadirVocab(palabra, significado){
             this.descripcion.push(significado);
             this.listaVocab.push(palabra);
         }

     }

     var diccionario = new Idioma();
     palabra = "ordenador";
     significado = "Ordinateur. Sinónimo de computador o computadora y se refiere a la máquina electrónica capaz de almacenar información y tratarla automáticamente";

     diccionario.AniadirVocab(palabra,significado);
     diccionario.MostrarVocab();


     module.exports = Idioma;
