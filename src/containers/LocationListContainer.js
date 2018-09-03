import React, {Component} from 'react';
import PropTypes from 'prop-types';
import LocationList from "../components/LocationList";
import { connect } from 'react-redux';
import { setSelectedCity } from "../actions";

class LocationListContainer extends Component {
    handleSelectedLocation = city => {
        this.setState({ city });
        this.props.dispatchSetCity(city);
    };

    render() {
        return (
            <LocationList cities = {this.props.cities} onSelectedLocation={this.handleSelectedLocation}/>
        );
    }
}

LocationListContainer.propTypes = {
    setSelectedCity: PropTypes.func,
    cities: PropTypes.array.isRequired,
};

const mapDispatchToProps = dispatch => ({
    dispatchSetCity: value => dispatch(setSelectedCity(value))
});

export default connect(null, mapDispatchToProps)(LocationListContainer);