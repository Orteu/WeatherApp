import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import './style.css';
import CircularProgress from "material-ui/CircularProgress";

/*
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
*/
class ForecastExtended extends Component {

    constructor(){
        super();
        this.state = {
            forecastData : null
        }
    }

    renderDays = () =>{
        /*return weekDaysList.map( day =>
            <div className="dayWeather">
                <ForecastItem weekDay={day} time={10} data={data}/>
            </div>
        );*/
        return ("Render items");
    };

    renderProgressCircular = () => {
        return (
            <center>
                <CircularProgress size={50} thickness={4}/>
            </center>
        );
    };

    render() {
        const city = this.props.city;
        const { forecastData } = this.state;
        return (
            <div>
                <div className='forecast_title'>
                    <h2 >Pronóstico para {city} </h2>
                </div>
                <div>
                    {forecastData ?
                        this.renderDays() :
                        this.renderProgressCircular()
                    }
                </div>
            </div>

        );
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
};

export default ForecastExtended;