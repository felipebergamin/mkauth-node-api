'use strict';

class Chamado {

	constructor (request) {
		this.request = request;
	}

	list (id_chamado) {
		return this.request('chamado', 'list', id_chamado);
	}

	listAll () {
		return this.request('chamado', 'listAll');
	}
}

module.exports = Chamado;