import React from 'react';
import Location from './Location';
import WeatherExtraInfo from './WeatherExtraInfo';

const WeatherComponent = () => (
    <div>
        <Location city={"Palma"}></Location>
        <WeatherExtraInfo humidity={80} wind={10}/>
    </div>
);

export default WeatherComponent;