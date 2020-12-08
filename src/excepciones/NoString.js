//clase para representar un error cuando la palabra no es un STRING
class NoString extends Error { //clase error ya viene en javascript

	constructor(mensajeError) {
		super(mensajeError);
		this.name = 'NoString';
		this.message = mensajeError;
		this.code = 400;
	}

}

module.exports = NoString;
