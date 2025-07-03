import React, { useState } from 'react';

export default function App() {

  const weather = [
    {
      id:1,
      name:'서울',
      tem: 27.5,
      weather:'흐림',
    },
    {
      id:2,
      name:'인천',
      tem: 25.2,
      weather:'흐림'
    },
    {
      id:3,
      name:'대구',
      tem:30.3,
      weather:'맑음'
    },
    {
      id:4,
      name:'부산',
      tem:27.1,
      weather:'맑음'
    }
  ]

  return (
    <div>
      {weather.map((a)=>(
        <div key={a.id}  style={{
          border: '1px solid #ccc',
          width: '150px',
          textAlign: 'center'}}>
          <p>{a.name}</p>
          <p>온도: {a.tem}°C</p>
          <p>날씨: {a.weather}</p>
        </div>
      ))}
    </div>
  );
}