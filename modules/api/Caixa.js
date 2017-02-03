'use strict';

class Caixa {

	/**
	 * @class Caixa
	 */
	constructor (request) {
		this.request = request;
	}

	/**
	 * Obtem as movimentações em caixa feitas por um determinado usuário.
	 *
	 * @param	{String}	login	Login do usuário que se deseja listar as movimentaçẽs
	 * @returns	{Promise}
	 */
	list (login) {
		return this.request('caixa', 'list', login);
	}

	/**
	 * Lista todas as operações em caixa
	 *
	 * @returns	{Promise}
	 */
	listAll () {
		return this.request('caixa', 'listAll');
	}
}

module.exports = Caixa;