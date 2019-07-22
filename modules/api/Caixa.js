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
	async list (login) {
    const { data } = await this.request('caixa', 'list', login);
    return data;
	}

	/**
	 * Lista todas as operações em caixa
	 * 
	 * @param {function} [filter_cbk] Essa callback será repassada para `Array.filter()`, filtrando o resultado da listagem
	 * @returns	{Promise}
	 */
	async listAll (filterCbk) {
    const { data } = await this.request('caixa', 'listAll');

    if (!Array.isArray(data.caixa)) {
      return [];
    }

    return typeof filterCbk === 'function'
      ? data.caixa.filter(filterCbk)
      : data.caixa;
	}
}

module.exports = Caixa;
