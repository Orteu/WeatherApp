import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import './style.css';
import CircularProgress from "material-ui/CircularProgress";
import transformWeather from "../services/transformWeather";
import transformForecast from "../services/transformForecast";

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

const api_key = "44fa2ff95e24fb821c0288b95d45a743";
const url = `http://api.openweathermap.org/data/2.5/forecast`;

class ForecastExtended extends Component {

    constructor(){
        super();
        this.state = {
            forecastData : null
        }
    }

    componentDidMount() {
        const url_forecast = `${url}?q=${this.props.city}&appid=${api_key}`;
        fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                console.log(weather_data);
                const forecastData = transformForecast(weather_data);
                console.log(forecastData);
                this.setState({forecastData });
            }
        );
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