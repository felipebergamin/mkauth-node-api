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
	 *	@param {function} [filter_cbk] Essa callback será repassada para `Array.filter()`, filtrando o resultado da listagem
	 *	@returns	{Promise}
	 */
	listAll (filter_cbk) {
		return new Promise ((resolve, reject)=>{
			this.request('instalacao', 'listAll')
				.then(response=>{
					if (filter_cbk) {
						try {
							resolve (response.instalacoes.filter(filter_cbk));
						}
						catch (err) {
							reject (err);
						}
					}
					else {
						resolve (response.instalacoes);
					}
				})
				.catch(err=>reject(err));
		})
	}
}

module.exports = Instalacao;