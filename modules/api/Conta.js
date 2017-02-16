'use strict';

class Conta {

	/**
	 *	@class Conta
	 */
	constructor (request) {
		this.request = request;
	}

	/**
	 *	Detalha uma conta bancária do sistema
	 *	@param		{Number}	numero_conta	Número da conta que se deseja
	 *	@returns	{Promise}
	 */
	list (numero_conta) {
		return this.request('conta', 'list', numero_conta);
	}

	/**
	 *	Lista todas as contas bancárias
	 *	@returns	{Promise}
	 */
	listAll (filter_cbk) {
		return new Promise ((resolve, reject)=>{
			this.request('conta', 'listAll')
				.then(response=>{
					if(filter_cbk) {
						try {
							resolve (response.contas.filter(filter_cbk));
						}
						catch (err) {
							reject (err);
						}
					}
					else {
						resolve(response.contas);
					}
				})
				.catch (err=>reject(err));
		});
	}
}

module.exports = Conta;