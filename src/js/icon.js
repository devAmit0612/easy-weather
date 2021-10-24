import Helper from './helper';

export default class Icon extends Helper {

    path = '';

    getSvgCode() {
        return fetch(this.path)
        .then(data =>  {
            return data.text()
        })
        .then(markup => {
            return markup
        });
    }

    getIcon(iconId) {

        this.path = '';

        this.path += this.options.iconPath + this.options.iconStyle + '/';

        if (iconId.indexOf(this.iconIds.eleven) !== -1 || iconId.indexOf(this.iconIds.fifty) !== -1) {
            this.path += this.iconDirectories.common + '/';
            iconId.indexOf(this.iconIds.eleven) !== -1 ? this.path += this.iconFiles.storm : this.path += this.iconFiles.mist;
        } else {
            iconId.indexOf(this.iconIds.day) !== -1 ? this.path += this.iconDirectories.day + '/' : this.path += this.iconDirectories.night + '/';
        }

        if (iconId.indexOf(this.iconIds.one) !== -1) {
            this.path += this.iconFiles.clear;
        } else if (iconId.indexOf(this.iconIds.two) !== -1 || iconId.indexOf(this.iconIds.three) !== -1 || iconId.indexOf(this.iconIds.four) !== -1) {
            this.path += this.iconFiles.cloud;
        } else if (iconId.indexOf(this.iconIds.nine) !== -1 || iconId.indexOf(this.iconIds.ten) !== -1) {
            this.path += this.iconFiles.rain;
        } else if (iconId.indexOf(this.iconIds.thirteen) !== -1) {
            this.path += this.iconFiles.snow;
        }
        
        this.path += '.svg';

        return this.getSvgCode().then(svg => {
            return svg;
        });
        
    }

}