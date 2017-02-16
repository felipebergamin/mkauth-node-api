'use strict';

class Cliente {

	/**
	 *	@class Cliente
	 */
	constructor (request) {
		this.request = request;
	}

	/**
	 *	Obtem dados detalhados de um cliente usando o login como chave de busca
	 *
	 *	@param	{String}	login	login do cliente que se deseja
	 *	@returns {Promise}
	 */
	list (login) {
		return this.request('cliente', 'list', login);
	}

	/**
	 *	Lista todos os usuários.
	 *	@param {function} [filter_cbk] Essa callback será repassada para `Array.filter()`, filtrando o resultado da listagem
	 *	@returns {Promise}
	 */
	listAll (filter_cbk) {
		
		return new Promise ((resolve, reject)=>{
			this.request('cliente', 'listAll')
				.then(response=>{
					if (filter_cbk) {
						try {
							resolve(response.clientes.filter(filter_cbk));
						}
						catch (err) {
							reject(err);
						}
					}
					else {
						resolve(response.clientes);
					}
				})
				.catch(err=>{
					reject(err);
				});
		});
	}
}

module.exports = Cliente;