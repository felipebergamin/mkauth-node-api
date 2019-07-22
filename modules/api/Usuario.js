'use strict';

class Usuario {

	/**
	 *	@class	Usuario
	 */
	constructor (request) {
		this.request = request;
	}

	/**
	 *	Detalha um usuário do sistema
	 *	@param		{String}	login	Login do usuário no sistema
	 *	@returns	{Promise}
	 */
	async list (login) {
		return (await this.request('usuario', 'list', login)).data;
	}

	/**
	 *	Lista todos os usuários do sistema
	 *	@param {function} [filterCbk] Essa callback será repassada para `Array.filter()`, filtrando o resultado da listagem
	 *	@returns	{Promise}
	 */
	async listAll (filterCbk) {
    const { data } = await this.request('usuario', 'listAll');

    if (!Array.isArray(data.usuarios)) {
      return [];
    }

    return typeof filterCbk === 'function'
      ? data.usuarios.filter(filterCbk)
      : data.usuarios;
	}
}

module.exports = Usuario;
