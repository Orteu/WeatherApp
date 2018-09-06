import React from 'react';
import PropTypes from 'prop-types';
import Location from './Location';
import WeatherExtraInfo from './WeatherExtraInfo';
import './style.css';
import CircularProgress from 'material-ui/CircularProgress';

const WeatherComponent = ({ onWeatherLocationClick, data, city }) => (
    <div className="contenedor" onClick={onWeatherLocationClick}>
        <Location city={city}/>
        {data ? <WeatherExtraInfo data={data}/> :
            <CircularProgress size={50} thickness={4}/>}<br/>
    </div>
);

WeatherComponent.propTypes = {
    city: PropTypes.string,
    onWeatherLocationClick: PropTypes.func,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.number.isRequired,
    }),
};

export default WeatherComponent;