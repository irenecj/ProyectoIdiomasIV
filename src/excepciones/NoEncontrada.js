//clase para representar un error cuando no se encuentra ninguna palabra
class NoEncontrada extends Error { //clase error ya viene en javascript

	constructor(mensajeError) {
		super(mensajeError);
		this.name = 'NoEncontrada';
		this.message = mensajeError;
		this.code = 404;
	}

}

module.exports = NoEncontrada;
