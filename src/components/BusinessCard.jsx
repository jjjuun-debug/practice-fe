import React from 'react';

function WeatherCard({ city, temp, condition }) {
  return (
    <div style={{
      border: '1px solid lightgray',
      borderRadius: '10px',
      padding: '20px',
      margin: '10px',
      width: '200px',
      backgroundColor: '#f0f8ff'
    }}>
      <h2>{city}</h2>
      <p>온도: {temp}°C</p>
      <p>날씨: {condition}</p>
    </div>
  );
}

export default WeatherCard;
