import React from 'react';
import Location from './Location';
import WeatherExtraInfo from './WeatherExtraInfo';
import './style.css';

const WeatherComponent = () => {
    const data = {
        temperature: 20,
        humidity: 10,
        wind: 10,
        weatherState: 'cloudy'
    };
    return(
        <div className="container">
            <Location city={"Palma"}/>
            <WeatherExtraInfo data={data}/>
        </div>
    );
};

export default WeatherComponent;