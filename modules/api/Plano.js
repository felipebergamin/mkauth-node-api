'use strict';

class Plano {

	/**
	 *	@class Plano
	 */
	constructor (request) {
		this.request = request;
	}

	/**
	 *	Detalha um plano no sistema
	 *	@param		{String}	nome	Nome do plano que se deseja
	 *	@returns	{Promise}
	 */
	async list (nome) {
    const { data } = await this.request('plano', 'list', nome);
    return data;
	}

	/**
	 *	Listar todos os planos do sistema
	 *	@param {function} [filterCbk] Essa callback será repassada para `Array.filter()`, filtrando o resultado da listagem
	 *	@returns	{Promise}
	 */
	async listAll (filterCbk) {
    const { data } = await this.request('plano', 'listAll');

    if (!Array.isArray(data.planos)) {
      return [];
    }

    return typeof filterCbk === 'function'
      ? data.planos.filter(filterCbk)
      : data.planos;
	}
}

module.exports = Plano;
