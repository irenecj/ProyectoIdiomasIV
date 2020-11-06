const enumTipo = ["SALUDO", "PERMISO"];

class Cotidiano{
    constructor(frase,tipo){
        this.frase = frase;
        this.tipo = tipo;
    }

    getTipo(){
      return this.tipo;
    }

    getFrase(){
      return this.frase;
    }

    setTipo(tipoNuevo){
      this.tipo = tipoNuevo;
    }

    setFrase(fraseNueva){
      this.frase = fraseNueva;
    }
}

module.exports = Cotidiano;
