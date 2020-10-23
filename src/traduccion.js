class Traduccion{
  constructor(palabra, significado){
    this.palabra = palabra;
    this.significado = significado;
  }

  getTraduccion(){
    var pal = "\nPALABRA --> " + this.palabra +"\nSIGNIFICADO --> " + this.significado;
    return pal;
  }

  getPalabra(){
    return this.palabra;
  }

  getSignificado(){
    return this.significado;
  }

  setPalabra(nuevaPalabra){
    this.palabra = nuevaPalabra;
  }

  setSignificado(significadoNuevo){
    this.significado = significadoNuevo;
  }

}

module.exports = Traduccion;
