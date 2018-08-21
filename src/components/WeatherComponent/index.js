import React from 'react';
import Location from './Location';
import WeatherExtraInfo from './WeatherExtraInfo';
import './style.css';

const Index = () => (
    <div className="container">
        <Location city={"Palma"}></Location>
        <WeatherExtraInfo humidity={80} wind={10}/>
    </div>
);

export default Index;