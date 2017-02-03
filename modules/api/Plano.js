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
	 *	@param		{String}	nome_plano	Nome do plano que se deseja
	 *	@returns	{Promise}
	 */
	list (nome_plano) {
		return this.request('plano', 'list', nome_plano);
	}

	/**
	 *	Listar todos os planos do sistema
	 *	@returns	{Promise}
	 */
	listAll () {
		return this.request('plano', 'listAll');
	}
}

module.exports = Plano;