import { cloudy, rain, snow, sun, thunder, drizzle } from '../constants/weathers';


const getWeatherState = weather => {
    const { id } = weather[0];
    if(id < 300){
        return thunder;
    }else if(id < 400){
        return drizzle;
    }else if(id < 600){
        return rain;
    }else if(id < 700){
        return snow;
    }else if(id === 800){
        return sun;
    }else{
        return cloudy;
    }
};

const transformWeather = weather_data => {
    const { weather } = weather_data;
    const { humidity, temp } = weather_data.main;
    const { speed } = weather_data.wind;
    const weatherState = getWeatherState(weather);

    const data = {
        humidity,
        temperature: temp,
        wind: speed,
        weatherState
    };
    return data;
};

export default transformWeather;