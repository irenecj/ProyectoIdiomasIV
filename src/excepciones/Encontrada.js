//clase para representar un error cuando queremos añadir una palabra que ya existe
class Encontrada extends Error { //clase error ya viene en javascript

	constructor(mensajeError) {
		super(mensajeError);
		this.name = 'Encontrada';
		this.message = mensajeError;
	}

}

module.exports = Encontrada;
