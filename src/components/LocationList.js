import React from 'react';
import PropTypes from 'prop-types';
import WeatherComponent from "./WeatherComponent";

const LocationList = ({ cities, onSelectedLocation }) => {
    const handleWeatherLocationClick = city => {
        console.log("handleWeatherLocationClick");
      onSelectedLocation(city);
    };
    const strToComponent = cities => (
        cities.map( city => (
            <WeatherComponent
                key={city}
                city={city}
                onWeatherLocationClick={() => handleWeatherLocationClick(city)}
            />
        ))
    );

    return(
        <div>
            {strToComponent(cities)}
        </div>
    );
};

LocationList.propTypes = {
    cities: PropTypes.array,
    onSelectedLocation: PropTypes.func,
};

export default LocationList;