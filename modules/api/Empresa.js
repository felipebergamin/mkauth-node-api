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
	async listAll () {
    return (await this.request('empresa', 'listAll')).data;
	}
}

module.exports = Empresa;
