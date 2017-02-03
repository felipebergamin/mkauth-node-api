# mkauth-node-api
Client em node.js para API do sistema [Mk-Auth](http://mk-auth.com.br/) de controle de provedores.
Este pacote oferece suporte à todos os recursos oferecidos pela mini API do sistema.

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
		response.clientes.forEach(cliente=>{
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
        response.titulos.forEach(titulo=>{
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
    * [.cliente](#MkAuthClient+cliente) : <code>[Cliente](#Cliente)</code>
    * [.titulo](#MkAuthClient+titulo) : <code>[Titulo](#Titulo)</code>
    * [.chamado](#MkAuthClient+chamado) : <code>[Chamado](#Chamado)</code>
    * [.plano](#MkAuthClient+plano) : <code>[Plano](#Plano)</code>
    * [.conta](#MkAuthClient+conta) : <code>[Conta](#Conta)</code>
    * [.empresa](#MkAuthClient+empresa) : <code>[Empresa](#Empresa)</code>
    * [.instalacao](#MkAuthClient+instalacao) : <code>[Instalacao](#Instalacao)</code>
    * [.usuario](#MkAuthClient+usuario) : <code>[Usuario](#Usuario)</code>
    * [.caixa](#MkAuthClient+caixa) : <code>[Caixa](#Caixa)</code>

<a name="new_MkAuthClient_new"></a>

### new MkAuthClient(IP, Token)
Construtor, cria uma nova instância do cliente


| Param | Type | Description |
| --- | --- | --- |
| IP | <code>String</code> | do servidor MK-AUTH |
| Token | <code>String</code> | para usar API do sistema, consulte o seu dentro do menu Provedor/Dados da empresa/KEY API |

<a name="MkAuthClient+cliente"></a>

### mkAuthClient.cliente : <code>[Cliente](#Cliente)</code>
**Kind**: instance property of <code>[MkAuthClient](#MkAuthClient)</code>  
<a name="MkAuthClient+titulo"></a>

### mkAuthClient.titulo : <code>[Titulo](#Titulo)</code>
**Kind**: instance property of <code>[MkAuthClient](#MkAuthClient)</code>  
<a name="MkAuthClient+chamado"></a>

### mkAuthClient.chamado : <code>[Chamado](#Chamado)</code>
**Kind**: instance property of <code>[MkAuthClient](#MkAuthClient)</code>  
<a name="MkAuthClient+plano"></a>

### mkAuthClient.plano : <code>[Plano](#Plano)</code>
**Kind**: instance property of <code>[MkAuthClient](#MkAuthClient)</code>  
<a name="MkAuthClient+conta"></a>

### mkAuthClient.conta : <code>[Conta](#Conta)</code>
**Kind**: instance property of <code>[MkAuthClient](#MkAuthClient)</code>  
<a name="MkAuthClient+empresa"></a>

### mkAuthClient.empresa : <code>[Empresa](#Empresa)</code>
**Kind**: instance property of <code>[MkAuthClient](#MkAuthClient)</code>  
<a name="MkAuthClient+instalacao"></a>

### mkAuthClient.instalacao : <code>[Instalacao](#Instalacao)</code>
**Kind**: instance property of <code>[MkAuthClient](#MkAuthClient)</code>  
<a name="MkAuthClient+usuario"></a>

### mkAuthClient.usuario : <code>[Usuario](#Usuario)</code>
**Kind**: instance property of <code>[MkAuthClient](#MkAuthClient)</code>  
<a name="MkAuthClient+caixa"></a>

### mkAuthClient.caixa : <code>[Caixa](#Caixa)</code>
**Kind**: instance property of <code>[MkAuthClient](#MkAuthClient)</code>  

<a name="Caixa"></a>

## Caixa
**Kind**: global class  

* [Caixa](#Caixa)
    * [.list(login)](#Caixa+list) ⇒ <code>Promise</code>
    * [.listAll()](#Caixa+listAll) ⇒ <code>Promise</code>

<a name="Caixa+list"></a>

### caixa.list(login) ⇒ <code>Promise</code>
Obtem as movimentações em caixa feitas por um determinado usuário.

**Kind**: instance method of <code>[Caixa](#Caixa)</code>  

| Param | Type | Description |
| --- | --- | --- |
| login | <code>String</code> | Login do usuário que se deseja listar as movimentaçẽs |

<a name="Caixa+listAll"></a>

### caixa.listAll() ⇒ <code>Promise</code>
Lista todas as operações em caixa

**Kind**: instance method of <code>[Caixa](#Caixa)</code>  

<a name="Cliente"></a>

## Cliente
**Kind**: global class  

* [Cliente](#Cliente)
    * [.list(login)](#Cliente+list) ⇒ <code>Promise</code>
    * [.listAll()](#Cliente+listAll) ⇒ <code>Promise</code>

<a name="Cliente+list"></a>

### cliente.list(login) ⇒ <code>Promise</code>
Obtem dados detalhados de um cliente usando o login como chave de busca

**Kind**: instance method of <code>[Cliente](#Cliente)</code>  

| Param | Type | Description |
| --- | --- | --- |
| login | <code>String</code> | login do cliente que se deseja |

<a name="Cliente+listAll"></a>

### cliente.listAll() ⇒ <code>Promise</code>
Lista todos os usuários.

**Kind**: instance method of <code>[Cliente](#Cliente)</code>  

<a name="Titulo"></a>

## Titulo
**Kind**: global class  

* [Titulo](#Titulo)
    * [.list(numero_titulo)](#Titulo+list) ⇒ <code>Promise</code>
    * [.listAll()](#Titulo+listAll) ⇒ <code>Promise</code>
    * [.receber(numero_titulo)](#Titulo+receber) ⇒ <code>Promise</code>

<a name="Titulo+list"></a>

### titulo.list(numero_titulo) ⇒ <code>Promise</code>
Obtem detalhes de um título específico

**Kind**: instance method of <code>[Titulo](#Titulo)</code>  

| Param | Type | Description |
| --- | --- | --- |
| numero_titulo | <code>Number</code> | Numero do titulo que se deseja |

<a name="Titulo+listAll"></a>

### titulo.listAll() ⇒ <code>Promise</code>
Lista todos os titulos

**Kind**: instance method of <code>[Titulo](#Titulo)</code>  
<a name="Titulo+receber"></a>

### titulo.receber(numero_titulo) ⇒ <code>Promise</code>
Receber um título em aberto

**Kind**: instance method of <code>[Titulo](#Titulo)</code>  

| Param | Type | Description |
| --- | --- | --- |
| numero_titulo | <code>Number</code> | Número do título a dar baixa |


<a name="Chamado"></a>

## Chamado
**Kind**: global class  

* [Chamado](#Chamado)
    * [.list(id_chamado)](#Chamado+list) ⇒ <code>Promise</code>
    * [.listAll()](#Chamado+listAll) ⇒ <code>Promise</code>

<a name="Chamado+list"></a>

### chamado.list(id_chamado) ⇒ <code>Promise</code>
Obtem detalhes de um chamado específico

**Kind**: instance method of <code>[Chamado](#Chamado)</code>  

| Param | Type | Description |
| --- | --- | --- |
| id_chamado | <code>String</code> | ID do chamado no sistema |

<a name="Chamado+listAll"></a>

### chamado.listAll() ⇒ <code>Promise</code>
Lista todos os chamados no sistema

**Kind**: instance method of <code>[Chamado](#Chamado)</code>  

<a name="Plano"></a>

## Plano
**Kind**: global class  

* [Plano](#Plano)
    * [.list(nome_plano)](#Plano+list) ⇒ <code>Promise</code>
    * [.listAll()](#Plano+listAll) ⇒ <code>Promise</code>

<a name="Plano+list"></a>

### plano.list(nome_plano) ⇒ <code>Promise</code>
Detalha um plano no sistema

**Kind**: instance method of <code>[Plano](#Plano)</code>  

| Param | Type | Description |
| --- | --- | --- |
| nome_plano | <code>String</code> | Nome do plano que se deseja |

<a name="Plano+listAll"></a>

### plano.listAll() ⇒ <code>Promise</code>
Listar todos os planos do sistema

**Kind**: instance method of <code>[Plano](#Plano)</code>  

<a name="Conta"></a>

## Conta
**Kind**: global class  

* [Conta](#Conta)
    * [.list(numero_conta)](#Conta+list) ⇒ <code>Promise</code>
    * [.listAll()](#Conta+listAll) ⇒ <code>Promise</code>

<a name="Conta+list"></a>

### conta.list(numero_conta) ⇒ <code>Promise</code>
Detalha uma conta bancária do sistema

**Kind**: instance method of <code>[Conta](#Conta)</code>  

| Param | Type | Description |
| --- | --- | --- |
| numero_conta | <code>Number</code> | Número da conta que se deseja |

<a name="Conta+listAll"></a>

### conta.listAll() ⇒ <code>Promise</code>
Lista todas as contas bancárias

**Kind**: instance method of <code>[Conta](#Conta)</code>  

<a name="Empresa"></a>

## Empresa
**Kind**: global class  
<a name="Empresa+listAll"></a>

### empresa.listAll() ⇒ <code>Promise</code>
Lista os dados cadastrais da empresa

**Kind**: instance method of <code>[Empresa](#Empresa)</code>  

<a name="Instalacao"></a>

## Instalacao
**Kind**: global class  

* [Instalacao](#Instalacao)
    * [.list(id)](#Instalacao+list) ⇒ <code>Promise</code>
    * [.listAll()](#Instalacao+listAll) ⇒ <code>Promise</code>

<a name="Instalacao+list"></a>

### instalacao.list(id) ⇒ <code>Promise</code>
Detalha uma instalação

**Kind**: instance method of <code>[Instalacao](#Instalacao)</code>  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>Number</code> | ID da instalação que se deseja |

<a name="Instalacao+listAll"></a>

### instalacao.listAll() ⇒ <code>Promise</code>
Lista todas as instalações

**Kind**: instance method of <code>[Instalacao](#Instalacao)</code>  

<a name="Usuario"></a>

## Usuario
**Kind**: global class  

* [Usuario](#Usuario)
    * [.list(login)](#Usuario+list) ⇒ <code>Promise</code>
    * [.listAll()](#Usuario+listAll) ⇒ <code>Promise</code>

<a name="Usuario+list"></a>

### usuario.list(login) ⇒ <code>Promise</code>
Detalha um usuário do sistema

**Kind**: instance method of <code>[Usuario](#Usuario)</code>  

| Param | Type | Description |
| --- | --- | --- |
| login | <code>String</code> | Login do usuário no sistema |

<a name="Usuario+listAll"></a>

### usuario.listAll() ⇒ <code>Promise</code>
Lista todos os usuários do sistema

**Kind**: instance method of <code>[Usuario](#Usuario)</code>  
* * *