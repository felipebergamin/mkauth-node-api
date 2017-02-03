'use strict';

class Empresa {
	constructor (request) {
		this.request = request;
	}

	listAll () {
		return this.request('empresa', 'listAll');
	}
}

module.exports = Empresa;