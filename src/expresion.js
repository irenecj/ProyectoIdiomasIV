class Expresion{
  constructor(exprPopular, explicacion){
    this.exprPopular = exprPopular;
    this.explicacion = explicacion;
  }

  getExpresion(){
    var expr = this.exprPopular + "-" + this.explicacion;
    return expr;
  }

  getExprPopular(){
    return this.exprPopular;
  }

  getExplicacion(){
    return this.explicacion;
  }

  setExprPopular(nuevaExpr){
    this.exprPopular = nuevaExpr;
  }

  setExplicacion(nuevaExplicacion){
    this.explicacion = nuevaExplicacion;
  }


}

module.exports = Expresion;
