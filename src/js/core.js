import defaults from './defaults';
import Api from './api';

class EasyWeather extends Api {

	constructor(element, options = {}) {
		super();
		
		this.element = this.getElement(element);
		if (!this.element) {
			return false;
		}

		this.options = EasyWeather.extend(defaults, options);
		this.init();
	}

	static extend(defaults, options) {
        var results = {};
        for (let key in defaults) {
			'undefined' !== typeof options[key] ? results[key] = options[key] : results[key] = defaults[key];
        }
        return results;
    }

	async init() {
		await this.getTodayWeather();
	}
}

export default EasyWeather;