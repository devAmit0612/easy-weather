export default {
    key: null,
    lang: 'en',
    code: null,
    location: null,
    lat: null,
    lng: null,

    template: null,
    iconStyle: 'flat',

    description: false,
    icon: true,
    iconPath: 'images/icons/',
    iconAnimation: false,
    sunTime: false,
    today: true,
    details: false,
    forecast: false,
    quarterly: false,

    units: {
        temp: 'c',
        wind: 'mps',
        visibility: 'km',
    },

    title: {
        maxTemp: 'Max',
        minTemp: 'Min',
        forecast: 'Forecast',
        quarterly: 'Quarterly',
        details: 'Details'
    },

    customTemplate: function(element, weather) {}
};