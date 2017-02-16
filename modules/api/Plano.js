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
	listAll (filter_cbk) {
		return new Promise ((resolve, reject)=>{
			this.request('plano', 'listAll')
				.then(response=>{
					if (filter_cbk) {
						try {
							resolve (response.planos.filter(filter_cbk));
						}
						catch (err) {
							reject (err);
						}
					}
					else {
						resolve(response.planos);
					}
				})
				.catch(err=>reject(err));
		});
	}
}

module.exports = Plano;