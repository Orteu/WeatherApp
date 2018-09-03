import {createStore} from "redux";
import { city } from './../reducers/city';

// InicialState of the App
const initialState = {
    city: 'Palma de Mallorca'
};

export const store = createStore(city , initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);