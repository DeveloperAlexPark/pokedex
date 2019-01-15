import axios from 'axios';

export default function appConfig() {
	axios.defaults.baseURL = 'https://pokeapi.co/api/v2/';
	axios.defaults.headers.common['Accept'] = 'application/json';
	axios.defaults.headers.common['Content-Type'] = 'application/json; charset=utf-8';
}