//clase para representar un error cuando la palabra o el significado introducidos no acaban en punto final
class NoFormato extends Error {

	constructor(mensajeError) {
		super(mensajeError);
		this.name = 'NoFormato';
		this.message = mensajeError;
	}

}

module.exports = NoFormato;
