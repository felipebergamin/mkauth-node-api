'use strict';

class Empresa {

	/**
	 * @class Empresa
	 */
	constructor (request) {
		this.request = request;
	}

	/**
	 *	Lista os dados cadastrais da empresa
	 *	@returns	{Promise}
	 */
	listAll () {
		return this.request('empresa', 'listAll');
	}
}

module.exports = Empresa;