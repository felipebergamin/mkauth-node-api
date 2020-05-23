# Não estou mais mantendo esse pacote

---

## mkauth-node-api
Client em node.js para API do sistema [Mk-Auth](http://mk-auth.com.br/) de controle de provedores.
Este pacote oferece suporte à todos os recursos oferecidos pela mini API do sistema.

### v2.0

Esta versão apenas corrige a url da API para a nova forma de autenticar as requisições.

Se você tem uma versão muito antiga do Mk-Auth, talvez precise usar a versão 1 d pacote.

### Métodos suportados
* Clientes
    * listar tudo
    * detalhar um cliente específico
* Titulo
    * listar tudo
    * detalhar um título específico
    * receber
* chamado
    * listar tudo
    * detalhar um chamado específico
* Conta
    * listar tudo
    * detalhar uma conta específica
* Empresa
    * listar tudo
* Instalacao
    * listar tudo
    * detalhar uma instalação específica
* Plano
    * listar tudo
    * detalhar um plano específico
* Usuario
    * listar tudo
    * detalhar um usuário específico
* Caixa
    * listar tudo
    * listar operações de um usuário específico

## Instalando e usando
Para instalar o pacote:
```
npm i --save mkauth-node-api
```

Depois no seu código:

```js
'use strict';

// substitua pelo ip do seu servidor
const server_ip = '172.31.255.2';
// substitua pelo token do seu sistema
// consulte seu token no menu Provedor/Dados da empresa dentro do mkauth
const api_token = '1234567890';

const MkAuthClient = require('mkauth-node-api');
const mkauth = new MkAuthClient(server_ip, api_token);

// lista todos os clientes
mkauth.cliente.listAll()
	.then(response=>{
		response.forEach(cliente=>{
		    console.log(cliente.nome);
		});
	});

// lista todos os clientes filtrando o resultado
const filter_cbk = cliente=>/felipe/i.test(cliente.nome);

mkauth.cliente.listAll(filter_cbk)
    .then(response=>{
        response.forEach(cliente=>{
            console.log(cliente.nome);
        });
    });

// detalha um cliente específico
mkauth.cliente.list('cliente@provedor.com.br')
    .then(response=>{
        console.log(response);
    });

//lista todos os títulos
mkauth.titulo.listAll()
    .then(response=>{
        response.forEach(titulo=>{
            console.log(`${titulo.titulo} - ${titulo.valor}`);
        });
    });
```

----------
## API Reference
<a name="MkAuthClient"></a>

## MkAuthClient
MkAuthClient

**Kind**: global class  

* [MkAuthClient](#MkAuthClient)
    * [new MkAuthClient(IP, Token)](#new_MkAuthClient_new)
    * [.cliente](#MkAuthClient+cliente) : [<code>Cliente</code>](#Cliente)
    * [.titulo](#MkAuthClient+titulo) : [<code>Titulo</code>](#Titulo)
    * [.chamado](#MkAuthClient+chamado) : [<code>Chamado</code>](#Chamado)
    * [.plano](#MkAuthClient+plano) : [<code>Plano</code>](#Plano)
    * [.conta](#MkAuthClient+conta) : [<code>Conta</code>](#Conta)
    * [.empresa](#MkAuthClient+empresa) : [<code>Empresa</code>](#Empresa)
    * [.instalacao](#MkAuthClient+instalacao) : [<code>Instalacao</code>](#Instalacao)
    * [.usuario](#MkAuthClient+usuario) : [<code>Usuario</code>](#Usuario)
    * [.caixa](#MkAuthClient+caixa) : [<code>Caixa</code>](#Caixa)

<a name="new_MkAuthClient_new"></a>

### new MkAuthClient(IP, Token)
Construtor, cria uma nova instância do cliente


| Param | Type | Description |
| --- | --- | --- |
| IP | <code>String</code> | do servidor MK-AUTH |
| Token | <code>String</code> | para usar API do sistema, consulte o seu dentro do menu Provedor/Dados da empresa/KEY API |

<a name="MkAuthClient+cliente"></a>

### mkAuthClient.cliente : [<code>Cliente</code>](#Cliente)
**Kind**: instance property of [<code>MkAuthClient</code>](#MkAuthClient)  
<a name="MkAuthClient+titulo"></a>

### mkAuthClient.titulo : [<code>Titulo</code>](#Titulo)
**Kind**: instance property of [<code>MkAuthClient</code>](#MkAuthClient)  
<a name="MkAuthClient+chamado"></a>

### mkAuthClient.chamado : [<code>Chamado</code>](#Chamado)
**Kind**: instance property of [<code>MkAuthClient</code>](#MkAuthClient)  
<a name="MkAuthClient+plano"></a>

### mkAuthClient.plano : [<code>Plano</code>](#Plano)
**Kind**: instance property of [<code>MkAuthClient</code>](#MkAuthClient)  
<a name="MkAuthClient+conta"></a>

### mkAuthClient.conta : [<code>Conta</code>](#Conta)
**Kind**: instance property of [<code>MkAuthClient</code>](#MkAuthClient)  
<a name="MkAuthClient+empresa"></a>

### mkAuthClient.empresa : [<code>Empresa</code>](#Empresa)
**Kind**: instance property of [<code>MkAuthClient</code>](#MkAuthClient)  
<a name="MkAuthClient+instalacao"></a>

### mkAuthClient.instalacao : [<code>Instalacao</code>](#Instalacao)
**Kind**: instance property of [<code>MkAuthClient</code>](#MkAuthClient)  
<a name="MkAuthClient+usuario"></a>

### mkAuthClient.usuario : [<code>Usuario</code>](#Usuario)
**Kind**: instance property of [<code>MkAuthClient</code>](#MkAuthClient)  
<a name="MkAuthClient+caixa"></a>

### mkAuthClient.caixa : [<code>Caixa</code>](#Caixa)
**Kind**: instance property of [<code>MkAuthClient</code>](#MkAuthClient)  

<a name="Caixa"></a>

## Caixa
**Kind**: global class  

* [Caixa](#Caixa)
    * [.list(login)](#Caixa+list) ⇒ <code>Promise</code>
    * [.listAll([filter_cbk])](#Caixa+listAll) ⇒ <code>Promise</code>

<a name="Caixa+list"></a>

### caixa.list(login) ⇒ <code>Promise</code>
Obtem as movimentações em caixa feitas por um determinado usuário.

**Kind**: instance method of [<code>Caixa</code>](#Caixa)  

| Param | Type | Description |
| --- | --- | --- |
| login | <code>String</code> | Login do usuário que se deseja listar as movimentaçẽs |

<a name="Caixa+listAll"></a>

### caixa.listAll([filter_cbk]) ⇒ <code>Promise</code>
Lista todas as operações em caixa

**Kind**: instance method of [<code>Caixa</code>](#Caixa)  

| Param | Type | Description |
| --- | --- | --- |
| [filter_cbk] | <code>function</code> | Essa callback será repassada para `Array.filter()`, filtrando o resultado da listagem |


<a name="Cliente"></a>

## Cliente
**Kind**: global class  

* [Cliente](#Cliente)
    * [.list(login)](#Cliente+list) ⇒ <code>Promise</code>
    * [.listAll([filterCbk])](#Cliente+listAll) ⇒ <code>Promise</code>

<a name="Cliente+list"></a>

### cliente.list(login) ⇒ <code>Promise</code>
Obtem dados detalhados de um cliente usando o login como chave de busca

**Kind**: instance method of [<code>Cliente</code>](#Cliente)  

| Param | Type | Description |
| --- | --- | --- |
| login | <code>String</code> | login do cliente que se deseja |

<a name="Cliente+listAll"></a>

### cliente.listAll([filterCbk]) ⇒ <code>Promise</code>
Lista todos os usuários.

**Kind**: instance method of [<code>Cliente</code>](#Cliente)  

| Param | Type | Description |
| --- | --- | --- |
| [filterCbk] | <code>function</code> | Essa callback será repassada para `Array.filter()`, filtrando o resultado da listagem |


<a name="Titulo"></a>

## Titulo
**Kind**: global class  

* [Titulo](#Titulo)
    * [.list(numero_titulo)](#Titulo+list) ⇒ <code>Promise</code>
    * [.listAll([filter_cbk])](#Titulo+listAll) ⇒ <code>Promise</code>
    * [.receber(numero_titulo)](#Titulo+receber) ⇒ <code>Promise</code>

<a name="Titulo+list"></a>

### titulo.list(numero_titulo) ⇒ <code>Promise</code>
Obtem detalhes de um título específico

**Kind**: instance method of [<code>Titulo</code>](#Titulo)  

| Param | Type | Description |
| --- | --- | --- |
| numero_titulo | <code>Number</code> | Numero do titulo que se deseja |

<a name="Titulo+listAll"></a>

### titulo.listAll([filter_cbk]) ⇒ <code>Promise</code>
Lista todos os titulos

**Kind**: instance method of [<code>Titulo</code>](#Titulo)  

| Param | Type | Description |
| --- | --- | --- |
| [filter_cbk] | <code>function</code> | Essa callback será repassada para `Array.filter()`, filtrando o resultado da listagem |

<a name="Titulo+receber"></a>

### titulo.receber(numero_titulo) ⇒ <code>Promise</code>
Receber um título em aberto

**Kind**: instance method of [<code>Titulo</code>](#Titulo)  

| Param | Type | Description |
| --- | --- | --- |
| numero_titulo | <code>Number</code> | Número do título a dar baixa |


<a name="Chamado"></a>

## Chamado
**Kind**: global class  

* [Chamado](#Chamado)
    * [.list(id_chamado)](#Chamado+list) ⇒ <code>Promise</code>
    * [.listAll([filter_cbk])](#Chamado+listAll) ⇒ <code>Promise</code>

<a name="Chamado+list"></a>

### chamado.list(id_chamado) ⇒ <code>Promise</code>
Obtem detalhes de um chamado específico

**Kind**: instance method of [<code>Chamado</code>](#Chamado)  

| Param | Type | Description |
| --- | --- | --- |
| id_chamado | <code>String</code> | ID do chamado no sistema |

<a name="Chamado+listAll"></a>

### chamado.listAll([filter_cbk]) ⇒ <code>Promise</code>
Lista todos os chamados no sistema

**Kind**: instance method of [<code>Chamado</code>](#Chamado)  

| Param | Type | Description |
| --- | --- | --- |
| [filter_cbk] | <code>function</code> | Essa callback será repassada para `Array.filter()`, filtrando o resultado da listagem |


<a name="Plano"></a>

## Plano
**Kind**: global class  

* [Plano](#Plano)
    * [.list(nome)](#Plano+list) ⇒ <code>Promise</code>
    * [.listAll([filterCbk])](#Plano+listAll) ⇒ <code>Promise</code>

<a name="Plano+list"></a>

### plano.list(nome) ⇒ <code>Promise</code>
Detalha um plano no sistema

**Kind**: instance method of [<code>Plano</code>](#Plano)  

| Param | Type | Description |
| --- | --- | --- |
| nome | <code>String</code> | Nome do plano que se deseja |

<a name="Plano+listAll"></a>

### plano.listAll([filterCbk]) ⇒ <code>Promise</code>
Listar todos os planos do sistema

**Kind**: instance method of [<code>Plano</code>](#Plano)  

| Param | Type | Description |
| --- | --- | --- |
| [filterCbk] | <code>function</code> | Essa callback será repassada para `Array.filter()`, filtrando o resultado da listagem |


<a name="Conta"></a>

## Conta
**Kind**: global class  

* [Conta](#Conta)
    * [.list(numero_conta)](#Conta+list) ⇒ <code>Promise</code>
    * [.listAll([filter_cbk])](#Conta+listAll) ⇒ <code>Promise</code>

<a name="Conta+list"></a>

### conta.list(numero_conta) ⇒ <code>Promise</code>
Detalha uma conta bancária do sistema

**Kind**: instance method of [<code>Conta</code>](#Conta)  

| Param | Type | Description |
| --- | --- | --- |
| numero_conta | <code>Number</code> | Número da conta que se deseja |

<a name="Conta+listAll"></a>

### conta.listAll([filter_cbk]) ⇒ <code>Promise</code>
Lista todas as contas bancárias

**Kind**: instance method of [<code>Conta</code>](#Conta)  

| Param | Type | Description |
| --- | --- | --- |
| [filter_cbk] | <code>function</code> | Essa callback será repassada para `Array.filter()`, filtrando o resultado da listagem |


<a name="Empresa"></a>

## Empresa
**Kind**: global class  
<a name="Empresa+listAll"></a>

### empresa.listAll() ⇒ <code>Promise</code>
Lista os dados cadastrais da empresa

**Kind**: instance method of [<code>Empresa</code>](#Empresa)  

<a name="Instalacao"></a>

## Instalacao
**Kind**: global class  

* [Instalacao](#Instalacao)
    * [.list(id)](#Instalacao+list) ⇒ <code>Promise</code>
    * [.listAll([filterCbk])](#Instalacao+listAll) ⇒ <code>Promise</code>

<a name="Instalacao+list"></a>

### instalacao.list(id) ⇒ <code>Promise</code>
Detalha uma instalação

**Kind**: instance method of [<code>Instalacao</code>](#Instalacao)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>Number</code> | ID da instalação que se deseja |

<a name="Instalacao+listAll"></a>

### instalacao.listAll([filterCbk]) ⇒ <code>Promise</code>
Lista todas as instalações

**Kind**: instance method of [<code>Instalacao</code>](#Instalacao)  

| Param | Type | Description |
| --- | --- | --- |
| [filterCbk] | <code>function</code> | Essa callback será repassada para `Array.filter()`, filtrando o resultado da listagem |


<a name="Usuario"></a>

## Usuario
**Kind**: global class  

* [Usuario](#Usuario)
    * [.list(login)](#Usuario+list) ⇒ <code>Promise</code>
    * [.listAll([filterCbk])](#Usuario+listAll) ⇒ <code>Promise</code>

<a name="Usuario+list"></a>

### usuario.list(login) ⇒ <code>Promise</code>
Detalha um usuário do sistema

**Kind**: instance method of [<code>Usuario</code>](#Usuario)  

| Param | Type | Description |
| --- | --- | --- |
| login | <code>String</code> | Login do usuário no sistema |

<a name="Usuario+listAll"></a>

### usuario.listAll([filterCbk]) ⇒ <code>Promise</code>
Lista todos os usuários do sistema

**Kind**: instance method of [<code>Usuario</code>](#Usuario)  

| Param | Type | Description |
| --- | --- | --- |
| [filterCbk] | <code>function</code> | Essa callback será repassada para `Array.filter()`, filtrando o resultado da listagem |

* * *
