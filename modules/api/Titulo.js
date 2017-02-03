'use strict';

class Titulo {
	constructor (request) {
		this.request = request;
	}

	list (numero_titulo) {
		return this.request('titulo', 'list', numero_titulo);
	}

	listAll () {
		return this.request('titulo', 'listAll');
	}

	receber (numero_titulo) {
		return this.request('titulo', 'receber', numero_titulo);
	}
}

module.exports = Titulo;