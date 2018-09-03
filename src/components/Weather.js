import React from 'react';
import './Weather.scss';
import '../assets/css/weather-icons.min.css'

function Weather({idx, temp, weather, week, date, month}) {
    
    let icon='';
    let colorClass = 'weather color-' + idx;

    switch(weather) {
        case 'Thunderstorm': icon='wi wi-thunderstorm'; break;
        case 'Drizzle': icon='wi wi-showers'; break;
        case 'Rain': icon='wi wi-rain'; break;
        case 'Snow': icon='wi wi-snow'; break;
        case 'Atmosphere': icon='wi wi-dust'; break;
        case 'Clear': icon='wi wi-day-sunny'; break;
        case 'Clouds': icon='wi wi-cloud'; break;
        default: icon='wi wi-day-sunny';
    }

    return (
        <div className={colorClass}>
            <div className="top">
                <div className="large">{week}</div>
                <div>{month} {date}</div>
            </div>
            <div className="middle">
                <i className={icon}></i>
            </div>
            <div className="border"></div>
            <div className="bottom">
                <div>{parseInt(temp - 273.15, 10)}&deg;</div>
                <div>{weather}</div>
            </div>
        </div>
    )
}

export default Weather;