'use strict';

class Usuario {

	/**
	 *	@class	Usuario
	 */
	constructor (request) {
		this.request = request;
	}

	/**
	 *	Detalha um usuário do sistema
	 *	@param		{String}	login	Login do usuário no sistema
	 *	@returns	{Promise}
	 */
	list (login_usuario) {
		return this.request('usuario', 'list', login_usuario);
	}

	/**
	 *	Lista todos os usuários do sistema
	 *	@returns	{Promise}
	 */
	listAll () {
		return this.request('usuario', 'listAll');
	}
}

module.exports = Usuario;