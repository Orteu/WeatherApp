import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import './style.css';

const weekDaysList = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
    'Domingo'
];

const data = {
    humidity: 10,
    temperature: 25,
    wind: 10
};

class ForecastExtended extends Component {

    renderDays = () =>{
        return weekDaysList.map( day =>
            <div className="dayWeather">
                <ForecastItem weekDay={day} time={10} data={data}/>
            </div>
        );
    };

    render() {
        const city = this.props.city;
        return (
            <div>
                <div className='forecast_title'>
                    <h2 >Pronóstico para {city} </h2>
                </div>
                <div>
                    {this.renderDays()}
                </div>
            </div>

        );
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
};

export default ForecastExtended;