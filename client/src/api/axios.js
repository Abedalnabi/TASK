import axios from 'axios';
import { SERVER_PATH } from '../config/env/env';

axios.defaults.baseURL = SERVER_PATH;

axios.interceptors.request.use(
	function (config) {
		// Do something before request is sent
		return config;
	},
	function (error) {
		// Do something with request error
		return Promise.reject(error);
	}
);

const method = {
	get: axios.get,
	post: axios.post,
	put: axios.put,
	delete: axios.delete,
};

export default method;
