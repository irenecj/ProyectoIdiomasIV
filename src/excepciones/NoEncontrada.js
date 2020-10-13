//clase representar un error cuando la palabra no se encuentra en la lista de vocabulario
//clase representar un error cuando la palabra no es un STRING
class NoEncontrada extends Error { //clase error ya viene en javascript

	constructor(mensajeError) {
		super(mensajeError);
		this.name = 'NoEncontrada';
		this.message = mensajeError;
	}

}

module.exports = NoEncontrada;
