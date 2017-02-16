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
	list (login_usuario) {
		return this.request('usuario', 'list', login_usuario);
	}

	/**
	 *	Lista todos os usuários do sistema
	 *	@returns	{Promise}
	 */
	listAll (filter_cbk) {
		//return this.request('usuario', 'listAll');

		return new Promise ((resolve, reject)=>{
			this.request('usuario', 'listAll')
				.then(response=>{
					if (filter_cbk) {
						try {
							resolve (response.usuarios.filter(filter_cbk));
						}
						catch (err) {
							reject (err);
						}
					}
					else {
						resolve (response.usuarios);
					}
				})
				.catch (err=>reject(err));
		});
	}
}

module.exports = Usuario;