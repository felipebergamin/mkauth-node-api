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
	listAll (filter_cbk) {
		return new Promise ((resolve, reject)=>{
			this.request('chamado', 'listAll')
				.then(response=>{
					if (filter_cbk) {
						try {
							resolve(response.chamados.filter(filter_cbk));
						}
						catch (err) {
							reject(err);
						}
					}
					else {
						resolve(response.chamados);
					}
				})
				.catch(err=>{
					reject(err);
				});
		});
	}
}

module.exports = Chamado;