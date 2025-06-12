import React, { useState } from 'react';

function WeatherCard({ city, temperature, weatherState, icon }) {
  return (
    <div>
      <h2>{city}</h2>
      <div>
        <p className="temperature">{temperature}°C</p>
        <p className="weather-state">{weatherState}</p>
      </div>
    </div>
  );
}


export default WeatherCard;