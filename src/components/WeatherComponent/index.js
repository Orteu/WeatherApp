import React from 'react';
import Location from './Location';
import WeatherExtraInfo from './WeatherExtraInfo';
import { sun } from './../../constants/weathers'
import './style.css';

const location = "Palma de Mallorca,es";
const api_key = "44fa2ff95e24fb821c0288b95d45a743";
const api_url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}&units=metric`;

const data = {
    temperature: 20,
    humidity: 10,
    wind: 10,
    weatherState: 'cloudy'
};

class WeatherComponent extends React.Component {

    constructor(){
        super();
        this.state = {
            city: "Miami",
            data: data
        }
    }

    getWeatherState = weather => {
        return sun;
    };

    getData = weather_data => {
        const { humidity, temp } = weather_data.main;
        const { speed } = weather_data.wind;
        const weatherState = this.getWeatherState(this.weather);

        const data = {
            humidity,
            temperature: temp,
            wind: speed,
            weatherState
        };
        return data;
    };

    refreshWeather = () => {
        fetch(api_url).then( data => {
            return data.json();
        }).then( weather_data => {
            debugger;
            const data = this.getData(weather_data);
            this.setState({ data })
        });
    };

    render () {
        const { city, data } = this.state;
        return(
            <div className="container">
                <Location city={city}/>
                <WeatherExtraInfo data={data}/><br/>
                <button onClick={this.refreshWeather}>Refresh</button>
            </div>
        );
    }
}

export default WeatherComponent;