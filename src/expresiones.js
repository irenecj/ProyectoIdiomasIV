class Expresion{
  constructor(exprPopular, explicacion){
    this.expr = expr;
    this.explicacion = explicacion;
  }

  getExpresion(){
    return expr = "\nEXPRESIÓN --> " + this.exprPopular + "\nESTA EXPRESIÓN QUIERE DECIR --> " + this.explicacion;
    return expr;
  }

  getExprPopular(){
    return this.exprPopular;
  }

  getExplicacion(){
    return this.explicacion;
  }

  setExpresion(nuevaExpr){
    this.expr = nuevaExpr;
  }

  setExplicacion(nuevaExplicacion){
    this.explicacion = nuevaExplicacion;
  }


}

module.exports = Expresion
