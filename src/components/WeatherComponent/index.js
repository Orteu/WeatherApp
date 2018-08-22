import React from 'react';
import Location from './Location';
import WeatherExtraInfo from './WeatherExtraInfo';
import './style.css';

const location = "Palma de Mallorca,es";
const api_key = "44fa2ff95e24fb821c0288b95d45a743";
const api_url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}`;

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

    refreshWeather = () => {
        fetch(api_url);
        // this.setState({
        //     data: data2
        // });
        console.log("Weather updated");
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