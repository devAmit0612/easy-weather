import Template from './template';

export default class Weather extends Template {

    async initWeatherDate() {
        await this.todayWeatherData();

        if (this.apiWeatherData.list) {
            if (this.options.forecast) {
                await this.forecastWeatherData();
            }
            if (this.options.quarterly) {
                await this.quarterlyWeatherData();
            }
        }
        
        if (this.options.template) {
            this.getTemplate();    
        } else {
            this.options.customTemplate(this.weather);
        }
    }

    async todayWeatherData() {
        this.weather = await this.weatherData(this.apiWeatherData);

        this.weather.location = `${this.apiWeatherData.name}, ${this.apiWeatherData.sys.country}`;

        if (this.options.today) {
            this.weather.today = this.getToday();
        }
        
        if (this.options.sunTime && (this.apiWeatherData.sys.sunrise && this.apiWeatherData.sys.sunset)) {
            this.weather.sunrise = `${this.timeFormat(this.apiWeatherData.sys.sunrise)} AM`;
            this.weather.sunset = `${this.timeFormat(this.apiWeatherData.sys.sunset)} PM`;  
        }

        if (this.options.details) {
            this.weather.wind = this.windFormat(this.apiWeatherData.wind),
            this.weather.humidity = `${this.apiWeatherData.main.humidity}%`,
            this.weather.pressure = `${this.apiWeatherData.main.pressure} hPa`,
            this.weather.visibility = this.visibilityFormat(this.apiWeatherData.visibility);
        }        
    }

    async forecastWeatherData() {
        const forecastList = this.apiWeatherData.list;
        const index = this.indexOfTime(forecastList);

        this.weather.forecast = [];

        for (let item = index; item < forecastList.length; item += 8) {
            const forecastData = await this.weatherData(forecastList[item]);
            const date = forecastList[item].dt_txt.split(' ')[0];

            forecastData.day = this.dateFormat(date);

            this.weather.forecast.push(forecastData);
        }
    }

    async quarterlyWeatherData() {
        const forecastList = this.apiWeatherData.list;
        const index = this.indexOfTime(forecastList);
        const length = index + 8;

        this.weather.quarterly = [];

        for (let item = index; item < length; item++) {
            const quarterlyData = await this.weatherData(forecastList[item]);
            const time = forecastList[item].dt_txt.split(' ')[1];
            
            quarterlyData.time = this.timeFormat(time)
            
            this.weather.quarterly.push(quarterlyData);
        }
    }

    async weatherData(data) {
        const weather = {};

        weather.temp = this.weatherTemp(data.main);

        if (this.options.description) {
            weather.description = `${data.weather[0].description.charAt(0).toUpperCase()}${data.weather[0].description.slice(1)}`;
        }

        if (this.options.icon) {
            await this.getIcon(data.weather[0].icon).then(svgCode => {
                weather.icon = svgCode;
            });
        }

        return weather;
    }
}