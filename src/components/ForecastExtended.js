import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

class ForecastExtended extends Component {

    render() {
        const city = this.props.city;
        return (
            <div className='forecast_title'>
                <h2 >Pronóstico para {city} </h2>
            </div>)

    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
};

export default ForecastExtended;