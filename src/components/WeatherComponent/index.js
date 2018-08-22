import React from 'react';
import Location from './Location';
import WeatherExtraInfo from './WeatherExtraInfo';
import './style.css';

const data = {
    temperature: 20,
    humidity: 10,
    wind: 10,
    weatherState: 'cloudy'
};

const data2 = {
    temperature: 30,
    humidity: 20,
    wind: 5,
    weatherState: 'sun'
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
        this.setState({
            data: data2
        });
        console.log("Weather updated");
    };

    render () {
        const { city, data } = this.state;
        return(
            <div className="container">
                <Location city={city}/>
                <WeatherExtraInfo data={data}/>
                <button onClick={this.refreshWeather}>Refresh</button>
            </div>
        );
    }
}

export default WeatherComponent;