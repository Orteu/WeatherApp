import React from 'react';
import WeatherComponent from "./WeatherComponent";

const LocationList = () => (
  <div>
      <WeatherComponent city={"Palma"}/>
      <WeatherComponent city={"Manchester"}/>
      <WeatherComponent city={"New York"}/>
      <WeatherComponent city={"Zagreb"}/>

  </div>
);

export default LocationList;