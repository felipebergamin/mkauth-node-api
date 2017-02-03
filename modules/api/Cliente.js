'use strict';

class Cliente {

	/**
	 *	@class Cliente
	 */
	constructor (request) {
		this.request = request;
	}

	/**
	 *	Obtem dados detalhados de um cliente usando o login como chave de busca
	 *
	 *	@param	{String}	login	login do cliente que se deseja
	 *	@returns {Promise}
	 */
	list (login) {
		return this.request('cliente', 'list', login);
	}

	/**
	 *	Lista todos os usuários.
	 *
	 *	@returns {Promise}
	 */
	listAll () {
		return this.request('cliente', 'listAll');
	}
}

module.exports = Cliente;