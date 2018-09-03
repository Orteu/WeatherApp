import {createStore, applyMiddleware, compose} from "redux";
import thunk from 'redux-thunk';
import reducers from './../reducers'

// InicialState of the App
const initialState = {
    city: 'Palma de Mallorca'
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducers , initialState, composeEnhancers(applyMiddleware(thunk)));