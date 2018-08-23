import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Location from './Location';
import WeatherExtraInfo from './WeatherExtraInfo';
import './style.css';
import transformWeather from './../../services/transformWeather';
import CircularProgress from 'material-ui/CircularProgress';

const api_key = "44fa2ff95e24fb821c0288b95d45a743";

class WeatherComponent extends Component {
    constructor({ city }){
        super();
        this.state = {
            city,
            data: null
        }
    }

    componentWillMount() {
        const {city} = this.state;
        const api_url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
        fetch(api_url).then( data => {
            return data.json();
        }).then( weather_data => {
            const data = transformWeather(weather_data);
            this.setState({ data })
        });
    }

    render () {
        const { city, data } = this.state;
        const { onWeatherLocationClick } = this.props;
        return(
            <div className="contenedor" onClick={onWeatherLocationClick}>
                <Location city={city}/>
                {data ? <WeatherExtraInfo data={data}/> :
                        <CircularProgress size={50} thickness={4}/>}<br/>
            </div>
        );
    }
}

WeatherComponent.propTypes = {
    city: PropTypes.string,
    onWeatherLocationClick: PropTypes.func,
};

export default WeatherComponent;