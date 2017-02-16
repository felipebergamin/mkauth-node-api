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
	list (login) {
		return this.request('caixa', 'list', login);
	}

	/**
	 * Lista todas as operações em caixa
	 * 
	 * @returns	{Promise}
	 */
	listAll (filter_cbk) {
		return new Promise((resolve, reject)=>{
			this.request('caixa', 'listAll')
				.then(response=>{
					if(filter_cbk) {
						try {
							resolve(response.caixa.filter(filter_cbk));
						}
						catch (err) {
							reject(err);
						}
					}
					else {
						resolve(response.caixa);
					}
				})
				.catch(err=>{
					reject(err);
				});
		});
	}
}

module.exports = Caixa;