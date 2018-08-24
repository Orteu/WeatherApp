import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import './style.css';
import CircularProgress from "material-ui/CircularProgress";
import transformWeather from "../services/transformWeather";
import transformForecast from "../services/transformForecast";

const api_key = "44fa2ff95e24fb821c0288b95d45a743";
const url = `http://api.openweathermap.org/data/2.5/forecast`;

class ForecastExtended extends Component {

    constructor(){
        super();
        this.state = {
            forecastData : null
        }
    }

    updateCity = city => {
        const url_forecast = `${url}?q=${this.props.city}&appid=${api_key}&units=metric`;
        fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                const forecastData = transformForecast(weather_data);
                this.setState({forecastData });
            }
        );
    };

    componentDidMount() {
        this.updateCity(this.props.city);
    }

     componentWillReceiveProps(nextProps) {
        if(nextProps.city !== this.props.city){
            this.updateCity(nextProps.city);
        }
     }

    renderDays = (forecastData) =>{
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
                        this.renderDays(forecastData) :
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