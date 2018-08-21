import React from 'react';
import Temperature from './Temperature';
import { cloud, cloudy, rain, snow, sun, windy } from './../constants/weathers';

const WeatherExtraInfo = ( {humidity, wind} ) => (
    <div>
        <Temperature temperature={28} weatherState={sun}/>
        <span>{`${humidity} % - `}</span>
        <span>{`${wind} m/s `}</span>
    </div>
);

export default WeatherExtraInfo;