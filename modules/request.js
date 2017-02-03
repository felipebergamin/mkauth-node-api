const rp = require('request-promise');

module.exports = (server_ip, api_token)=>{

	const request = (resource, method, value)=>{
		let uri = `http://${server_ip}/api/${api_token}/${resource}/${method}`;

		if(value)
			uri += `/${value}`;

		const json = true;

		const options = { uri, json};

		return rp(options);
	};

	return request;
};