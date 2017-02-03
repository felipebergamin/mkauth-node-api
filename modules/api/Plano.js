'use strict';

class Plano {

	constructor (request) {
		this.request = request;
	}

	list (nome_plano) {
		return this.request('plano', 'list', nome_plano);
	}

	listAll () {
		return this.request('plano', 'listAll');
	}
}

module.exports = Plano;