import axios from 'axios';

const API_KEY = '8956a9bbe8473c335b64b6db50b9682e';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},eg`;
	const request = axios.get(url);

	console.log('Request:', request);

	return {
		type: 'FETCH_WEATHER',
		payload: request
	};
}