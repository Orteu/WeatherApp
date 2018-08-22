import { sun } from './../constants/weathers';


const getWeatherState = weather => {
    return sun;
};

const transformWeather = weather_data => {
    const { humidity, temp } = weather_data.main;
    const { speed } = weather_data.wind;
    const weatherState = getWeatherState(this.weather);

    const data = {
        humidity,
        temperature: temp,
        wind: speed,
        weatherState
    };
    return data;
};

export default transformWeather;