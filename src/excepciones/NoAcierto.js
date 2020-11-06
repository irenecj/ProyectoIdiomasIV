//clase para representar un error cuando la palabra aún no se ha registrado
class NoAcierto extends Error { //clase error ya viene en javascript

	constructor(mensajeError) {
		super(mensajeError);
		this.name = 'NoAcierto';
		this.message = mensajeError;
	}

}

module.exports = NoAcierto;
