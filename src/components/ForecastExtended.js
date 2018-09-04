import React from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import './style.css';
import CircularProgress from "material-ui/CircularProgress";

const renderDays = (forecastData) =>{
    return forecastData.map( forecast =>
        <div className="dayWeather">
            <ForecastItem
                key={`${forecast.weekDay}${forecast.hour}`}
                weekDay={forecast.weekDay}
                time={forecast.hour}
                data={forecast.data}/>
        </div>
    );
};

const renderProgressCircular = () => {
    return (
        <center>
            <CircularProgress size={50} thickness={4}/>
        </center>
    );
};

const ForecastExtended = ({ city, forecastData }) => (
            <div>
                <div className='forecast_title'>
                    <h2 >Pronóstico para {city} </h2>
                </div>
                <div>
                    {forecastData ?
                        renderDays(forecastData) :
                        renderProgressCircular()
                    }
                </div>
            </div>
);

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array,
};

export default ForecastExtended;