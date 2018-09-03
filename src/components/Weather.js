import React from 'react';
import './Weather.css';
import '../assets/css/weather-icons.min.css'

function Weather({maxTemp, minTemp, temp, weather, week, date, month}) {
    
    let icon='';

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
        <div className="weather">
            <div className="top">
                {week}
                {month}
                {date}
            </div>
            <div className="middle">
                <i className={icon}></i>
                {parseInt(temp - 273.15)}
            </div>
            <div className="bottom">
                {parseInt(minTemp - 273.15)} - {parseInt(maxTemp - 273.15)} 
            </div>
        </div>
    )
}

export default Weather;