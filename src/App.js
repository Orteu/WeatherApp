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
import ForecastExtendedContainer from "./containers/ForecastExtendedContainer";
import LocationListContainer from './containers/LocationListContainer';


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

    render() {
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
                                    <LocationListContainer cities={cities} />
                                </div>
                            </Paper>
                        </Col>
                        <Col  xs={12} md={6}>
                            <Paper zDepth={4}>
                                <div className="weatherDetail">
                                    <ForecastExtendedContainer/>
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