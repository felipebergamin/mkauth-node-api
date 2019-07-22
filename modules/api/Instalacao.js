'use strict';

class Instalacao {

	/**
	 *	@class Instalacao
	 */
	constructor (request) {
		this.request = request;
	}

	/**
	 *	Detalha uma instalação
	 *	@param		{Number}	id	ID da instalação que se deseja
	 *	@returns	{Promise}
	 */
	async list (idInstalacao) {
    const { data } = await this.request('instalacao', 'list', idInstalacao);
    return data;
	}

	/**
	 *	Lista todas as instalações
	 *	@param {function} [filterCbk] Essa callback será repassada para `Array.filter()`, filtrando o resultado da listagem
	 *	@returns	{Promise}
	 */
	async listAll (filterCbk) {
    const { data } = await this.request('instalacao', 'listAll');

    if (!Array.isArray(data.instalacoes)) {
      return [];
    }

    return typeof filterCbk === 'function'
      ? data.instalacoes.filter(filterCbk)
      : data.instalacoes;
	}
}

module.exports = Instalacao;
