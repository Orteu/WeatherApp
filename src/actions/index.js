import transformForecast from "../services/transformForecast";

export const SET_CITY = "SET_CITY";
export const SET_FORECAST_DATA = "SET_FORECAST_DATA";

const setCity = payload => ({ type: SET_CITY, payload });
const setForecastData = payload => ({ type: SET_FORECAST_DATA, payload });

const api_key = "44fa2ff95e24fb821c0288b95d45a743";
const url = `https://api.openweathermap.org/data/2.5/forecast`;


//Action creator using MiddleWares
export const setSelectedCity = payload => {
    return dispatch => {
        const url_forecast = `${url}?q=${payload}&appid=${api_key}&units=metric`;
        // activar en el estado un indicador de búsqueda de datos
        dispatch(setCity(payload));
        return fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                const forecastData = transformForecast(weather_data);
                console.log(forecastData);
                // modificar el estado con el resultado de la promise (fetch)
                dispatch(setForecastData({ city: payload, forecastData }));
            }
        );
    };
};