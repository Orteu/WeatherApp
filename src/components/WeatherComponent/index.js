import React from 'react';
import Location from './Location';
import WeatherExtraInfo from './WeatherExtraInfo';
import './style.css';

const WeatherComponent = () => (
    <div className="container">
        <Location city={"Palma"} />
        <WeatherExtraInfo humidity={80} wind={10} temperature={28}/>
    </div>
);

export default WeatherComponent;