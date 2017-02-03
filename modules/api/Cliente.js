'use strict';

class Cliente {

	constructor (request) {
		this.request = request;
	}

	list (login) {
		return this.request('cliente', 'list', login);
	}

	listAll () {
		return this.request('cliente', 'listAll');
	}
}

module.exports = Cliente;