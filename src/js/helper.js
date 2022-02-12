import Dom from './dom';

export default class Helper extends Dom {

    apiWeatherData = {};
    
    apiUrl = '';

	successCode = 200;

    options = {};

    weather = {};

    element;

    days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    // constant icon ids that is given by api
    iconIds = {
        day: 'd',
        night: 'n',
        one: '01',
        two: '02',
        three: '03',
        four: '04',
        nine: '09',
        ten: '10',
        eleven: '11',
        thirteen: '13',
        fifty: '50'
    };

    // icon directory name
    iconDirectories = {
        common: 'common',
        day: 'day',
        night: 'night'
    };

    // icon file name
    iconFiles = {
        clear: 'clear',
        cloud: 'cloud',
        mist: 'mist',
        rain: 'rain',
        snow: 'snow',
        storm: 'storm'
    };

    weatherTemp(temp) {
        return {
            current: this.tempFormat(temp.temp),
            min: this.tempFormat(temp.temp_min),
            max: this.tempFormat(temp.temp_max)
        };
    }

    tempFormat(temp) {
        if (this.options.units.temp.toLowerCase() === 'f') {
            return Math.round(((temp - 273.15) * 1.8) + 32) + '°F';
        } else if (this.options.units.temp.toLowerCase() === 'c') {
            return Math.round(temp - 273.15) + '°C';
        } else {
            return Math.round(temp) + 'K';
        }
    }

    windFormat(wind) {
        if (this.options.units.wind.toLowerCase() === 'km/h') {
            return `${wind.speed * 3.6} ${this.options.units.wind}`
        } else {
            return `${wind.speed} ${this.options.units.wind}`
        }
    }

    visibilityFormat(visibility) {
        let digit = this.options.units.visibility.toLowerCase() === 'km' ? visibility / 1000.0 : visibility * 0.00062137;
        digit = this.isFloat(digit) ? digit.toFixed(2) : digit;
        return `${digit} ${this.options.units.visibility}`;
    }

    isFloat(num) {
        return Number(num) === num && num % 1 !== 0;
    }

    getToday() {
        const date = new Date();
        const month = this.months[date.getMonth()].substring(0,3);
        const day = this.numberSuffix(date.getDate());

        return `${month} ${day}`;
    }

    dateFormat(dateString) {
        const today = new Date();
        const date = new Date(dateString);

        if (today.getDate() === date.getDate()) {
            return 'Today';
        } else {
            return this.days[date.getDay()];
        }
    }

    numberSuffix(number) {
        const singleNumber = number % 10;
        const doubleNumber = number % 100;

        if (singleNumber === 1 && doubleNumber === 11) {
            return `${number}st`;
        } else if (singleNumber === 2 && doubleNumber === 12) {
            return `${number}nd`;
        } else if (singleNumber === 3 && doubleNumber === 13) {
            return `${number}rd`;
        } else {
            return `${number}th`;
        }
    }

    timeFormat(time) {
        const timeFormat = 12;

        if (typeof time === 'string' || time instanceof String) {
            const hours = parseInt(time.split(':')[0]);

            if (hours === 0) {
                return '12 AM'
            } else if (timeFormat === hours) {
                return '12 PM'
            } else if (timeFormat < hours) {
                return `${('0' + (hours - timeFormat)).slice(-2)} PM`;
            } else {
                return `${('0' + hours).slice(-2)} AM`;
            }

        } else {
            const ms = time * 1000;
            const date = new Date(ms);
            let hours = date.getHours();

            if(hours > timeFormat) {
                let hoursRemaining = 24 - hours;
                hours = timeFormat - hoursRemaining;
            }

            let minutes = date.getMinutes();
            minutes = minutes.toString();

            hours = ('0' + hours).slice(-2);
            minutes = ('0' + minutes).slice(-2);

            return `${hours}:${minutes}`;
        }
    }

    isRightTime(timeString) {
        const currentTime = new Date().getTime();
        const weatherTime = new Date(timeString).getTime();

        if (weatherTime >= currentTime) {
            return true;
        }
    }

    indexOfTime(list) {
        for (let item = 0; item < list.length; item++) {
            if (this.isRightTime(list[item].dt_txt)) {
                return item;
            }
        }
    }
    
}