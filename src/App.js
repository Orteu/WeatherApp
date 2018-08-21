import React, { Component } from 'react';
import './App.css';
import WeatherComponent from "./components/WeatherComponent";


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
