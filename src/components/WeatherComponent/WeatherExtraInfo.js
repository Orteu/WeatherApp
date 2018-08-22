import React from 'react';
import PropTypes from 'prop-types';
import { cloud, cloudy, rain, snow, sun, windy } from '../../constants/weathers';
import WeatherIcons from "react-weathericons";

const stateToIconName = weatherState => {
    switch (weatherState) {
        case cloud:
            return "cloud";
        case cloudy:
            return "cloudy";
        case sun:
            return "day-sunny";
        case rain:
            return "rain";
        case snow:
            return "snow";
        case windy:
            return "windy";
        default:
            return "day-sunny";
    }
};

const getWeatherIcon = weatherState => {
    return (<WeatherIcons name={stateToIconName(weatherState)} size="2x"/>);
};

const WeatherExtraInfo = ( {data} ) => {
    const { temperature, humidity, weatherState, wind } = data;
    return (
        <div>
            <span>{`${temperature} ºC  `}</span>
            {getWeatherIcon(weatherState)}<br/><br/>
            <span>{`${humidity} % - `}</span>
            <span>{`${wind} m/s `}</span>
        </div>
    );
};

WeatherExtraInfo.propTypes = {
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.number.isRequired,
    })
};

export default WeatherExtraInfo;