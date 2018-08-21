import React, { Component } from 'react';
import './App.css';
import WeatherComponent from "./components/WeatherComponent/index";

class App extends Component {
  render() {
    return (
      <div className="App">
        <WeatherComponent/>
      </div>
    );
  }
}

export default App;
