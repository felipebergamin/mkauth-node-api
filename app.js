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

	constructor (server_ip, api_token) {
		if(!server_ip)
			throw new Error('ip do servidor não informado');
		if(!api_token)
			throw new Error('api token não informado');

		const request_api = require('./modules/request')(server_ip, api_token);

		this.cliente = new ClienteApi(request_api);
		this.titulo = new TituloApi(request_api);
		this.chamado = new ChamadoApi(request_api);
		this.plano = new PlanoApi(request_api);
		this.conta = new ContaApi(request_api);
		this.empresa = new EmpresaApi(request_api);
		this.instalacao = new InstalacaoApi(request_api);
		this.usuario = new UsuarioApi(request_api);
		this.caixa = new CaixaApi(request_api);
	};
}

module.exports = MkAuthClient;