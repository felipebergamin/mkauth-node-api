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
	async list (numeroTitulo) {
    const { data } = await this.request('titulo', 'list', numeroTitulo);
    return data;
	}

	/**
	 *	Lista todos os titulos
	 *	@param {function} [filter_cbk] Essa callback será repassada para `Array.filter()`, filtrando o resultado da listagem
	 *	@returns	{Promise}
	 */
  async listAll (filterCbk) {
    const { data } = await this.request('titulo', 'listAll');
    
    if (!Array.isArray(data.titulos)) {
      return [];
    }

    return filterCbk
      ? data.titulos.filter(filterCbk)
      : data.titulos;
	}

	/**
	 *	Receber um título em aberto
	 *
	 *	@param		{Number}	numero_titulo	Número do título a dar baixa
	 *	@returns	{Promise}
	 */
	async receber (numero_titulo) {
    const { data } = await this.request('titulo', 'receber', numero_titulo);
    return data;
	}
}

module.exports = Titulo;
