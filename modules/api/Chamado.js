'use strict';

class Chamado {

	/**
	 *	@class Chamado
	 */
	constructor (request) {
		this.request = request;
	}

	/**
	 *	Obtem detalhes de um chamado específico
	 *	@param	{String}	id_chamado	ID do chamado no sistema
	 *	@returns	{Promise}
	 */
	async list (idChamado) {
    const { data } = await this.request('chamado', 'list', idChamado);
    return data;
	}

	/**
	 *	Lista todos os chamados no sistema
	 *  @param {function} [filter_cbk] Essa callback será repassada para `Array.filter()`, filtrando o resultado da listagem
	 *	@returns	{Promise}
	 */
	async listAll (filterCbk) {
    const { data } = await this.request('chamado', 'listAll');

    if (!Array.isArray(data.chamados)) {
      return [];
    }

    return typeof filterCbk === 'function'
      ? data.chamados.filter(filterCbk)
      : data.chamados;
	}
}

module.exports = Chamado;
