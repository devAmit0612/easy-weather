import Icon from './icon';
import config from '../../config.json';

export default class Template extends Icon {

    weatherHTML;

    prefix = config.prefix + '-'

    templates = {
        card: 'card',
        classic: 'classic',
        compact: 'compact',
        full: 'full',
        minimal: 'minimal'
    };

    classes = {
        flat: this.prefix + 'flat-icon',
        animate: this.prefix + 'animate',
        content: this.prefix + 'content',
        weather: this.prefix + 'weather',
        card: this.prefix + this.templates.card,
        classic: this.prefix + this.templates.classic,
        compact: this.prefix + this.templates.compact,
        full: this.prefix + this.templates.full,
        minimal: this.prefix + this.templates.minimal
    }

    getTemplate() {
        const html = document.createElement('div');

        let classes = this.classes.weather;
        classes += this.options.iconAnimation ? ' ' + this.classes.animate : '';
        classes += this.options.iconStyle === 'flat' ? ' ' + this.classes.flat : '';

        switch (this.options.template) {

            case this.templates.card:
                classes += ' ' + this.classes.card + this.getBgClass();
                html.innerHTML = this.cardTemplate();
                break;
            
            case this.templates.classic:
                classes += ' ' + this.classes.classic + this.getBgClass();
                html.innerHTML = this.classicTemplate();
                break;
            
            case this.templates.compact:
                classes += ' ' + this.classes.compact;
                html.innerHTML = this.compactTemplate();
                break;
            
            case this.templates.full:
                classes += ' ' + this.classes.full + this.getBgClass();
                html.innerHTML = this.fullTemplate();
                break;
            
            case this.templates.minimal:
                classes += ' ' + this.classes.minimal;
                html.innerHTML = this.minimalTemplate();
                break;
        
            default:
                classes += ' ' + this.classes.content;                
                html.innerHTML = this.defaultTemplate();
                break;
        }

        html.classList = classes;
        this.element.appendChild(html);
        this.tabClickEvent();
    }

    cardTemplate() {
        let html = `<div class="${this.classes.card}__item ${this.classes.card}__item--main">
            <div class="${this.classes.card}__col">
                ${this.getIconTemplate()}
                ${this.getTempDescription()}
            </div>
            <div class="${this.classes.card}__col">
                ${this.getTempLocDate()}
            </div>
        </div>`;

        if (this.options.quarterly) {
            html += `<div class="${this.classes.card}__item">
                <span class="${this.prefix}title">${this.options.title.quarterly}</span>
                ${this.getQuarterlyTemplate()}
            </div>`;
        }

        if (this.options.forecast) {
            html += `<div class="${this.classes.card}__item">
                <span class="${this.prefix}title">${this.options.title.forecast}</span>
                ${this.getForecastTemplate()}
            </div>`;
        }

        if (this.options.details) {
            html += `<div class="${this.classes.card}__item">
                <span class="${this.prefix}title">${this.options.title.details}</span>
                ${this.getTempTemplate()}
                ${this.getDetailsTemplate()}
            </div>`;
        }

        return html;
    }

    classicTemplate() {
        let html = `<div class="${this.classes.classic}__body">
            ${this.getIconTemplate()}
            ${this.getTempDescription()}
            <div class="${this.classes.classic}__body__date">${this.getTempLocDate()}</div>
            ${this.getTempTemplate()}`;

        if (this.options.details) {
            html += `${this.getDetailsTemplate()}</div>`
        } else {
            html += `</div>`
        }

        if (this.options.quarterly || this.options.forecast) {
            html += `<div class="${this.classes.classic}__foot">
                ${this.getTempTabs()}
            </div>`;
        }

        return html;
    }

    compactTemplate() {
        let html = `<div class="${this.classes.compact}__main">
            <div class="${this.classes.compact}__main__head">
                <span class="${this.prefix}date">${this.weather.today}</span>
                ${this.getIconTemplate()}
            </div>
            ${this.getTempDescription()}
            ${this.getTempTemplate()}`;

        if (this.options.details) {
            html += `${this.getDetailsTemplate()}</div>`
        } else {
            html += `</div>`
        }

        if (this.options.quarterly || this.options.forecast) {
            html += `<div class="${this.classes.compact}__details">
                ${this.getTempTabs()}
            </div>`;
        }

        return html;
    }

    fullTemplate() {
        let html = `<div class="${this.classes.full}__main">
            ${this.getIconTemplate()}
            ${this.getTempDescription()}
            ${this.getTempTemplate()}
            <div class="${this.classes.full}__main__date">${this.getTempLocDate()}</div>
        </div>`;

        if (this.options.quarterly || this.options.forecast || this.options.details) {
            html += `<div class="${this.classes.full}__details">`;

            if (this.options.quarterly) {
                html += `<div class="${this.classes.full}__details__item">
                    <span class="${this.prefix}title">${this.options.title.quarterly}</span>
                    ${this.getQuarterlyTemplate()}
                </div>`;
            }
    
            if (this.options.forecast) {
                html += `<div class="${this.classes.full}__details__item">
                    <span class="${this.prefix}title">${this.options.title.forecast}</span>
                    ${this.getForecastTemplate()}
                </div>`;
            }
    
            if (this.options.details) {
                html += `<div class="${this.classes.full}__details__item">
                    <span class="${this.prefix}title">${this.options.title.details}</span>
                    ${this.getDetailsTemplate()}
                </div>`;
            }

            html += `</div>`;
        }

        return html;
    }

    minimalTemplate() {
        let html = `<div class="${this.classes.minimal}__main">
            <span class="${this.prefix}date">${this.weather.today}</span>
            <span class="${this.prefix}temp">${this.weather.temp.current}</span>
            ${this.getTempDescription()}
            ${this.getTempTemplate()}
            ${this.getDetailsTemplate()}
        </div>`;

        if (this.options.quarterly || this.options.forecast) {
            html += `<div class="${this.classes.minimal}__details">
                ${this.getTempTabs()}
            </div>`;
        }

        return html;
    }

    defaultTemplate() {
        let html = `<span>${this.weather.today}</span>`;
        html += this.options.icon ? `&nbsp;${this.weather.icon}` : `&nbsp;,`;
        html += `&nbsp;<span>${this.weather.temp.current} ${this.weather.location}</span>`;

        return html;
    }

    getTempDescription() {
        return this.options.description ? `<span class="${this.prefix}description">${this.weather.description}</span>` : ``;
    }

    getTempLocDate() {
        return `<span class="${this.prefix}date">${this.weather.today}</span>
        <span class="${this.prefix}location">${this.weather.location}</span>`;
    }

    getIconTemplate() {
        return `<div class="${this.prefix}main-icon">
            <span class="${this.prefix}temp">${this.weather.temp.current}</span>
            ${this.options.icon ? `<span class="${this.prefix}icon">${this.weather.icon}</span>` : ``}
        </div>`;
    }

    getTempTemplate() {
        return `<div class="${this.prefix}temp-list">
            <div class="${this.prefix}temp-list__item">
                <span class="${this.prefix}temp-list__item__text">${this.options.title.maxTemp}</span>
                <span class="${this.prefix}temp-list__item__title">${this.weather.temp.max}</span>
            </div>
            <div class="${this.prefix}temp-list__item">
                <span class="${this.prefix}temp-list__item__text">${this.options.title.minTemp}</span>
                <span class="${this.prefix}temp-list__item__title">${this.weather.temp.min}</span>
            </div>
        </div>`;
    }

    getTempTabs() {
        let html = `<div class="${this.prefix}tab">`;

        html += this.options.quarterly ? `<a href="javascript:void(0);" class="${this.prefix}tab__link" data-tab="${config.prefix}_quarterly">${this.options.title.quarterly}</a>` : ``;
        html += this.options.forecast ? `<a href="javascript:void(0);" class="${this.prefix}tab__link" data-tab="${config.prefix}_forecast">${this.options.title.forecast}</a>` : ``;
        html += `</div>
        <div class="${this.prefix}tab-content">`;
        html += this.options.quarterly ? `<div id="${config.prefix}_quarterly" class="${this.prefix}tab-data">
                ${this.getQuarterlyTemplate()}
            </div>` : ``;
        html += this.options.forecast ? `<div id="${config.prefix}_forecast" class="${this.prefix}tab-data">
                ${this.getForecastTemplate()}
            </div>
        </div>` : ``;

        return html;
    }
    
    getQuarterlyTemplate() {
        let html = `<div class="${this.prefix}temp-data">`;

        for (let quarter of this.weather.quarterly) {
            html += `<div class="${this.prefix}temp-data__item">
                <div class="${this.prefix}temp-data__card">
                    <span class="${this.prefix}temp-data__time">${quarter.time}</span>
                    <span class="${this.prefix}temp-data__icon">${quarter.icon}</span>
                    <span class="${this.prefix}temp-data__temp">${quarter.temp.current}</span>
                </div>
            </div>`;
        }

        html += `</div>`;

        return html;
    }

    getForecastTemplate() {
        let html = `<div class="${this.prefix}temp-data">`;

        for (let forecast of this.weather.forecast) {
            html += `<div class="${this.prefix}temp-data__item">
                <div class="${this.prefix}temp-data__card">
                    <span class="${this.prefix}temp-data__day">${forecast.day}</span>
                    <span class="${this.prefix}temp-data__icon">${forecast.icon}</span>
                    <span class="${this.prefix}temp-data__temp">${forecast.temp.current}</span>
                </div>
            </div>`;
        }

        html += `</div>`;

        return html;
    }

    getDetailsTemplate() {
        let html = `<div class="${this.prefix}temp-detail">`;
        
        if (this.options.sunTime) {
            html += `<div class="${this.prefix}temp-detail__item">
                <span class="${this.prefix}temp-detail__title">Sunrise</span>
                <span class="${this.prefix}temp-detail__text">${this.weather.sunrise}</span>
            </div>
            <div class="${this.prefix}temp-detail__item">
                <span class="${this.prefix}temp-detail__title">Sunset</span>
                <span class="${this.prefix}temp-detail__text">${this.weather.sunset}</span>
            </div>`;
        }

        html += `<div class="${this.prefix}temp-detail__item">
                <span class="${this.prefix}temp-detail__title">Wind speed</span>
                <span class="${this.prefix}temp-detail__text">${this.weather.wind}</span>
            </div>
            <div class="${this.prefix}temp-detail__item">
                <span class="${this.prefix}temp-detail__title">Humidity</span>
                <span class="${this.prefix}temp-detail__text">${this.weather.humidity}</span>
            </div>
            <div class="${this.prefix}temp-detail__item">
                <span class="${this.prefix}temp-detail__title">Visibility</span>
                <span class="${this.prefix}temp-detail__text">${this.weather.visibility}</span>
            </div>
            <div class="${this.prefix}temp-detail__item">
                <span class="${this.prefix}temp-detail__title">Pressure</span>
                <span class="${this.prefix}temp-detail__text">${this.weather.pressure}</span>
            </div>
        </div>`;

        return html;
    }

    getBgClass() {
        const iconId = this.apiWeatherData.weather[0].icon;
        let className = ' ' + this.prefix;

        if (iconId.indexOf(this.iconIds.eleven) !== -1) {
            className += this.iconFiles.storm;
        } else if (iconId.indexOf(this.iconIds.fifty) !== -1) {
            className += this.iconFiles.mist;
        } else if (iconId.indexOf(this.iconIds.day) !== -1) {
            className += this.iconDirectories.day + '-';
        } else {
            className += this.iconDirectories.night + '-';
        }

        if (iconId.indexOf(this.iconIds.one) !== -1) {
            className += this.iconFiles.clear;
        } else if (iconId.indexOf(this.iconIds.two) !== -1 || iconId.indexOf(this.iconIds.three) !== -1 || iconId.indexOf(this.iconIds.four) !== -1) {
            className += this.iconFiles.cloud;
        } else if (iconId.indexOf(this.iconIds.nine) !== -1 || iconId.indexOf(this.iconIds.ten) !== -1) {
            className += this.iconFiles.rain;
        } else if (iconId.indexOf(this.iconIds.thirteen) !== -1) {
            className += this.iconFiles.snow;
        }

        return className;
    }

    tabClickEvent() {
        const links = document.querySelectorAll('.' + this.prefix + 'tab__link');
        const tabs = document.querySelectorAll('.' + this.prefix + 'tab-data');
        const active = 'active';
        const show = 'show';

        if (links.length) {
            const id = links[0].getAttribute('data-tab');
            const tab = document.querySelector('#' + id);

            links[0].classList.add(active);
            tab.classList.add(show);            

            links.forEach(link => {
                link.addEventListener('click', () => {
                    if (!link.classList.contains(active)) {

                        links.forEach(item => {item.classList.remove(active);});
                        tabs.forEach(tab => {tab.classList.remove(show);});

                        const id = link.getAttribute('data-tab');
                        const tab = document.querySelector('#' + id);

                        link.classList.add(active);
                        tab.classList.add(show);
                    }
                });
            })
        }
    }
}