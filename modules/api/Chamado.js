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
	list (id_chamado) {
		return this.request('chamado', 'list', id_chamado);
	}

	/**
	 *	Lista todos os chamados no sistema
	 *	@returns	{Promise}
	 */
	listAll () {
		return this.request('chamado', 'listAll');
	}
}

module.exports = Chamado;