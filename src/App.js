import React, { Component } from 'react';
import './App.css';
import WeatherComponent from "./components/WeatherComponent/index";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
        <MuiThemeProvider>
            <div className="App">
                <WeatherComponent/>
            </div>
        </MuiThemeProvider>
    );
  }
}

export default App;
