// Imports from external libraries
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import { Grid, Row, Col } from 'react-flexbox-grid';
import * as Colors from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// Import from own app
import './App.css';
import LocationList from "./components/LocationList";
import ForecastExtended from "./components/ForecastExtended";
import { setCity } from "./actions";
import { store } from "./store";


// Cities Array while we can't get them from user
const cities = ["Palma de Mallorca", "Manchester", "New York", "Zagreb"];

// AppBar Settings
const muiTheme = getMuiTheme({
    palette: {
        primary1Color: Colors.darkBlack,
        alternateTextColor: Colors.white
    }
});

class App extends Component {

    constructor(){
        super();
        this.state = {
            city: null
        }
    }

    handleSelectedLocation = city => {
        this.setState({ city });
        store.dispatch(setCity(city));
    };
    render() {
        const {city} = this.state;
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <Grid>
                    <Row>
                        <Col xs={12}>
                            <AppBar title="My Weather App" color={"black"} />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={6}>
                            <Paper zDepth={4}>
                                <div className="Locations">
                                    <LocationList cities = {cities} onSelectedLocation={this.handleSelectedLocation}/>
                                </div>
                            </Paper>
                        </Col>
                        <Col  xs={12} md={6}>
                            <Paper zDepth={4}>
                                <div className="weatherDetail">
                                    {
                                        !city ?
                                            <h2>Selecciona una ciudad</h2>:
                                            <ForecastExtended city={ city }/>
                                    }
                                </div>
                            </Paper>
                        </Col>
                    </Row>
                </Grid>
            </MuiThemeProvider>
        );
    }
}

export default App;
