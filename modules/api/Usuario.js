'use strict';

class Usuario {

	constructor (request) {
		this.request = request;
	}

	list (login_usuario) {
		return this.request('usuario', 'list', login_usuario);
	}

	listAll () {
		return this.request('usuario', 'listAll');
	}
}

module.exports = Usuario;