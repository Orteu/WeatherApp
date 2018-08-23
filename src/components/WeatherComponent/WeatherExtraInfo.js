import React from 'react';
import PropTypes from 'prop-types';
import { cloudy, rain, snow, sun, thunder, drizzle } from '../../constants/weathers';
import WeatherIcons from "react-weathericons";
import { FaTint, FaFeather } from 'react-icons/fa';

const stateToIconName = weatherState => {
    switch (weatherState) {
        case cloudy:
            return "cloudy";
        case sun:
            return "day-sunny";
        case rain:
            return "rain";
        case snow:
            return "snow";
        case thunder:
            return "day-thunderstorm";
        case drizzle:
            return "day-showers";
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
            <span>{`${temperature} ºC  `} &nbsp; </span>
            {getWeatherIcon(weatherState)}<br/><br/>
            <span>{`${humidity} % `}</span><FaTint/>
            <span>{` - ${wind} m/s `}</span><FaFeather/>
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