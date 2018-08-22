import React, { Component } from 'react';
import './App.css';
import LocationList from "./components/LocationList";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const cities = ["Palma de Mallorca", "Manchester", "New York"];

class App extends Component {
  render() {
    return (
        <MuiThemeProvider>
            <div className="App">
                <LocationList cities = {cities} />
            </div>
        </MuiThemeProvider>
    );
  }
}

export default App;
