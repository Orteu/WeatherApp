import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './App.css';
import LocationList from "./components/LocationList";

const cities = ["Palma de Mallorca", "Manchester", "New York", "Zagreb"];

class App extends Component {
    handleSelectedLocation = city => {
        console.log(`handleSelectedLocation ${city}`);
    };
    render() {
        return (
            <MuiThemeProvider>
                <Grid>
                    <Row>
                        <Col xs={12} md={6}>
                            <LocationList cities = {cities} onSelectedLocation={this.handleSelectedLocation}/>
                        </Col>
                        <Col  xs={12} md={6}>
                            <div className="weatherDetail"></div>
                        </Col>
                    </Row>
                </Grid>
            </MuiThemeProvider>
        );
    }
}

export default App;
