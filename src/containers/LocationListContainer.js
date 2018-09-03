import React, {Component} from 'react';
import PropTypes from 'prop-types';
import LocationList from "../components/LocationList";
import { connect } from 'react-redux';
import { setCity } from "../actions";

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
    setCity: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
};

const mapDispatchToProps = dispatch => ({
    dispatchSetCity: value => dispatch(setCity(value))
});

export default connect(null, mapDispatchToProps)(LocationListContainer);