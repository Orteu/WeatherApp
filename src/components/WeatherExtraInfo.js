import React from 'react';
import Temperature from './Temperature';
import PropTypes from 'prop-types';
import { cloud, cloudy, rain, snow, sun, windy } from './../constants/weathers';

const WeatherExtraInfo = ( {humidity, wind} ) => (
    <div>
        <Temperature temperature={28} weatherState={sun}/>
        <span>{`${humidity} % - `}</span>
        <span>{`${wind} m/s `}</span>
    </div>
);

WeatherExtraInfo.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired
};

export default WeatherExtraInfo;