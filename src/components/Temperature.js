import React from 'react';
import WeatherIcons from 'react-weathericons';
import { cloud, cloudy, rain, snow, sun, windy } from './../constants/weathers';
import PropTypes from 'prop-types';

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

const Temperature = ({ temperature, weatherState }) => (
    <div>
        {getWeatherIcon(weatherState)}
        <span>{`${temperature} ºC`}</span>
    </div>
);

//Usando PropTypes sobre un elemento
Temperature.propTypes = {
  temperature: PropTypes.number,
  weatherState: PropTypes.string
};

export default Temperature;