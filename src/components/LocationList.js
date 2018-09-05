import React from 'react';
import PropTypes from 'prop-types';
import WeatherComponent from "./WeatherComponent";
import './style.css';

const LocationList = ({ cities, onSelectedLocation }) => {
    const handleWeatherLocationClick = city => {
      onSelectedLocation(city);
    };
    const strToComponent = cities => (
        cities.map( city => (
            <WeatherComponent
                key={city.key}
                city={city.name}
                onWeatherLocationClick={() => handleWeatherLocationClick(city.name)}
                data={city.data}
            />
        ))
    );

    return(
        <div className="locationList">
            {strToComponent(cities)}
        </div>
    );
};

LocationList.propTypes = {
    cities: PropTypes.array,
    onSelectedLocation: PropTypes.func,
};

export default LocationList;