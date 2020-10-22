//clase para representar un error cuando queremos ordenar de forma no válida
class NoOrden extends Error { //clase error ya viene en javascript

	constructor(mensajeError) {
		super(mensajeError);
		this.name = 'NoOrden';
		this.message = mensajeError;
	}

}

module.exports = NoOrden;
