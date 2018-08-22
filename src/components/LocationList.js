import React from 'react';
import WeatherComponent from "./WeatherComponent";

const LocationList = () => (
  <div>
      <WeatherComponent city={"Palma de Mallorca"}/>
      <WeatherComponent city={"Manchester"}/>
      <WeatherComponent city={"New York"}/>
      <WeatherComponent city={"Zurich"}/>

  </div>
);

export default LocationList;