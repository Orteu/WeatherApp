import React, { Component } from 'react';
import './App.css';
import LocationList from "./components/LocationList";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
        <MuiThemeProvider>
            <div className="App">
                <LocationList/>
            </div>
        </MuiThemeProvider>
    );
  }
}

export default App;
