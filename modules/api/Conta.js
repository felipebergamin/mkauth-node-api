'use strict';

class Conta {

	constructor (request) {
		this.request = request;
	}

	list (numero_conta) {
		return this.request('conta', 'list', numero_conta);
	}

	listAll () {
		return this.request('conta', 'listAll');
	}
}

module.exports = Conta;