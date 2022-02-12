# Easy Weather
This plugin provide a current [Weather](https://openweathermap.org/api) information by your given location. This is allows you to display weather details, temperature, forecast, quarterly temperature, icons etc...

__**Note: This is an API base plugin, you must have any serve to use it.**__

## How to use it?
For use this plugin firstly you have to [Register](https://home.openweathermap.org/users/sign_in) your project on **Open Weather Map** and obtain an API key.

## Demo
* [Simple Weather](https://devamit0612.github.io/easy-weather/dist/)
* [Card Weather](https://devamit0612.github.io/easy-weather/dist/card.html)
* [Classic Weather](https://devamit0612.github.io/easy-weather/dist/classic.html)
* [Compact Weather](https://devamit0612.github.io/easy-weather/dist/compact.html)
* [Custom Weather](https://devamit0612.github.io/easy-weather/dist/custom.html)
* [Full Weather](https://devamit0612.github.io/easy-weather/dist/full.html)
* [Minimal Weather](https://devamit0612.github.io/easy-weather/dist/minimal.html)

## Installation

### Gulp Build
#### Development Build
Build development version of Easy Weather:
```console
gulp build
```
#### Production Build
Build production version of Easy Weather:
```console
gulp production
```
You can show result in **dits/** folder.

### Gulp serve
#### Running demos
All demos are located in the **dist/** folder and this command provides a running environment to watch it:
```console
gulp production
```

Include css file in the head of your page.
```html
<link rel="stylesheet" href="dist/css/styles.css">
```

Add HTML code in the body of your page.
```html
<div id="weather"></div>
```

Include js file in the head or body of your page.
```html
<script src="dist/js/easy-weather.js"></script>
```

Finally you have to initialize weather element in JS.
```html
<script type="text/javascript">
    const weather = new EasyWeather('#weather', {
        key: '1d74efe09d3495016664881f4a09a7ff',
        location: 'London',
        template: 'default'
    });
</script>
```

## Options
**key:** string(null)<br>
OpenWeatherMap API key for your application.

**lang:** string('en')<br>
Plugin support multilingual [Check here](https://openweathermap.org/current#multi).

**code:** integer(null)<br>
Defines the city ID [Check here](http://bulk.openweathermap.org/sample/).

**location:** string(null)<br>
Defines the city name.

**lat:** integer(null)<br>
Defines the latitude.

**lng:** integer(null)<br>
Defines the longitude.

**template:** string(null)<br>
Plugin comes with some different pre-define templates('card' | 'classic' | 'compact' | 'default' | 'full' | 'minimal').

**iconStyle:** string('flat')<br>
Defines the icon styles('flat', 'line').

**description:** boolean(false)<br>
To display the weather description.

**icon:** boolean(true)<br>
Show weather icons.

**iconPath:** string('images/icons/')<br>
Defines the icon path.
__Note: The folder must have flat or line icon folder to display one of them.__

**iconAnimation:** boolean(false)<br>
Defines the icon animation.
__Note: I'll be releasing icon animations in the future.__

**sunTime:** boolean(false)<br>
To display sunset and sunrise.

**today:** boolean(true)<br>
To display today date.

**details:** boolean(false)<br>
To display the weather details.

**forecast:** boolean(false)<br>
To display the weather forecast.

**quarterly:** boolean(false)<br>
To display the weather quarterly.

**units:** object({...})<br>
This object holds weather default units.

**units.temp:** string('c')<br>
Defines the weather temperature units('c' | 'f' | 'K').

**units.wind:** string('mps')<br>
Defines the wind units('km/h' | 'mps').

**units.visibility:** string('km')<br>
Defines the weather visibility units('km' | 'mi').

**title:** object({...})<br>
This object holds weather details title text.

**title.maxTemp:** string('Max')<br>
Holds max temperature text to display.

**title.minTemp:** string('Min')<br>
Holds min temperature text to display.

**title.forecast:** string('Forecast')<br>
Holds forecast text to display.

**title.quarterly:** string('Quarterly')<br>
Holds quarterly text to display.

**title.details:** string('Details')<br>
Holds weather details text to display.

**customTemplate:** function(element, weather)<br>
You can use this function to display your [custom weather](https://devamit0612.github.io/easy-weather/dist/custom.html) template UI.

## License
The MIT License (MIT)