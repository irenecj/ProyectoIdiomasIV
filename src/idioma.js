/* Clase principal que contiene el vocabulario, las frases típicas y datos curiosos sobre el idioma */


class Idioma{
    //vamos a crear un array asociativo de strings para relacionar una palabra con su traducción y significado


      constructor(){
        var descripcion = new Array();
        var listaVocab = new Array();
        this.listaVocab = ["Formato Palabra "]
        this.descripcion = [" Significado "]


      }


 //FUNCIÓN PARA MOSTRAR PALABRAS DEL VOCABULARIO
       //hacemos un bucle en el que recorremos el array

     MostrarVocab(){
       for(var i in this.listaVocab){
         console.log(this.listaVocab[i]+":" + this.descripcion[i]);

        }
    }
//
 //FUNCIÓN PARA AÑADIR
    AniadirVocab(palabra, significado){

        this.descripcion.push(significado);
        this.listaVocab.push(palabra);

      //añadimos una palabra de ejemplo


    }


    //función que nos muestra todo el vocabulario que hay hasta el momento

    //función que muestra una serie de frases típicas

    //función que muestra 1 dato curioso sobre dicha lengua.
}

var diccionario = new Idioma();
palabra = "ordenador";
significado = "Ordinateur. Sinónimo de computador o computadora y se refiere a la máquina electrónica capaz de almacenar información y tratarla automáticamente";

diccionario.AniadirVocab(palabra,significado);
diccionario.MostrarVocab();


module.exports = Idioma;
