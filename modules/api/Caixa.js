'use strict';

class Caixa {
	constructor (request) {
		this.request = request;
	}

	list (login_usuario) {
		return this.request('caixa', 'list', login_usuario);
	}

	listAll () {
		return this.request('caixa', 'listAll');
	}
}

module.exports = Caixa;