'use strict';

class Instalacao {

	constructor (request) {
		this.request = request;
	}

	list (id_instalacao) {
		return this.request('instalacao', 'list', id_instalacao);
	}

	listAll () {
		return this.request('instalacao', 'listAll');
	}
}

module.exports = Instalacao;