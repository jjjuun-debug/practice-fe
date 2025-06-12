import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WeatherCard from "./components/day9/WeatherCard.jsx"

const weatherData = [
  {
    id: 1,
    city: '서울',
    temperature: 25,
    weatherState: '맑음',
  },
  {
    id: 3,
    city: '도쿄',
    temperature: 26,
    weatherState: '흐림',
  },
];

function App() {
  return (
    <div className="App">
      <h1>날씨 카드 컴포넌트</h1>
      <div>
        {weatherData.map((data) => (
          <WeatherCard
            key={data.id}
            city={data.city}
            temperature={data.temperature}
            weatherState={data.weatherState}
          />
        ))}
      </div>
    </div>
  );
}

export default App;