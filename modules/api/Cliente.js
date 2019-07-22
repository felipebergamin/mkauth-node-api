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
	async list (login) {
    const { data } = await this.request('cliente', 'list', login);
    return data.dados[0];
	}

	/**
	 *	Lista todos os usuários.
	 *	@param {function} [filterCbk] Essa callback será repassada para `Array.filter()`, filtrando o resultado da listagem
	 *	@returns {Promise}
	 */
	async listAll (filterCbk) {

    const response = await this.request('cliente', 'listAll');

    if (response.data === 'NULL') {
      return [];
    }

    if ('clientes' in response.data) {
      return typeof filterCbk === 'function'
        ? response.data.clientes.filter(filterCbk)
        : response.data.clientes;
    }
	}
}

module.exports = Cliente;
