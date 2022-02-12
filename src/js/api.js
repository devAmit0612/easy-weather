import Weather from './weather';

export default class Api extends Weather {

	weatherApiUrl(forecast = false) {
		this.apiUrl = 'https://api.openweathermap.org/data/2.5/';
		
		this.apiUrl += forecast ? 'forecast' : 'weather';
		this.apiUrl += '?lang=' + this.options.lang;

		if (this.options.code) {
			this.apiUrl += '&id=' + this.options.code;
		} else if (this.options.location) {
			this.apiUrl += '&q=' + this.options.location;
		} else if (this.options.lat && this.options.lng) {
			this.apiURL += '&lat=' + this.options.lat + '&lon=' + this.options.lng;
		}

		if (this.options.key) {
			this.apiUrl += '&appid=' + this.options.key;
		}
	}

	async getTodayWeather() {
		this.weatherApiUrl();

		fetch(this.apiUrl)
		.then(response => response.json())
		.then(data => {
			if (parseInt(data.cod) === this.successCode) {
				this.apiWeatherData = data;
				if (this.options.forecast || this.options.quarterly) {
					this.getForecastWeather();
				} else {
					this.initWeatherDate();
				}
			} else {
				alert('Message: ', data.message);
			} 	
		});
	}

	async getForecastWeather() {
		this.weatherApiUrl(true);
		
		fetch(this.apiUrl)
		.then(response => response.json())
		.then(data => {
			if (parseInt(data.cod) === this.successCode) {
				this.apiWeatherData.list = data.list;
				this.initWeatherDate();
			} else {
				alert('Message: ', data.message);
			}
		});
	}
}