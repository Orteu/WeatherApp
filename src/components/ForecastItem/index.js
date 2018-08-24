import React from 'react';
import PropTypes from 'prop-types';
import WeatherExtraInfo from './../WeatherComponent/WeatherExtraInfo';

const ForecastItem = ({ weekDay, time, data }) => (
    <div>
        <div>{weekDay} Hora: {time} h</div>
        <WeatherExtraInfo data={data}/>
    </div>

);

ForecastItem.propTypes = {
    weekDay: PropTypes.string.isRequired,
    time: PropTypes.number,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.number.isRequired,
    })
};

export default ForecastItem;