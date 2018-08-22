import React, { Component } from 'react';
import './App.css';
import LocationList from "./components/LocationList";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const cities = ["Palma de Mallorca", "Manchester", "New York"];

class App extends Component {
    handleSelectedLocation = city => {
        console.log(city);
    };
    render() {
        return (
            <MuiThemeProvider>
                <div className="App">
                    <LocationList cities = {cities}
                    onSelectedLocation={this.handleSelectedLocation}/>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
