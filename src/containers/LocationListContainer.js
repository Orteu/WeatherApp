import React, {Component} from 'react';
import PropTypes from 'prop-types';
import LocationList from "../components/LocationList";
import { connect } from 'react-redux';
import { setSelectedCity, setWeather } from "../actions";
import {getWeatherCities} from "../reducers";

class LocationListContainer extends Component {

    componentDidMount() {
        this.props.setWeather(this.props.cities);
    }

    handleSelectedLocation = city => {
        this.props.setCity(city);
    };

    render() {
        return (
            <LocationList cities = {this.props.citiesWeather} onSelectedLocation={this.handleSelectedLocation}/>
        );
    }
}

LocationListContainer.propTypes = {
    setCity: PropTypes.func,
    cities: PropTypes.array.isRequired,
    citiesWeather: PropTypes.array,
};

const mapDispatchToProps = dispatch => ({
    setCity: value => dispatch(setSelectedCity(value)),
    setWeather: cities => dispatch(setWeather(cities))
});

const mapStateToProps = state => ({citiesWeather: getWeatherCities(state)});
export default connect(mapStateToProps, mapDispatchToProps)(LocationListContainer);