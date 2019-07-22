'use strict';

const axios = require('axios');
const debug = require('debug')('mkauth-node-api');

module.exports = (server_ip, api_token)=>{

	const request = (resource, method, value)=>{
		let uri = `http://api:${api_token}@${server_ip}/api/${resource}/${method}`;

		if(value) {
      uri += `/${value}`;
    }

    debug(`fetching ${uri}`);
    return axios.get(uri);
	};

	return request;
};
