'use strict';

const ClienteApi = require('./modules/api/Cliente');
const TituloApi = require('./modules/api/Titulo');
const ChamadoApi = require('./modules/api/Chamado');
const PlanoApi = require('./modules/api/Plano');
const ContaApi = require('./modules/api/Conta');
const EmpresaApi = require('./modules/api/Empresa');
const InstalacaoApi = require('./modules/api/Instalacao');
const UsuarioApi = require('./modules/api/Usuario');
const CaixaApi = require('./modules/api/Caixa');


class MkAuthClient {

	/**
	 * Construtor, cria uma nova instância do cliente
	 *
	 * @class MkAuthClient
	 * @constructor
	 * @param {String}	IP do servidor MK-AUTH
	 * @param {String}	Token para usar API do sistema, consulte o seu dentro do menu Provedor/Dados da empresa/KEY API
	 */
	constructor (server_ip, api_token) {
		if(!server_ip)
			throw new Error('ip do servidor não informado');
		if(!api_token)
			throw new Error('api token não informado');

		const request_api = require('./modules/request')(server_ip, api_token);

		/**
		 *	@member	{Cliente}
		 */
		this.cliente = new ClienteApi(request_api);
		/**
		 *	@member	{Titulo}
		 */
		this.titulo = new TituloApi(request_api);
		/**
		 *	@member	{Chamado}
		 */
		this.chamado = new ChamadoApi(request_api);
		/**
		 *	@member	{Plano}
		 */
		this.plano = new PlanoApi(request_api);
		/**
		 *	@member	{Conta}
		 */
		this.conta = new ContaApi(request_api);
		/**
		 *	@member	{Empresa}
		 */
		this.empresa = new EmpresaApi(request_api);
		/**
		 *	@member {Instalacao}
		 */
		this.instalacao = new InstalacaoApi(request_api);
		/**
		 *	@member {Usuario}
		 */
		this.usuario = new UsuarioApi(request_api);
		/**
			@member {Caixa}
		*/
		this.caixa = new CaixaApi(request_api);
	};
}

module.exports = MkAuthClient;