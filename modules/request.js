'use strict';

const rp = require('request-promise');

module.exports = (server_ip, api_token)=>{

	const request = (resource, method, value)=>{
		let uri = `http://api:${api_token}@${server_ip}/api/${resource}/${method}`;

		if(value)
			uri += `/${value}`;

		const json = true;

		const options = { uri, json};

		return rp(options);
	};

	return request;
};