'use strict';

class Conta {

	/**
	 *	@class Conta
	 */
	constructor (request) {
		this.request = request;
	}

	/**
	 *	Detalha uma conta bancária do sistema
	 *	@param		{Number}	numero_conta	Número da conta que se deseja
	 *	@returns	{Promise}
	 */
	async list (numero_conta) {
    const { data } = await this.request('conta', 'list', numero_conta);
    return data;
	}

	/**
	 *	Lista todas as contas bancárias
	 *	@param {function} [filter_cbk] Essa callback será repassada para `Array.filter()`, filtrando o resultado da listagem
	 *	@returns	{Promise}
	 */
	async listAll (filterCbk) {
    const { data } = await this.request('conta', 'listAll');

    if (!Array.isArray(data.contas)) {
      return [];
    }

    return typeof filterCbk === 'function'
      ? data.contas.filter(filterCbk)
      : data.contas;
	}
}

module.exports = Conta;
