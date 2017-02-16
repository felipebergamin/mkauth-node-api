'use strict';

class Titulo {

	/**
	 *	@class Titulo
	 */
	constructor (request) {
		this.request = request;
	}

	/**
	 *	Obtem detalhes de um título específico
	 *
	 *	@param		{Number}	numero_titulo	Numero do titulo que se deseja
	 *	@returns	{Promise}
	 */
	list (numero_titulo) {
		return this.request('titulo', 'list', numero_titulo);
	}

	/**
	 *	Lista todos os titulos
	 *
	 *	@returns	{Promise}
	 */
	listAll (filter_cbk) {
		return new Promise ((resolve, reject)=>{
			this.request('titulo', 'listAll')
				.then(response=>{
					if (filter_cbk) {
						try {
							resolve (response.titulos.filter(filter_cbk));
						}
						catch (err) {
							reject (err);
						}
					}
					else {
						resolve(response.titulos);
					}
				})
				.catch (err=>reject(err));
		});
	}

	/**
	 *	Receber um título em aberto
	 *
	 *	@param		{Number}	numero_titulo	Número do título a dar baixa
	 *	@returns	{Promise}
	 */
	receber (numero_titulo) {
		return this.request('titulo', 'receber', numero_titulo);
	}
}

module.exports = Titulo;