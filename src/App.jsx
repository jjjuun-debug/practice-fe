import React from 'react';
import WeatherCard from './components/BusinessCard';

function App() {
  const weatherData = [
    { city: "서울", temp: 23, condition: "맑음" },
    { city: "부산", temp: 27, condition: "흐림" },
    { city: "대구", temp: 29, condition: "더움" },
    { city: "광주", temp: 25, condition: "비" },
  ];

  return (
    <div style={{ padding: '30px' }}>
      <h1>🌤️ 날씨 카드</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {weatherData.map((item, index) => (
          <WeatherCard
            key={index}
            city={item.city}
            temp={item.temp}
            condition={item.condition}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
