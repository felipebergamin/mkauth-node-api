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
	list (id_instalacao) {
		return this.request('instalacao', 'list', id_instalacao);
	}

	/**
	 *	Lista todas as instalações
	 *	@returns	{Promise}
	 */
	listAll () {
		return this.request('instalacao', 'listAll');
	}
}

module.exports = Instalacao;