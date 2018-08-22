import React from 'react';
import PropTypes from 'prop-types';
import WeatherComponent from "./WeatherComponent";

const strToComponent = cities => (
    cities.map( city => (<WeatherComponent key={city} city={city}/>))
);

const LocationList = ({ cities }) => (
  <div>
     {strToComponent(cities)}
  </div>
);

LocationList.propTypes = {
    cities: PropTypes.array,
};

export default LocationList;