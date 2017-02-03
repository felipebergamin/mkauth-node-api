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
	listAll () {
		return this.request('conta', 'listAll');
	}
}

module.exports = Conta;